'use strict';

angular.module('decretometroApp')
    .factory('Decree', function ($resource) {
        return $resource('/decretos.json', {}, {
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
