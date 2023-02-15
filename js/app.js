const slideBox1 = document.querySelector(".slide-box-1");
const slideBox2 = document.querySelector(".slide-box-2");

/* *************************************** */
/* NAVIGATION CAROUSEL SLIDES */
/* *************************************** */

let myIndex = 0;
const carousel = function (e) {
  let i;
  let x = document.querySelectorAll(` #slide-link-${e} .slide-img`);

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  // setTimeout(carousel, 2000, e);
};

carousel(1);
carousel(2);
carousel(3);
carousel(4);
carousel(5);
carousel(6);

/////////////////////////////////////////////
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
const slideContainer = document.querySelector(".slide-container");
const slideBox = document.querySelectorAll(".slide-box ");
const navSlideimg = document.querySelectorAll(".slide-img");

let curSlide = 0;
const maxSlide = slideBox.length;
slideContainer.style.overflow = "visible";

/* *************************************** */
/* MAKE NAVIGATION SLIDES WORK */
/* *************************************** */

const goToSlide = function (slide) {
  slideBox.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  }
  curSlide--;

  goToSlide(curSlide);
  activateDot(curSlide);
};

function init() {
  goToSlide(0);
  createDots(0);
  activateDot(0);
}

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

/* *************************************** */
/* NAVIGATION SLIDE UNDERLINES */
/* *************************************** */
const dotContainer = document.querySelector(".dots");

const createDots = function () {
  slideBox.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      ` <div class="dots-dot" data-slide="${i}"></div>`
    );
  });
};

createDots();

function activateDot(slide) {
  document
    .querySelectorAll(".dots-dot")
    .forEach((dot) => dot.classList.remove("dot-active"));

  document
    .querySelector(`.dots-dot[data-slide="${slide}"]`)
    .classList.add("dot-active");
}

activateDot(0);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots-dot")) {
    const { slide } = e.target.dataset;

    goToSlide(slide);
    activateDot(slide);
  }
});

/* *************************************** */
/* UNDERLINES DIRECTION */
/* *************************************** */
const navLinks = document.querySelectorAll(".nav-link");
const mainNavEl = document.querySelector(".main-nav");

mainNavEl.addEventListener("mousemove", getMouseDirection, false);

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

/* *************************************** */
/* NAVIGATION BAR SLIDES */
/* *************************************** */

const openSlideCont = function (e) {
  if (
    e.target.closest("#gallery-link") ||
    e.target.closest(".slide-container")
  ) {
    slideContainer.style.transform = "translateY(0)";
  } else {
    closeSlideCont();
  }
};

const closeSlideCont = function () {
  slideContainer.style.transform = "translateY(-100%)";
};

document.addEventListener("mousemove", openSlideCont);
