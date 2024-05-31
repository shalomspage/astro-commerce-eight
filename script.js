const cartIcon = document.querySelector("#cart-icon");
const modalLink = document.querySelector(".modal");

cartIcon.addEventListener("click", () => {
  modalLink.classList.toggle("none");
});
