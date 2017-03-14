var moduleName = 'app.admin.adminService'

angular.module(moduleName, [])
    .factory('AdminService', ['$http', '$q', AdminService])

function AdminService($http, $q) {
  var vm = this

  vm.sampleHttpCall = function() {
    var deferred = $q.defer()
    $http.get('https://httpbin.org/get')
      .then(function(res) {
        deferred.resolve(res.data.url)
      })

    return deferred.promise
  }

  return {
    sampleHttpCall: vm.sampleHttpCall
  }
}

module.exports = moduleName