'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const moonboots = require('moonboots_hapi');
const moonbootsConfig = require('./moonbootsConfig');
var peopleAPI = require('./plugins/peopleAPI');
var pagesDataAPI = require('./plugins/pagesDataAPI');
var programsAPI = require('./plugins/programsAPI');

server.connection({ host: 'localhost', port: 3000 });

server.route([
  {
    method: 'GET',
    path: '/api/me',
    handler: function (request, reply) {
      reply({
        id: 10,
        firstName: 'Ryan',
        lastName: 'Baron',
        email: 'ryan@madtownagency.com',
        coolnessFactor: 10
      });
    }
  },
  /*
  {
    method: 'GET',
    path: '/api/pages/index',
    handler: function (request, reply) {
      reply({
        id: 'index',
        class: 'index-page page',
        title: 'Index Page Title',
        description: 'This is just a short description of the page for the header meta section',
        body: '<p>This is just some temporary main content text wrapped in a p element for testing purposes</p>'
      });
    }
  }
  */
]);

/*
server.register([
  {
    register: MoonBootsHapi.register,
    options: moonbootsConfig
  },
  {
    register: fakeApi.register
  },
  {
    register: staticRoutes
  }
]
*/

server.register([
  {
    register: moonboots.register,
    options: moonbootsConfig
  },
  {
    register: peopleAPI.register
  },
  {
    register: programsAPI.register
  },
  {
    register: pagesDataAPI.register
  }
], function (err) {
  if (err) throw err;
  // If everything loaded correctly, start the server:
  server.start(function (err) {
    if (err) throw err;
    console.log('Server running at-->', server.info.uri);
    //console.log('Backyard Engineers is running at: http://' + config.http.listen + ':' + config.http.port);
  });
});

//server.start(() => {
  //console.log('Server running at:', server.info.uri);
//});


/*
var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({ host: 'localhost', port: 3000 });
//server.connection({ host: config.http.listen, port: config.http.port });
*/
/*
var Hapi = require('hapi');
var config = require('getconfig');
var MoonBootsHapi = require('moonboots_hapi');
var moonbootsConfig = require('./moonbootsConfig');
//var fakeApi = require('./fakeApi');
//var staticRoutes = require('./staticRoutes');
var internals = {};

var server = new Hapi.Server();
server.connection({ host: config.http.listen, port: config.http.port });

// set clientconfig cookie
internals.configStateConfig = {
  encoding: 'none',
  ttl: 1000 * 60 * 15,
  isSecure: config.isSecure
};
server.state('config', internals.configStateConfig);
internals.clientConfig = JSON.stringify(config.client);
server.ext('onPreResponse', function(request, reply) {
  if (!request.state.config) {
    var response = request.response;
    return reply(response.state('config', encodeURIComponent(internals.clientConfig)));
  }

  return reply.continue();
});

// require moonboots_hapi plugin
server.register([
  {
    register: MoonBootsHapi.register,
    options: moonbootsConfig
  },
  {
    register: fakeApi.register
  },
  {
    register: staticRoutes
  }
], function (err) {
  if (err) throw err;
  // If everything loaded correctly, start the server:
  server.start(function (err) {
    if (err) throw err;
    console.log('Backyard Engineers is running at: http://' + config.http.listen + ':' + config.http.port);
  });
});
*/
