var app = angular.module('parseQ');

app.controller('MainController', function($scope, parseService) {

	$scope.postData = function() {
		parseService.postData($scope.questionText).then(function(data) {
			$scope.questionText = '';
		});
	};

});