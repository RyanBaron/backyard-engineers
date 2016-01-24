var jade = require('@lukekarrys/jade-runtime');

var templatizer = {};

templatizer["pages"] = {};

// body.jade compiled template
templatizer["body"] = function tmpl_body() {
    return '<body><nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a href="/" class="navbar-brand">Step App</a></div><ul class="nav navbar-nav"><li><a href="/">home</a></li><li><a href="/list">list</a></li></ul><p data-hook="users-name" class="navbar-text navbar-right">Name Here</p></div></nav><main data-hook="page-container"></main></body>';
};

// pages\home.jade compiled template
templatizer["pages"]["home"] = function tmpl_pages_home() {
    return '<section class="page"><h1>Home Page</h1></section>';
};


module.exports = templatizer;
