angular
	.module('apiApp')
	.controller('controller', function($scope, service) {

		$scope.data = service.getData().then(function(results) {
			$scope.comments = results;
			console.log($scope.comments);
		})

	})