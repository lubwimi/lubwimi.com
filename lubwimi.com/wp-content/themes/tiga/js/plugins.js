// Avoid `console` errors in browsers that lack a console
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// place any jQuery/helper plugins in here, instead of separate, slower script files.

/*
  Formalize - version 1.2
*/

var FORMALIZE=function(a,b,c){function d(a){var b=c.createElement("b");return b.innerHTML="<!--[if IE "+a+"]><br><![endif]-->",!!b.getElementsByTagName("br").length}var e="placeholder"in c.createElement("input"),f="autofocus"in c.createElement("input"),g=d(6),h=d(7);return{go:function(){var a,b=this.init;for(a in b)b.hasOwnProperty(a)&&b[a]()},init:{full_input_size:function(){h&&a("textarea, input.input_full").length&&a("textarea, input.input_full").wrap('<span class="input_full_wrap"></span>')},ie6_skin_inputs:function(){if(g&&a("input, select, textarea").length){var b=/button|submit|reset/,c=/date|datetime|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/;a("input").each(function(){var d=a(this);this.getAttribute("type").match(b)?(d.addClass("ie6_button"),this.disabled&&d.addClass("ie6_button_disabled")):this.getAttribute("type").match(c)&&(d.addClass("ie6_input"),this.disabled&&d.addClass("ie6_input_disabled"))}),a("textarea, select").each(function(){this.disabled&&a(this).addClass("ie6_input_disabled")})}},autofocus:function(){f||!a(":input[autofocus]").length||a(":input[autofocus]:visible:first").focus()},placeholder:function(){!e&&!!a(":input[placeholder]").length&&(FORMALIZE.misc.add_placeholder(),a(":input[placeholder]").each(function(){if(this.type!=="password"){var b=a(this),c=b.attr("placeholder");b.focus(function(){b.val()===c&&b.val("").removeClass("placeholder_text")}).blur(function(){FORMALIZE.misc.add_placeholder()}),b.closest("form").submit(function(){b.val()===c&&b.val("").removeClass("placeholder_text")}).bind("reset",function(){setTimeout(FORMALIZE.misc.add_placeholder,50)})}}))}},misc:{add_placeholder:function(){e||!a(":input[placeholder]").length||a(":input[placeholder]").each(function(){if(this.type!=="password"){var b=a(this),c=b.attr("placeholder");(!b.val()||b.val()===c)&&b.val(c).addClass("placeholder_text")}})}}}}(jQuery,this,this.document);jQuery(document).ready(function(){FORMALIZE.go()});

/*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/
(function(a){a.fn.fitVids=function(b){var c={customSelector:null};var d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];d.className="fit-vids-style";d.innerHTML="�<style> \n.fluid-width-video-wrapper { \nwidth: 100%; \nposition: relative; \npadding: 0; \n} \n\n.fluid-width-video-wrapper iframe, \n.fluid-width-video-wrapper object, \n.fluid-width-video-wrapper embed { \nposition: absolute; \ntop: 0; \nleft: 0; \nwidth: 100%; \nheight: 100%; \n} \n</style>";e.parentNode.insertBefore(d,e);if(b){a.extend(c,b)}return this.each(function(){var b=["iframe[src^='http://player.vimeo.com']","iframe[src^='http://www.youtube.com']","iframe[src^='https://www.youtube.com']","iframe[src^='http://www.kickstarter.com']","object","embed"];if(c.customSelector){b.push(c.customSelector)}var d=a(this).find(b.join(","));d.each(function(){var b=a(this);if(this.tagName.toLowerCase()=="embed"&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length){return}var c=this.tagName.toLowerCase()=="object"?b.attr("height"):b.height(),d=c/b.width();if(!b.attr("id")){var e="fitvid"+Math.floor(Math.random()*999999);b.attr("id",e)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",d*100+"%");b.removeAttr("height").removeAttr("width")})})}})(jQuery);

/**
 * jQuery Friendly IE6 Upgrade Notice Plugin 1.0.0
 * http://code.google.com/p/friendly-ie6-upgrade-notice/
 * Copyright (c) 2012 Emil Uzelac - ThemeID
 * http://www.gnu.org/licenses/gpl.html
 */
if (jQuery.browser.msie && jQuery.browser.version <= 6)
    jQuery('<div class="msie-box">' + '<a href="http://browsehappy.com/" title="Click here to update" target="_blank">  Your browser is no longer supported. Click here to update...</a> </div>').appendTo('#page');

/**
 * Responsive Menu
 * https://github.com/mattkersley/Responsive-Menu
 */
(function(a){var b=0;a.fn.mobileMenu=function(c){function m(a){if(f()&&!g(a)){l(a)}else if(f()&&g(a)){j(a)}else if(!f()&&g(a)){k(a)}}function l(b){if(e(b)){var c='<select id="mobileMenu_'+b.attr("id")+'" class="mobileMenu">';c+='<option value="">'+d.topOptionText+"</option>";b.find("li").each(function(){var b="";var e=a(this).parents("ul, ol").length;for(i=1;i<e;i++){b+=d.indentString}var f=a(this).find("a:first-child").attr("href");var g=b+a(this).clone().children("ul, ol").remove().end().text();c+='<option value="'+f+'">'+g+"</option>"});c+="</select>";b.parent().append(c);a("#mobileMenu_"+b.attr("id")).change(function(){h(a(this))});j(b)}else{alert("mobileMenu will only work with UL or OL elements!")}}function k(b){b.css("display","");a("#mobileMenu_"+b.attr("id")).hide()}function j(b){b.hide("display","none");a("#mobileMenu_"+b.attr("id")).show()}function h(a){if(a.val()!==null){document.location.href=a.val()}}function g(c){if(c.attr("id")){return a("#mobileMenu_"+c.attr("id")).length>0}else{b++;c.attr("id","mm"+b);return a("#mobileMenu_mm"+b).length>0}}function f(){return a(window).width()<d.switchWidth}function e(a){return a.is("ul, ol")}var d={switchWidth:600,topOptionText:"Select a page",indentString:"   "};return this.each(function(){if(c){a.extend(d,c)}var b=a(this);a(window).resize(function(){m(b)});m(b)})}})(jQuery);

