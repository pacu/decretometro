'use strict';

angular.module('decretometroApp')
    .factory('Decree', function ($resource) {
        return $resource('https://spreadsheets.google.com/feeds/list/1bPMcY2EaFmUwJpLc9fqT9L6HSITb4EZ-byRaUOZuoes/od6/public/values?alt=json', {}, {
            'query': { method: 'GET', isArray: false},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
