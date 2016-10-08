var appName = 'word';
var app = angular.module(appName, ["ngRoute"]);

app.controller("lobbyCtrl", function(){

});

app.directive("")
/*app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'home.html'
        }).
        when('/join', {
            templateUrl: 'join.html'
        }).
        when('/new', {
            templateUrl: 'newgame.html'
        }).
        when('/lobby', {
            templateUrl: 'lobby.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);*/

angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
});
