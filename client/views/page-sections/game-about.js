var View = require('ampersand-view');
var templates = require('../../templates');

module.exports = View.extend({
  template: templates.includes.program.program,
  bindings: {
    'model.title': {
      type: 'text',
      hook: 'program-title'
    }
  }
});
