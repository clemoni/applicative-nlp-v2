import { stripFromHtml } from "../src/public/js/formHandlerHelpers/stripFromHtml";

describe("stripFromHtml", () => {
  test("it remove any markutp html", () => {
    const input = "<p>Lorem ipsum dolor</span> Impedit aperiam</span></p>";
    const output = "Lorem ipsum dolor Impedit aperiam";

    expect(stripFromHtml(input)).toEqual(output);
  });
});
