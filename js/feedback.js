const feedbackBtn = document.querySelector(".button-contact");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".modal-feedback-form");
const feedbackName = feedbackForm.querySelectorAll("input")[0];
const feedbackEmail = feedbackForm.querySelectorAll("input")[1];

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("feedback");
} catch (err) {
  isStorageSupport = false;
}

feedbackBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");

    if (storage) {
        const obj = JSON.parse(storage);
        feedbackName.value = obj.feedbackName;
        feedbackEmail.value = obj.feedbackEmail;
    }

    feedbackName.focus();
});

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-error");
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            const obj = {
                feedbackName: feedbackName.value,
                feedbackEmail: feedbackEmail.value,
            };
            localStorage.setItem("feedback", JSON.stringify(obj));
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-show");
        feedbackPopup.classList.remove("modal-error");
      }
    }
});
