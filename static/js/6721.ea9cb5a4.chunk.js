(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6721],{267:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(2791),i=r(184);class s extends n.Component{render(){let t=null;switch(this.props.direction.toLowerCase()){case"left":t=(0,i.jsx)("i",{className:"ico left"});break;case"up":t=(0,i.jsx)("i",{className:"ico up"});break;case"down":t=(0,i.jsx)("i",{className:"ico down"});break;default:t=(0,i.jsx)("i",{className:"ico right"})}return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"link-label",children:this.props.label}),(0,i.jsx)("div",{className:"link",children:t})]})}}var l=r(2541);class o extends n.Component{render(){let t,e=null;switch(this.props.type.toLowerCase()){case"stack":e=[],0===this.props.data.index&&e.push((0,i.jsx)(l.Z,{p:1,textAlign:"center",children:"Top"},"Top")),t={border:"1px solid white",background:"rgba(40,40,160,0.8)"},this.props.highlight&&(t.background="rgba(30,150,40,0.8)"),e.push((0,i.jsxs)(l.Z,{p:1,style:t,children:[(0,i.jsx)(l.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:this.props.data.value}),(0,i.jsx)(l.Z,{color:"white",p:1,textAlign:"center",fontSize:12,children:this.props.data.index})]},"".concat(this.props.data.index,"-").concat(this.props.data.value)));break;case"array":t={border:"1px solid white",background:"rgba(40,40,120,0.8)"},this.props.highlight&&(t.background="rgba(30,150,40,0.8)"),e=(0,i.jsxs)(l.Z,{p:1,style:t,children:[(0,i.jsx)(l.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:this.props.data.value}),(0,i.jsx)(l.Z,{color:"white",p:1,textAlign:"center",fontSize:12,children:this.props.data.index})]},this.props.data.index);break;case"linkedlist":t={border:"1px solid white",background:"rgba(40,60,180,0.8)"},this.props.highlight&&(t.background="rgba(30,150,40,0.8)"),e=[(0,i.jsxs)(l.Z,{p:1,style:t,children:[(0,i.jsx)(l.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:this.props.data.value}),(0,i.jsx)(l.Z,{color:"white",p:1,textAlign:"center",fontSize:12,children:this.props.data.index})]},"".concat(this.props.data.value,"-").concat(this.props.data.index))],this.props.next&&e.push((0,i.jsx)(l.Z,{component:"span",children:(0,i.jsx)(s,{direction:"right"})},"".concat(this.props.data.index,"-").concat(this.props.data.value,"-nextlink")));break;case"queues":t={border:"1px solid white",background:"rgba(40,60,180,0.8)"},this.props.highlight&&(t.background="rgba(30,150,40,0.8)"),e=[(0,i.jsxs)("div",{children:[(0,i.jsx)(l.Z,{p:1,style:t,children:(0,i.jsx)(l.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:this.props.data.value})}),(0,i.jsxs)(l.Z,{color:"white",p:1,className:0===this.props.data.index||!1===this.props.next?"bg-danger":"",textAlign:"center",fontSize:12,children:[0===this.props.data.index?(0,i.jsxs)("typography",{children:["Front ",(0,i.jsx)("br",{})," "]}):(0,i.jsx)("div",{}),!1===this.props.next?(0,i.jsx)("typography",{children:"Rear"}):(0,i.jsx)("div",{})]})]},"".concat(this.props.data.value,"-").concat(this.props.data.index))],this.props.next&&e.push((0,i.jsx)(l.Z,{component:"span",children:(0,i.jsx)(s,{direction:"right"})},"".concat(this.props.data.index,"-").concat(this.props.data.value,"-nextLink")));break;case"sets":t={border:"1px solid black",background:"rgba(40,60,180,0.8)",borderRadius:"50%",minHeight:"100px",minWidth:"100px",margin:"20px"},this.props.AllGreater&&(t.background="rgba(242,19,23,0.8)"),this.props.AllSmaller&&(t.background="rgba(250,183,0,0.8)"),this.props.highlight&&(t.background="rgba(30,150,40,0.8)"),e=[(0,i.jsx)(l.Z,{p:1,style:t,children:(0,i.jsx)(l.Z,{p:0,color:"white",fontSize:18,children:(0,i.jsx)("div",{style:{position:"relative",top:"45%",textAlign:"center"},children:this.props.data.value})})},this.props.data.value)]}return this.props.data&&e}}},6721:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>W});var n=r(2791),i=r(267),s=r(283),l=r(4697),o=r(2953),a=r(8302),c=r(6513),h=r(8596),u=r(3108),d=r(3188),p=r(6828),f=r(184);const g=(0,h.Z)((t=>({root:{minWidth:3},bullet:{display:"inline-block",margin:"0 8px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:175,marginTop:33},formControl:{margin:t.spacing(1),minWidth:120},selectEmpty:{marginTop:t.spacing(1)}}))),m=(0,h.Z)((t=>({root:{border:"1px solid #e2e2e1",overflow:"hidden",borderRadius:4,margin:"4px 0px 0px 0px",backgroundColor:"#fcfcfb",transition:t.transitions.create(["border-color","box-shadow"]),"&:hover":{backgroundColor:"#fff"},"&$focused":{backgroundColor:"#fff",boxShadow:"".concat((0,u.U1)(t.palette.primary.main,.25)," 0 0 0 2px"),borderColor:t.palette.primary.main}},focused:{}})));function x(t){const e=m();return(0,f.jsx)(d.Z,{InputProps:{classes:e,disableUnderline:!0},...t})}function b(t){const e=g(),[r,i]=n.useState(null);return t.open?(0,f.jsxs)(s.Z,{className:e.root,style:{border:"1px solid rgba(22,45,167,0.9)"},children:[(0,f.jsx)(o.Z,{className:"bg-primary text-white",children:(0,f.jsx)(a.Z,{variant:"h5",component:"h2",children:"Insert"})}),(0,f.jsx)(o.Z,{className:" text-center pb-0 mt-0",children:(0,f.jsx)(a.Z,{variant:"h6",component:"h2",children:"Enter data"})}),(0,f.jsx)(l.Z,{children:(0,f.jsxs)(p.Z,{variant:"outlined",className:e.formControl,children:[(0,f.jsx)(x,{label:"Enter Data",className:e.margin,onChange:t=>{i(t.target.value)},value:r||"",variant:"filled",id:"reddit-input"}),(0,f.jsx)(c.Z,{className:"mt-2",onClick:()=>{t.insert(r),i(null)},variant:"outlined",color:"primary",children:"Submit"})]})})]}):(0,f.jsx)("div",{})}const v=(0,h.Z)((t=>({root:{minWidth:3},bullet:{display:"inline-block",margin:"0 8px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:175,marginTop:33},formControl:{margin:t.spacing(1),minWidth:120},selectEmpty:{marginTop:t.spacing(1)}}))),j=(0,h.Z)((t=>({root:{border:"1px solid #e2e2e1",overflow:"hidden",borderRadius:4,margin:"4px 0px 0px 0px",backgroundColor:"#fcfcfb",transition:t.transitions.create(["border-color","box-shadow"]),"&:hover":{backgroundColor:"#fff"},"&$focused":{backgroundColor:"#fff",boxShadow:"".concat((0,u.U1)(t.palette.primary.main,.25)," 0 0 0 2px"),borderColor:t.palette.primary.main}},focused:{}})));function w(t){const e=j();return(0,f.jsx)(d.Z,{InputProps:{classes:e,disableUnderline:!0},...t})}function N(t){const e=v(),[r,i]=n.useState(null);return t.open?(0,f.jsxs)(s.Z,{className:e.root,style:{border:"1px solid rgba(22,45,167,0.9)"},children:[(0,f.jsx)(o.Z,{className:"bg-primary text-white ",children:(0,f.jsxs)(a.Z,{variant:"h5",component:"h2",children:[" ","Delete"]})}),(0,f.jsx)(l.Z,{children:(0,f.jsxs)(p.Z,{variant:"outlined",className:e.formControl,children:[(0,f.jsx)(w,{label:"Value",className:e.margin,onChange:t=>{i(t.target.value)},value:r||"",variant:"filled",id:"reddit-input-value"}),(0,f.jsx)(c.Z,{className:"mt-2",onClick:()=>{t.del(r),i(null)},variant:"outlined",color:"primary",children:"Submit"})]})})]}):(0,f.jsx)("div",{})}const Z=(0,h.Z)((t=>({root:{minWidth:3},bullet:{display:"inline-block",margin:"0 8px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:175,marginTop:33},formControl:{margin:t.spacing(1),minWidth:120},selectEmpty:{marginTop:t.spacing(1)}}))),k=(0,h.Z)((t=>({root:{border:"1px solid #e2e2e1",overflow:"hidden",borderRadius:4,margin:"4px 0px 0px 0px",backgroundColor:"#fcfcfb",transition:t.transitions.create(["border-color","box-shadow"]),"&:hover":{backgroundColor:"#fff"},"&$focused":{backgroundColor:"#fff",boxShadow:"".concat((0,u.U1)(t.palette.primary.main,.25)," 0 0 0 2px"),borderColor:t.palette.primary.main}},focused:{}})));function y(t){const e=k();return(0,f.jsx)(d.Z,{InputProps:{classes:e,disableUnderline:!0},...t})}function C(t){const e=Z(),r=Z(),[i,h]=n.useState(null);return t.open?(0,f.jsxs)(s.Z,{className:r.root,style:{border:"1px solid rgba(22,45,167,0.9)"},children:[(0,f.jsx)(o.Z,{className:"  bg-primary text-white",children:(0,f.jsxs)(a.Z,{variant:"h5",component:"h2",children:[" ","Search"," "]})}),(0,f.jsx)(o.Z,{className:"text-center pb-0 mt-0",children:(0,f.jsx)(a.Z,{variant:"h6",component:"h2",children:"Data"})}),(0,f.jsx)(l.Z,{children:(0,f.jsxs)(p.Z,{variant:"outlined",className:e.formControl,children:[(0,f.jsx)(y,{label:"Value",className:r.margin,onChange:t=>{h(t.target.value)},value:i||"",variant:"filled",id:"reddit-input"}),(0,f.jsx)(c.Z,{onClick:()=>{t.search(i,"allg"),h(null)},variant:"outlined",color:"primary",className:"mt-2",children:"All Greater elements"}),(0,f.jsx)(c.Z,{onClick:()=>{t.search(i,"alls"),h(null)},variant:"outlined",color:"primary",className:"mt-2",children:"All Smaller element"}),(0,f.jsx)(c.Z,{onClick:()=>{t.search(i,"no"),h(null)},variant:"outlined",color:"primary",className:"mt-2",children:"Submit"})]})})]}):(0,f.jsx)("div",{})}var I=r(1288),R=r(9526),S=r(8182),A=r(8912),E=r(2475),V=r(4135),P=r(83),z=r(8530),T=r.n(z);const _=(0,h.Z)((t=>({root:{flexGrow:1},paper:{padding:t.spacing(2),color:t.palette.text.secondary,margin:t.spacing(2)},control:{padding:t.spacing(2)}}))),D=(0,h.Z)({root:{"&:hover":{backgroundColor:"transparent"}},icon:{borderRadius:"50%",width:16,height:16,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"#f5f8fa",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))","$root.Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:"#137cbd",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:16,height:16,backgroundImage:"radial-gradient(#fff,#fff 28%,transparent 32%)",content:'""'},"input:hover ~ &":{backgroundColor:"#106ba3"}}});function O(t){const e=D();return(0,f.jsx)(A.Z,{className:e.root,disableRipple:!0,color:"default",checkedIcon:(0,f.jsx)("span",{className:(0,S.Z)(e.icon,e.checkedIcon)}),icon:(0,f.jsx)("span",{className:e.icon}),...t})}function W(){const t=_();let[e,r]=(0,n.useState)(!1),[l,a]=(0,n.useState)(""),[c,h]=(0,n.useState)(null),[u,d]=(0,n.useState)(new(T())),g=t=>{let e=t.target.value;r(e)},m=t=>{let e=new(T());return t&&0!==t.length?(t.forEach((t=>{e.insert(t)})),e):e};return(0,f.jsx)("div",{className:t.root,children:(0,f.jsxs)(I.Z,{container:!0,direction:"row",justify:"left",alignItems:"center",children:[(0,f.jsx)(I.Z,{container:!0,sm:4,children:(0,f.jsxs)(R.Z,{className:t.paper,children:[(0,f.jsx)(I.Z,{item:!0,xs:12,sm:12,spacing:3,alignItems:"center",children:(0,f.jsxs)(s.Z,{children:[(0,f.jsx)("h6",{className:"bg-primary text-center text-white p-3",children:"Operations"}),(0,f.jsx)(o.Z,{className:"pl-0 pr-0 pt-0 text-left",children:(0,f.jsxs)(p.Z,{className:"pl-3",component:"fieldset",children:[(0,f.jsx)(P.Z,{component:"legend"}),(0,f.jsxs)(E.Z,{"aria-label":"gender",name:"customized-radios",children:[(0,f.jsx)(V.Z,{value:"Insert",onChange:g,control:(0,f.jsx)(O,{}),label:"Insert"}),(0,f.jsx)(V.Z,{value:"Delete",onChange:g,control:(0,f.jsx)(O,{}),label:"Delete"}),(0,f.jsx)(V.Z,{value:"Search",onChange:g,control:(0,f.jsx)(O,{}),label:"Search"})]})]})})]})}),(0,f.jsxs)(I.Z,{className:"mt-3",item:!0,spacing:4,xs:12,sm:12,children:[(0,f.jsx)(b,{open:"Insert"===e,insert:t=>{(t=>{if(t)if(t.length<7&&!1===isNaN(t)){if(u.contains(Number(t)))return void alert("Already Present");console.log(u);const e=m(u);e.insert(Number(t)),console.log(e),d(e)}else alert("Invalid input (must contains integers only)");else alert("Enter data")})(t)}}),(0,f.jsx)(C,{open:"Search"===e,search:(t,e)=>{((t,e)=>{if(t)if(t.length<7&&!1===isNaN(t)){if(!u||0===u.length)return void alert("set is empty");switch(a(e),h(Number(t)),e){case"no":!u.contains(Number(t))&&alert("Data Not Found");break;case"alls":Number(u.beginIterator().value())>Number(t)&&alert("No smaller element present");break;case"allg":Number(u.endIterator().previous().value())<Number(t)&&alert("No Greater Element present")}}else alert("Invalid input (must contains integers only)");else alert("Enter data")})(t,e)}}),(0,f.jsx)(N,{open:"Delete"===e,del:t=>{(t=>{if(t)if(t.length<6&&!1===isNaN(t))if(u.contains(Number(t))){const e=m(u);e.remove(Number(t)),d(e)}else alert("value not exists in the set");else alert("Invalid input (must contains integers only)");else alert("Enter data")})(t)}})]})]})}),(0,f.jsx)(I.Z,{container:!0,style:{border:u.length>0?"2px solid black":"",height:"auto"},sm:8,children:u&&u.length>0&&u.map(((t,e)=>(0,f.jsx)(n.Fragment,{children:(0,f.jsx)(i.Z,{data:{value:Number(t)},type:"sets",next:!0,highlight:"no"===l&&null!==c&&Number(t)===Number(c),AllGreater:"allg"===l&&Number(t)>Number(c),AllSmaller:"alls"===l&&Number(t)<Number(c)})},"".concat(e,"-").concat(t))))||[]})]})})}},8530:function(t){t.exports=function(){"use strict";class t{constructor(t){if(null==(null!=t?t.strategy:void 0))throw"Must pass options.strategy, a strategy";if(null==(null!=t?t.comparator:void 0))throw"Must pass options.comparator, a comparator";if(null==(null!=t?t.onInsertConflict:void 0))throw"Must pass options.onInsertConflict, a function";this.priv=new t.strategy(t),this.length=0}insert(t){return this.priv.insert(t),this.length+=1,this}remove(t){return this.priv.remove(t),this.length-=1,this}clear(){return this.priv.clear(),this.length=0,this}contains(t){return this.priv.contains(t)}toArray(){return this.priv.toArray()}forEach(t,e){return this.priv.forEachImpl(t,this,e),this}map(t,e){const r=[];return this.forEach((function(n,i,s){return r.push(t.call(e,n,i,s))})),r}filter(t,e){const r=[];return this.forEach((function(n,i,s){if(t.call(e,n,i,s))return r.push(n)})),r}every(t,e){let r=!0;return this.forEach((function(n,i,s){r&&!t.call(e,n,i,s)&&(r=!1)})),r}some(t,e){let r=!1;return this.forEach((function(n,i,s){!r&&t.call(e,n,i,s)&&(r=!0)})),r}findIterator(t){return this.priv.findIterator(t)}beginIterator(){return this.priv.beginIterator()}endIterator(){return this.priv.endIterator()}}class e{constructor(t,e){this.priv=t,this.index=e,this.data=this.priv.data}hasNext(){return this.index<this.data.length}hasPrevious(){return this.index>0}value(){return this.index<this.data.length?this.data[this.index]:null}setValue(t){if(!this.priv.options.allowSetValue)throw"Must set options.allowSetValue";if(!this.hasNext())throw"Cannot set value at end of set";return this.data[this.index]=t}next(){return this.index>=this.data.length?null:new e(this.priv,this.index+1)}previous(){return this.index<=0?null:new e(this.priv,this.index-1)}}const r=(t,e,r)=>{let n=0,i=t.length;for(;n<i;){const s=n+i>>>1;r(t[s],e)<0?n=s+1:i=s}return n};class n{constructor(t){this.options=t,this.onInsertConflict=this.options.onInsertConflict,this.comparator=this.options.comparator,this.data=[]}toArray(){return this.data}insert(t){const e=r(this.data,t,this.comparator);return void 0!==this.data[e]&&0===this.comparator(this.data[e],t)?this.data.splice(e,1,this.onInsertConflict(this.data[e],t)):this.data.splice(e,0,t)}remove(t){const e=r(this.data,t,this.comparator);if(0!==this.comparator(this.data[e],t))throw"Value not in set";return this.data.splice(e,1)}clear(){return this.data.length=0}contains(t){const e=r(this.data,t,this.comparator);return this.index!==this.data.length&&0===this.comparator(this.data[e],t)}forEachImpl(t,e,r){const n=this.data,i=n.length;for(let s=0;s<i;s++)t.call(r,n[s],s,e)}findIterator(t){const n=r(this.data,t,this.comparator);return new e(this,n)}beginIterator(){return new e(this,0)}endIterator(){return new e(this,this.data.length)}}const i=(t,e)=>{for(;null!==e[t];){const r=e;(e=e[t])._iteratorParentNode=r}return e},s=(t,e)=>{let r,n;if(null!==e[t])r=e,(e=e[t])._iteratorParentNode=r,n="left"===t?"right":"left",e=i(n,e);else{for(;null!==(r=e._iteratorParentNode)&&r[t]===e;)e=r;e=r}return e};class l{constructor(t,e){this.tree=t,this.node=e}next(){if(null===this.node)return null;{const t=s("right",this.node);return new l(this.tree,t)}}previous(){if(null===this.node){if(null===this.tree.root)return null;{this.tree.root._iteratorParentNode=null;const t=i("right",this.tree.root);return new l(this.tree,t)}}{const t=s("left",this.node);return null===t?null:new l(this.tree,t)}}hasNext(){return null!==this.node}hasPrevious(){return null!==this.previous()}value(){return null===this.node?null:this.node.value}setValue(t){if(!this.tree.options.allowSetValue)throw"Must set options.allowSetValue";if(!this.hasNext())throw"Cannot set value at end of set";return this.node.value=t}}l.find=function(t,e,r){const n=t.root;null!=n&&(n._iteratorParentNode=null);let i=n,s=null;for(;null!==i;){const t=r(e,i.value);if(0===t)break;if(t<0){if(null===i.left)break;s=i,i.left._iteratorParentNode=i,i=i.left}else{if(null===i.right){i=s;break}i.right._iteratorParentNode=i,i=i.right}}return new l(t,i)},l.left=t=>{if(null===t.root)return new l(t,null);{t.root._iteratorParentNode=null;const e=i("left",t.root);return new l(t,e)}},l.right=t=>new l(t,null);const o=(t,e)=>{null!==t&&(o(t.left,e),e(t.value),o(t.right,e))};class a{toArray(){const t=[];return o(this.root,(function(e){return t.push(e)})),t}clear(){return this.root=null}forEachImpl(t,e,r){let n=0;o(this.root,(function(i){t.call(r,i,n,e),n+=1}))}contains(t){const e=this.comparator;let r=this.root;for(;null!==r;){const n=e(t,r.value);if(0===n)break;r=n<0?r.left:r.right}return null!==r&&0===e(r.value,t)}findIterator(t){return l.find(this,t,this.comparator)}beginIterator(){return l.left(this)}endIterator(){return l.right(this)}}class c{constructor(t){this.value=t,this.left=null,this.right=null}}const h=(t,e)=>{for(;null!==t[e];)t=t[e];return t},u=(t,e,r)=>{if(null===t)throw"Value not in set";const n=r(e,t.value);if(n<0)t.left=u(t.left,e,r);else if(n>0)t.right=u(t.right,e,r);else if(null===t.left&&null===t.right)t=null;else if(null===t.right)t=t.left;else if(null===t.left)t=t.right;else{const e=h(t.right,"left");t.value=e.value,t.right=u(t.right,e.value,r)}return t};class d extends a{constructor(t){super(),this.options=t,this.comparator=this.options.comparator,this.onInsertConflict=this.options.onInsertConflict,this.root=null}insert(t){const e=this.comparator;if(null!==this.root){let r=this.root,n=null;for(;;){const i=e(t,r.value);if(0===i)return void(r.value=this.onInsertConflict(r.value,t));if(n=i<0?"left":"right",null===r[n])break;r=r[n]}return r[n]=new c(t)}return this.root=new c(t)}remove(t){return this.root=u(this.root,t,this.comparator)}}class p{constructor(t){this.value=t,this.left=null,this.right=null,this.isRed=!0}}const f=t=>{const e=t.right;return t.right=e.left,e.left=t,e.isRed=t.isRed,t.isRed=!0,e},g=t=>{const e=t.left;return t.left=e.right,e.right=t,e.isRed=t.isRed,t.isRed=!0,e},m=t=>{t.isRed=!t.isRed,t.left.isRed=!t.left.isRed,t.right.isRed=!t.right.isRed},x=t=>(m(t),null!==t.right&&null!==t.right.left&&t.right.left.isRed&&(t.right=g(t.right),t=f(t),m(t)),t),b=t=>(m(t),null!==t.left&&null!==t.left.left&&t.left.left.isRed&&(t=g(t),m(t)),t),v=(t,e,r,n)=>{if(null===t)return new p(e);const i=r(e,t.value);return 0===i?t.value=n(t.value,e):i<0?t.left=v(t.left,e,r,n):t.right=v(t.right,e,r,n),null===t.right||!t.right.isRed||null!==t.left&&t.left.isRed||(t=f(t)),null!==t.left&&t.left.isRed&&null!==t.left.left&&t.left.left.isRed&&(t=g(t)),null!==t.left&&t.left.isRed&&null!==t.right&&t.right.isRed&&m(t),t},j=t=>{for(;null!==t.left;)t=t.left;return t},w=t=>(null!==t.right&&t.right.isRed&&(t=f(t)),null!==t.left&&t.left.isRed&&null!==t.left.left&&t.left.left.isRed&&(t=g(t)),null!==t.left&&t.left.isRed&&null!==t.right&&t.right.isRed&&m(t),t),N=t=>null===t.left?null:(t.left.isRed||null!==t.left.left&&t.left.left.isRed||(t=x(t)),t.left=N(t.left),w(t)),Z=(t,e,r)=>{if(null===t)throw"Value not in set";if(r(e,t.value)<0){if(null===t.left)throw"Value not in set";t.left.isRed||null!==t.left.left&&t.left.left.isRed||(t=x(t)),t.left=Z(t.left,e,r)}else{if(null!==t.left&&t.left.isRed&&(t=g(t)),null===t.right){if(0===r(e,t.value))return null;throw"Value not in set"}t.right.isRed||null!==t.right.left&&t.right.left.isRed||(t=b(t)),0===r(e,t.value)?(t.value=j(t.right).value,t.right=N(t.right)):t.right=Z(t.right,e,r)}return null!==t&&(t=w(t)),t};class k extends a{constructor(t){super(),this.options=t,this.comparator=this.options.comparator,this.onInsertConflict=this.options.onInsertConflict,this.root=null}insert(t){this.root=v(this.root,t,this.comparator,this.onInsertConflict),this.root.isRed=!1}remove(t){this.root=Z(this.root,t,this.comparator),null!==this.root&&(this.root.isRed=!1)}}const y={OnInsertConflictThrow:(t,e)=>{throw new Error("Value already in set")},OnInsertConflictReplace:(t,e)=>e,OnInsertConflictIgnore:(t,e)=>t};class C extends t{constructor(t){t||(t={}),t.strategy||(t.strategy=k),t.comparator||(t.comparator=function(t,e){return(t||0)-(e||0)}),t.onInsertConflict||(t.onInsertConflict=y.OnInsertConflictThrow),super(t)}}return C.ArrayStrategy=n,C.BinaryTreeStrategy=d,C.RedBlackTreeStrategy=k,Object.assign(C,y),C}()}}]);
//# sourceMappingURL=6721.ea9cb5a4.chunk.js.map