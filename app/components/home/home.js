var angular = require('angular')

var moduleName = 'app.home'

angular.module(moduleName, []).directive('home', HomeRoute)

function HomeRoute () {
  return {
    templateUrl: 'components/home/home.html',
    controller: HomeController,
    controllerAs: 'vm'
  }
}

function HomeController () {
  this.name = 'you'
}

module.exports = moduleName
