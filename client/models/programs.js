var Collection = require('ampersand-rest-collection');
var Program = require('./program');

module.exports = Collection.extend({
  url: 'api/programs',
  model: Program
});
