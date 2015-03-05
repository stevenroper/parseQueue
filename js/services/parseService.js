var app = angular.module('parseQ');

app.service('parseService', function($http, $q) {

	this.postData = function(question) {
		return $http({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/parseQ',
			data: {question: question}
		});
	};

});