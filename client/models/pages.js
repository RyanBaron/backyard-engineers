var Collection = require('ampersand-rest-collection');
var Page = require('./page');

module.exports = Collection.extend({
  url: 'api/page',
  model: Page
});
