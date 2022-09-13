"use strict";
/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  const closeMenu = document.querySelector("#nav-close");

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.add("show-menu");

      // We remove the show-menu class to the div tag with the nav__menu class
      closeMenu.addEventListener("click", () => {
        nav.classList.remove("show-menu");
      });
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE LINK ====================*/
const navLink = document.querySelectorAll(".nav__link");

/*==================== ACTIVE LINK ====================*/
const activeLink = window.location.pathname;

navLink.forEach(function (el) {
  if (el.href.includes(`${activeLink}`)) {
    console.log("contains active link");
    el.classList.add("active--link");
  }
});

/*==================== SHOW SCROLL TOP ====================*/
const homeSection = document.querySelector(".first");
const scrollTop = document.querySelector("#scroll-top");
const scrollToTop = (e) => {
  e.preventDefault();
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) {
    //Note the this keyword here is referring to the window and again because it is the window that receive the event listener
    scrollTop.classList.add("show-scroll");
  } else scrollTop.classList.remove("show-scroll");
  scrollTop.addEventListener("click", function (e) {
    e.preventDefault();
    homeSection.scrollIntoView({ behavior: "smooth" });
  });
};
window.addEventListener("scroll", scrollToTop);

/*==================== SCROLL DOWN ====================*/
const scrollToNextSec = document.querySelector(".home-scroll");
const scrollSection = document.querySelector(".blog__img");
scrollToNextSec.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("scroll-btn")) {
    console.log("scroll");
  }
  scrollSection.scrollIntoView({ behavior: "smooth" }); //This is not the queryselector u want to use
});

/*==================== TEDxOAU TEXT ANIMATION ====================*/

document.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
  var dataText = ["TEDxOAU"];

  // type one text in the typewriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector("#word").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 500);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

/**=================== SPEAKERS SLIDER ================ */
const speakerSlider = new Swiper(".speakers__container--contents", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    scale: 1,
    modifier: 2.5,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
console.log(speakerSlider);

/*=======================BLOG SWIPER ============================ */
const swiper = new Swiper(".blog__swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
