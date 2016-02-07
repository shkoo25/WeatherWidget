var app = angular.module("weatherApp", []) 

	

	app.controller("weatherController", function($scope,$http){
		$http.get("http://query.yahooapis.com/v1/public/yql?q=select%20item%20from%20weather.forecast%20where%20location%3D%2222102%22&format=json")
		.success(function(data){
			$scope.forecasts = data
			console.log($scope.forecasts)
		})

	})


