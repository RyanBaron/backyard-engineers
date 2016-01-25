var MainView  = require('./views/main');
var domready  = require('domready');
var Router    = require('./router');
var MeModel   = require('./models/me');
var Persons   = require('./models/persons')
var Programs  = require('./models/programs')
var PageData  = require('./models/pages')

//var IndexPageModel = require('./models/pages/index');

window.app = {
  init: function() {
    var self = this;
    window.me = new MeModel();

    //data collections
    this.users = new Persons();
    this.programs = new Programs();
    //self.pageData = new PageData();
 
    console.log('programs pageData in app.js');
    console.log(this.programs);

    domready(function(){
      //window.indexPageModelData = new IndexPageModel();
      self.router = new Router();
      self.view = new MainView({
        el: document.body, //pass this into the main view as our element
        model: me
      });

      self.router.history.start({pushState: true}); //only start router history once
    });
  }
};

window.app.init();
