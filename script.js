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
      if (q !== question && q.classList.contains("active")) {
        q.classList.remove("active");
      }
    });
    question.classList.toggle("active");
  });
});
//////////////////// Sticky navigation ////////////////////////////
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
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const phoneEl = document.getElementById("phone");
const categoryEl = document.getElementById("category");
const groupSizeEl = document.getElementById("group_size");
const topicEl = document.getElementById("project_topic");
const inputEl = document.querySelectorAll(".regInput");

const submitFormBtn = document.getElementById("submitFormBtn");
const regSectionEl = document.getElementById("registerSection");
regBtnEl.forEach((regBtn) => {
  regBtn.addEventListener("click", () => {
    regSectionEl.classList.add("showReg");
    regBtnListEl.classList.add("showReg");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  submitFormBtn.addEventListener("click", () => {
    inputEl.forEach((input) => {
      if (input.value === "") {
        input.classList.add("warn");
        return;
      } else {
        input.classList.remove("warn");
      }
    });
    // Validate name (letters and spaces only)
    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(nameEl.value)) {
      nameEl.classList.add("warn");
      // alert("Invalid name");
      return;
    } else {
      nameEl.classList.remove("warn");
    }

    // Validate group size (check if an option is selected)
    if (groupSizeEl.value === "") {
      groupSizeEl.classList.add("warn");
      // alert("Please select a group size");
      return;
    } else {
      groupSizeEl.classList.remove("warn");
    }

    // Validate category (check if an option is selected)
    if (categoryEl.value === "") {
      categoryEl.classList.add("warn");
      // alert("Please select a category");
      return;
    } else {
      categoryEl.classList.remove("warn");
    }

    // Validate email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailEl.value)) {
      emailEl.classList.add("warn");
      // alert("Invalid email address");
      return;
    } else {
      emailEl.classList.remove("warn");
    }

    // Validate phone number using regex (assuming 10-digit US format)
    const phoneRegex = /^\d{9,12}$/;

    if (!phoneRegex.test(phoneEl.value || phoneEl === "")) {
      phoneEl.classList.add("warn");
      // alert("Invalid phone number");
      return;
    } else {
      phoneEl.classList.remove("warn");
    }

    // Show popup
    popUpEl.style.visibility = "visible";
    popUpEl.classList.add("popUp_animation");
    popUpEl.addEventListener("animationend", () => {
      popUpEl.classList.remove("popUp_animation");
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  resetBtnEl.addEventListener("click", () => {
    location.reload();
  });
  if (regSectionEl.classList.contains("showReg")) {
    navLinkEl.forEach((link) => {
      link.addEventListener("click", () => {
        console.log("working");
        regSectionEl.classList.remove("showReg");
      });
    });
  }
});
document.querySelector(".backToTopBtn").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
