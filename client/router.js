var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var UsersPage = require('./pages/users');
var ProgramsPage = require('./pages/programs');
var PressPage = require('./pages/press');

//https://github.com/AmpersandJS/ampersand-router

module.exports = Router.extend({
  routes: {
    '':     'home',
    'users': 'users',
    'programs': 'programs',
    'press': 'press'
  },

  home: function() {
    //trigger page (listen for page in main.js)
    //pass in an instance of a "page" (view)
    this.trigger('page', new HomePage({
      id: 'home-page',
      pageData: 'some home page passed in data'
    }));
  },
  users: function() {

    this.trigger('page', new UsersPage({
      collection: app.users,
      id: 'users-page',
      pageData: 'some users page passed in data'
    }));
  },
  programs: function() {
    this.trigger('page', new ProgramsPage({
      collection: app.programs,
      id: 'programs-page',
      pageData: 'some programs page passed in data'
    }));
  },
  press: function() {
    this.trigger('page', new PressPage({
      id: 2,
      collection: app.pageData,
      pageData: 'some programs page passed in data'
    }));
  }
});
