let header2 = document.querySelector(".header2");
let header = document.querySelector(".header");
let body = document.body;

let minOpenBtn = document.querySelector(".menu_btn");
let minCloseBtn = document.querySelector('.close_minMenu_btn');
let minMenu = document.querySelector('.min_menu');

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

/*Animation */

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 150,
    reset: false
});
sr.reveal('.header', {distance:'0px'});
sr.reveal('.header2');
sr.reveal('.heading', {distance:'0px', delay: 150});
sr.reveal('.Title',{delay: 400})

sr.reveal('.card', {origin: 'top', interval:400, delay: 150, distance: '15%'});
sr.reveal('.show_more', {origin: 'top', interval:400, delay: 150, distance: '15%'});

sr.reveal('.delivery_card', {origin: 'left',interval: 400});
sr.reveal('.arrow', {origin: 'left',interval:500,delay: 600});


sr.reveal('.master_title', {origin:'left'});
sr.reveal('.master_discription_text', {origin:'left',delay: 400, interval: 400});

