(this["webpackJsonppomodoro-clock-typescript"]=this["webpackJsonppomodoro-clock-typescript"]||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/beep.ca08d4b3.mp3"},15:function(e,t,a){e.exports=a(28)},25:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),i=a(8),o=a(30),m=a(31),s=a(29),u=a(9),p=a(7),E=a(32),d=a(6),f=(a(25),function(e){var t=e.type,a=e.time,n=e.onClick,r=t.charAt(0).toUpperCase()+t.slice(1);return c.a.createElement(s.a,null,c.a.createElement("div",{id:"".concat(t,"-label"),className:"label m-1"},"".concat(r," Length")),c.a.createElement(E.a,{id:"".concat(t,"-decrement"),variant:"outline-primary",onClick:function(){return n(-1)}},c.a.createElement(d.a,{icon:"minus"})),c.a.createElement("span",{id:"".concat(t,"-length"),className:"length"},a),c.a.createElement(E.a,{id:"".concat(t,"-increment"),variant:"outline-primary",onClick:function(){return n(1)}},c.a.createElement(d.a,{icon:"plus"})))}),b=a(14),v=a.n(b),k=(a(26),function(e){var t=e.timerLabel,a=e.timeLeft,n=e.isActive,r=e.secondsToString,l=e.onStartStopButtonClick,i=e.onResetButtonClick;return c.a.createElement(s.a,null,c.a.createElement(o.a,{className:"timer-container"},c.a.createElement(m.a,{className:"row1"},c.a.createElement(s.a,{className:"align-self-center"},c.a.createElement("div",{id:"timer-label",className:"timer-label"},t))),c.a.createElement(m.a,{className:"row2"},c.a.createElement(s.a,{className:"align-self-center"},c.a.createElement("div",{id:"time-left",className:"time-left"},r(a)))),c.a.createElement(m.a,{className:"row3"},c.a.createElement(s.a,{className:"align-self-center button-container"},c.a.createElement(E.a,{id:"start_stop",className:"m-1",variant:"outline-primary",onClick:l},c.a.createElement(d.a,{icon:n?"pause":"play"})),c.a.createElement(E.a,{id:"reset",className:"m-1",variant:"outline-primary",onClick:i},c.a.createElement(d.a,{icon:"undo"}))))),c.a.createElement("audio",{id:"beep",src:v.a},c.a.createElement("track",{kind:"captions"})))});a(27);u.b.add(p.d,p.a,p.c,p.b,p.e);var S=function(){var e=Object(n.useState)(5),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(25),u=Object(i.a)(l,2),p=u[0],E=u[1],d=Object(n.useState)("Session"),b=Object(i.a)(d,2),v=b[0],S=b[1],y=Object(n.useState)(1500),N=Object(i.a)(y,2),g=N[0],C=N[1],j=Object(n.useState)(!1),w=Object(i.a)(j,2),O=w[0],h=w[1],B=function(){document.getElementById("beep").play()};Object(n.useEffect)((function(){var e=0;return O&&0!==g?e=window.setInterval((function(){C((function(e){return e-1}))}),1e3):O&&0===g&&"Session"===v?(B(),e=window.setTimeout((function(){S("Break"),C(60*a)}),1e3)):O&&0===g&&"Break"===v?(B(),e=window.setTimeout((function(){S("Session"),C(60*p)}),1e3)):O||0===g||clearInterval(e),function(){return clearInterval(e)}}),[a,O,p,g,v]);var I=function(e){return e<10?"0".concat(e.toString()):e.toString()},L=function(e){return e<1?1:e>60?60:e};return c.a.createElement(o.a,{className:"text-center"},c.a.createElement(m.a,null,c.a.createElement(s.a,null,c.a.createElement("h1",null,"Pomodoro Clock"))),c.a.createElement(m.a,null,c.a.createElement(f,{type:"break",time:a,onClick:function(e){r(L(a+e))}}),c.a.createElement(f,{type:"session",time:p,onClick:function(e){var t=L(p+e);E(t),C(60*t)}})),c.a.createElement(m.a,null,c.a.createElement(k,{timerLabel:v,timeLeft:g,isActive:O,secondsToString:function(e){var t=I(Math.floor(e/60)),a=I(e%60);return"".concat(t,":").concat(a)},onStartStopButtonClick:function(){h(!O)},onResetButtonClick:function(){r(5),E(25),S("Session"),C(1500),h(!1),function(){var e=document.getElementById("beep");e.currentTime=0,e.pause()}()}})))};l.a.render(c.a.createElement(S,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7f273ead.chunk.js.map