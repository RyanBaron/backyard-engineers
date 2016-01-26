var View = require('ampersand-view');
var templates = require('../templates');
var PageData  = require('../models/pages');
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
    this.pageData = new PageData();
    //this.pageData.fetchById(2);
    //console.log('the id fetched page data');
    //console.log(this.pageData);
    
    //console.log('logging the options');
    //console.log(options);    
    //console.log('page data after the options');
    //console.log(this.pageData);
    var self = this;
    //var pageModel = new this.pageData(
    //  {
    //    url: options.url
    //  }, {
    //    collection: this
    //  }
    //);
    
    //console.log('the page model');
    //console.log(pageModel);
      
    this.pageData.getOrFetch(options.id, {all: true}, function(err, model){
      if (err) {
        console.log('- There was an error fetching page data');
        //console.log(err);
      } else {
        self.model = model;
      }
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
