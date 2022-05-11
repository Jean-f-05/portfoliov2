const mainBtn = document.querySelector(".mainBtn");
const cardMain = document.querySelector(".card__main ");

const cardText = document.getElementsByClassName("card__text__el");
const cardImg = document.querySelector(".card__img");

mainBtn.addEventListener("click", () => {
  mainBtn.classList.add("hide");
  setTimeout(() => {
    cardMain.classList.remove("hidden");

    Array.from(cardText).forEach((element) => {
      element.classList.add("textIn");
      cardImg.classList.add("imgIn");
    });
  }, 2000);
});
