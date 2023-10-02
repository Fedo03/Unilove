var con = require('./con_db')


function prefer(req,res,next){
    console.log(req.query)
    var {gender1,gender2,uni1,uni2,uni3,faculty1,faculty2,faculty3} = req.body

      var {userId} = req.query
      console.log(userId)
    con.connect(function(err){
        if (err) throw err;
        var select = "INSERT INTO userprefer (gender1,gender2,uni1,uni2,uni3,faculty1,faculty2,faculty3,userId) VALUES " +
        "('"+gender1+"','"+gender2+"','"+uni1+"','"+uni2+"','"+uni3+"','"+faculty1+"','"+faculty2+"','"+faculty3+"','"+userId+"')"


        con.query(select, function(err){
            if (err) throw err;
            console.log("preference inserted")
        })

}) 
next()
}

module.exports = prefer