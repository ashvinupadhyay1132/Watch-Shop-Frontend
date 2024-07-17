const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const revealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...revealOptions,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...revealOptions,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...revealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".header__content h4", {
  ...revealOptions,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .header__btns", {
  ...revealOptions,
  delay: 2000,
});

ScrollReveal().reveal(".story__image img", {
  ...revealOptions,
  origin: "left",
});
ScrollReveal().reveal(".story__content .section__header", {
  ...revealOptions,
  delay: 500,
});
ScrollReveal().reveal(".story__content h4", {
  ...revealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".story__content p", {
  ...revealOptions,
  delay: 1500,
});
ScrollReveal().reveal(".story__content .story__btn", {
  ...revealOptions,
  delay: 2000,
});

ScrollReveal().reveal(".client__image img", {
  ...revealOptions,
  origin: "right",
});

const swiper = new Swiper(".swiper", {
  loop: true,
});
