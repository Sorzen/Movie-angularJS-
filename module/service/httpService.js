/**
 * Created by Sorzen on 2016/8/1.
 */
//创建服务
//像这种代码使用度非常高时将代码封装起来做成一个服务
//发送get请求获取jsonp
(function (angular) {
    var app = angular.module('movieApp.service.httpService', []);
    //创建httpservice服务
    app.service('HttpService', [function () {
        this.jsonp = function (url, params, fn) {
            var parasUrl = '';
            var strUrl = '';
            var randomName = 'JSONP_' + Math.random().toString().substring(2);
            window[randomName] = function (data) {
                fn(data);
                //获取完数据将script标签删除
                document.head.removeChild(scriptE);
            };
//        遍历params参数
            for (var key in params) {
                parasUrl += key + '=' + params[key] + '&';
            }
            debugger;
            //按豆瓣形式要求进行jsonp格式拼接
            strUrl += url + '?' + parasUrl + 'callback=' + randomName;
            //创建script标签进行跨域
            var scriptE = document.createElement('script');
            scriptE.src = strUrl;
            document.head.appendChild(scriptE);
        }

    }]);

})(angular);