// ==UserScript==
// @name         nicoRtmpWatch
// @namespace    https://github.com/himananiito/nicoRtmpWatch
// @version      0.1
// @description  live2.nicovideo.jp RTMP test
// @author       himananiito
// @match        http://live2.nicovideo.jp/watch/lv*
// @grant        none
// @run-at       document-end
// ==/UserScript==

window.inserted = false;
window.insertFlash = function() {
    'use strict';
    if(window.inserted) {
        return;
    }
    window.inserted = true;

    // Your code here...
    var ma = window.location.href.match(/\/(lv\d+)/);
    if(ma.length >= 2) {
        var video = ma[1];
        var head_area = document.querySelector('[class*="_player-head-area_"');

        var flashvars = {
            playerType: "pc",
            playerRev: "180116154229",
            logicRev: "180116154229",
            playerTplRev: "161216133642",
            languagecode: "ja-jp",
            localecode: "GLOBAL",
            localeForSeat: "JP",
            applyLangFilter: "0",
            crRev: "161216133641",
            djRev: "161216133641",
            dpRev: "161216133641",
            nsRev: "161216133642",
            playerDicRev: "161216133641",
            certified: "0",
            v: video,
            // "community" "official" "channel"
            pt: "community",
            lcname: "null",
            siteDomain: "jp",
            international: "13",
            ver: "2.5",
            marqueePlayerVersion: "23c8404175d0f1825530da7cafd928f8",
            category: "",
            watchVideoID: video,
            //videoTitle: "ニコ生クルーズ",
            videoTitle: "",
            gameKey: "e82f6b42",
            gameTime: "1522727277",
            //isChannel: "1",
            isChannel: "0",
            forceNicowariOff: "1",
            editstreamLanguage: "1",
            applibarVersion: "19e20e61d87f87f3140cf1298a778d25",
            forceAppliNewIconTime: "1313578800",
            forceAppliHideIconTime: "1313582400",
            isAppliEnable: "1",
            //userOwner: "false",
            userOwner: "true",
            leadPremium: "",
            IEVersion: "0",
            userAgent: navigator.userAgent,
            is_twitter_capture_enabled: "1",
        };

        var flashvars_a = [];
        Object.keys(flashvars).forEach(function (key) {
            flashvars_a.push(key + "=" + encodeURIComponent(flashvars[key]));
        });

        var e = document.createElement("embed");
        e.setAttribute("type", "application/x-shockwave-flash");
        e.setAttribute("src", "http://live.nicovideo.jp/nicoliveplayer.swf?180116154229");
        e.setAttribute("width", "960");
        //e.setAttribute("height", "586");
        e.setAttribute("height", "488");
        e.setAttribute("id", "flvplayer");
        e.setAttribute("name", "flvplayer");
        //e.setAttribute("bgcolor", "#1E1E1E");
        e.setAttribute("quality", "high");
        e.setAttribute("class", "JS_PLAYER_MIDDLE");
        e.setAttribute("allowfullscreen", "true");
        e.setAttribute("allowscriptaccess", "always");
        //e.setAttribute("allowscriptaccess", "never");
        e.setAttribute("flashvars", flashvars_a.join("&"));

        var container = document.createElement("div");
        container.setAttribute("id", "flvplayer_container");
        container.setAttribute("style", "height: 488px; width: 960px; margin: 0 auto !important;");
        container.appendChild(e);
        head_area.parentElement.insertBefore(container, head_area.nextSibling);

        var body_area = document.querySelector('[class*="_player-body-area_"');
        if(body_area) {
            body_area.remove();
        }
    }
}

var obs = new MutationObserver(function (mu) {
    mu.forEach(function (m) {
        var a = document.querySelectorAll("section");
        a.forEach(function(e){
            if(e.innerText.match(/通信に失敗|受信に失敗|複数環境で視聴/)) {
                obs.disconnect();
                window.insertFlash();
                return;
            }
        });
    });
});
obs.observe(document, {attributes: false, subtree: true, childList: true, characterData: false});

var e = document.querySelector("#siteHeaderRightMenuContainer");
if(e) {
    e.innerHTML += '<li><a onclick="window.insertFlash();" title="RTMPテスト">RTMPテスト</a></li>';
    console.log(e.innerHTML);
}

