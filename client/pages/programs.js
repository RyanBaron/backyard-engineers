var View = require('ampersand-view');
var templates = require('../templates');
var ProgramView = require('../views/program/program')

module.exports = View.extend({
  template: templates.pages.programs,
  initialize: function() {
    this.collection.fetch();
  },
  autoRender: true,
  render: function() {
    this.renderWithTemplate();
    this.renderCollection(this.collection, ProgramView, this.queryByHook('programs-list')); //registers this as a subview to this main view, will be destroyed when the parent view is removed
  },
});
