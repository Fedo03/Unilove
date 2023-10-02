var un = document.querySelector('.un')
var us = document.querySelector('.us')
var ue = document.querySelector('.ue')
var up = document.querySelector('.up')
var ud = document.querySelector('.ud')
var ug = document.querySelector('.ug')
var uU = document.querySelector('.uU')
var ulos = document.querySelector('.ulos')
var uf = document.querySelector('.uf')
var uy = document.querySelector('.uy')
var sub = document.querySelector('#sub')


sub.addEventListener('click', function(){
   var name = un.value 
   var surname = us.value 
   var email = ue.value 
   var password = up.value 
   var dob = ud.value
   var gender = ug.options[ug.selectedIndex].text
   var uni = uU.options[uU.selectedIndex].text
   var yos = uy.options[uy.selectedIndex].text
   var los = ulos.options[ulos.selectedIndex].text
   var faculty = uf.options[uf.selectedIndex].text
 
    
  var  data = {
        name,
        surname,
        email,
        password,
        gender,
        dob,
        uni,
        los,
        faculty,
        yos
       
    }

    console.log(data)
     
     
     
     var sendData = {
        method : 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        body : JSON.stringify(data)
     }

     fetch('/signup', sendData).then(function(res){
      return res.json()
     }).then(function(data){
  console.log(data[0].userId)
        window.location.href = 'http://localhost:3002/prefer?userId='+data[0].userId+'';
})

})
