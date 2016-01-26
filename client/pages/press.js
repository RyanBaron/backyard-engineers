var View = require('ampersand-view');
var templates = require('../templates');
var PageData  = require('../models/pages');
var FactData = require('../models/facts')
var GameFactsView = require('../views/page-sections/game-facts')

module.exports = View.extend({
  template: templates.pages.press,
  bindings: {
    'model.sections.factsheet': {
      type: 'text',
      hook: 'game-facts-title'
    }
  },
  initialize: function(options) {
    console.log('initial PageData');
    console.log(PageData);
    console.log('initial FactData');
    console.log(FactData);
    
    //options are passed in via the router
    this.pageData = new PageData();
    this.pageData.fetch();
    console.log('the pageData data');
    console.log(this.pageData);
    this.factData = new FactData();
    this.factData.fetch();
    console.log('the fact data');
    console.log(this.factData);
    var self = this;
    
    this.pageData.getOrFetch(options.id, {all: true}, function(err, model){
      if (err) {
        console.log('** There was an error fetching page data **');
      } else {
        self.model = model;
        //console.log(self.model);
        //console.log('model testing');
        //console.log(self.model.sections[0].title);
      }
    });
    //this.collection.fetch();

  },
  
  autoRender: true,
  render: function() {
    this.renderWithTemplate();
    //console.log(this.collection);
    this.renderCollection(this.factData, GameFactsView, this.queryByHook('game-facts')); //registers this as a subview to this main view, will be destroyed when the parent view is removed
  },
});
