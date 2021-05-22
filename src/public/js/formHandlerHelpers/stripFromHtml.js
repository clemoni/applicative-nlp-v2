/**
 * Make sure text input is clear of HTML markup
 * @param {string} content
 * @returns
 */
export const stripFromHtml = (content) => {
  return content.replace(/(<([^>]+)>)/gi, "");
};
