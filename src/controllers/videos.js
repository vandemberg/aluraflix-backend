const sequelize = require("../infra/database");
const Video = require("../models/Video");

module.exports = {
  index: async (ctx) => {
    await sequelize.sync();
    const videos = await Video.findAll();

    ctx.response.type = "application/json";
    ctx.response.status = 200;
    ctx.body = {
      videos: videos,
    };
  },

  store: async (ctx) => {
    const { title, description, url } = ctx.request.body;

    sequelize.sync();
    const video = await Video.create({
      title,
      description,
      url,
    });

    ctx.response.type = "application/json";
    ctx.response.status = 201;
    ctx.body = video;
  },
  update: async () => {},

  destroy: async () => {},
};
