let btnToggle=document.querySelector(".btn-toggle")
let navlinks=document.querySelector(".unordered")

btnToggle.addEventListener("click",myFunc);
function myFunc(){
    navlinks.classList.toggle("ordered");
}