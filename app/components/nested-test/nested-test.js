var angular = require('angular')

angular.module('app.nestedTest', [])
  .controller('NestedTestController', ['$router', function ($router) {
    this.componentName = 'nestedTest'
    $router.config([
      {path: '/one', component: 'insideOne', as: 'nestedOne'},
      {path: '/two', component: 'insideTwo', as: 'nestedTwo'}
    ])
  }])
