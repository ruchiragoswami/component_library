
    // const menuBtn = document.querySelector("#menu-btn");
    // const thinzyNav = document.querySelector(".thinzyNav");
    // const menuList = document.querySelector(".menuList");

    // thinzyNav.style.style = 'none'; 
    // menuBtn.addEventListener('click', toggleMenu);

   
    

    // function toggleMenu()
    //     thinzyNav.classList.add('open-menu');
    //     thinzyNav.classList.toggle('close-menu'); 
    // }

    // thinzyNav.style.display = "none";

    // if (window.screen.width >= '830px') {
    //     thinzyNav.style.display = "block";
    // } else {
    //    thinzyNav.style.display = "none" ;

    // }


    //     function toggleMenu(){
    //         if (thinzyNav.style.display == "none") {
    //                 thinzyNav.style.display = "block";                
    //             } else if (thinzyNav.style.display == "block" ) {
    //                 thinzyNav.style.style = 'none'; 
    //             } else {
    //                 console.log('you came here');
    //             }
    //     }


    // menuBtn.addEventListener('click', toggleMenu);


    // if (window.screen.width >= '830px') {
    //         thinzyNav.style.display = "block";
    //     } else {
    //         thinzyNav.style.display = "none";
    //     }

    // thinzyNav.style.display = 'block'; 

    // if (thinzyNav.style.display = "none") {
    //     menuBtn.style.display ="block";
    //     menuBtn.addEventListener('click', menuToggle); 


    //    







    // function menuToggle() {
    //         console.log('you did click')
    //         if (thinzyNav.style.display === "block") {
    //             thinzyNav.style.display = "block";
    //             console.log(success); 
    //         } else if (thinzyNav.style.display === "none") {
    //             thinzyNav.style.display = "none";
    //         } else if (window.screen.width >= '830px' ) {
    //     thinzyNav.style.display = "block";
    // }
    //     }

    //     if (window.screen.width >= '830px') {
    //     bigScreen = true;  


const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

document.onload = function showNo() {
    closeIcon.style.display = "none"; 
}

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);