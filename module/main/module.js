/**
 * Created by Sorzen on 2016/8/1.
 */
//创建主模块
(function (window,angular){
    var app = angular.module('movieApp',[
        'ngRoute',
        'movieApp.detail',
        'movieApp.movieList'
    ]);
    app.controller('movieCtrl', [
        '$scope',
        '$route',
        function($scope,$route){
       $scope.searchText = '';
        $scope.search = function(){
            console.log($scope.searchText);
            $route.updateParams({type:'search',q:$scope.searchText});
        }
    }]);
})(window,angular);