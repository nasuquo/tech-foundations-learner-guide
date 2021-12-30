"use strict";(self.webpackChunktech_foundations=self.webpackChunktech_foundations||[]).push([[170],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return m}});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=t.createContext({}),l=function(e){var r=t.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(a.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||o;return n?t.createElement(f,s(s({ref:r},c),{},{components:n})):t.createElement(f,s({ref:r},c))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var u={};for(var a in r)hasOwnProperty.call(r,a)&&(u[a]=r[a]);u.originalType=e,u.mdxType="string"==typeof e?e:i,s[1]=u;for(var l=2;l<o;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8657:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var t=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],u={sidebar_position:3},a="Users, Groups and Permissions",l={unversionedId:"linux/users-groups-and-permissions",id:"linux/users-groups-and-permissions",isDocsHomePage:!1,title:"Users, Groups and Permissions",description:"Summary",source:"@site/docs/linux/users-groups-and-permissions.md",sourceDirName:"linux",slug:"/linux/users-groups-and-permissions",permalink:"/tech-foundations-learner-guide/docs/linux/users-groups-and-permissions",editUrl:"https://github.com/generation-org/tech-foundations/edit/main/docs/linux/users-groups-and-permissions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"linuxSidebar",previous:{title:"Commanding Linux",permalink:"/tech-foundations-learner-guide/docs/linux/commanding-linux"},next:{title:"Working with text",permalink:"/tech-foundations-learner-guide/docs/linux/working-with-text"}},c=[{value:"Summary",id:"summary",children:[{value:"Objectives",id:"objectives",children:[],level:3},{value:"Key Points",id:"key-points",children:[],level:3}],level:2}],p={toc:c};function d(e){var r=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"users-groups-and-permissions"},"Users, Groups and Permissions"),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("h3",{id:"objectives"},"Objectives"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"By the end of this session you should be able to:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Explain how Users and Groups are used in Linux"),(0,o.kt)("li",{parentName:"ul"},"Demonstrate how to give read, write and execute access on files and directories"),(0,o.kt)("li",{parentName:"ul"},"Explain the role of the superuser")),(0,o.kt)("h3",{id:"key-points"},"Key Points"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Every Linux process is run by a user, which could be a normal or system user"),(0,o.kt)("li",{parentName:"ul"},"File permissions can be assigned to users directly, or to groups of users"),(0,o.kt)("li",{parentName:"ul"},"The \u201croot\u201d user is the superuser, and has all permissions on the server")))}d.isMDXComponent=!0}}]);