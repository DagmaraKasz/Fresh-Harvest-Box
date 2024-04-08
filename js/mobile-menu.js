// (() => {
//   const mobileMenu = document.querySelector(".js-menu-container");
//   const openMenuBtn = document.querySelector(".js-open-menu");
//   const closeMenuBtn = document.querySelector(".js-close-menu");

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute("aria-expanded") === "true" || false;
//     openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
//     mobileMenu.classList.toggle("is-open");

//     const scrollLockMethod = !isMenuOpen
//       ? "disableBodyScroll"
//       : "enableBodyScroll";
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener("click", toggleMenu);
//   closeMenuBtn.addEventListener("click", toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove("is-open");
//     openMenuBtn.setAttribute("aria-expanded", false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();




















// (() => {

//   const mobileMenu = document.querySelector(".site-nav");
//   const mobileMenu = document.querySelector(".burger");

//   burgerIcon.addEventListener("click", function());
//   mobileNav.classList.toggle("active");
//   burgerIcon.classList.toggle("active");
// });

  // const mobileMenu = document.querySelector(".js-menu-container");
  // const openMenuBtn = document.querySelector(".js-open-menu");
  // const closeMenuBtn = document.querySelector(".js-close-menu");

  // const toggleMenu = () => {
  //   const isMenuOpen =
  //     openMenuBtn.getAttribute("aria-expanded") === "true" || false;
  //   openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
  //   mobileMenu.classList.toggle("is-open");

  //   const scrollLockMethod = !isMenuOpen
  //     ? "disableBodyScroll"
  //     : "enableBodyScroll";
  //   bodyScrollLock[scrollLockMethod](document.body);
  // };

  // openMenuBtn.addEventListener("click", toggleMenu);
  // closeMenuBtn.addEventListener("click", toggleMenu);

  // // Close the mobile menu on wider screens if the device orientation changes
  // window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
  //   if (!e.matches) return;
  //   mobileMenu.classList.remove("is-open");
  //   openMenuBtn.setAttribute("aria-expanded", false);
  //   bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();

// let isOpen = false

// const hamburger = document.getElementById('hamburger')

// function renderHamburger() {
//   hamburger.className = isOpen ? 'open' : 'closed'
// }

// function toggleHamburger() {
//   isOpen = !isOpen
//   renderHamburger()
// }

// hamburger.addEventListener('click', toggleHamburger)