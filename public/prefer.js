var pu1 = document.querySelector('.pu1')
var pu2 = document.querySelector('.pu2')
var pu3 = document.querySelector('.pu3')
var pg1 = document.querySelector('.pg1')
var pg2 = document.querySelector('.pg2')
var pf1 = document.querySelector('.pf1')
var pf2 = document.querySelector('.pf2')
var pf3 = document.querySelector('.pf3')
var sub = document.querySelector('#subm')


let params = (new URL(document.location)).searchParams;
let userId = params.get("userId");
console.log(userId)

sub.addEventListener('click', function(){


    var uni1 = pu1.options[pu1.selectedIndex].text
   var uni2 = pu2.options[pu2.selectedIndex].text
   var uni3 = pu3.options[pu3.selectedIndex].text
   var faculty1 = pf1.options[pf1.selectedIndex].text
   var faculty2 = pf2.options[pf2.selectedIndex].text
   var faculty3 = pf3.options[pf3.selectedIndex].text
   var gender1 = pg1.options[pg1.selectedIndex].text
   var gender2 = pg2.options[pg2.selectedIndex].text


   var potential =  {
    uni1, 
    uni2, 
    uni3, 
    faculty1, 
    faculty2, 
    faculty3, 
    gender1, 
    gender2
}
console.log(potential)

var data = {
    method : 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(potential)
}

let params = (new URL(document.location)).searchParams;
let userId = params.get("userId");
console.log(userId) 
var url = '/prefer?userId='+userId 
fetch(url, data)
window.location.href = 'http://localhost:3002/uploads?userId='+ userId;

})




