var _ = require('underscore');

var pages = [
  {
    id: 1,
    title: 'Home',
    description: 'Home page description text',
    content: 'Home page content text',
  },
  {
    id: 1,
    title: 'About',
    description: 'About page description text',
    content: 'About page content text',
  }
];


module.exports = function (plugin, options, next) {
  plugin.route({
    method: 'GET',
    path: '/api/pages',
    handler: function (request, reply) {
      reply(pages);
    }
  });
  plugin.route({
    method: 'GET',
    path: '/api/pages/{title}',
    handler: function (request, reply) {
      var found = get(request.params.title);
      reply(found).code(found ? 200 : 404);
    }
  });
  next();
};

module.exports.attributes = {
  version: '0.0.0',
  name: 'pages_data_api'
};
