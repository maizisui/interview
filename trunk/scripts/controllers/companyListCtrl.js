/**
* Created by Administrator on 2017/4/25.
*/
angular.module('carrot')
	.controller('companyListCtrl', function ($scope, $rootScope, $state, jobService, searchOptions, searchUtil, commonUtil) {
		var vm = this;
		commonUtil.scrollTo(0, 0);
		vm.params = $state.params;
		vm.option = commonUtil.judegesessionStorage(sessionStorage.searchCompanyOptions, searchOptions);

		vm.checkboxMulti = function (index, arry) {
			searchUtil.checkboxMulti(index, arry);
			vm.search();
		};
		vm.data = searchUtil.dataConvert(vm.option);
		vm.data.name = vm.params.name;
		vm.data.size = 12;
		vm.params.size = 12;
		vm.data.page = vm.params.page;

		vm.search = function () {
			sessionStorage.searchCompanyOptions = JSON.stringify(vm.option);
			$state.go($state.current, {page: 1, size: 12, name: vm.data.name}, {reload: true});
		};

		jobService.getCompanyList(vm.data).then(function (res) {
			if (res.data.code === 0) {
				vm.eliteCompany = res.data;
			}
			// 判断找不到页面或找不到内容
			vm.isNotFind = commonUtil.judgeNotFind(res.data);
			// 找不到内容时，是否推荐
			vm.isShowRecommend = "company";
		})
	});
