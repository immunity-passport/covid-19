(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(28),j=c.n(s),i=(c(36),c.p,c(37),c(19)),r=c(2),o=c(8),b=c(7),l=c(20),d=c.n(l),O=c(29),u=c(30),h=c.n(u),x=c(14),v=c.n(x),p=c(0);function f(e){var t={margin:2,width:175},c=Object(a.useState)("data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),n=Object(b.a)(c,2),s=n[0],j=n[1];return Object(a.useEffect)(Object(O.a)(d.a.mark((function c(){var a;return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!e.data){c.next=5;break}return c.next=3,h.a.toDataURL(e.data,t);case 3:a=c.sent,j(a);case 5:case"end":return c.stop()}}),c)}))),[e.data]),Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:s})})}var g=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)({}),j=Object(b.a)(s,2),i=j[0],r=j[1];return Object(a.useEffect)((function(){var e=v.a.parse(window.location.search.split("?")[1]).data,t=JSON.parse(atob(e)),c="".concat(window.location.origin,"/").concat(window.location.pathname.split("/").slice(1,-1).join("/"),"/confirm?data=").concat(e);console.log(t),r(Object(o.a)(Object(o.a)({},e),t)),n(c)}),[]),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:[{key:"fn",value:"First Name"},{key:"ln",value:"Last Name"},{key:"dob",value:"DOB"}].map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("label",{children:[e.value,":"]})," ",Object(p.jsx)("p",{children:void 0!=i[e.key]?String(i[e.key]):"N/A"})," "]})}))}),Object(p.jsx)(f,{data:c})]})};function m(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:"".concat(e.label,": ")}),Object(p.jsx)("input",{type:e.type||"text",onChange:e.handleChange})]})}var A=function(){var e=Object(a.useState)({sdo:!1}),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)("s"),j=Object(b.a)(s,2),i=j[0],l=j[1],d=Object(a.useState)("s"),O=Object(b.a)(d,2),u=O[0],h=O[1],x=Object(r.f)(),v=function(e,t){return function(a){console.log(a.target.value);var s={};t?(console.log(a.target.checked),s[e]=!!a.target.checked):s[e]=a.target.value,n(Object(o.a)(Object(o.a)({},c),s))}};return Object(a.useEffect)((function(){console.log(c);var e=btoa(JSON.stringify(c));l(e),h("".concat(window.location.origin,"/").concat(window.location.pathname.split("/").slice(1,-1).join("/"),"/confirm?data=").concat(e))}),[c]),Object(p.jsxs)("div",{children:[Object(p.jsx)(m,{label:"First Name",handleChange:v("fn")}),Object(p.jsx)(m,{label:"Last Name",handleChange:v("ln")}),Object(p.jsx)(m,{label:"DOB",handleChange:v("dob"),type:"date"}),Object(p.jsx)(m,{label:"Single Dose?",handleChange:v("sdo",!0),type:"checkbox"}),Object(p.jsx)(m,{label:"Lot#",handleChange:v("lnum")}),Object(p.jsx)(m,{label:"1st Dose",handleChange:v("fddate"),type:"date"}),!c.sdo&&Object(p.jsx)(m,{label:"2nd Dose",handleChange:v("sddate"),type:"date"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:function(e){x.push("/view?data=".concat(i))},children:"Create Pass"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{data:u})]})};var y=function(){var e=Object(a.useState)({}),t=Object(b.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e=v.a.parse(window.location.search.split("?")[1]).data,t=JSON.parse(atob(e));n(Object(o.a)(Object(o.a)({},c),t))}),[]),Object(p.jsx)("div",{children:[{key:"fn",value:"First Name"},{key:"ln",value:"Last Name"},{key:"dob",value:"DOB"},{key:"sdo",value:"Single Dose?"},{key:"lnum",value:"Lot#"},{key:"fddate",value:"1st Dose"},{key:"sddate",value:"2nd Dose",dependsOn:"sdo"}].map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("label",{children:[e.value,":"]})," ",Object(p.jsx)("p",{children:void 0!=c[e.key]?String(c[e.key]):"N/A"})," "]})}))})};var k=function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)("img",{src:"./coronavirus-white.svg"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),Object(p.jsx)("p",{children:"Covid 19"}),Object(p.jsx)("p",{children:"Immunity Passport"})]})]}),Object(p.jsx)("div",{className:"main",children:Object(p.jsx)(i.a,{basename:"/covid-19",children:Object(p.jsxs)(r.c,{children:[Object(p.jsx)(r.a,{exact:!0,path:"/",component:A}),Object(p.jsx)(r.a,{path:"/create",component:A}),Object(p.jsx)(r.a,{path:"/view",component:g}),Object(p.jsx)(r.a,{path:"/confirm",component:y})]})})}),Object(p.jsxs)("div",{className:"footer",children:[Object(p.jsx)("p",{children:"Copyright 2021"}),Object(p.jsx)("p",{children:"Immunity Passport inc."}),Object(p.jsx)("p",{children:"All rights reserved."})]})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,74)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,j=t.getTTFB;c(e),a(e),n(e),s(e),j(e)}))};j.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root")),w()}},[[73,1,2]]]);
//# sourceMappingURL=main.0a143522.chunk.js.map