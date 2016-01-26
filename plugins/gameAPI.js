var _ = require('underscore');

var game = {
  title: 'Backyard Engineers',
  unit_name: 'Energy and Engineering Learning Game',
  icon: 'https://d2kx2fvqbvh3da.cloudfront.net/sites/default/files/styles/product_icon/public/backyard-engineers-game-logo.png?itok=4kRIjXeU',
  price: '$5.99',
  about_text: 'Backyard Engineers is an engineering learning game aligned to middle school science standards. Create the ultimate catapult and launch water balloons at the neighborhood kids! By customizing different mechanical elements of the catapult, students can manipulate movement, accuracy, range, and damage to drench even the most evasive of targets. Each level of the game is a unique puzzle that challenges players to experiment with engineering solutions and find best way to soak their neighbors!',
  teaser_text: 'Calling all Backyard Engineers! Experiment with engineering design and build the ultimate catapult, tuning its mechanical attributes to win the water balloon fight with your neighbors!',
  videos: [
    {
      video_url: 'https://www.youtube.com/watch?v=d3OuHz1ngcc',
      img_url: 'https://d2kx2fvqbvh3da.cloudfront.net/sites/default/files/styles/full_size_screenshot_940x640/public/backyard-engineers-game-play-3.PNG?itok=0EIPDv1l',
      img_alt: 'Backyard Engineers Video'
    }
  ],
  screenshots: [
    {
      img_url: 'https://d2kx2fvqbvh3da.cloudfront.net/sites/default/files/styles/full_size_screenshot_940x640/public/backyard-engineers-game-play-17.PNG?itok=pLbct4vR',
      img_alt: 'Backyard Engineers Screenshot 1'
    },
    {
      img_url: 'src="https://d2kx2fvqbvh3da.cloudfront.net/sites/default/files/styles/full_size_screenshot_940x640/public/backyard-engineers-game-play-16.PNG?itok=4pC8NLnz"',
      img_alt: 'Backyard Engineers Screenshot 2'
    },
    {
      img_url: 'https://d2kx2fvqbvh3da.cloudfront.net/sites/default/files/styles/full_size_screenshot_940x640/public/backyard-engineers-game-play-4.PNG?itok=TvPYvWwf',
      img_alt: 'Backyard Engineers Screenshot 3'
    },
  ],
  platforms: [
    {
      text: 'PC'
    },
    {
      text: 'Mac'
    },
    {
      text: 'Android'
    },
    {
      text: 'iOS'
    },
  ],
  learning_objectives: [
    {
      text: 'Learn how to define engineering problems in terms of the criteria and constraints of a given task.'
    },
    {
      text: 'Learn how to develop, test, and modify engineering solutions based on test results.'
    },
    {
      text: 'Learn to optimize a design by selecting the characteristics that perform best individually across a series of tasks.'
    },
    {
      text: 'Create a model for generating data that allows for iterative testing of an object, tool, or process so that an optimal design can be achieved.'
    },
  ],
  filament_product_url: 'https://www.filamentgames.com/energy-and-engineering-unit-backyard-engineers',
  filament_home_url: 'https://www.filamentgames.com/',
};

module.exports.register =  function (plugin, options, next) {
  plugin.route({
    method: 'GET',
    path: '/api/game',
    handler: function (request, reply) {
      reply(game);
    }
  });
  plugin.route({
    method: 'GET',
    path: '/api/game/learning-objectives',
    handler: function (request, reply) {
      reply(game.learning_objectives);
    }
  });
  plugin.route({
    method: 'GET',
    path: '/api/game/platforms',
    handler: function (request, reply) {
      reply(game.platforms);
    }
  });
  
  next();
};

module.exports.register.attributes = {
  version: '1.0.1',
  name: 'game_api'
};