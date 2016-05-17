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
                    $rootScope.sotrudniki = true;
                    $rootScope.history = !$rootScope.sotrudniki;
                }

                $rootScope.showHistory = function(){
                    $rootScope.history = true;
                    $rootScope.sotrudniki = !$rootScope.history;
                }

                $rootScope.showHistory()
            }
        }
    });