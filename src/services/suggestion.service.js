const httpStatus = require('http-status');
const { Suggestion } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} suggestionBody
 * @returns {Promise<User>}
 */
const createSuggestion = async (suggestionBody) => {
  const suggestion = await Suggestion.create(suggestionBody);
  return suggestion
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */

const querySuggestions = async (filter,options) => {
  const users = await Suggestion.paginate(filter,options);
  return users;
};

/**
 * Get user by title
 * @param {ObjectId} title
 * @returns {Promise<User>}
 */
const getSuggestionById = async (title) => {
  return Suggestion.findById(title);
};

module.exports = {
  createSuggestion,
  querySuggestions,
  getSuggestionById,
};
