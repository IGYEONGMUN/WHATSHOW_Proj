const form = document.querySelector(".lsi-signup-form");
const nameInput = form.querySelector("input[type='text']");
const emailInput = form.querySelector("input[type='email']");
const pwInputs = form.querySelectorAll("input[type='password']");

// 오류 메시지 span 태그
const nameError = form.querySelector(".name-error");
const emailError = form.querySelector(".email-error");
const pwError = form.querySelectorAll(".password-error");

// 모달 요소
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeModal = document.querySelector(".close");

// 약관 체크박스
const checkAll = form.querySelector(
  ".lsi-terms-container label:first-child input"
);
const checkboxes = form.querySelectorAll(
  ".lsi-terms-container label:not(:first-child) input"
);
const requiredCheckboxes = form.querySelectorAll(
  ".lsi-terms-container label input:nth-of-type(1)"
); // 필수 약관

// 입력값 검증을 위한 정규 표현식
const nameRegex = /^[가-힣a-zA-Z]+$/; // 한글 또는 영어만 허용
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식 검증
const passwordRegex = /^[가-힣a-zA-Z0-9!@#$%^&*()_+]+$/; // 비밀번호 허용 문자

// 전체 약관 동의 시 모든 하위 체크박스 자동 체크
checkAll.addEventListener("change", () => {
  checkboxes.forEach((checkbox) => (checkbox.checked = checkAll.checked));
});

// 폼 제출 이벤트 처리
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const pwValue = pwInputs[0].value.trim();
  const pwConfirmValue = pwInputs[1].value.trim();

  // 기존 오류 메시지 숨기기
  nameError.style.display = "none";
  emailError.style.display = "none";
  pwError[0].style.display = "none";
  pwError[1].style.display = "none";

  // 1. 이름 유효성 검사
  if (!nameRegex.test(nameValue)) {
    nameError.textContent = "이름은 한글과 영어만 입력할 수 있습니다.";
    nameError.style.display = "block";
    return;
  }

  // 2. 이메일 유효성 검사
  if (!emailRegex.test(emailValue)) {
    emailError.textContent = "올바른 이메일 주소를 입력하세요.";
    emailError.style.display = "block";
    return;
  }

  // 3. 비밀번호 유효성 검사
  if (!passwordRegex.test(pwValue)) {
    pwError[0].textContent =
      "비밀번호는 한글, 영어, 숫자, 특수문자만 사용할 수 있습니다.";
    pwError[0].style.display = "block";
    return;
  }

  // 4. 비밀번호 확인 검사
  if (pwValue !== pwConfirmValue) {
    pwError[1].textContent = "비밀번호가 일치하지 않습니다.";
    pwError[1].style.display = "block";
    return;
  }

  // 5. 필수 약관 동의 확인
  const uncheckedRequired = Array.from(requiredCheckboxes).some(
    (checkbox) => !checkbox.checked
  );
  if (uncheckedRequired) {
    alert("필수 약관에 동의해야 가입할 수 있습니다.");
    return;
  }

  // 기존 사용자 데이터 불러오기 (없으면 빈 배열)
  let users = JSON.parse(localStorage.getItem("wsUsers")) || [];

  // 중복 확인 (이름 또는 이메일이 같은 경우 가입 불가)
  const userSame = users.some(
    (user) => user.name === nameValue || user.email === emailValue
  );
  if (userSame) {
    alert("이미 사용 중인 이름 또는 이메일입니다.");
    return;
  }

  // 새로운 사용자 정보 추가
  users.push({ name: nameValue, email: emailValue, password: pwValue });

  // 업데이트된 사용자 목록을 로컬 스토리지에 저장
  localStorage.setItem("wsUsers", JSON.stringify(users));

  alert(`${nameValue}님, 회원가입이 완료되었습니다!`);

  // 폼 초기화 후 이메일 로그인 페이지로 이동
  form.reset();
  window.location.href = "./email-login.html";
});

// 약관 내용 정의
const termsData = {
  "왓쇼 서비스 이용 약관 보기": `본 약관은 2025년 02월 28일부터 적용됩니다.\n\r제 1 조 목적\n\r이 약관은 WHATSHOW(이하 'WS')에서 제공하는\n왓쇼 및 왓쇼에서 제공하는 제반 서비스(이하 '서비스')에\n 접속과 사용자에 의해서 업로드 및 다운로드 되어\n 표시되는 모든 정보, 텍스트, 이미지 및 기타 자료를\n 이용하는 이용자(이하 '회원')와 서비스 이용에\n 관한 권리 및 의무와 책임사항, 기타 필요한 사항을\n 규정하는 것을 목적으로 합니다.`,

  "왓쇼포인트 서비스 이용 약관 보기": `제 1조 (목적)\r\r왓쇼플레이 서비스 약관(이하 “약관”)은 
  주식회사 WHATSHOW(이하 'WS 제공하는 동영상 스트리밍\n 서비스(웹, 모바일 웹•앱 서비스 등을 포함)인\n 왓쇼플레이(WHATSHOW PLAY) 서비스(이하 '서비스')를\n 이용함에 있어 회사와 회원간의 권리, 의무 및 책임사항,\n 서비스 이용조건 및 절차 등 기본적인 사항을 규정함을\n 목적으로 합니다.`,

  "개인정보 수집 및 이용 동의 보기": `본 방침은 2025년 02월 28일 부터 적용됩니다.\r\r'WHATSHOW' 는 (이하 'WS')는 고객님의 개인정보를\r 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한\r 법률을 준수하고 있습니다.회사는 개인정보취급방침을\r 통하여 고객님께서 제공하시는 개인정보가 어떠한\r 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해\r 어떠한 조치가 취해지고 있는지 알려드립니다.
`,

  "청소년 보호정책": `\rWHATSHOW는 각종 청소년 유해정보로부터 청소년을\r 보호하기 위해 ‘청소년 보호법‘, ‘정보통신망 이용촉진\r 및 정보보호 등에 관한 법률’ 등 관계법령과 정부지침,\r 서비스 운영정책에 따라 청소년의 유해정보 접근을\r 방지하고, 청소년을 보호하기 위해 다음의 활동을\r 진행하고 있습니다.
  \r
※ 유해정보에 대한 청소년접근제한 및 관리조치
회사는 청소년이 청소년 유해정보에 노출되지 않도록 \r예방차원의 조치를 강구합니다.
`,
};

// 약관 클릭 시 모달 열기
document.querySelectorAll(".lsi-terms-container label p").forEach((pTag) => {
  pTag.addEventListener("click", (event) => {
    const text = event.target.innerText.trim();
    if (termsData[text]) {
      modalTitle.innerText = text;
      modalText.innerText = termsData[text];
      modal.classList.add("open"); // 모달 열기
    } else {
      console.error("약관 데이터 없음:", text);
    }
  });
});

// 모달 닫기 (X 버튼 또는 바깥 클릭)
window.addEventListener("click", (e) => {
  if (e.target === modal || e.target.classList.contains("close")) {
    modal.classList.remove("open"); // 모달 닫기
  }
});
