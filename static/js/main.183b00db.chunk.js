(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),s=t(4),a=t.n(s),l=(t(9),t(10),t(11),t(0)),i=function(e){var n=e.headerContent;return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h1",{className:"header__title",children:n})})},u=(t(13),function(e){var n=e.children,t=e.className;return Object(l.jsx)("main",{className:t,children:n})}),o=(t(14),function(e){var n=e.footerContent;return Object(l.jsx)("footer",{className:"footer",children:n})}),j=t(3),m=(t(15),t(16),function(e){var n=e.currencies,t=e.plnValue;return Object(l.jsxs)("ul",{className:"list",children:[Object(l.jsxs)("li",{className:"list__item",children:["PLN:",Object(l.jsxs)("span",{className:"list__span",children:["Warto\u015b\u0107: ",t," PLN"]})]}),n.map((function(e){return Object(l.jsxs)("li",{className:"list__item",children:[e.name,":",Object(l.jsxs)("span",{className:"list__span list__span--range",children:["Kurs: ",e.value," PLN"]}),Object(l.jsxs)("span",{className:"list__span",children:["Warto\u015b\u0107: ",e.result," ",e.name]})]},e.id)}))]})}),d=function(e){var n,t=e.currencies,r=Object(c.useState)(""),s=Object(j.a)(r,2),a=s[0],i=s[1],u=Object(c.useState)(""),o=Object(j.a)(u,2),d=o[0],b=o[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),n=t.map((function(e){e.result;var n=e.value;return(a/n).toFixed(2)}));for(var c=0;c<=2;c++)t[c].result=n[c];b(+a),i("")},children:[Object(l.jsx)("h2",{className:"form__header",children:"Przelicznik walut"}),'Pola oznaczone "*" s\u0105 wymagane',Object(l.jsxs)("p",{className:"form__field",children:[Object(l.jsx)("label",{htmlFor:"pln",className:"form__label",children:"PLN*:"}),Object(l.jsx)("input",{type:"number",className:"form__input",value:a,onChange:function(e){var n=e.target;return i(n.value)},name:"pln",id:"pln",step:"0.01",min:"0.05",max:"9999999999",required:!0})]}),Object(l.jsx)("button",{className:"form__button",children:"Przelicz"})]}),Object(l.jsx)(m,{currencies:t,results:n,plnValue:d})]})};var b=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{headerContent:"Suchy kantor"}),Object(l.jsx)(u,{className:"main",children:Object(l.jsx)(d,{currencies:[{id:1,name:"EUR",value:4.47,result:0},{id:2,name:"USD",value:3.68,result:0},{id:3,name:"CHF",value:4.11,result:0}]})}),Object(l.jsx)(o,{footerContent:"Copyright \xa9 Pawe\u0142 Suchy 2021"})]})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,s=n.getLCP,a=n.getTTFB;t(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),h()}],[[17,1,2]]]);
//# sourceMappingURL=main.183b00db.chunk.js.map