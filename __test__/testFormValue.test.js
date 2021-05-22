import { testFormValue } from "../src/public/js/formHandlerHelpers/testFormValue";

describe("Test input value", () => {
  test("No empty, it return the content ", () => {
    const input = "some random test";
    return testFormValue(input).then((content) => {
      expect(content).toEqual(input);
    });
  });

  test("Emtpy, catch error", () => {
    const input = " ";
    return testFormValue(input).catch((error) => {
      expect(error).toEqual(`Please enter something.`);
    });
  });

  test("Not defined, cath error", () => {
    const input = null;
    return testFormValue(input).catch((error) => {
      expect(error).toEqual(`Please enter something.`);
    });
  });
});
