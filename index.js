const express = require("express")
var bodyParser = require('body-parser')

const app = express()
const router = require('./router')
//.....................................require files..............//

app.set('view engine', 'ejs')






// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/',router)
app.listen(3000,()=>console.log("App is running on port : 3000"))