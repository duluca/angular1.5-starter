var moduleName = 'app.shakeThat'

angular.module(moduleName, ['ngAnimate'])
.directive('shakeThat', ['$animate', function($animate) {
        return {
            scope: {
                shakeCallback: '='
            },
            link: function (scope, element) {
                scope.shakeCallback = function() {
                    $animate.addClass(element, 'shake').then(function () {
                        $animate.removeClass(element, 'shake')
                    })
                }
            }
        }
    }])

module.exports = moduleName