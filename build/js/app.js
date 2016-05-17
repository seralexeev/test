angular.module('app', ['ngPhotoswipe'])
    .directive('app', function () {
        return {
            restrict: 'E',
            templateUrl: 'app.html'
        }
    });
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
/*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
 * http://photoswipe.com
 * Copyright (c) 2015 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipeUI_Default=b()}(this,function(){"use strict";var a=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=this,w=!1,x=!0,y=!0,z={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(a,b){return a.title?(b.children[0].innerHTML=a.title,!0):(b.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return a.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return a.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},A=function(a){if(r)return!0;a=a||window.event,q.timeToIdle&&q.mouseUsed&&!k&&K();for(var c,d,e=a.target||a.srcElement,f=e.getAttribute("class")||"",g=0;g<S.length;g++)c=S[g],c.onTap&&f.indexOf("pswp__"+c.name)>-1&&(c.onTap(),d=!0);if(d){a.stopPropagation&&a.stopPropagation(),r=!0;var h=b.features.isOldAndroid?600:30;s=setTimeout(function(){r=!1},h)}},B=function(){return!a.likelyTouchDevice||q.mouseUsed||screen.width>q.fitControlsWidth},C=function(a,c,d){b[(d?"add":"remove")+"Class"](a,"pswp__"+c)},D=function(){var a=1===q.getNumItemsFn();a!==p&&(C(d,"ui--one-slide",a),p=a)},E=function(){C(i,"share-modal--hidden",y)},F=function(){return y=!y,y?(b.removeClass(i,"pswp__share-modal--fade-in"),setTimeout(function(){y&&E()},300)):(E(),setTimeout(function(){y||b.addClass(i,"pswp__share-modal--fade-in")},30)),y||H(),!1},G=function(b){b=b||window.event;var c=b.target||b.srcElement;return a.shout("shareLinkClick",b,c),c.href?c.hasAttribute("download")?!0:(window.open(c.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),y||F(),!1):!1},H=function(){for(var a,b,c,d,e,f="",g=0;g<q.shareButtons.length;g++)a=q.shareButtons[g],c=q.getImageURLForShare(a),d=q.getPageURLForShare(a),e=q.getTextForShare(a),b=a.url.replace("{{url}}",encodeURIComponent(d)).replace("{{image_url}}",encodeURIComponent(c)).replace("{{raw_image_url}}",c).replace("{{text}}",encodeURIComponent(e)),f+='<a href="'+b+'" target="_blank" class="pswp__share--'+a.id+'"'+(a.download?"download":"")+">"+a.label+"</a>",q.parseShareButtonOut&&(f=q.parseShareButtonOut(a,f));i.children[0].innerHTML=f,i.children[0].onclick=G},I=function(a){for(var c=0;c<q.closeElClasses.length;c++)if(b.hasClass(a,"pswp__"+q.closeElClasses[c]))return!0},J=0,K=function(){clearTimeout(u),J=0,k&&v.setIdle(!1)},L=function(a){a=a?a:window.event;var b=a.relatedTarget||a.toElement;b&&"HTML"!==b.nodeName||(clearTimeout(u),u=setTimeout(function(){v.setIdle(!0)},q.timeToIdleOutside))},M=function(){q.fullscreenEl&&!b.features.isOldAndroid&&(c||(c=v.getFullscreenAPI()),c?(b.bind(document,c.eventK,v.updateFullscreen),v.updateFullscreen(),b.addClass(a.template,"pswp--supports-fs")):b.removeClass(a.template,"pswp--supports-fs"))},N=function(){q.preloaderEl&&(O(!0),l("beforeChange",function(){clearTimeout(o),o=setTimeout(function(){a.currItem&&a.currItem.loading?(!a.allowProgressiveImg()||a.currItem.img&&!a.currItem.img.naturalWidth)&&O(!1):O(!0)},q.loadingIndicatorDelay)}),l("imageLoadComplete",function(b,c){a.currItem===c&&O(!0)}))},O=function(a){n!==a&&(C(m,"preloader--active",!a),n=a)},P=function(a){var c=a.vGap;if(B()){var g=q.barsSize;if(q.captionEl&&"auto"===g.bottom)if(f||(f=b.createEl("pswp__caption pswp__caption--fake"),f.appendChild(b.createEl("pswp__caption__center")),d.insertBefore(f,e),b.addClass(d,"pswp__ui--fit")),q.addCaptionHTMLFn(a,f,!0)){var h=f.clientHeight;c.bottom=parseInt(h,10)||44}else c.bottom=g.top;else c.bottom="auto"===g.bottom?0:g.bottom;c.top=g.top}else c.top=c.bottom=0},Q=function(){q.timeToIdle&&l("mouseUsed",function(){b.bind(document,"mousemove",K),b.bind(document,"mouseout",L),t=setInterval(function(){J++,2===J&&v.setIdle(!0)},q.timeToIdle/2)})},R=function(){l("onVerticalDrag",function(a){x&&.95>a?v.hideControls():!x&&a>=.95&&v.showControls()});var a;l("onPinchClose",function(b){x&&.9>b?(v.hideControls(),a=!0):a&&!x&&b>.9&&v.showControls()}),l("zoomGestureEnded",function(){a=!1,a&&!x&&v.showControls()})},S=[{name:"caption",option:"captionEl",onInit:function(a){e=a}},{name:"share-modal",option:"shareEl",onInit:function(a){i=a},onTap:function(){F()}},{name:"button--share",option:"shareEl",onInit:function(a){h=a},onTap:function(){F()}},{name:"button--zoom",option:"zoomEl",onTap:a.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(a){g=a}},{name:"button--close",option:"closeEl",onTap:a.close},{name:"button--arrow--left",option:"arrowEl",onTap:a.prev},{name:"button--arrow--right",option:"arrowEl",onTap:a.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){c.isFullscreen()?c.exit():c.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(a){m=a}}],T=function(){var a,c,e,f=function(d){if(d)for(var f=d.length,g=0;f>g;g++){a=d[g],c=a.className;for(var h=0;h<S.length;h++)e=S[h],c.indexOf("pswp__"+e.name)>-1&&(q[e.option]?(b.removeClass(a,"pswp__element--disabled"),e.onInit&&e.onInit(a)):b.addClass(a,"pswp__element--disabled"))}};f(d.children);var g=b.getChildByClass(d,"pswp__top-bar");g&&f(g.children)};v.init=function(){b.extend(a.options,z,!0),q=a.options,d=b.getChildByClass(a.scrollWrap,"pswp__ui"),l=a.listen,R(),l("beforeChange",v.update),l("doubleTap",function(b){var c=a.currItem.initialZoomLevel;a.getZoomLevel()!==c?a.zoomTo(c,b,333):a.zoomTo(q.getDoubleTapZoom(!1,a.currItem),b,333)}),l("preventDragEvent",function(a,b,c){var d=a.target||a.srcElement;d&&d.getAttribute("class")&&a.type.indexOf("mouse")>-1&&(d.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(d.tagName))&&(c.prevent=!1)}),l("bindEvents",function(){b.bind(d,"pswpTap click",A),b.bind(a.scrollWrap,"pswpTap",v.onGlobalTap),a.likelyTouchDevice||b.bind(a.scrollWrap,"mouseover",v.onMouseOver)}),l("unbindEvents",function(){y||F(),t&&clearInterval(t),b.unbind(document,"mouseout",L),b.unbind(document,"mousemove",K),b.unbind(d,"pswpTap click",A),b.unbind(a.scrollWrap,"pswpTap",v.onGlobalTap),b.unbind(a.scrollWrap,"mouseover",v.onMouseOver),c&&(b.unbind(document,c.eventK,v.updateFullscreen),c.isFullscreen()&&(q.hideAnimationDuration=0,c.exit()),c=null)}),l("destroy",function(){q.captionEl&&(f&&d.removeChild(f),b.removeClass(e,"pswp__caption--empty")),i&&(i.children[0].onclick=null),b.removeClass(d,"pswp__ui--over-close"),b.addClass(d,"pswp__ui--hidden"),v.setIdle(!1)}),q.showAnimationDuration||b.removeClass(d,"pswp__ui--hidden"),l("initialZoomIn",function(){q.showAnimationDuration&&b.removeClass(d,"pswp__ui--hidden")}),l("initialZoomOut",function(){b.addClass(d,"pswp__ui--hidden")}),l("parseVerticalMargin",P),T(),q.shareEl&&h&&i&&(y=!0),D(),Q(),M(),N()},v.setIdle=function(a){k=a,C(d,"ui--idle",a)},v.update=function(){x&&a.currItem?(v.updateIndexIndicator(),q.captionEl&&(q.addCaptionHTMLFn(a.currItem,e),C(e,"caption--empty",!a.currItem.title)),w=!0):w=!1,y||F(),D()},v.updateFullscreen=function(d){d&&setTimeout(function(){a.setScrollOffset(0,b.getScrollY())},50),b[(c.isFullscreen()?"add":"remove")+"Class"](a.template,"pswp--fs")},v.updateIndexIndicator=function(){q.counterEl&&(g.innerHTML=a.getCurrentIndex()+1+q.indexIndicatorSep+q.getNumItemsFn())},v.onGlobalTap=function(c){c=c||window.event;var d=c.target||c.srcElement;if(!r)if(c.detail&&"mouse"===c.detail.pointerType){if(I(d))return void a.close();b.hasClass(d,"pswp__img")&&(1===a.getZoomLevel()&&a.getZoomLevel()<=a.currItem.fitRatio?q.clickToCloseNonZoomable&&a.close():a.toggleDesktopZoom(c.detail.releasePoint))}else if(q.tapToToggleControls&&(x?v.hideControls():v.showControls()),q.tapToClose&&(b.hasClass(d,"pswp__img")||I(d)))return void a.close()},v.onMouseOver=function(a){a=a||window.event;var b=a.target||a.srcElement;C(d,"ui--over-close",I(b))},v.hideControls=function(){b.addClass(d,"pswp__ui--hidden"),x=!1},v.showControls=function(){x=!0,w||v.update(),b.removeClass(d,"pswp__ui--hidden")},v.supportsFullscreen=function(){var a=document;return!!(a.exitFullscreen||a.mozCancelFullScreen||a.webkitExitFullscreen||a.msExitFullscreen)},v.getFullscreenAPI=function(){var b,c=document.documentElement,d="fullscreenchange";return c.requestFullscreen?b={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:d}:c.mozRequestFullScreen?b={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+d}:c.webkitRequestFullscreen?b={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+d}:c.msRequestFullscreen&&(b={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),b&&(b.enter=function(){return j=q.closeOnScroll,q.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?a.template[this.enterK]():void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},b.exit=function(){return q.closeOnScroll=j,document[this.exitK]()},b.isFullscreen=function(){return document[this.elementK]}),b}};return a});

/*
 ng-photoswipe v0.1.0
 (c) 2016 Massimiliano Sartoretto <massimilianosartoretto@gmail.com>
 License: MIT
 */

