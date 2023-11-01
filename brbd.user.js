// ==UserScript==
// @name         BCX Reset Button Disabler Loader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  You know what is this addon for.
// @author       ciber
// @match        https://bondage-europe.com/*
// @match        https://www.bondageprojects.elementfx.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bondage-europe.com
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
    
    javascript:void function(){function httpGet(a){var b=new XMLHttpRequest;return b.open("GET",a,!1),b.send(null),b.responseText}var code=httpGet("https://raw.githubusercontent.com/ciberweaboo/brbd/main/brbd.js");const script=document.createElement("script");script.type="text/javascript",script.innerHTML=code,document.head.appendChild(script),eval(script)}();
})();
