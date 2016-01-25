var Model = require('ampersand-model');

module.exports = Model.extend({
  props: {
    uid: 'number',
    firstName: 'string',
    lastName: 'string',
    coolnessFactor: 'number',
    email: 'string',
  },
  derived: {
    fullName: {
      deps: ['firstName', 'lastName'],
      fn: function() {
        if(!this.firstName) return 'No Name';
        return this.firstName + ' ' + this.lastName;
      }
    }
  }
})
