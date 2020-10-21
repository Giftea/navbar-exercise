"use strict";

const menuBtn = document.querySelector(".menu-btn_burger");
let menuOpen = false;

//Navigation toggle event
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    const menuList = document.querySelector(".navbar-links");
    menuList.classList.add("change");
    const menuBg = document.querySelector(".menu-bg");
    menuBg.classList.add("change-bg");
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    const menuList = document.querySelector(".navbar-links");
    menuList.classList.remove("change");
    const menuBg = document.querySelector(".menu-bg");
    menuBg.classList.remove("change-bg");
  }
});
