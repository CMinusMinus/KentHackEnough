var appName = 'word';
var app = angular.module(appName, ["ngRoute", "ngCookies"]);

app.controller("lobbyCtrl", function($scope, $cookies){
    $scope.name = $cookies.get("name");
});

app.factory('postWord', function($http){
    return $http({
        method: "POST",
        url: "/game/create",
        header: {"Content-Type" : "application/json"},
        data: {
            "name": $scope.name,
            "accessCode": $scope.accessCode
        }
    });
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

app.controller("joinGameCtrl", function($scope, $http, $cookies){
    $scope.accessCode;
    $scope.name;
    $scope.isJoinGame;
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
        $scope.isJoinGame = true;
        $cookies.put("name", $scope.name);
    };
});
/* TODO
app.directive('aDisabled', function() {
    return {
        compile: function(tElement, tAttrs, transclude) {
            //Disable ngClick
            tAttrs["ngClick"] = "!("+tAttrs["aDisabled"]+") && ("+tAttrs["ngClick"]+")";

            //return a link function
            return function (scope, iElement, iAttrs) {

                //Toggle "disabled" to class when aDisabled becomes true
                scope.$watch(iAttrs["aDisabled"], function(newValue) {
                    if (newValue !== undefined) {
                        iElement.toggleClass("disabled", newValue);
                    }
                });

                //Disable href on click
                iElement.on("click", function(e) {
                    if (scope.$eval(iAttrs["aDisabled"])) {
                        e.preventDefault();
                    }
                });
            };
        }
    };
}); */

app.controller("gameCtrl", function($scope, $http, $cookies){
    $scope.players;
    $scope.word;

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
});



/*app.config(['$routeProvider',
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
]);*/

/*angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
});*/
