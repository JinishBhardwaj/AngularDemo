app.controller('todosController', ['$scope', 'todosService', 'toaster', function ($scope, todosService, toaster) {
    $scope.todos = [];

    todosService.todos().success(function (result) {
        $scope.todos = result;
        toaster.pop('info', "Service Result", result.length + " todos returned by the remote service");
    });
}]);