const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());





window.onload = function () {
  window.addEventListener('scroll', e => {
    if (window.pageYOffset > 70) {
      document.querySelector('header').classList.add('header-scroll');
      document.querySelector('.logo').classList.add('logo-scroll');
    } else {
      document.querySelector('header').classList.remove('header-scroll');
      document.querySelector('.logo').classList.remove('logo-scroll');
    }
  });
};
// const bodyToggle = document.querySelector("body"),
//       modeToggle = document.querySelector(".dark-light"),
//       searchToggle = document.querySelector(".searchToggle");


//       let getMode = localStorage.getItem("mode");
//         if(getMode && getMode === "dark-mode"){
//             body.classList.add("dark");
//         }
      
// // js code to toggle dark and light mode
//       modeToggle.addEventListener("click" , () =>{
//         modeToggle.classList.toggle("active");
//         body.classList.toggle("dark");

//         //js code to keep user selected mode even page refresh or file reopen
//         if(!body.classList.contains("dark")){
//           localStorage.setItem("mode" , "light-mode");
//         }else{
//           localStorage.setItem("mode" , "dark-mode");
//         }
//       });

// // js code to toggle search box
//         searchToggle.addEventListener("click" , () =>{
//         searchToggle.classList.toggle("active");
//       });

// // js code to toggle siderbar
// sidebarOpen.addEventListener("click", () =>{
//   nav.classList.add("active");
// });

// body.addEventListener("click" , e =>{
//   let clickedElm = e.target;

//   if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
//     nav.classList.remove("active");
//   }
// });