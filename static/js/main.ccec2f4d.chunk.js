(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){e.exports=a(256)},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){e.exports=a.p+"static/media/happyRick.47611180.png"},255:function(e,t,a){e.exports=a.p+"static/media/madRick.81ba3bc2.png"},256:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(21),r=a.n(c),i=(a(167),a(31)),u=a(32),l=a(34),s=a(33),m=a(35),d=(a(168),a(11)),h=a(14),p=a.n(h),b=a(43),k=a(22),E=a.n(k),f=a(30),w=a.n(f),j=a(23),v=a.n(j),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={numQuotes:1,quote:""},a.author="-- Rick Sanchez",a.pullQuote=a.pullQuote.bind(Object(d.a)(Object(d.a)(a))),a.shareQuote=a.shareQuote.bind(Object(d.a)(Object(d.a)(a))),a.endPoint="http://loremricksum.com/api/?paragraphs=".concat(a.state.numQuotes,"&quotes=",2),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"pullQuote",value:function(){var e=this;fetch(this.endPoint).then(function(e){return e.json()}).then(function(t){t.data?e.setState({quote:t.data}):console.error("Hurry Morty, get the debugger Morty!")})}},{key:"shareQuote",value:function(){window.open("https://twitter.com/intent/tweet?text=".concat(this.state.quote," -- Rick Sanchez"))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("img",{id:"rick",src:a(169),alt:"Happy Rick"}),o.a.createElement("h1",{id:"header"},"Quote Machineeeeeeee!"),o.a.createElement(b.a,{className:"card"},o.a.createElement(E.a,{className:"button"},o.a.createElement(p.a,{id:"new-quote",variant:"outlined",color:"primary",onClick:this.pullQuote},"Click Here to Wubalubadubdub!"))),o.a.createElement("br",null),this.state.quote&&o.a.createElement(b.a,{id:"Quote-Box",className:"card"},o.a.createElement(w.a,{id:"content"},o.a.createElement(v.a,{id:"text",component:"p"},this.state.quote),o.a.createElement(v.a,{id:"author",component:"p"},this.author)),o.a.createElement(E.a,{className:"button"},o.a.createElement(p.a,{id:"tweet-quote",variant:"outlined",color:"primary",onClick:this.shareQuote},"Tell Yo Friends!"))),o.a.createElement("br",null),o.a.createElement("img",{id:"rick2",src:a(255),alt:"Mad Rick"}))}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(y,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[162,1,2]]]);
//# sourceMappingURL=main.ccec2f4d.chunk.js.map