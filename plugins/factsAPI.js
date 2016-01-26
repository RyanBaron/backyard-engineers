var _ = require('underscore');

var facts = [
  {
    id: 1, //do not change the id
    fid: 1,
    title: 'Developer: ',
    text: 'Filament Games',
    link: 'https://www.filamentgames.com'
  },
  {
    id: 2, //do not change the id
    fid: 2,
    title: 'Platforms: ',
    text: 'PC, Mac, iOS, Android',
    link: ''
  }
];

module.exports.register =  function (plugin, options, next) {
  plugin.route({
    method: 'GET',
    path: '/api/facts',
    handler: function (request, reply) {
      reply(facts);
    }
  });
  
  next();
};

module.exports.register.attributes = {
  version: '1.0.1',
  name: 'facts_data_api'
};