const express = require("express");
const app = express();
const api = require("./routes");

app.use("/api", api);
app.get("/", (req, res) => {
  res.status(200).send({ message: "Funciona la API" });
});

module.exports = app;
