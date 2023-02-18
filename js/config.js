/* *************************************** */
/* NAVIGATION CAROUSEL ON HOVER */
/* *************************************** */

const imgFirst = document.getElementById("img-1");
const imgSecond = document.getElementById("img-2");
const imgThird = document.getElementById("img-3");
const imgFourth = document.getElementById("img-4");
const imgFifth = document.getElementById("img-5");
const imgSixth = document.getElementById("img-6");

const mainImgFirst = document.querySelector(".composition-photo-1");
const mainImgSecond = document.querySelector(".composition-photo-2");
const mainImgThird = document.querySelector(".composition-photo-3");

const stepBox1 = document.querySelector(".img-box-1");
const stepBox2 = document.querySelector(".img-box-2");
const stepBox3 = document.querySelector(".img-box-3");

const stepBox4 = document.querySelector(".img-box-4");
const stepBox5 = document.querySelector(".img-box-5");
const stepBox6 = document.querySelector(".img-box-6");

let img1 = [];
img1[0] = "../img/webp/omnifood-img-1.webp";
img1[1] = "../img/webp/omnifood-img-2.webp";
img1[2] = "../img/webp/omnifood-img-3.webp";
img1[3] = "../img/webp/omnifood-img-4.webp";

let img2 = [];
img2[0] = "../img/webp/team-pages-img-1.webp";
img2[1] = "../img/webp/team-pages-img-2.webp";
img2[2] = "../img/webp/team-pages-img-3.webp";
img2[3] = "../img/webp/team-pages-img-4.webp";

let img3 = [];
img3[0] = "../img/webp/pig-game-img-1.webp";
img3[1] = "../img/webp/pig-game-img-2.webp";
img3[2] = "../img/webp/pig-game-img-3.webp";
img3[3] = "../img/webp/pig-game-img-4.webp";

let img4 = [];
img4[0] = "../img/webp/tic-tac-toe-img-1.webp";
img4[1] = "../img/webp/tic-tac-toe-img-2.webp";
img4[2] = "../img/webp/tic-tac-toe-img-4.webp";
// img4[2] = "../img/webp/tic-tac-toe-img-3.webp";

let img5 = [];
img5[0] = "../img/webp/tip-calculator-img-1.webp";
img5[1] = "../img/webp/tip-calculator-img-2.webp";
img5[2] = "../img/webp/tip-calculator-img-3.webp";
// img5[3] = "/img/webp/tip-calculator-img-4.webp";

let img6 = [];
img6[0] = "../img/webp/error-img-1.webp";
img6[1] = "../img/webp/error-img-2.1.webp";
// img6[1] = "img/webp/error-img-3.webp";

// /////////////
let i = 0;
let timer;

function changeImage(img, e) {
  img.src = e[i];

  if (i < e.length - 1) {
    i++;
  } else {
    i = 0;
  }
  timer = setTimeout(changeImage, 1500, img, e);
}
function stopShow() {
  clearTimeout(timer);
}

function stopSlide(img, e) {
  clearTimeout(timer);
  img.src = e[0];
  i = 0;
}
/* *************************************** */
imgFirst.addEventListener("mouseover", function () {
  changeImage(imgFirst, img1);
});

imgSecond.addEventListener("mouseover", function () {
  changeImage(imgSecond, img2);
});

imgThird.addEventListener("mouseover", function () {
  changeImage(imgThird, img3);
});

imgFourth.addEventListener("mouseover", function () {
  changeImage(imgFourth, img4);
});

imgFifth.addEventListener("mouseover", function () {
  changeImage(imgFifth, img5);
});

imgSixth.addEventListener("mouseover", function () {
  changeImage(imgSixth, img6);
});

/* *************************************** */
mainImgFirst.addEventListener("mouseover", function () {
  changeImage(mainImgFirst, img4);
});

mainImgSecond.addEventListener("mouseover", function () {
  changeImage(mainImgSecond, img1);
});

mainImgThird.addEventListener("mouseover", function () {
  changeImage(mainImgThird, img2);
});

/* *************************************** */
stepBox1.addEventListener("mouseover", function () {
  changeImage(stepBox1, img2);
});

stepBox2.addEventListener("mouseover", function () {
  changeImage(stepBox2, img1);
});

stepBox3.addEventListener("mouseover", function () {
  changeImage(stepBox3, img6);
});

stepBox4.addEventListener("mouseover", function () {
  changeImage(stepBox4, img3);
});

stepBox5.addEventListener("mouseover", function () {
  changeImage(stepBox5, img4);
});

stepBox6.addEventListener("mouseover", function () {
  changeImage(stepBox6, img5);
});
/* *************************************** */
/* MAKE NAVIGATION SLIDES WORK */
/* *************************************** */

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

let curSlide = 0;
const maxSlide = slides.length;

