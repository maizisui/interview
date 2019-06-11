/**
 * Created by Administrator on 2017/4/15.
 */
angular.module('carrot')
	//推荐职位轮播
 .directive('professionCarousel',function (jobService) {
 		return {
			restrict: 'E',
			templateUrl: 'templates/home/professionCarousel.html',
			scope: {},
			replace: 'true',
			link: function (scope, ele, attrs) {
				scope.Interval = 5000;
				scope.params = attrs.params;
				scope.noWrapSlides = false;
				scope.active = 0;
				var num = 4;
				var data = [];
				scope.slides = [];
				// requestData.professionList(scope.params || {recommend: 0, size: 20})
				jobService.getSearchJob({size: 20}, 0)
					.success(function (resp) {
						data = resp.data;
						// console.log(data);
						len = data.length;
						if (len % 4) {
							angular.forEach(data.slice(0, 4 - (len % 4)), function (item) {
								data.push(item);
							})
						}
						for (var i = 0; i < data.length; i = i + num) {
							scope.slides.push(data.slice(i, i + num));
						}
						console.log(scope.slides);
					})

			}
		}
 })
  .directive('pagination', function ($state) {
	return {
		restrict: 'EA',
		templateUrl: 'templates/pagination.html',
		replace: true,
		scope: {
			total: '@'
		},
		link: function (scope, element, attrs) {

			//当前页
			var activePage = parseInt($state.params.page || 1);
			console.log($state.params);
			//size
			scope.size = $state.params.size ? parseInt($state.params.size) : 10;
			console.log(scope.size);
			//总页数
			console.log(parseInt(scope.total) / scope.size);
			var totalPage = Math.ceil(parseInt(scope.total) / scope.size);
			console.log(totalPage);

			scope.activePage = activePage;
			scope.totalPage = totalPage;
			scope.isHaveNextPage = isHaveNextPage;
			scope.isHavePrePage = isHavePrePage;
			scope.pageList = getPageList();
			scope.isDisabled = isDisabled;
			scope.isActive = isActive;

			//是否有下一页
			function isHaveNextPage() {
				if (activePage === totalPage) {
					return false;
				}
				return true;
			}

			//是否有上一页
			function isHavePrePage() {
				if (activePage !== 1) {
					return true;
				}
				return false;
			}

			//获得pageList
			function getPageList() {
				var pageList = [];

				//...在两边
				if (isHavePreDot() && isHaveNextDot()) {
					for (var i = 0; i < 4; i++) {
						pageList.push(activePage + i);
					}
					pageList.unshift("...");
					pageList.push("...");
				}

				//...在前面
				if (isHavePreDot() && !isHaveNextDot()) {
					for (var i = totalPage - 4; i <= totalPage; i++) {
						pageList.push(i);
					}
					pageList.unshift("...");
				}

				//...在后面
				if (!isHavePreDot() && isHaveNextDot()) {

					if (totalPage > 5) {
						for (var i = 0; i < 5; i++) {
							pageList.push(activePage + i);
						}
					} else {
						for (var i = 1; i < totalPage; i++) {
							pageList.push(i);
						}
					}
					pageList.push("...");
				}

				//没有...
				if (!isHavePreDot() && !isHaveNextDot()) {

					for (var i = 1; i <= totalPage; i++) {
						pageList.push(i);
					}
				}


				return pageList;
			}

			//是否有前面的 ...
			function isHavePreDot() {
				if (activePage - 1 > 4) {
					return true;
				}
				return false;
			}

			//是否有后面的 ...
			function isHaveNextDot() {
				if (activePage < totalPage - 4) {
					return true;
				}
				return false;
			}


			function isDisabled(page) {
				if (Number(page) === activePage || page === '...' || Number(page) > totalPage) {
					return true;
				}
				return false;
			}

			function isActive(page) {
				if (page === activePage) {
					return true;
				}
				return false;
			}


			scope.changeInput = function () {
				scope.jumpPage = scope.jumpPage.replace(/[^0-9]/g, '');
				if (scope.jumpPage > totalPage) {
					scope.jumpPage = totalPage;
				}
			};

			// scope.changeSize = function () {
			// 	scope.size = scope.size.replace(/[^0-9]/g, '');
			// 	if (parseInt(scope.size) === 0) {
			// 		scope.size = 10;
			// 	}
			// };


			//跳页
			scope.goPage = function (page) {
				if (isDisabled(page)) return;
				$state.go($state.current, {page: page || 1, size: scope.size}, {reload: true});
			};
		}
	}


})
  .directive('companyCarousel', function (jobService) {
	return {
		restrict: 'E',
		templateUrl: 'templates/findJob/companyCarousel.html',
		scope: {
			vertical: '='
		},
		replace: 'true',
		link: function (scope, ele, attrs) {
			scope.Interval = 3000;
			scope.noWrapSlides = false;
			scope.active = 0;
			scope.slides = [];
			jobService.getCompanyList("", 1).then(function (res) {
				console.log(res);
				scope.slides = res.data.approvedCompanyList;
			})
			// requestData.companyList({returnPage: 1}).success(function (res) {
			// 	scope.slides = res.approvedCompanyList
			// })

		}

	}
});
	// .directive('notFind', function($state, jobService) {
	// 	return {
	// 		restrict: 'EA',
	// 		templateUrl: 'templates/findJob/notFind.html',
	// 		replace: true,
	// 		scope: {
	// 			size: '@',
	// 			showrecommend: '@'
	// 		},
	// 		link: function(scope, ele, attr) {
	// 			var data = {};
	// 			data.size = scope.size;
	//
	// 			if (scope.showrecommend === 'company') {
	// 				jobService.getCompanyList(data).then(function(res) {
	// 					if (res.data.code === 0) {
	// 						scope.eliteCompany = res.data;
	// 					}
	// 				});
	// 			} else if (scope.showrecommend === 'position') {
	// 				jobService.getSearchJob(data).then(function(res) {
	// 					if (res.data.code ===0) {
	// 						scope.elitePosition = res.data;
	// 					}
	// 				})
	// 			}
	// 		}
	// 	};
	//
	// });