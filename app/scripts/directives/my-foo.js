'use strict';

angular.module('MyTest')
    .directive('myFoo', ['$rootScope',
        function ($rootScope) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/views/my-foo.html'
            };
        }]);
