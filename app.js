///////////////////
// SELECTOR SECTION 1

const section1 = document.querySelector(".section1");
const mainComponent = document.querySelector("main");
const mainBtn = document.querySelector(".mainBtn");
const cardMain = document.querySelector(".card__main");
const cardBtn = document.querySelector(".card__main__el");
const cardText = document.getElementsByClassName("card__text__el");
const cardImg = document.querySelector(".card__img");
const cardBg = document.querySelector(".card__main__bg");

///////////////////
// SELECTOR SECTION 2

const section2 = document.querySelector(".section2");
const portDiv = document.querySelector(".portfolio__div");
const techSpan = document.querySelector(".tech__span");
const portMain = document.querySelector(".main__portfolio__grid");

///////////////////
//EVENT LISTENER SECTION 1

mainBtn.addEventListener("click", () => {
  mainBtn.classList.add("hide");
  setTimeout(() => {
    cardMain.classList.remove("hidden");

    Array.from(cardText).forEach((element) => {
      cardBg.classList.add("backgroundIn");
      element.classList.add("textIn");
      cardImg.classList.add("imgIn");
      cardBtn.classList.add("slideUp");
    });
  }, 2000);
});

///////////////////
//EVENT LISTENER SECTION 2

cardBtn.addEventListener("click", () => {
  section1.classList.add("hide");

  setTimeout(() => {
    section1.innerHTML = "";
    section1.classList.remove("section1");
    section2.classList.remove("hidden");
    portDiv.classList.add("textIn");
    techSpan.classList.add("spanIn");
    portMain.classList.add("slideUp");
  }, 2100);
  // mainComponent.innerHTML = "";
  // mainComponent.classList.remove("center");
});
