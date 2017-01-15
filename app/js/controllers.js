/**
 * Created by Brad on 1/14/17.
 */
'use strict';

angular.module('myApp.view1', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'templates/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function() {

    }]);

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'templates/view2.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', [function() {

    }]);