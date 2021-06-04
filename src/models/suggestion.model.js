const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const suggestionSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
suggestionSchema.plugin(toJSON);
suggestionSchema.plugin(paginate);

/**
 * @typedef Suggestion
 */
const Suggestion = mongoose.model('Suggestion', suggestionSchema);

module.exports = Suggestion;
