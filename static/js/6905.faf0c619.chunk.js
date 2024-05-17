/*! For license information please see 6905.faf0c619.chunk.js.LICENSE.txt */
(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6905],{267:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var r=s(2791),n=s(184);class a extends r.Component{render(){let e=null;switch(this.props.direction.toLowerCase()){case"left":e=(0,n.jsx)("i",{className:"ico left"});break;case"up":e=(0,n.jsx)("i",{className:"ico up"});break;case"down":e=(0,n.jsx)("i",{className:"ico down"});break;default:e=(0,n.jsx)("i",{className:"ico right"})}return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"link-label",children:this.props.label}),(0,n.jsx)("div",{className:"link",children:e})]})}}var i=s(2541);class o extends r.Component{render(){let e,t=null;switch(this.props.type.toLowerCase()){case"stack":t=[],0===this.props.data.index&&t.push((0,n.jsx)(i.Z,{p:1,textAlign:"center",children:"Top"},"Top")),e={border:"1px solid white",background:"rgba(40,40,160,0.8)"},this.props.highlight&&(e.background="rgba(30,150,40,0.8)"),t.push((0,n.jsxs)(i.Z,{p:1,style:e,children:[(0,n.jsx)(i.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:this.props.data.value}),(0,n.jsx)(i.Z,{color:"white",p:1,textAlign:"center",fontSize:12,children:this.props.data.index})]},"".concat(this.props.data.index,"-").concat(this.props.data.value)));break;case"array":e={border:"1px solid white",background:"rgba(40,40,120,0.8)"},this.props.highlight&&(e.background="rgba(30,150,40,0.8)"),t=(0,n.jsxs)(i.Z,{p:1,style:e,children:[(0,n.jsx)(i.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:this.props.data.value}),(0,n.jsx)(i.Z,{color:"white",p:1,textAlign:"center",fontSize:12,children:this.props.data.index})]},this.props.data.index);break;case"linkedlist":e={border:"1px solid white",background:"rgba(40,60,180,0.8)"},this.props.highlight&&(e.background="rgba(30,150,40,0.8)"),t=[(0,n.jsxs)(i.Z,{p:1,style:e,children:[(0,n.jsx)(i.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:this.props.data.value}),(0,n.jsx)(i.Z,{color:"white",p:1,textAlign:"center",fontSize:12,children:this.props.data.index})]},"".concat(this.props.data.value,"-").concat(this.props.data.index))],this.props.next&&t.push((0,n.jsx)(i.Z,{component:"span",children:(0,n.jsx)(a,{direction:"right"})},"".concat(this.props.data.index,"-").concat(this.props.data.value,"-nextlink")));break;case"queues":e={border:"1px solid white",background:"rgba(40,60,180,0.8)"},this.props.highlight&&(e.background="rgba(30,150,40,0.8)"),t=[(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Z,{p:1,style:e,children:(0,n.jsx)(i.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:this.props.data.value})}),(0,n.jsxs)(i.Z,{color:"white",p:1,className:0===this.props.data.index||!1===this.props.next?"bg-danger":"",textAlign:"center",fontSize:12,children:[0===this.props.data.index?(0,n.jsxs)("typography",{children:["Front ",(0,n.jsx)("br",{})," "]}):(0,n.jsx)("div",{}),!1===this.props.next?(0,n.jsx)("typography",{children:"Rear"}):(0,n.jsx)("div",{})]})]},"".concat(this.props.data.value,"-").concat(this.props.data.index))],this.props.next&&t.push((0,n.jsx)(i.Z,{component:"span",children:(0,n.jsx)(a,{direction:"right"})},"".concat(this.props.data.index,"-").concat(this.props.data.value,"-nextLink")));break;case"sets":e={border:"1px solid black",background:"rgba(40,60,180,0.8)",borderRadius:"50%",minHeight:"100px",minWidth:"100px",margin:"20px"},this.props.AllGreater&&(e.background="rgba(242,19,23,0.8)"),this.props.AllSmaller&&(e.background="rgba(250,183,0,0.8)"),this.props.highlight&&(e.background="rgba(30,150,40,0.8)"),t=[(0,n.jsx)(i.Z,{p:1,style:e,children:(0,n.jsx)(i.Z,{p:0,color:"white",fontSize:18,children:(0,n.jsx)("div",{style:{position:"relative",top:"45%",textAlign:"center"},children:this.props.data.value})})},this.props.data.value)]}return this.props.data&&t}}},6905:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>N});var r=s(2791),n=s(267),a=s(2357),i=s(3638),o=s(8284),l=s(6187),c=s(2377),d=s(4555),h=s(7498),p=s(387),u=s(7135),g=s(2919),x=s(1815),f=s(1840),j=s(4594),m=s(743),b=s(6153),Z=s(7988),y=s(184);class v extends r.Component{constructor(e){super(e),this.toggleDropDown=this.toggleDropDown.bind(this),this.state={dropdownOpen:!1,data:null,where:"Start"}}toggleDropDown(){let e=this.state.dropdownOpen;this.setState({dropdownOpen:!e})}render(){return(0,y.jsxs)(a.Z,{style:{border:"1px solid rgba(22,45,167,0.9)"},children:[(0,y.jsx)(i.Z,{children:"Insert"}),(0,y.jsxs)(o.Z,{className:"text-center",children:[(0,y.jsx)(l.Z,{children:"Enter data"}),(0,y.jsx)("br",{}),(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(d.Z,{onChange:e=>{this.setState({data:e.target.value})},value:this.state.data?this.state.data:""}),(0,y.jsxs)(h.Z,{addonType:"append",isOpen:this.state.dropdownOpen,toggle:this.toggleDropDown,children:[(0,y.jsx)(p.Z,{caret:!0,children:this.state.where}),(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(g.Z,{onClick:()=>{this.setState({where:"Start"})},children:"Start"}),(0,y.jsx)(g.Z,{divider:!0}),(0,y.jsxs)(g.Z,{onClick:()=>{this.setState({where:"End"})},children:[" ","End"]})]})]})]}),(0,y.jsx)("br",{}),(0,y.jsx)(x.Z,{onClick:()=>{this.props.parent.insert(this.state.data,this.state.where),this.setState({data:null})},children:"Submit"})]})]})}}class w extends r.Component{constructor(e){super(e),this.state={data:null,position:null}}render(){return(0,y.jsxs)(a.Z,{style:{border:"1px solid rgba(22,45,167,0.9)"},children:[(0,y.jsx)(i.Z,{children:"Delete"}),(0,y.jsxs)(o.Z,{className:"text-center",children:[(0,y.jsx)(l.Z,{children:"Position or Value"}),(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(f.Z,{addonType:"prepend",children:(0,y.jsx)(j.Z,{children:"Position"})}),(0,y.jsx)(d.Z,{placeholder:"Position",onChange:e=>{this.setState({position:e.target.value,data:null})},value:this.state.position?this.state.position:""})]}),(0,y.jsx)("br",{}),(0,y.jsx)("span",{children:"Or"}),(0,y.jsx)("br",{}),(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(f.Z,{addonType:"prepend",children:(0,y.jsx)(j.Z,{children:"Value"})}),(0,y.jsx)(d.Z,{placeholder:"Value",onChange:e=>{this.setState({data:e.target.value,position:null})},value:this.state.data?this.state.data:""})]}),(0,y.jsx)("br",{}),(0,y.jsx)(x.Z,{onClick:()=>{this.props.parent.delete(this.state.data,this.state.position),this.setState({data:null,position:null})},children:"Submit"})]})]})}}class S extends r.Component{constructor(e){super(e),this.state={data:null,position:null}}render(){return(0,y.jsxs)(a.Z,{style:{border:"1px solid rgba(22,45,167,0.9)"},children:[(0,y.jsx)(i.Z,{children:"Update"}),(0,y.jsxs)(o.Z,{className:"text-center",children:[(0,y.jsx)(l.Z,{children:"Value at Position"}),(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(f.Z,{addonType:"prepend",children:(0,y.jsx)(j.Z,{children:"Position"})}),(0,y.jsx)(d.Z,{type:"number",placeholder:"Position",onChange:e=>{this.setState({position:e.target.value})},value:this.state.position?this.state.position:""})]}),(0,y.jsx)("br",{}),(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(f.Z,{addonType:"prepend",children:(0,y.jsx)(j.Z,{children:"Value"})}),(0,y.jsx)(d.Z,{placeholder:"Value",onChange:e=>{this.setState({data:e.target.value})},value:this.state.data?this.state.data:""})]}),(0,y.jsx)("br",{}),(0,y.jsx)(x.Z,{onClick:()=>{this.props.parent.update(this.state.position,this.state.data),this.setState({position:null,data:null})},children:"Submit"})]})]})}}class k extends r.Component{constructor(e){super(e),this.state={start:null,end:null}}render(){return(0,y.jsxs)(a.Z,{style:{border:"1px solid rgba(22,45,167,0.9)"},children:[(0,y.jsx)(i.Z,{children:"Peak"}),(0,y.jsxs)(o.Z,{className:"text-center",children:[(0,y.jsx)(l.Z,{children:"Any One Peak inside Range"}),(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(f.Z,{addonType:"prepend",children:(0,y.jsx)(j.Z,{children:"Start"})}),(0,y.jsx)(d.Z,{placeholder:"Start",onChange:e=>{this.setState({start:e.target.value})},value:this.state.start?this.state.start:""})]}),(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(f.Z,{addonType:"prepend",children:(0,y.jsx)(j.Z,{children:"End"})}),(0,y.jsx)(d.Z,{placeholder:"End",onChange:e=>{this.setState({end:e.target.value})},value:this.state.end?this.state.end:""})]}),(0,y.jsx)("br",{}),(0,y.jsx)(x.Z,{onClick:()=>{this.props.parent.peak(this.state.start,this.state.end),this.setState({start:null,end:null})},children:"Submit"})]})]})}}class N extends r.Component{constructor(){super(...arguments),this.state={array:[],highlights:[],iter:0}}insert(e,t){if(e){let s=this.state.array;if("start"===t.toLowerCase())s.splice(0,0,e);else s.splice(s.length,0,e);this.setState({array:s,highlights:[]})}else alert("Submission is empty")}delete(e,t){let s=this.state.array;if(t=parseInt(t),e){let t=s.length;s=s.filter((t=>t!==e)),s&&0!==s.length||(s=[]),t!==s.length?this.setState({array:s,highlights:[]}):alert("Data not found to delete")}else t>=0&&t<s.length?(s=this.state.array,s.splice(t,1),this.setState({array:s,highlights:[],iter:0})):alert("Unable to delete")}update(e,t){if(e&&t&&parseInt(e)<=this.state.array.length-1&&parseInt(e)>=0){let s=this.state.array,r=[];s[e]=t,r.push(parseInt(e)),this.setState({array:s,highlights:r})}else alert("Cannot update")}isPeak(e,t,s,r){let n=e[t]===parseFloat(e[t])?parseFloat(e[t]):e[t];if(t>s&&t<r){let s=e[t+1]===parseFloat(e[t+1])?parseFloat(e[t+1]):e[t+1],r=e[t-1]===parseFloat(e[t-1])?parseFloat(e[t-1]):e[t-1];if(n>=s&&n>=r)return{r:!0};if(n<=r)return{r:!1,d:"left"}}else if(t===s&&t<r){if(n>=(e[t+1]===parseFloat(e[t+1])?parseFloat(e[t+1]):e[t+1]))return{r:!0}}else if(t===r&&t>s){return n>=(e[t-1]===parseFloat(e[t-1])?parseFloat(e[t-1]):e[t-1])?{r:!0}:{r:!1,d:"left"}}return{r:!1,d:"right"}}bsPeak(e,t,s){let r=parseInt(e+(t-e)/2);if(e>t)return void this.setState({highlights:[]});let{r:n,d:a}=this.isPeak(s,r,e,t);n?this.setState((e=>{let t=e.highlights;return t=[r],{highlights:t,iter:"Completed"}})):"right"===a?this.setState((t=>{let s=t.highlights;for(;e<r;)s.shift(),e++;return{highlights:s,iter:t.iter+1}}),(()=>{setTimeout((()=>{this.bsPeak(e,t,s)}),1e3)})):"left"===a&&this.setState((e=>{let s=e.highlights;for(;t>r;)s.pop(),t--;return{highlights:s,iter:e.iter+1}}),(()=>{setTimeout((()=>{this.bsPeak(e,t,s)}),1e3)}))}peak(e,t){if(e&&t)if(e===Math.floor(e)&&t===Math.floor(t)){if(e>t)return void alert("Start should be less than end");this.state.array.length>0?this.setState((()=>{let s=[],r=Math.floor(e);for(e=r,t=Math.floor(t);r<=t;)s.push(r),r++;return{highlights:s,iter:0}}),(()=>{setTimeout((()=>{this.bsPeak(e,t,this.state.array)}),1e3)})):alert("No peak in empty array")}else alert("Enter integers only");else alert("Incomplete Range")}render(){return(0,y.jsxs)(m.Z,{children:[(0,y.jsxs)(b.Z,{children:[(0,y.jsx)(Z.Z,{sm:3,children:(0,y.jsx)(v,{parent:this})}),(0,y.jsx)(Z.Z,{sm:3,children:(0,y.jsx)(w,{parent:this})}),(0,y.jsx)(Z.Z,{sm:3,children:(0,y.jsx)(S,{parent:this})}),(0,y.jsx)(Z.Z,{sm:3,children:(0,y.jsx)(k,{parent:this})})]}),(0,y.jsx)(b.Z,{className:"mt-4 mb-4",children:this.state.array.map(((e,t)=>{let s=!1;return this.state.highlights.includes(t)&&(s=!0),(0,y.jsx)(n.Z,{highlight:s,data:{value:e,index:t},type:"array"},"".concat(e,"-").concat(t))}))}),(parseInt(this.state.iter)>0||"0"!==this.state.iter)&&(0,y.jsxs)(b.Z,{className:"mt-4 mb-4",children:["Steps : ",this.state.iter]})]})}}},1694:(e,t)=>{var s;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var a=typeof s;if("string"===a||"number"===a)e.push(s);else if(Array.isArray(s)){if(s.length){var i=n.apply(null,s);i&&e.push(i)}}else if("object"===a)if(s.toString===Object.prototype.toString)for(var o in s)r.call(s,o)&&s[o]&&e.push(o);else e.push(s.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(s=function(){return n}.apply(t,[]))||(e.exports=s)}()},2357:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var r=s(7462),n=s(3366),a=s(2791),i=s(2007),o=s.n(i),l=s(1694),c=s.n(l),d=s(5489),h={tag:d.iC,inverse:o().bool,color:o().string,body:o().bool,outline:o().bool,className:o().string,cssModule:o().object,innerRef:o().oneOfType([o().object,o().string,o().func])},p=function(e){var t=e.className,s=e.cssModule,i=e.color,o=e.body,l=e.inverse,h=e.outline,p=e.tag,u=e.innerRef,g=(0,n.Z)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),x=(0,d.mx)(c()(t,"card",!!l&&"text-white",!!o&&"card-body",!!i&&(h?"border":"bg")+"-"+i),s);return a.createElement(p,(0,r.Z)({},g,{className:x,ref:u}))};p.propTypes=h,p.defaultProps={tag:"div"};const u=p},8284:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var r=s(7462),n=s(3366),a=s(2791),i=s(2007),o=s.n(i),l=s(1694),c=s.n(l),d=s(5489),h={tag:d.iC,className:o().string,cssModule:o().object,innerRef:o().oneOfType([o().object,o().string,o().func])},p=function(e){var t=e.className,s=e.cssModule,i=e.innerRef,o=e.tag,l=(0,n.Z)(e,["className","cssModule","innerRef","tag"]),h=(0,d.mx)(c()(t,"card-body"),s);return a.createElement(o,(0,r.Z)({},l,{className:h,ref:i}))};p.propTypes=h,p.defaultProps={tag:"div"};const u=p},3638:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var r=s(7462),n=s(3366),a=s(2791),i=s(2007),o=s.n(i),l=s(1694),c=s.n(l),d=s(5489),h={tag:d.iC,className:o().string,cssModule:o().object},p=function(e){var t=e.className,s=e.cssModule,i=e.tag,o=(0,n.Z)(e,["className","cssModule","tag"]),l=(0,d.mx)(c()(t,"card-header"),s);return a.createElement(i,(0,r.Z)({},o,{className:l}))};p.propTypes=h,p.defaultProps={tag:"div"};const u=p},6187:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var r=s(7462),n=s(3366),a=s(2791),i=s(2007),o=s.n(i),l=s(1694),c=s.n(l),d=s(5489),h={tag:d.iC,className:o().string,cssModule:o().object},p=function(e){var t=e.className,s=e.cssModule,i=e.tag,o=(0,n.Z)(e,["className","cssModule","tag"]),l=(0,d.mx)(c()(t,"card-title"),s);return a.createElement(i,(0,r.Z)({},o,{className:l}))};p.propTypes=h,p.defaultProps={tag:"div"};const u=p},7988:(e,t,s)=>{"use strict";s.d(t,{Z:()=>j});var r=s(7462),n=s(3366),a=s(2791),i=s(2007),o=s.n(i),l=s(1694),c=s.n(l),d=s(5489),h=o().oneOfType([o().number,o().string]),p=o().oneOfType([o().bool,o().number,o().string,o().shape({size:o().oneOfType([o().bool,o().number,o().string]),order:h,offset:h})]),u={tag:d.iC,xs:p,sm:p,md:p,lg:p,xl:p,className:o().string,cssModule:o().object,widths:o().array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},x=function(e,t,s){return!0===s||""===s?e?"col":"col-"+t:"auto"===s?e?"col-auto":"col-"+t+"-auto":e?"col-"+s:"col-"+t+"-"+s},f=function(e){var t=e.className,s=e.cssModule,i=e.widths,o=e.tag,l=(0,n.Z)(e,["className","cssModule","widths","tag"]),h=[];i.forEach((function(t,r){var n=e[t];if(delete l[t],n||""===n){var a=!r;if((0,d.Kn)(n)){var i,o=a?"-":"-"+t+"-",p=x(a,t,n.size);h.push((0,d.mx)(c()(((i={})[p]=n.size||""===n.size,i["order"+o+n.order]=n.order||0===n.order,i["offset"+o+n.offset]=n.offset||0===n.offset,i)),s))}else{var u=x(a,t,n);h.push(u)}}})),h.length||h.push("col");var p=(0,d.mx)(c()(t,h),s);return a.createElement(o,(0,r.Z)({},l,{className:p}))};f.propTypes=u,f.defaultProps=g;const j=f},743:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var r=s(7462),n=s(3366),a=s(2791),i=s(2007),o=s.n(i),l=s(1694),c=s.n(l),d=s(5489),h={tag:d.iC,fluid:o().oneOfType([o().bool,o().string]),className:o().string,cssModule:o().object},p=function(e){var t=e.className,s=e.cssModule,i=e.fluid,o=e.tag,l=(0,n.Z)(e,["className","cssModule","fluid","tag"]),h="container";!0===i?h="container-fluid":i&&(h="container-"+i);var p=(0,d.mx)(c()(t,h),s);return a.createElement(o,(0,r.Z)({},l,{className:p}))};p.propTypes=h,p.defaultProps={tag:"div"};const u=p},6153:(e,t,s)=>{"use strict";s.d(t,{Z:()=>x});var r=s(7462),n=s(3366),a=s(2791),i=s(2007),o=s.n(i),l=s(1694),c=s.n(l),d=s(5489),h=o().oneOfType([o().number,o().string]),p={tag:d.iC,noGutters:o().bool,className:o().string,cssModule:o().object,form:o().bool,xs:h,sm:h,md:h,lg:h,xl:h},u={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,s=e.cssModule,i=e.noGutters,o=e.tag,l=e.form,h=e.widths,p=(0,n.Z)(e,["className","cssModule","noGutters","tag","form","widths"]),u=[];h.forEach((function(t,s){var r=e[t];if(delete p[t],r){var n=!s;u.push(n?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var g=(0,d.mx)(c()(t,i?"no-gutters":null,l?"form-row":"row",u),s);return a.createElement(o,(0,r.Z)({},p,{className:g}))};g.propTypes=p,g.defaultProps=u;const x=g},5489:(e,t,s)=>{"use strict";s.d(t,{CE:()=>o,Do:()=>f,Kn:()=>b,O4:()=>d,U9:()=>v,ei:()=>l,iC:()=>u,mx:()=>i,qW:()=>p,rb:()=>x,wF:()=>g});var r,n=s(2007),a=s.n(n);function i(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function o(e,t){var s={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(s[r]=e[r])})),s}function l(e,t){for(var s,r=Array.isArray(t)?t:[t],n=r.length,a={};n>0;)a[s=r[n-=1]]=e[s];return a}var c={};function d(e){c[e]||("undefined"!==typeof console&&console.error(e),c[e]=!0)}var h="object"===typeof window&&window.Element||function(){};var p=a().oneOfType([a().string,a().func,function(e,t,s){if(!(e[t]instanceof h))return new Error("Invalid prop `"+t+"` supplied to `"+s+"`. Expected prop to be an instance of Element. Validation failed.")},a().shape({current:a().any})]),u=a().oneOfType([a().func,a().string,a().shape({$$typeof:a().symbol,render:a().func}),a().arrayOf(a().oneOfType([a().func,a().string,a().shape({$$typeof:a().symbol,render:a().func})]))]),g={Fade:150,Collapse:350,Modal:300,Carousel:600},x=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],f={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},j=!("undefined"===typeof window||!window.document||!window.document.createElement);function m(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function b(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function Z(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!b(e))return!1;var t=m(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&j){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function y(e){return null!==e&&(Array.isArray(e)||j&&"number"===typeof e.length)}function v(e,t){var s=Z(e);return t?y(s)?s:null===s?[]:[s]:y(s)?s[0]:s}}}]);
//# sourceMappingURL=6905.faf0c619.chunk.js.map