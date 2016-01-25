var Model = require('ampersand-model');

module.exports = Model.extend({
  props: {
    nid: 'number',
    title: 'string',
    description: 'string',
    content: 'string',
    factsheet_title: 'string',
  }
})
