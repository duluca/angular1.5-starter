'use strict';

var moduleName = 'percentage'

angular.module(moduleName, [])
  .filter('percentage', ['$window', function ($window) {
    return function (input, decimals, suffix) {
      decimals = angular.isNumber(decimals)? decimals :  3;
      suffix = suffix || '%';
      if ($window.isNaN(input)) {
        return '';
      }
      return Math.round(input * Math.pow(10, decimals + 2))/Math.pow(10, decimals) + suffix
    };
  }]);

module.exports = moduleName