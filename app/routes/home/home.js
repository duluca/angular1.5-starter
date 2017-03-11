var moduleName = 'app.home'

angular.module(moduleName, [])
  .component('home', {
    templateUrl: 'routes/home/home.html',
    controllerAs: 'vm',
    controller: ['Account', HomeController]
  })

function HomeController (Account) {
  var vm = this

  vm.name = 'you'

  vm.isAuthenticated = function() {
     return Account.loginStatus()
  }
}

module.exports = moduleName
