const menuIcon = document.querySelector(".hambuger");
const navline = document.querySelector(".nav-line");
const menu = document.querySelector(".menu");

menuIcon.addEventListener('click',()=>{
    navline.classList.toggle("change");
    menu.classList.toggle("change-menu");
})