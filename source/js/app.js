var app = angular.module("test", ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/main', {
            templateUrl: 'main.html',
            controller: 'MainCtrl'
        }).
        when('/contact', {
            templateUrl: 'contact.html',
            controller: 'ContactCtrl'
        }).
        when('/services', {
            templateUrl: 'services.html',
            controller: 'ServiceCtrl'
        }).
        when('/pricing', {
            templateUrl: 'pricing.html',
            controller: 'PricingCtrl'
        }).
        otherwise({redirectTo: '/main'})
}])
.controller('MainCtrl', ['$scope', function ($scope){
    $scope.person = 'Gian Vera';
    $scope.job = 'Frontend Developer';
    console.log($scope);
}])
.controller('ServiceCtrl', ['$scope', function ($scope){
    console.log($scope);
}])
.controller('PricingCtrl', ['$scope', function ($scope){
    console.log($scope);
}])
.controller('ContactCtrl', ['$scope', function ($scope){
    console.log($scope);
}]);