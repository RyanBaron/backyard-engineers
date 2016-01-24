var Model = require('ampersand-model');

module.exports = Model.extend({
  props: {
    pid: 'number',
    title: 'string',
    days: 'number',
    level: 'number',
  }
})
