var View = require('ampersand-view');
var templates = require('../../templates');

module.exports = View.extend({
  template: templates.includes.game.learning_objective,
  bindings: {
    'model.text': {
      type: 'text',
      hook: 'objective-text'
    }
  }
});
