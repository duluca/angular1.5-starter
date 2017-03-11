var moduleName = 'app.sidenav'

var NavController = require('../navController')

angular.module(moduleName, []).component('sideNav', {
  templateUrl: 'components/sidenav/sidenav.html',
  controllerAs: 'vm',
  controller: ['Auth', 'Account', '$rootRouter', '$mdSidenav', NavController]
})

module.exports = moduleName