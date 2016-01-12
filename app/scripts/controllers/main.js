'use strict';

/**
 * @ngdoc function
 * @name decretometroApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the decretometroApp
 */
angular.module('decretometroApp')
  .controller('MainCtrl', function ($scope, Decree) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.decrees = [];
    $scope.decreSheet = {};
    $scope.loadAll = function() {
            Decree.query(function(result) {
               $scope.decrees = result.feed.entry;
               $scope.decreeSheet = result.feed;
               var date = new Date(Date.parse(result.feed['updated']['$t']));
               $scope.lastUpdated = date;
               $scope.totalDecrees = result.feed['openSearch$totalResults']['$t'];

            });
        };
    $scope.loadAll();
    $scope.showTable = false;
    $scope.toggleDecreeTable = function() {
      $scope.showTable = !$scope.showTable;
    }


  });
