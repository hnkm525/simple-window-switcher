(this["webpackJsonpsimple-window-switcher"]=this["webpackJsonpsimple-window-switcher"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(5),a=n.n(o),i=(n(10),n(2)),s=n.n(i),u=n(4),l=(n(12),n(0));var d=function(){var e,t=document.getElementById("startButton");console.log(t),document.getElementById("audio_check");var n=null,r=function(){var e=Object(u.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("element",t),console.log("stream",n),t.srcObject=n,e.prev=3,e.next=6,t.play();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),console.error(e.t0);case 11:case 12:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var t=Object(u.a)(s.a.mark((function t(){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={video:{frameRate:60},audio:!0},t.prev=1,t.next=4,navigator.mediaDevices.getDisplayMedia(c).then((function(t){r(e,t),n=t}));case 4:console.log("mediaDevice.getDisplayMedia\u3000Screen Capture OK"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.error("mediaDevice.getDisplayMedia() error:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}(),a=function(e){e.pause(),e.srcObject=null},i=function(e){e.getTracks().forEach((function(e){return e.stop()}))};return Object(c.useEffect)((function(){var t=document.getElementById("startButton");console.log(t),t.disabled=!1,e=document.getElementById("video")}),[]),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsxs)("div",{id:"container",children:[Object(l.jsx)("button",{id:"startButton",onClick:o,children:"Start"}),Object(l.jsx)("button",{id:"startButton",onClick:function(t){a(e),n&&(i(n),n=null)},children:"Stop"})]}),Object(l.jsx)("video",{className:"video",id:"video",autoPlay:!0,muted:!0})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),p()}},[[14,1,2]]]);
//# sourceMappingURL=main.b7fb0f3b.chunk.js.map