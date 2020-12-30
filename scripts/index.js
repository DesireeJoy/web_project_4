"use strict";
import Card from "./card.js";
import FormValidator from "./formValidator.js";
import {
  imageEl,
  imageCap,
  openPopup,
  closePopUp,
  closeWithEsc,
} from "./utils.js";

const editBtn = document.querySelector(".profile__editbtn");
const addBtn = document.querySelector(".profile__addbtn");
const inputName = document.querySelector("#inputName");
const inputTitle = document.querySelector("#inputTitle");
const currentName = document.querySelector(".profile__name");
const currentTitle = document.querySelector(".profile__title");

const gridList = document.querySelector(".grid__list");
const popUpProfile = document.querySelector(".popup");
const popUpCard = document.querySelector(".popup__card");
const popupImageBlock = document.querySelector(".popup__image");
const closeImage = popupImageBlock.querySelector(".popup__image_close");
const inputPlace = document.querySelector("#inputPlace");
const inputUrl = document.querySelector("#inputFile");

const profileForm = document.forms.profileForm;

const addForm = document.forms.addForm;

const editProfileForm = document.querySelector(".popup__form-selector");
const addCardForm = document.querySelector(".popup__card_form-selector");

const config = {
  formSelector: ".form",
  inputSelector: ".input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "popup__card_submit-disabled",
  inputErrorClass: "popup__form_input_type_error",
};

const editProfileValidator = new formValidator(config, editProfileForm);
const addCardValidator = new formValidator(config, addCardForm);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

initialCards.forEach((cardData) => {
  const thisCard = new Card(cardData, "#cardTemplate");
  const cardElement = thisCard.generateCard();
  gridList.prepend(cardElement);
});

//Accepts Submit Event for Adding a New Card
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const cardData = {
    name: inputPlace.value,
    link: inputUrl.value,
    alt: inputPlace.value,
  };
  const newCard = new Card(cardData, "#cardTemplate");

  //Form Values
  const cardElement = newCard.generateCard();
  closePopUp(popUpCard); //
  gridList.prepend(cardElement);
  resetCardForm();
}

function resetCardForm() {
  addForm.reset();
}

function handleUserFormSubmit(evt) {
  // This line stops the browser from submitting the form in the default way.
  evt.preventDefault();

  // Insert new values using the textContent property of the
  // querySelector() method
  currentName.textContent = inputName.value;
  currentTitle.textContent = inputTitle.value;
  closePopUp(popUpProfile); //
}

//FUNCTIONS FOR ALL PLACE CARDS

//Show and Hide all Modal Windows
function openPopUp(popUpSelect) {
  popUpSelect.classList.add("popup_visible");
  document.addEventListener("keydown", closeWithEsc, false);
}

// Connect the handler to the form:
// it will watch the submit event

// Open Popups

profileForm.addEventListener("submit", handleUserFormSubmit);
popUpCard.addEventListener("submit", handleCardFormSubmit);
addBtn.addEventListener("click", () => {
  openPopUp(popUpCard);
});

editBtn.addEventListener("click", () => {
  inputName.value = currentName.textContent;
  inputTitle.value = currentTitle.textContent;
  openPopUp(popUpProfile);
});
// Close Popups
profileForm.querySelector(".popup__close").addEventListener("click", () => {
  closePopUp(popUpProfile);
});

addForm.querySelector(".popup__close").addEventListener("click", () => {
  closePopUp(popUpCard);
});
closeImage.addEventListener("click", function (evt) {
  closePopUp(popupImageBlock);
});

popUpCard.addEventListener("click", (evt) => {
  if (evt.target === popUpCard) {
    closePopUp(popUpCard);
  }
});

popUpProfile.addEventListener("click", (evt) => {
  if (evt.target === popUpProfile) {
    closePopUp(popUpProfile);
  }
});

popupImageBlock.addEventListener("click", (evt) => {
  if (evt.target === popupImageBlock) {
    closePopUp(popupImageBlock);
  }
});