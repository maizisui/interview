/**
 * Created by Administrator on 2017/4/12.
 */
angular.module('carrot')
	.controller('mainCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
		var vm = this;
		$rootScope.$state = $state;
		if (document.body.clientWidth < 768) {
			vm.isToggle = "collapse";
		} else {
			vm.isToggle = "";
		}
	}]);