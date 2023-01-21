const btns=document.querySelectorAll(".btn");


btns.forEach(function(btn){
    btn.addEventListener("click",toggleBorder);
})

const testDivs=document.querySelectorAll(".test");
testDivs.forEach(function(testDiv){
    //todo au survol tooltip
    const tooltip=testDiv.querySelector("p");
    const bouton=testDiv.querySelectorAll("div.btn")[0];
bouton.addEventListener("mouseenter",function(e){
    tooltip.style.opacity="1";
    tooltip.style.zIndex="1000";
})
bouton.addEventListener("mouseleave",function(e){
    if(window.innerWidth > 440){
        tooltip.style.opacity="0";
        tooltip.style.zIndex="-1000";  
    }
})
});


function toggleBorder(e){
    e.target.classList.toggle("buttonActive");
    text=e.target.innerText;
    cibles=document.querySelectorAll(text);
    cibles.forEach(function(cible){
        if(cible.classList.contains("dotedborder") || cible.classList.contains("visibleBorder")){
            toggleClass(cible);
        }
    })
}


function toggleClass(el){
    if(el.classList.contains("dotedborder")){
        el.classList.remove("dotedborder");
        el.classList.add("visibleBorder");
    }else{
        el.classList.remove("visibleBorder");
        el.classList.add("dotedborder");
    }
}