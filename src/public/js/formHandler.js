const axios = require("axios").default;

// forHandler function
import { stripFromHtml } from "./formHandlerHelpers/stripFromHtml";
import { testFormValue } from "./formHandlerHelpers/testFormValue";
import { fireAlert, fireSuccess, clearAlert } from "./formHandlerHelpers/alert";
import { renderTemplate, clearRender } from "./formHandlerHelpers/renderData";
import { transformData } from "./formHandlerHelpers/transformData";

const evaluateUrl = () => {
  const mode = process.env.NODE_ENV;
  return mode === "development"
    ? "http://localhost:8082/getcontent"
    : "/getcontent";
};

/**
 * Axios post request to the API
 * @param {*} formdata
 * @returns obj
 */
const getVal = (evaluateUrl) => async (txt) => {
  const res = await axios.post(evaluateUrl(), { txt });
  return res;
};

const getValue = getVal(evaluateUrl);

// const getValue = async (txt) => {
//   const res = await axios.post("http://localhost:8082/getcontent", { txt });
//   return res;
// };

/**
 * Split the data between (code, msg) and the analysis of the text
 * return new Promise
 * if code error > return msg error
 * if code ok > return the analysis
 * @param {obj} data
 * @returns
 */
const dispatchAnalysisRes = (data) => {
  const {
    status: { code, msg },
    ...analysis
  } = data;
  return new Promise((resolve, reject) => {
    code === "0" ? resolve(analysis) : reject(msg);
  });
};

export {
  testFormValue,
  stripFromHtml,
  getValue,
  dispatchAnalysisRes,
  fireAlert,
  clearAlert,
  renderTemplate,
  fireSuccess,
  clearRender,
  transformData,
};
