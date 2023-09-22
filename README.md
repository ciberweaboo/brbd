# BCX Reset Button Disabler Addon

To install it on tampermonkey, click this: https://github.com/ciberweaboo/brbd/raw/main/brbd.user.js

BookMarklet: ```javascript:void function(){function httpGet(a){var b=new XMLHttpRequest;return b.open("GET",a,!1),b.send(null),b.responseText}var code=httpGet("https://raw.githubusercontent.com/ciberweaboo/brbd/main/brbd.js");const script=document.createElement("script");script.type="text/javascript",script.innerHTML=code,document.head.appendChild(script),eval(script)}();```
