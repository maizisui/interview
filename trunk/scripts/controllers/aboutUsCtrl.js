/**
 * Created by Administrator on 2017/4/12.
 */
angular.module('carrot')
	.controller('aboutUsCtrl', function ($scope, $rootScope, $state, commonUtil) {
		var vm = this;
		commonUtil.scrollTo(0, 0);
		vm.toggle = $state.params.status !== "false";

		if ($state.params.status === "false" || undefined) {
			$('.table-phone').tab('show');
		} else {
			$('.table-people').tab('show');
		}
	});
