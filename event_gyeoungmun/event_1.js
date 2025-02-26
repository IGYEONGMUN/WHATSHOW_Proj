const p1 = document.querySelector(".p_1");
const p2 = document.querySelector(".p_2");
const p4 = document.querySelector(".p4");
const h1_3 = document.querySelector(".h1_3");
const check1 = document.querySelector("#check1");
const check2 = document.querySelector("#check2");
const check3 = document.querySelector("#check3");
const check4 = document.querySelector("#check4");
const h4 = document.querySelector(".h4");
const main = document.querySelector(".lgm_main_section");
const rotateImg = document.querySelector(".lgm_main_section");
const rotateDesc = document.querySelector(".desc");
const mainInput = document.querySelector(".main_input");

function p1func() {
  setTimeout(() => {
    p1.style.opacity = "1";
  }, 1200);
}

function p2func() {
  setTimeout(() => {
    p2.style.opacity = "1";
  }, 3900);
}
function h3func() {
  setTimeout(() => {
    h1_3.style.opacity = "1";
  }, 5500);
}

function checkone() {
  setTimeout(() => {
    check1.style.opacity = "1";
  }, 2500);
}
function checktwo() {
  setTimeout(() => {
    check2.style.opacity = "1";
  }, 2700);
}
function checkthree() {
  setTimeout(() => {
    check3.style.opacity = "1";
  }, 2900);
}
function checkfour() {
  setTimeout(() => {
    check4.style.opacity = "1";
  }, 3100);
}

function p4func() {
  setTimeout(() => {
    p4.style.opacity = "1";
  }, 7200);
}

p1func();
p2func();
h3func();
checkone();
checktwo();
checkthree();
checkfour();
p4func();

window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    rotateImg.classList.add("rotate");
    rotateImg.style.opacity = "1";
    setTimeout(() => {
      rotateDesc.style.opacity = "1";
    }, 4000);

    setTimeout(() => {
      mainInput.style.opacity = "1";
    }, 7500);
  }
});
