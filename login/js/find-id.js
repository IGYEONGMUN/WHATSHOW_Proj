const emailInput = document.querySelector(
  ".lsi-find-section input[type='text']"
);
const findEmailBtn = document.querySelector(".lsi-find-section .lsi-find-btn");
const emailError = document.querySelector(".email-error");
const findAuthBtn = document.querySelectorAll(
  ".lsi-find-section .lsi-find-btn"
)[1];

// 이메일로 아이디 찾기
findEmailBtn.addEventListener("click", () => {
  const emailValue = emailInput.value.trim();
  const users = JSON.parse(localStorage.getItem("wsUsers")) || [];

  // 기존 오류 메시지 초기화
  emailError.innerText = "";
  emailError.style.display = "none";

  // 1. 입력 여부 확인
  if (!emailValue) {
    emailError.innerText = "이메일을 입력하세요.";
    emailError.style.display = "block";
    return;
  }

  // 2. 로컬스토리지에서 해당 이메일 찾기
  const foundUser = users.find((user) => user.email === emailValue);

  if (!foundUser) {
    emailError.innerText = "등록되지 않은 이메일입니다.";
    emailError.style.display = "block";
    return;
  }

  // 3. 이메일이 존재하면 아이디 찾기 완료 메시지 출력
  localStorage.setItem("wsFindID", JSON.stringify({ email: emailValue }));
  alert("입력하신 이메일로 계정 정보가 전송되었습니다.");
  window.location.href = "./email-login.html";
});

// 본인인증 버튼 클릭 시 모달 띄우기
findAuthBtn.addEventListener("click", () => {
  showAuthModal();
});

// 본인인증 모달 생성 함수
function showAuthModal() {
  const modal = document.createElement("div");
  modal.classList.add("auth-modal");
  modal.innerHTML = `
    <div class="auth-modal-content">
      <h2 class="modal-title">본인인증</h2>
      <p class="modal-text">휴대폰 번호를 입력하고 인증번호를 받아주세요.</p>
      <input type="tel" placeholder="휴대폰 번호 입력" class="auth-phone-input"/>
      <button class="auth-code-btn">인증번호 받기</button>
      <input type="text" class="auth-code" placeholder="인증번호 입력" disabled />
      <button class="verify-btn" disabled>인증 완료</button>
      <button class="close">닫기</button>
    </div>
  `;
  document.body.appendChild(modal);

  const closeBtn = modal.querySelector(".close");
  const authCodeBtn = modal.querySelector(".auth-code-btn");
  const authCode = modal.querySelector(".auth-code");
  const verifyBtn = modal.querySelector(".verify-btn");

  closeBtn.addEventListener("click", () => modal.remove());

  authCodeBtn.addEventListener("click", () => {
    // 인증번호 전송 로직 (더미 데이터)
    alert("인증번호가 발송되었습니다. 인증번호를 입력해주세요.");
    authCode.disabled = false;
    verifyBtn.disabled = false;
  });

  verifyBtn.addEventListener("click", () => {
    if (authCode.value === "123456") {
      alert("본인인증이 완료되었습니다.");
      modal.remove();
      window.location.href = "./email-login.html";
    } else {
      alert("인증번호가 올바르지 않습니다.");
    }
  });
}
