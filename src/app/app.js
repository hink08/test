
angular.module('test', [
  'ngRoute',
  'test.todo'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/test/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});
