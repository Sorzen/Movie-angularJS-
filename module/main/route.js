/**
 * Created by Sorzen on 2016/8/1.
 */
//创建路由
(function(window,angular){
    var app = angular.module('movieApp');
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.otherwise({
            redirectTo:'/in_theaters'//不用去写template和controller让他跳转到之前有的规则中
        });
    }]);
})(window,angular);