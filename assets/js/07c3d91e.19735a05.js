"use strict";(self.webpackChunktech_foundations=self.webpackChunktech_foundations||[]).push([[8025],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81984:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={sidebar_position:2},p="Peripherals",l={unversionedId:"computing/computer-hardware/peripherals",id:"computing/computer-hardware/peripherals",isDocsHomePage:!1,title:"Peripherals",description:"Summary",source:"@site/docs/computing/computer-hardware/peripherals.md",sourceDirName:"computing/computer-hardware",slug:"/computing/computer-hardware/peripherals",permalink:"/tech-foundations-learner-guide/docs/computing/computer-hardware/peripherals",editUrl:"https://github.com/generation-org/tech-foundations/edit/main/docs/computing/computer-hardware/peripherals.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"computingSidebar",previous:{title:"Storage",permalink:"/tech-foundations-learner-guide/docs/computing/computer-hardware/storage"},next:{title:"Software as a Service",permalink:"/tech-foundations-learner-guide/docs/computing/cloud-computing/software-as-a-service"}},c=[{value:"Summary",id:"summary",children:[{value:"Objectives",id:"objectives",children:[],level:3},{value:"Key Points",id:"key-points",children:[],level:3}],level:2},{value:"Breakdown",id:"breakdown",children:[{value:"Peripheral types",id:"peripheral-types",children:[],level:3},{value:"The Bus",id:"the-bus",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"peripherals"},"Peripherals"),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("h3",{id:"objectives"},"Objectives"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"By the end of this session you should be able to:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Explain what a peripheral is, and how the CPU can interact with common peripherals")),(0,o.kt)("h3",{id:"key-points"},"Key Points"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A peripheral is a device that can be connected to a computer to provide input, or receive output (or both)."),(0,o.kt)("li",{parentName:"ul"},"The CPU can read and write to a peripheral just like any bit of memory.")),(0,o.kt)("h2",{id:"breakdown"},"Breakdown"),(0,o.kt)("h3",{id:"peripheral-types"},"Peripheral types"),(0,o.kt)("p",null,"Peripherals are devices that are connected to a computer - more typically, connected to the computer's CPU. Peripherals usually manage this by presenting as a ",(0,o.kt)("em",{parentName:"p"},"memory address")," which the processor can read or write to - however, instead of that data being stored in memory it will be taken as input/output (I/O) to the peripheral."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Input Devices")," like keyboards will ",(0,o.kt)("em",{parentName:"li"},"present"),' bytes of data in memory based on what input it is expected to represent. As an example, pressing the "X" key will set the keyboard\'s memory address to the bits that represent an X, and the CPU will read that in the same way it reads an "X" stored in memory.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Output Devices")," like displays will ",(0,o.kt)("em",{parentName:"li"},"read"),' bytes of data that the CPU writes to it\'s assigned memory addresses and then act on it. As an example, writing the bits that represent an "X" to a display\'s memory address could cause a display to present an "X" on the screen.')),(0,o.kt)("h3",{id:"the-bus"},"The Bus"),(0,o.kt)("p",null,"Peripherals often connect to a shared \"bus\" which allows it to present data for the CPU to read to and write from. If you've ever connected a USB device then you've used such a bus - USB stands for ",(0,o.kt)("em",{parentName:"p"},"Universal Serial Bus")," and it was built to provide a unified bus for all peripherals to connect using."),(0,o.kt)("p",null,"Other buses may be the Memory Bus (dedicated to memory) and the storage bus (dedicated to storage devices)."))}d.isMDXComponent=!0}}]);