/**
 * Created by doguhanuluca on 4/4/15.
 */
var angular = require('angular');
var router = require('angular-new-router');
var home = require('./components/home/home.js');
var templates = require('./tmp/templates.js');

angular.module('app', ['ngNewRouter', 'app.home', 'templates'])
    .controller('AppController', ['$router', AppController]);

function AppController ($router) {
    $router.config([
        {path: '/', component: 'home' }
    ]);
}