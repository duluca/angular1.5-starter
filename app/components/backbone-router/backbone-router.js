/**
 * Created by dxu0 on 7/21/2015.
 */
var angular = require('angular');

angular.module('app.backboneRouter', [])
    .controller('BackboneRouterController', ['$routeParams', function ($routeParams) {
        this.name = 'Friend';
    }]);