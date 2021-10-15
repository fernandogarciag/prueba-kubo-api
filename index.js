const config = require("./config.js");
const app = require("./app/index");

const db = require("./app/models");
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Drop and re-sync db.");
    const PORT = config.APP_PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  })
  .catch((error) => {
    console.log(`No funciono la conexión con la db. ${error}`);
  });
