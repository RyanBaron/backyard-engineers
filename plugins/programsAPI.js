var _ = require('underscore');

var programs = [
  {
    id: 1,
    title: 'Learn GIT',
    level: '1',
    days: 10
  },
  {
    id: 2,
    title: 'Learn PHP',
    level: '1',
    days: 10
  }
];

var id = 1;
function getId(id) {
  return _.findWhere(programs, {id: parseInt(id + '', 10)});
}


//var days = 10;
//function getDays(days) {
//  return _.findWhere(programs, {days: parseInt(days + '', 10)});
//}
//var level = 1;
//function getLevel(level) {
//  return _.findWhere(programs, {level: parseInt(level + '', 10)});
//}

module.exports.register = function (plugin, options, next) {
  plugin.route({
    method: 'GET',
    path: '/api/programs',
    handler: function (request, reply) {
      reply(programs);
    }
  });
  plugin.route({
    method: 'GET',
    path: '/api/programs/{id}',
    handler: function (request, reply) {
      var found = getId(request.params.id);
      reply(found).code(found ? 200 : 404);
    }
  });
  //plugin.route({
  //  method: 'GET',
  //  path: '/api/programs/days/{days}',
  //  handler: function (request, reply) {
  //    var found = getDays(request.params.days);
  //    reply(found).code(found ? 200 : 404);
  //  }
  //});
  //plugin.route({
  //  method: 'GET',
  //  path: '/api/programs/level/{level}',
  //  handler: function (request, reply) {
  //    var found = getLevel(request.params.level);
  //    reply(found).code(found ? 200 : 404);
  //  }
  //});


  next();
};

module.exports.register.attributes = {
  version: '1.0.1',
  name: 'programs_api'
};
