const express = require("express");
const api = express.Router();

api.get("/", (req, res) => {
  res.status(200).send({ message: "Tienes acceso" });
});

module.exports = api;
