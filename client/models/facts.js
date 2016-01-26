var Collection = require('ampersand-rest-collection');
var Fact = require('./fact');

module.exports = Collection.extend({
  url: 'api/facts',
  model: Fact
});
