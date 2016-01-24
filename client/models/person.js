var Model = require('ampersand-model');

module.exports = Model.extend({
  props: {
    uid: 'number',
    firstName: 'string',
    lastName: 'string',
    coolnessFactor: 'number',
  }
})
