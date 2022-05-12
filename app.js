const mainBtn = document.querySelector(".mainBtn");
const cardMain = document.querySelector(".card__main ");
// const cardBtn = document.querySelector(".card__btn");
const cardBtn = document.querySelector(".card__main__el");

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
