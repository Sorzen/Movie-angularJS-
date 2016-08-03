/**
 * Created by Sorzen on 2016/8/1.
 */
//创建路由
(function(angular){
    var app = angular.module('movieApp.detail');
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/detail/:id',{
            templateUrl:'module/detail/template.html',//寻找模板
            controller:'movieApp.detailCtrl'
        });
    }]);
})(angular);