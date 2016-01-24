var MainView = require('./views/main');
var domready = require('domready');
var Router = require('./router');
var MeModel = require('./models/me');
//var IndexPageModel = require('./models/pages/index');

window.app = {
  init: function() {
    var self = this;
    window.me = new MeModel();
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
