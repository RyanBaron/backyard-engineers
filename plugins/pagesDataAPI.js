var _ = require('underscore');

var pages = [
  {
    nid: 1,
    title: 'Home',
    description: 'Home page description text',
    content: 'Home page content text',
  },
  {
    nid: 2,
    title: 'About',
    description: 'About page description text',
    content: 'About page content text',
  }
];


var nid = 1;
function getId(nid) {
  return _.findWhere(pages, {nid: parseInt(nid + '', 10)});
}

module.exports.register =  function (plugin, options, next) {
  plugin.route({
    method: 'GET',
    path: '/api/pages',
    handler: function (request, reply) {
      reply(pages);
    }
  });
  plugin.route({
    method: 'GET',
    path: '/api/pages/{nid}',
    handler: function (request, reply) {
      var found = getId(request.params.nid);
      reply(found).code(found ? 200 : 404);
    }
  });
  next();
};

module.exports.register.attributes = {
  version: '0.0.0',
  name: 'page_data_api'
};
