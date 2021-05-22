import * as transform from "../src/public/js/formHandlerHelpers/transformData";

describe("tranfrom Data", () => {
  test("It keeps essential Data", () => {
    const input = {
      confidence: "100",
      agreement: "AGREEMENT",
      irony: "NONIRONIC",
      score_tag: "P",
      subjectivity: "SUBJECTIVE",
      model: "general_fr",
      sentence_list: [{ text: "random" }],
      sentimented_concept_list: [{ truc: "random" }],
      sentimented_entity_list: [1, 2, 3],
    };

    expect(transform.splitData(input)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          agreement: "AGREEMENT",
          irony: "NONIRONIC",
          score_tag: "P",
          subjectivity: "SUBJECTIVE",
        }),
        expect.objectContaining({ confidence: "100" }),
      ])
    );
  });

  test("To give corresponding definition type", () => {
    const input = ["agreement", "AGREEMENT"];
    const output = {
      agreement: "the different elements have the same polarity",
    };

    expect(transform.findDefinitionType(input)).toEqual(
      expect.objectContaining(output)
    );
  });

  test("to transform Data", () => {
    const input = {
      confidence: "100",
      agreement: "AGREEMENT",
      irony: "NONIRONIC",
      score_tag: "P",
      subjectivity: "SUBJECTIVE",
      model: "general_fr",
      sentence_list: [{ text: "random" }],
      sentimented_concept_list: [{ truc: "random" }],
      sentimented_entity_list: [1, 2, 3],
    };
    const output = {
      confidence: "100",
      agreement: "the different elements have the same polarity",
      irony: "The text does not have any irony marks",
      score_tag: "positive",
      subjectivity: "The text has subjective marks",
    };

    expect(transform.transformData(input)).toEqual(
      expect.objectContaining(output)
    );
  });
});
