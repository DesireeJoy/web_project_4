const { default: Popup } = require("./Popup");

class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._form = this._popup.querySelector(".form");
    this._submitHandler = submitHandler;
    this._submitHandler = this._submitHandler.bind(this);
    this._inputs = this._form.querySelectorAll(".form_input");
  }

  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", () => {
      this._submitHandler(this._getInputValues());
    });
  }
}
export default PopupWithForm;