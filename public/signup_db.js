var con = require('./con_db')




function insert(req, res, next) {
  
var {name, surname,email,password,dob,gender,uni,los,faculty,yos} = req.body
console.log(req.body)

con.connect(function(err){
   // if(err) throw err;
var insert 
= "INSERT INTO userinfo (name, surname,email,password,dob,gender,uni,los,faculty,yos) VALUES"+
"('"+name+"', '"+surname+"','"+email+"','"+password+"','"+dob+"','"+gender+"','"+uni+"','"+los+"','"+faculty+"','"+yos+"')"
    con.query(insert,function(err){
        if(err) throw err;
        console.log("successful")
    } )
})

var {email} = req.body
     con.connect(function(err){

        var select = "SELECT * FROM userinfo WHERE email = '" +email+"'"
        con.query(select, function(err,result){
            if(err) throw err;

            console.log(result)

            res.send( result)
        })

      })

next()
}

/*function userId(req, res, next){
    console.log('fetch')
    var {email} = req.body
     con.connect(function(err){

        var select = "SELECT * FROM userinfo WHERE email = '" +email+"'"
        con.query(select, function(err,result){
            if(err) throw err;

            console.log(result)

            res.send( result)
        })
     })


  
} */

module.exports = insert

