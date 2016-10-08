var appName = 'mean';
var app = angular.module(appName, ["ngRoute"]);

app.controller("lobbyCtrl", function(){

});

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
]);

angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
});
