"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8018],{8018:(e,l,a)=>{a.r(l),a.d(l,{default:()=>m});var r=a(2791),t=a(5095),s=a(184);const n="HELP",i="BETRAY",m=()=>{const[e,l]=(0,r.useState)(2),[a,m]=(0,r.useState)(Array.from({length:2},(()=>Array(2).fill(n)))),[p,u]=(0,r.useState)(null),c=a.map((e=>e.map(((l,r)=>{let t=0;return l===n?(t+=e.filter((e=>e===n)).length-1,t+=a.map((e=>e[r])).filter((e=>e===n)).length-1):(t+=e.filter((e=>e===i)).length,t+=a.map((e=>e[r])).filter((e=>e===i)).length),t})))),d=(0,r.useCallback)((e=>{const a=parseInt(e.target.value);a<2||a>8?u({text:"Number of prisoners must be between 2 and 8",type:"danger"}):(l(a),m(Array.from({length:a},(()=>Array(a).fill(n)))))}),[]),h=(0,r.useCallback)(((e,l)=>{const r=a.map(((a,r)=>a.map(((a,t)=>r===l&&t===e?a===n?i:n:a))));m(r)}),[a]);return(0,s.jsxs)("div",{className:"game",children:[(0,s.jsx)("h1",{children:"Prisoner's Dilemma"}),(0,s.jsxs)("label",{children:["Number of Prisoners and Turns"," ",(0,s.jsx)("input",{type:"number",value:e,onChange:d,min:"2",max:"8"})]}),(0,s.jsx)("div",{className:"grid",style:{gridTemplateColumns:`repeat(${e}, minmax(48px, 1fr))`},children:a.map(((e,l)=>(0,s.jsx)("div",{className:"row",children:e.map(((e,a)=>(0,s.jsxs)("div",{className:"cell "+(e===n?"C":"D"),onClick:()=>h(a,l),children:[e," (",c[l][a],")"]},`${a}-${l}`)))},l)))}),p&&(0,s.jsx)(t.Z,{type:p.type,isOpen:!!p.text,toggle:()=>u(null),children:p.text})]})}}}]);
//# sourceMappingURL=8018.c0052951.chunk.js.map