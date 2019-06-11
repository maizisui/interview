/**
 * Created by Administrator on 2017/4/27.
 */
angular.module('carrot')
 .directive('upcarousel', function () {
	return {
		templateUrl: "templates/findJob/upDownCarousel.html",
		restrict: "EA",
		link: function () {
			$('.carousel').carousel({
				interval: 3000
			});
		}
	}
});