var app = angular.module('demo', ['ngRoute', 'toaster', 'angular-loading-bar', 'LocalStorageModule']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/contact', {
        templateUrl: '/app/views/contact.html'
    }).when('/about', {
        templateUrl: '/app/views/about.html'
    }).when('/todolist', {
        templateUrl: '/app/views/todos/list.html',
        controller: 'todosController'
    }).otherwise({
        redirectTo: '/todolist'
    });
}]);