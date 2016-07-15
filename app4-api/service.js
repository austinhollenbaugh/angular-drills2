angular
	.module('apiApp')
	.service('service', function($http) {
		
		this.getData = function() {
			return $http({
				method: 'GET',
				url: "http://www.foaas.com/operations"
			}).then(function(response) {
				return response.data;
			}); 
		};

	});