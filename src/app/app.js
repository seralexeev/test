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
            }
        }
    });