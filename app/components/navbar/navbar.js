var moduleName = 'app.navbar'

var NavController = require('../navController')

angular.module(moduleName, []).component('navBar', {
  templateUrl: 'components/navbar/navbar.html',
  controllerAs: 'vm',
  controller: ['Auth', 'Account', '$rootRouter', '$mdSidenav', NavController]
})

module.exports = moduleName