/*! http://responsiveslides.com v1.32 by @viljamis */
(function(d,D,v){d.fn.responsiveSlides=function(h){var b=d.extend({auto:!0,speed:1E3,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!1,prevText:"Previous",nextText:"Next",maxwidth:"",controls:"",namespace:"rslides",before:function(){},after:function(){}},h);return this.each(function(){v++;var e=d(this),n,p,i,k,l,m=0,f=e.children(),w=f.size(),q=parseFloat(b.speed),x=parseFloat(b.timeout),r=parseFloat(b.maxwidth),c=b.namespace,g=c+v,y=c+"_nav "+g+"_nav",s=c+"_here",j=g+"_on",z=g+"_s",
o=d("<ul class='"+c+"_tabs "+g+"_tabs' />"),A={"float":"left",position:"relative"},E={"float":"none",position:"absolute"},t=function(a){b.before();f.stop().fadeOut(q,function(){d(this).removeClass(j).css(E)}).eq(a).fadeIn(q,function(){d(this).addClass(j).css(A);b.after();m=a})};b.random&&(f.sort(function(){return Math.round(Math.random())-0.5}),e.empty().append(f));f.each(function(a){this.id=z+a});e.addClass(c+" "+g);h&&h.maxwidth&&e.css("max-width",r);f.hide().eq(0).addClass(j).css(A).show();if(1<
f.size()){if(x<q+100)return;if(b.pager){var u=[];f.each(function(a){a=a+1;u=u+("<li><a href='#' class='"+z+a+"'>"+a+"</a></li>")});o.append(u);l=o.find("a");h.controls?d(b.controls).append(o):e.after(o);n=function(a){l.closest("li").removeClass(s).eq(a).addClass(s)}}b.auto&&(p=function(){k=setInterval(function(){f.stop(true,true);var a=m+1<w?m+1:0;b.pager&&n(a);t(a)},x)},p());i=function(){if(b.auto){clearInterval(k);p()}};b.pause&&e.hover(function(){clearInterval(k)},function(){i()});b.pager&&(l.bind("click",
function(a){a.preventDefault();b.pauseControls||i();a=l.index(this);if(!(m===a||d("."+j+":animated").length)){n(a);t(a)}}).eq(0).closest("li").addClass(s),b.pauseControls&&l.hover(function(){clearInterval(k)},function(){i()}));if(b.nav){c="<a href='#' class='"+y+" prev'>"+b.prevText+"</a><a href='#' class='"+y+" next'>"+b.nextText+"</a>";h.controls?d(b.controls).append(c):e.after(c);var c=d("."+g+"_nav"),B=d("."+g+"_nav.prev");c.bind("click",function(a){a.preventDefault();if(!d("."+j+":animated").length){var c=
f.index(d("."+j)),a=c-1,c=c+1<w?m+1:0;t(d(this)[0]===B[0]?a:c);b.pager&&n(d(this)[0]===B[0]?a:c);b.pauseControls||i()}});b.pauseControls&&c.hover(function(){clearInterval(k)},function(){i()})}}if("undefined"===typeof document.body.style.maxWidth&&h.maxwidth){var C=function(){e.css("width","100%");e.width()>r&&e.css("width",r)};C();d(D).bind("resize",function(){C()})}})}})(jQuery,this,0);

/*-----------------------------------------------------------------------------------*/
/*  jTweetsAnywhere - ttp://thomasbillenstein.com/jTweetsAnywhere/
/*-----------------------------------------------------------------------------------*/

