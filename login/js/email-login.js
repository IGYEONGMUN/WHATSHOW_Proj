const resetLink = document.querySelector(".lsi-password-reset-link");
const signLink = document.querySelector(".lsi-signup-link");
const findLink = document.querySelector(".lsi-find-link");
const form = document.querySelector(".lsi-email-login-form");
const emailInput = form.querySelector(".lsi-email-input");
const passwordInput = form.querySelector(".lsi-password-input");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");

// 페이지 이동 이벤트
resetLink.addEventListener(
  "click",
  () => (window.location.href = "./reset-password.html")
);
signLink.addEventListener(
  "click",
  () => (window.location.href = "./signup.html")
);
findLink.addEventListener(
  "click",
  () => (window.location.href = "./find-id.html")
);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const users = JSON.parse(localStorage.getItem("wsUsers")) || [];

  // 기존 오류 메시지 초기화
  emailError.innerText = "";
  passwordError.innerText = "";
  emailError.style.display = "none";
  passwordError.style.display = "none";

  // 1. 이메일 입력 확인
  if (!emailValue) {
    emailError.innerText = "이메일을 입력하세요.";
    emailError.style.display = "block";
    return; // 이메일 오류가 있으면 여기서 멈춤
  }

  // 2. 이메일이 등록되지 않은 경우
  const foundUser = users.find((user) => user.email === emailValue);
  if (!foundUser) {
    emailError.innerText = "등록되지 않은 이메일입니다.";
    emailError.style.display = "block";
    return; // 이메일 오류가 있으면 여기서 멈춤
  }

  // 3. 비밀번호 입력 확인 (이메일이 올바른 경우만 실행)
  if (!passwordValue) {
    passwordError.innerText = "비밀번호를 입력하세요.";
    passwordError.style.display = "block";
    return;
  }

  // 4. 비밀번호가 틀린 경우
  if (foundUser.password !== passwordValue) {
    passwordError.innerText = "비밀번호가 올바르지 않습니다.";
    passwordError.style.display = "block";
    return;
  }

  // 5. 로그인 성공
  alert(`${foundUser.name}님 환영합니다. 왓쇼입니다!`);

  // 로그인 상태 업데이트
  users.forEach((user) => {
    if (user.email === foundUser.email) {
      user.isLoggedIn = true;
    } else {
      user.isLoggedIn = false; // 다른 유저는 로그아웃 상태 유지
    }
  });
  localStorage.setItem("wsUsers", JSON.stringify(users)); // 변경된 값 저장

  window.location.href = "../index.html";
});
