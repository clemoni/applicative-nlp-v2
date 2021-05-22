const express = require("express");
const path = require("path");
const cors = require("cors");
const { red } = require("colorette");

require("colors");

const app = express();

app.use(express.static("dist"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

app.use(cors());
console.log(path.join(__dirname, "../../dist/index.html"));

app.get("/", (req, res) => {
  path.join(__dirname, "../../dist/index.html");
});

app.listen(PORT, (error) => {
  try {
    console.log(`Server running on PORT: ${PORT}`.yellow.inverse);
  } catch (err) {
    console.log(`An error happned ... ${err.message}`.red.inverse);
  }
});
