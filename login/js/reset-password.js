const form = document.querySelector(".lsi-reset-password-form");
const emailInput = form.querySelector("input[type='email']");
const backBtn = document.querySelector(".lsi-back-button");

backBtn.addEventListener("click", () => {
  window.location.href = "./email-login.html";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const users = JSON.parse(localStorage.getItem("wsUsers")) || [];

  // 이메일이 등록된 사용자 목록에서 존재하는지 확인
  const foundUser = users.find((user) => user.email === emailValue);

  if (!foundUser) {
    alert("입력하신 이메일은 등록되지 않은 이메일입니다.");
    return;
  }

  // 비밀번호 재설정 요청을 로컬스토리지에 저장
  localStorage.setItem("wspr", JSON.stringify({ email: emailValue }));

  alert("비밀번호 재설정 메일이 발송되었습니다. 이메일을 확인해주세요.");

  // 이메일 로그인 페이지로 이동
  window.location.href = "./email-login.html";
});
