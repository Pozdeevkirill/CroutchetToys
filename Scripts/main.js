let header2 = document.querySelector(".header2");
let header = document.querySelector(".header");


let minOpenBtn = document.querySelector(".menu_btn");
let minCloseBtn = document.querySelector('.close_minMenu_btn');
let minMenu = document.querySelector('.min_menu');


const posTop = document.querySelector("#catalog").getBoundingClientRect().top;



minOpenBtn.addEventListener('click', function(e) {
    if (minMenu.style.display != "block") { 
        minMenu.style.display = "block"; //Показываем элемент
    }
});

minCloseBtn.addEventListener('click', function(e) {
    if (minMenu.style.display = "block") { 
        minMenu.style.display = "none"; //Показываем элемент
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