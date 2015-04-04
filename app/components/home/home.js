/**
 * Created by doguhanuluca on 4/4/15.
 */
var angular = require('angular');

angular.module('app.home', [])
    .controller('HomeController', [function () {
        this.name = 'Friend';
    }]);