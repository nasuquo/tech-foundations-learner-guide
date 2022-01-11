"use strict";(self.webpackChunktech_foundations=self.webpackChunktech_foundations||[]).push([[592],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(n),d=i,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9061:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:5},l="Managing Services",m={unversionedId:"linux/managing-services",id:"linux/managing-services",isDocsHomePage:!1,title:"Managing Services",description:"Summary",source:"@site/docs/linux/managing-services.md",sourceDirName:"linux",slug:"/linux/managing-services",permalink:"/tech-foundations-learner-guide/docs/linux/managing-services",editUrl:"https://github.com/generation-org/tech-foundations/edit/main/docs/linux/managing-services.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"linuxSidebar",previous:{title:"Working with text",permalink:"/tech-foundations-learner-guide/docs/linux/working-with-text"}},p=[{value:"Summary",id:"summary",children:[{value:"Objectives",id:"objectives",children:[],level:3},{value:"Key Points",id:"key-points",children:[],level:3}],level:2},{value:"Breakdown",id:"breakdown",children:[{value:"Processes",id:"processes",children:[],level:3},{value:"Services, Daemons and Applications",id:"services-daemons-and-applications",children:[{value:"Applications",id:"applications",children:[],level:4},{value:"Daemons",id:"daemons",children:[],level:4},{value:"Services",id:"services",children:[],level:4}],level:3},{value:"Looking at processes",id:"looking-at-processes",children:[],level:3},{value:"Load Average",id:"load-average",children:[],level:3}],level:2}],c={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"managing-services"},"Managing Services"),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("h3",{id:"objectives"},"Objectives"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"By the end of this session you should be able to:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Explain the relationship between processes, services, daemons and applications"),(0,r.kt)("li",{parentName:"ul"},"View running processes and system resource usage")),(0,r.kt)("h3",{id:"key-points"},"Key Points"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Processes are instances of a program being run"),(0,r.kt)("li",{parentName:"ul"},"Processes can be:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Applications, which are interactive"),(0,r.kt)("li",{parentName:"ul"},"Daemons, which are non-interactive"))),(0,r.kt)("li",{parentName:"ul"},"Some processes, called services, respond to requests from other processes"),(0,r.kt)("li",{parentName:"ul"},"Running processes and system load can be viewed using the top command")),(0,r.kt)("h2",{id:"breakdown"},"Breakdown"),(0,r.kt)("h3",{id:"processes"},"Processes"),(0,r.kt)("p",null,"A process is simply computer code in the ",(0,r.kt)("em",{parentName:"p"},"process")," of being executed. To start a process, we ",(0,r.kt)("em",{parentName:"p"},"invoke")," a program - either by double clicking it, or by . We could invoke a program multiple times, with different options or arguments. A program could be invoked multiple times ",(0,r.kt)("em",{parentName:"p"},"in parallel"),", meaning that multiple similar processes are ",(0,r.kt)("em",{parentName:"p"},"running at the same time"),"."),(0,r.kt)("p",null,"Processes are ",(0,r.kt)("em",{parentName:"p"},"ephemeral"),", only existing while they are running. Processes can only exist when the computer is switched on, and will not persist after a computer is switched off."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Invoke:"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"To call upon for help, assistance or guidance."),(0,r.kt)("li",{parentName:"ol"},"To solicit, petition for, appeal to a favorable attutide."),(0,r.kt)("li",{parentName:"ol"},"To call to mind for some purpose."),(0,r.kt)("li",{parentName:"ol"},"To conjure up with incantations")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Ephemeral:"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Something which lasts for a short period of time.")),(0,r.kt)("p",{parentName:"div"},"Synonyms: ",(0,r.kt)("em",{parentName:"p"},"temporary, transitory, fleeting, momentary, volatile")))),(0,r.kt)("h3",{id:"services-daemons-and-applications"},"Services, Daemons and Applications"),(0,r.kt)("h4",{id:"applications"},"Applications"),(0,r.kt)("p",null,'Applications ("Apps") are processes that a user ',(0,r.kt)("em",{parentName:"p"},"interacts")," with. Examples are computer games or text editors. An application usually makes itself \"visible\" to a user through a graphical interface, but applications can also be used on the terminal. On the command line, an application normally doesn't return you to the command prompt until it's finished."),(0,r.kt)("h4",{id:"daemons"},"Daemons"),(0,r.kt)("p",null,'Daemons are processes that users do not interact with. When started they will run in the background, disconnected from the GUI or the terminal. Some processes can run in "Daemon mode" (i.e. in the background) when set up to.'),(0,r.kt)("h4",{id:"services"},"Services"),(0,r.kt)("p",null,"Services are processes that serve something to a ",(0,r.kt)("em",{parentName:"p"},"client"),", which could be on the same computer or another computer. They are usually (though not always) daemons. Examples include web servers and mail servers."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'"Daemon" is a word used in Unix-like operating systems (e.g. Linux). On Windows, Daemons are - confusingly - called services.'))),(0,r.kt)("h3",{id:"looking-at-processes"},"Looking at processes"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"top")," command will give you an output of running processes. Each process is listed with columns for each process attribute, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PID")," ",(0,r.kt)("em",{parentName:"li"},"(Process ID)")," - a unique number assigned to each process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"USER")," - the user that started the process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S")," ",(0,r.kt)("em",{parentName:"li"},"(Status)")," - the processes ",(0,r.kt)("em",{parentName:"li"},"status")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"R")," for running or ",(0,r.kt)("inlineCode",{parentName:"li"},"S")," for sleep)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"%CPU")," - the fraction of a single processor's cycles used by that process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"%MEM")," - the fraction of total memory in use by that process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"COMMAND")," - the command that invoked the process.")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A computer can have many processors, and a processor can have many ",(0,r.kt)("em",{parentName:"p"},"cores"),' (separate processing units on a single CPU). Confusingly, we often refer to a single, multi-core CPU as a "processor" - but we often refer to each core as a separate processor too. In software, any reference to a "processor" probably refers to a single core.'))),(0,r.kt)("p",null,"In addition, at the top of the screen you can find many metrics, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"up")," - the amount of time the system has been running for."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Load Average")," - the average number of processes waiting in the CPU queue to be processed (averaged over 1, 5 and 15 minutes)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tasks")," - the total number of processes running on the system, then those processes split by status."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MiB Mem")," - Total system memory (in ",(0,r.kt)("em",{parentName:"li"},"Mebibytes"),"), followed by the fraction which is free, in use, or being used for buffers/cache.")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A computer can have many processors, which allows them to run more than one instruction at the same time. Applications measuring CPU utilization sometimes present their stats as a multiple of the number of processors - e.g. 200% utilization could mean a dual-core processor being fully utilized."))),(0,r.kt)("h3",{id:"load-average"},"Load Average"),(0,r.kt)("p",null,"The CPU Queue Length is the number of processes that are ready but currently unable to run. This number will change every ",(0,r.kt)("em",{parentName:"p"},"cycle"),", and so it's not very useful by itself. The Load Average is the ",(0,r.kt)("em",{parentName:"p"},"average")," of the CPU Queue Length, commonly reported over 1, 5 and 15 minutes. This is a useful metric to glance at if you want to understand the performance of a computer, e.g:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A high 1 minute load average and a low 5 and 15 minute load average means the load average is going up."),(0,r.kt)("li",{parentName:"ul"},"A high 15 minute load average but a low 1 and 5 minute load average means the load average is going down.")),(0,r.kt)("p",null,"A good rule of thumb is that a load average should be up to 4 per processor - however, it's far more important to pay attention to the ",(0,r.kt)("em",{parentName:"p"},"trend"),', and understanding what load average is "healthy" really depends on the workload the computer is running.'))}u.isMDXComponent=!0}}]);