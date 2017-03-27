var constructor, moduleName = 'app.admin.dashboard'

angular.module(moduleName, []).component('dashboard', {
  templateUrl: 'routes/admin/dashboard/dashboard.html',
  controllerAs: 'vm',
  controller: (constructor = ['Account', 'AdminService', 'Ui', '$rootRouter', DashboardController])
})

constructor.$canActivate = ['Account', function(Account) {
  console.log('canactivate')
  return Account.adminStatusForNavigation()
}]

function DashboardController(Account, AdminService, Ui, $rootRouter) {
  var vm = this
  vm.email = Account.getCurrentUserEmail()
  vm.someResult = '...'
  vm.mySyncValue = 'Waiting for some HTTP response'

  vm.$routerOnActivate = function (toRoute) {
    console.log('onactivate: ' + toRoute.params.someParam)
    AdminService.sampleHttpCall()
      .then(function(res) {
          vm.someResult = res
          Ui.showToast('Got a response from server')
      })
  }

  vm.doSomethingInteresting = function() {
    $rootRouter.navigate(['/Admin/DashboardTwo', { someParam: 'notJustAdemo'}])
  }


}

module.exports = moduleName