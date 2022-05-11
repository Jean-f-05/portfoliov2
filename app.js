const mainBtn = document.querySelector(".mainBtn");
const cardMain = document.querySelector(".card__main ");
// const cardText = document.querySelectorAll(".card__text")[0].children;
const cardText = document.getElementsByClassName("card__text__el");

console.log(typeof cardText);

mainBtn.addEventListener("click", () => {
  mainBtn.classList.add("hide");
  setTimeout(() => {
    cardMain.classList.remove("hidden");

    Array.from(cardText).forEach((element) => {
      element.classList.add("textIn");
    });
  }, 2000);
});
