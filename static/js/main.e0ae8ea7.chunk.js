(this.webpackJsonplotto2=this.webpackJsonplotto2||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(18)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),i=(n(14),n(1)),l=n(2),u=n(5),s=n(4),m=n(3),h=n(6),f=(n(15),function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"Ball"},this.props.num)}}]),e}(a.Component)),p=(n(16),function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).state={nums:Array.from({length:n.props.numBalls})},n.handleClick=n.handleClick.bind(Object(m.a)(n)),n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"handleClick",value:function(){this.generate()}},{key:"generate",value:function(){var t=this;this.setState((function(e){return{nums:e.nums.map((function(e){return Math.floor(Math.random()*t.props.maxNum)}))}}))}},{key:"render",value:function(){return o.a.createElement("section",{className:"Lottery"},o.a.createElement("h1",null,this.props.title),o.a.createElement("div",null,this.state.nums.map((function(t){return o.a.createElement(f,{num:t})}))),o.a.createElement("button",{className:"Lottery-button",onClick:this.handleClick},"Generate"))}}]),e}(a.Component));p.defaultProps={title:"lotto",maxNum:99,numBalls:6};var d=p;n(17);var b=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.e0ae8ea7.chunk.js.map