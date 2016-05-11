angular.module('app')
    .directive('ticket', function (chatService) {
        return {
            restrict: 'E',
            templateUrl: 'ticket/ticket.html',
            link: function(scope){
                scope.dubls = [
                    { title: 'Не пришли деньги...', date: new Date(), theme: 'Платежка' },
                    { title: 'Не проходит оплата...', date: new Date(), theme: 'Платежка' },
                    { title: 'У меня проблема...', date: new Date(), theme: 'Платежка' },
                ];

                var date = new Date();

                scope.getDate = function(){
                    return date;
                };

                scope.model = {text: ""};

                scope.addMessage = function(){
                    var msgs = chatService.getCurrent().messages

                    msgs.push({
                        type: 'FROM_SUPPORT',
                        author: 'Петров Василий',
                        text: scope.model.text,
                        date: new Date()
                    });

                    scope.model.text = "";
                };

                scope.getCurrent = chatService.getCurrent;

                var messages = chatService.getMessages();

                scope.getCssClass = function(m){
                    var cssClass = '';
                    if(m.type === 'FROM_SUPPORT'){
                        cssClass += 'message-right'
                    }

                    if(m.type === 'FROM_USER'){
                        cssClass += 'message-left'
                    }

                    if(m.type === 'NOTE'){
                        cssClass += 'message-note'
                    }

                    return cssClass;
                };

                scope.getMessages = function(){
                    return messages;
                }
            }
        }
    });