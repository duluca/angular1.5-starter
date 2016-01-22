var angular = require('angular')

angular.module('app.home', [])
  .component('home', {
    controller: function () {
      this.name = 'Friend'
    }
  })
