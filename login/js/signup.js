const form = document.querySelector(".lsi-signup-form");
const nameInput = form.querySelector("input[type='text']");
const emailInput = form.querySelector("input[type='email']");
const pwInput = form.querySelector("input[type='password']");

// 약관 동의 체크박스
const checkAll = form.querySelector(
  ".lsi-terms-container label:first-child input"
);
const checkboxes = form.querySelectorAll(
  ".lsi-terms-container label:not(:first-child) input"
);

// 입력값 검증을 위한 정규 표현식
const nameRegex = /^[가-힣a-zA-Z]+$/; // 한글 또는 영어만 허용
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식 검증
const passwordRegex = /^[가-힣a-zA-Z0-9!@#$%^&*()_+]+$/; // 비밀번호는 한글, 영어, 숫자, 특수문자 포함 가능

// 전체 약관 동의 시 모든 하위 체크박스 자동 체크
checkAll.addEventListener("change", () => {
  checkboxes.forEach((checkbox) => (checkbox.checked = checkAll.checked));
});

// 폼 제출 이벤트 처리
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const pwValue = pwInput.value.trim();

  // 입력값 검증
  if (!nameRegex.test(nameValue))
    return alert("이름은 한글과 영어만 입력할 수 있습니다.");
  if (!emailRegex.test(emailValue))
    return alert("올바른 이메일 주소를 입력하세요.");
  if (!passwordRegex.test(pwValue))
    return alert("비밀번호는 한글, 영어, 숫자, 특수문자만 사용할 수 있습니다.");

  // 기존 사용자 데이터 불러오기 (없으면 빈 배열)
  let users = JSON.parse(localStorage.getItem("wsUsers")) || [];

  // 중복 확인 (이름 또는 이메일이 같은 경우 가입 불가)
  const userSame = users.some(
    (user) => user.name === nameValue || user.email === emailValue
  );
  if (userSame) return alert("이미 사용 중인 이름 또는 이메일입니다.");

  // 새로운 사용자 정보 추가
  users.push({ name: nameValue, email: emailValue, password: pwValue });

  // 업데이트된 사용자 목록을 로컬 스토리지에 저장
  localStorage.setItem("wsUsers", JSON.stringify(users));

  alert(`${nameValue}님, 회원가입이 완료되었습니다!`);

  // 폼 초기화 후 이메일 로그인 페이지로 이동
  form.reset();
  window.location.href = "./email-login.html";
});
