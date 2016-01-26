var _ = require('underscore');

var press = [
  {
    sections: [
      {
        game_info: [
          {
            type: 'game_info',
            title: 'About the game'
          },
          {
            type: 'game_info',
            title: 'What is Backyard Engineers',
            text: '<p>Backyard Engineers is an engineering learning game aligned to middle school science standards. Create the ultimate catapult and launch water balloons at the neighborhood kids! By customizing different mechanical elements of the catapult, students can manipulate movement, accuracy, range, and damage to drench even the most evasive of targets. Each level of the game is a unique puzzle that challenges players to experiment with engineering solutions and find best way to soak their neighbors!</p>'
          },
          {
            type: 'game_info',
            title: 'Learning Objectives',
            text: '<li>Learn how to define engineering problems in terms of the criteria and constraints of a given task.</li><li>Learn how to develop, test, and modify engineering solutions based on test results.</li><li>Learn to optimize a design by selecting the characteristics that perform best individually across a series of tasks.</li><li>Create a model for generating data that allows for iterative testing of an object, tool, or process so that an optimal design can be achieved.</li>'
          }
        ]
      },
    ]  
  }
];
var pages = [
  {
    id: 1, //do not change the id
    nid: 1,
    page_url: 'home',
    title: 'Home',
    description: 'Home page description text',
    content: 'Home page content text',
    sections: [
      {
        facts: {
          type: 'header',
          title: 'Some header title'
        },
      },
      {
        about: {
          type: 'header',
          title: 'Some header title'
        },
      }
    ],
    test_title: 'Factsheet Home',
  },
  {
    id: 2, //do not change the id
    nid: 2,
    page_url: 'press',
    title: 'Press Backyard Engineers',
    description: 'Press page description text',
    content: 'Press page content text',
    //sections: [{
    //  type: 'factsheet',
    //  title: 'Factsheet'
    //}],
    
    /*
    sections: [
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
      },
      {
        id: 3, //do not change the id
        fid: 3,
        title: 'Contact: ',
        text: 'contact@filamentgames.com',
        link: ''
      }  
    ],
    */
    
    sections: [
      {
        facts_section: {
          title: 'Factsheet',
          facts: [
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
            },
            {
              id: 3, //do not change the id
              fid: 3,
              title: 'Contact: ',
              text: 'contact@filamentgames.com',
              link: ''
            }
          ]
        }
      }
    ]
  }
];


var id = 1;
function getId(id) {
  return _.findWhere(pages, {id: parseInt(id + '', 10)});
}

function getGameInfo() {
  var type = 'game_info';
  console.log('the press array');
  consolelog(press);
  console.log(press[sections])
  return _.findWhere(press, {type: type});
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
    path: '/api/page/game-info',
    handler: function (request, reply) {
      reply(pages);
      //var found = getGameInfo();
      //reply(found).code(found ? 200 : 404);
    }
  });
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
