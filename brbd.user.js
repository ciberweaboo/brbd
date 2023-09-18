// ==UserScript==
// @name         BCX Reset Button Disabler Loader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  You know what is this addon for.
// @author       weboos
// @match        https://bondage-europe.com/R96/BondageClub/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bondage-europe.com
// @grant        none
// ==/UserScript==

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

var code = httpGet("https://raw.githubusercontent.com/ciberweaboo/brbd/main/brbd.js")
const script= document.createElement("script")
script.type = "text/javascript"
script.innerHTML = code
document.head.appendChild(script)
eval(script)
