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

   var joinUser = "SELECT userInfo.userId , userInfo.uni , userprefer.uni1 FROM userInfo INNER JOIN userprefer ON userInfo.userId = userprefer.userId WHERE userInfo.userId = ?"
     var [joinResults] = await connection.query(joinUser, [userId])
   

     var {uni , uni1}= joinResults[0]
      console.log(uni)
     var joinPro = "SELECT profile.picname , userInfo.name, userInfo.uni FROM userInfo INNER JOIN profile ON userInfo.userId = profile.userId WHERE userInfo.uni = ? OR userInfo.uni = ?"
        var [preferedResults] = await connection.query(joinPro,[uni,uni1] )
        console.log(preferedResults)
         res.send(preferedResults)
  
 next()
}


//async function picUp(r)

module.exports = { insert : insert,
                   prefer : prefer,
                   login : login ,
                   picD : picD,  
                }  



 