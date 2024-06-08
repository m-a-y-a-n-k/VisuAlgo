"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6881],{96881:(e,n,t)=>{t.d(n,{Z:()=>F});var o=t(45987),r=t(87462),i=t(72791),a=t(54164),c=(t(52007),t(78444)),l=t(70794),s=t(54667),d=t(84712),u=t(37545),f=t(69806),p=t(72216),h=t(19535);var v=t(43144),m=t(93433),b=t(6394),y=t(37636);function E(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function g(e){return parseInt(window.getComputedStyle(e)["padding-right"],10)||0}function k(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,i=[n,t].concat((0,m.Z)(o)),a=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,(function(e){1===e.nodeType&&-1===i.indexOf(e)&&-1===a.indexOf(e.tagName)&&E(e,r)}))}function R(e,n){var t=-1;return e.some((function(e,o){return!!n(e)&&(t=o,!0)})),t}function w(e,n){var t,o=[],r=[],i=e.container;if(!n.disableScrollLock){if(function(e){var n=(0,s.Z)(e);return n.body===e?(0,y.Z)(n).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(i)){var a=(0,b.Z)();o.push({value:i.style.paddingRight,key:"padding-right",el:i}),i.style["padding-right"]="".concat(g(i)+a,"px"),t=(0,s.Z)(i).querySelectorAll(".mui-fixed"),[].forEach.call(t,(function(e){r.push(e.style.paddingRight),e.style.paddingRight="".concat(g(e)+a,"px")}))}var c=i.parentElement,l="HTML"===c.nodeName&&"scroll"===window.getComputedStyle(c)["overflow-y"]?c:i;o.push({value:l.style.overflow,key:"overflow",el:l}),l.style.overflow="hidden"}return function(){t&&[].forEach.call(t,(function(e,n){r[n]?e.style.paddingRight=r[n]:e.style.removeProperty("padding-right")})),o.forEach((function(e){var n=e.value,t=e.el,o=e.key;n?t.style.setProperty(o,n):t.style.removeProperty(o)}))}}var x=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.modals=[],this.containers=[]}return(0,v.Z)(e,[{key:"add",value:function(e,n){var t=this.modals.indexOf(e);if(-1!==t)return t;t=this.modals.length,this.modals.push(e),e.modalRef&&E(e.modalRef,!1);var o=function(e){var n=[];return[].forEach.call(e.children,(function(e){e.getAttribute&&"true"===e.getAttribute("aria-hidden")&&n.push(e)})),n}(n);k(n,e.mountNode,e.modalRef,o,!0);var r=R(this.containers,(function(e){return e.container===n}));return-1!==r?(this.containers[r].modals.push(e),t):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblingNodes:o}),t)}},{key:"mount",value:function(e,n){var t=R(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),o=this.containers[t];o.restore||(o.restore=w(o,n))}},{key:"remove",value:function(e){var n=this.modals.indexOf(e);if(-1===n)return n;var t=R(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),o=this.containers[t];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&E(e.modalRef,!0),k(o.container,e.mountNode,e.modalRef,o.hiddenSiblingNodes,!1),this.containers.splice(t,1);else{var r=o.modals[o.modals.length-1];r.modalRef&&E(r.modalRef,!1)}return n}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}();const Z=function(e){var n=e.children,t=e.disableAutoFocus,o=void 0!==t&&t,r=e.disableEnforceFocus,c=void 0!==r&&r,l=e.disableRestoreFocus,d=void 0!==l&&l,u=e.getDoc,p=e.isEnabled,h=e.open,v=i.useRef(),m=i.useRef(null),b=i.useRef(null),y=i.useRef(),E=i.useRef(null),g=i.useCallback((function(e){E.current=a.findDOMNode(e)}),[]),k=(0,f.Z)(n.ref,g),R=i.useRef();return i.useEffect((function(){R.current=h}),[h]),!R.current&&h&&"undefined"!==typeof window&&(y.current=u().activeElement),i.useEffect((function(){if(h){var e=(0,s.Z)(E.current);o||!E.current||E.current.contains(e.activeElement)||(E.current.hasAttribute("tabIndex")||E.current.setAttribute("tabIndex",-1),E.current.focus());var n=function(){null!==E.current&&(e.hasFocus()&&!c&&p()&&!v.current?E.current&&!E.current.contains(e.activeElement)&&E.current.focus():v.current=!1)},t=function(n){!c&&p()&&9===n.keyCode&&e.activeElement===E.current&&(v.current=!0,n.shiftKey?b.current.focus():m.current.focus())};e.addEventListener("focus",n,!0),e.addEventListener("keydown",t,!0);var r=setInterval((function(){n()}),50);return function(){clearInterval(r),e.removeEventListener("focus",n,!0),e.removeEventListener("keydown",t,!0),d||(y.current&&y.current.focus&&y.current.focus(),y.current=null)}}}),[o,c,d,p,h]),i.createElement(i.Fragment,null,i.createElement("div",{tabIndex:0,ref:m,"data-test":"sentinelStart"}),i.cloneElement(n,{ref:k}),i.createElement("div",{tabIndex:0,ref:b,"data-test":"sentinelEnd"}))};var C={root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}};const I=i.forwardRef((function(e,n){var t=e.invisible,a=void 0!==t&&t,c=e.open,l=(0,o.Z)(e,["invisible","open"]);return c?i.createElement("div",(0,r.Z)({"aria-hidden":!0,ref:n},l,{style:(0,r.Z)({},C.root,a?C.invisible:{},l.style)})):null}));var A=new x;const F=i.forwardRef((function(e,n){var t=(0,c.Z)(),v=(0,l.Z)({name:"MuiModal",props:(0,r.Z)({},e),theme:t}),m=v.BackdropComponent,b=void 0===m?I:m,y=v.BackdropProps,g=v.children,k=v.closeAfterTransition,R=void 0!==k&&k,w=v.container,x=v.disableAutoFocus,C=void 0!==x&&x,F=v.disableBackdropClick,T=void 0!==F&&F,S=v.disableEnforceFocus,P=void 0!==S&&S,L=v.disableEscapeKeyDown,B=void 0!==L&&L,D=v.disablePortal,M=void 0!==D&&D,O=v.disableRestoreFocus,N=void 0!==O&&O,K=v.disableScrollLock,W=void 0!==K&&K,z=v.hideBackdrop,H=void 0!==z&&z,q=v.keepMounted,Y=void 0!==q&&q,j=v.manager,G=void 0===j?A:j,J=v.onBackdropClick,Q=v.onClose,U=v.onEscapeKeyDown,V=v.onRendered,X=v.open,$=(0,o.Z)(v,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),_=i.useState(!0),ee=_[0],ne=_[1],te=i.useRef({}),oe=i.useRef(null),re=i.useRef(null),ie=(0,f.Z)(re,n),ae=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(v),ce=function(){return(0,s.Z)(oe.current)},le=function(){return te.current.modalRef=re.current,te.current.mountNode=oe.current,te.current},se=function(){G.mount(le(),{disableScrollLock:W}),re.current.scrollTop=0},de=(0,p.Z)((function(){var e=function(e){return e="function"===typeof e?e():e,a.findDOMNode(e)}(w)||ce().body;G.add(le(),e),re.current&&se()})),ue=i.useCallback((function(){return G.isTopModal(le())}),[G]),fe=(0,p.Z)((function(e){oe.current=e,e&&(V&&V(),X&&ue()?se():E(re.current,!0))})),pe=i.useCallback((function(){G.remove(le())}),[G]);if(i.useEffect((function(){return function(){pe()}}),[pe]),i.useEffect((function(){X?de():ae&&R||pe()}),[X,pe,ae,R,de]),!Y&&!X&&(!ae||ee))return null;var he=function(e){return{root:{position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}}(t||{zIndex:h.Z}),ve={};return void 0===g.props.tabIndex&&(ve.tabIndex=g.props.tabIndex||"-1"),ae&&(ve.onEnter=(0,u.Z)((function(){ne(!1)}),g.props.onEnter),ve.onExited=(0,u.Z)((function(){ne(!0),R&&pe()}),g.props.onExited)),i.createElement(d.Z,{ref:fe,container:w,disablePortal:M},i.createElement("div",(0,r.Z)({ref:ie,onKeyDown:function(e){"Escape"===e.key&&ue()&&(U&&U(e),B||(e.stopPropagation(),Q&&Q(e,"escapeKeyDown")))},role:"presentation"},$,{style:(0,r.Z)({},he.root,!X&&ee?he.hidden:{},$.style)}),H?null:i.createElement(b,(0,r.Z)({open:X,onClick:function(e){e.target===e.currentTarget&&(J&&J(e),!T&&Q&&Q(e,"backdropClick"))}},y)),i.createElement(Z,{disableEnforceFocus:P,disableAutoFocus:C,disableRestoreFocus:N,getDoc:ce,isEnabled:ue,open:X},i.cloneElement(g,ve))))}))},6394:(e,n,t)=>{function o(){var e=document.createElement("div");e.style.width="99px",e.style.height="99px",e.style.position="absolute",e.style.top="-9999px",e.style.overflow="scroll",document.body.appendChild(e);var n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),n}t.d(n,{Z:()=>o})}}]);
//# sourceMappingURL=6881.c926a646.chunk.js.map