/**
 * Created by Administrator on 2017/4/7.
 */
var app = angular.module('carrot', ['ui.router', 'oc.lazyLoad', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	var _lazyLoad = function (loaded) {
		return function ($ocLazyLoad) {
			return $ocLazyLoad.load(loaded, {serie: true});
		}
	};

	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('app', {
			url: '',
			templateUrl: 'templates/main.html',
			controller: 'mainCtrl',
			controllerAs: 'vm',
			resolve: {
				loadMyFile: _lazyLoad([
					'scripts/controllers/mainCtrl.js',
					'styles/main.css'
				])
			}
		})
		//首页
		.state('app.home', {
			url: '/home',
			templateUrl: 'templates/home/home.html',
			controller: 'homeCtrl',
			controllerAs: 'vm',
			resolve: {
				loadMyFile: _lazyLoad([
					'scripts/controllers/homeCtrl.js',
					'styles/home/home.css'
				])
			}
		})
		// 找职位
		.state('app.findJob', {
			url: '/findJob?id',
			templateUrl: 'templates/findJob/findJob.html',
			controller: 'findJobCtrl',
			controllerAs: 'vm',
			resolve: {
				loadMyFile: _lazyLoad([
					'scripts/controllers/findJobCtrl.js',
					'styles/findJob/findJob.css',
					'styles/findJob/upDownCarousel.css',
					'scripts/controllers/upDownCarousel.js'
				])
			}
		})
		// 搜索页主页
		.state('app.searchMain', {
			url: '/searchMain?id',
			templateUrl: 'templates/findJob/searchMain.html',
			resolve: {
				loadMyFile: _lazyLoad([
					'styles/findJob/searchMain.css'
				])
			}
		})
		//公司搜索页
		.state('app.searchMain.searchCompany', {
			url: '/searchCompany?page&size&name',
			templateUrl: 'templates/findJob/searchCompany.html',
			controller: 'searchCompanyCtrl',
			controllerAs: 'vm',
			resolve: {
				loadMyFile: _lazyLoad([
					'scripts/controllers/searchCompanyCtrl.js',
					'styles/findJob/searchCompany.css',
					'scripts/directives/notFind.js',
					'styles/notFind.css'
				])
			}
		})
		//职位搜索页
		.state('app.searchMain.searchJob', {
			url: '/searchJob?page&size&type&subType&name',
			templateUrl: 'templates/findJob/searchJob.html',
			controller: 'searchJobCtrl',
			controllerAs: 'vm',
			resolve: {
				loadMyFile: _lazyLoad([
					'scripts/controllers/searchJobCtrl.js',
					'styles/findJob/searchJob.css',
					'scripts/directives/notFind.js',
					'styles/notFind.css'
				])
			}
		})

		//推荐职位,最新职位搜索
		.state('app.jobList', {
			url: '/jobList?n&page&size&name',
			templateUrl: 'templates/findJob/jobList.html',
			controller: 'jobListCtrl',
			controllerAs: 'vm',
			cache: false,
			resolve: {
				loadMyFile: _lazyLoad([
					'scripts/controllers/jobListCtrl.js',
					'styles/findJob/jobList.css',
					'scripts/directives/notFind.js',
					'styles/notFind.css'
				])
			}
		})
		// 职位介绍
		.state('app.jobDescription', {
			url: '/jobDescription?page&size&id',
			templateUrl: 'templates/findJob/jobDescription.html',
			controller: 'jobDescriptionCtrl',
			controllerAs: 'vm',
			resolve: {
				loadMyFile: _lazyLoad([
					'scripts/controllers/jobDescriptionCtrl.js',
					'styles/findJob/jobDescription.css'
				])
			}
		})
		// 公司详情和在招职位主页
		.state('app.companyMain', {
			url: '/companyMain?page&size&id&companyId',
			templateUrl: 'templates/findJob/companyMain.html',
			controller: 'companyDetailCtrl',
			controllerAs: 'vm',
			resolve: {
				loadMyFile: _lazyLoad([
					'scripts/controllers/companyDetailCtrl.js',
					'styles/findJob/companyMain.css'
				])
			}
		})
		// 公司详情
		.state('app.companyMain.companyDetail', {
			url: '/companyDetail?page&size',
			templateUrl: 'templates/findJob/companyDetail.html',
			controller: 'companyDetailCtrl',
			controllerAs: 'vm',
			resolve: {
				loadMyFile: _lazyLoad([
					'scripts/controllers/companyDetailCtrl.js',
					'styles/findJob/companyDetail.css'
				])
			}
		})
		// 在招职位
		.state('app.companyMain.wantedJob', {
			url: '/wantedJob?page&size',
			templateUrl: 'templates/findJob/wantedJob.html',
			controller: 'wantedJobCtrl',
			controllerAs: 'vm',
			resolve: {
				loadMyFile: _lazyLoad([
					'scripts/controllers/wantedJobCtrl.js',
					'styles/findJob/wantedJob.css',
					'scripts/directives/notFind.js',
					'styles/notFind.css'
				])
			}
		})

		// 找精英
		.state('app.findElite', {
			url: '/findElite?id',
			templateUrl: 'templates/findElite/findElite.html',
			controller: 'findEliteCtrl',
			controllerAs: 'vm',
			resolve: {
				loadMyFile: _lazyLoad([
					'scripts/controllers/findEliteCtrl.js',
					'styles/findElite/findElite.css'
				])
			}
		})
		// 公司列表
		.state('app.companyList', {
			url: '/companyList?page&size',
			templateUrl: 'templates/findElite/companyList.html',
			controller: 'companyListCtrl',
			controllerAs: 'vm',
			resolve: {
				loadMyFile: _lazyLoad([
					'scripts/controllers/companyListCtrl.js',
					'styles/findElite/companyList.css',
					'scripts/directives/notFind.js',
					'styles/notFind.css'
				])
			}
		})
	// 关于我们
		.state('app.aboutUs', {
			url: '/aboutUs?status',
			templateUrl: 'templates/aboutUs/aboutUs.html',
			controller: 'aboutUsCtrl',
			controllerAs: 'vm',
			resolve: {
				loadMyFile: _lazyLoad([
					'scripts/controllers/aboutUsCtrl.js',
					'styles/aboutUs/aboutUs.css'
				])
			}
		})

});