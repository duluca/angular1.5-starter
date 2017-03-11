var moduleName = 'app.login'

angular.module(moduleName, []).component('login', {
  templateUrl: 'components/login/login.html',
  controllerAs: 'vm',
  controller: ['Account', 'Auth', 'Ui', '$rootRouter', NavBarController]
})

function NavBarController(Account, Auth, Ui, $rootRouter) {
  var vm = this

  vm.login = function() {
    Auth.login(vm.email, vm.password)
      .then(function(response) {
        if(response.isAuthenticated) {
          $rootRouter.navigate(['/About'])
        } else {
          Account.clearCachedUser()
          Ui.showToast(response.error)
          vm.shake()
        }
      })
  }
}

module.exports = moduleName