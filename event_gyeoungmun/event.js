const button = document.querySelector(".btn");
console.log(button);

button.addEventListener("click", () => {
  console.log("ok");
  window.location.href = "../login/login.html";
});
