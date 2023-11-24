"use strict";
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
});

// scroll reveal
const sr = new ScrollReveal({
  duration: 1500,
  delay: 500,
  easing: "ease",
});
sr.reveal(
  ".hero-img, .shoe-card, .arrival-title, .offers-contents, .review-head-texts, .review-heading, .review-card",
  {
    distance: "30px",
    interval: 100,
  }
);
