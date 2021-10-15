const dbConfig = require("../../config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.DB_DATABASE,
  dbConfig.DB_USERNAME,
  dbConfig.DB_PASSWORD,
  {
    host: dbConfig.DB_HOST || "localhost",
    dialect: "mysql",
    operatorsAliases: 0,
    pool: {
      max: parseInt(dbConfig.DB_POOL_MAX || 5),
      min: parseInt(dbConfig.DB_POOL_MIN || 0),
      acquire: parseInt(dbConfig.DB_POOL_ACQUIRE || 30000),
      idle: parseInt(dbConfig.DB_POOL_IDLE || 10000),
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.restaurants = require("./restaurant.model.js")(sequelize, Sequelize);
db.reservations = require("./reservation.model.js")(sequelize, Sequelize);

db.reservations.belongsTo(db.restaurants);

module.exports = db;
