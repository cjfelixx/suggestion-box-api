const Joi = require('joi');
const {password,objectId } = require('./custom.validation');

const createSuggestion = {
  body: Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().required(),
}),
};

const getSuggestions = {
  query: Joi.object().keys({
    title: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    populate: Joi.string(),
  }),
};

const getSuggestion = {
  params: Joi.object().keys({
    title: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSuggestion,
  getSuggestions,
  getSuggestion,
};
