var express = require('express')
var empModel = require('../model/Employee')
var employee = empModel.find({})
exports.renderHomePage = (req,res,next)=>
{
    employee.exec(function(err,data){
        if (err) throw err    
        res.render("index",{ app:'Welcome to Employee Management App', records:data})
    })
    
}

exports.postData = (req,res,next)=>
{
   var empDetails = new empModel({
       name: req.body.name,
       email: req.body.email,
       etype: req.body.etype,
       hourlyRate: req.body.hourlyRate,
       totalHours: req.body.totalHours  ,
       total: parseInt(req.body.hourlyRate) * parseInt(req.body.totalHours)
   })
   empDetails.save(function(){
    employee.exec(function(err,data){
        if (err) throw err;
        res.render("index",{ app:'Welcome to Employee Management Application', records:data}) 
        })
   })
    
     
}

// Filter  Data


exports.filterData = (req,res,next)=>
{
   
     var  fltrname = req.body.fltrname
     var  fltremail= req.body.fltremail
     var  flrtetype= req.body.fltretype;
    
     if(fltrname != '' && fltremail!='' && flrtetype != '') {
        fltrParameter = { $and : [{name:fltrname},
        { $and: [{email:fltremail},{etype:flrtetype}]}]  }
     } else if(fltrname == '' && fltremail !='' && flrtetype != '') {
        fltrParameter = { $and: [{email:fltremail},{etype:flrtetype}]}
     } else if(fltrname != '' && fltremail=='' && flrtetype != '') {
        fltrParameter = { $and: [{name:fltrname},{etype:flrtetype}]}
     } else {
          fltrParameter = {}
     }
     console.log(fltrParameter)
     var empFilter = empModel.find(fltrParameter)
    empFilter.exec(function(err,data){
        if (err) throw err;
        res.render("index",{ app:'Welcome to', records:data}) 
        })
     
}


//Delete

exports.deleteData = (req,res,next)=>
{
    var id = req.params.id;
        var dlt = empModel.findByIdAndDelete(id);
    dlt.exec(function(err,data){
        if (err) throw err;
        res.redirect('/')
    })
    
}

exports.editData = (req,res,next)=>{
    var id = req.params.id;
    var edit = empModel.findByIdAndUpdate(id);
    edit.exec(function(err,data){
        if(err) throw err;
        res.render('edit',{app: "welcome to update section"})
    })
}
