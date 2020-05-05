const express = require('express')
const router = express.Router()
const controller = require('./controllers/controller')
// Home pahe route
router.get('/',controller.renderHomePage )

router.post('/',controller.postData)
// Filter route
router.post('/search',controller.filterData)
module.exports = router

//Delete
router.get('/delete/:id',controller.deleteData)

//Edit
router.get('/edit/:id',controller.editData)