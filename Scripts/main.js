let header2 = document.querySelector(".header2");
let header = document.querySelector(".header");
let body = document.body;

let minOpenBtn = document.querySelector(".menu_btn");
let minCloseBtn = document.querySelector('.close_minMenu_btn');
let minMenu = document.querySelector('.min_menu');


const posTop = document.querySelector("#catalog").getBoundingClientRect().top;



minOpenBtn.addEventListener('click', function() {
    if (minMenu.style.display != "block") { 
        minMenu.style.display = "block";
        body.classList.add("stop_scrol");
    }
});

minCloseBtn.addEventListener('click', function() {
    if (minMenu.style.display = "block") { 
        minMenu.style.display = "none"; 
        body.classList.remove("stop_scrol");
    }
});


document.addEventListener('scroll', function() {
    const posTop = document.querySelector("#catalog").getBoundingClientRect().top;
    if(posTop < window.innerHeight) {
        header.style.background = 'rgb(255, 255, 255, 0.9)';
    }else {
        header.style.background = 'rgb(255, 255, 255)';
    }
});