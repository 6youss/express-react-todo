(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),s=n.n(o),c=(n(11),n(1)),u=n.n(c),l=n(2),i=n(3),p="http://localhost:8000/api";function m(){return d.apply(this,arguments)}function d(){return(d=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(p+"/todo",{method:"get"});case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function f(){return(f=Object(l.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(p+"/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})});case 3:if(!(a=e.sent).ok){e.next=10;break}return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 10:throw new Error(a.statusText);case 11:e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function h(){return(h=Object(l.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(p+"/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})});case 3:if(!(a=e.sent).ok){e.next=10;break}return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 10:throw new Error(a.statusText);case 11:e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function b(){var e=r.a.useState("admin"),t=Object(i.a)(e,2),n=t[0],a=t[1],o=r.a.useState("admin"),s=Object(i.a)(o,2),c=s[0],p=s[1];return r.a.createElement("div",{className:"max-w-xs"},r.a.createElement("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},r.a.createElement("div",{className:"mb-4"},r.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2"},"Username"),r.a.createElement("input",{value:n,onChange:function(e){return a(e.target.value)},className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text"})),r.a.createElement("div",{className:"mb-6"},r.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2"},"Password"),r.a.createElement("input",{value:c,onChange:function(e){return p(e.target.value)},className:"shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",type:"password"})),r.a.createElement("div",{className:"flex items-center justify-between"},r.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:function(){(function(e,t){return h.apply(this,arguments)})(n,c).then(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,m();case 3:n=e.sent,console.log(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}},"Sign In"))),r.a.createElement("p",{className:"text-center text-gray-500 text-xs"},"\xa92019 ZSoft Consulting. All rights reserved."))}function x(){var e=r.a.useState("admin"),t=Object(i.a)(e,2),n=t[0],a=t[1],o=r.a.useState("admin"),s=Object(i.a)(o,2),c=s[0],p=s[1];return r.a.createElement("div",{className:"max-w-xs"},r.a.createElement("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},r.a.createElement("div",{className:"mb-4"},r.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2"},"Username"),r.a.createElement("input",{value:n,onChange:function(e){return a(e.target.value)},className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text"})),r.a.createElement("div",{className:"mb-6"},r.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2"},"Password"),r.a.createElement("input",{value:c,onChange:function(e){return p(e.target.value)},className:"shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",type:"password"})),r.a.createElement("div",{className:"flex items-center justify-between"},r.a.createElement("button",{className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:function(){(function(e,t){return f.apply(this,arguments)})(n,c).then(function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("err"+e)}))}},"Sign Up"))),r.a.createElement("p",{className:"text-center text-gray-500 text-xs"},"\xa92019 ZSoft Consulting. All rights reserved."))}var g=function(){return r.a.createElement("div",{className:"flex justify-around items-center bg-gray-300 h-screen"},r.a.createElement(x,null),r.a.createElement(b,null))};var w=function(){return r.a.createElement("div",null,r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,n){e.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.ca2cd6ef.chunk.js.map