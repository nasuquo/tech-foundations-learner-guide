"use strict";(self.webpackChunktech_foundations=self.webpackChunktech_foundations||[]).push([[14],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=m(t,["components","mdxType","originalType","parentName"]),k=u(n),s=r,g=k["".concat(o,".").concat(s)]||k[s]||d[s]||l;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6497:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],m={sidebar_position:0},o="Counting like a computer",u={unversionedId:"computing/binary-code/counting-like-a-computer",id:"computing/binary-code/counting-like-a-computer",isDocsHomePage:!1,title:"Counting like a computer",description:"Summary",source:"@site/docs/computing/binary-code/counting-like-a-computer.md",sourceDirName:"computing/binary-code",slug:"/computing/binary-code/counting-like-a-computer",permalink:"/tech-foundations-learner-guide/docs/computing/binary-code/counting-like-a-computer",editUrl:"https://github.com/generation-org/tech-foundations/edit/main/docs/computing/binary-code/counting-like-a-computer.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"computingSidebar",previous:{title:"Computing Foundations",permalink:"/tech-foundations-learner-guide/docs/computing/index"},next:{title:"Talking like a computer",permalink:"/tech-foundations-learner-guide/docs/computing/binary-code/talking-like-a-computer"}},p=[{value:"Summary",id:"summary",children:[{value:"Objectives",id:"objectives",children:[],level:3},{value:"Key Points",id:"key-points",children:[],level:3},{value:"Materials",id:"materials",children:[],level:3}],level:2},{value:"Breakdown",id:"breakdown",children:[{value:"Decimal revision",id:"decimal-revision",children:[],level:3},{value:"Counting in Binary",id:"counting-in-binary",children:[],level:3},{value:"Counting in Hexadecimal",id:"counting-in-hexadecimal",children:[],level:3}],level:2}],d={toc:p};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"counting-like-a-computer"},"Counting like a computer"),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("h3",{id:"objectives"},"Objectives"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"By the end of this session you should be able to:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Explain what binary numbers are"),(0,l.kt)("li",{parentName:"ul"},"Explain what Hexadecimal numbers are, and why Engineers use them")),(0,l.kt)("h3",{id:"key-points"},"Key Points"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Binary digits are 0 and 1 (two digits); you can count to any number using these two digits"),(0,l.kt)("li",{parentName:"ul"},"Hexadecimal digits are 0 through F (sixteen digits); engineers use them because they can represent four binary digits as a single hex digit")),(0,l.kt)("h3",{id:"materials"},"Materials"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://replit.com/@genadmin/Multibase-Tally-Calculator"},"A multibase tally calculator"),", which can be used to count up/down as well as changing the number's base representation")),(0,l.kt)("h2",{id:"breakdown"},"Breakdown"),(0,l.kt)("h3",{id:"decimal-revision"},"Decimal revision"),(0,l.kt)("p",null,"Most people are so used to counting in decimal - base-10 - that they may not realise there's any other way to count. We count from zero to nine (0-9) then move from nine to ten (10) - at which point we start again at 0 and move up to 9 (19). But we can count with less digits - or with more. We can represent this as a series of columns - for example, three hundred and twenty-seven could be written as:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"1000s"),(0,l.kt)("th",{parentName:"tr",align:null},"100s"),(0,l.kt)("th",{parentName:"tr",align:null},"10s"),(0,l.kt)("th",{parentName:"tr",align:null},"1s"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"7")))),(0,l.kt)("p",null,"This is a useful way of adding large numbers. As an example, if I wanted to add three hundred and twenty-seven to seven thousand and eighty eight I can simply add up each of the columns and then roll over each column into the one next to it:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"1000s"),(0,l.kt)("th",{parentName:"tr",align:null},"100s"),(0,l.kt)("th",{parentName:"tr",align:null},"10s"),(0,l.kt)("th",{parentName:"tr",align:null},"1s"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+ 7"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"= ",(0,l.kt)("em",{parentName:"td"},"7")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"3")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"15"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"= ",(0,l.kt)("em",{parentName:"td"},"7")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"4")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"15"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"= 7")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"4")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5"))))),(0,l.kt)("p",null,"Which gives us seven thousand, four hundred and fifteen."),(0,l.kt)("h3",{id:"counting-in-binary"},"Counting in Binary"),(0,l.kt)("p",null,"Computers work in binary (base-2) instead of decimal, which means they have only two numbers - 1 and 0. Otherwise they work exactly the same - we go from 0, to 1, then run out of numbers so we move to 10. This number isn't ten - it can be read as two, or as ",(0,l.kt)("em",{parentName:"p"},"one-zero"),", but it isn't equal to ten in our normal decimal system. Again, this can be represented as a series of columns - but in multiples of 2 instead of 10:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"8s"),(0,l.kt)("th",{parentName:"tr",align:null},"4s"),(0,l.kt)("th",{parentName:"tr",align:null},"2s"),(0,l.kt)("th",{parentName:"tr",align:null},"1s"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"0")))),(0,l.kt)("p",null,"Adding two numbers is similarly easy:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"8s"),(0,l.kt)("th",{parentName:"tr",align:null},"4s"),(0,l.kt)("th",{parentName:"tr",align:null},"2s"),(0,l.kt)("th",{parentName:"tr",align:null},"1s"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+ 0"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"= 0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"11")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"= 0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"11")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"= 1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"1"))))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Computers count in binary because they're made up of transistors, which are somewhat similar to an electrically operated light switch. These transistors are arranged into circuits that can do very complex tasks, but they are only able to work in two states."),(0,l.kt)("p",{parentName:"div"},"We label these states 0 and 1, which allows us to use them as the basis for calculations."))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Don't spend lots of time trying to convert between binary and decimal! The calculation is complex, and counting from 0 takes a long time for big numbers. There are lots of binary/decimal converters available - pick a nice one and use it!"))),(0,l.kt)("h3",{id:"counting-in-hexadecimal"},"Counting in Hexadecimal"),(0,l.kt)("p",null,"Binary numbers are long and hard for humans to work with, but converting between binary and decimal is complex and unintuitive. For this reason, engineers often use hexadecimal - base-16, also known as ",(0,l.kt)("em",{parentName:"p"},"hex")," - instead. Hexacecimal numbers go from 0-F:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"0"),(0,l.kt)("th",{parentName:"tr",align:null},"1"),(0,l.kt)("th",{parentName:"tr",align:null},"2"),(0,l.kt)("th",{parentName:"tr",align:null},"3"),(0,l.kt)("th",{parentName:"tr",align:null},"4"),(0,l.kt)("th",{parentName:"tr",align:null},"5"),(0,l.kt)("th",{parentName:"tr",align:null},"6"),(0,l.kt)("th",{parentName:"tr",align:null},"7"),(0,l.kt)("th",{parentName:"tr",align:null},"8"),(0,l.kt)("th",{parentName:"tr",align:null},"9"),(0,l.kt)("th",{parentName:"tr",align:null},"A"),(0,l.kt)("th",{parentName:"tr",align:null},"B"),(0,l.kt)("th",{parentName:"tr",align:null},"C"),(0,l.kt)("th",{parentName:"tr",align:null},"D"),(0,l.kt)("th",{parentName:"tr",align:null},"E"),(0,l.kt)("th",{parentName:"tr",align:null},"F")))),(0,l.kt)("p",null,"Because 16 is exactly divisible by 2, every Hexadecimal number can be exactly represented by four binary numbers (with no waste!):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"0"),(0,l.kt)("th",{parentName:"tr",align:null},"1"),(0,l.kt)("th",{parentName:"tr",align:null},"2"),(0,l.kt)("th",{parentName:"tr",align:null},"3"),(0,l.kt)("th",{parentName:"tr",align:null},"4"),(0,l.kt)("th",{parentName:"tr",align:null},"5"),(0,l.kt)("th",{parentName:"tr",align:null},"6"),(0,l.kt)("th",{parentName:"tr",align:null},"7"),(0,l.kt)("th",{parentName:"tr",align:null},"8"),(0,l.kt)("th",{parentName:"tr",align:null},"9"),(0,l.kt)("th",{parentName:"tr",align:null},"A"),(0,l.kt)("th",{parentName:"tr",align:null},"B"),(0,l.kt)("th",{parentName:"tr",align:null},"C"),(0,l.kt)("th",{parentName:"tr",align:null},"D"),(0,l.kt)("th",{parentName:"tr",align:null},"E"),(0,l.kt)("th",{parentName:"tr",align:null},"F"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0000"),(0,l.kt)("td",{parentName:"tr",align:null},"0001"),(0,l.kt)("td",{parentName:"tr",align:null},"0010"),(0,l.kt)("td",{parentName:"tr",align:null},"0011"),(0,l.kt)("td",{parentName:"tr",align:null},"0100"),(0,l.kt)("td",{parentName:"tr",align:null},"0101"),(0,l.kt)("td",{parentName:"tr",align:null},"0110"),(0,l.kt)("td",{parentName:"tr",align:null},"0111"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"1001"),(0,l.kt)("td",{parentName:"tr",align:null},"1010"),(0,l.kt)("td",{parentName:"tr",align:null},"1011"),(0,l.kt)("td",{parentName:"tr",align:null},"1100"),(0,l.kt)("td",{parentName:"tr",align:null},"1101"),(0,l.kt)("td",{parentName:"tr",align:null},"1110"),(0,l.kt)("td",{parentName:"tr",align:null},"1111")))),(0,l.kt)("p",null,"Large hex numbers can be represented in columns and calculated exactly like binary and decimal numbers; to demonstrate, let's calculate ",(0,l.kt)("inlineCode",{parentName:"p"},"A8C + 7F1"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"64s"),(0,l.kt)("th",{parentName:"tr",align:null},"32s"),(0,l.kt)("th",{parentName:"tr",align:null},"16s"),(0,l.kt)("th",{parentName:"tr",align:null},"1s"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"C")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+ 0"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"= 0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"11")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"17")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"D"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"= 0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"12")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"7")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"D"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"= 1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"7")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"D"))))))}k.isMDXComponent=!0}}]);