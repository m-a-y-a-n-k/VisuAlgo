"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9863],{9863:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(2791),o=n(1288);const s=e=>{const t=(0,a.useCallback)(((t,n)=>{if(!e)return;const a=e.getContext("2d");a.fillStyle="#ff2626",a.beginPath(),a.arc(t,n,3,0,2*Math.PI,!0),a.fill(),a.font="15px Arial",a.fillText("( ".concat(t," , ").concat(n," )"),t+6,n+6)}),[e,3]);return{draw:(0,a.useCallback)((n=>{if(!e)return;const a=e.getBoundingClientRect(),o=n.clientX-a.left,s=n.clientY-a.top;t(o,s)}),[e,t])}};var i=n(184);const r=e=>{let{id:t,width:n,height:o,clickable:r,addPoints:l}=e;const c=(0,a.useRef)(null),{draw:d}=s(c.current);return(0,a.useEffect)((()=>{const e=c.current;if(!e)return;const t=t=>{if(r){d(t);const n=e.getBoundingClientRect(),a=t.clientX-n.left,o=t.clientY-n.top;l({x:a,y:o})}};return e.addEventListener("click",t),()=>{e.removeEventListener("click",t)}}),[r,d,l]),(0,i.jsx)("canvas",{id:t,ref:c,width:n,height:o,style:{margin:"20px",border:"1px solid lightgray",background:"rgba(123,178,91,0.3)"}})};var l=n(8596),c=n(283),d=n(6950),u=n(4697),p=n(6828),m=n(5480),h=n(7394),f=n(5471),g=n(6513);const b=(0,l.Z)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),v=(0,l.Z)((e=>({root:{margin:e.spacing(1),minWidth:120,width:"100%"}}))),x=(0,l.Z)((e=>({formControl:{margin:e.spacing(1),minWidth:120,width:"100%"}}))),y=e=>{const t=b(),n=(0,a.useRef)([]),[o,s]=(0,a.useState)("Slow"),r=v(),l=x(),[y,Z]=a.useState(0);(0,a.useEffect)((()=>{Z(n.current.offsetWidth)}),[]);return(0,i.jsxs)(c.Z,{className:t.root,variant:"outlined",children:[(0,i.jsx)(d.Z,{title:"Closest Pair of Points",titleTypographyProps:{variant:"h5",color:"primary"},subheader:"Pair connected by red dash lines",subheaderTypographyProps:{variant:"subtitle1",color:"secondary"}}),(0,i.jsxs)(u.Z,{children:[(0,i.jsxs)(p.Z,{className:l.formControl,children:[(0,i.jsx)(m.Z,{ref:n,id:"run-speed-label",labelwidth:y,children:"Speed"}),(0,i.jsxs)(h.Z,{labelId:"run-speed-label",id:"speed-select-outlined",value:o,onChange:e=>{s(e.target.value)},children:[(0,i.jsx)(f.Z,{value:"Slow",children:"Slow"}),(0,i.jsx)(f.Z,{value:"Fast",children:"Fast"})]})]}),(0,i.jsx)(p.Z,{className:r.root,noValidate:!0,children:(0,i.jsx)(g.Z,{style:{backgroundColor:"#403d4a",color:"white"},onClick:()=>{e.find(o)},children:"Run"})})]})]})};var Z=n(5095);const C=()=>{const[e,t]=(0,a.useState)([]),[n,s]=(0,a.useState)(!0),[l,c]=(0,a.useState)(null),d=(0,a.useRef)(null),u=(0,a.useCallback)((()=>{const e=d.current;if(!e)return;e.getContext("2d").clearRect(0,0,e.width,e.height)}),[]),p=(0,a.useCallback)((()=>{const t=d.current;if(!t)return;const n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.fillStyle="#ff2626",e.forEach((e=>{n.beginPath(),n.arc(e.x,e.y,3,0,2*Math.PI,!0),n.fill(),n.font="15px Arial",n.fillText("( ".concat(e.x," , ").concat(e.y," )"),e.x+6,e.y+6)}))}),[e]),m=(0,a.useCallback)(((e,t,n)=>{const a=d.current;if(!a)return;const o=a.getContext("2d");o.strokeStyle=n,o.setLineDash([2,2]),o.beginPath(),o.moveTo(e.x,e.y),o.lineTo(t.x,t.y),o.stroke()}),[]),h=(0,a.useCallback)((function(t,n){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(t>=e.length-1)return u(),p(),a&&m(a.start,a.end,"#ff2626"),void s(!0);if(n>=e.length)return void setTimeout((()=>h(t+1,t+2,a)),2e3);u(),p(),m(e[t],e[n],"#000000");const o=(e[n].x-e[t].x)**2+(e[n].y-e[t].y)**2;(!a||o<a.length)&&(a={start:{x:e[t].x,y:e[t].y},end:{x:e[n].x,y:e[n].y},length:o}),a&&m(a.start,a.end,"#ff2626"),setTimeout((()=>h(t,n+1,a)),1200)}),[e,m,u,p]),f=(0,a.useCallback)((t=>{"slow"===t.toLowerCase()?e.length>=2?(s(!1),c(null),h(0,1)):c({text:"Not enough points on canvas",type:"info"}):c({text:"We shall implement this soon.",type:"danger"})}),[e,h]);return(0,a.useEffect)((()=>{d.current=document.getElementById("pointsCanvas")}),[]),(0,a.useEffect)((()=>{p()}),[e]),(0,i.jsx)(o.Z,{container:!0,children:(0,i.jsxs)(o.Z,{item:!0,container:!0,children:[(0,i.jsxs)(o.Z,{item:!0,xs:12,className:"mt-2",children:[l&&(0,i.jsx)(Z.Z,{color:l.type,isOpen:!!l.text,toggle:()=>c(null),children:l.text}),(0,i.jsx)(y,{find:f})]}),(0,i.jsxs)(o.Z,{item:!0,xs:12,className:"mt-3",children:[(0,i.jsx)("h3",{className:"p-2",children:"Click in the canvas below to draw points"}),(0,i.jsx)(r,{id:"pointsCanvas",clickable:n,width:"".concat(window.innerWidth-70),height:"400",addPoints:e=>{n&&t((t=>[...t,e]))}})]})]})})}},6950:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),o=n(5987),s=n(2791),i=(n(2007),n(8182)),r=n(8317),l=n(8302),c=s.forwardRef((function(e,t){var n=e.action,r=e.avatar,c=e.classes,d=e.className,u=e.component,p=void 0===u?"div":u,m=e.disableTypography,h=void 0!==m&&m,f=e.subheader,g=e.subheaderTypographyProps,b=e.title,v=e.titleTypographyProps,x=(0,o.Z)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),y=b;null==y||y.type===l.Z||h||(y=s.createElement(l.Z,(0,a.Z)({variant:r?"body2":"h5",className:c.title,component:"span",display:"block"},v),y));var Z=f;return null==Z||Z.type===l.Z||h||(Z=s.createElement(l.Z,(0,a.Z)({variant:r?"body2":"body1",className:c.subheader,color:"textSecondary",component:"span",display:"block"},g),Z)),s.createElement(p,(0,a.Z)({className:(0,i.Z)(c.root,d),ref:t},x),r&&s.createElement("div",{className:c.avatar},r),s.createElement("div",{className:c.content},y,Z),n&&s.createElement("div",{className:c.action},n))}));const d=(0,r.Z)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(c)},5471:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(5987),o=n(4942),s=n(7462),i=n(2791),r=(n(2007),n(8182)),l=n(8317),c=n(6706),d=n(3375),u=n(9806),p=n(4496),m=n(4164),h="undefined"===typeof window?i.useEffect:i.useLayoutEffect,f=i.forwardRef((function(e,t){var n=e.alignItems,o=void 0===n?"center":n,l=e.autoFocus,f=void 0!==l&&l,g=e.button,b=void 0!==g&&g,v=e.children,x=e.classes,y=e.className,Z=e.component,C=e.ContainerComponent,k=void 0===C?"li":C,w=e.ContainerProps,N=(w=void 0===w?{}:w).className,E=(0,a.Z)(w,["className"]),S=e.dense,j=void 0!==S&&S,I=e.disabled,P=void 0!==I&&I,T=e.disableGutters,R=void 0!==T&&T,L=e.divider,B=void 0!==L&&L,A=e.focusVisibleClassName,M=e.selected,V=void 0!==M&&M,F=(0,a.Z)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),W=i.useContext(p.Z),G={dense:j||W.dense||!1,alignItems:o},D=i.useRef(null);h((function(){f&&D.current&&D.current.focus()}),[f]);var H=i.Children.toArray(v),$=H.length&&(0,d.Z)(H[H.length-1],["ListItemSecondaryAction"]),z=i.useCallback((function(e){D.current=m.findDOMNode(e)}),[]),O=(0,u.Z)(z,t),X=(0,s.Z)({className:(0,r.Z)(x.root,y,G.dense&&x.dense,!R&&x.gutters,B&&x.divider,P&&x.disabled,b&&x.button,"center"!==o&&x.alignItemsFlexStart,$&&x.secondaryAction,V&&x.selected),disabled:P},F),Y=Z||"li";return b&&(X.component=Z||"div",X.focusVisibleClassName=(0,r.Z)(x.focusVisible,A),Y=c.Z),$?(Y=X.component||Z?Y:"div","li"===k&&("li"===Y?Y="div":"li"===X.component&&(X.component="div")),i.createElement(p.Z.Provider,{value:G},i.createElement(k,(0,s.Z)({className:(0,r.Z)(x.container,N),ref:O},E),i.createElement(Y,X,H),H.pop()))):i.createElement(p.Z.Provider,{value:G},i.createElement(Y,(0,s.Z)({ref:O},X),H))}));const g=(0,l.Z)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(f);var b=i.forwardRef((function(e,t){var n,o=e.classes,l=e.className,c=e.component,d=void 0===c?"li":c,u=e.disableGutters,p=void 0!==u&&u,m=e.ListItemClasses,h=e.role,f=void 0===h?"menuitem":h,b=e.selected,v=e.tabIndex,x=(0,a.Z)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==v?v:-1),i.createElement(g,(0,s.Z)({button:!0,role:f,tabIndex:n,component:d,selected:b,disableGutters:p,classes:(0,s.Z)({dense:o.dense},m),className:(0,r.Z)(o.root,l,b&&o.selected,!p&&o.gutters),ref:t},x))}));const v=(0,l.Z)((function(e){return{root:(0,s.Z)({},e.typography.body1,(0,o.Z)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:(0,s.Z)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(b)}}]);
//# sourceMappingURL=9863.ed9e3183.chunk.js.map