(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){},22:function(e,a,t){e.exports=t(41)},31:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(18),c=t.n(r),m=(t(31),t(10)),o=t(3),i=(t(17),t(46)),s=Object(i.a)(new Date,"MM-dd-yyyy");var u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("h2",null,l.a.createElement(m.b,{to:"/Home",className:" font-weight-bold navbar-brand nav-text nav-link"},l.a.createElement("span",null,"\ud83d\udcc5")," The Festivities Begin In ...")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("ul",{className:"nav-item dropdown"},l.a.createElement(m.b,{to:"/halloween",className:"title-text"},"Halloween"))),l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("ul",null,l.a.createElement(m.b,{to:"/about",className:"title-text"},"About")))),l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("ul",null,l.a.createElement("h2",{className:"fs-4"},"Today: ",s)))))},E=t(43),d=Object(i.a)(new Date,"MM-dd-yyyy"),b=new Date(2022,9,31);console.log(d,b);var v=Object(E.a)(new Date(b),new Date(d));console.log(v);var g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"I'm a Placeholder"))},w=t(44),p=t(42),f=Object(i.a)(new Date(2022,8,30),"MM/dd/yyyy"),h=Object(w.a)(new Date),N=Object(w.a)(new Date(2022,8,30));console.log(h,N);var y=Object(p.a)(new Date(N),new Date(h));var D=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-md"},l.a.createElement("div",{className:"border m-3"},l.a.createElement("h2",{className:"text-center"},"Upcoming"),l.a.createElement("ul",null,l.a.createElement("li",{className:"fw-bold"},"Hocus Pocus 2: Disney+ Premier ",f," in ",y," days.")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null,"Freeform 31 nights of October (TBD)."),l.a.createElement("li",null,"AMC Fearfest 2022 (10/1/2022)."),l.a.createElement("li",null,"Disney Channel Monstober (9/25/2022)."),l.a.createElement("li",null,"Syfy 31 Days of Halloween (TBD)."),l.a.createElement("li",null,"TMC October Horror (10/1/2022)."),l.a.createElement("li",null,"Ghostober 2022- Travel/Discovery (TBD).")))))},k=t(21),j=[{title:"Ernest",link:"I am Batman!"},{title:"Hocus Pocus",link:"I am Batman!"},{title:"Halloweentown",link:"I am Batman!"},{title:"Nightmare Before Xmas",link:"I am Batman!"}],B=[{title:"Freddy",link:"I am Batman!"},{title:"Hocus Pocus",link:"I am Batman!"},{title:"Scream",link:"I am Batman!"},{title:"Zombie",link:"I am Batman!"}];var F=function(e){return l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("li",null," ",e.title,": ",e.link))};var x=function(){var e=Object(n.useState)(!0),a=Object(k.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-md"},l.a.createElement("div",{className:"border m-3"},l.a.createElement("h2",{className:"text-center"},"Movies"),l.a.createElement("ul",null,l.a.createElement("button",{onClick:function(){return r(!t)}},"Toggle"),l.a.createElement("br",null),t?l.a.createElement(l.a.Fragment,null,j.map(function(e){return l.a.createElement(F,{title:e.title,link:e.link})})):l.a.createElement(l.a.Fragment,null,B.map(function(e){return l.a.createElement(F,{title:e.title,link:e.link})}))))))},O=Object(w.a)(new Date),I=Object(w.a)(new Date(2022,9,31)),T=Object(p.a)(new Date(I),new Date(O));console.log(T);var M=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("div",{className:"mt-4 p-5 rounded jumbo d-flex justify-content-center"},l.a.createElement("span",null,l.a.createElement("h2",{className:"p-3 border border-5 border-dark text-center bg-light rounded justify-content-center align-self-center fs-1 fw-bold header"},"Halloween"))),l.a.createElement("div",{className:"container"},l.a.createElement("br",null),l.a.createElement("h1",{className:"text-center"},T," Days Until Halloween!"),l.a.createElement("div",{className:"row"},l.a.createElement(D,null),l.a.createElement(x,null),l.a.createElement("div",{className:"col-md"},l.a.createElement("div",{className:"border m-3"},l.a.createElement("h2",{className:"text-center"},"TBD"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, ipsa animi molestiae fuga nemo quae asperiores aspernatur rem accusantium? Totam, repellendus? Ipsum repudiandae eaque vitae rem harum, ipsam nesciunt neque?"))))))};var H=function(){return l.a.createElement(m.a,{basename:"/project-spooky"},l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement(o.d,null,l.a.createElement(o.b,{exact:!0,path:"/home",component:g}),l.a.createElement(o.b,{exact:!0,path:"/halloween",component:M}),l.a.createElement(o.b,{render:function(){return l.a.createElement(o.a,{to:"/home"})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,45)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)}),C()}},[[22,3,2]]]);
//# sourceMappingURL=main.68bf781f.chunk.js.map