"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2753],{2753:(e,s,t)=>{t.r(s),t.d(s,{default:()=>Z});var l=t(72791),i=t(20743),a=t(56153),o=t(27988),n=t(65095),r=t(82357),c=t(53638),d=t(48284),h=t(36187),m=t(82377),x=t(54555),u=t(81815),j=t(80184);const g=()=>(0,j.jsx)("div",{id:"detailsPane",style:{position:"relative",top:"50%",margin:"auto",height:"100px",width:"200px",border:"1px solid #bbb"}});var p=t(34257);const C=(0,l.lazy)((()=>t.e(5170).then(t.bind(t,85170)))),Z=()=>{const[e,s]=(0,l.useState)(null),[t,Z]=(0,l.useState)("#fff"),f=(0,l.useCallback)((e=>{Z(e.hex)}),[]),b=(0,l.useCallback)((()=>{const e=document.getElementById("cusImage"),s=e.getContext("2d");return s.clearRect(0,0,e.width,e.height),s}),[]),k=(0,l.useCallback)((e=>{const t=e.target.files[0];if(!t.type.startsWith("image/"))return s("Please upload an image"),void setTimeout((()=>s(null)),5e3);const l=new Image,i=URL.createObjectURL(t);l.src=i,l.onload=()=>{b().drawImage(l,0,0,360,360),s("Click at a position in the image to start flood fill with the color of your choice"),setTimeout((()=>s(null)),5e3)}}),[]);return(0,j.jsxs)(i.Z,{children:[(0,j.jsx)(a.Z,{children:(0,j.jsx)(o.Z,{sm:12,children:e&&(0,j.jsx)(n.Z,{color:"primary",children:e})})}),(0,j.jsxs)(a.Z,{children:[(0,j.jsx)(o.Z,{sm:6,children:(0,j.jsxs)(r.Z,{style:{border:"1px solid rgba(22,45,167,0.9)"},children:[(0,j.jsx)(c.Z,{children:"Flood Fill Algorithm on Custom Image"}),(0,j.jsxs)(d.Z,{className:"text-center",children:[(0,j.jsx)(h.Z,{children:"Choose Custom Image"}),(0,j.jsx)(m.Z,{children:(0,j.jsx)(x.Z,{id:"getCustomImage",type:"file",placeholder:"Custom Image",onChange:k})}),(0,j.jsx)(u.Z,{color:"info",outline:!0,onClick:b,className:"mt-4",children:"Clear Canvas"})]})]})}),(0,j.jsx)(o.Z,{sm:6,children:(0,j.jsx)(p.xS,{color:t,onChangeComplete:f})})]}),(0,j.jsxs)(a.Z,{children:[(0,j.jsx)(o.Z,{sm:6,children:(0,j.jsx)(C,{fill:t})}),(0,j.jsx)(o.Z,{sm:6,children:(0,j.jsx)(g,{})})]})]})}}}]);
//# sourceMappingURL=2753.bf93b770.chunk.js.map