const cube_element = document.querySelector(".cube");
const left_top = document.querySelector(".cube__left-top");
const right_top = document.querySelector(".cube__right-top");
const left_bottom = document.querySelector(".cube__left-bottom");
const right_bottom = document.querySelector(".cube__right-bottom");

setTimeout(() => {
    togglePulse();
    setTimeout(() => {
        toggleRotate();
    },100);
    cube_element.addEventListener('click',event => {
        togglePulse();
        togglePausedRotate();
        for (let i = 0; i < cube_element.children.length; i++) {
            cube_element.children[i].classList.toggle('cube-start-reverse');
        }
    });
},2900);

function togglePulse() {
    left_top.classList.toggle("left-top-passive");
    right_top.classList.toggle("right-top-passive");
    left_bottom.classList.toggle("left-bottom-passive");
    right_bottom.classList.toggle("right-bottom-passive");
}

function toggleRotate() {
    cube_element.classList.toggle("cube-rotate");
}
function togglePausedRotate() {
    cube_element.classList.toggle("cube-rotate-paused");
}