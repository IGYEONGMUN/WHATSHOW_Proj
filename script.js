// Hover Event
const hoversUp = document.querySelectorAll(".hover-up");
const hoversDown = document.querySelectorAll(".hover-down");
const hoversScale = document.querySelectorAll(".hover-scale");
const hoversStop = document.querySelectorAll(".hover-stop");
const backToTops = document.querySelectorAll(".lgm_top_button");

const topbtn = document.querySelector(".lgm_top_button");
const triggerBtn = document.querySelector(".lgm_trigger");
const hamburgerMenu = document.querySelector(".lgm_active_trigger");

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
