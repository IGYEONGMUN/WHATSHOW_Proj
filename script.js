const hoversUp = document.querySelectorAll(".hover-up");
const hoversDown = document.querySelectorAll(".hover-down");
const hoversScale = document.querySelectorAll(".hover-scale");
const hoversStop = document.querySelectorAll(".hover-stop");
const backToTops = document.querySelectorAll(".lgm_top_button");

hoversUp.forEach((hoverUp) => {
  hoverUp.addEventListener("mouseover", () => {
    hoverUp.style.transition = "all 0.3s";
    hoverUp.style.transform = "translateY(-20%)";
    hoverUp.style.boxShadow = "0 0 8px #00fffb";
    hoverUp.style.boxShadow = "0 0 8px #00fffb";
  });
  hoverUp.addEventListener("mouseout", () => {
    hoverUp.style.transform = "";
    hoverUp.style.boxShadow = "";
  });
});

hoversDown.forEach((hoverDown) => {
  hoverDown.addEventListener("mouseover", () => {
    hoverDown.style.transition = "all 0.3s";
    hoverDown.style.transform = "translateY(20%)";
    hoverDown.style.boxShadow = "0 0 8px #00fffb";
    hoverDown.style.boxShadow = "0 0 8px #00fffb";
    hoverDown.style.zIndex = "1";
  });
  hoverDown.addEventListener("mouseout", () => {
    hoverDown.style.transform = "";
    hoverDown.style.boxShadow = "";
  });
});

hoversScale.forEach((hoverScale) => {
  hoverScale.addEventListener("mouseover", () => {
    hoverScale.style.transition = "all 0.3s";
    hoverScale.style.transform = "scale(1.1)";
    hoverScale.style.boxShadow = "0 0 8px #00fffb";
  });
  hoverScale.addEventListener("mouseout", () => {
    hoverScale.style.transform = "";
    hoverScale.style.boxShadow = "";
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
