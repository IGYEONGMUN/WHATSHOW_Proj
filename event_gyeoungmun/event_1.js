const h1_1 = document.querySelector(".h1_1");
const h1_2 = document.querySelector(".h1_2");
const h1_3 = document.querySelector(".h1_3");
const check1 = document.querySelector("#check1");
const check2 = document.querySelector("#check2");
const check3 = document.querySelector("#check3");
const check4 = document.querySelector("#check4");
const h4 = document.querySelector(".h4");

function h1func() {
  setTimeout(() => {
    h1_1.style.opacity = "1";
  }, 1000);
}
function h1func() {
  setTimeout(() => {
    h1_1.style.opacity = "1";
  }, 1000);
}
function h2func() {
  setTimeout(() => {
    h1_2.style.opacity = "1";
  }, 2300);
}
function h3func() {
  setTimeout(() => {
    h1_3.style.opacity = "1";
  }, 3000);
}

function checkone() {
  setTimeout(() => {
    check1.style.opacity = "1";
  }, 1300);
}
function checktwo() {
  setTimeout(() => {
    check2.style.opacity = "1";
  }, 1500);
}
function checkthree() {
  setTimeout(() => {
    check3.style.opacity = "1";
  }, 1700);
}
function checkfour() {
  setTimeout(() => {
    check4.style.opacity = "1";
  }, 1900);
}

function h4func() {
  setTimeout(() => {
    h4.style.opacity = "1";
  }, 3900);
}

h1func();
h2func();
h3func();
checkone();
checktwo();
checkthree();
checkfour();
h4func();
