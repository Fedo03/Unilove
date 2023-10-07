var up = document.querySelector('.up')
var file = document.querySelector('files')

const formData = new FormData();
formData.append('image', file);
 
up.addEventListener('click', function(){
     
    var send ={
        method : 'POST',
        //headers: {
            //'Accept': 'application/json, text/plain, */*',
            //'Content-Type': 'application/json'
         // },
          body : formData
    }

    console.log(send)
    let params = (new URL(document.location)).searchParams;
let userId = params.get("userId");
console.log(userId)

    fetch('/uploads?userId ='+userId, send )
    
})