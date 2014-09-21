app.factory('todosService', ['$http', function ($http) {
    var serviceFactory = {};
    var endpoint = 'http://jsonplaceholder.typicode.com/todos/';

    var _todos = function () {
        return $http.get(endpoint, { cache: true }).success(function (result) {
            return result;
        });
    };
    serviceFactory.todos = _todos;
    return serviceFactory;
}]);