import _tool from "fp-dom-tool";

const analysisTemplate = require("../../view/layout/analysis.handlebars");
const resultDom = _tool._getElementClass("result");

/**
 * Create a Div to receive the template
 * Call the handlebars template and parsed the transformData
 * Add the div to the DOM
 * @param {obj} analysis
 */
export const renderTemplate = (analysis) => {
  const div = _tool._createElement("div")();
  div.innerHTML = analysisTemplate(analysis);
  _tool._appendElement(resultDom)(div);
};

export const clearRender = () => {
  resultDom.innerHTML = "";
};
