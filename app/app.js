/**
 * Created by doguhanuluca on 4/4/15.
 */
var angular = require('angular')

require('../scratch/templates.js')

require('./components/inside-one/inside-one.js')
require('./components/inside-two/inside-two.js')
require('./components/some-module/another-home/another-home.js')
require('./components/home/home.js')
require('./components/nested-test/nested-test.js')
require('./components/combined-test/combined-test.js')

angular.module('app', [
  require('ngComponentRouter'),
  'app.home',
  'app.someModule.anotherHome',
  'app.nestedTest',
  'app.insideOne',
  'app.insideTwo',
  'app.combinedTest',
  'templates'])
  .controller('AppController', ['$router', AppController])

function AppController ($router) {
  $router.config([
    { path: '/', redirectTo: '/home' },
    { path: '/home', component: 'home' }
    // { path: '/someModule/anotherHome', component: 'someModule.anotherHome' },
    // { path: '/insideOne', component: 'insideOne' },
    // { path: '/insideTwo', component: 'insideTwo' },
    // { path: '/nestedTest', component: 'nestedTest' },
    // { path: '/combinedTest',
    //   components: {
    //     master: 'insideOne',
    //     detail: 'insideTwo'
    //   }, as: 'combinedTest'
    // },
    // // { path: '/*fullPath', component: 'backboneRouter', as: 'default' }
  ])
}
