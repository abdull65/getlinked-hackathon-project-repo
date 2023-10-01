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

///////////////////////////////////////////////
const faqEl = document.querySelectorAll(".faqListItem");
const faqAnsEl = document.querySelectorAll(".answerBox");
const openAnswer = document.querySelectorAll(".openAnswer");
const closeAnswer = document.querySelectorAll(".closeAnswer");
faqEl.forEach((question) => {
  question.addEventListener("click", (event) => {
    event.stopPropagation();
    question.classList.toggle("active");
  });
});
// Sticky navigation
const stickyIntersectionEl = document.querySelector("#indexSection");
const stickyObs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
stickyObs.observe(stickyIntersectionEl);

///////////////////////////////////////////////////
const sectionEl = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navLink");

window.onscroll = () => {
  sectionEl.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("current");
        document
          .querySelector("nav a[href*=" + id + "]")
          .classList.add("current");
      });
    }
  });
};

////////////////////////////////////////////////////////////
const regBtnEl = document.querySelectorAll("#regBtn");
const resetBtnEl = document.querySelector("#resetBtn");
const popUpEl = document.querySelector(".popUp");
const submitFormBtn = document.getElementById("submitFormBtn");
const regSectionEl = document.getElementById("registerSection");
regBtnEl.forEach((regBtn) => {
  regBtn.addEventListener("click", () => {
    regSectionEl.style.visibility = "visible";
  });
  submitFormBtn.addEventListener("click", () => {
    popUpEl.style.visibility = "visible";
  });
  resetBtnEl.addEventListener("click", () => {
    location.reload();
  });
});
