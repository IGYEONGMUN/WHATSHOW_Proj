// Location
const desktopLogo = document.querySelector(".desktop-logo");

// Category
const categoryFilming = document.querySelector(".category-filming");
const categoryContents = document.querySelector(".category-contents");
const categoryEvent = document.querySelector(".category-event");

// hover
const hovers = document.querySelectorAll(".hover");
const hoverups = document.querySelectorAll(".translate");

/* ==================== Page Routing ==================== */
const menuIcon = document.querySelector(".menu-icon"); // 알림/설정/프로필 아이콘
const authButtons = document.createElement("div"); // 로그인/회원가입 버튼
authButtons.classList.add("auth-buttons");

authButtons.innerHTML = `
<button class="login-btn">로그인</button>
<button class="signup-btn">회원가입</button>
`;

document.querySelector(".inner-right").appendChild(authButtons);

// 로컬스토리지에서 로그인된 사용자 확인
let users = JSON.parse(localStorage.getItem("wsUsers")) || [];
let currentUser = users.find((user) => user.isLoggedIn === true);

if (currentUser) {
  // 로그인 상태 → 알림/설정/프로필 아이콘 표시, 로그인/회원가입 버튼 숨기기
  menuIcon.style.display = "flex";
  authButtons.style.display = "none";

  // 로그아웃 버튼 추가
  const logoutBtn = document.createElement("button");
  logoutBtn.innerText = "로그아웃";
  logoutBtn.style.fontSize = "1.4rem";
  logoutBtn.style.fontWeight = "bold";
  logoutBtn.style.cursor = "pointer";
  logoutBtn.style.border = "none";
  logoutBtn.style.background = "transparent";
  logoutBtn.style.color = "#ffffff";

  logoutBtn.classList.add("logout-btn");
  document.querySelector(".inner-right").appendChild(logoutBtn);

  // 로그아웃 버튼 클릭 이벤트
  logoutBtn.addEventListener("click", () => {
    users = users.map((user) => ({ ...user, isLoggedIn: false })); // 모든 유저 로그아웃 상태로 변경
    localStorage.setItem("wsUsers", JSON.stringify(users)); // 변경된 값 저장
    alert("로그아웃 되었습니다!");
    window.location.href = "../index.html"; // 페이지 새로고침
  });
} else {
  // 로그아웃 상태 → 로그인/회원가입 버튼 표시, 아이콘 숨기기
  menuIcon.style.display = "none";
  authButtons.style.display = "flex";
}

// 로그인 버튼 클릭 시 로그인 페이지로 이동
authButtons.querySelector(".login-btn").addEventListener("click", () => {
  window.location.href = "../login/email-login.html"; // 로그인 페이지로 이동
});

// 회원가입 버튼 클릭 시 회원가입 페이지로 이동
authButtons.querySelector(".signup-btn").addEventListener("click", () => {
  window.location.href = "../login/signup.html"; // 회원가입 페이지로 이동
});

/* ==================== main location ==================== */
desktopLogo.addEventListener("click", () => {
  window.location.href = "../index.html";
});

/* ==================== Category location ==================== */
categoryFilming.addEventListener("click", () => {
  document.querySelector(".scroll-filming").scrollIntoView({
    behavior: "smooth", // 부드럽게 스크롤
    block: "start", // 화면의 최상단으로 정렬
  });
});

categoryContents.addEventListener("click", () => {
  document.querySelector(".scroll-contents").scrollIntoView({
    behavior: "smooth", // 부드럽게 스크롤
    block: "start", // 화면의 최상단으로 정렬
  });
});

categoryEvent.addEventListener("click", () => {
  window.location.href = "../event_gyeoungmun/event.html";
});

/* ==================== hover ==================== */
hovers.forEach((hover) => {
  hover.addEventListener("mouseover", () => {
    hover.style.transition = "all 0.3s";
    hover.style.transform = "rotate(45deg) translateY(-20%)";
    // hover.style.boxShadow = "0 0 8px #00fffb";
    // hover.style.boxShadow = "0 0 8px #00fffb";
  });
  hover.addEventListener("mouseout", () => {
    hover.style.transform = "rotate(45deg)";
    hover.style.boxShadow = "";
  });
});

hoverups.forEach((hoverup) => {
  hoverup.addEventListener("mouseover", () => {
    hoverup.style.transition = "all 0.3s";
    hoverup.style.transform = "translateY(-10%)";
    // hoverup.style.boxShadow = "0 0 8px #00fffb";
    // hoverup.style.boxShadow = "0 0 8px #00fffb";
  });
  hoverup.addEventListener("mouseout", () => {
    hoverup.style.transform = "";
    hoverup.style.boxShadow = "";
  });
});

/* ==================== Slider 기능 구현 시작 ==================== */
$(document).ready(function () {
  $(".cdy-epi").slick({
    slidesToShow: 4, // 한 번에 보이는 슬라이드 개수
    slidesToScroll: 4, // 한 번에 이동하는 슬라이드 개수
    infinite: false, // 무한 반복 비활성화
    dots: true, // 하단 네비게이션 점 제거
    arrows: true, // 기본 좌우 버튼 사용
    prevArrow: '<button class="slick-prev"></button>',
    nextArrow: '<button class="slick-next"></button>',
    adaptiveHeight: true, // 기존 높이 유지
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
});
