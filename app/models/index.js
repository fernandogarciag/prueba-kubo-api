const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    operatorsAliases: 0,
    pool: {
      max: parseInt(process.env.DB_POOL_MAX || 5),
      min: parseInt(process.env.DB_POOL_MIN || 0),
      acquire: parseInt(process.env.DB_POOL_ACQUIRE || 30000),
      idle: parseInt(process.env.DB_POOL_IDLE || 10000),
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.restaurants = require("./category.model.js")(sequelize, Sequelize);
db.reservations = require("./movie.model.js")(sequelize, Sequelize);

db.reservations.belongsTo(db.restaurants);

module.exports = db;
