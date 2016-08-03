/**
 * Created by Sorzen on 2016/8/1.
 */
//详细页
(function (angular) {
    var app = angular.module('movieApp.detail',['movieApp.service.httpService']);
    app.controller('movieApp.detailCtrl', [
        '$scope',
        '$routeParams',
        'HttpService',
        function ($scope, $routeParams, HttpService) {
            $scope.title = '';
            $scope.image = '';
            $scope.summary = '';
            $scope.director = '';
            $scope.actors = '';
            HttpService.jsonp(
                'https://api.douban.com/v2/movie/subject/'+$routeParams.id,
                {},
                function (data) {
                    console.log(data.directors);
                    console.log(data.casts);
                    // console.log(data);
                    $scope.director = data.directors;
                    $scope.actors = data.casts;
                    $scope.title = data.original_title;
                    $scope.image = data.images.large;
                    $scope.summary = data.summary;
                    $scope.$apply();
                }
            );
        }]);
})(angular);