var slide = document.getElementById('pont')

var img = "./img/Screenshot (6).png"



sty(img,"fedo",20,"wits")





function sty(imgL,name,age, uni){
    slide.style.backgroundImage = "url('"+ imgL+"')"
    var h = document.createElement('h1')
    var h3 = document.createElement('h3')

    h.innerHTML = name +", "+ age
    h3.innerHTML = uni
    div_ap(h)
    div_ap(h3)
}






div_ap(butt("like"))
div_ap(butt("dislike"))


function div_ap(ele) {
   var div = slide.appendChild(ele)
  
   return div
}

function butt(name){
    var bt = document.createElement('button')
    bt.innerHTML = name
   
     
    return bt;
}

let params = (new URL(document.location)).searchParams;
let userId = params.get("userId");
console.log(userId)


fetch("/dataBase?userId=" + userId).then(function(res){
    return res.json()
}).then((data) => {
    console.log(data)
})







