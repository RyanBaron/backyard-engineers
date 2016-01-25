var jade = require('@lukekarrys/jade-runtime');

var templatizer = {};

templatizer["pages"] = {};
templatizer["includes"] = {};
templatizer["includes"]["program"] = {};
templatizer["includes"]["user"] = {};

// body.jade compiled template
templatizer["body"] = function tmpl_body() {
    return '<body><nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a href="/" class="navbar-brand">Step</a></div><ul class="nav navbar-nav"><li><a href="/programs">Programs</a></li><li><a href="/users">Users</a></li></ul><p data-hook="users-name" class="navbar-text navbar-right"></p></div></nav><main data-hook="page-container"></main></body>';
};

// pages\home.jade compiled template
templatizer["pages"]["home"] = function tmpl_pages_home() {
    return '<section class="page"><h1>Home Page</h1></section>';
};

// pages\programs.jade compiled template
templatizer["pages"]["programs"] = function tmpl_pages_programs() {
    return '<section class="page"><h1>Programs Page</h1><ul data-hook="programs-list"></ul></section>';
};

// pages\users.jade compiled template
templatizer["pages"]["users"] = function tmpl_pages_users() {
    return '<section class="page"><h1>Users Page</h1><ul data-hook="user-list"></ul></section>';
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
