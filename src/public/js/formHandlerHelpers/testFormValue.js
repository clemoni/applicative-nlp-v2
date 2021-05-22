import fp from "lodash/fp";

/**
 * Test is input is empty or null
 * create new Promise
 * if null or empty return error message > later parsed as AlertDanger(msg)
 * if not null or empty return content of the input
 * @param {*} content
 * @returns
 */
export const testFormValue = (content) => {
  return new Promise((resolve, reject) => {
    const isEmpty = fp.isEmpty(content);
    isEmpty ? reject(`Please enter something.`) : resolve(content);
  });
};
