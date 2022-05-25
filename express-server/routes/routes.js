const express = require("express");
const cors = require("cors");
const fetch = require("isomorphic-fetch");
// eRoutes is an instance of the express router.
// We use it to define our routes.
const eRoutes = express.Router();
const methodOverride = require("method-override");
// This will help us connect to the database
const dbo = require("../db/conn");
const transport = require("./email");
const SECRET_KEY = process.env.SECRET_KEY;

eRoutes.all("*", cors());

eRoutes.use(methodOverride("_method"));
eRoutes.route("/data/beach_litter/:anno").get(async function (req, res) {
  const db = dbo.getDb();
  db.collection("beach_litter")
    .aggregate([
      {
        $match: {
          Year: { $lte: parseInt(req.params.anno) },
          Code: { $ne: "" },
        },
      },
      {
        $group: {
          _id: "$Entity",
          Entity: { $last: "$Entity" },
          Year: { $last: "$Year" },
          EN_MAR_BEALITSQ: { $last: "$EN_MAR_BEALITSQ" },
        },
      },
      {
        $project: {
          _id: 0,
          Entity: 1,
          Year: 1,
          EN_MAR_BEALITSQ: 1,
        },
      },
    ])
    .toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
    });
});

eRoutes.route("/data/fish_stocks").get(async function (req, res) {
  const db = dbo.getDb();
  db.collection("fish_stocks")
    .aggregate([
      {
        $match: {
          Code: "OWID_WRL",
        },
      },
      {
        $project: {
          _id: 0,
          Entity: 1,
          Year: 1,
          Sustainable_fish_stocks: 1,
          Overexploited_fish_stocks: 1,
        },
      },
      { $sort: { Year: 1 } },
    ])
    .toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
    });
});

eRoutes.route("/data/mean_seawater_ph").get(async function (req, res) {
  const db = dbo.getDb();
  db.collection("mean_seawater_ph")
    .aggregate([
      {
        $project: {
          _id: 0,
          Entity: 1,
          Day: 1,
          ocean_ph: 1,
          ocean_ph_yearly_average: 1,
        },
      },
      { $sort: { Day: 1 } },
    ])
    .toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
    });
});

eRoutes.route("/data/wri_eutrophication/:anno").get(async function (req, res) {
  const db = dbo.getDb();
  db.collection("wri_eutrophication")
    .aggregate([
      {
        $match: { Decade: parseInt(req.params.anno) },
      },
      {
        $group: {
          _id: "$System",
          System: { $last: "$System" },
          Decade: { $last: "$Decade" },
          Lat: { $last: "$Lat" },
          Lng: { $last: "$Lng" },
          Classification: { $last: "$Classification" },
          n_classification: { $last: "$n_classification" },
        },
      },
      {
        $project: {
          _id: 0,
          System: 1,
          Country: 1,
          Lat: 1,
          Lng: 1,
          Decade: 1,
          Classification: 1,
          n_classification: 1,
        },
      },
      { $sort: { Decade: 1 } },
    ])
    .toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
    });
});

eRoutes
  .route("/data/annual_sea_temperature_anomaly")
  .get(async function (req, res) {
    const db = dbo.getDb();
    db.collection("annual_sea_temperature_anomaly")
      .aggregate([
        {
          $project: {
            _id: 0,
            Entity: 1,
            Year: 1,
            annual_sea_surface_temperature_anomaly: 1,
          },
        },
        { $sort: { Year: 1 } },
      ])
      .toArray(function (err, result) {
        if (err) throw err;
        res.send(result);
      });
  });

eRoutes.route("/data/plastic_emitting_rivers").get(async function (req, res) {
  const db = dbo.getDb();
  db.collection("plastic_emitting_rivers")
    .aggregate([
      {
        $project: {
          _id: 0,
          Entity: 1,
          Year: 1,
          Share_of_global_plastics_emitted_to_ocean: 1,
        },
      },
      { $sort: { Year: 1 } },
    ])
    .toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
    });
});

eRoutes.route("/api/postEmail").post(async function (req, res) {
  const token = req.body.captcha;
  const VERIFY_URL = `https://hcaptcha.com/siteverify?response=${token}&secret=${SECRET_KEY}`;
  fetch(VERIFY_URL, {
    method: "post",
  })
    .then((response) => response.json())
    .then((hcaptcha_response) => {
      if (hcaptcha_response.success == true) {
        //   if captcha is verified
        const message = {
          from: req.body.txtEmail,
          to: "cocnila3@gmail.com",
          subject: req.body.txtName,
          text: req.body.txtMessage,
        };
        transport.sendMail(message, function (err, info) {
          if (err) {
            console.log(err);
          } else {
            console.log(info);
          }
        });
        return res.send({ response: "Successful" });
      } else {
        // if captcha is not verified
        return res.send({ response: "Failed" });
      }
    })
    .catch((error) => {
      // Some error while verify captcha
      return res.json({ error });
    });
});

module.exports = eRoutes;
