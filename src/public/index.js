import _tool from "fp-dom-tool";
const axios = require("axios").default;

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
