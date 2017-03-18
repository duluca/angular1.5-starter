var constructor, moduleName = 'app.admin.dashboardTwo'

angular.module(moduleName, []).component('dashboardTwo', {
  templateUrl: 'routes/admin/dashboard-two/dashboard-two.html',
  controllerAs: 'vm',
  controller: (constructor = ['Account', 'AdminService', 'Ui', DashboardTwoController])
})

constructor.$canActivate = ['Account', function(Account) {
  console.log('canactivate')
  return Account.adminStatusForNavigation()
}]

function DashboardTwoController(Account, AdminService, Ui) {
  var vm = this
  vm.email = Account.getCurrentUserEmail()
  vm.someResult = '...'

  vm.$routerOnActivate = function (toRoute) {
    console.log('onactivate: ' + toRoute.params.someParam)
    AdminService.sampleHttpCall()
      .then(function(res) {
          vm.someResult = res
          Ui.showToast('Got a response from server')
      })
  }


}

module.exports = moduleName