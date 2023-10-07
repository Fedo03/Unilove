//var up = document.querySelector('.up')
   
up.addEventListener('click', function(){
     
    var data = "sent"

  var image = { 
    data 
  }
    var send ={
        method : 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body : JSON.stringify(image)
    }
    console.log(send)

    fetch('/uploads', send )
})