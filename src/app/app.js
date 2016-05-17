angular.module('app', ['ngPhotoswipe'])
    .directive('app', function ($rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app.html',
            link: function(scope){
                $rootScope.toggleOnline = function(){
                    $rootScope.offline = !$rootScope.offline;
                    $rootScope.userOpen = $rootScope.offline
                }

                $rootScope.showSotrudniki = function(){
                    $rootScope.settings = false;
                    $rootScope.sotrudniki = true;
                    $rootScope.history = false;
                }

                $rootScope.showHistory = function(){
                    $rootScope.settings = false;
                    $rootScope.sotrudniki = false;
                    $rootScope.history = true;
                }

                $rootScope.showSettings = function(){
                    $rootScope.settings = true;
                    $rootScope.sotrudniki = false;
                    $rootScope.history = false;

                }

                $rootScope.showHistory()
            }
        }
    });