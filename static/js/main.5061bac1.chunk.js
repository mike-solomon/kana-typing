(this["webpackJsonpkana-typing"]=this["webpackJsonpkana-typing"]||[]).push([[0],{134:function(e,a){e.exports={hiraganaToValidRomajiMap:{"\u3042":["a"],"\u3044":["i"],"\u3046":["u"],"\u3048":["e"],"\u304a":["o"],"\u304b":["ka"],"\u304d":["ki"],"\u304f":["ku"],"\u3051":["ke"],"\u3053":["ko"],"\u304d\u3083":["kya"],"\u304d\u3085":["kyu"],"\u304d\u3087":["kyo"]}}},215:function(e,a,n){e.exports=n(347)},216:function(e,a,n){},217:function(e,a,n){},219:function(e,a,n){},332:function(e,a,n){},347:function(e,a,n){"use strict";n.r(a);var t=n(365),r=n(364),c=(n(216),n(139)),l=(n(217),n(1)),o=n.n(l),i=(n(219),n(56)),u=function(e){return console.log("props: ".concat(JSON.stringify(e))),o.a.createElement("div",{className:"KanaDisplay"},o.a.createElement(i.a,{size:"larger",content:e.content}))},m=(n(332),n(204)),s=function(e){return o.a.createElement("div",{className:"TypingBar"},o.a.createElement(m.a,{fluid:!0,value:e.value,onChange:e.onChange}),o.a.createElement("div",{className:"RandomInfo"},o.a.createElement("p",null,"You entered ",e.value.length," amount of characters."),o.a.createElement("p",null,"You entered ",e.value," characters.")))},p=n(134);var d=function(){var e=function(){var e=Object.keys(p.hiraganaToValidRomajiMap).length-1,a=Math.floor(Math.random()*(e-0+1)+0);return Object.keys(p.hiraganaToValidRomajiMap)[a]},a=Object(l.useState)(""),n=Object(c.a)(a,2),t=n[0],r=n[1],i=Object(l.useState)(e()),m=Object(c.a)(i,2),d=m[0],g=m[1];return o.a.createElement("div",{className:"Game"},o.a.createElement(u,{content:d}),o.a.createElement(s,{value:t,onChange:function(a){r(a.target.value),"heyo"===a.target.value&&(console.log("winnar"),r(""),g(e()))}}))};var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",null,"Kana Typing")),o.a.createElement(d,null))},h=n(34);n.n(h).a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(t.a,{theme:r.a},o.a.createElement(g,null))),document.getElementById("root"))}},[[215,1,2]]]);
//# sourceMappingURL=main.5061bac1.chunk.js.map