var angular = require('angular')

var moduleName = 'app.about'

angular.module(moduleName, [])
  .component('about', {
    template: 'About {{ vm.name }}',
    controllerAs: 'vm',
    controller: function () {
      var vm = this

      vm.$routerOnActivate = function (toRoute /* , fromRoute */) {
        vm.name = toRoute.params.name
      }
    }
  })

module.exports = moduleName
