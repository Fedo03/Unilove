var ne = document.querySelector("#ne")
var ps = document.querySelector("#ps")
var bt = document.querySelector("#bt")


bt.addEventListener('click',function(){
   var data = {
    ne,
    ps
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

 fetch('/login', sendData ).then(function(res){
    return res.json()
 }).then(function(data){
    if(data){
        window.location.href ="/"
    }
 })
   
})