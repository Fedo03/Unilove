var con = require('./public/con_db')


function login(req,res,next){
 console.log(req.body)
 var {ne, ps} = req.body

 con.connect(function(err){
    if(err) throw err;
     
    var select = "SELECT * FROM userinfo WHERE password ="+ ps +" AND (email = "+ne+"OR name = "+ne+") "
    con.query(select, function(err,result){
        if (err) throw err ;
        console.log(result)
        if(result) {
            next()
        }
    })
 })



}

module.exports = login