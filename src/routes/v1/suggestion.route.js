const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const suggestionValidation = require('../../validations/suggestion.validation');
const suggestionController = require('../../controllers/suggestion.controller');

const router = express.Router();

router
  .route('/')
  .post(auth(),validate(suggestionValidation.createSuggestion),suggestionController.createSuggestion)
  .get(auth(),validate(suggestionValidation.getSuggestions),suggestionController.getSuggestions);

router
   .route('/:title')
   .get(auth('getUsers'), validate(suggestionValidation.getSuggestion), suggestionController.getSuggestion)

module.exports = router;
