var express = require('express')
var path = require('path')
var uploads = require('./public/upload_m')
var formidable = require('formidable')
var fs = require('fs')
var dataBase = require('./public/dataBase')
var con = require('./public/con_db.js')
var ul = express()


ul.use(express.json({ limit: '10mb' }));
ul.use(express.urlencoded({ extended: true, limit: '10mb' }));

ul.use(express.json())
ul.use(express.static('./public'))



ul.use(express.static('uploads'));





ul.get('/uploads', function(req,res){
   res.sendFile(path.resolve(__dirname + '/public/upload.html'))
})

ul.post('/uploads',uploads.single('image'), function(req,res){
   console.log('file uploaded')
   console.log(req.file)
   
   
   var {filename, path} = req.file
  
   console.log(filename)
   console.log(path)

    var pat = "what"
   con.getConnection(async (connection) => {
      var insertpic = "INSERT INTO profile (picname, picpath) VALUES (?, ?)";
      await connection.query(insertpic, [filename, path]);
      
        var uploaded =  true
        
    } )
    res.redirect('/')
   })

     
  






ul.get('/signup', function(req,res){
   res.sendFile(path.resolve(__dirname + '/public/sign_up.html'))
})

ul.post('/signup', dataBase.insert  ,function(req,res){
  // console.log(req.body)
  console.log("done")
})



ul.get('/prefer?', function(req,res){
   console.log(req.query)
   res.sendFile(path.resolve(__dirname + '/public/prefer.html'))
})

ul.post('/prefer?', dataBase.prefer, function(req,res){
   console.log(req.query)
 var {userId} = req.query
   res.redirect('/uploads?userId='+ userId)
  

})


ul.get('/login', function(req,res){

res.sendFile(path.resolve(__dirname + "/public/login.html"))

})

ul.post("/login", dataBase.login ,function(req,res){
   var varified = true
    res.send(varified)
})


ul.get("/", function(req,res){
   res.sendFile(path.resolve(__dirname + "/public/home.html"))
})



ul.listen(3002, function() {
   console.log("http://localhost:3002/")
})