const menuBtnEl = document.querySelector(".navMenuBox");
const navBarEl = document.querySelector(".navBar");
const closeMenuEl = document.querySelector("#closeBtn");
const bodyEl = document.querySelector("#body");

menuBtnEl.addEventListener("click", () => {
  navBarEl.classList.toggle("openMenu");
  closeMenuEl.classList.toggle("openMenu");
  bodyEl.classList.toggle("openMenu");
});
