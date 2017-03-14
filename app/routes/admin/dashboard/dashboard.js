var constructor, moduleName = 'app.admin.dashboard'

angular.module(moduleName, []).component('dashboard', {
  templateUrl: 'routes/admin/dashboard/dashboard.html',
  controller: (constructor = ['Account', DashboardController])
})

constructor.$canActivate = ['Account', function(Account) {
  return Account.adminStatusForNavigation()
}]

function DashboardController(Account) {
  var vm = this
  vm.email = Account.getCurrentUserEmail()
}

module.exports = moduleName