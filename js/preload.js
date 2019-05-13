"use strict";

const overlay = document.querySelector(".preload-overlay");

setTimeout(() => {
  overlay.style.opacity = 0;
  setTimeout(() => {
    overlay.style.display = "none";
  }, 500);
}, 2000);
