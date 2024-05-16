

let hamburger=document.getElementsByClassName("hamburger")[0];
let nav=document.getElementsByTagName("nav")[0];
let links=document.querySelectorAll(".link");
let header=document.getElementsByTagName("header")[0];

//click hamburger button handle
hamburger.addEventListener('click',function(){
	hamburger.classList.toggle("activated")
	hamburger.classList.contains("activated") ? header.style.backgroundColor="#edf7ff":header.style.backgroundColor="white";
	nav.classList.toggle("activated")
})

//click nav links handle
links.forEach(element => {
	element.addEventListener("click",function(e){
		links.forEach(function(el){
			el.classList.remove("current")
		})
		element.classList.add("current");
		let timeOut=setTimeout((timeOut) => {
			hamburger.classList.remove("activated");
			nav.classList.remove("activated");
			header.style.backgroundColor="white";
			clearTimeout(timeOut);
		}, 300);
	})
	
});