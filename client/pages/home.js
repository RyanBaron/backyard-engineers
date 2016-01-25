var View = require('ampersand-view');
var templates = require('../templates');

//console.log(templates);

module.exports = View.extend({
  template: templates.pages.home,
  render: function() {
    this.renderWithTemplate();
  }
});
