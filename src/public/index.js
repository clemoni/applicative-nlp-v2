import _tool from "fp-dom-tool";
import "./scss/style.scss";
import _alert from "fp-dom-alert";
import "fp-dom-alert/lib/index.css";

const axios = require("axios").default;

const messageContainer = _tool._getElementClass("_message");
const appendContainer = _tool._appendElement(messageContainer);
const _switchAlertDisplay = _tool._switchElementDisplay(messageContainer);
appendContainer(_alert._alertSuccess("All is ready"));
_switchAlertDisplay();

const getValue = async (url) => {
  const res = await axios.get(url);
  return res;
};

const submit = _tool._getElementClass("form__submit");
const input = _tool._getElementID("value");
submit.addEventListener("click", (e) => {
  e.preventDefault();

  getValue("/getcontent")
    .then((res) => res.data)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});
