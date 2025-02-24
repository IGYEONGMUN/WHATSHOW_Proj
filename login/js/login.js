const loginEmail = document.querySelector(".email");
const loginFind = document.querySelector(".lsi-login-find");
const loginSign = document.querySelector(".lsi-login-signup");

loginEmail.addEventListener("click", () => {
  window.location.href = "./email-login.html";
});

loginFind.addEventListener("click", () => {
  window.location.href = "./find-id.html";
});
loginSign.addEventListener("click", () => {
  window.location.href = "./signup.html";
});
