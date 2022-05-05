let header2 = document.querySelector(".header2");
let header = document.querySelector(".header");


const posTop = document.querySelector("#catalog").getBoundingClientRect().top;






document.addEventListener('scroll', function() {
    const posTop = document.querySelector("#catalog").getBoundingClientRect().top;
    if(posTop < window.innerHeight) {
        header.style.background = 'rgb(255, 255, 255, 0.9)';
    }else {
        header.style.background = 'rgb(255, 255, 255)';
    }
});