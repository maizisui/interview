/**
 * Created by Administrator on 2017/4/15.
 */
// 定义需要的全部接口;

//路径
// angular.module('carrot')
// 	.factory('path', function() {
// 		return {
// 			// 获取职业列表
// 			professionList_url: function (type) {
// 				return '/a/profession/search?recommend=' + type;
// 			},
// 			// 获取公司列表
// 			companyList_url: function (type) {
// 				return '/a/company/search?returnPage=' + type;
// 			},
// 			// 获取公司明细信息
// 			companyDetail_url: function (id) {
// 				return '/a/company/' + id;
// 			},
// 			// 获取某公司职位列表
// 			professionListDetail_url: function (id) {
// 				return '/a/profession/' + id;
// 			}
// 		};
// 	});
//
// // 接口
// angular.module('carrot')
// 	.factory('requestService', function ($http, path) {
// 		return {
// 			getProfessionList: function(type, params) {
// 				return $http.get(path.professionList_url(type || 0), {params: params} );
// 			},
// 			getCompanyList: function(type, params) {
// 				return $http.get(path.companyList_url(type || ''), {params: params});
// 			},
// 			getCompanyDetail: function(id) {
// 				return $http.get(path.companyDetail_url(id));
// 			},
// 			getProfessionListDetail: function(id) {
// 				return $http.get(path.professionListDetail_url(id));
// 			}
// 		};
// 	});



//测试用接口,旧的接口，模拟数据;
angular.module('carrot')
  .factory('path', function () {
	return {
		//轮播article
		article_url: function (type) {
			return "/carrots-ajax/a/article/search?type="+type
		},
		//找职位分类
		jobList_url: function () {
			return "/scripts/services/jobList.json"
		},
		//公司列表
		companyList_url: function (type) {
			return "/carrots-ajax/a/company/search?returnPage="+type
		},
		//搜索职位
		searchJob_url: function (type) {
			return " /carrots-ajax/a/profession/search?recommend="+type
		},
		//职位详情
		jobDescription_url: function (id) {
			return "/carrots-ajax/a/profession/"+id
		},
		//公司详情
		companyDescription_url:function (id) {
			return "/carrots-ajax/a/company/"+id
		}
	}
});

angular.module('carrot')
  .factory('jobService', function ($http, path) {
	return {
		//轮播article
		getArticle: function (type) {
			return $http.get(path.article_url(type))
		},
		//找职位分类
		getJobList: function () {
			return $http.get(path.jobList_url())
		},
		//公司搜索
		getCompanyList: function (data, type) {
			return $http.get(path.companyList_url(type || ""), {params: data})
		},
		//职位搜索
		getSearchJob: function (data, type) {
			return $http.get(path.searchJob_url(type || 0), {params: data})
		},
		//职位详情
		getJobDescription: function (id) {
			return $http.get(path.jobDescription_url(id))
		},
		//公司详情
		getCompanyDescription: function (id) {
			return $http.get(path.companyDescription_url(id))
		}
	}
});