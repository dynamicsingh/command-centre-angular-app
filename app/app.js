(function () {
    'use strict';

    var app = angular.module('myApp',
        [
            'myApp.service.localstorage',
            'MyApp.service.browser',
            'ngRoute',
            'ngSanitize',
            'ngAnimate',
            'angularGrid',
            'mgcrea.ngStrap',
            'bw.paging',
            'angular-momentjs',
            'angularMoment',
            'myApp.controller.dashboard'
        ]);

    //App Route Configuration
    app.config( ['$routeProvider','$locationProvider','$alertProvider', function($routeProvider, $locationProvider,$alertProvider) {
            angular.extend($alertProvider.defaults, {
                animation: 'am-fade-and-slide-top',
                placement: 'top'
            });
            //$locationProvider.html5Mode(true);
            $routeProvider
                .when('/', {
                    templateUrl: 'angular_components/views/home.html',
                    title: 'Home',
                })
                .when('/dashboard', {
                    templateUrl: 'angular_components/views/home.html',
                    title: 'Home',
                })
                .when('/404', {
                    templateUrl: 'angular_components/views/404.html',
                    title: 'Home',
                })
                .otherwise({
                    redirectTo: '/404'
                });

        }]);
    app.config(function($datepickerProvider) {
            angular.extend($datepickerProvider.defaults, {
                dateFormat: 'dd/MM/yyyy',
                startWeek: 1
            });
        });

    //controler for navigation
    app.controller('NavigationCtrl', ['$scope', '$rootScope', '$location', 'LocalStorage','Browser', '$modal', function ( $scope, $rootScope, $location, LocalStorage, Browser, $modal) {

                ////Underscore js example
                //$scope.size = underscore.size({one: 1, two: 2, three: 3});
                //console.log('SIZE :' + $scope.size);
                //var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
                //var result = underscore.sortBy(stooges, 'name');
                //console.log('SORTED : ' + JSON.stringify(result));
                //var union = underscore.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
                //console.log('UNION' + JSON.stringify(union));


                var init = function(){

                }
                init();

            }
        ]);

})();