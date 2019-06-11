/**
 * Created by Administrator on 2017/4/25.
 */
angular.module('carrot')
  .controller('companyDetailCtrl', ['$scope', '$rootScope', '$state', 'jobService', 'commonUtil',
	function ($scope, $rootScope, $state, jobService, commonUtil) {
		var vm = this;
		vm.id = $state.params.id;

		commonUtil.scrollTo(0, 0);

		//公司详情
		jobService.getCompanyDescription(vm.id).then(function (res) {
			if (res.data.code === 0) {
				vm.data = res.data.data;
			}
			else {
				console.warn("公司详情的信息读取失败")
			}
		});
	}]);