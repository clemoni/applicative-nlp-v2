const dic = {
  score_tag: {
    "P+": "strong positive",
    P: "positive",
    NEU: "neutral",
    N: "negative",
    "N+": "strong negative",
    NONE: "without polarity",
  },
  agreement: {
    AGREEMENT: "the different elements have the same polarity",
    DISAGREEMENT:
      "there is disagreement between the different elements' polarity",
  },
  subjectivity: {
    OBJECTIVE: "The text does not have any subjectivity marks",
    SUBJECTIVE: "The text has subjective marks",
  },
  irony: {
    NONIRONIC: "The text does not have any irony marks",
    IRONIC: "The text has irony marks",
  },
};

const test = {
  agreement: "AGREEMENT",
  confidence: "100",
  irony: "NONIRONIC",
  model: "general_fr",
  score_tag: "P",
  subjectivity: "SUBJECTIVE",
  sentence_list: [{ text: "C’est un " }],
  sentimented_concept_list: [{ truc: "dddk" }],
  sentimented_entity_list: [1, 2, 3],
};

/**
 * Retrive the Data that are going to be used.
 * confidence etc.
 * @param {obj} dataAnalysis
 * @returns
 */
const splitData = (dataAnalysis) => {
  const {
    confidence,
    sentimented_entity_list,
    sentimented_concept_list,
    sentence_list,
    model,
    ...rest
  } = dataAnalysis;
  return [{ confidence }, rest];
};

/**
 * For each entry of the return Data object
 * Split in top the type of analysis and the corresponding code
 * Retrieve the Definition corresponding the given code
 * @param {object} entry
 * @returns
 */
const findDefinitionType = (entry) => {
  const [type, value] = entry;
  const definitions = dic[type];
  const output = {};
  output[type] = definitions[value];
  return output;
};

/**
 * Iterate the returned Data object
 *  confidence does not have to be transform so cast aside
 *  For the rest get corresponding definition
 *  return object confidence and rest
 * @param {*} splitData
 * @param {*} findDefinitionType
 * @returns
 */
const composeDefinition = (splitData, findDefinitionType) => (dataAnalysis) => {
  const [confidence, rest] = splitData(dataAnalysis);
  return Object.entries(rest).reduce((obj, entry) => {
    const definition = findDefinitionType(entry);
    // console.log(definition);
    return { ...obj, ...definition };
  }, confidence);
};

const transformData = composeDefinition(splitData, findDefinitionType);

export { splitData, findDefinitionType, transformData };

// console.log(transformData(test));
