"use strict";(self.webpackChunktech_foundations=self.webpackChunktech_foundations||[]).push([[228],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),y=u(n),d=i,m=y["".concat(s,".").concat(d)]||y[d]||p[d]||o;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=y;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7807:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return y}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),c=["components"],a={sidebar_position:1},s="Encryption",u={unversionedId:"security/user-security/encryption",id:"security/user-security/encryption",isDocsHomePage:!1,title:"Encryption",description:"Summary",source:"@site/docs/security/user-security/encryption.md",sourceDirName:"security/user-security",slug:"/security/user-security/encryption",permalink:"/tech-foundations-learner-guide/docs/security/user-security/encryption",editUrl:"https://github.com/generation-org/tech-foundations/edit/main/docs/security/user-security/encryption.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"securitySidebar",previous:{title:"Passwords",permalink:"/tech-foundations-learner-guide/docs/security/user-security/passwords"}},l=[{value:"Summary",id:"summary",children:[{value:"Objectives",id:"objectives",children:[],level:3},{value:"Key Points",id:"key-points",children:[],level:3}],level:2}],p={toc:l};function y(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"encryption"},"Encryption"),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("h3",{id:"objectives"},"Objectives"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"By the end of this session you should be able to:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Explain what encryption is, and explore the differences between symmetric and asymmetric encryption"),(0,o.kt)("li",{parentName:"ul"},"Create a hand-computed, reversible encryption routine")),(0,o.kt)("h3",{id:"key-points"},"Key Points"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Encryption is the process of encoding information to make it unintelligible to anyone that doesn\u2019t know how to decrypt it"),(0,o.kt)("li",{parentName:"ul"},"Symmetric Encryption uses a single, shared secret that can be used to encrypt and decrypt information"),(0,o.kt)("li",{parentName:"ul"},"Asymmetric Encryption uses separate encryption and decryption keys which cannot be used interchangeably"),(0,o.kt)("li",{parentName:"ul"},"All encryption processes are algorithms, and anyone can make their own encryption algorithm")))}y.isMDXComponent=!0}}]);