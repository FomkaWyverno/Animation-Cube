const cube_element = document.querySelector(".cube");
const left_top = document.querySelector(".cube__left-top");
const right_top = document.querySelector(".cube__right-top");
const left_bottom = document.querySelector(".cube__left-bottom");
const right_bottom = document.querySelector(".cube__right-bottom");

setTimeout(() => {
    left_top.classList.add("left-top-passive");
    right_top.classList.add("right-top-passive");
    left_bottom.classList.add("left-bottom-passive");
    right_bottom.classList.add("right-bottom-passive");
    setTimeout(() => {
        cube_element.classList.add("cube-rotate");
    },100);
},2900);