var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var ListPage = require('./pages/list');

//https://github.com/AmpersandJS/ampersand-router

module.exports = Router.extend({
  routes: {
    '':     'home',
    'list': 'list'
  },

  home: function() {
    console.log('on the home page');
    //trigger page (listen for page in main.js)
    //pass in an instance of a "page" (view)
    this.trigger('page', new HomePage({
      id: 'home-page',
      pageData: 'some home page passed in data'
    }));
  },
  list: function() {
    console.log('on the list page');
    this.trigger('page', new ListPage({
      id: 'list-page',
      pageData: 'some list page passed in data'
    }));
  }
});
