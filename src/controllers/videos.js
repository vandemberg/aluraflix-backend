const sequelize = require("../infra/database");
const Video = require("../models/Video");

module.exports = {
  index: async (_request, response) => {
    await sequelize.sync();
    const videos = await Video.findAll();

    return response.json(videos);
  },

  store: async (request, response) => {
    const { title, description, url } = request.body;

    sequelize.sync();
    const video = await Video.create({
      title,
      description,
      url,
    });

    return response.json(video);
  },

  show: async (request, response) => {
    const { id } = request.params;

    sequelize.sync();
    const video = await Video.findOne({ id });

    return response.json(video);
  },

  update: async (request, response) => {
    const { id } = request.params;
    const { title, description, url } = request.body;

    sequelize.sync();
    const video = await Video.findOne({ id });
    await video.update({ title, description, url });

    return response.json(video);
  },

  destroy: async (request, response) => {
    const { id } = request.params;

    const video = await Video.findOne({ id });
    await video.destroy();

    return response.json({ success: true });
  },
};
