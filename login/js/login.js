const loginEmail = document.querySelector(".email");
const loginFind = document.querySelector(".lsi-login-find");
const loginSign = document.querySelector(".lsi-login-signup");
const lsiLogo = document.querySelector(".lsi-logo");

loginEmail.addEventListener("click", () => {
  window.location.href = "./email-login.html";
});

loginFind.addEventListener("click", () => {
  window.location.href = "./find-id.html";
});
loginSign.addEventListener("click", () => {
  window.location.href = "./signup.html";
});
lsiLogo.addEventListener("click", () => {
  window.location.href = "../index.html";
});
