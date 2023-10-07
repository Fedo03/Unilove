var con = require('./con_db')




async function insert(req, res, next) {
  
var {name, surname,email,password,dob,gender,uni,los,faculty,yos} = req.body

var connection =  await con.getConnection() 
    
   var insertQuery = `INSERT INTO userinfo (name, surname, email, password, dob, gender, uni, los, faculty, yos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
   await connection.query(insertQuery, [name, surname, email, password, dob, gender, uni, los, faculty, yos]);
   
   console.log("Data insertion successful");

var {email} = req.body
    
    var selectQuery = "SELECT * FROM userinfo WHERE email = ?";
    const [results] = await connection.query(selectQuery, [email]); 
console.log(results)
res.send( results)
            
next()
     
}



async function prefer(req,res,next){
    console.log(req.query)
    var {gender1,gender2,uni1,uni2,uni3,faculty1,faculty2,faculty3} = req.body

      var {userId} = req.query
      console.log(userId)
     var connection = await  con.getConnection()
        
        var select = "INSERT INTO userprefer (gender1,gender2,uni1,uni2,uni3,faculty1,faculty2,faculty3,userId) VALUES (?, ?, ?, ?, ?, ?, ?,?,?)"
      await  connection.query(select,[gender1,gender2,uni1,uni2,uni3,faculty1,faculty2,faculty3,userId])
           console.log("inserted")
            next()
        }


async function login(req, res, next){
  console.log(req.body)
  var {ne, ps} = req.body

    
  var connection = await con.getConnection()

  var select = "SELECT * FROM userinfo WHERE password = ? AND (email =  ? OR name = ?)" 
     
  var [results] = await connection.query(select,[ps , ne , ne] )
  console.log(results[0].userId)
  res.send(results[0].userId)
    next()
}


async function picD(req,res, next){

  var {userId} = req.query
  
  var connection =  await con.getConnection()

  var select = "SELECT * FROM userprefer WHERE userId = ? "
 var [results] = await connection.query(select, userId)
  var {uni,uni1,uni2} = results[0]

 var check = "SELECT * FROM userInfo WHERE uni =? OR uni =? OR uni =?"
 var [results] = await connection.query(check,[uni,uni1,uni2])

    res.send(results)
}

module.exports = { insert : insert,
                   prefer : prefer,
                   login : login ,
                   picD : picD,
                }  



 