angular.module('app')
    .directive('mainHeader', function($rootScope){
        return {
            restrict: 'E',
            templateUrl: 'mainHeader/mainHeader.html',
            link: function(scope){
                scope.openUsers = function(){
                    $rootScope.userOpen = !$rootScope.userOpen;
                }
            }
        }
    })