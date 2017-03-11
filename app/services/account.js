var roles = require('../shared/roles')

var _ = require('lodash')

var moduleName = 'app.account'

angular.module(moduleName, [])
    .factory('Account', ['$http', '$rootRouter', '$q', 'Cache', 'Auth', 'Ui', AccountService])

function AccountService($http, $rootRouter, $q, Cache, Auth, Ui) {
  var vm = this
  vm.currentUser = function() {
    return Cache.getCachedUser()
  }

  vm.clearCachedUser = function() {
      Auth.logout()
  }

  vm.getCachedUser = function() {
      if(vm.currentUser().reload === true) {
        // simulating a $http call to update cached user with profile info
        var user = vm.currentUser()
        user = _.assign(user, { name: 'Jane Doe'} )
        Cache.updateCache(user)
      }

      return $q.resolve(vm.currentUser())
  }

  vm.getCurrentUserEmail = function () {
      var user = vm.currentUser()
      return user ? user.email : ''
  }

  vm.loginStatus = function () {
      return Auth.isAuthenticated()
  }

  vm.loginStatusForNavigation = function () {
      var isAuthenticated = vm.loginStatus()

      if (!isAuthenticated) {
        Ui.showToast('You must be logged in to continue!')
        $rootRouter.navigate(['/Home'])
      }

      return isAuthenticated
  }

  vm.getRole = function() {
      var user = vm.currentUser()
      return user ? user.role : ''
  }

  vm.adminStatus = function () {
      if (!vm.loginStatus()) {
          return false
      }

      return vm.getRole() === roles.admin
  }

  vm.adminStatusForNavigation = function () {
    var isAdmin = vm.adminStatus()

    if (!isAdmin) {
      Ui.showToast('You must be an Admin to continue!')
      $rootRouter.navigate(['/Home'])
    }

    return isAdmin
  }

  return {
    clearCachedUser: vm.clearCachedUser,
    getCachedUser: vm.getCachedUser,
    getCurrentUserEmail: vm.getCurrentUserEmail,
    loginStatus: vm.loginStatus,
    loginStatusForNavigation: vm.loginStatusForNavigation,
    getRole: vm.getRole,
    adminStatus: vm.adminStatus,
    adminStatusForNavigation: vm.adminStatusForNavigation
  }
}

module.exports = moduleName