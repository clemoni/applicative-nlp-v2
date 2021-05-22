const axios = require("axios").default;
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../../../config/.env"),
});

/**
 * MeaningCloud Object
 * main param + url
 */
const meaningCloudReq = {
  params: {
    key: null,
    lang: "uk",
    txt: null,
    txtf: "plain",
  },
  url: `https://api.meaningcloud.com/sentiment-2.1`,

  getData: async function () {
    const { params } = this;
    const response = await axios.get(this.url, { params });
    return response;
  },
};

const callMeaningClound = async (req, res) => {
  const { txt } = req.body;
  const key = process.env.API_KEY;

  const params = { ...meaningCloudReq.params, txt, key };
  const requestApi = { ...meaningCloudReq, params };

  try {
    const response = await requestApi.getData();
    const { data } = response;
    res.json(data);
  } catch (error) {
    throw new Error("Something went wrong, :(");
  }
};

module.exports = callMeaningClound;
