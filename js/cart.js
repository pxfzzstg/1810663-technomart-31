const purchaseBtns = document.querySelectorAll(".button-purchase");
const cartPopup = document.querySelector(".modal-cart");
const cartClose = cartPopup.querySelector(".modal-close");

purchaseBtns.forEach(function (btn) {
    btn.addEventListener("click", function (evt) {
        evt.preventDefault();
        cartPopup.classList.add("modal-show");
    });
});

cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
});
  
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (cartPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            cartPopup.classList.remove("modal-show");
        }
    }
});
