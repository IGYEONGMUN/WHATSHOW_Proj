const form = document.querySelector(".lsi-reset-password-form");
const emailInput = form.querySelector("input[type='email']");
const backBtn = document.querySelector(".lsi-back-button");
const errorMessage = document.querySelector(".lsi-error-message");

// 기존 에러 메시지 삭제
const removeErrorMessage = () => {
  errorMessage.style.display = "none";
  errorMessage.innerText = "";
};

// 에러 메시지 표시
const showError = (message) => {
  errorMessage.style.display = "block";
  errorMessage.innerText = message;
};

// 뒤로 가기 버튼 클릭 시 로그인 페이지로 이동
backBtn.addEventListener("click", () => {
  window.location.href = "./email-login.html";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const users = JSON.parse(localStorage.getItem("wsUsers")) || [];

  removeErrorMessage(); // 기존 에러 메시지 제거

  // 1️. 이메일 입력 안 했을 때
  if (!emailValue) {
    showError("이메일을 입력해주세요.");
    return;
  }

  // 2. 이메일이 등록되지 않았을 때
  const foundUser = users.find((user) => user.email === emailValue);
  if (!foundUser) {
    showError("등록되지 않은 이메일입니다.");
    return;
  }

  // 3. 이메일이 등록된 경우 비밀번호 재설정 메일 전송 처리
  localStorage.setItem("wspr", JSON.stringify({ email: emailValue }));

  alert("비밀번호 재설정 메일이 발송되었습니다. 이메일을 확인해주세요.");

  // 이메일 로그인 페이지로 이동
  window.location.href = "./email-login.html";
});
