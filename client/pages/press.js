var View = require('ampersand-view');
var templates = require('../templates');
//var GameAboutView = require('../views/page-sections/game-about')

module.exports = View.extend({
  template: templates.pages.press,
  bindings: {
    'model.factsheet_title': {
      type: 'text',
      hook: 'game-facts-title'
    }
  },
  initialize: function(options) {
    //options are passed in via the router
    console.log('logging the options');
    console.log(options);
    var self = this;
    this.collection.getOrFetch(options.id, function(err, model){
      if(err) throw err;
      console.log('the fetched model');
      console.log(model);
      self.model = model;
    });
    //this.collection.fetch();

  },
  
  autoRender: true,
  //render: function() {
    //this.renderWithTemplate();
    //console.log(this.collection);
    //this.renderCollection(this.collection, GameAboutView, this.queryByHook('game-about')); //registers this as a subview to this main view, will be destroyed when the parent view is removed
  //},
});
