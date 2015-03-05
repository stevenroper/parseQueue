var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {
            config.headers = {'X-Parse-Application-Id': 'kXDNO2NtTfmxF1FpbFFBcSjggHbW9Nv027VX6KWM', 'X-Parse-REST-API-Key': '9l1Kzmchult9aGvfEn2KkqnM4AevbqiqW8aaN9oQ'};
            return config;
        }
    };
});