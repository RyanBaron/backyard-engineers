var View = require('ampersand-view');
var templates = require('../templates');
var PageData  = require('../models/pages');
var FactData = require('../models/facts');
var LearningObjectivesModel = require('../models/learning_objectives');
var GameFactsView = require('../views/page-sections/game-facts');
var LearningObjectivesView = require('../views/page-sections/game-objectives');

module.exports = View.extend({
  template: templates.pages.press,
  bindings: {
    'model.sections.factsheet': {
      type: 'text',
      hook: 'game-facts-title'
    }
  },
  initialize: function(options) {
    
    this.LearningObjectivesData = new LearningObjectivesModel();
    this.LearningObjectivesData.fetch();
    //console.log('the LearningObjectivesData data');
    //console.log(this.LearningObjectivesData);
    
    
    //options are passed in via the router
    this.pageData = new PageData();
    this.pageData.fetch();
    //console.log('the pageData data');
    //console.log(this.pageData);
    //this.factData = new FactData();
    //this.factData.fetch();

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
    this.renderCollection(this.LearningObjectivesData, LearningObjectivesView, this.queryByHook('learning-objectives')); //registers this as a subview to this main view, will be destroyed when the parent view is removed
    //this.renderCollection(this.factData, GameFactsView, this.queryByHook('game-facts')); //registers this as a subview to this main view, will be destroyed when the parent view is removed
  },
});
