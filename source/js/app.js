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
.controller('ServiceCtrl', ['$scope', '$http', function ($scope, $http){
    $http.get('./assets/services.json').then(function (response) {
    	$scope.services = response.data;
    })
}])
.controller('PricingCtrl', ['$scope', '$http', function ($scope, $http){
    $http.get('./assets/plans.json').then(function (response) {
    	$scope.plans = response.data;
    })
}])
.controller('ContactCtrl', ['$scope', function ($scope){
    console.log($scope);
}]);