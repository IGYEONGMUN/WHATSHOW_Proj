const resetLink = document.querySelector(".lsi-password-reset-link");
const signLink = document.querySelector(".lsi-signup-link");
const findLink = document.querySelector(".lsi-find-link");
const form = document.querySelector(".lsi-email-login-form");
const emailInput = form.querySelector(".lsi-email-input");
const passwordInput = form.querySelector(".lsi-password-input");

resetLink.addEventListener("click", () => {
  window.location.href = "./reset-password.html";
});

signLink.addEventListener("click", () => {
  window.location.href = "./signup.html";
});

findLink.addEventListener("click", () => {
  window.location.href = "./find-id.html";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // 로컬스토리지에서 저장된 사용자 목록 불러오기
  const users = JSON.parse(localStorage.getItem("wsUsers")) || [];

  // 입력한 이메일과 비밀번호가 일치하는 사용자가 있는지 확인
  const foundUser = users.find(
    (user) => user.email === emailValue && user.password === passwordValue
  );

  if (foundUser) {
    alert(`${foundUser.name}님 환영합니다. 왓쇼입니다!`);
    window.location.href = "../index.html";
  } else {
    alert("이메일 또는 비밀번호가 올바르지 않습니다.");
  }
});
