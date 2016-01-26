var _ = require('underscore');

var pages = [
  {
    id: 1, //do not change the id
    nid: 1,
    page_url: 'home',
    title: 'Home',
    description: 'Home page description text',
    content: 'Home page content text',
    sections: [{
      factsheet: {
        type: 'header',
        title: 'Some header title'
      },
    }],
    test_title: 'Factsheet Home',
  },
  {
    id: 2, //do not change the id
    nid: 2,
    page_url: 'press',
    title: 'Press Backyard Engineers',
    description: 'Press page description text',
    content: 'Press page content text',
    sections: [{
      type: 'factsheet',
      title: 'Factsheet'
    }],
    test_title: 'Factsheet Press',
  }
];


var id = 1;
function getId(id) {
  return _.findWhere(pages, {id: parseInt(id + '', 10)});
}

/*
var url = 'home';
function getUrl(url) {
  return _.findWhere(pages, {url: url});
}
*/

module.exports.register =  function (plugin, options, next) {
  plugin.route({
    method: 'GET',
    path: '/api/page',
    handler: function (request, reply) {
      reply(pages);
    }
  });
  
  plugin.route({
    method: 'GET',
    path: '/api/page/{id}',
    handler: function (request, reply) {
      var found = getId(request.params.id);
      reply(found).code(found ? 200 : 404);
    }
  });
  
  /*
  plugin.route({
    method: 'GET',
    path: '/api/page/{url}',
    handler: function (request, reply) {
      var found = getUrl(request.params.url);
      reply(found).code(found ? 200 : 404);
    }
  });
  */
  next();
};

module.exports.register.attributes = {
  version: '1.0.1',
  name: 'page_data_api'
};
