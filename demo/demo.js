var app = angular.module('app_test',['ace.angular']);

app.controller('Controller', ['$scope', function($scope){
	$scope.change = function(){
		console.log($scope.test)
	}
}])
