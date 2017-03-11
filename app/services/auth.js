var roles = require('../shared/roles')

var moduleName = 'app.auth'

angular.module(moduleName, [])
    .factory('Auth', ['$q', 'Cache', AuthService])

function AuthService($q, Cache) {
  var vm = this

  vm.login = function(email, password) {
    // simulating an async fake login call
    // See this article for implementing advanced token based authentication
    // https://auth0.com/blog/angularjs-authentication-with-cookies-vs-token/

    var deferred = $q.defer()

    var isAuthenticated = false

    var error = 'Incorrect username and/or password.'

    if(email && password) {
      var role = 'user'
      if(email.toLowerCase().endsWith('@test.com')) {
        isAuthenticated = true
      } else {
        error = 'E-mail address must end with @test.com.'
      }

      if(email.toLowerCase().includes(roles.admin)) {
        role = roles.admin
      }

      if(isAuthenticated === true) {
        Cache.cacheLogin(email, isAuthenticated, { email: email, role: role})
        error = ''
      }
    }

    deferred.resolve({ isAuthenticated: vm.isAuthenticated(), error: error})

    return deferred.promise
  }

  vm.logout = function() {
    Cache.clearCache()
  }

  vm.isAuthenticated = function() {
    return Cache.isAuthenticated()
  }

  return {
    login: vm.login,
    logout: vm.logout,
    isAuthenticated: vm.isAuthenticated
  }
}

module.exports = moduleName
