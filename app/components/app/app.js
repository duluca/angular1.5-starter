/**
 * Created by doguhanuluca on 4/4/15.
 */
var angular = require('angular')

require('../../../scratch/templates.js')

angular.module('ngApp', [
  require('ngcomponentrouter'),
  require('../home/home'),
  require('../notfound/notfound'),
  'app.templates'])
  .component('app', {
    templateUrl: 'components/app/app.html',
    controller: ['$router', AppController]
  })

function AppController ($router) {
  $router.config([
    { path: '/home', component: 'home', name: 'Home' },
    { path: '/**', component: 'notfound', name: 'NotFound' }
  ])
}
