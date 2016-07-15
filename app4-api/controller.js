angular
	.module('apiApp')
	.controller('controller', function($scope, service) {

		$scope.data = service.getData().then(function(response) {
			$scope.comments = response;
			console.log(response);
			return response;

		});

	});