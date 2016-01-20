/**
 * Created by doguhanuluca on 4/4/15.
 */
require('angular');
require('angular-new-router');
var _ = require('lodash');

require('./tmp/templates.js');

require('./components/inside-one/inside-one.js');
require('./components/inside-two/inside-two.js');
require('./components/some-module/another-home/another-home.js');
require('./components/home/home.js');
require('./components/nested-test/nested-test.js');
require('./components/combined-test/combined-test.js');
require('./components/backbone-router/backbone-router.js');

angular.module('app', [
    'ngNewRouter',
    'app.backboneRouter',
    'app.home',
    'app.someModule.anotherHome',
    'app.nestedTest',
    'app.insideOne',
    'app.insideTwo',
    'app.combinedTest',
    'templates'])
    .controller('AppController', ['$router', AppController])
    .config(['$componentLoaderProvider', function ($componentLoaderProvider) {

        function dashCase(str) {
            return str.replace(/([A-Z])/g, function ($1) {
                return '-' + $1.toLowerCase();
            });
        }

        function camelize(str) {
            return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
                return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
            }).replace(/\s+/g, '');
        }

        var DEFAULT_SUFFIX = 'Controller';
        var COMPONENTS_PATH = './components/';
        var HTML_SUFFIX = '.html';

        var componentToCtrl = function componentToCtrlDefault(name) {
            name = camelize(name);
            name = name.split('.').join('');
            return name[0].toUpperCase() + name.substr(1) + DEFAULT_SUFFIX;
        };

        var componentToTemplate = function componentToTemplateDefault(name) {
            var dashName = dashCase(name);

            var nameArray = dashName.split('.');
            var componentName = _.last(nameArray);

            var folderArray = _.dropRight(nameArray, [n=1]);
            var folderPath = folderArray.join('/');
            var basePath = folderPath ? COMPONENTS_PATH + folderPath  + '/': COMPONENTS_PATH;

            return basePath + componentName + '/' + componentName + HTML_SUFFIX;
        };

        var ctrlToComponent = function ctrlToComponentDefault(name) {

            return name[0].toLowerCase() + name.substr(1, name.length - DEFAULT_SUFFIX.length - 1);
        };

        $componentLoaderProvider.setTemplateMapping(function (name) {
            var newName = componentToTemplate(name);
            console.log('Template ' + name + ' to ' + newName);
            return newName;
        });

        $componentLoaderProvider.setCtrlNameMapping(function (name) {
            var newName = componentToCtrl(name);
            console.log('Ctrl ' + name + ' to ' + newName);
            return newName;
        });

        $componentLoaderProvider.setComponentFromCtrlMapping(function (name) {
            var newName = ctrlToComponent(name);
            console.log('Component ' + name + ' to ' + newName);
            return newName;
        });
    }]);

function AppController ($router) {
    $router.config([
        { path: '/home', component: 'home' },
        { path: '/someModule/anotherHome', component: 'someModule.anotherHome' },
        { path: '/insideOne', component: 'insideOne'},
        { path: '/insideTwo', component: 'insideTwo'},
        { path: '/nestedTest', component: 'nestedTest'},
        { path: '/combinedTest',
          components: {
              master: 'insideOne',
              detail: 'insideTwo'
          }, as: 'combinedTest'
        },
        { path: '/', redirectTo: '/home'},
        { path: '/*fullPath', component: 'backboneRouter', as: 'default' }
    ]);
}