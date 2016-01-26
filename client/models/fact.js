var Model = require('ampersand-model');

module.exports = Model.extend({
  props: {
    id: 'number',
    fid: 'number',
    title: 'string',
    text: 'string'
  }
});