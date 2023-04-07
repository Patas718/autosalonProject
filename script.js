function showContact() {

document.querySelector(".content").style.display="none";

document.querySelector(".form").style.display="block";

document.querySelector(".button").style.display="block";

}

function hideContact() {

document.querySelector(".form").style.display="none";

document.querySelector(".content").style.display="block";

document.querySelector(".button").style.display="none";

}

function showContact1() {

document.querySelector(".content1").style.display="none";

document.querySelector(".form1").style.display="block";

document.querySelector(".button1").style.display="block";

}

function hideContact1() {

document.querySelector(".form1").style.display="none";

document.querySelector(".content1").style.display="block";

document.querySelector(".button1").style.display="none";

}

function showContact2() {

document.querySelector(".content2").style.display="none";

document.querySelector(".form2").style.display="block";

document.querySelector(".button2").style.display="block";

}

function hideContact2() {

document.querySelector(".form2").style.display="none";

document.querySelector(".content2").style.display="block";

document.querySelector(".button2").style.display="none";

}

document.body.addEventListener('touchmove', function(e){ 
   document.getElementsByTagName('body')[0].style.height = "100vh";
   document.getElementsByTagName('body')[0].style.overflow = "hidden";
 });