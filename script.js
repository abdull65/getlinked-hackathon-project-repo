const menuBtnEl = document.querySelector(".navMenuBox");
const navBarEl = document.querySelector(".navBar");
const closeMenuEl = document.querySelector("#closeBtn");
const bodyEl = document.querySelector("body");
const navLinkEl = document.querySelectorAll(".navLink");

menuBtnEl.addEventListener("click", (event) => {
  // Prevent the click event from propagating to the body element
  event.stopPropagation();
  navBarEl.classList.toggle("openMenu");
  closeMenuEl.classList.toggle("openMenu");
  bodyEl.classList.toggle("openMenu");
});

bodyEl.addEventListener("click", () => {
  if (navBarEl.classList.contains("openMenu")) {
    navBarEl.classList.remove("openMenu");
    closeMenuEl.classList.toggle("openMenu");
    bodyEl.classList.remove("openMenu");
  }
});
navLinkEl.forEach((link) => {
  if (navBarEl.classList.contains("openMenu")) {
    link.addEventListener("click", () => {
      navBarEl.classList.remove("openMenu");
      closeMenuEl.classList.toggle("openMenu");
      bodyEl.classList.remove("openMenu");
    });
  }
});
