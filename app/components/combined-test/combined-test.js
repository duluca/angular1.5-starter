/**
 * Created by kxg2 on 7/14/2015.
 */

var angular = require('angular');

angular.module('app.combinedTest', [])
    .controller('CombinedTestController', ['$router', function ($router) {
        this.componentName = 'combinedTest';
        //$router.config([
        //    { path: '/', components: {
        //        master: 'insideOne',
        //        detail: 'insideTwo'
        //    }
        //]);
    }]);