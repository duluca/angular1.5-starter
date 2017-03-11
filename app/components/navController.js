function NavController(Auth, Account, $rootRouter, $mdSidenav) {
  var vm = this

  vm.logout = function() {
    vm.closeLeftNav()
    Auth.logout()
    $rootRouter.navigate(['/Home'])
  }

  vm.navigate = function(route) {
    vm.closeLeftNav()
    $rootRouter.navigate(route)
  }

  vm.toggleLeftNav = function() {
    $mdSidenav('left').toggle()
  }

  vm.closeLeftNav = function () {
    $mdSidenav('left').close()
  }

  vm.currentUserEmail = function() {
    return Account.getCurrentUserEmail()
  }

  vm.isAdmin = function() {
    return Account.adminStatus()
  }

  vm.isAuthenticated = function() {
    return Account.loginStatus()
  }
}

module.exports = NavController