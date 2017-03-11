var constructor, moduleName = 'app.about'

angular.module(moduleName, []).component('about', {
    templateUrl: 'routes/about/about.html',
    controllerAs: 'vm',
    controller: (constructor = ['Account', AboutController])
  })

constructor.$canActivate = ['Account', function(Account) {
  return Account.loginStatusForNavigation()
}]

function AboutController(Account) {
  var vm = this

  vm.currentUser = null

  vm.$routerOnActivate = function (/*toRoute , fromRoute */) {
    //vm.name = toRoute.params.name
    Account.getCachedUser().then(function(user) {
      vm.currentUser = user
    })
  }
}

module.exports = moduleName