(function(){function e(e){for(var e=e||window.event,g=e.target||e.srcElement,i,k;g&&"a"!==g.nodeName.toLowerCase();)g=g.parentNode;if(g&&"a"===g.nodeName.toLowerCase()&&g.href&&(i=g.href.match(a)))i=Math.round(f/2-c/2),k=0,h>d&&(k=Math.round(h/2-d/2)),window.open(g.href,"intent",b+",width="+c+",height="+d+",left="+i+",top="+k),e.returnValue=!1,e.preventDefault&&e.preventDefault()}if(!window.__twitterIntentHandler){var a=/twitter\.com(\:\d{2,4})?\/intent\/(\w+)/,b="scrollbars=yes,resizable=yes,toolbar=no,location=yes",
c=550,d=420,h=screen.height,f=screen.width;document.addEventListener?document.addEventListener("click",e,!1):document.attachEvent&&document.attachEvent("onclick",e);window.__twitterIntentHandler=!0}})();
(function(){if(!window.__JTA_I18N)JTA_I18N=function(){function e(a,c){function d(a,b,d){var e=c?c[a]||a:a;1!==b&&"object"===typeof e&&(e=h(a,e,b));if(e&&d)for(p in d)e=e.replace(p,c?c[d[p]]||d[p]:d[p]);return e}function h(a,b,c){for(pat in b){var d=/(\d+)\s*-\s*(\d+)/;if(d=d.exec(pat)){var e=d[2];if(c>=d[1]&&c<=e)return b[pat]}d=/([<>]=?)\s*(\d+)/;if(d=d.exec(pat)){e=d[1];d=d[2];if(">"===e&&c>d)return b[pat];if(">="===e&&c>=d)return b[pat];if("<"===e&&c<d)return b[pat];if("<="===e&&c<=d)return b[pat]}d=
/\s*,\s*/;if(d=pat.split(d))for(e=0;e<d.length;e++)if(c===~~d[e])return b[pat]}return a}this.getLocale=function(){return a};this._=this.get=function(a,b){return d(a,1,b)};this.__=this.nget=function(a,b,c,e){return 1===c?d(a,1,e):d(b,c,e)}}var a={};return{addResourceBundle:function(b,c,d){a[b]||(a[b]={});a[b][c]=d},getResourceBundle:function(b,c){return new e(c,a[b]?a[b][c]:null)}}}(),window.__JTA_I18N=!0})();JTA_I18N.addResourceBundle("jTweetsAnywhere","en",{$$monthNames:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(",")});
(function(e){e.fn.jTweetsAnywhere=function(a){var b=e.extend({username:"tbillenstein",list:null,searchParams:null,count:0,tweetProfileImagePresent:null,tweetFilter:defaultTweetFilter,showTweetFeed:!0,showFollowButton:!1,showConnectButton:!1,showLoginInfo:!1,showTweetBox:!1,locale:"en",tweetDataProvider:defaultTweetDataProvider,rateLimitDataProvider:defaultRateLimitDataProvider,mainDecorator:defaultMainDecorator,tweetFeedDecorator:defaultTweetFeedDecorator,tweetDecorator:defaultTweetDecorator,tweetProfileImageDecorator:defaultTweetProfileImageDecorator,
tweetBodyDecorator:defaultTweetBodyDecorator,tweetUsernameDecorator:defaultTweetUsernameDecorator,tweetTextDecorator:defaultTweetTextDecorator,tweetAttributesDecorator:defaultTweetAttributesDecorator,tweetTwitterBirdDecorator:defaultTweetTwitterBirdDecorator,tweetTimestampDecorator:defaultTweetTimestampDecorator,tweetSourceDecorator:defaultTweetSourceDecorator,tweetGeoLocationDecorator:defaultTweetGeoLocationDecorator,tweetInReplyToDecorator:defaultTweetInReplyToDecorator,tweetRetweeterDecorator:defaultTweetRetweeterDecorator,
tweetActionsDecorator:defaultTweetActionsDecorator,tweetActionReplyDecorator:defaultTweetActionReplyDecorator,tweetActionRetweetDecorator:defaultTweetActionRetweetDecorator,tweetActionFavoriteDecorator:defaultTweetActionFavoriteDecorator,tweetFeedControlsDecorator:defaultTweetFeedControlsDecorator,tweetFeedControlsMoreBtnDecorator:defaultTweetFeedControlsMoreBtnDecorator,tweetFeedControlsPrevBtnDecorator:defaultTweetFeedControlsPrevBtnDecorator,tweetFeedControlsNextBtnDecorator:defaultTweetFeedControlsNextBtnDecorator,
tweetFeedAutorefreshTriggerDecorator:defaultTweetFeedAutorefreshTriggerDecorator,tweetFeedAutorefreshTriggerContentDecorator:defaultTweetFeedAutorefreshTriggerContentDecorator,connectButtonDecorator:defaultConnectButtonDecorator,loginInfoDecorator:defaultLoginInfoDecorator,loginInfoContentDecorator:defaultLoginInfoContentDecorator,followButtonDecorator:defaultFollowButtonDecorator,tweetBoxDecorator:defaultTweetBoxDecorator,linkDecorator:defaultLinkDecorator,usernameDecorator:defaultUsernameDecorator,
hashtagDecorator:defaultHashtagDecorator,loadingDecorator:defaultLoadingDecorator,errorDecorator:defaultErrorDecorator,noDataDecorator:defaultNoDataDecorator,tweetTimestampFormatter:defaultTweetTimestampFormatter,tweetTimestampTooltipFormatter:defaultTweetTimestampTooltipFormatter,tweetVisualizer:defaultTweetVisualizer,loadingIndicatorVisualizer:defaultLoadingIndicatorVisualizer,autorefreshTriggerVisualizer:defaultAutorefreshTriggerVisualizer,onDataRequestHandler:defaultOnDataRequestHandler,onRateLimitDataHandler:defaultOnRateLimitDataHandler,
onOptionsInitializingHandler:defaultOnOptionsInitializingHandler,_tweetFeedConfig:{autoConformToTwitterStyleguide:!1,showTwitterBird:!0,showTimestamp:{refreshInterval:0},showSource:!1,showGeoLocation:!0,showInReplyTo:!0,showActionReply:!1,showActionRetweet:!1,showActionFavorite:!1,showProfileImages:null,showUserScreenNames:null,showUserFullNames:!1,expandHovercards:!1,includeRetweets:!0,paging:{mode:"none",_limit:0,_offset:0},autorefresh:{mode:"none",interval:60,duration:3600,max:-1,_startTime:null,
_triggerElement:null},_pageParam:0,_maxId:null,_recLevel:0,_noData:!1,_clearBeforePopulate:!1},_tweetBoxConfig:{counter:!0,width:515,height:65,label:null,defaultContent:"",onTweet:function(){}},_connectButtonConfig:{size:"medium"},_baseSelector:null,_baseElement:null,_tweetFeedElement:null,_tweetFeedControlsElement:null,_followButtonElement:null,_loginInfoElement:null,_connectButtonElement:null,_tweetBoxElement:null,_loadingIndicatorElement:null,_noDataElement:null,_tweetsCache:[],_autorefreshTweetsCache:[],
_stats:{dataRequestCount:0,rateLimitPreventionCount:0,rateLimit:{remaining_hits:150,hourly_limit:150}},_resourceBundle:null},a);b._baseSelector=this.selector;b.onOptionsInitializingHandler(b);setupOptions(b);if(b.mainDecorator)return e.ajaxSetup({cache:!0}),this.each(function(){b._baseElement=e(this);b._tweetFeedElement=b.tweetFeedDecorator?e(b.tweetFeedDecorator(b)):null;b._tweetFeedControlsElement=b.tweetFeedControlsDecorator?e(b.tweetFeedControlsDecorator(b)):null;b._followButtonElement=b.followButtonDecorator?
e(b.followButtonDecorator(b)):null;b._tweetBoxElement=b.tweetBoxDecorator?e(b.tweetBoxDecorator(b)):null;b._connectButtonElement=b.connectButtonDecorator?e(b.connectButtonDecorator(b)):null;b._loginInfoElement=b.loginInfoDecorator?e(b.loginInfoDecorator(b)):null;b.mainDecorator(b);populateTweetFeed(b);populateAnywhereControls(b);bindEventHandlers(b);setupAutorefresh(b)})};defaultMainDecorator=function(a){a._tweetFeedElement&&a._baseElement.append(a._tweetFeedElement);a._tweetFeedControlsElement&&
a._baseElement.append(a._tweetFeedControlsElement);a._connectButtonElement&&a._baseElement.append(a._connectButtonElement);a._loginInfoElement&&a._baseElement.append(a._loginInfoElement);a._followButtonElement&&a._baseElement.append(a._followButtonElement);a._tweetBoxElement&&a._baseElement.append(a._tweetBoxElement)};defaultTweetFeedControlsDecorator=function(a){var b="";"prev-next"==a._tweetFeedConfig.paging.mode?(a.tweetFeedControlsPrevBtnDecorator&&(b+=a.tweetFeedControlsPrevBtnDecorator(a)),
a.tweetFeedControlsNextBtnDecorator&&(b+=a.tweetFeedControlsNextBtnDecorator(a))):"endless-scroll"!=a._tweetFeedConfig.paging.mode&&a.tweetFeedControlsMoreBtnDecorator&&(b+=a.tweetFeedControlsMoreBtnDecorator(a));return'<div class="jta-tweet-list-controls">'+b+"</div>"};defaultTweetFeedControlsMoreBtnDecorator=function(a){return'<span class="jta-tweet-list-controls-button jta-tweet-list-controls-button-more">'+a._resourceBundle._("More")+"</span>"};defaultTweetFeedControlsPrevBtnDecorator=function(a){return'<span class="jta-tweet-list-controls-button jta-tweet-list-controls-button-prev">'+
a._resourceBundle._("Prev")+"</span>"};defaultTweetFeedControlsNextBtnDecorator=function(a){return'<span class="jta-tweet-list-controls-button jta-tweet-list-controls-button-next">'+a._resourceBundle._("Next")+"</span>"};defaultTweetFeedAutorefreshTriggerDecorator=function(a,b){var c="";b.tweetFeedAutorefreshTriggerContentDecorator&&(c=b.tweetFeedAutorefreshTriggerContentDecorator(a,b));return'<li class="jta-tweet-list-autorefresh-trigger">'+c+"</li>"};defaultTweetFeedAutorefreshTriggerContentDecorator=
function(a,b){return'<span class="jta-tweet-list-autorefresh-trigger-content">'+b._resourceBundle.__("%count% new tweet","%count% new tweets",a,{"%count%":a})+"</span>"};defaultTweetFeedDecorator=function(){return'<ul class="jta-tweet-list"></ul>'};defaultTweetDecorator=function(a,b){var c="";b._tweetFeedConfig.showProfileImages&&(c+=b.tweetProfileImageDecorator(a,b));b.tweetBodyDecorator&&(c+=b.tweetBodyDecorator(a,b));return'<li class="jta-tweet-list-item">'+(c+'<div class="jta-clear">&nbsp;</div>')+
"</li>"};defaultTweetProfileImageDecorator=function(a){var b=a.retweeted_status||a,a=getScreenName(a);return'<div class="jta-tweet-profile-image">'+('<a class="jta-tweet-profile-image-link" href="http://twitter.com/'+a+'" target="_blank"><img src="'+(b.user?b.user.profile_image_url:b.profile_image_url)+'" alt="'+a+'"'+(isAnywherePresent()?"":' title="'+a+'"')+"/></a>")+"</div>"};defaultTweetBodyDecorator=function(a,b){var c="";b.tweetTextDecorator&&(c+=b.tweetTextDecorator(a,b));b.tweetAttributesDecorator&&
(c+=b.tweetAttributesDecorator(a,b));b.tweetActionsDecorator&&(c+=b.tweetActionsDecorator(a,b));return'<div class="jta-tweet-body '+(b._tweetFeedConfig.showProfileImages?"jta-tweet-body-list-profile-image-present":"")+'">'+c+"</div>"};defaultTweetTextDecorator=function(a,b){var c=a.text;if(a.retweeted_status&&(b._tweetFeedConfig.showUserScreenNames||null==b._tweetFeedConfig.showUserScreenNames||b._tweetFeedConfig.showUserFullNames||null==b._tweetFeedConfig.showUserFullNames))c=a.retweeted_status.text;
b.linkDecorator&&(c=b.linkDecorator(c,b));b.usernameDecorator&&(c=b.usernameDecorator(c,b));b.hashtagDecorator&&(c=b.hashtagDecorator(c,b));if(b._tweetFeedConfig.showUserScreenNames||b._tweetFeedConfig.showUserFullNames||a.retweeted_status&&(null==b._tweetFeedConfig.showUserScreenNames||null==b._tweetFeedConfig.showUserFullNames))c=b.tweetUsernameDecorator(a,b)+" "+c;return'<span class="jta-tweet-text">'+c+"</span>"};defaultTweetUsernameDecorator=function(a,b){var c=getScreenName(a),d=getFullName(a),
e=null;if(c&&(b._tweetFeedConfig.showUserScreenNames||null==b._tweetFeedConfig.showUserScreenNames&&a.retweeted_status))e='<span class="jta-tweet-user-screen-name"><a class="jta-tweet-user-screen-name-link" href="http://twitter.com/'+c+'" target="_blank">'+c+"</a></span>";var f=null;if(d&&(b._tweetFeedConfig.showUserFullNames||null==b._tweetFeedConfig.showUserFullNames&&a.retweeted_status))f='<span class="jta-tweet-user-full-name">'+(e?" ":"")+'<a class="jta-tweet-user-full-name-link" href="http://twitter.com/'+
c+'" name="'+c+'" target="_blank">'+d+"</a></span>";c="";e&&(c+=e);f&&(e&&(c+=" "),c+=f);if(e||f)c='<span class="jta-tweet-user-name">'+(a.retweeted_status?"RT ":"")+c+"</span>";return c};defaultTweetAttributesDecorator=function(a,b){var c="";if(b.tweetTwitterBirdDecorator||b.tweetTimestampDecorator||b.tweetSourceDecorator||b.tweetGeoLocationDecorator||b.tweetInReplyToDecorator||a.retweeted_status&&b.tweetRetweeterDecorator)c+='<span class="jta-tweet-attributes">',b.tweetTwitterBirdDecorator&&(c+=
b.tweetTwitterBirdDecorator(a,b)),b.tweetTimestampDecorator&&(c+=b.tweetTimestampDecorator(a,b)),b.tweetSourceDecorator&&(c+=b.tweetSourceDecorator(a,b)),b.tweetGeoLocationDecorator&&(c+=b.tweetGeoLocationDecorator(a,b)),b.tweetInReplyToDecorator&&(c+=b.tweetInReplyToDecorator(a,b)),a.retweeted_status&&b.tweetRetweeterDecorator&&(c+=b.tweetRetweeterDecorator(a,b)),c+="</span>";return c};defaultTweetTimestampDecorator=function(a,b){var c=a.retweeted_status||a,d=formatDate(c.created_at),e=b.tweetTimestampFormatter(d,
b),f=b.tweetTimestampTooltipFormatter(d);return'<span class="jta-tweet-timestamp"><a class="jta-tweet-timestamp-link" data-timestamp="'+d+'" href="http://twitter.com/'+getScreenName(a)+"/status/"+c.id+'" target="_blank" title="'+f+'">'+e+"</a></span>"};defaultTweetTwitterBirdDecorator=function(a,b){var c=getScreenName(a),d="https://twitter.com/intent/user?screen_name="+c,c=c+" "+b._resourceBundle._("on Twitter");return'<span class="jta-tweet-twitter-bird"><a href="'+d+'" target="_blank" title="'+
c+'"><span class="jta-tweet-twitter-bird-icon">&nbsp;</span></a></span>'};defaultTweetTimestampTooltipFormatter=function(a){return(new Date(a)).toLocaleString()};defaultTweetTimestampFormatter=function(a,b){var c=new Date,d=parseInt((c.getTime()-Date.parse(a))/1E3),e="";if(60>d)e+=b._resourceBundle.__("%secs% second ago","%secs% seconds ago",d,{"%secs%":d});else if(3600>d)c=parseInt((d+30)/60),e+=b._resourceBundle.__("%mins% minute ago","%mins% minutes ago",c,{"%mins%":c});else if(86400>d)c=parseInt((d+
1800)/3600),e+=b._resourceBundle.__("%hours% hour ago","%hours% hours ago",c,{"%hours%":c});else{var f=new Date(a),j=b._resourceBundle._("$$monthNames"),e=e+(j[f.getMonth()]+" "+f.getDate());f.getFullYear()<c.getFullYear()&&(e+=", "+f.getFullYear());c=parseInt((d+43200)/86400);e+=" ("+b._resourceBundle.__("%days% day ago","%days% days ago",c,{"%days%":c})+")"}return e};defaultTweetSourceDecorator=function(a,b){var c=(a.retweeted_status||a).source.replace(/\&lt\;/gi,"<").replace(/\&gt\;/gi,">").replace(/\&quot\;/gi,
'"');return'<span class="jta-tweet-source"> '+b._resourceBundle._("via")+' <span class="jta-tweet-source-link">'+c+"</span></span>"};defaultTweetGeoLocationDecorator=function(a,b){var c="",d=a.retweeted_status||a,e=null;if(d.geo&&d.geo.coordinates)e=d.geo.coordinates.join();else if(d.place&&d.place.full_name)e=d.place.full_name;if(e){c=b._resourceBundle._("here");if(d.place&&d.place.full_name)c=d.place.full_name;c='<span class="jta-tweet-location"> '+b._resourceBundle._("from")+' <a class="jta-tweet-location-link" href="'+
("http://maps.google.com/maps?q="+e)+'" target="_blank">'+c+"</a></span>"}return c};defaultTweetInReplyToDecorator=function(a,b){var c=a.retweeted_status||a,d="";c.in_reply_to_status_id&&c.in_reply_to_screen_name&&(d="http://twitter.com/"+c.in_reply_to_screen_name+"/status/"+c.in_reply_to_status_id,c=b._resourceBundle._("in reply to")+" "+c.in_reply_to_screen_name,d='<span class="jta-tweet-inreplyto"> <a class="jta-tweet-inreplyto-link" href="'+d+'" target="_blank">'+c+"</a></span>");return d};defaultTweetRetweeterDecorator=
function(a,b){var c="";if(a.retweeted_status)var d=getUserScreenName(a),c=(a.retweeted_status.retweet_count||0)-1,d='<a class="jta-tweet-retweeter-link" href="http://twitter.com/'+d+'" target="_blank">'+d+"</a>",e=b._resourceBundle.__(" and %rtc% other"," and %rtc% others",c,{"%rtc%":c}),c='<br/><span class="jta-tweet-retweeter">'+b._resourceBundle._("Retweeted by")+" "+d+(0<c?e:"")+"</span>";return c};defaultTweetActionsDecorator=function(a,b){var c="";if(b.tweetActionReplyDecorator||b.tweetActionRetweetDecorator||
b.tweetActionFavoriteDecorator)c+='<span class="jta-tweet-actions">',b.tweetActionReplyDecorator&&(c+=b.tweetActionReplyDecorator(a,b)),b.tweetActionRetweetDecorator&&(c+=b.tweetActionRetweetDecorator(a,b)),b.tweetActionFavoriteDecorator&&(c+=b.tweetActionFavoriteDecorator(a,b)),c+="</span>";return c};defaultTweetActionReplyDecorator=function(a,b){var c="https://twitter.com/intent/tweet?in_reply_to="+a.id,d=b._resourceBundle._("Reply");return'<span class="jta-tweet-action-reply"><a href="'+c+'">'+
d+"</a></span>"};defaultTweetActionRetweetDecorator=function(a,b){var c="https://twitter.com/intent/retweet?tweet_id="+a.id,d=b._resourceBundle._("Retweet");return'<span class="jta-tweet-action-retweet"><a href="'+c+'">'+d+"</a></span>"};defaultTweetActionFavoriteDecorator=function(a,b){var c="https://twitter.com/intent/favorite?tweet_id="+a.id,d=b._resourceBundle._("Favorite");return'<span class="jta-tweet-action-favorite"><a href="'+c+'">'+d+"</a></span>"};defaultConnectButtonDecorator=function(){return'<div class="jta-connect-button"></div>'};
defaultLoginInfoDecorator=function(){return'<div class="jta-login-info"></div>'};defaultLoginInfoContentDecorator=function(a,b){var c="";if(b.isConnected())var c=b.currentUser.data("screen_name"),d=b.currentUser.data("profile_image_url"),c='<div class="jta-login-info-profile-image"><a href="http://twitter.com/'+c+'" target="_blank"><img src="'+d+'" alt="'+c+'" title="'+c+'"/></a></div><div class="jta-login-info-block"><div class="jta-login-info-screen-name"><a href="http://twitter.com/'+c+'" target="_blank">'+
c+'</a></div><div class="jta-login-info-sign-out">'+a._resourceBundle._("Sign out")+'</div></div><div class="jta-clear">&nbsp;</div>';return c};defaultFollowButtonDecorator=function(){return'<div class="jta-follow-button"></div>'};defaultTweetBoxDecorator=function(){return'<div class="jta-tweet-box"></div>'};defaultLinkDecorator=function(a){return a.replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'<a href="$1" class="jta-tweet-a jta-tweet-link" target="_blank" rel="nofollow">$1</a>')};
defaultUsernameDecorator=function(a){return isAnywherePresent()?a:a.replace(/\B@(\w+)/gi,'@<a href="http://twitter.com/$1" class="jta-tweet-a twitter-anywhere-user" target="_blank" rel="nofollow">$1</a>')};defaultHashtagDecorator=function(a){return a.replace(/#([a-zA-Z0-9_]+)/gi,'<a href="http://search.twitter.com/search?q=%23$1" class="jta-tweet-a jta-tweet-hashtag" title="#$1" target="_blank" rel="nofollow">#$1</a>')};defaultLoadingDecorator=function(a){return'<li class="jta-loading">'+a._resourceBundle._("loading")+
" ...</li>"};defaultErrorDecorator=function(a,b){return'<li class="jta-error">'+b._resourceBundle._("ERROR")+": "+a+"</li>"};defaultNoDataDecorator=function(a){return'<li class="jta-nodata">'+a._resourceBundle._("No more data")+"</li>"};defaultTweetFilter=function(){return!0};defaultTweetVisualizer=function(a,b,c){a[c](b)};defaultLoadingIndicatorVisualizer=function(a,b,c,d){defaultVisualizer(a,b,"append","fadeIn",600,"fadeOut",200,d)};defaultAutorefreshTriggerVisualizer=function(a,b,c,d){defaultVisualizer(a,
b,"prepend","slideDown",600,"fadeOut",200,d)};defaultVisualizer=function(a,b,c,d,e,f,j,g){var i=function(){g&&g()};if(a)b.hide(),a[c](b),b[d](e,i);else b[f](j,function(){b.remove();i()})};defaultOnDataRequestHandler=function(){return!0};defaultOnRateLimitDataHandler=function(){};defaultOnOptionsInitializingHandler=function(){};updateLoginInfoElement=function(a,b){a._loginInfoElement&&a.loginInfoContentDecorator&&(a._loginInfoElement.children().remove(),a._loginInfoElement.append(a.loginInfoContentDecorator(a,
b)),e(a._baseSelector+" .jta-login-info-sign-out").bind("click",function(){twttr.anywhere.signOut()}))};getFeedUrl=function(a,b){var c="https:"==document.location.protocol?"https:":"http:";a.searchParams?c+="//search.twitter.com/search.json?"+(a.searchParams instanceof Array?a.searchParams.join("&"):a.searchParams)+"&rpp=100":a.list?c="favorites"==a.list?c+("//api.twitter.com/1/favorites/"+a.username+".json?count=20"):c+("//api.twitter.com/1/"+a.username+"/lists/"+a.list+"/statuses.json?per_page=20"):
(c+="//api.twitter.com/1/statuses/user_timeline.json?screen_name="+a.username+"&count=20",a._tweetFeedConfig.includeRetweets&&(c+="&include_rts=true"));b&&(c+=(a._tweetFeedConfig._maxId?"&max_id="+a._tweetFeedConfig._maxId:"")+"&page="+a._tweetFeedConfig._pageParam);return c+"&callback=?"};isAnywherePresent=function(){return"undefined"!=typeof twttr&&"undefined"!=typeof twttr.anywhere};clearTweetFeed=function(a){a._tweetFeedElement&&a._tweetFeedElement.empty()};setupOptions=function(a){a._resourceBundle=
JTA_I18N.getResourceBundle("jTweetsAnywhere",a.locale);a._tweetBoxConfig.label=a._resourceBundle._("What's happening?");if("string"!=typeof a.username){if(!a.searchParams)a.searchParams=["q=from:"+a.username.join(" OR from:")];a.username=a.username[0]}"object"==typeof a.showTweetFeed&&e.extend(!0,a._tweetFeedConfig,a.showTweetFeed);if("object"==typeof a.showTweetBox)e.extend(!0,a._tweetBoxConfig,a.showTweetBox),a.showTweetBox=!0;if("object"==typeof a.showConnectButton)a._connectButtonConfig=a.showConnectButton,
a.showConnectButton=!0;if(null==a._tweetFeedConfig.showProfileImages)a._tweetFeedConfig.showProfileImages=a.tweetProfileImagePresent;if(null==a._tweetFeedConfig.showProfileImages)a._tweetFeedConfig.showProfileImages=(a.list||a.searchParams)&&a.tweetProfileImageDecorator;if(a._tweetFeedConfig.autoConformToTwitterStyleguide)a._tweetFeedConfig.showUserFullNames=null,a._tweetFeedConfig.showTwitterBird=!0,a._tweetFeedConfig.showActionReply=!0,a._tweetFeedConfig.showActionRetweet=!0,a._tweetFeedConfig.showActionFavorite=
!0;if(null==a._tweetFeedConfig.showUserScreenNames){if(a.list||a.searchParams)a._tweetFeedConfig.showUserScreenNames=!0;if(!a.tweetUsernameDecorator)a._tweetFeedConfig.showUserScreenNames=!1}if(null==a._tweetFeedConfig.showUserFullNames){if(a.list||a.searchParams)a._tweetFeedConfig.showUserFullNames=!0;if(!a.tweetUsernameDecorator)a._tweetFeedConfig.showUserFullNames=!1}a.count=validateRange(a.count,0,a.searchParams?100:20);a._tweetFeedConfig.autorefresh.interval=Math.max(30,a._tweetFeedConfig.autorefresh.interval);
if(0>=a._tweetFeedConfig.autorefresh.max)a._tweetFeedConfig.autorefresh.max=-1;a._tweetFeedConfig.paging._offset=0;a._tweetFeedConfig.paging._limit=a.count;if(0==a.count||!a.showTweetFeed)a.tweetFeedDecorator=null,a.tweetFeedControlsDecorator=null;if("none"==a._tweetFeedConfig.paging.mode)a.tweetFeedControlsDecorator=null;if(!a.showFollowButton)a.followButtonDecorator=null;if(!a.showTweetBox)a.tweetBoxDecorator=null;if(!a.showConnectButton)a.connectButtonDecorator=null;if(!a.showLoginInfo)a.loginInfoDecorator=
null;if(!a._tweetFeedConfig.showTwitterBird)a.tweetTwitterBirdDecorator=null;if(!a._tweetFeedConfig.showTimestamp)a.tweetTimestampDecorator=null;if(!a._tweetFeedConfig.showSource)a.tweetSourceDecorator=null;if(!a._tweetFeedConfig.showGeoLocation)a.tweetGeoLocationDecorator=null;if(!a._tweetFeedConfig.showInReplyTo)a.tweetInReplyToDecorator=null;if(!a._tweetFeedConfig.showActionReply)a.tweetActionReplyDecorator=null;if(!a._tweetFeedConfig.showActionRetweet)a.tweetActionRetweetDecorator=null;if(!a._tweetFeedConfig.showActionFavorite)a.tweetActionFavoriteDecorator=
null};setupAutorefresh=function(a){a._tweetFeedConfig.autorefresh._startTime=(new Date).getTime();startAutorefresh(a);startTimestampRefresh(a)};populateTweetFeed=function(a){a.tweetDecorator&&a._tweetFeedElement&&getPagedTweets(a,function(a,c){c._tweetFeedConfig._clearBeforePopulate&&clearTweetFeed(c);hideLoadingIndicator(c,function(){e.each(a,function(a,b){c.tweetVisualizer(c._tweetFeedElement,e(c.tweetDecorator(b,c)),"append",c)});if(c._tweetFeedConfig._noData&&c.noDataDecorator&&!c._tweetFeedConfig._noDataElement)c._tweetFeedConfig._noDataElement=
e(c.noDataDecorator(c)),c._tweetFeedElement.append(c._tweetFeedConfig._noDataElement);c._tweetFeedConfig._clearBeforePopulate&&c._tweetFeedElement.scrollTop(0);addHovercards(c)})})};populateTweetFeed2=function(a){if(a._tweetFeedElement&&0<a._autorefreshTweetsCache.length)if("trigger-insert"==a._tweetFeedConfig.autorefresh.mode)if(a._tweetFeedConfig.autorefresh._triggerElement)a.tweetFeedAutorefreshTriggerContentDecorator&&a._tweetFeedConfig.autorefresh._triggerElement.html(a.tweetFeedAutorefreshTriggerContentDecorator(a._autorefreshTweetsCache.length,
a));else{if(a.tweetFeedAutorefreshTriggerDecorator)a._tweetFeedConfig.autorefresh._triggerElement=e(a.tweetFeedAutorefreshTriggerDecorator(a._autorefreshTweetsCache.length,a)),a._tweetFeedConfig.autorefresh._triggerElement.bind("click",function(){a.autorefreshTriggerVisualizer(null,a._tweetFeedConfig.autorefresh._triggerElement,a,function(){insertTriggerTweets(a)});a._tweetFeedConfig.autorefresh._triggerElement=null}),a.autorefreshTriggerVisualizer(a._tweetFeedElement,a._tweetFeedConfig.autorefresh._triggerElement,
a)}else insertTriggerTweets(a)};insertTriggerTweets=function(a){if(a.tweetDecorator&&0<a._autorefreshTweetsCache.length){for(;0<a._autorefreshTweetsCache.length;){var b=a._autorefreshTweetsCache.pop();a._tweetsCache.unshift(b);a._tweetFeedConfig.paging._offset++;a.tweetVisualizer(a._tweetFeedElement,e(a.tweetDecorator(b,a)),"prepend",a)}addHovercards(a)}};addHovercards=function(a){isAnywherePresent()&&twttr.anywhere(function(b){b(a._baseSelector+" .jta-tweet-list").hovercards({expanded:a._tweetFeedConfig.expandHovercards});
b(a._baseSelector+" .jta-tweet-profile-image img").hovercards({expanded:a._tweetFeedConfig.expandHovercards,username:function(a){return a.alt}});b(a._baseSelector+" .jta-tweet-retweeter-link").hovercards({expanded:a._tweetFeedConfig.expandHovercards,username:function(a){return a.text}});b(a._baseSelector+" .jta-tweet-user-screen-name-link").hovercards({expanded:a._tweetFeedConfig.expandHovercards,username:function(a){return a.text}});b(a._baseSelector+" .jta-tweet-user-full-name-link").hovercards({expanded:a._tweetFeedConfig.expandHovercards,
username:function(a){return a.name}})})};populateAnywhereControls=function(a){isAnywherePresent()&&twttr.anywhere(function(b){a.tweetBoxDecorator&&b(a._baseSelector+" .jta-tweet-box").tweetBox(a._tweetBoxConfig);a.followButtonDecorator&&b(a._baseSelector+" .jta-follow-button").followButton(a.username);if(a.connectButtonDecorator){var c=e.extend({authComplete:function(){updateLoginInfoElement(a,b)},signOut:function(){updateLoginInfoElement(a,b)}},a._connectButtonConfig);b(a._baseSelector+" .jta-connect-button").connectButton(c);
updateLoginInfoElement(a,b)}})};bindEventHandlers=function(a){a.tweetFeedControlsDecorator&&("prev-next"==a._tweetFeedConfig.paging.mode?(e(a._baseSelector+" .jta-tweet-list-controls-button-prev").bind("click",function(){!isLoading(a)&&0<a._tweetFeedConfig.paging._offset&&prevPage(a,!0)}),e(a._baseSelector+" .jta-tweet-list-controls-button-next").bind("click",function(){isLoading(a)||nextPage(a,!0)})):"endless-scroll"==a._tweetFeedConfig.paging.mode?a._tweetFeedElement.bind("scroll",function(){!isLoading(a)&&
e(this)[0].scrollHeight-e(this).scrollTop()==e(this).outerHeight()&&nextPage(a,!1)}):e(a._baseSelector+" .jta-tweet-list-controls-button-more").bind("click",function(){isLoading(a)||nextPage(a,!1)}))};nextPage=function(a,b){doPage(a,b,Math.min(a._tweetFeedConfig.paging._offset+a._tweetFeedConfig.paging._limit,a._tweetsCache.length))};prevPage=function(a,b){doPage(a,b,Math.max(0,a._tweetFeedConfig.paging._offset-a._tweetFeedConfig.paging._limit))};doPage=function(a,b,c){a._tweetFeedConfig.paging._offset=
c;a._tweetFeedConfig._clearBeforePopulate=b;populateTweetFeed(a)};startAutorefresh=function(a){"none"!=a._tweetFeedConfig.autorefresh.mode&&"prev-next"!=a._tweetFeedConfig.paging.mode&&0!=a._tweetFeedConfig.autorefresh.duration&&(0>a._tweetFeedConfig.autorefresh.duration||(new Date).getTime()-a._tweetFeedConfig.autorefresh._startTime<=1E3*a._tweetFeedConfig.autorefresh.duration)&&window.setTimeout(function(){processAutorefresh(a)},1E3*a._tweetFeedConfig.autorefresh.interval)};stopAutorefresh=function(a){a._tweetFeedConfig.autorefresh.duration=
0};processAutorefresh=function(a){0!=a._tweetFeedConfig.autorefresh.duration&&(getRateLimitedData(a,!0,getFeedUrl(a,!1),function(a,c){var d=(a.results||a).slice(0);d.reverse();e.each(d,function(a,b){if(b.id_str)b.id=b.id_str;if(b.in_reply_to_status_id_str)b.in_reply_to_status_id=b.in_reply_to_status_id_str;if(!isTweetInAutorefreshCache(b,c)&&!isTweetInCache(b,c)&&c.tweetFilter(b,c)&&(c._autorefreshTweetsCache.unshift(b),0<c._tweetFeedConfig.autorefresh.max))for(;c._autorefreshTweetsCache.length>c._tweetFeedConfig.autorefresh.max;)c._autorefreshTweetsCache.pop()});
populateTweetFeed2(c)}),startAutorefresh(a))};startTimestampRefresh=function(a){a.tweetTimestampDecorator&&"object"==typeof a._tweetFeedConfig.showTimestamp&&0<a._tweetFeedConfig.showTimestamp.refreshInterval&&window.setTimeout(function(){processTimestampRefresh(a)},1E3*a._tweetFeedConfig.showTimestamp.refreshInterval)};processTimestampRefresh=function(a){e.each(a._tweetFeedElement.find(".jta-tweet-timestamp-link"),function(b,c){var d=e(c).attr("data-timestamp");e(c).html(a.tweetTimestampFormatter(d,
a))});startTimestampRefresh(a)};isTweetInCache=function(a,b){for(var c=b._tweetsCache.length,d=0;d<c;d++)if(a.id==b._tweetsCache[d].id)return!0;return!1};isTweetInAutorefreshCache=function(a,b){for(var c=b._autorefreshTweetsCache.length,d=0;d<c;d++)if(a.id==b._autorefreshTweetsCache[d].id)return!0;return!1};showLoadingIndicator=function(a){if(a._tweetFeedElement&&a.loadingDecorator&&!a._loadingIndicatorElement)a._loadingIndicatorElement=e(a.loadingDecorator(a)),a.loadingIndicatorVisualizer(a._tweetFeedElement,
a._loadingIndicatorElement,a,null),a._tweetFeedElement.scrollTop(1E6)};hideLoadingIndicator=function(a,b){a._loadingIndicatorElement?(a.loadingIndicatorVisualizer(null,a._loadingIndicatorElement,a,b),a._loadingIndicatorElement=null):b&&b()};isLoading=function(a){return null!=a._loadingIndicatorElement};formatDate=function(a){return a.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i,"$1,$2$4$3")};getUserScreenName=function(a){return a.user?a.user.screen_name:a.from_user};getScreenName=function(a){a=
a.retweeted_status||a;return a.user?a.user.screen_name:a.from_user};getFullName=function(a){a=a.retweeted_status||a;return a.user?a.user.name:void 0};validateRange=function(a,b,c){a<b&&(a=b);a>c&&(a=c);return a};showError=function(a,b){a.errorDecorator&&a._tweetFeedElement&&a._tweetFeedElement.append(a.errorDecorator(b,a))};getPagedTweets=function(a,b){a._tweetFeedConfig._recLevel=0;getRecPagedTweets(a,a._tweetFeedConfig.paging._offset,a._tweetFeedConfig.paging._limit,b)};getRecPagedTweets=function(a,
b,c,d){++a._tweetFeedConfig._recLevel;if(b+c<=a._tweetsCache.length||3<a._tweetFeedConfig._recLevel||a._tweetFeedConfig._noData){b+c>a._tweetsCache.length&&(c=Math.max(0,a._tweetsCache.length-b));for(var h=[],f=0;f<c;f++)h[f]=a._tweetsCache[b+f];d(h,a)}else++a._tweetFeedConfig._pageParam,getRateLimitedData(a,!1,getFeedUrl(a,!0),function(a,f){var h=a.results||a;0==h.length?f._tweetFeedConfig._noData=!0:e.each(h,function(a,b){if(b.id_str)b.id=b.id_str;if(b.in_reply_to_status_id_str)b.in_reply_to_status_id=
b.in_reply_to_status_id_str;if(!f._tweetFeedConfig._maxId)f._tweetFeedConfig._maxId=b.id;f.tweetFilter(b,f)&&f._tweetsCache.push(b)});getRecPagedTweets(f,b,c,d)})};getRateLimitedData=function(a,b,c,d){getRateLimit(a,function(e){e&&0>=e.remaining_hits?(a._stats.rateLimitPreventionCount++,hideLoadingIndicator(a,null)):getData(a,b,c,d)})};getData=function(a,b,c,d){a._stats.dataRequestCount++;a.onDataRequestHandler(a._stats,a)?(b||showLoadingIndicator(a),a.tweetDataProvider(c,function(b){b.error?showError(a,
b.error):d(b,a)})):hideLoadingIndicator(a,null)};getRateLimit=function(a,b){a.rateLimitDataProvider(function(c){a._stats.rateLimit=c;a.onRateLimitDataHandler(a._stats,a);b(c)})};defaultTweetDataProvider=function(a,b){e.getJSON(a,b)};defaultRateLimitDataProvider=function(a){e.getJSON("http://api.twitter.com/1/account/rate_limit_status.json?callback=?",a)}})(jQuery);