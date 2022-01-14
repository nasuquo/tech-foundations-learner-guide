"use strict";(self.webpackChunktech_foundations=self.webpackChunktech_foundations||[]).push([[622],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},31372:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],s={sidebar_position:1},l="Passwords",c={unversionedId:"security/threat-analysis/stride",id:"security/threat-analysis/stride",isDocsHomePage:!1,title:"Passwords",description:"Summary",source:"@site/docs/security/threat-analysis/stride.md",sourceDirName:"security/threat-analysis",slug:"/security/threat-analysis/stride",permalink:"/tech-foundations-learner-guide/docs/security/threat-analysis/stride",editUrl:"https://github.com/generation-org/tech-foundations/edit/main/docs/security/threat-analysis/stride.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"securitySidebar",previous:{title:"Understanding Risk",permalink:"/tech-foundations-learner-guide/docs/security/threat-analysis/understanding-risk"}},u=[{value:"Summary",id:"summary",children:[{value:"Objectives",id:"objectives",children:[],level:3},{value:"Key Points",id:"key-points",children:[],level:3}],level:2},{value:"Breakdown",id:"breakdown",children:[{value:"STRIDE",id:"stride",children:[{value:"Spoofing",id:"spoofing",children:[],level:4},{value:"Tampering",id:"tampering",children:[],level:4},{value:"Repudiation",id:"repudiation",children:[],level:4},{value:"Information Disclosure",id:"information-disclosure",children:[],level:4},{value:"Denial of Service",id:"denial-of-service",children:[],level:4},{value:"Elevation of Privilege",id:"elevation-of-privilege",children:[],level:4}],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"passwords"},"Passwords"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("h3",{id:"objectives"},"Objectives"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"By the end of this session you should be able to:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Identify common Information Security threats")),(0,a.kt)("h3",{id:"key-points"},"Key Points"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There are six common threats to Information Security:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Spoofing"),(0,a.kt)("li",{parentName:"ul"},"Tampering"),(0,a.kt)("li",{parentName:"ul"},"Repudiation"),(0,a.kt)("li",{parentName:"ul"},"Information Disclosure"),(0,a.kt)("li",{parentName:"ul"},"Denial of Service"),(0,a.kt)("li",{parentName:"ul"},"Elevation of Privileges"))),(0,a.kt)("li",{parentName:"ul"},"This can be remembered using the mnemonic \u201cSTRIDE\u201d")),(0,a.kt)("h2",{id:"breakdown"},"Breakdown"),(0,a.kt)("h3",{id:"stride"},"STRIDE"),(0,a.kt)("p",null,"STRIDE is a mnemonic - a way of rememebering a sequence. Each letter represents a different type of attack:"),(0,a.kt)("h4",{id:"spoofing"},"Spoofing"),(0,a.kt)("p",null,"Spoofing is an attempt to provide falsified data - often falsified identification. An example might be pretending to be someone else on the phone, or changing a MAC address on a computer to appear like it's someone else's."),(0,a.kt)("h4",{id:"tampering"},"Tampering"),(0,a.kt)("p",null,"Tampering is an attempt to manipulate data in a way that give the attacker some sort of advantage. An example might be to pull a fire alarm to get everyone to exit a building. Tampering with food is a known risk for restaurants in highly competitive markets."),(0,a.kt)("h4",{id:"repudiation"},"Repudiation"),(0,a.kt)("p",null,'Repudiation is an attempt to erase evidence that an attack has happened. Commonly an attacker would seek to erase CCTV recordings, or system logs, in an attempt to "disappear". Effective repudiation may lead to the target never knowing they\'ve been attacked!'),(0,a.kt)("h4",{id:"information-disclosure"},"Information Disclosure"),(0,a.kt)("p",null,"Information Disclosure is an attempt to expose - or ",(0,a.kt)("em",{parentName:"p"},"exfiltrate")," - private data. A simple example would be to steal the guest book at a hotel, giving access to a list of everyone that stayed there. More commonly attackers will focus on exfiltrating personal information that can be used in further attacks - e.g. spoofing using credit card information."),(0,a.kt)("p",null,"Another common Information Disclosure attack is to go through the bins of a target to find information they haven't securely destroyed."),(0,a.kt)("h4",{id:"denial-of-service"},"Denial of Service"),(0,a.kt)("p",null,"Denial of Service is an attempt to stop authorised users from being able to access a service. A common way of achieving this is to command lots of compromised computers to connect to a service at once; sometimes this is done accidentally by customers when connecting to a service that's unprepared! Offline examples may be dumping rubble in the street to deny access."),(0,a.kt)("h4",{id:"elevation-of-privilege"},"Elevation of Privilege"),(0,a.kt)("p",null,"Elevation of Privilege is an attempt to gain additional access over and above what they should normally have. A common way of doing this is to attack a vulnerable service which is running with more privileges than it really needs - if the attacker can get the service to run code ",(0,a.kt)("em",{parentName:"p"},"arbitrarily")," then they will be able to access almost anything the service can."))}p.isMDXComponent=!0}}]);