const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { suggestionService } = require('../services');

const createSuggestion = catchAsync(async (req, res) => { 
  const suggestion = await suggestionService.createSuggestion({...req.body,user:req.user.id});
  res.status(httpStatus.CREATED).send(suggestion);});

const getSuggestions = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['title']);
  const options = pick(req.query, ['sortBy', 'limit', 'page','populate']);
  const result = await suggestionService.querySuggestions(filter, options);
  res.send(result);
});

const getSuggestion = catchAsync(async (req, res) => {
  const suggestion = await suggestionService.getSuggestionById(req.params.title);
  if (!suggestion) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Suggestion not found');
  }
  res.send(suggestion);
}
);

module.exports = {
  createSuggestion,
  getSuggestions,
  getSuggestion,
};
