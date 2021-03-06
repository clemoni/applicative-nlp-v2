const express = require("express");
const path = require("path");
const cors = require("cors");
const callMeaningClound = require("./controller/meaningCloud");

require("colors");

require("dotenv").config({
  path: path.resolve(__dirname, "../../config/.env"),
});

const app = express();

const PORT = process.env.PORT || 8082;

// Midleware
app.use(express.static("dist"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  path.join(__dirname, "../../dist/index.html");
});

app.post("/getcontent", callMeaningClound);

app.listen(PORT, (error) => {
  try {
    console.log(`Server running on PORT: ${PORT}`.yellow.inverse);
  } catch (err) {
    console.log(`An error happned ... ${err.message}`.red.inverse);
  }
});
