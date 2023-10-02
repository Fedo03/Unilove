var express = require('express')
var path = require('path')
var insert = require('./public/signup_db')
//var userId = require('./public/signup_db')
var login = require("./public/login_db")
var prefer = require('./public/prefer_db')
var con = require('./public/con_db.js')
var ul = express()




ul.use(express.json())
ul.use(express.static('./public'))






ul.get('/signup', function(req,res){
   res.sendFile(path.resolve(__dirname + '/public/sign_up.html'))
})

ul.post('/signup', insert /*, userId */ ,function(req,res){
   console.log(req.body)
  
})



ul.get('/prefer?', function(req,res){
   console.log(req.query)
   res.sendFile(path.resolve(__dirname + '/public/prefer.html'))
})

ul.post('/prefer?',prefer, function(req,res){
   console.log(req.query)
   
  

})


ul.get('/login', function(res,req){

res.sendFile(path.resolve(__dirname + "/puplic/login.html"))

})

ul.post("/login", login ,function(req,res){
   var varified = true
    res.send(varified)
})






ul.listen(3002, function() {
   console.log("http://localhost:3002/")
})