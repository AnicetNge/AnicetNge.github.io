let description='fullstack Mern & mobile Dev.';

let span=document.getElementById("description");
let curseur=document.getElementById("curseur");

let sArray=description.split("");

var i=0;
let interval=setInterval(function(){
    span.innerText+=sArray[i]
    ++i;
    if(i===sArray.length){
        curseur.style.display="none";
        clearInterval(interval);
    }
},100)