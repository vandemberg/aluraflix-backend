const { Sequelize } = require("Sequelize");

const sequelize = new Sequelize(
  "mysql://localhost:3306/aluraflix_development",
  {
    username: "user",
    password: "secret",
  }
);

module.exports = sequelize;
