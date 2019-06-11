/**
 * Created by Administrator on 2017/4/24.
 */
angular.module('carrot')
	.controller('searchCompanyCtrl', function ($scope, $rootScope, $state, jobService, searchOptions, searchUtil, commonUtil) {
		var vm = this;
		vm.params = $state.params;
		vm.option = commonUtil.judegesessionStorage(sessionStorage.searchCompanyOptions, searchOptions);
		vm.data = searchUtil.dataConvert(vm.option);
		vm.data.name = vm.params.name;
		vm.data.size = 12;
		vm.params.size = 12;
		vm.data.page = vm.params.page;
		// vm.data.returnTags = 1;
		vm.checkboxMulti = searchUtil.checkboxMulti;
		// vm.radioType = searchUtil.radioType;

		vm.search = function () {
			sessionStorage.searchCompanyOptions = JSON.stringify(vm.option);
			$state.go($state.current, {page: 1, size: 12, name: vm.data.name}, {reload: true});
		};
		vm.clear = function () {
			sessionStorage.removeItem("searchCompanyOptions");
			sessionStorage.searchCompanyOptions = JSON.stringify(searchOptions);
			$state.go($state.current, {page: 1, size: 12, name: null}, {reload: true});
		};

		jobService.getCompanyList(vm.data).then(function (res) {
			if (res.data.code === 0) {
				vm.companyList = res.data;
				console.log(vm.companyList);
			}
			// 判断找不到页面或找不到内容
			vm.isNotFind = commonUtil.judgeNotFind(res.data);
			// 找不到内容时，是否推荐
			vm.isShowRecommend = "company";
		})


	});