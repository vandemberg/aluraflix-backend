const { Model, DataTypes } = require("sequelize");
const sequelize = require("../infra/database");

class Video extends Model {}

Video.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "video",
    tableName: "videos",
    timestamps: false,
  }
);

module.exports = Video;
