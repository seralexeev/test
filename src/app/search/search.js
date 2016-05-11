angular.module('app')
    .directive('search', function(chatService){
        return {
            restrict: 'A',
            link: function(scope, elem){
                elem = elem[0];

                scope.isVisible = false;

                scope.model = { str: '' }
                scope.getResults = function(){
                    if(scope.model.str){
                        return chatService.getMessages();
                    }
                };

                scope.close = function(event){
                    console.log(event)

                    scope.isVisible = false;
                };

                scope.open = function(){
                    scope.isVisible = true;
                };

                scope.setCurrentAndClose = function(item){
                    chatService.setCurrent(item);
                    scope.model.str = '';
                    scope.close();
                }
            }
        }
    });