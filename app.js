const mainBtn = document.querySelector(".mainBtn");
const cardMain = document.querySelector(".card__main ");
// const cardBtn = document.querySelector(".card__btn");
const cardBtn = document.querySelector(".card__main__el");

const mainComponent = document.querySelector("main");
console.log(mainComponent);

const cardText = document.getElementsByClassName("card__text__el");
const cardImg = document.querySelector(".card__img");
const cardBg = document.querySelector(".card__main__bg");

mainBtn.addEventListener("click", () => {
  mainBtn.classList.add("hide");
  setTimeout(() => {
    cardMain.classList.remove("hidden");

    Array.from(cardText).forEach((element) => {
      cardBg.classList.add("backgroundIn");
      element.classList.add("textIn");
      cardImg.classList.add("imgIn");
      cardBtn.classList.add("cardBtnIn");
    });
  }, 2000);
});

cardBtn.addEventListener("click", () => {
  mainComponent.innerHTML = "";
  mainComponent.classList.remove("center");
});