"format amd";!function(){"use strict";function a(a){function b(b,c,d){function e(e,f,g){e.template=e.template||"views/ng-photoswipe.html",c.get(e.template,{cache:d}).success(function(c){var d=a.element(c);f.append(b(d)(e))}),e.start=function(){e.open=!0,h()};var h=function(){var b=document.querySelectorAll(".pswp")[0];a.isUndefined(e.options.getThumbBoundsFn)&&(e.options={getThumbBoundsFn:function(a){var b=document.querySelectorAll(e.slideSelector)[a],c=window.pageYOffset||document.documentElement.scrollTop,d=b.getBoundingClientRect();return{x:d.left,y:d.top+c,w:d.width}}}),a.isUndefined(e.options.galleryUID)&&(e.options.galleryUID=g.ngPhotoswipe),e.gallery=new PhotoSwipe(b,PhotoSwipeUI_Default||!1,e.slides,e.options),e.gallery.init(),e.item=e.gallery.currItem,e.gallery.listen("destroy",function(){e.safeApply(function(){(e.onClose||a.noop)()})}),e.gallery.listen("afterChange",function(){e.safeApply(function(){e.item=e.gallery.currItem})})};e.$watch("open",function(a,b){a!=b?a&&h():!a&&e.gallery&&(e.gallery.close(),e.gallery=null)}),e.safeApply=function(a){var b=this.$root.$$phase;"$apply"==b||"$digest"==b?a&&"function"==typeof a&&a():this.$apply(a)},e.$on("destroy",function(){e.gallery=null})}return{restrict:"AE",replace:!0,scope:{open:"=",options:"=",slides:"=",slideSelector:"@",template:"@",onClose:"&"},link:e}}return b.$inject=["$compile","$http","$templateCache"],a.module("ngPhotoswipe",[]).directive("ngPhotoswipe",b)}"function"==typeof define&&define.amd?define(["angular","Photoswipe"],a):"undefined"!=typeof module&&module&&module.exports?(a(angular,require("Photoswipe")),module.exports="ngPhotoswipe"):a(angular,("undefined"!=typeof global?global:window).Photoswipe)}(),angular.module("ngPhotoswipe").run(["$templateCache",function(a){"use strict";a.put("views/ng-photoswipe.html",'<div><div class=pswp tabindex=-1 role=dialog aria-hidden=true><div class=pswp__bg></div><div class=pswp__scroll-wrap><div class=pswp__container><div class=pswp__item></div><div class=pswp__item></div><div class=pswp__item></div></div><div class="pswp__ui pswp__ui--hidden"><div class=pswp__top-bar><div class=pswp__counter></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--share" title=Share></button> <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class=pswp__preloader><div class=pswp__preloader__icn><div class=pswp__preloader__cut><div class=pswp__preloader__donut></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class=pswp__share-tooltip></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class=pswp__caption><div class=pswp__caption__center></div></div></div></div></div></div>')}]);
//# sourceMappingURL=angular-photoswipe.min.js.map
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
angular.module('app')
    .directive('leftMenu', function (chatService) {
        return {
            restrict: 'E',
            templateUrl: 'leftMenu/leftMenu.html',
            link: function (scope) {
                scope.items = chatService.getMessages();
                scope.setCurrent = chatService.setCurrent;
                scope.toggleWait = function () {
                    scope.waiteIsVisible = !scope.waiteIsVisible;
                }

                scope.openSearch = function () {
                    scope.search = !scope.search;
                }
            }
        }
    });
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
;(function() {
"use strict";

angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("app.html","<main-header></main-header>\r\n<div class=\"main-content\">\r\n    <user-list ng-if=\"userOpen\"></user-list>\r\n    <left-menu></left-menu>\r\n    <ticket></ticket>\r\n</div>\r\n");
$templateCache.put("mainHeader/mainHeader.html","<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        <nav id=\"bs-navbar\" class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a href>Чатик</a></li>\r\n                <li><a href ng-click=\"openUsers()\">Сотрудники</a></li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <form class=\"navbar-form main-header__search\" role=\"search\">\r\n                        <div class=\"form-group\" search>\r\n                            <input type=\"text\" class=\"form-control search__input\" placeholder=\"Поиск\" ng-click=\"open()\" ng-model=\"model.str\">\r\n                            <div ng-show=\"isVisible\">\r\n                                <div ng-include=\"\'search/search.html\'\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <a href class=\"search__btn\"><i class=\"fa fa-search\"></i></a>\r\n                    </form>\r\n                </li>\r\n                <li>\r\n                    <p class=\"navbar-text\">Петров Николай</p>\r\n                </li>\r\n                <li>\r\n                    <a href class=\"main-header__profile\">\r\n                        <div class=\"round-photo\"></div>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    </div>\r\n</nav>\r\n\r\n<!--<div class=\"main-header clearfix\">-->\r\n<!--<ul class=\"main-header__links pull-left\">-->\r\n<!--<li>-->\r\n<!--<a href><i class=\"fa fa-home\"></i> Главная</a>-->\r\n<!--</li>-->\r\n<!--</ul>-->\r\n<!--<ul class=\"main-header__links pull-right\">-->\r\n<!--<li>-->\r\n<!--<div class=\"main-header__links__search\">-->\r\n<!--<input type=\"text\"/>-->\r\n<!--</div>-->\r\n<!--</li>-->\r\n<!--<li>-->\r\n<!--<a href><i class=\"fa fa-search\"></i></a>-->\r\n<!--</li>-->\r\n<!--<li>-->\r\n<!--<a class=\"main-header__profile\" href>-->\r\n<!--<div class=\"round-photo\"></div>-->\r\n<!--</a>-->\r\n<!--</li>-->\r\n<!--</ul>-->\r\n<!--</div>-->");
$templateCache.put("leftMenu/leftMenu.html","<div class=\"list__title\">Чатики</div>\r\n\r\n<div class=\"left-list__search\">\r\n    <input type=\"text\" class=\"form-control search__input\" ng-focus=\"openSearch()\" ng-blur=\"openSearch()\">\r\n    <a href=\"\" class=\"search__btn\"><i class=\"fa fa-search\"></i></a>\r\n\r\n    <div class=\"serach_add\" ng-show=\"search\">\r\n        <div class=\"form-group form-group--two\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"С\" value=\"12.04.2016\">\r\n            <i class=\"fa fa-calendar\" style=\"    position: absolute;\r\n    left: 10px;\r\n    top: 10px;\"></i>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"По\" value=\"14.04.2016\">\r\n            <i class=\"fa fa-calendar\" style=\"    position: absolute;\r\n    left: 133px;\r\n    top: 10px;\"></i>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"ID\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Номер заявки\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Логин\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Почта\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"left-list\">\r\n    <div class=\"left-list__item\" ng-repeat=\"item in items\" ng-class=\"item === getCurrent() && \'__current\'\"\r\n         ng-click=\"setCurrent(item)\">\r\n        <div class=\"media\">\r\n            <div class=\"media-left\">\r\n                <div class=\"round-photo\" ng-style=\"{\'background-image\':\'url({{item.info.photo}})\'}\"></div>\r\n            </div>\r\n            <div class=\"media-body\">\r\n                <div>\r\n                    <span ng-bind=\"item.user\"></span>\r\n                </div>\r\n                <div class=\"left-list__item__tx\" ng-bind=\"item.messages[item.messages.length - 1].text\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"wait\" ng-class=\"waiteIsVisible && \'__w-visible\'\">\r\n    <button class=\"wait_btn\" ng-click=\"toggleWait()\">\r\n        <i class=\"fa fa-angle-up\" ng-hide=\"waiteIsVisible\" aria-hidden=\"true\"></i>\r\n        <i class=\"fa fa-angle-down\" ng-show=\"waiteIsVisible\" aria-hidden=\"true\"></i>&nbsp;\r\n        В ожидании (3)\r\n    </button>\r\n    <div class=\"left-list__search\">\r\n        <input type=\"text\" class=\"form-control search__input\">\r\n        <a href=\"\" class=\"search__btn\"><i class=\"fa fa-search\"></i></a>\r\n        <div class=\"serach_add\" ng-show=\"search\">\r\n            <div class=\"form-group form-group--two\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"С\" value=\"12.04.2016\">\r\n                <i class=\"fa fa-calendar\" style=\"    position: absolute;\r\n    left: 10px;\r\n    top: 10px;\"></i>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"По\" value=\"14.04.2016\">\r\n                <i class=\"fa fa-calendar\" style=\"    position: absolute;\r\n    left: 133px;\r\n    top: 10px;\"></i>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"ID\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Номер заявки\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Логин\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Почта\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"left-list__item\" ng-repeat=\"item in items\" ng-class=\"item.cssClass\" ng-click=\"setCurrent(item)\">\r\n        <div class=\"media\">\r\n            <div class=\"media-left\">\r\n                <div class=\"round-photo\" ng-style=\"{\'background-image\':\'url({{item.info.photo}})\'}\"></div>\r\n            </div>\r\n            <div class=\"media-body\">\r\n                <div>\r\n                    <span ng-bind=\"item.user\"></span>\r\n                </div>\r\n                <div class=\"left-list__item__tx\" ng-bind=\"item.messages[item.messages.length - 1].text\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
$templateCache.put("search/search.html","<div class=\"search\">\r\n    <div class=\"container-fluid\" style=\"margin-bottom: 10px\">\r\n        <form class=\"form-inline\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\"  placeholder=\"ID\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Номер заявки\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\"  placeholder=\"Логин\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Почта\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\"  placeholder=\"Телефон\">\r\n            </div>\r\n        </form>\r\n        <div class=\"clearfix\">\r\n            <a href ng-click=\"close()\" class=\"search__close\"> <i class=\"fa fa-close\"></i></a>\r\n        </div>\r\n    </div>\r\n    <div ng-repeat=\"item in getResults()\">\r\n        <div class=\"media search__result\" ng-click=\"setCurrentAndClose(item)\">\r\n            <div class=\"container\">\r\n\r\n                <div class=\"media-left\">\r\n                    <div class=\"round-photo\" ng-style=\"{\'background-image\':\'url({{item.info.photo}})\'}\"></div>\r\n                </div>\r\n                <div class=\"media-body\">\r\n                    <div class=\"clearfix\">\r\n                        <span ng-bind=\"item.user\"></span>\r\n                        <div class=\"pull-right\">\r\n                            <span class=\"mess__info\">\r\n                                <i class=\"fa fa-envelope-o\"></i> &nbsp;<span class=\"text-muted\"\r\n                                                                             ng-bind=\"item.messages.length\"></span>\r\n                            </span>\r\n                            <span class=\"mess__info\">\r\n                                <i class=\"fa fa-pencil\"></i> &nbsp;<span ng-bind=\"item.theme\"></span>\r\n                            </span>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"left-list__item__tx\" ng-bind=\"item.messages[0].text\"></div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
$templateCache.put("ticket/ticket.html","<div class=\"chat\" ng-if=\"getCurrent()\">\r\n    <div class=\"dubls\">\r\n        <div class=\"dubl\" style=\"text-align: center; font-weight: bold; border-bottom: 0; padding: 11px 0\">\r\n            <span>Активный чат</span>\r\n        </div>\r\n        <div class=\"dubl\" ng-repeat=\"dubl in dubls\">\r\n            <div class=\"clearfix\">\r\n                <small>\r\n                    <i class=\"fa fa-calendar text-muted\" aria-hidden=\"true\"></i>&nbsp;\r\n                    <span ng-bind=\"dubl.date | date:\'HH:mm yyyy-MM-dd\'\">\r\n\r\n                    </span>\r\n                </small>\r\n                <!--<small class=\"pull-right\" ng-bind=\"dubl.theme\"></small>-->\r\n            </div>\r\n            <small class=\"text-muted\" ng-bind=\"dubl.title\"></small>\r\n        </div>\r\n        <div class=\"dubl\" style=\"flex-shrink: 0;flex: 0;padding: 5px 10px;\">\r\n            <span>...</span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"chat-area\">\r\n        <div class=\"clearfix\" ng-repeat=\"m in getCurrent().messages\">\r\n            <div class=\"chat-message\" ng-class=\"getCssClass(m)\"\r\n                 ng-if=\"m.type === \'FROM_USER\' || m.type === \'FROM_SUPPORT\'\">\r\n                <div class=\"media\">\r\n                    <div class=\"media-left\" ng-if=\"m.type === \'FROM_USER\'\">\r\n                        <div class=\"round-photo\"\r\n                             ng-style=\"{\'background-image\':\'url({{getCurrent().info.photo}})\'}\"></div>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                        <div class=\"media-heading clearfix\">\r\n                            <a href class=\"author\" ng-bind=\"m.author\"></a>\r\n                            <small class=\"date\">\r\n                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                                <span ng-bind=\"getDate() | date:\'HH:mm:ss yyyy-MM-dd\'\"></span>\r\n                                &nbsp;\r\n                                <a href style=\"color: #999\"><i class=\"fa fa-cog\"></i></a>\r\n                            </small>\r\n                        </div>\r\n                        <div ng-bind=\"m.text\"></div>\r\n                        <div ng-if=\"m.attachments\" class=\"attachments\">\r\n                            <a href class=\"attachment\" ng-repeat=\"at in m.attachments\"\r\n                               ng-style=\"{\'background-image\':\'url({{at}})\'}\">\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"media-right\" ng-if=\"m.type === \'FROM_SUPPORT\'\">\r\n                        <div class=\"round-photo\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"chat-message\" ng-if=\"m.type === \'NOTE\'\" ng-class=\"getCssClass(m)\">\r\n                <div class=\"media\">\r\n                    <div class=\"media-left\">\r\n                        <div class=\"round-photo\"></div>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                        <div class=\"media-heading clearfix\">\r\n                            <span ng-bind=\"m.author\"></span>\r\n                            <small ng-bind=\"getDate() | date:\'HH:mm:ss yyyy-MM-dd\'\"></small>\r\n                            <div class=\"pull-right\">\r\n                                <i class=\"fa fa-comment\" aria-hidden=\"true\"></i> Заметка\r\n                            </div>\r\n                        </div>\r\n                        <div ng-bind=\"m.text\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"chat-message message-note\" ng-if=\"m.type === \'AGGREGATOR_MTS\'\">\r\n                <div class=\"media\">\r\n                    <div class=\"media-left\">\r\n                        <div class=\"round-photo\"></div>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                        <div class=\"media-heading clearfix\">\r\n                            <span ng-bind=\"m.author\"></span>\r\n                            <small ng-bind=\"getDate() | date:\'HH:MM\'\"></small>\r\n                            <div class=\"pull-right\">\r\n                                <i class=\"fa fa-reply-all\" aria-hidden=\"true\"></i> Запрос\r\n                            </div>\r\n                        </div>\r\n                        <div ng-bind=\"m.text\"></div>\r\n                    </div>\r\n                    <div class=\"media-left\" style=\"padding: 0 5px\">\r\n                        <img width=\"100\" src=\"https://upload.wikimedia.org/wikipedia/commons/c/c2/MTS_logo.svg\"/>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"top__actions\">\r\n        <div class=\"top__action\">\r\n            <i class=\"fa fa-reply text-info\" aria-hidden=\"true\"></i> &nbsp;Передать\r\n        </div>\r\n        <div class=\"top__action\">\r\n            <i class=\"fa fa-pause text-warning\" aria-hidden=\"true\"></i> &nbsp;На ожидание\r\n        </div>\r\n        <div class=\"top__action\">\r\n            <i class=\"fa fa-close text-danger\" aria-hidden=\"true\"></i> &nbsp;Закрыть\r\n        </div>\r\n    </div>\r\n    <form class=\"send-message\" ng-submit=\"addMessage()\">\r\n        <div class=\"input-group\">\r\n            <span class=\"input-group-addon\" id=\"basic-addon3\">\r\n                <div class=\"checkbox\" style=\"margin: 0\">\r\n                    <label style=\"min-height: 0\">\r\n                        <input type=\"checkbox\"> Заметка\r\n                    </label>\r\n                </div>\r\n            </span>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Введите сообщение\" ng-model=\"model.text\">\r\n            <span class=\"input-group-btn\">\r\n                <button ng-click=\"addMessage()\" class=\"btn btn-default\" type=\"button\"><i class=\"fa fa-envelope-o\"\r\n                                                                                         aria-hidden=\"true\"></i>\r\n                    Отправть\r\n                </button>\r\n            </span>\r\n        </div>\r\n        <div class=\"send-message__icons\">\r\n            <a href>\r\n                <i class=\"fa fa-smile-o\" aria-hidden=\"true\"></i>\r\n            </a>\r\n            <a href>\r\n                <i class=\"fa fa-paperclip\" aria-hidden=\"true\"></i>\r\n            </a>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class=\"info\" ng-if=\"getCurrent()\">\r\n    <div class=\"main clearfix\">\r\n        <div class=\"photo pull-left\" ng-style=\"{\'background-image\':\'url({{ getCurrent().info.photo }})\'}\"></div>\r\n        <div class=\"main__info\">\r\n            <table class=\"table table-condensed table-hover table-striped\">\r\n                <tbody>\r\n                <tr>\r\n                    <td>ID:</td>\r\n                    <td><strong ng-bind=\"getCurrent().info.id\"></strong></td>\r\n                    <td>Логин:</td>\r\n                    <td><strong ng-bind=\"getCurrent().info.login\"></strong></td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Email:</td>\r\n                    <td><strong ng-bind=\"getCurrent().info.email\"></strong></td>\r\n                    <td>Телефон:</td>\r\n                    <td><strong ng-bind=\"getCurrent().info.phone\"></strong></td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Возраст:</td>\r\n                    <td><strong ng-bind=\"getCurrent().info.age\"></strong></td>\r\n                    <td>Город:</td>\r\n                    <td><strong ng-bind=\"getCurrent().info.city\"></strong></td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Зарегистрирован:</td>\r\n                    <td><strong ng-bind=\"getCurrent().info.created | date:\'HH:mm:ss yyyy-MM-dd\'\"></strong></td>\r\n                    <td>Купленных ОКов:</td>\r\n                    <td><strong ng-bind=\"getCurrent().info.oks\"></strong></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Браузер</td>\r\n                    <td><strong>Chrome</strong></td>\r\n                    <td>Версия</td>\r\n                    <td><strong>43</strong></td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Устройство:</td>\r\n                    <td><strong>Не определено</strong></td>\r\n                    <td>ОС:</td>\r\n                    <td><strong>OSX 10.11</strong></td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n\r\n        <pre style=\"padding: 5px 10px; overflow: hidden; text-overflow: ellipsis\"\r\n             ng-bind=\"getCurrent().info.userAgent\"></pre>\r\n\r\n        <div style=\"margin-top: 10px\">\r\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                <li role=\"presentation\" class=\"active\"><a href>Все прикрепления</a></li>\r\n                <li role=\"presentation\"><a href>Подробная информация</a></li>\r\n            </ul>\r\n\r\n            <div class=\"tab-content\">\r\n                <div role=\"tabpanel\" class=\"tab-pane active\" id=\"home\">\r\n                    <div ng-repeat=\"m in getCurrent().messages\" class=\"attachments\">\r\n                        <a href class=\"attachment\" ng-repeat=\"at in m.attachments\"\r\n                           ng-style=\"{\'background-image\':\'url({{at}})\'}\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"select-chat\" ng-if=\"!getCurrent()\">\r\n    Выберите чатик\r\n</div>");
$templateCache.put("userList/userList.html","\r\n<div class=\"list__title\">Сотрудники</div>\r\n<div class=\"left-list__search\">\r\n    <input type=\"text\" class=\"form-control search__input\">\r\n    <a href=\"\" class=\"search__btn\"><i class=\"fa fa-search\"></i></a>\r\n</div>\r\n<div class=\"left-list\">\r\n    <div class=\"left-list__item\" ng-repeat=\"item in items\" ng-class=\"$first && \'__current\'\">\r\n        <div class=\"media\">\r\n            <div class=\"media-left\">\r\n                <div class=\"round-photo\" ng-style=\"{\'background-image\':\'url({{item.img}})\'}\"></div>\r\n            </div>\r\n            <div class=\"media-body\">\r\n                <div>\r\n                    <span ng-bind=\"item.name\"></span>\r\n                </div>\r\n                <div class=\"left-list__item__tx\" ng-bind=\"\'Чатов: \' + item.count\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");}]);
}());
