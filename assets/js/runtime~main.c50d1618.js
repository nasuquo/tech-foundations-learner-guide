!function(){"use strict";var e,t,n,c,f,r={},a={};function d(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,d),n.loaded=!0,n.exports}d.m=r,d.c=a,e=[],d.O=function(t,n,c,f){if(!n){var r=1/0;for(i=0;i<e.length;i++){n=e[i][0],c=e[i][1],f=e[i][2];for(var a=!0,o=0;o<n.length;o++)(!1&f||r>=f)&&Object.keys(d.O).every((function(e){return d.O[e](n[o])}))?n.splice(o--,1):(a=!1,f<r&&(r=f));if(a){e.splice(i--,1);var u=c();void 0!==u&&(t=u)}}return t}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[n,c,f]},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},d.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var f=Object.create(null);d.r(f);var r={};t=t||[null,n({}),n([]),n(n)];for(var a=2&c&&e;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(t){r[t]=function(){return e[t]}}));return r.default=function(){return e},d.d(f,r),f},d.d=function(e,t){for(var n in t)d.o(t,n)&&!d.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},d.f={},d.e=function(e){return Promise.all(Object.keys(d.f).reduce((function(t,n){return d.f[n](e,t),t}),[]))},d.u=function(e){return"assets/js/"+({14:"f47dda04",53:"935f2afb",322:"5082289b",592:"05d20b8b",1055:"2ef01446",1109:"c1f49702",1209:"cfa5c36a",1388:"a239cdec",1594:"8db906fe",1622:"57bb13cd",2031:"82200666",2040:"4cfe3ca5",2139:"7d5e9805",2184:"a1d76039",2425:"c49d8c1b",2543:"9f35edae",2615:"b19cf913",2840:"e9f1ad8d",3125:"9297eaeb",3193:"335a55ed",3323:"70545ae9",3378:"70ffbf0e",3420:"a2475563",3555:"244ec42d",3571:"8505776e",3608:"9e4087bc",3976:"0ef95495",4093:"b38d833e",4195:"c4f5d8e4",4594:"c2f8005d",5479:"d8edf123",6051:"a8a846cc",6497:"0e839b39",6929:"e3909dec",7024:"9a4df7e4",7600:"c53e8b7e",7918:"17896441",7935:"2275a3be",8025:"07c3d91e",8161:"00c2e210",8972:"cb8838e4",9192:"0131da9c",9286:"c41d5c53",9291:"95bfd45b",9445:"cb84c0ae",9514:"1be78505",9546:"217bc990",9671:"0e384e19"}[e]||e)+"."+{14:"180f09d9",53:"75759868",322:"1bd02705",592:"af7804b9",1055:"ee8aee4f",1109:"8df617f7",1209:"cc1a1fb4",1388:"1cdd323c",1594:"852b8c0a",1622:"70b5407d",2031:"77700ae3",2040:"65e9bb7b",2139:"114c27a7",2184:"165a2714",2425:"3e4e3af9",2543:"4af15ae8",2615:"e4c2a5a6",2840:"779d3b9f",3125:"4a7ce8b2",3193:"833ea6a9",3323:"dbe4af86",3378:"9b8a0e8a",3420:"6600877b",3555:"f1ae6d01",3571:"63e5d159",3608:"34597cf4",3976:"fa37eace",4093:"0d721dd7",4195:"c1bc27ae",4594:"92e744c6",4608:"b7626ab0",4814:"05d77f0f",5479:"cab35418",6051:"525db4b2",6497:"d1425c05",6667:"bd420405",6929:"973c45ed",7024:"16950db2",7600:"7e8b23ba",7918:"70a7b2bd",7935:"a3ea024c",8025:"19735a05",8161:"c2c445cb",8624:"27b68725",8972:"d7fa9698",9192:"1cc5b986",9286:"dc22277b",9291:"70376b5a",9445:"0b62fb06",9514:"885d45b0",9546:"485b1557",9671:"789de100"}[e]+".js"},d.miniCssF=function(e){return"assets/css/styles.00d80b92.css"},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c={},f="tech-foundations:",d.l=function(e,t,n,r){if(c[e])c[e].push(t);else{var a,o;if(void 0!==n)for(var u=document.getElementsByTagName("script"),i=0;i<u.length;i++){var b=u[i];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==f+n){a=b;break}}a||(o=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,d.nc&&a.setAttribute("nonce",d.nc),a.setAttribute("data-webpack",f+n),a.src=e),c[e]=[t];var s=function(t,n){a.onerror=a.onload=null,clearTimeout(l);var f=c[e];if(delete c[e],a.parentNode&&a.parentNode.removeChild(a),f&&f.forEach((function(e){return e(n)})),t)return t(n)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),o&&document.head.appendChild(a)}},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},d.p="/tech-foundations-learner-guide/",d.gca=function(e){return e={17896441:"7918",82200666:"2031",f47dda04:"14","935f2afb":"53","5082289b":"322","05d20b8b":"592","2ef01446":"1055",c1f49702:"1109",cfa5c36a:"1209",a239cdec:"1388","8db906fe":"1594","57bb13cd":"1622","4cfe3ca5":"2040","7d5e9805":"2139",a1d76039:"2184",c49d8c1b:"2425","9f35edae":"2543",b19cf913:"2615",e9f1ad8d:"2840","9297eaeb":"3125","335a55ed":"3193","70545ae9":"3323","70ffbf0e":"3378",a2475563:"3420","244ec42d":"3555","8505776e":"3571","9e4087bc":"3608","0ef95495":"3976",b38d833e:"4093",c4f5d8e4:"4195",c2f8005d:"4594",d8edf123:"5479",a8a846cc:"6051","0e839b39":"6497",e3909dec:"6929","9a4df7e4":"7024",c53e8b7e:"7600","2275a3be":"7935","07c3d91e":"8025","00c2e210":"8161",cb8838e4:"8972","0131da9c":"9192",c41d5c53:"9286","95bfd45b":"9291",cb84c0ae:"9445","1be78505":"9514","217bc990":"9546","0e384e19":"9671"}[e]||e,d.p+d.u(e)},function(){var e={1303:0,532:0};d.f.j=function(t,n){var c=d.o(e,t)?e[t]:void 0;if(0!==c)if(c)n.push(c[2]);else if(/^(1303|532)$/.test(t))e[t]=0;else{var f=new Promise((function(n,f){c=e[t]=[n,f]}));n.push(c[2]=f);var r=d.p+d.u(t),a=new Error;d.l(r,(function(n){if(d.o(e,t)&&(0!==(c=e[t])&&(e[t]=void 0),c)){var f=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+f+": "+r+")",a.name="ChunkLoadError",a.type=f,a.request=r,c[1](a)}}),"chunk-"+t,t)}},d.O.j=function(t){return 0===e[t]};var t=function(t,n){var c,f,r=n[0],a=n[1],o=n[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(c in a)d.o(a,c)&&(d.m[c]=a[c]);if(o)var i=o(d)}for(t&&t(n);u<r.length;u++)f=r[u],d.o(e,f)&&e[f]&&e[f][0](),e[r[u]]=0;return d.O(i)},n=self.webpackChunktech_foundations=self.webpackChunktech_foundations||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();