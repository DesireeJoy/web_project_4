let popUp = document.querySelector(".popup");

//Show and Hide
function editProfile() {
  popUp.classList.add("popup__view-visible");
}
function closeEdit() {
  popUp.classList.remove("popup__view-visible");
}

// Let's find the form in the DOM
let popUp2 = document.querySelector(".popup__form");
let formElement = popUp2.querySelector(".popup__form-selector");
let closeElement = document.querySelector(".popup__close");
let editBtn = document.querySelector(".profile__editbtn");

// Next is the form submit handler, though
// it won't submit anywhere just yet
function formSubmitHandler(evt) {
  let nameField = document.querySelector(".profile__name-span").value;
  let titleField = document.querySelector(".profile__title").value;
  let updateName = document.querySelector(".popup__name");
  let updateTitle = document.querySelector(".popup__title");
  evt.preventDefault();
  // This line stops the browser from submitting the form in the default way.
  // Having done so, we can define our own way of submitting the form.
  // We'll explain it in more detail later.

  // Let's find the form fields in the DOM // Get the corresponding Value
  let newName = document.querySelector(".popup__name").value; // Use querySelector()
  let newTitle = document.querySelector(".popup__title").value; // Use querySelector()

  // Insert new values using the textContent property of the
  // querySelector() method
  document.querySelector(".profile__name-span").textContent = newName;
  document.querySelector(".profile__title").textContent = newTitle;
  popUp.classList.remove("popup__view-visible");
}

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener("submit", formSubmitHandler);
closeElement.addEventListener("click", closeEdit);
editBtn.addEventListener("click", editProfile);