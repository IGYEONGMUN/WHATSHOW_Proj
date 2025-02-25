// style
const hovers = document.querySelectorAll(".hover");
const hoverups = document.querySelectorAll(".translate");
// console.log(hovers);

/* ==================== slider 기능 구현 시작 ==================== */
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
  });
});
/* ==================== slider 기능 구현 끝 ==================== */

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

/* 다연님 방식
// slider
$(document).ready(function () {
  $(".cdy-epi").slick({
    slidesToShow: 3, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1, // 몇 개씩 이동할지
    arrows: true, // 이전/다음 버튼 표시
    // dots: true, // 네비게이션 점 표시
    // arrows: true,
    infinite: false, // 무한 루프 설정
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 모바일에서는 1개씩 표시
        },
      },
    ],
  });
});
*/
