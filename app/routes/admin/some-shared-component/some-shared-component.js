var moduleName = 'app.admin.someSharedComponent'

angular.module(moduleName, []).component('someSharedComponent', {
  bindings: {
    info: '=',
    result: '='
  },
  templateUrl: 'routes/admin/some-shared-component/some-shared-component.html',
  controllerAs: 'vm',
  controller: [SomeSharedComponentController]
})

function SomeSharedComponentController() {
}

module.exports = moduleName
