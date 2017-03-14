var constructor, moduleName = 'app.admin.dashboard'

angular.module(moduleName, []).component('dashboard', {
  templateUrl: 'routes/admin/dashboard/dashboard.html',
  controllerAs: 'vm',
  controller: (constructor = ['Account', 'AdminService', DashboardController])
})

constructor.$canActivate = ['Account', function(Account) {
  return Account.adminStatusForNavigation()
}]

function DashboardController(Account, AdminService) {
  var vm = this
  vm.email = Account.getCurrentUserEmail()
  vm.someResult = '...'

  AdminService.sampleHttpCall()
    .then(function(res) {
        vm.someResult = res
    })
}

module.exports = moduleName