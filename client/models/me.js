var Model = require('ampersand-model');

module.exports = Model.extend({
  url: 'api/me', //where are we getting the data from
  initialize: function() {
    //this is the user, so get it right away, dont have to wait for anything
    this.fetch(); //make an ajax call to the url, to populate the model
  },
  props: {
    id: 'string',
    givenName: 'string',
    familyName: 'string',
    email: 'string'
  },
  derived: {
    fullName: {
      deps: ['givenName', 'familyName'],
      fn: function() {
        if(!this.givenName) return '';
        return this.givenName + ' ' + this.familyName;
      }
    }
  }
});
