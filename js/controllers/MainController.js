var app = angular.module('parseQ');

app.controller('MainController', function($scope, parseService) {

	$scope.postData = function() {
		parseService.postData($scope.questionText).then(function(data) {
			$scope.questionText = '';
			$scope.getParseData();
		});
	};

	$scope.getParseData = function() {
		parseService.getData().then(function(data) {
			$scope.questionsData = data;
			//console.log($scope.questionsData);
		});
	};

	$scope.getParseData();

	$scope.changeStatus = function(id) {
		parseService.updateData(id, 'yellow').then(function(data) {
			$scope.getParseData();
		});
	};

	$scope.deleteQuestion = function(id) {
		parseService.deleteData(id).then(function(data) {
			$scope.getParseData();
		});
	};

});