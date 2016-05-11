angular.module('app', ['ngPhotoswipe'])
    .directive('app', function () {
        return {
            restrict: 'E',
            templateUrl: 'app.html'
        }
    });