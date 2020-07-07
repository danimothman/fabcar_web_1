var express = require('express')
var app = express()
var path  = require('path')
var fs = require('fs')
var bodyParser = require('body-parser')
var cors = require('cors')
var mongoose = require('mongoose')
require('dotenv').config()


var MONGO_URL = process.env.MONGO_URL
mongoose.connect()
var apiRouter  = require('./routes/Router')

// view template  setting
app.set('views', path.resolve(__dirname+'/views'))
app.set('view engine' , 'ejs')


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
//cors 설정
app.use(cors())

//routing file 등록
app.use('/', apiRouter)


var port = process.env.PORT || 3000
app.listen(port , ()=>{
    console.log(`Server is Starting at http://localhost:${port}`)
})