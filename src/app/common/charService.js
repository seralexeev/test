angular.module('app')
    .factory('chatService', function () {
        var chats = [
            {
                user: 'Иванова Екатерина',
                theme: 'Платежка',
                date: new Date(),
                status: 'RESOLVED',
                info: {
                    id: 17563456345,
                    photo: 'http://si.wsj.net/public/resources/images/WW-AA663A_SANDB_M_20150925152829.jpg',
                    login: 'ivan.ivanov',
                    phone: '8(912)234-23-43',
                    email: 'ivanov.ivan@mail.ru',
                    age: 35,
                    city: 'Москва',
                    created: new Date(),
                    oks: 432,
                    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36'
                },
                messages: [
                    {
                        type: 'FROM_USER',
                        author: 'Иванов Николай',
                        text: 'У меня проблема с оплатой, я не могу закинуть деньги с карты',
                        date: new Date()
                    },
                    {
                        type: 'FROM_SUPPORT',
                        author: 'Петров Василий',
                        text: 'Добрый день уважаемый Иванов Николай, могли бы вы описать свою проблему более детально',
                        date: new Date()
                    },
                    {
                        type: 'NOTE',
                        author: 'Петров Василий',
                        text: 'Видимо какие то проблемы на портале',
                        date: new Date()
                    },
                    {
                        type: 'FROM_SUPPORT',
                        author: 'Петров Василий',
                        text: 'Пришлите пожалуйста подтверждения оплаты',
                        date: new Date()
                    },
                    {
                        type: 'FROM_USER',
                        author: 'Иванов Иван',
                        text: 'Вот квитанции',
                        attachments: [
                            'http://stoik.com.opt-images.1c-bitrix-cdn.ru/images/document_enhancement/adaptive-local-contrast-enhanced.jpg?14405709261183513',
                            'http://www.lds-mormon.com/INS.gif'
                        ],
                        date: new Date()
                    },
                    {
                        type: 'FROM_USER',
                        author: 'Иванов Николай',
                        text: 'Все заработало, спасибо!',
                        date: new Date()
                    }
                ]
            },
            {
                user: 'Скворцов Алексей',
                theme: 'Платежка',
                date: new Date(),
                status: 'NOT_RESOLVED',
                info: {
                    id: 23479853940,
                    photo: 'http://www.netlore.ru/upload/files/68338/p19d7jvaso1sp8ippm26r51cce1.jpg',
                    login: 'garold.ivanov',
                    phone: '8(754)234-23-43',
                    email: 'garold.garold@mail.ru',
                    age: 35,
                    city: 'Москва',
                    created: new Date(),
                    oks: 22,
                    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36'
                },
                messages: [
                    {
                        type: 'FROM_USER',
                        author: 'Иванов Николай',
                        text: 'Я закинул деньги но оки не пришли',
                        date: new Date()
                    },
                    {
                        type: 'FROM_SUPPORT',
                        author: 'Петров Василий',
                        text: 'Добрый день уважаемый Иванов Николай, могли бы вы описать свою проблему более детально',
                        date: new Date()
                    },
                    {
                        type: 'FROM_SUPPORT',
                        author: 'Петров Василий',
                        text: 'Нажимаю кнопку перечислить страница перезагружается и оки не приходят',
                        date: new Date()
                    },
                    {
                        type: 'FROM_SUPPORT',
                        author: 'Петров Василий',
                        text: 'Сейчас проверю ваш случай',
                        date: new Date()
                    },
                    {
                        type: 'AGGREGATOR_MTS',
                        author: 'Петров Василий',
                        text: 'Отправлен запрос аггрегатору МТС',
                        date: new Date()
                    }
                ]
            }
        ];

        var current;
        return {
            getMessages: function () {
                return chats
            },
            setCurrent: function (item) {
                current = item;
            },
            getCurrent: function () {
                return current;
            }
        };
    });