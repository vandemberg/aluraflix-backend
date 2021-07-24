const { celebrate, Joi, Segments } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required().min(2).max(60),
      description: Joi.string().required().min(6).max(240),
      url: Joi.string().required().uri(),
    }),
  }),

  update: celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().min(2).max(60),
      description: Joi.string().min(6).max(240),
      url: Joi.string().uri(),
    }),
  }),
};
