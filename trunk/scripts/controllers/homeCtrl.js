/**
 * Created by Administrator on 2017/4/12.
 */
angular.module('carrot')
	.controller('homeCtrl', function ($scope, $rootScope, $state, $http) {
		var vm = this;
		vm.params = $state.params;
		$http.get('/carrots-ajax/a/article/search?type=0').success(function (response) {
			console.log(response);
			$scope.bannerUrl = response.data.articleList[0] ? response.data.articleList[0].img : '../images/homepage.png'
		});
		//轮播图  左右的
		// jobService.getArticle(0).then(function (res) {
		//
		// 	if (res.data.code === 0) {
		// 		vm.findJobArticle = res.data;
		// 		//轮播图开始3s
		// 		$('.carousel').carousel({
		// 			interval: 3000
		// 		});
		// 		console.log(vm.findJobArticle.data.articleList );
		// 	}
		// });
	});