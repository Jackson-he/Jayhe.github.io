(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){},14:function(e,t,n){},18:function(e,t,n){e.exports=n(29)},29:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(16),i=n.n(c),l=n(30),r=n(32),u=n(33),m=n(5),s=n(6),h=n(8),p=n(7),b=n(9),d=n(14),w=n.n(d),f=n(31),j=n(10),v=n.n(j),y=[{path:"/",component:function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={},n.toDetail=function(e){n.props.history.push("/home/page/".concat(e,"/detail"))},n}return Object(b.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){console.log(999)}},{key:"render",value:function(){var e=this,t=[{id:1,title:"you don't konw js",createTime:"2018-2-1",contentToShow:"blablabla"},{id:2,title:"you konw js",createTime:"2018-3-1",contentToShow:"blablabla"},{id:3,title:"you konw js",createTime:"2018-3-1",contentToShow:"blablabla"},{id:4,title:"you konw js",createTime:"2018-3-1",contentToShow:"blablabla"},{id:5,title:"you konw js",createTime:"2018-3-1",contentToShow:"blablabla"},{id:6,title:"you konw js",createTime:"2018-3-1",contentToShow:"blablabla"}].map(function(t,n){return o.a.createElement("div",{className:v.a["content-item"],key:n,onClick:e.toDetail.bind(e,t.id)},o.a.createElement("div",{className:v.a.title},t.title),o.a.createElement("div",{className:v.a.specification},"\u521b\u5efa\u65e5\u671f\uff1a",t.createTime),o.a.createElement("div",null,t.contentToShow))});return o.a.createElement("div",{className:v.a.content},o.a.createElement("div",{className:v.a.main},t),o.a.createElement("div",{className:v.a.index}))}}]),t}(a.Component)},{path:"/home/page/:id/detail/",component:function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return"\u8be6\u60c5"}}]),t}(a.Component)},{path:"/home/test",component:function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){console.log(8888,this)}},{key:"render",value:function(){return"test"}}]),t}(a.Component)}],k=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=y.map(function(e,t){return o.a.createElement(u.a,{exact:!0,path:e.path,key:t,component:e.component})});return o.a.createElement("div",{style:w.a.wrapper},o.a.createElement("div",{className:w.a.header}),o.a.createElement(r.a,null,e,o.a.createElement(f.a,{to:"/"})))}}]),t}(a.Component),O=function(){return o.a.createElement("div",null,"test without header")},E=function(){return o.a.createElement(l.a,null,o.a.createElement(r.a,null,o.a.createElement(u.a,{path:"/other",component:O}),o.a.createElement(u.a,{path:"/",component:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.557570c2.chunk.js.map