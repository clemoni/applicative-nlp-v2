import _tool from "fp-dom-tool";

import "./scss/style.scss";

import * as fhandler from "./js/formHandler";

const btnsubmit = _tool._getElementClass("form__submit");

btnsubmit.addEventListener("click", (e) => {
  e.preventDefault();
  fhandler.clearRender();
  fhandler.clearAlert();

  const content = _tool._getElementID("content").value;

  fhandler
    .testFormValue(content) // test is content is empty
    .then((notEmptyContent) => fhandler.stripFromHtml(notEmptyContent)) //remove potiential html markup
    .then((plainContent) => fhandler.getValue(plainContent)) // call server > call api
    .then((response) => fhandler.dispatchAnalysisRes(response.data)) // dispatch data new promise
    .then((analysis) => fhandler.transformData(analysis)) // change reponse to corresponding explanation
    .then((convertedAnalysis) => {
      fhandler.renderTemplate(convertedAnalysis); //render template
      fhandler.fireSuccess("Text successfully processed."); //success alert
    })
    .catch((error) => fhandler.fireAlert(error));
});
