var appName = 'word';
var app = angular.module(appName, ["ngRoute", "ngCookies"]);

app.controller("lobbyCtrl", function($scope, $cookies){
    $scope.players;
    $scope.name = $cookies.get("name");
});

app.controller("newGameCtrl", function($scope, $http, $cookies){
    $scope.name;
    $scope.accessCode = Math.floor(Math.random() * 1000000);
    $scope.sendName = function(){
        $http({
            method: "POST",
            url: "/game/create",
            header: {"Content-Type" : "application/json"},
            data: {
                "name": $scope.name,
                "accessCode": $scope.accessCode
            }
        });
        $cookies.put("name",$scope.name);

    }
});

app.controller("joinGameCtrl",["$scope","$http", "$cookies", function($scope, $http, $cookies){
    $scope.accessCode;
    $scope.name;
    $scope.joinGame = function() {
        $http({
            method: "POST",
            url: "/game/join",
            header: { "Content-Type": "application/json" },
            data: {
                "accessCode": $scope.accessCode,
                "name": $scope.name
            }
        });
        $cookies.put("name", $scope.name);
    };
}]);

app.controller("gameCtrl", ["$scope","$http", "$cookies", function($scope, $http, $cookies){
    $scope.players;
    $scope.word;
    $scope.accessCode = 985547;
    $scope.submitWord = function(){
        $http({
            method: "POST",
            url: "/game/words",
            header: {"Content-Type": "application/json"},
            data: {
                "word": $scope.word.toLowerCase(),
                "accessCode": $scope.accessCode,
                "player": $cookies.get("name")
            }
        });
    }
}]);



app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '/'
        }).
        when('/join', {
            templateUrl: '/join'
        }).
        when('/new', {
            templateUrl: '/new'
        }).
        when('/lobby', {
            templateUrl: '/lobby'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
});
