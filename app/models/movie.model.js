module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define("movies", {
    image: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    duration: {
      type: Sequelize.INTEGER,
    },
    categoryId: {
      type: Sequelize.INTEGER,
      references: sequelize.category,
      referencesKey: "id",
    },
    trailer: {
      type: Sequelize.STRING,
    },
    release: {
      type: Sequelize.DATEONLY,
    },
  });

  return Movie;
};
