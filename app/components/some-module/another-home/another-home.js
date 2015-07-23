/**
 * Created by doguhanuluca on 4/4/15.
 */
var angular = require('angular');

angular.module('app.someModule.anotherHome', [])
    .controller('SomeModuleAnotherHomeController', [function () {
        this.name = 'Friend from another home';
    }]);