const cartIcon = document.querySelector(".cart");
const modalLink = document.querySelector(".modal");
// let isModalOpen = false;

cartIcon.addEventListener("click", () => {
  modalLink.classList.toggle("none");
});
