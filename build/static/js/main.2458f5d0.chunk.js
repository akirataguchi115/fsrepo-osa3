(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),l=t.n(u),c=t(14),o=t(2),i=t(3),m=t.n(i),d="/api/persons",f=function(){return m.a.get(d).then((function(e){return e.data}))},h=function(e){return m.a.post(d,e).then((function(e){return e.data}))},s=function(e,n){return m.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return m.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},E=(t(37),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:e.addName},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))}),p=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:e.addName},r.a.createElement("div",null,"filter shown with   ",r.a.createElement("input",{value:e.newFilter,onChange:e.handleFilterChange}))))},v=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,e.namesToShow.map((function(n,t){return r.a.createElement("table",{key:n.id},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",{key:n.name},n.name," ",n.number)),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(t){return e.removeName(t,n.id,n.name)}},"delete")))))}))))},g=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:n.includes("Information")?"info":"error"},n)},w=function(){Object(a.useEffect)((function(){f().then((function(e){u(e)})).catch((function(e){console.log("fail")}))}),[]);var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],l=Object(a.useState)(""),i=Object(o.a)(l,2),m=i[0],d=i[1],w=Object(a.useState)(""),N=Object(o.a)(w,2),O=N[0],j=N[1],C=Object(a.useState)(""),S=Object(o.a)(C,2),k=S[0],y=S[1],F=Object(a.useState)(null),I=Object(o.a)(F,2),T=I[0],D=I[1],J=function(e){e.preventDefault();var n={name:m,number:O,date:(new Date).toISOString,id:t.length+1};if(t.map((function(e){return e.name})).includes(m)){if(window.confirm("".concat(m," is already added to the phonebook, replace the old number with a new one?"))){var a=t.find((function(e){return e.name===m})),r=Object(c.a)({},a,{number:O});s(a.id,r).then((function(e){u(t.map((function(e){return e.id!==a.id?e:r}))),D("Information: Updated ".concat(m)),setTimeout((function(){D(null)}),5e3),d(""),j("")})).catch((function(e){D("Information of ".concat(m," has already been removed from server")),setTimeout((function(){D(null)}),5e3)}))}}else h(n).then((function(e){u(t.concat(e)),d(""),j(""),D("Information: Added ".concat(m)),setTimeout((function(){D(null)}),5e3)})).catch((function(e){D(e.response.data.error)}))},L=t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{message:T}),r.a.createElement(p,{addName:J,newFilter:k,handleFilterChange:function(e){y(e.target.value)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(E,{addName:J,newName:m,handleNameChange:function(e){d(e.target.value)},newNumber:O,handleNumberChange:function(e){j(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(v,{namesToShow:L,removeName:function(e,n,a){e.preventDefault(),window.confirm("Delete ".concat(a,"?"))&&b(n).then((function(e){u(t.filter((function(e){return e.id!==n})))})),D("Information: Deleted ".concat(a)),setTimeout((function(){D(null)}),5e3)}}))};l.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2458f5d0.chunk.js.map