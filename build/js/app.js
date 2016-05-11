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
    .directive('mainHeader', function(){
        return {
            restrict: 'E',
            templateUrl: 'mainHeader/mainHeader.html',
            link: function(){}
        }
    })
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
;(function() {
"use strict";

angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("app.html","<main-header></main-header>\n<div class=\"main-content\">\n    <left-menu></left-menu>\n    <ticket></ticket>\n</div>\n");
$templateCache.put("mainHeader/mainHeader.html","<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n        <nav id=\"bs-navbar\" class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a href><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>&nbsp;&nbsp; Налоченныe чаты (2)</a></li>\n                <li><a href><i class=\"fa fa-pause\" aria-hidden=\"true\"></i>&nbsp;&nbsp; В ожидании</a></li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <form class=\"navbar-form main-header__search\" role=\"search\">\n                        <div class=\"form-group\" search>\n                            <input type=\"text\" class=\"form-control search__input\" placeholder=\"Поиск\" ng-click=\"open()\" ng-model=\"model.str\">\n                            <div ng-show=\"isVisible\">\n                                <div ng-include=\"\'search/search.html\'\"></div>\n                            </div>\n                        </div>\n                        <a href class=\"search__btn\"><i class=\"fa fa-search\"></i></a>\n                    </form>\n                </li>\n                <li>\n                    <p class=\"navbar-text\">Петров Николай</p>\n                </li>\n                <li>\n                    <a href class=\"main-header__profile\">\n                        <div class=\"round-photo\"></div>\n                    </a>\n                </li>\n            </ul>\n        </nav>\n    </div>\n</nav>\n\n<!--<div class=\"main-header clearfix\">-->\n<!--<ul class=\"main-header__links pull-left\">-->\n<!--<li>-->\n<!--<a href><i class=\"fa fa-home\"></i> Главная</a>-->\n<!--</li>-->\n<!--</ul>-->\n<!--<ul class=\"main-header__links pull-right\">-->\n<!--<li>-->\n<!--<div class=\"main-header__links__search\">-->\n<!--<input type=\"text\"/>-->\n<!--</div>-->\n<!--</li>-->\n<!--<li>-->\n<!--<a href><i class=\"fa fa-search\"></i></a>-->\n<!--</li>-->\n<!--<li>-->\n<!--<a class=\"main-header__profile\" href>-->\n<!--<div class=\"round-photo\"></div>-->\n<!--</a>-->\n<!--</li>-->\n<!--</ul>-->\n<!--</div>-->");
$templateCache.put("leftMenu/leftMenu.html","<div class=\"left-list__search\">\n    <input type=\"text\" class=\"form-control search__input\">\n    <a href=\"\" class=\"search__btn\"><i class=\"fa fa-search\"></i></a>\n</div>\n<div class=\"left-list\">\n    <div class=\"left-list__item\" ng-repeat=\"item in items\" ng-class=\"item.cssClass\" ng-click=\"setCurrent(item)\">\n        <div class=\"media\">\n            <div class=\"media-left\">\n                <div class=\"round-photo\" ng-style=\"{\'background-image\':\'url({{item.info.photo}})\'}\"></div>\n            </div>\n            <div class=\"media-body\">\n                <div>\n                    <span ng-bind=\"item.user\"></span>\n                </div>\n                <div class=\"left-list__item__tx\" ng-bind=\"item.messages[item.messages.length - 1].text\"></div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("search/search.html","<div class=\"search\">\n    <div class=\"container-fluid\" style=\"margin-bottom: 10px\">\n        <form class=\"form-inline\">\n            <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\"  placeholder=\"ID\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Номер заявки\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\"  placeholder=\"Логин\">\n            </div>\n\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Почта\">\n            </div>\n\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\"  placeholder=\"Телефон\">\n            </div>\n        </form>\n        <div class=\"clearfix\">\n            <a href ng-click=\"close()\" class=\"search__close\"> <i class=\"fa fa-close\"></i></a>\n        </div>\n    </div>\n    <div ng-repeat=\"item in getResults()\">\n        <div class=\"media search__result\" ng-click=\"setCurrentAndClose(item)\">\n            <div class=\"container\">\n\n                <div class=\"media-left\">\n                    <div class=\"round-photo\" ng-style=\"{\'background-image\':\'url({{item.info.photo}})\'}\"></div>\n                </div>\n                <div class=\"media-body\">\n                    <div class=\"clearfix\">\n                        <span ng-bind=\"item.user\"></span>\n                        <div class=\"pull-right\">\n                            <span class=\"mess__info\">\n                                <i class=\"fa fa-envelope-o\"></i> &nbsp;<span class=\"text-muted\"\n                                                                             ng-bind=\"item.messages.length\"></span>\n                            </span>\n                            <span class=\"mess__info\">\n                                <i class=\"fa fa-pencil\"></i> &nbsp;<span ng-bind=\"item.theme\"></span>\n                            </span>\n                        </div>\n\n                    </div>\n                    <div class=\"left-list__item__tx\" ng-bind=\"item.messages[0].text\"></div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("ticket/ticket.html","<div class=\"chat\" ng-if=\"getCurrent()\">\n    <div class=\"dubls\">\n        <div class=\"dubl\" style=\"text-align: center; font-weight: bold; border-bottom: 0; padding: 11px 0\">\n            <span>Активный чат</span>\n        </div>\n        <div class=\"dubl\" ng-repeat=\"dubl in dubls\">\n            <div class=\"clearfix\">\n                <small>\n                    <i class=\"fa fa-calendar text-muted\" aria-hidden=\"true\"></i>&nbsp;\n                    <span ng-bind=\"dubl.date | date:\'HH:mm yyyy-MM-dd\'\">\n\n                    </span>\n                </small>\n                <!--<small class=\"pull-right\" ng-bind=\"dubl.theme\"></small>-->\n            </div>\n            <small class=\"text-muted\" ng-bind=\"dubl.title\"></small>\n        </div>\n        <div class=\"dubl\" style=\"flex-shrink: 0;flex: 0;padding: 5px 10px;\">\n            <span>...</span>\n        </div>\n    </div>\n\n    <div class=\"chat-area\">\n        <div class=\"clearfix\" ng-repeat=\"m in getCurrent().messages\">\n            <div class=\"chat-message\" ng-class=\"getCssClass(m)\"\n                 ng-if=\"m.type === \'FROM_USER\' || m.type === \'FROM_SUPPORT\'\">\n                <div class=\"media\">\n                    <div class=\"media-left\" ng-if=\"m.type === \'FROM_USER\'\">\n                        <div class=\"round-photo\" ng-style=\"{\'background-image\':\'url({{getCurrent().info.photo}})\'}\"></div>\n                    </div>\n                    <div class=\"media-body\">\n                        <div class=\"media-heading clearfix\">\n                            <a href class=\"author\" ng-bind=\"m.author\"></a>\n                            <small class=\"date\">\n                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                <span ng-bind=\"getDate() | date:\'HH:mm:ss yyyy-MM-dd\'\"></span>\n                            </small>\n                        </div>\n                        <div ng-bind=\"m.text\"></div>\n                        <div ng-if=\"m.attachments\" class=\"attachments\">\n                            <a href class=\"attachment\" ng-repeat=\"at in m.attachments\"\n                               ng-style=\"{\'background-image\':\'url({{at}})\'}\">\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"media-right\" ng-if=\"m.type === \'FROM_SUPPORT\'\">\n                        <div class=\"round-photo\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"chat-message\" ng-if=\"m.type === \'NOTE\'\" ng-class=\"getCssClass(m)\">\n                <div class=\"media\">\n                    <div class=\"media-left\">\n                        <div class=\"round-photo\"></div>\n                    </div>\n                    <div class=\"media-body\">\n                        <div class=\"media-heading clearfix\">\n                            <span ng-bind=\"m.author\"></span>\n                            <small ng-bind=\"getDate() | date:\'HH:mm:ss yyyy-MM-dd\'\"></small>\n                            <div class=\"pull-right\">\n                                <i class=\"fa fa-comment\" aria-hidden=\"true\"></i> Заметка\n                            </div>\n                        </div>\n                        <div ng-bind=\"m.text\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"chat-message message-note\" ng-if=\"m.type === \'AGGREGATOR_MTS\'\">\n                <div class=\"media\">\n                    <div class=\"media-left\">\n                        <div class=\"round-photo\"></div>\n                    </div>\n                    <div class=\"media-body\">\n                        <div class=\"media-heading clearfix\">\n                            <span ng-bind=\"m.author\"></span>\n                            <small ng-bind=\"getDate() | date:\'HH:MM\'\"></small>\n                            <div class=\"pull-right\">\n                                <i class=\"fa fa-reply-all\" aria-hidden=\"true\"></i> Запрос\n                            </div>\n                        </div>\n                        <div ng-bind=\"m.text\"></div>\n                    </div>\n                    <div class=\"media-left\" style=\"padding: 0 5px\">\n                        <img width=\"100\" src=\"https://upload.wikimedia.org/wikipedia/commons/c/c2/MTS_logo.svg\"/>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"top__actions\">\n        <div class=\"top__action\">\n            <i class=\"fa fa-reply text-info\" aria-hidden=\"true\"></i> &nbsp;Передать\n        </div>\n        <div class=\"top__action\">\n            <i class=\"fa fa-pause text-warning\" aria-hidden=\"true\"></i> &nbsp;На ожидание\n        </div>\n        <div class=\"top__action\">\n            <i class=\"fa fa-close text-danger\" aria-hidden=\"true\"></i> &nbsp;Закрыть\n        </div>\n    </div>\n    <form class=\"send-message\" ng-submit=\"addMessage()\">\n        <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Введите сообщение\" ng-model=\"model.text\">\n            <span class=\"input-group-btn\">\n                <button ng-click=\"addMessage()\" class=\"btn btn-default\" type=\"button\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\n                    Отправть\n                </button>\n            </span>\n        </div>\n        <div class=\"send-message__icons\">\n            <a href>\n                <i class=\"fa fa-smile-o\" aria-hidden=\"true\"></i>\n            </a>\n            <a href>\n                <i class=\"fa fa-paperclip\" aria-hidden=\"true\"></i>\n            </a>\n        </div>\n    </form>\n</div>\n<div class=\"info\" ng-if=\"getCurrent()\">\n    <div class=\"main clearfix\">\n        <div class=\"photo pull-left\" ng-style=\"{\'background-image\':\'url({{ getCurrent().info.photo }})\'}\"></div>\n        <div class=\"main__info\">\n            <table class=\"table table-condensed table-hover table-striped\">\n                <tbody>\n                <tr>\n                    <td>ID:</td>\n                    <td><strong ng-bind=\"getCurrent().info.id\"></strong></td>\n                    <td>Логин:</td>\n                    <td><strong ng-bind=\"getCurrent().info.login\"></strong></td>\n                </tr>\n\n                <tr>\n                    <td>Email:</td>\n                    <td><strong ng-bind=\"getCurrent().info.email\"></strong></td>\n                    <td>Телефон:</td>\n                    <td><strong ng-bind=\"getCurrent().info.phone\"></strong></td>\n                </tr>\n\n                <tr>\n                    <td>Возраст:</td>\n                    <td><strong ng-bind=\"getCurrent().info.age\"></strong></td>\n                    <td>Город:</td>\n                    <td><strong ng-bind=\"getCurrent().info.city\"></strong></td>\n                </tr>\n\n                <tr>\n                    <td>Зарегистрирован:</td>\n                    <td><strong ng-bind=\"getCurrent().info.created | date:\'HH:mm:ss yyyy-MM-dd\'\"></strong></td>\n                    <td>Купленных ОКов:</td>\n                    <td><strong ng-bind=\"getCurrent().info.oks\"></strong></td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n        <pre style=\"padding: 5px 10px; margin-top: 25px; overflow: hidden; text-overflow: ellipsis\" ng-bind=\"getCurrent().info.userAgent\"></pre>\n\n        <div style=\"margin-top: 10px\">\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\n                <li role=\"presentation\" class=\"active\"><a href>Все прикрепления</a></li>\n                <li role=\"presentation\"><a href>Подробная информация</a></li>\n            </ul>\n\n            <div class=\"tab-content\">\n                <div role=\"tabpanel\" class=\"tab-pane active\" id=\"home\">\n                    <div ng-repeat=\"m in getCurrent().messages\" class=\"attachments\">\n                        <a href class=\"attachment\" ng-repeat=\"at in m.attachments\"\n                           ng-style=\"{\'background-image\':\'url({{at}})\'}\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n<div class=\"select-chat\" ng-if=\"!getCurrent()\">\n    Выберите чатик\n</div>");}]);
}());
