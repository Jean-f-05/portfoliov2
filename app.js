const mainBtn = document.querySelector(".mainBtn");
console.log(mainBtn);
const cardMain = document.querySelector(".card__main ");

mainBtn.addEventListener("click", () => {
  mainBtn.classList.add("hidden");
  cardMain.classList.remove("hidden");
});
