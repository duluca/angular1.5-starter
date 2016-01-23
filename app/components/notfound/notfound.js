var angular = require('angular')

var moduleName = 'app.404'

angular.module(moduleName, [])
  .component('notfound', {
    template: 'Page Not Found',
    controller: NotFoundController
  })

function NotFoundController () {
}

module.exports = moduleName
