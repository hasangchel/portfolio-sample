const modal = document.querySelector("#modal");
const modalTxt = document.querySelector("#modal p");

window.addEventListener("load", () => {
  modal.classList.add("active");
});

modalTxt.addEventListener("click", () => {
  modal.classList.remove("active");
});
