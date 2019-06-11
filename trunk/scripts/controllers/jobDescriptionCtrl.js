/**
 * Created by Administrator on 2017/4/25.
 */

angular.module('carrot')
  .controller('jobDescriptionCtrl', ['$scope', '$rootScope', '$state', 'jobService', 'commonUtil',
	function ($scope, $rootScope, $state, jobService, commonUtil) {
		var vm = this;
		vm.id = $state.params.id;

		//跳转到本页面保持顶部
		commonUtil.scrollTo(0, 0);

		//职位详情的职位详情
		vm.jobDescription = jobService.getJobDescription(vm.id).then(function (res) {
			if (res.data.code === 0) {
				vm.jobDescription = res.data;
			}
			else {
				console.warn("职位详情读取失败");
			}
		});
	}]);