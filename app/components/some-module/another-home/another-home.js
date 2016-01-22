var angular = require('angular')

angular.module('app.someModule.anotherHome', [])
  .controller('SomeModuleAnotherHomeController', [ function () {
    this.name = 'Friend from another home'
  }])
