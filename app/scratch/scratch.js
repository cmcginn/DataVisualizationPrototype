/**
 * Created by Chris on 9/16/2015.
 */
'use strict';

angular.module('myApp.scratch', ['ngRoute','myApp.dataservice'])

    .config(['$routeProvider', function($routeProvider,dataservice) {
        $routeProvider.when('/scratch', {
            templateUrl: 'scratch/scratch.html',
            controller: 'ScratchCtrl'
        });
    }])

    .controller('ScratchCtrl', [function() {

    }]);