var app = angular.module('parseQ');

app.service('parseService', function($http, $q) {

	this.postData = function(question) {
		return $http({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/parseQ',
			data: {
				questionText: question,
				status: 'red'
			}
		});
	};

	this.getData = function() {
		var deferred = $q.defer();

		$http({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/parseQ'
		}).then(function onSuccess(data) {
			deferred.resolve(data.data.results);
		}, function onFailure(reason) {
			deferred.reject(reason);
		});

		return deferred.promise;
	};

	this.updateData = function(questionId, newStatus) {
		return $http({
			method: 'PUT',
			url: 'https://api.parse.com/1/classes/parseQ/' + questionId,
			data: {status: newStatus}
		});
	};

	this.deleteData = function(questionId) {
		return $http({
			method: 'DELETE',
			url: 'https://api.parse.com/1/classes/parseQ/' + questionId
		});
	};

});