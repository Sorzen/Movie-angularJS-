/**
 * Created by Sorzen on 2016/8/1.
 */
//创建路由
(function (angular) {
    var app = angular.module('movieApp.in_theaters', ['movieApp.service.httpService']);
    app.controller('movieApp.in_theatersCtrl', [
        '$scope',
        '$route',
        '$routeParams',
        'HttpService',
        function ($scope,$route,$routeParams, HttpService) {
        $scope.title = '正在加载';
        $scope.subjects = [];
        $scope.totalCount = 0;
        $scope.totalPage = 0;//页总数
        $scope.pageSize = 5;//页容量
        $scope.page = parseInt($routeParams.page || '1');//页码kk,容错性
        $scope.changePage = function (page) {
            console.log(1);
            if(page>0&&page<=$scope.totalPage){
                //如果符合条件就更新参数
                $route.updateParams({page:page});
            }
        };
        // $scope.page = $routeParams.page;

        HttpService.jsonp(
            'https://api.douban.com/v2/movie/in_theaters',
            {//请求头
                start:($scope.page-1)*$scope.pageSize,
                count:$scope.pageSize
            },
            function (data) {
                console.log(data);//打印获取的数据
                $scope.title = data.title;//获取影片标题
                $scope.subjects = data.subjects;
                $scope.totalCount = data.total;
                $scope.totalPage = Math.ceil($scope.totalCount/$scope.pageSize);//让页码取到的为整数，防止出现小数
                $scope.$apply();//通过追踪$apply()追踪数据
            }
        );

    }]);
})(angular);