// Hover Event
const hoversUp = document.querySelectorAll(".hover-up");
const hoversDown = document.querySelectorAll(".hover-down");
const hoversScale = document.querySelectorAll(".hover-scale");
const hoversStop = document.querySelectorAll(".hover-stop");
const backToTops = document.querySelectorAll(".lgm_top_button");

const topbtn = document.querySelector(".lgm_top_button");
const triggerBtn = document.querySelector(".lgm_trigger");
const hamburgerMenu = document.querySelector(".lgm_active_trigger");

// Location Event
const desktopLogo = document.querySelector(".desktop-logo");
const tabletLogo = document.querySelector(".tablet-logo");
const mobileLogo = document.querySelector(".mobile-logo");
const detailLocation = document.querySelector(".smk-content-top > img");

// Category Event
const categoryMovie = document.querySelector(".category-movie");
const categoryDrama = document.querySelector(".category-drama");
const categoryEvent = document.querySelector(".category-event");

// Page routing
const menuIcon = document.querySelector(".menu-icon"); // 아이콘 그룹
const authButtons = document.createElement("div"); // 로그인/회원가입 버튼 그룹
authButtons.classList.add("auth-buttons");

authButtons.innerHTML = `
  <button class="login-btn">로그인</button>
  <button class="signup-btn">회원가입</button>
`;
console.log(authButtons);

document.querySelector(".inner-right").appendChild(authButtons);

// 로컬스토리지에서 로그인된 사용자 확인
let users = JSON.parse(localStorage.getItem("wsUsers")) || [];
let currentUser = users.find((user) => user.isLoggedIn === true);

if (currentUser) {
  // 로그인한 상태 -> 아이콘 표시 & 로그인/회원가입 버튼 숨기기
  menuIcon.style.display = "flex";
  authButtons.style.display = "none";

  // 로그아웃 버튼 생성
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
    window.location.reload(); // 페이지 새로고침
  });
} else {
  // 로그아웃 상태 -> 로그인/회원가입 버튼 표시 & 아이콘 숨기기
  menuIcon.style.display = "none";
  authButtons.style.display = "flex";
}

// 로그인 버튼 클릭 시 로그인 페이지로 이동
authButtons.querySelector(".login-btn").addEventListener("click", () => {
  window.location.href = "./login/email-login.html";
});

// 회원가입 버튼 클릭 시 회원가입 페이지로 이동
authButtons.querySelector(".signup-btn").addEventListener("click", () => {
  window.location.href = "./login/signup.html";
});

categoryMovie.addEventListener("click", () => {
  document.querySelector(".scroll-movie").scrollIntoView({
    behavior: "smooth", // 부드럽게 스크롤
    block: "start", // 화면의 최상단으로 정렬
  });
});

categoryDrama.addEventListener("click", () => {
  document.querySelector(".scroll-drama").scrollIntoView({
    behavior: "smooth", // 부드럽게 스크롤
    block: "start", // 화면의 최상단으로 정렬
  });
});

categoryEvent.addEventListener("click", () => {
  window.location.href = "./event_gyeoungmun/event_1.html";
});

desktopLogo.addEventListener("click", () => {
  window.location.href = "./index.html";
});

tabletLogo.addEventListener("click", () => {
  window.location.href = "./index.html";
});

mobileLogo.addEventListener("click", () => {
  window.location.href = "./index.html";
});

detailLocation.addEventListener("click", () => {
  window.location.href = "../detail/detail.html";
});

triggerBtn.addEventListener("click", () => {
  triggerBtn.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topbtn.style.opacity = "1";
  } else {
    topbtn.style.opacity = "0";
  }
});

topbtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

hoversUp.forEach((hoverUp) => {
  hoverUp.addEventListener("mouseover", () => {
    hoverUp.style.transition = "all 0.3s";
    hoverUp.style.transform = "translateY(-20%)";
  });
  hoverUp.addEventListener("mouseout", () => {
    hoverUp.style.transform = "";
  });
});

hoversDown.forEach((hoverDown) => {
  hoverDown.addEventListener("mouseover", () => {
    hoverDown.style.transition = "all 0.3s";
    hoverDown.style.transform = "translateY(20%)";
    hoverDown.style.zIndex = "0";
  });
  hoverDown.addEventListener("mouseout", () => {
    hoverDown.style.transform = "";
  });
});

hoversScale.forEach((hoverScale) => {
  hoverScale.addEventListener("mouseover", () => {
    hoverScale.style.transition = "all 0.3s";
    hoverScale.style.transform = "scale(1.1)";
  });
  hoverScale.addEventListener("mouseout", () => {
    hoverScale.style.transform = "";
  });
});

hoversStop.forEach((hoverStop) => {
  hoverStop.addEventListener("mouseover", () => {
    hoverStop.style.animationPlayState = "paused";
  });

  hoverStop.addEventListener("mouseout", () => {
    hoverStop.style.animationPlayState = "running";
  });
});

backToTops.forEach((backToTop) => {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      backToTop.style.opacity = "1";
    } else {
      backToTop.style.opacity = "0";
    }
  });
});
