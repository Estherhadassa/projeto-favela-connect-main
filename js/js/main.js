// MOBILE MENU

const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

hamburgerBtn.addEventListener("click", () =>
    header.classList.toggle("show-mobile-menu"),
);

closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// EFEITO NAV BAR AO ROLAR A PÁGINA

window.onload = function () {
    window.addEventListener("scroll", e => {
        if (window.pageYOffset > 80) {
            document.querySelector("header").classList.add("header-scroll");
            document.querySelector(".logo").classList.add("logo-scroll");
        } else {
            document.querySelector("header").classList.remove("header-scroll");
            document.querySelector(".logo").classList.remove("logo-scroll");
        }
    });
};