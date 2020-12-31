const editBtn = document.querySelector(".profile__editbtn");
const addBtn = document.querySelector(".profile__addbtn");
const inputName = document.querySelector("#inputName");
const inputTitle = document.querySelector("#inputTitle");
const currentName = document.querySelector(".profile__name");
const currentTitle = document.querySelector(".profile__title");
const cardTemplate = document.querySelector("#cardTemplate").content;
const gridList = document.querySelector(".grid__list");
const popUpProfile = document.querySelector(".popup");
const popUpCard = document.querySelector(".popup__card");
const popupImageBlock = document.querySelector(".popup__image");
const popupImage = popupImageBlock.querySelector(".grid__image_active");
const popupCaption = popupImageBlock.querySelector(".popup__image_capt");

const profileForm = document.forms.profileForm;
const name = profileForm.elements.profileName;
const title = profileForm.elements.profileTitle;
const addForm = document.forms.addForm;
const placeName = addForm.elements.placeName;
const fileName = addForm.elements.placeFileName;
const addButton = addForm.elements.create_btn;
const submitPlaceBtn = addForm.elements.addFormSubmit;
