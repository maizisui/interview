/**
 * Created by Administrator on 2017/4/15.
 */
angular.module('carrot')
  .factory('commonUtil', function ($rootScope, $state, searchOptions, $location) {
	return {
		// pageDefault: {page: 1, size: 10, next: true},

		//跳转界面位置
		scrollTo: function (x, y) {
			window.scrollTo(x, y);
		},

		//最新/推荐跳转
		judegeJobList: function (judegeData) {
			if (judegeData.params.n === "false") {
				$rootScope.recommendAndNewJob = "推荐职位";
				judegeData.params.n = null;
				judegeData.positionType = 1;
			}
			else if (judegeData.params.n === "true") {
				$rootScope.recommendAndNewJob = "最新职位";
				judegeData.params.n = null;
				judegeData.positionType = 0;
			}
			return judegeData;
		},

		//最新职位切分
		newJobRule: function (oldArr) {
			var lenArr = oldArr.length;
			var lenNum = Math.ceil(20/lenArr);
			var newArr = []; //存放转化后的数组；
			var nestedArr = [];
			if (lenArr < 20) {
				for (var i = 0; i < lenNum; i++) {
					newArr = newArr.concat(oldArr);
				}
				newArr.length = 20; //截取前20个值;
			} else {
				oldArr.length = 20;
				newArr = oldArr;
			}
			for (var i = 0; i < 5; i++) {
				nestedArr[i] = newArr.splice(0, 4);
			}
			return nestedArr;
		},

		judegesessionStorage: function (judge, data) {
			var dataCopy = angular.copy(data);
			if (judge === undefined) {
				var option = dataCopy;
			} else {
				option = JSON.parse(judge);
			}
			return option;
		},

		// 判断找不到页面或找不到内容
		judgeNotFind: function (data) {
			if (data.code < 0 || data.data.length === 0) {
				return true;
			}
		},

		// 判断选中的数量
		selectedNum: function (data) {
			var i = 0;
			data.forEach(function (item) {
				if (item.choose === true) {
					i++;
				}
			});
			return i;
		},

		// 判断需要展开详情的类目
		judgeShowCategoryDetail: function (data) {
			for (var x = 0; x < 12; x++) {
				if (data[x].choose === true) {
					return x;
				}
			}
		}
	}


})

	.factory("datePickerUtils", ["$filter", function ($filter) {
		return {
			isDate: function (obj) {
				return Object.prototype.toString.call(obj) === "[object Date]";
			},

			buildDates: function (date, options) {
				var dates = [],
					lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0, 3);

				options = options || {};
				date = new Date(date);

				while (date.getDay() !== options.weekStartsOn) {
					date.setDate(date.getDate() - 1);
				}

				for (var i = 0; i < 42; i++) { // 42 == 6 rows of dates
					if (options.noExtraRows && date.getDay() === options.weekStartsOn && date > lastDate) break;

					dates.push(new Date(date));
					date.setDate(date.getDate() + 1);
				}

				return dates;
			},

			buildDayNames: function (weekStartsOn) {
				var dayNames = ['日', '一', '二', '三', '四', '五', '六'];

				if (weekStartsOn) {
					dayNames = dayNames.slice(0);
					for (var i = 0; i < weekStartsOn; i++) {
						dayNames.push(dayNames.shift());
					}
				}
				return dayNames;
			},

			monthCourse: function (start, end) {
				var months = [];
				start = new Date(start);
				end = new Date(end);
				var differ = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
				for (var i = 0; i < differ; i++) {
					var newMonth = new Date(start.getFullYear(), start.getMonth() + i, 1);
					months.push($filter('date')(newMonth, 'yyyy-MM'));
				}
				return months;
			},

			getMonthDate: function (year, month) {
				return new Date(year, month + 1, 0).getDate();
			},

			getDateByTime: function (date, time) {
				var year = new Date(date).getFullYear();
				var month = new Date(date).getMonth();
				var day = new Date(date).getDate();
				var hours = new Date(time).getHours();
				var minutes = new Date(time).getMinutes();

				if (!date || !time) {
					return "";
				} else {
					return new Date(year, month, day, hours, minutes).getTime();
				}

			}
		};
	}])
	.factory('searchUtil', function () {
		return {
			//搜索多选
			checkboxMulti: function (ind, arr) {
				if (ind === 0) {
					arr.forEach(function (item) {
						item.choose = false;
					});
					arr[0].choose = true;
				} else {
					arr[ind].choose = !arr[ind].choose;
					arr[0].choose = false;
					if (arr.every(function (item) {
							return item.choose === false
						})) {
						arr[0].choose = !arr[0].choose;
					}
				}
			},
			//搜索单选
			radioType: function (ind, arr) {
				arr[ind].choose = !arr[ind].choose;
				arr.forEach(function (item, index) {
					if (index !== ind) {
						item.choose = false
					}
					else if (arr.every(function (item) {
							return item.choose === false
						})) {
						arr[0].choose = true;
					}
				})
			},
			//数据转数组
			dataConvert: function (data) {
				//转换为字符串
				var asdas = {};
				var dataname;
				for (dataname in data) {
					if (data.hasOwnProperty(dataname)) {
						asdas[dataname] = data[dataname].filter(function (item, index) {
							return item.choose === true
						});
						asdas[dataname] = asdas[dataname].map(function (item) {
							return item.type
						});
						asdas[dataname] = asdas[dataname].toString()
					}
				}
				return asdas;
			},
			//清空搜索数据
			dataDelete: function (option) {
				angular.forEach(option, function (data) {
					angular.forEach(data, function (data1) {
						if (data1.choose) {
							data1.choose = false
						}
						if (data1.name === '不限') {
							data1.choose = true
						}
					})
				})

			},
			//hiringJobs页 搜索数据转换
			jobclassifyactivesChange: function (obj) {
				// 过滤出选中的搜tag
				var data = obj.filter(function (item) {
					return (item.choose === true);
				});
				// 搜索tag的格式转换
				data = data.map(function (item) {
					return item.type
				});
				return data.toString();
			}


		}
	});

