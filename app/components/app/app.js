var angular = require('angular')

require('../../../scratch/templates.js')

angular.module('ngApp', [
      require('ngComponentRouter')
    , require('angular-material-data-table')
    , require('angular-material') //make sure this is loaded after any other material dependency
    , require('../home/home')
    , require('../about/about')
    , require('../notfound/notfound')
    , 'app.templates'])
  .config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
      .defaultIconSet('fonts/materialdesignicons-webfont.svg')
      .defaultFontSet('mdi')
  }])
  .run(function($templateRequest){
    var urls = ['fonts/materialdesignicons-webfont.svg']

    angular.forEach(urls, function(url) {
      $templateRequest(url)
    })
  })
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