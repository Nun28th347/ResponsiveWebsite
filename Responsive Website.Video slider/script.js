//JS of responsive navigation menu

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});


//JS for slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const content = document.querySelectorAll(".content");

var sliderNav = function (manual) {

    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    content.forEach((contentt) => {
        contentt.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    content[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () =>{
        sliderNav(i);
    });
});
