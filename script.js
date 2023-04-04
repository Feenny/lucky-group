const circleIcons = document.querySelectorAll(".circle-icon");
const girlSection = document.querySelector(".img-girl-section");
const descrSection = document.querySelectorAll(" .content *:not(.main-text) ");
const header = document.querySelectorAll(".main-text ");
const signUpBtn = document.querySelector(".sign-up-btn");
const burger = document.querySelector(".burger");
if (window.innerWidth < 1024) {
  document.querySelector(".logo__img").src = "source/Logo-white.svg";
}
console.log(descrSection);
window.addEventListener("load", () => {
  circleIcons.forEach((icon) => {
    icon.classList.add("active");
  });
});

fetch("https://baconipsum.com/api/?type=lucky")
  .then((response) => response.json())
  .then((data) => {
    JSON.stringify(data[1]);

    const description = data[1].match(/^([\w]+\b[\W]*){1,14}/)[0]; // получаем первый элемент массива с описанием
    const descriptionElem = document.querySelector(".paragraph"); // получаем элемент, в который будем добавлять описание
    descriptionElem.textContent = description; // добавляем описание в элемент
  })
  .catch((error) => console.log(error));

function changeImageSrc() {
  if (window.innerWidth < 1024) {
    document.querySelector(".logo__img").src = "source/Logo-white.svg";
  } else {
    document.querySelector(".logo__img").src = "source/Logo.svg";
  }
}
window.addEventListener("resize", changeImageSrc);

if (window.innerWidth < 650) {
  signUpBtn.innerHTML =
    '<img class="login" src="source/login.svg" alt="Login icon">';
}

function changeLogin() {
  if (window.innerWidth < 650) {
    signUpBtn.innerHTML =
      '<img class="login" src="source/login.svg" alt="Login icon">';
  } else {
    signUpBtn.innerHTML = "Sign Up";
  }
}
window.addEventListener("resize", changeLogin);

const mobileAppear = (e) => {
  girlSection.classList.add("disappear");
  descrSection.forEach((element) => {
    element.classList.add("appear");
  });
  header.forEach((element) => {
    element.style.transition = "all 1s ease-out";
    element.style.transform = "translateY(0)";
  });
  document.querySelector(".input-invalid").style.transform = "translateY(0)";
  document.querySelector(".input-invalid").classList.remove("appear");
};
window.addEventListener("touchmove", mobileAppear);

let nav_opened = false;

function openNav() {
  if (nav_opened == false) {
    document.querySelector(".navigation ").classList.add("nav__active");
    console.log(nav_opened);
    nav_opened = true;
  } else {
    document.querySelector(".navigation ").classList.remove("nav__active");
    nav_opened = false;
  }
}

burger.addEventListener("click", openNav);
