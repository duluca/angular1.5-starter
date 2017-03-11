var moduleName = 'app.admin'

angular.module(moduleName, []).component('admin', {
	templateUrl: 'routes/admin/admin.html',
	$routeConfig: [
		{ path: '/dashboard', component: 'dashboard', name: 'Dashboard' }
	]
})

module.exports = moduleName