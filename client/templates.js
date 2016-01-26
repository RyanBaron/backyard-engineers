var jade = require('@lukekarrys/jade-runtime');

var templatizer = {};

templatizer["includes"] = {};
templatizer["pages"] = {};
templatizer["includes"]["game"] = {};
templatizer["includes"]["program"] = {};
templatizer["includes"]["user"] = {};

// body.jade compiled template
templatizer["body"] = function tmpl_body() {
    return '<body><nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a href="/" class="navbar-brand">Step</a></div><ul class="nav navbar-nav"><li><a href="/press">Press</a></li><li><a href="/programs">Programs</a></li><li><a href="/users">Users</a></li></ul><p data-hook="users-name" class="navbar-text navbar-right"></p></div></nav><main data-hook="page-container"></main></body>';
};

// pages\home.jade compiled template
templatizer["pages"]["home"] = function tmpl_pages_home() {
    return '<section class="page"><h1>Home Page</h1></section>';
};

// pages\press.jade compiled template
templatizer["pages"]["press"] = function tmpl_pages_press() {
    return '<section class="page press-page"><article class="page-inside press-page-inside"><header class="page-header"><div class="container"><h1>Press Page</h1></div></header><div class="press-about"><div class="container"><div class="row"><div class="col-md-3 col-lg-2"><h2 class="sub-header">Factsheet</h2><div data-hook="game-facts"></div></div><div class="col-md-9 col-lg-10"><h2>Game Information Hardcoded</h2><div data-hook="game-info"></div></div></div></div></div><div data-hook="game-videos"></div><div data-hook="game-screenshots"></div><div data-hook="game-images"></div><div data-hook="game-awards"></div><div data-hook="game-mentions"></div><div data-hook="game-credits"></div></article></section>';
};

// pages\programs.jade compiled template
templatizer["pages"]["programs"] = function tmpl_pages_programs() {
    return '<section class="page"><h1>Programs Page</h1><ul data-hook="programs-list"></ul></section>';
};

// pages\users.jade compiled template
templatizer["pages"]["users"] = function tmpl_pages_users() {
    return '<section class="page"><h1>Users Page</h1><ul data-hook="user-list"></ul></section>';
};

// includes\game\fact.jade compiled template
templatizer["includes"]["game"]["fact"] = function tmpl_includes_game_fact() {
    return '<div class="game-facts"><div class="fact-wrapper"><div data-hook="fact-title" class="fact-title"></div><div data-hook="fact-text" class="fact-data"></div></div></div>';
};

// includes\game\game-about.jade compiled template
templatizer["includes"]["game"]["game-about"] = function tmpl_includes_game_game_about() {
    return '<div class="press-about"><div class="container"><div class="row"><div class="col-md-3 col-lg-2"><div data-hook="game-facts"><Game>Factsheet</Game></div></div><div class="col-md-9 col-lg-10"><div data-hook="game-info"><Game>Information</Game></div></div></div></div></div>';
};

// includes\program\program.jade compiled template
templatizer["includes"]["program"]["program"] = function tmpl_includes_program_program() {
    return '<li><span data-hook="program-title"></span><button class="btn btn-secondary">Delete</button><button class="btn btn-primary">Edit</button></li>';
};

// includes\user\user.jade compiled template
templatizer["includes"]["user"]["user"] = function tmpl_includes_user_user() {
    return '<li><span data-hook="user-name"></span><button class="btn btn-secondary">Delete</button><button class="btn btn-primary">Edit</button></li>';
};


module.exports = templatizer;
