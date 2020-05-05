var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/myEmployee',{useNewUrlParser:true ,useUnifiedTopology: true})
var conn = mongoose.connection     //is a javaScript promise


// const shouldn't be used in schema
var Schema = mongoose.Schema

var employeeSchema = new Schema({
    name: String,
    email:String,
    etype:String,
    hourlyRate: Number,
    totalHours: Number,
    total: Number
    
})
var employeeModel = mongoose.model('Employee', employeeSchema); // Creating a model to work on this schema

module.exports = employeeModel ;

