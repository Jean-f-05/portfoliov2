const mainBtn = document.querySelector(".mainBtn");
const cardMain = document.querySelector(".card__main ");

mainBtn.addEventListener("click", () => {
  mainBtn.classList.add("hide");
  setTimeout(() => {
    cardMain.classList.remove("hidden");
  }, 2000);
});
