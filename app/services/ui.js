var _ = require('lodash')

var moduleName = 'app.ui'

angular.module(moduleName, ['ngMaterial','ngAnimate'])
  .factory('Ui', ['$mdToast', '$animate', '$mdDialog', function($mdToast, $animate, $mdDialog) {
    function showToast(message) {
        var toast = $mdToast.simple()
              .content(message)
              .action('Close')
              .highlightAction(true)
              .hideDelay(10000)
              .position('bottom right')
        return $mdToast.show(toast)
    }

    function shake(el){
        $animate.addClass(el, 'shake').then(function () {
            $animate.removeClass(el, 'shake')
        })
    }

    function showAlert(title, content, okText, additionalOptions) {
        var defaults = {
            title: title,
            textContent: content,
            ok: okText
        }

        if(additionalOptions) {
            _.extend(defaults, additionalOptions)
        }

        return $mdDialog.show($mdDialog.alert(defaults))
    }

    function showConfirm(title, content, okText, cancelText, event) {
        var confirm = $mdDialog.confirm({
            title: title,
            content: content,
            ok: okText,
            cancel: cancelText,
            targetEvent: event
        })
        return $mdDialog.show(confirm)
    }

    return {
        showToast: showToast,
        shake: shake,
        showAlert: showAlert,
        showConfirm: showConfirm
    }
}])

module.exports = moduleName