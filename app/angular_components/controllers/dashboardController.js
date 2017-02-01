(function() {
    'use strict';
    angular.module('myApp.controller.dashboard',['myApp.service.dashboard'])
        // .service('imageService',['$q','$http',function($q,$http){
        //     this.loadImages = function(){
        //         return $http.jsonp("https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK");
        //     };
        // }])
        .service('imageService', [

            function(){
                this.images = [
                    {
                        width: 684,
                        height: 1024,
                        url: 'images/1.jpg',
                        showContent:false,
                        title: 'A beautiful sunshine',
                        likes: 30,
                        watch: 204
                    },
                    {
                        width: 481,
                        height: 720,
                        showContent:false,
                        url: 'images/2.jpg',
                        title: 'Lets play hide and seek',
                        likes: 51,
                        watch: 1015
                    },
                    {
                        width: 396,
                        height: 499,
                        showContent:false,
                        url: 'images/3.jpg',
                        title: 'Climbing mountains',
                        likes: 35,
                        watch: 600
                    },
                    {
                        width: 500,
                        height: 667,
                        showContent:false,
                        url: 'images/4.jpg',
                        title: 'Its coffee time',
                        likes: 51,
                        watch: 1015
                    },
                    {
                        width: 338,
                        height: 500,
                        showContent:false,
                        url: 'images/5.jpg',
                        title: 'Do not disturb me',
                        likes: 41,
                        watch: 620
                    },
                    {
                        width: 500,
                        height: 750,
                        showContent:false,
                        url: 'images/6.jpg',
                        title: 'Its my Car',
                        likes: 12,
                        watch: 120
                    },
                    {
                        width: 484,
                        height: 750,
                        showContent:false,
                        url: 'images/7.jpg',
                        title: 'Candelight Coffee',
                        likes: 36,
                        watch: 416
                    },
                    {
                        width: 500,
                        height: 750,
                        showContent:false,
                        url: 'images/8.jpg',
                        title: 'Ignite the candle',
                        likes: 25,
                        watch: 319
                    },
                    {
                        width: 500,
                        height: 500,
                        showContent:false,
                        url: 'images/9.jpg',
                        title: 'My body my style',
                        likes: 52,
                        watch: 966
                    },
                    {
                        width: 500,
                        height: 749,
                        showContent:false,
                        url: 'images/10.jpg',
                        title: 'Flying on the cloud',
                        likes: 31,
                        watch: 387
                    },
                    {
                        width: 448,
                        height: 750,
                        showContent:false,
                        url: 'images/11.jpg',
                        title: 'Blue skies',
                        likes: 12,
                        watch: 112
                    },
                    {
                        width: 500,
                        height: 667,
                        showContent:false,
                        url: 'images/12.jpg',
                        title: 'A silent forest',
                        likes: 3,
                        watch: 50
                    },
                    {
                        width: 500,
                        height: 666,
                        showContent:false,
                        url: 'images/13.jpg',
                        title: 'Into the Woods',
                        likes: 12,
                        watch: 200
                    },
                    {
                        width: 500,
                        height: 500,
                        showContent:false,
                        url: 'images/14.jpg',
                        title: 'A symbol from somewhere',
                        likes: 24,
                        watch: 412
                    },
                    {
                        width: 540,
                        height: 810,
                        showContent:false,
                        url: 'images/15.jpg',
                        title: 'A perfect bedroom for a child',
                        likes: 98,
                        watch: 800
                    },
                    {
                        width: 498,
                        height: 750,
                        showContent:false,
                        url: 'images/16.jpg',
                        title: 'Enjoying the campfire',
                        likes: 42,
                        watch: 457
                    },
                    {
                        width: 540,
                        height: 810,
                        showContent:false,
                        url: 'images/17.jpg',
                        title: 'My dream car',
                        likes: 23,
                        watch: 333
                    },
                    {
                        width: 532,
                        height: 720,
                        showContent:false,
                        url: 'images/18.png',
                        title: 'I am Rockstar',
                        likes: 36,
                        watch: 416
                    },
                    {
                        width: 505,
                        height: 810,
                        showContent:false,
                        url: 'images/19.jpg',
                        title: 'Old Days',
                        likes: 112,
                        watch: 2000
                    },
                    {
                        width: 540,
                        height: 405,
                        showContent:false,
                        url: 'images/20.jpg',
                        title: 'An another forest with big trees',
                        likes: 6,
                        watch: 59
                    },
                    {
                        width: 540,
                        height: 405,
                        showContent:false,
                        url: 'images/21.jpg',
                        title: 'Tracking to top of mountain',
                        likes: 18,
                        watch: 235
                    }
                ];

                //add time on image objects
                this.images.forEach(function (obj) {
                    obj.time = Date.now() - Math.ceil(Math.random() * 1000 * 3600 * 24 * 60);
                    obj.date = new Date(obj.time).toDateString();
                });



            }])
        .controller('DashboardCtrl', ['$scope', '$moment', '$rootScope', '$location', '$window', 'LocalStorage','$modal','$alert', 'Dashboard', 'imageService', 'angularGridInstance',function ( $scope, $moment, $rootScope, $location, $window, LocalStorage, $modal,$alert, Dashboard, imageService, angularGridInstance) {

            var images = imageService.images;
            $scope.images = images.concat([]);
            $scope.searchTxt = "";


            $scope.images = images.concat([]);
            //apply search and sort method
            $scope.$watch('searchTxt', function (val) {
                console.log('val'+val);
                val = val.toLowerCase();
                $scope.images = images.filter(function (obj) {
                    return obj.title.toLowerCase().indexOf(val) != -1;
                });
            });

            $scope.sortByLikes = function () {
                $scope.images.sort(function (a, b) {
                    return b.likes - a.likes;
                });
            }

            $scope.sortByWatch = function () {
                $scope.images.sort(function (a, b) {
                    return b.watch - a.watch;
                });
            }

            $scope.sortByTime = function () {
                $scope.images.sort(function (a, b) {
                    return b.time - a.time;
                });
            }
            console.log('RESULT'+JSON.stringify($scope.images));


            $scope.showContent =  function (pic) {
                if(pic.showContent==false){
                    pic.showContent=true;
                }
                else if(pic.showContent==true){
                    pic.showContent=false;
                }
            }

            // / from flickr


            // imageService.loadImages().then(function(data){
            //     data.data.items.forEach(function(obj){
            //         var desc = obj.description,
            //             width = desc.match(/width="(.*?)"/)[1],
            //             height = desc.match(/height="(.*?)"/)[1];
            //
            //         obj.actualHeight  = height;
            //         obj.actualWidth = width;
            //     });
            //     $scope.images = data.data.items;
            //
            //     $scope.searchTxt = "";
            //     var images = data.data.items;
            //     $scope.images = images.concat([]);
            //     //apply search and sort method
            //     $scope.$watch('searchTxt', function (val) {
            //         console.log('val'+val);
            //         val = val.toLowerCase();
            //         $scope.images = images.filter(function (obj) {
            //             return obj.title.toLowerCase().indexOf(val) != -1;
            //         });
            //     });
            //
            //     $scope.sortByLikes = function () {
            //         $scope.images.sort(function (a, b) {
            //             return b.likes - a.likes;
            //         });
            //     }
            //
            //     $scope.sortByWatch = function () {
            //         $scope.images.sort(function (a, b) {
            //             return b.watch - a.watch;
            //         });
            //     }
            //
            //     $scope.sortByTime = function () {
            //         $scope.images.sort(function (a, b) {
            //             return b.time - a.time;
            //         });
            //     }
            //     // console.log('RESULT'+JSON.stringify($scope.images));
            // });
            
            $scope.refresh = function(){
                angularGridInstance.gallery.refresh();
            }

            $scope.postContent = function(){
                Dashboard.all($scope.var1,$scope.object1,
                    function(output){
                        $scope.output = output.data.data;
                    }
                );
            }



                // $scope.angularGridoptions = {
                //     cssGrid : true,
                //     refreshOnImgLoad: false,
                //     gridWidth: 350,
                //     gutterSize: 20,
                //     direction: 'rtol'
                // }

                /*
                 $scope.gridWidth = 300;
                 setInterval(function () {
                 console.log($scope.instance);
                 $scope.angularGridoptions.gridWidth = [250, 400][(Math.floor(Math.random() * 2))];
                 $scope.gridWidth = [250, 400][(Math.floor(Math.random() * 2))];
                 $scope.$apply();
                 }, 3000);*/


            var init = function(){

            }
            init();

    }]);
}).call(this);