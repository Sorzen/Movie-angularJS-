/**
 * Created by Sorzen on 2016/8/1.
 */
//创建正在热映路由
(function (angular) {
    var app = angular.module('movieApp.movieList');
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:type/:page?', {//加：指这个参数可变,?表示这个参数可有可无
            templateUrl: 'module/movieList/template.html',
            controller: 'movieApp.movieListCtrl'
        });

    }]);
})(angular);