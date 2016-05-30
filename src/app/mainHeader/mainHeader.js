angular.module('app')
    .directive('mainHeader', function ($rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'mainHeader/mainHeader.html',
            link: function (scope) {
                scope.openUsers = function () {
                    $rootScope.userOpen = !$rootScope.userOpen;
                }

                scope.themes = [
                    {theme: 'theme--default'},
                    {theme: 'theme--theme1'},
                    {theme: 'theme--theme2'},
                    {theme: 'theme--theme3'}
                ];

                scope.setTheme = function (theme) {
                    $rootScope.theme = theme;
                };
            }
        }
    })