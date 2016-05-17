angular.module('app')
    .directive('userList', function (chatService) {
        return {
            restrict: 'E',
            templateUrl: 'userList/userList.html',
            link: function (scope) {
                scope.items = [
                    {name: "Владимир Петров", count: 4, last: new Date(), img: 'http://petzilla.ru/sites/default/files/styles/large/public/field/image/poroda-britanec.jpg'},
                    {name: "Евгений Агафонов", count: 2, last: new Date(), img: 'http://yaroslav-samoylov.com/wp-content/uploads/2014/09/kak-privlech-silnogo-muzhchinu-1024x576.jpg.pagespeed.ce.xsciVpmZ4T.jpg'},
                    {name: "Ольга Николаева", count: 12, last: new Date(), img: 'http://st.kp.yandex.net/images/actor_iphone/iphone360_20866.jpg'},
                    {name: "Анна Васильева", count: 16, last: new Date(), img: 'http://www.uznayvse.ru/images/celebs/portman_medium.jpg'},
                    {name: "Александр Анисимов", count: 39, last: new Date(), img: 'http://v1.popcornnews.ru/upload/k6BGfo.jpg'},
                    {name: "Елена Андреева", count: 21, last: new Date(), img: 'https://ru.wiki2.org/wikipedia/ru/thumb/b/b7/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80_%D0%9F%D0%BE%D1%82%D1%82%D1%81.jpg/im344-%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80_%D0%9F%D0%BE%D1%82%D1%82%D1%81.jpg'},
                ]
            }
        }
    });