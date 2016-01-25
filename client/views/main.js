var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');
var dom = require('ampersand-dom');
var templates = require('../templates');

//This is the main view, the view that will contain all other views
//basically a class, nothing is instanciated here, literally just describing a constructor
module.exports = View.extend({
  template: templates.body, //the root element
  autoRender: true,
  events: {
    'click a[href]': 'handleLinkClick',
  },
  bindings: {
    'model.fullName': {
      type: 'text',
      hook: 'users-name'
    }
  },
  initialize: function() {
    //set things up before anything is rendered
    this.listenTo(app.router, 'page', this.handleNewPage);
    //this.listenTo(app.router, 'page', this.someOtherFunction);
  },
  render: function() {
    this.renderWithTemplate();
    this.page = new ViewSwitcher(this.queryByHook( 'page-container' ));
  },
  handleNewPage: function(page) {
    //the page is a "page"(view) passed in from the router
    this.page.set(page);
    this.updateActiveNav();
    //add other funcitons that should fire when a new page is loaded
  },
  someOtherFunction: function(page) {
    //do something on a page load
  },
  handleLinkClick: function(e) {
    var aTag = e.target;
    if(aTag.host === window.location.host) {
      app.router.history.navigate(aTag.pathname, {trigger:true});
      e.preventDefault();
    }
  },
  updateActiveNav: function() {
    //get our current path
    var pathname = window.location.pathname;
    this.queryAll( 'nav a' ).forEach( function( aTag ) {
      var parent = aTag.parentNode;
      //loop through each nav a tag item and add/remove appropriate class names
      if( pathname.indexOf( aTag.pathname ) === 0 ) {
        dom.addClass(parent, 'active');
      } else {
        dom.removeClass(parent, 'active');
      }
    });
  }

});
