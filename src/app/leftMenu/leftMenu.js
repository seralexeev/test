angular.module('app')
    .directive('leftMenu', function (chatService) {
        return {
            restrict: 'E',
            templateUrl: 'leftMenu/leftMenu.html',
            link: function(scope){
                scope.items = chatService.getMessages();
                scope.setCurrent = chatService.setCurrent;
            }
        }
    });