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

                var parser = new UAParser();
                var uastring = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/11.10 Chromium/15.0.874.106 Chrome/15.0.874.106 Safari/535.2";
                parser.setUA(uastring);

                var result = parser.getResult();
                console.log(result);

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