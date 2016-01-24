var Model = require('ampersand-model');

module.exports = Model.extend({
  url: 'api/me', //where are we getting the data from
  initialize: function() {
    //this is the user, so get it right away, dont have to wait for anything
    this.fetch(); //make an ajax call to the url, to populate the model
  },
  props: {
    uid: 'number',
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    coolnessFactor: 'number'
  },
  derived: {
    fullName: {
      deps: ['firstName', 'lastName'],
      fn: function() {
        if(!this.firstName) return '';
        return this.firstName + ' ' + this.lastName;
      }
    }
  }
});
