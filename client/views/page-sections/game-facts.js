var View = require('ampersand-view');
var templates = require('../../templates');

module.exports = View.extend({
  template: templates.includes.game.fact,
  bindings: {
    'model.title': {
      type: 'text',
      hook: 'fact-title'
    },
    'model.text': {
      type: 'text',
      hook: 'fact-text'
    }
  }
});
