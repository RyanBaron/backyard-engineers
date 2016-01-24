var Model = require('ampersand-model');

module.exports = Model.extend({
  url: 'api/page', //where are we getting the data from
  initialize: function() {
    //this is the user, so get it right away, dont have to wait for anything
    this.fetch(); //make an ajax call to the url, to populate the model
  },
  props: {
    nid: 'number',
    title: 'string',
    description: 'string',
    content: 'string'
  }
});
