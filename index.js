require("dotenv").config();
const app = require("./app/index");

const db = require("./app/models");
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Drop and re-sync db.");
    const PORT = process.env.APP_PORT || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  })
  .catch((error) => {
    console.log(`No funciono la conexión con la db. ${error}`);
  });
