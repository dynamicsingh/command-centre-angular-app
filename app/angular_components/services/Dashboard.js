(function() {
	'use strict';
	angular.module('myApp.service.dashboard',[] ).factory(
		'Dashboard',
		function Dashboard($http) {
			return {
				//Post content
				postContent: function(var1, object1, cb) {

					var url = 'php_components/records.php?action=addRecord';

					var $promise = $http.post(encodeURI(url), JSON.stringify(object1));

					$promise.then(
						function success(response) {
							cb(response);

						},
						function error(response) {
							cb({});
						}
					)
				},


				//Get content
				getContent: function(var1, var2, cb){
					  var url = 'php_components/records.php?action=todays&pageSize='+pageSize+'&pageNum='+pageNum;

						var $promise = $http.get(encodeURI(url));

						$promise.then(
							function success(response) {
								cb(response);
							}, function error(response) {
								console.log("Response Error: "+JSON.stringify(response));
								cb({});
							}
						);
				}




			}
		}
	);
}).call(this);

