// validate stuff

//STEP FIVE
const hasInvalidInput = (inputList) => {
  console.log("e");
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
// STEP FOUR
const toggleButtonState = (inputList, buttonElement, settingsObject) => {
  console.log("d");
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settingsObject.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(settingsObject.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

//STEP 3.1
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__form_input_type_disabled");
};

//STEP 3.2
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove("popup__form_input_type_disabled");
  errorElement.textContent = "";
};

//STEP THREE Check Validity of Input Toggle error on or off
const checkInputValidity = (formElement, inputElement) => {
  console.log("c");
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

//STEP TWO Setting Event Listeners

const setEventListeners = (formElement, settingsObject) => {
  console.log("b");
  //Make an array of all the inputs that are in the formElement
  const inputsList = Array.from(
    formElement.querySelectorAll(settingsObject.inputSelector)
  );

  //Submit Button associated with that form
  const buttonElement = formElement.querySelector(
    settingsObject.submitButtonSelector
  );
  //Go through each input individuall
  inputsList.forEach((inputElement) => {
    //If that input is touched, we immediately check validity
    inputElement.addEventListener("input", function () {
      console.log("Running Inputs Event LIstener");
      checkInputValidity(formElement, inputElement); // Step 3
      toggleButtonState(inputsList, buttonElement, settingsObject); // Step 4
    });
  });
};

// STEP ONE Looking at the input information
function enableValidation(settingsObject) {
  console.log("a");
  const formsList = Array.from(
    document.querySelectorAll(settingsObject.formSelector)
  );
  formsList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, settingsObject);
  });
}

enableValidation({
  formSelector: ".form",
  inputSelector: ".input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "popup__card_submit-disabled",
  inputErrorClass: "popup__form_input_type_error",
});
