var _ = require('underscore');

var programs = [
  {
    pid: 1,
    title: 'Learn GIT',
    level: 1,
    days: 10
  },
  {
    pid: 2,
    title: 'Learn PHP',
    level: 1,
    days: 10
  },
  {
    pid: 3,
    title: 'Learn Javascript',
    level: 2,
    days: 15
  }
];

var pid = 1;
function getId(pid) {
  return _.findWhere(programs, {pid: parseInt(pid + '', 10)});
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
    path: '/api/programs/{pid}',
    handler: function (request, reply) {
      var found = getId(request.params.pid);
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
