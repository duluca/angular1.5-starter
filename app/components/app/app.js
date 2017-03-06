/**
 * Created by doguhanuluca on 4/4/15.
 */
var angular = require('angular')

require('../../../scratch/templates.js')

angular.module('ngApp', [
  require('ngComponentRouter'),
  require('../home/home'),
  require('../about/about'),
  require('../notfound/notfound'),
  'app.templates'])
  .value('$routerRootComponent', 'app')
  .component('app', {
    templateUrl: 'components/app/app.html',
    $routeConfig: [
      { path: '/', component: 'home', name: 'Home' },
      { path: '/about/:name', component: 'about', name: 'About' },
      // { path: '/login', component: 'login', name: 'Login' },
      // { path: '/admin/...', component: 'admin', name: 'Admin' },
      { path: '/**', component: 'notfound', name: 'NotFound' }
    ]
  })
