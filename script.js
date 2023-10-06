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
faqEl.forEach((question) => {
  question.addEventListener("click", (event) => {
    event.stopPropagation();
    faqEl.forEach((q) => {
      if (q.classList.contains("active")) {
        q.classList.remove("active");
      }
      question.classList.add("active");
    });
  });
});
// Sticky navigation
const stickyIntersectionEl = document.querySelector("#indexSection");
const stickyObs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    document.body.classList.toggle("sticky", !ent.isIntersecting);
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
let currentLink = null;

window.onscroll = () => {
  sectionEl.forEach((sec) => {
    const scrollPosition = window.scrollY;
    const offsetTop = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
      const link = document.querySelector('nav a[href*="' + id + '"]');
      if (link && link !== currentLink) {
        if (currentLink) {
          currentLink.classList.remove("current");
        }
        link.classList.add("current");
        currentLink = link;
      }
    }
  });
};

////////////////////////////////////////////////////////////
const regBtnEl = document.querySelectorAll("#regBtn");
const regBtnListEl = document.querySelector("#regBtnList");
const resetBtnEl = document.querySelector("#resetBtn");
const popUpEl = document.querySelector(".popUp");
const submitFormBtn = document.getElementById("submitFormBtn");
const regSectionEl = document.getElementById("registerSection");
regBtnEl.forEach((regBtn) => {
  regBtn.addEventListener("click", () => {
    regSectionEl.classList.add("showReg");
    regBtnListEl.classList.add("showReg");
    // regSectionEl.classList.add("slide");
  });
  submitFormBtn.addEventListener("click", () => {
    popUpEl.style.visibility = "visible";
    popUpEl.classList.add("popUp_animation");
    popUpEl.addEventListener("animationend", () => {
      popUpEl.classList.remove("popUp_animation");
    });
  });
  resetBtnEl.addEventListener("click", () => {
    location.reload();
  });
});
