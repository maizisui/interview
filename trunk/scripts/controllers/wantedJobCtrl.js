/**
 * Created by Administrator on 2017/4/25.
 */
'use strict';
angular.module('carrot')
  .controller('wantedJobCtrl', ['$scope', '$rootScope', '$state', 'jobService', 'searchOptions', 'searchUtil', 'commonUtil',
	function ($scope, $rootScope, $state, jobService, searchOptions, searchUtil, commonUtil) {
		var vm = this;
		//跳转到本页面保持顶部
		commonUtil.scrollTo(0, 0);

		vm.option = commonUtil.judegesessionStorage(sessionStorage.wantedJobsOption, searchOptions);

		// 标签多选
		vm.checkboxMulti = function (index, arry) {
			searchUtil.checkboxMulti(index, arry);
			vm.search()
		};

		// 取出选中的数据
		vm.data = searchUtil.dataConvert(vm.option);
		vm.data.companyId = $state.params.id;
		vm.data.size = $state.params.size;
		vm.data.page = $state.params.page;

		// 搜索
		vm.search = function () {
			// 将选中的标签存入本地
			sessionStorage.wantedJobsOption = JSON.stringify(vm.option);
			// 刷新当前界面
			$state.go($state.current, {page: 1, size: 10}, {reload: true});
		};

		//获取公司详情
		jobService.getCompanyDescription(vm.data.companyId).then(function (res) {
			if (res.data.code === 0) {
				vm.companyList = res.data.data;
				console.log(vm.companyList)
			}
			else {
				console.warn("公司详情信息读取失败")
			}
		});

		//获取职业列表
		jobService.getSearchJob(vm.data).then(function (res) {
			if (res.data.code === 0) {
				vm.jobList = res.data;
				console.log(vm.jobList)
			}
			// 判断找不到页面或找不到内容
			vm.isNotFind = commonUtil.judgeNotFind(res.data);
			// 找不到内容时，是否推荐
			vm.isShowRecommend = null
		});
	}])
;