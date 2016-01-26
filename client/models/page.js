var Model = require('ampersand-model');

module.exports = Model.extend({
  props: {
    id: 'number',
    page_url: 'string',
    nid: 'number',
    title: 'string',
    description: 'string',
    content: 'string',
    sections: 'array',
    test_title: 'string'
  }
});