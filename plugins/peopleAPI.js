var _ = require('underscore');

var people = [
  {
    uid: 1,
    firstName: 'Henrik',
    lastName: 'Joreteg',
    email: 'henrick@example.com',
    coolnessFactor: 9
  },
  {
    uid: 2,
    firstName: 'Bob',
    lastName: 'Saget',
    email: 'bob@example.com',
    coolnessFactor: 2
  },
  {
    uid: 3,
    firstName: 'Larry',
    lastName: 'King',
    email: 'lary@example.com',
    coolnessFactor: 4
  },
  {
    uid: 4,
    firstName: 'Diana',
    lastName: 'Ross',
    email: 'diana@example.com',
    coolnessFactor: 6
  },
  {
    uid: 5,
    firstName: 'Crazy',
    lastName: 'Dave',
    email: 'crazy@example.com',
    coolnessFactor: 8
  },
  {
    uid: 6,
    firstName: 'Larry',
    lastName: 'Johannson',
    email: 'larry@example.com',
    coolnessFactor: 4
  }
];
var uid = 7;

function get(uid) {
  return _.findWhere(people, {uid: parseInt(uid + '', 10)});
}

module.exports.register = function (plugin, options, next) {
  plugin.route({
    method: 'GET',
    path: '/api/people',
    handler: function (request, reply) {
      reply(people);
    }
  });

  plugin.route({
    method: 'POST',
    path: '/api/people',
    handler: function (request, reply) {
      var person = request.payload;
      person.uid = uid++;
      people.push(person);
      reply(person).code(201);
    }
  });

  plugin.route({
    method: 'GET',
    path: '/api/people/{uid}',
    handler: function (request, reply) {
      var found = get(request.params.uid);
      reply(found).code(found ? 200 : 404);
    }
  });

  plugin.route({
    method: 'DELETE',
    path: '/api/people/{uid}',
    handler: function (request, reply) {
      var found = get(request.params.uid);
      if (found) people = _.without(people, found);
      reply(found).code(found ? 200 : 404);
    }
  });

  plugin.route({
    method: 'PUT',
    path: '/api/people/{uid}',
    handler: function (request, reply) {
      var found = get(request.params.uid);
      if (found) _.extend(found, request.payload);
      reply(found).code(found ? 200 : 404);
    }
  });

  next();
};

module.exports.register.attributes = {
  version: '1.0.1',
  name: 'people_api'
};
