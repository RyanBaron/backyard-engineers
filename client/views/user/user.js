var View = require('ampersand-view');
var templates = require('../../templates');

module.exports = View.extend({
  template: templates.includes.user.user,
  bindings: {
    'model.fullName': {
      type: 'text',
      hook: 'user-name'
    }
  }
});
