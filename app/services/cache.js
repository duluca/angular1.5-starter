var moduleName = 'app.cache'

angular.module(moduleName, [])
    .factory('Cache', ['$cookies', CacheService])

function CacheService($cookies) {
  var vm = this

  var currentUserKey = 'currentUser'

  vm.clearCache = function () {
    var currentUser = vm.getCurrentUser()

    if(currentUser) {
      $cookies.remove(currentUser.email)
      $cookies.remove(currentUserKey)
    }
  }

  vm.cacheLogin = function(email, isAuthenticated, userDetails) {
    var cookieOptions = getCookieOptions()

    $cookies.put(email, isAuthenticated, cookieOptions)
    $cookies.putObject(currentUserKey, userDetails, cookieOptions)
  }

  vm.updateCache = function(userDetails) {
    $cookies.putObject(currentUserKey, userDetails, getCookieOptions())
  }

  vm.isAuthenticated = function() {
    var email = vm.getCurrentUser().email
    return $cookies.get(email) || false
  }

  vm.getCurrentUser = function() {
    return $cookies.getObject(currentUserKey) || { email: '', role: '', reload: true}
  }

  function getCookieOptions() {
    return {
      expires: getCookieExpiration(),
      // secure: true //TODO: if using HTTPS enable this option, so cookie contents won't be exposed over HTTP
      // domain: 'https://example.com' //TODO: set this option to your domain so your cookie will remain private
    }
  }

  function getCookieExpiration() {
    var currentDate = new Date()
    return new Date(currentDate.setHours(currentDate.getHours() + 8))
  }

  return {
    clearCache: vm.clearCache,
    cacheLogin: vm.cacheLogin,
    updateCache: vm.updateCache,
    isAuthenticated: vm.isAuthenticated,
    getCachedUser: vm.getCurrentUser
  }
}

module.exports = moduleName
