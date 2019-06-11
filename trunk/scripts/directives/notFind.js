/**
 * Created by Administrator on 2017/4/25.
 */
angular.module('carrot')
  .directive('notFind', function ($state, jobService) {
	return {
		restrict: 'EA',
		templateUrl: 'templates/findJob/notFind.html',
		replace: true,
		scope: {
			size: '@',
			showrecommend: '@'
		},
		link: function (scope, element, attrs) {
			var data = {};
			data.size = scope.size;

			//获取推荐数据
			if (scope.showrecommend === "company") {
				jobService.getCompanyList(data).then(function (res) {
					if (res.data.code === 0) {
						scope.eliteCompany = res.data;
					}
				});
			} else if (scope.showrecommend === "position") {
				jobService.getSearchJob(data).then(function (res) {
					if (res.data.code === 0) {
						scope.elitePosition = res.data;
					}
				});
			}

		}
	}


});