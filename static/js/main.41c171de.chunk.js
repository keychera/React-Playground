(this.webpackJsonpreactplayground=this.webpackJsonpreactplayground||[]).push([[0],{65:function(e,t,a){e.exports=a(98)},70:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(17),r=a.n(c),u=(a(70),a(21)),o=a(4),i=a(14),m=function(){return l.a.createElement("div",null,l.a.createElement(i.a,null,l.a.createElement("title",null,"keychera's CV")),l.a.createElement("h2",null,"Hello CV!"))},s=a(102),E=a(101),d=function(){return l.a.createElement(s.b,{align:"center"},l.a.createElement(u.b,{to:"/cv"},l.a.createElement(E.a,null,"CV")),l.a.createElement(u.b,{to:"/tictactoe"},l.a.createElement(E.a,null,"React Tutorial result: Tic Tac Toe")))},v=a(22),f=(a(96),function(e){var t=e.value,a=e.onClick;return l.a.createElement("button",{className:"square",onClick:a},t)}),p=function(e){var t=e.squares,a=e.handleClick,n=function(e){return l.a.createElement(f,{value:t[e],onClick:function(){return a(e)}})};return l.a.createElement("div",null,l.a.createElement("div",{className:"board-row"},n(0),n(1),n(2)),l.a.createElement("div",{className:"board-row"},n(3),n(4),n(5)),l.a.createElement("div",{className:"board-row"},n(6),n(7),n(8)))},b=function(){var e,t=Object(n.useState)([{squares:Array(9).fill(null)}]),a=Object(v.a)(t,2),c=a[0],r=a[1],u=Object(n.useState)(!0),o=Object(v.a)(u,2),m=o[0],s=o[1],E=Object(n.useState)(!1),d=Object(v.a)(E,2),f=d[0],b=d[1],h=Object(n.useState)(0),g=Object(v.a)(h,2),j=g[0],y=g[1],O=c.slice(0,j+1),k=O[j],q=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(v.a)(t[a],3),l=n[0],c=n[1],r=n[2];if(e[l]&&e[l]===e[c]&&e[l]===e[r])return e[l]}return null}(k.squares);q?(f||b(!0),e="Winner: ".concat(q)):(f&&b(!1),e="Next player: ".concat(m?"X":"O"));var w=O.map((function(e,t){var a=t?"Go to move #"+t:"Go to game start";return l.a.createElement("li",{key:t},l.a.createElement("button",{onClick:function(){return function(e){y(e),s(e%2===0)}(t)}},a))}));return l.a.createElement("div",{className:"game"},l.a.createElement(i.a,null,l.a.createElement("title",null,"Tic Tac Toe")),l.a.createElement("div",{className:"game-board"},l.a.createElement(p,{squares:k.squares,handleClick:function(e){var t=k.squares.slice();f||t[e]||(t[e]=m?"X":"O",r(O.concat([{squares:t}])),s(!m),y(O.length))}})),l.a.createElement("div",{className:"game-info"},l.a.createElement("div",null,e),l.a.createElement("ol",null,w)))},h=function(){return l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/cv"},l.a.createElement(m,null)),l.a.createElement(o.a,{path:"/tictactoe"},l.a.createElement(b,null)),l.a.createElement(o.a,{path:"/"},l.a.createElement(d,null)))};a(97);function g(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.a,null,l.a.createElement("title",null,"playground")),l.a.createElement(u.a,{basename:"/react-playground"},l.a.createElement(h,null)))}r.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement("script",{type:"text/javascript"},function(e){if(e.search){var t={};e.search.slice(1).split("&").forEach((function(e){var a=e.split("=");t[a[0]]=a.slice(1).join("=").replace(/~and~/g,"&")})),void 0!==t.p&&window.history.replaceState(null,null,e.pathname.slice(0,-1)+(t.p||"")+(t.q?"?"+t.q:"")+e.hash)}}(window.location))),l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null))),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.41c171de.chunk.js.map