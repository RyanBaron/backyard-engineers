var Collection = require('ampersand-rest-collection');
var LearningObjectiveModel = require('./learning_objective');

module.exports = Collection.extend({
  url: 'api/game/learning-objectives',
  model: LearningObjectiveModel
});
