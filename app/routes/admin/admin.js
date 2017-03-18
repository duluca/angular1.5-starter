var moduleName = 'app.admin'

angular.module(moduleName, [
		require('./dashboard/dashboard')
	,	require('./dashboard-two/dashboard-two')
	, require('./adminService')
]).component('admin', {
	templateUrl: 'routes/admin/admin.html',
	$routeConfig: [
		  { path: '/dashboard/:someParam', component: 'dashboard', name: 'Dashboard' }
	  , { path: '/dashboardTwo/:someParam', component: 'dashboardTwo', name: 'DashboardTwo' }
	]
})

module.exports = moduleName