// Functions
/* *************************************** */
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots-dot" data-slide="${i}"></button>`
    );
  });
};
/* *************************************** */
const activateDot = function (slide) {
  document
    .querySelectorAll(".dots-dot")
    .forEach((dot) => dot.classList.remove("dot-active"));

  document
    .querySelector(`.dots-dot[data-slide="${slide}"]`)
    .classList.add("dot-active");
};
/* *************************************** */
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

/* *************************************** */
// Next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};

/* *************************************** */
// Prev slide
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};
/* *************************************** */
// Initialize all function

if (window.innerWidth >= 880) {
  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();
}

// Event handlers
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (window.innerWidth >= 880) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  }
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots-dot")) {
    const { slide } = e.target.dataset;
    curSlide = slide - 1;
    goToSlide(slide);
    activateDot(slide);
  }
});

/* *************************************** */

/* *************************************** */
/* UNDERLINES DIRECTION */
/* *************************************** */
const navLinks = document.querySelectorAll(".nav-link");
const mainNavEl = document.querySelector(".main-nav");

let oldX = 0;
let oldY = 0;

function getMouseDirection(e) {
  navLinks.forEach((link) => {
    if (oldX < e.pageX) {
      link.classList.remove("leftDirection");
    } else if (oldX > e.pageX) {
      link.classList.add("leftDirection");
    }
  });

  oldX = e.pageX;
  oldY = e.pageY;
}

mainNavEl.addEventListener("mousemove", getMouseDirection, false);

/* *************************************** */
/* NAVIGATION BAR SLIDES */
/* *************************************** */
const navSlideContainer = document.querySelector(".nav-slides");
const slider = document.querySelector(".slider");

function openSlideCont(e) {
  if (
    e.target.closest(".slider") ||
    e.target.closest(".down-icon") ||
    e.target.closest("#gallery-link")
  ) {
    slider.style.transform = "translateY(0)";
    navSlideContainer.classList.add("activate");
  } else {
    closeSlideCont();
  }
}

const closeSlideCont = function () {
  navSlideContainer.classList.remove("activate");
  slider.style.transform = "translateY(-100%)";

  curSlide = 0;
  goToSlide(0);
  activateDot(0);
};

if (window.innerWidth >= 880) {
  document.addEventListener("mousemove", openSlideCont);
}

/* *************************************** */
/* TOGGLE MOBILE NAV SLIDES */
/* *************************************** */
const downIcon = document.querySelector(".down-icon");

const downIconToggle = function () {
  downIcon.classList.toggle("active");
  navSlideContainer.classList.toggle("activate");
  slider.scroll(0, 0);
};

const downIconRemove = function () {
  downIcon.classList.remove("active");
  navSlideContainer.classList.remove("activate");
};

const toggleNavSlide = function (e) {
  if (e.target.closest(".down-icon")) {
    downIconToggle();
  } else if (
    !e.target.closest(".down-icon") &&
    !e.target.closest(".nav-slides")
  ) {
    downIconRemove();
  }
};

document.addEventListener("click", toggleNavSlide);
////////////////////////////////////////
//  MAKE MOBILE NAVIGATION WORK
////////////////////////////////////////

const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");

function openNav() {
  headerEl.classList.toggle("nav-open");
  btnNavEl.classList.toggle("toggle-btn");
}

function removeNav() {
  headerEl.classList.remove("nav-open");
  btnNavEl.classList.remove("toggle-btn");
  // downIconRemove();
}

function closeNav(e) {
  if (
    e.key === "Escape" ||
    (headerEl.classList.contains("nav-open") &&
      btnNavEl.classList.contains("toggle-btn"))
  ) {
    removeNav();
  }
}

btnNavEl.addEventListener("click", openNav);
document.addEventListener("keydown", closeNav);

/* *************************************** */
/* IMPLEMENT SMOOTH SCROLLING */
/* *************************************** */

const allLinks = document.querySelectorAll("a:link");

function smoothScroll(e, link) {
  e.preventDefault();
  const href = link.getAttribute("href");
  if (href === "#") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  // Scroll to other links
  if (href !== "#" && href.startsWith("#")) {
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  }

  if (href !== "#" && !href.startsWith("#")) {
    removeNav();
    downIconRemove();

    window.open(e.target.href, "_blank");
  }

  // Close mobile navigation
  if (link.classList.contains("nav-link")) {
    removeNav();
  }
}

allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    smoothScroll(e, link);
  });
});

/* *************************************** */
// STICKY NAVIGATION
/* *************************************** */
const mainPrimaryEl = document.querySelector(".main-primary-container");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-65px",
  }
);
obs.observe(mainPrimaryEl);
/* *************************************** */
// SET CURRENT YEAR
/* *************************************** */
const yearEl = document.querySelector("#current-year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/* *************************************** */
// SCREEN SIZE CHANGE RELOAD
/* *************************************** */

// window.addEventListener("resize", function () {
//   if (window.innerWidth <= 880) {
//     ("use strict");
//     window.location.reload();
//   }
//   return;
// });
