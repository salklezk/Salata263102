const images = document.querySelectorAll(".slider .slider-line  img");
const sliderLine = document.querySelector(".slider-line");
const span = document.querySelector(".text");
let count = 0;
let width;
let x1 = null;
let x2 = null;
let y1 = null;
let y2 = null;
let slider = document.querySelector(".slider");

function adaptive() {
    width = document.querySelector(".slider").offsetWidth;
    sliderLine.style.width = width * images.length + "px";
    console.log(width);
    images.forEach(item => {
        item.style.width = width + "px";
        item.style.height = "auto";
    });
}
function rightScroll() {
    sliderLine.style.transform = "translateX(-" + width * count + "px)";
}
adaptive();
window.addEventListener("resize", adaptive);
function init_right() {
    count++;
    if (count == images.length) {
        count = 0;
    }
    rightScroll();
}
function init_left() {
    count--;
    if (count <= 0) {
        count = 0;
    }
    leftScroll();
}
function leftScroll() {
    sliderLine.style.transform = "translateX(" + width * (-count) + "px)";
}
slider.addEventListener("touchmove", handleMove, false)
slider.addEventListener("touchstart", handleTouch, false);
function handleTouch(event) {
    let firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
}
function handleMove(event) {
    let firstTouch = event.touches[0];
    x2 = firstTouch.clientX;
    y2 = firstTouch.clientY;
    if (x2 - x1 > 0) {
        init_left();
    }
    else {
        init_right();
    }
}
document.getElementById("jsPop").addEventListener("click", function () {
    let element = document.getElementById("popula");
    element.setAttribute("id", "popular");
    setTimeout(() => { element.setAttribute("id", "dopkwd"); }, 3000)
});
document.getElementById("jsEasy").addEventListener("click", function () {
    let element = document.getElementById("eas");
    element.setAttribute("id", "easy");
    setTimeout(() => { element.setAttribute("id", "dopkwd"); }, 3000)
});
document.getElementById("jsRecommend").addEventListener("click", function () {
    let element = document.getElementById("recommen");
    element.setAttribute("id", "recommend");
    setTimeout(() => { element.setAttribute("id", "dopkwd"); }, 3000)
});
