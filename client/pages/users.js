var View = require('ampersand-view');
var templates = require('../templates');
var UserView = require('../views/user/user');
var UserCollectionView = require('ampersand-collection-view');

module.exports = View.extend({
  template: templates.pages.users,
  initialize: function() {
    this.collection.fetch();

    /*
    var self = this;
    app.users.fetch();

    setTimeout(function(){
      self.collection = app.users;
    }, 1000);
    */
  },

  autoRender: true,
  /*
  subviews: {
    users: {
      waitFor: 'collection',
      hook: 'user-list',
      prepareView: function(el) {
        return new UserCollectionView({
          el: el,
          collection: this.collection,
          view: UserView
        });
      }
    }
  },
  */

  render: function() {
    this.renderWithTemplate();
    this.renderCollection(this.collection, UserView, this.queryByHook('user-list')); //registers this as a subview to this main view, will be destroyed when the parent view is removed
  },
});
