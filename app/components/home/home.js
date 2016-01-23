var angular = require('angular')

var moduleName = 'app.home'

angular.module(moduleName, [])
  .component('home', {
    templateUrl: 'components/home/home.html',
    controller: HomeController
  })

function HomeController () {
  // this.name = 'Friend'
}

module.exports = moduleName
