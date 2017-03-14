var angular = require('angular')

angular.module('ngApp', [
      require('ngComponentRouter')
    , require('angular-cookies')
    , require('angular-animate')
    , require('angular-messages')
    , require('angular-resource')
    , require('angular-material-data-table')
    , require('angular-material') //make sure this is loaded after any other material dependency
    , require('../navbar/navbar')
    , require('../sidenav/sidenav')
    , require('../login/login')
    , require('../notfound/notfound')
    , require('../../directives/shakeThat')
    , require('../../routes/home/home')
    , require('../../routes/about/about')
    , require('../../routes/admin/admin')
    , require('../../services/account')
    , require('../../services/auth')
    , require('../../services/ui')
    , require('../../services/cache')
    , require('../../../scratch/templates')
    ])
  .config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
      .defaultIconSet('fonts/materialdesignicons-webfont.svg')
      .defaultFontSet('mdi')
  }])
  .run(['$templateRequest', function($templateRequest){
    var urls = ['fonts/materialdesignicons-webfont.svg']

    angular.forEach(urls, function(url) {
      $templateRequest(url)
    })
  }])
  .value('$routerRootComponent', 'app')
  .component('app', {
    templateUrl: 'components/app/app.html',
    $routeConfig: [
        { path: '/', component: 'home', name: 'Home' }
      , { path: '/about', component: 'about', name: 'About' }
      , { path: '/admin/...', component: 'admin', name: 'Admin' }
      , { path: '/**', component: 'notfound', name: 'NotFound' }
    ]
  })