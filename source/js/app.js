var app = angular.module("test", ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/main', {
            templateUrl: 'main.html',
            controller: 'MainCtrl'
        }).
        otherwise({redirectTo: '/main'})
}])
.controller('MainCtrl', ['$scope', function ($scope){
    $scope.person = 'Gian Vera';
    $scope.job = 'Frontend Developer';
    console.log($scope);
}]);