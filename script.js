const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}


let signupBtn=document.getElementById("signupBtn")
let signinBtn=document.getElementById("signinBtn")
let namefield=document.getElementById("namefield")
let title=document.getElementById("title")
let passwordBtn=document.getElementById("passwordBtn") 
            signinBtn.onclick=function(){
              namefield.style.maxHeight="0";
              title.innerHTML="Login";
              signupBtn.classList.add("disable");
              signinBtn.classList.remove("disable");
              passwordBtn.style.display="block";
        
              
            }
            signupBtn.onclick=function(){
              namefield.style.maxHeight="60px";
              title.innerHTML="Sign Up";
              signupBtn.classList.remove("disable");
              signinBtn.classList.add("disable");
              passwordBtn.style.display="none";
        
              
            }