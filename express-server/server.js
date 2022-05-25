//server.js
require("dotenv").config({ path: ".env" });

const express = require("express");
const cors = require("cors");
const path = require("path");
const dbo = require("./db/conn");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/dist/sdg14"));
app.use(bodyParser.json());
app.use(express.json());
app.use(require("./routes/routes"));

let whitelist = [
  "http://localhost:3000",
  "https://palo-landrae-sdg-14.herokuapp.com/",
  "http://localhost:4200/",
];

app.use(
  cors({
    origin: whitelist,
  })
);

app.get("/*", async function (req, res) {
  res.send('Hello World!')
});

app.listen(PORT, function () {
  dbo.connectToServer(function (err) {
    if (err) {
      console.error(err);
      process.exit();
    }
  });
  console.log("App listening on port http://localhost:3000/");
});
