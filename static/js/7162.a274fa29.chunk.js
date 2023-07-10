"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7162],{267:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2791),a=n(184);class i extends r.Component{render(){let e=null;switch(this.props.direction.toLowerCase()){case"left":e=(0,a.jsx)("i",{className:"ico left"});break;case"up":e=(0,a.jsx)("i",{className:"ico up"});break;case"down":e=(0,a.jsx)("i",{className:"ico down"});break;default:e=(0,a.jsx)("i",{className:"ico right"})}return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"link-label",children:this.props.label}),(0,a.jsx)("div",{className:"link",children:e})]})}}var s=n(2541);class o extends r.Component{render(){let e,t=null;switch(this.props.type.toLowerCase()){case"stack":t=[],0===this.props.data.index&&t.push((0,a.jsx)(s.Z,{p:1,textAlign:"center",children:"Top"},"Top")),e={border:"1px solid white",background:"rgba(40,40,160,0.8)"},this.props.highlight&&(e.background="rgba(30,150,40,0.8)"),t.push((0,a.jsxs)(s.Z,{p:1,style:e,children:[(0,a.jsx)(s.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:this.props.data.value}),(0,a.jsx)(s.Z,{color:"white",p:1,textAlign:"center",fontSize:12,children:this.props.data.index})]},"".concat(this.props.data.index,"-").concat(this.props.data.value)));break;case"array":e={border:"1px solid white",background:"rgba(40,40,120,0.8)"},this.props.highlight&&(e.background="rgba(30,150,40,0.8)"),t=(0,a.jsxs)(s.Z,{p:1,style:e,children:[(0,a.jsx)(s.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:this.props.data.value}),(0,a.jsx)(s.Z,{color:"white",p:1,textAlign:"center",fontSize:12,children:this.props.data.index})]},this.props.data.index);break;case"linkedlist":e={border:"1px solid white",background:"rgba(40,60,180,0.8)"},this.props.highlight&&(e.background="rgba(30,150,40,0.8)"),t=[(0,a.jsxs)(s.Z,{p:1,style:e,children:[(0,a.jsx)(s.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:this.props.data.value}),(0,a.jsx)(s.Z,{color:"white",p:1,textAlign:"center",fontSize:12,children:this.props.data.index})]},"".concat(this.props.data.value,"-").concat(this.props.data.index))],this.props.next&&t.push((0,a.jsx)(s.Z,{component:"span",children:(0,a.jsx)(i,{direction:"right"})},"".concat(this.props.data.index,"-").concat(this.props.data.value,"-nextlink")));break;case"queues":e={border:"1px solid white",background:"rgba(40,60,180,0.8)"},this.props.highlight&&(e.background="rgba(30,150,40,0.8)"),t=[(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Z,{p:1,style:e,children:(0,a.jsx)(s.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:this.props.data.value})}),(0,a.jsxs)(s.Z,{color:"white",p:1,className:0===this.props.data.index||!1===this.props.next?"bg-danger":"",textAlign:"center",fontSize:12,children:[0===this.props.data.index?(0,a.jsxs)("typography",{children:["Front ",(0,a.jsx)("br",{})," "]}):(0,a.jsx)("div",{}),!1===this.props.next?(0,a.jsx)("typography",{children:"Rear"}):(0,a.jsx)("div",{})]})]},"".concat(this.props.data.value,"-").concat(this.props.data.index))],this.props.next&&t.push((0,a.jsx)(s.Z,{component:"span",children:(0,a.jsx)(i,{direction:"right"})},"".concat(this.props.data.index,"-").concat(this.props.data.value,"-nextLink")));break;case"sets":e={border:"1px solid black",background:"rgba(40,60,180,0.8)",borderRadius:"50%",minHeight:"100px",minWidth:"100px",margin:"20px"},this.props.AllGreater&&(e.background="rgba(242,19,23,0.8)"),this.props.AllSmaller&&(e.background="rgba(250,183,0,0.8)"),this.props.highlight&&(e.background="rgba(30,150,40,0.8)"),t=[(0,a.jsx)(s.Z,{p:1,style:e,children:(0,a.jsx)(s.Z,{p:0,color:"white",fontSize:18,children:(0,a.jsx)("div",{style:{position:"relative",top:"45%",textAlign:"center"},children:this.props.data.value})})},this.props.data.value)]}return this.props.data&&t}}},7162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var r=n(2791),a=n(1288),i=n(283),s=n(2953),o=n(9526),l=n(8182),c=n(8596),d=n(8912),p=n(2475),h=n(4135),x=n(6828),u=n(83),g=n(4697),m=n(8302),b=n(6513),f=n(3108),j=n(3188),Z=n(184);const v=(0,c.Z)((e=>({root:{minWidth:3},bullet:{display:"inline-block",margin:"0 8px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:175,marginTop:33},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(1)}}))),k=(0,c.Z)((e=>({root:{border:"1px solid #e2e2e1",overflow:"hidden",borderRadius:4,margin:"4px 0px 0px 0px",backgroundColor:"#fcfcfb",transition:e.transitions.create(["border-color","box-shadow"]),"&:hover":{backgroundColor:"#fff"},"&$focused":{backgroundColor:"#fff",boxShadow:"".concat((0,f.U1)(e.palette.primary.main,.25)," 0 0 0 2px"),borderColor:e.palette.primary.main}},focused:{}})));function y(e){const t=k();return(0,Z.jsx)(j.Z,{InputProps:{classes:t,disableUnderline:!0},...e})}function C(e){const t=v();const n=r.useRef(null);r.useEffect((()=>{if(null==n.current)return null}),[]);const a=v(),[o,l]=r.useState(null);return e.open?(0,Z.jsxs)(i.Z,{className:a.root,style:{border:"1px solid rgba(22,45,167,0.9)"},children:[(0,Z.jsx)(s.Z,{className:"bg-primary text-white",children:(0,Z.jsx)(m.Z,{variant:"h5",component:"h2",children:"Insert"})}),(0,Z.jsx)(s.Z,{className:" text-center pb-0 mt-0",children:(0,Z.jsx)(m.Z,{variant:"h6",component:"h2",children:"Enter data (FIFO)"})}),(0,Z.jsx)(g.Z,{children:(0,Z.jsxs)(x.Z,{variant:"outlined",className:t.formControl,children:[(0,Z.jsx)(y,{label:"Enter Data",className:a.margin,onChange:e=>{l(e.target.value)},value:o||"",variant:"filled",id:"reddit-input"}),(0,Z.jsx)(b.Z,{className:"mt-2",onClick:()=>{e.insert(o,"end"),l(null)},variant:"outlined",color:"primary",children:"Submit"})]})})]}):(0,Z.jsx)("div",{})}const w=(0,c.Z)((e=>({root:{minWidth:3},bullet:{display:"inline-block",margin:"0 8px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:175,marginTop:33},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(1)}})));function N(e){const t=w();return e.open?(0,Z.jsxs)(i.Z,{className:t.root,style:{border:"1px solid rgba(22,45,167,0.9)"},children:[(0,Z.jsx)(s.Z,{className:"bg-primary text-white ",children:(0,Z.jsxs)(m.Z,{variant:"h5",component:"h2",children:[" ","Delete"]})}),(0,Z.jsx)(g.Z,{children:(0,Z.jsx)(x.Z,{variant:"outlined",className:t.formControl,children:(0,Z.jsx)(b.Z,{className:"mt-2",onClick:()=>{e.del("start")},variant:"outlined",color:"primary",children:"DELETE"})})})]}):(0,Z.jsx)("div",{})}const S=(0,c.Z)((e=>({root:{minWidth:3},bullet:{display:"inline-block",margin:"0 8px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:175,marginTop:33},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(1)}}))),I=(0,c.Z)((e=>({root:{border:"1px solid #e2e2e1",overflow:"hidden",borderRadius:4,margin:"4px 0px 0px 0px",backgroundColor:"#fcfcfb",transition:e.transitions.create(["border-color","box-shadow"]),"&:hover":{backgroundColor:"#fff"},"&$focused":{backgroundColor:"#fff",boxShadow:"".concat((0,f.U1)(e.palette.primary.main,.25)," 0 0 0 2px"),borderColor:e.palette.primary.main}},focused:{}})));function z(e){const t=I();return(0,Z.jsx)(j.Z,{InputProps:{classes:t,disableUnderline:!0},...e})}function E(e){const t=S(),[n,a]=r.useState(null),[o,l]=r.useState(null),c=S();return e.open?(0,Z.jsxs)(i.Z,{className:t.root,style:{border:"1px solid rgba(22,45,167,0.9)"},children:[(0,Z.jsx)(s.Z,{className:"bg-primary text-white",children:(0,Z.jsx)(m.Z,{variant:"h5",component:"h2",children:"Update"})}),(0,Z.jsx)(s.Z,{className:" text-center pb-0 mt-0",children:(0,Z.jsx)(m.Z,{variant:"h6",component:"h2",children:"Value at position"})}),(0,Z.jsx)(g.Z,{children:(0,Z.jsxs)(x.Z,{variant:"outlined",className:c.formControl,children:[(0,Z.jsx)(z,{label:"Index",className:t.margin,onChange:e=>{l(e.target.value)},value:o||"",variant:"filled",id:"reddit-input"}),(0,Z.jsx)(z,{label:"Value",className:t.margin,onChange:e=>{a(e.target.value)},value:n||"",variant:"filled",id:"reddit-input"}),(0,Z.jsx)(b.Z,{onClick:()=>{e.update(o,n),a(null),l(null)},className:"mt-2",variant:"outlined",color:"primary",children:"Submit"})]})})]}):(0,Z.jsx)("div",{})}const A=(0,c.Z)((e=>({root:{minWidth:3},bullet:{display:"inline-block",margin:"0 8px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:175,marginTop:33},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(1)}}))),T=(0,c.Z)((e=>({root:{border:"1px solid #e2e2e1",overflow:"hidden",borderRadius:4,margin:"4px 0px 0px 0px",backgroundColor:"#fcfcfb",transition:e.transitions.create(["border-color","box-shadow"]),"&:hover":{backgroundColor:"#fff"},"&$focused":{backgroundColor:"#fff",boxShadow:"".concat((0,f.U1)(e.palette.primary.main,.25)," 0 0 0 2px"),borderColor:e.palette.primary.main}},focused:{}})));function U(e){const t=T();return(0,Z.jsx)(j.Z,{InputProps:{classes:t,disableUnderline:!0},...e})}function W(e){const t=A(),n=A(),[a,o]=r.useState(null);return e.open?(0,Z.jsxs)(i.Z,{className:n.root,style:{border:"1px solid rgba(22,45,167,0.9)"},children:[(0,Z.jsx)(s.Z,{className:"  bg-primary text-white",children:(0,Z.jsxs)(m.Z,{variant:"h5",component:"h2",children:[" ","Search"," "]})}),(0,Z.jsx)(s.Z,{className:"text-center pb-0 mt-0",children:(0,Z.jsx)(m.Z,{variant:"h6",component:"h2",children:"Data"})}),(0,Z.jsx)(g.Z,{children:(0,Z.jsxs)(x.Z,{variant:"outlined",className:t.formControl,children:[(0,Z.jsx)(U,{label:"Value",className:n.margin,onChange:e=>{o(e.target.value)},value:a||"",variant:"filled",id:"reddit-input"}),(0,Z.jsx)(b.Z,{onClick:()=>{e.search(a,null),o(null)},variant:"outlined",color:"primary",className:"mt-2",children:"Submit"})]})})]}):(0,Z.jsx)("div",{})}var D=n(267);const R=(0,c.Z)((e=>({root:{flexGrow:1},paper:{padding:e.spacing(2),color:e.palette.text.secondary,margin:e.spacing(2)},control:{padding:e.spacing(2)}}))),L=(0,c.Z)({root:{"&:hover":{backgroundColor:"transparent"}},icon:{borderRadius:"50%",width:16,height:16,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"#f5f8fa",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))","$root.Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:"#137cbd",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:16,height:16,backgroundImage:"radial-gradient(#fff,#fff 28%,transparent 32%)",content:'""'},"input:hover ~ &":{backgroundColor:"#106ba3"}}});function F(e){const t=L();return(0,Z.jsx)(d.Z,{className:t.root,disableRipple:!0,color:"default",checkedIcon:(0,Z.jsx)("span",{className:(0,l.Z)(t.icon,t.checkedIcon)}),icon:(0,Z.jsx)("span",{className:t.icon}),...e})}function B(){const e=R();let[t,n]=(0,r.useState)(null),[l,c]=(0,r.useState)(null),[d,g]=(0,r.useState)(!1),[m,b]=(0,r.useState)(!1),f=e=>{let t=e.target.value;b(t)},j=()=>{let e=t;for(;e;)e.highlight=!1,e=e.next;n(t)};return r.useEffect((()=>{d||(()=>{let e=[];if(t){let n=t,a=0;for(;n;)n.next?e.push((0,Z.jsx)(r.Fragment,{children:(0,Z.jsx)(D.Z,{data:{value:n.info,index:a},type:"queues",next:!0,highlight:n.highlight})},"".concat(a,"-").concat(n.info))):e.push((0,Z.jsx)(r.Fragment,{children:(0,Z.jsx)(D.Z,{data:{value:n.info,index:a},type:"queues",next:!1,highlight:n.highlight})},"".concat(a,"-").concat(n.info))),n=n.next,a++}c(e),g(!0)})()})),(0,Z.jsx)("div",{className:e.root,children:(0,Z.jsxs)(a.Z,{container:!0,direction:"row",justify:"left",alignItems:"center",children:[(0,Z.jsx)(a.Z,{container:!0,sm:4,children:(0,Z.jsxs)(o.Z,{className:e.paper,children:[(0,Z.jsx)(a.Z,{item:!0,xs:12,sm:12,spacing:3,alignItems:"center",children:(0,Z.jsxs)(i.Z,{children:[(0,Z.jsx)("h6",{className:"bg-primary text-center text-white p-3",children:"Operations"}),(0,Z.jsx)(s.Z,{className:"pl-0 pr-0 pt-0 text-left",children:(0,Z.jsxs)(x.Z,{className:"pl-3",component:"fieldset",children:[(0,Z.jsx)(u.Z,{component:"legend"}),(0,Z.jsxs)(p.Z,{"aria-label":"gender",name:"customized-radios",children:[(0,Z.jsx)(h.Z,{value:"Insert",onChange:f,control:(0,Z.jsx)(F,{}),label:"Insert"}),(0,Z.jsx)(h.Z,{value:"Delete",onChange:f,control:(0,Z.jsx)(F,{}),label:"Delete"}),(0,Z.jsx)(h.Z,{value:"Update",onChange:f,control:(0,Z.jsx)(F,{}),label:"Update"}),(0,Z.jsx)(h.Z,{value:"Search",onChange:f,control:(0,Z.jsx)(F,{}),label:"Search"})]})]})})]})}),(0,Z.jsxs)(a.Z,{className:"mt-3",item:!0,spacing:4,xs:12,sm:12,children:[(0,Z.jsx)(C,{open:"Insert"===m,insert:(e,r)=>{((e,r)=>{if(e){j();let a,i={info:e,next:null,highlight:!1};if(t)if("start"===r.toLowerCase())i.next=t,n({...i});else{for(a=t;a.next;)a=a.next;a.next=i,n({...t})}else n({...i});g(!1)}else alert("Empty Insert")})(e,r)}}),(0,Z.jsx)(N,{open:"Delete"===m,del:(e,r,a)=>{(e=>{t?(j(),e?("start"===e&&(t=t.next),n(t)):alert("Invalid Deletion Exception"),g(!1)):alert("Queue is empty")})(e)}}),(0,Z.jsx)(E,{open:"Update"===m,update:(e,r)=>{((e,r)=>{if(e&&r&&parseInt(e)>=0){j();let a=t,i=t;for(;i&&--e>=0;)i=i.next;i?(i.info=r,i.highlight=!0,n(a),g(!1)):alert("Position out of bounds")}else alert("Cannot update")})(e,r)}}),(0,Z.jsx)(W,{open:"Search"===m,search:(e,r)=>{((e,r)=>{if(e){j();let r=t,a=t;for(;a;)a.info===e&&(a.highlight=!0),a=a.next;n(r),g(!1)}else if(r){let e,a=t;if("start"===r.toLowerCase())a.highlight=!0,n({...a}),g(!1);else{for(e=t;e.next;)e=e.next;e.highlight=!0,n({...t}),g(!1)}}else alert("Empty Search")})(e,r)}})]})]})}),(0,Z.jsx)(a.Z,{container:!0,sm:8,children:l})]})})}}}]);
//# sourceMappingURL=7162.a274fa29.chunk.js.map