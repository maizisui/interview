/**
 * Created by Administrator on 2017/4/20.
 */
angular.module('carrot')
  .controller('findEliteCtrl', function ($scope, $state, jobService) {
		var vm = this;
		vm.params = $state.params;
		vm.params.size = 8;

		// 找精英banner
		jobService.getArticle(2).then(function (res) {
			vm.findEliteArticle = res.data.data;
		});


		// 成功案例
		jobService.getCompanyList(vm.params, 0).then(function(res) {
			if (res.data.code === 0) {
				vm.findElite = res.data.data;
			}
		});

	});