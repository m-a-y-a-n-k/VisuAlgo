"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5865],{9856:(e,n,t)=>{t.d(n,{Y:()=>a,Z:()=>i});var o=t(2791),r=o.createContext();function a(){return o.useContext(r)}const i=r},4326:(e,n,t)=>{function o(e){var n=e.props,t=e.states,o=e.muiFormControl;return t.reduce((function(e,t){return e[t]=n[t],o&&"undefined"===typeof n[t]&&(e[t]=o[t]),e}),{})}t.d(n,{Z:()=>o})},5088:(e,n,t)=>{t.d(n,{Z:()=>x});var o=t(5987),r=t(7462),a=t(7483),i=t(2791),l=(t(2007),t(8182)),u=t(4326),d=t(9856),c=t(8317),s=t(1122),f=t(9806),p=t(503);function m(e,n){return parseInt(e[n],10)||0}var h="undefined"!==typeof window?i.useLayoutEffect:i.useEffect,v={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"};const b=i.forwardRef((function(e,n){var t=e.onChange,a=e.rows,l=e.rowsMax,u=e.rowsMin,d=void 0===u?1:u,c=e.style,s=e.value,b=(0,o.Z)(e,["onChange","rows","rowsMax","rowsMin","style","value"]),y=a||d,w=i.useRef(null!=s).current,g=i.useRef(null),x=(0,f.Z)(n,g),Z=i.useRef(null),C=i.useRef(0),E=i.useState({}),k=E[0],S=E[1],M=i.useCallback((function(){var n=g.current,t=window.getComputedStyle(n),o=Z.current;o.style.width=t.width,o.value=n.value||e.placeholder||"x","\n"===o.value.slice(-1)&&(o.value+=" ");var r=t["box-sizing"],a=m(t,"padding-bottom")+m(t,"padding-top"),i=m(t,"border-bottom-width")+m(t,"border-top-width"),u=o.scrollHeight-a;o.value="x";var d=o.scrollHeight-a,c=u;y&&(c=Math.max(Number(y)*d,c)),l&&(c=Math.min(Number(l)*d,c));var s=(c=Math.max(c,d))+("border-box"===r?a+i:0),f=Math.abs(c-u)<=1;S((function(e){return C.current<20&&(s>0&&Math.abs((e.outerHeightStyle||0)-s)>1||e.overflow!==f)?(C.current+=1,{overflow:f,outerHeightStyle:s}):e}))}),[l,y,e.placeholder]);i.useEffect((function(){var e=(0,p.Z)((function(){C.current=0,M()}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[M]),h((function(){M()})),i.useEffect((function(){C.current=0}),[s]);return i.createElement(i.Fragment,null,i.createElement("textarea",(0,r.Z)({value:s,onChange:function(e){C.current=0,w||M(),t&&t(e)},ref:x,rows:y,style:(0,r.Z)({height:k.outerHeightStyle,overflow:k.overflow?"hidden":null},c)},b)),i.createElement("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:Z,tabIndex:-1,style:(0,r.Z)({},v,c)}))}));var y=t(7904),w="undefined"===typeof window?i.useEffect:i.useLayoutEffect,g=i.forwardRef((function(e,n){var t=e["aria-describedby"],c=e.autoComplete,p=e.autoFocus,m=e.classes,h=e.className,v=(e.color,e.defaultValue),g=e.disabled,x=e.endAdornment,Z=(e.error,e.fullWidth),C=void 0!==Z&&Z,E=e.id,k=e.inputComponent,S=void 0===k?"input":k,M=e.inputProps,A=void 0===M?{}:M,F=e.inputRef,N=(e.margin,e.multiline),R=void 0!==N&&N,D=e.name,z=e.onBlur,B=e.onChange,H=e.onClick,L=e.onFocus,V=e.onKeyDown,K=e.onKeyUp,P=e.placeholder,T=e.readOnly,W=e.renderSuffix,O=e.rows,I=e.rowsMax,$=e.rowsMin,q=e.startAdornment,U=e.type,Y=void 0===U?"text":U,j=e.value,G=(0,o.Z)(e,["aria-describedby","autoComplete","autoFocus","classes","className","color","defaultValue","disabled","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","rowsMax","rowsMin","startAdornment","type","value"]),J=null!=A.value?A.value:j,Q=i.useRef(null!=J).current,X=i.useRef(),_=i.useCallback((function(e){0}),[]),ee=(0,f.Z)(A.ref,_),ne=(0,f.Z)(F,ee),te=(0,f.Z)(X,ne),oe=i.useState(!1),re=oe[0],ae=oe[1],ie=(0,d.Y)();var le=(0,u.Z)({props:e,muiFormControl:ie,states:["color","disabled","error","hiddenLabel","margin","required","filled"]});le.focused=ie?ie.focused:re,i.useEffect((function(){!ie&&g&&re&&(ae(!1),z&&z())}),[ie,g,re,z]);var ue=ie&&ie.onFilled,de=ie&&ie.onEmpty,ce=i.useCallback((function(e){(0,y.vd)(e)?ue&&ue():de&&de()}),[ue,de]);w((function(){Q&&ce({value:J})}),[J,ce,Q]);i.useEffect((function(){ce(X.current)}),[]);var se=S,fe=(0,r.Z)({},A,{ref:te});"string"!==typeof se?fe=(0,r.Z)({inputRef:te,type:Y},fe,{ref:null}):R?!O||I||$?(fe=(0,r.Z)({rows:O,rowsMax:I},fe),se=b):se="textarea":fe=(0,r.Z)({type:Y},fe);return i.useEffect((function(){ie&&ie.setAdornedStart(Boolean(q))}),[ie,q]),i.createElement("div",(0,r.Z)({className:(0,l.Z)(m.root,m["color".concat((0,s.Z)(le.color||"primary"))],h,le.disabled&&m.disabled,le.error&&m.error,C&&m.fullWidth,le.focused&&m.focused,ie&&m.formControl,R&&m.multiline,q&&m.adornedStart,x&&m.adornedEnd,"dense"===le.margin&&m.marginDense),onClick:function(e){X.current&&e.currentTarget===e.target&&X.current.focus(),H&&H(e)},ref:n},G),q,i.createElement(d.Z.Provider,{value:null},i.createElement(se,(0,r.Z)({"aria-invalid":le.error,"aria-describedby":t,autoComplete:c,autoFocus:p,defaultValue:v,disabled:le.disabled,id:E,onAnimationStart:function(e){ce("mui-auto-fill-cancel"===e.animationName?X.current:{value:"x"})},name:D,placeholder:P,readOnly:T,required:le.required,rows:O,value:J,onKeyDown:V,onKeyUp:K},fe,{className:(0,l.Z)(m.input,A.className,le.disabled&&m.disabled,R&&m.inputMultiline,le.hiddenLabel&&m.inputHiddenLabel,q&&m.inputAdornedStart,x&&m.inputAdornedEnd,"search"===Y&&m.inputTypeSearch,"dense"===le.margin&&m.inputMarginDense),onBlur:function(e){z&&z(e),A.onBlur&&A.onBlur(e),ie&&ie.onBlur?ie.onBlur(e):ae(!1)},onChange:function(e){if(!Q){var n=e.target||X.current;if(null==n)throw new Error((0,a.Z)(1));ce({value:n.value})}for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];A.onChange&&A.onChange.apply(A,[e].concat(o)),B&&B.apply(void 0,[e].concat(o))},onFocus:function(e){le.disabled?e.stopPropagation():(L&&L(e),A.onFocus&&A.onFocus(e),ie&&ie.onFocus?ie.onFocus(e):ae(!0))}}))),x,W?W((0,r.Z)({},le,{startAdornment:q})):null)}));const x=(0,c.Z)((function(e){var n="light"===e.palette.type,t={color:"currentColor",opacity:n?.42:.5,transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},o={opacity:"0 !important"},a={opacity:n?.42:.5};return{"@global":{"@keyframes mui-auto-fill":{},"@keyframes mui-auto-fill-cancel":{}},root:(0,r.Z)({},e.typography.body1,{color:e.palette.text.primary,lineHeight:"1.1876em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center","&$disabled":{color:e.palette.text.disabled,cursor:"default"}}),formControl:{},focused:{},disabled:{},adornedStart:{},adornedEnd:{},error:{},marginDense:{},multiline:{padding:"".concat(6,"px 0 ").concat(7,"px"),"&$marginDense":{paddingTop:3}},colorSecondary:{},fullWidth:{width:"100%"},input:{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"".concat(6,"px 0 ").concat(7,"px"),border:0,boxSizing:"content-box",background:"none",height:"1.1876em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":t,"&::-moz-placeholder":t,"&:-ms-input-placeholder":t,"&::-ms-input-placeholder":t,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{"-webkit-appearance":"none"},"label[data-shrink=false] + $formControl &":{"&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&:-ms-input-placeholder":o,"&::-ms-input-placeholder":o,"&:focus::-webkit-input-placeholder":a,"&:focus::-moz-placeholder":a,"&:focus:-ms-input-placeholder":a,"&:focus::-ms-input-placeholder":a},"&$disabled":{opacity:1},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},inputMarginDense:{paddingTop:3},inputMultiline:{height:"auto",resize:"none",padding:0},inputTypeSearch:{"-moz-appearance":"textfield","-webkit-appearance":"textfield"},inputAdornedStart:{},inputAdornedEnd:{},inputHiddenLabel:{}}}),{name:"MuiInputBase"})(g)},7904:(e,n,t)=>{function o(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function r(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(o(e.value)&&""!==e.value||n&&o(e.defaultValue)&&""!==e.defaultValue)}function a(e){return e.startAdornment}t.d(n,{B7:()=>a,vd:()=>r})},4712:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(2791),r=t(4164),a=(t(2007),t(1565)),i=t(9806);var l="undefined"!==typeof window?o.useLayoutEffect:o.useEffect;const u=o.forwardRef((function(e,n){var t=e.children,u=e.container,d=e.disablePortal,c=void 0!==d&&d,s=e.onRendered,f=o.useState(null),p=f[0],m=f[1],h=(0,i.Z)(o.isValidElement(t)?t.ref:null,n);return l((function(){c||m(function(e){return e="function"===typeof e?e():e,r.findDOMNode(e)}(u)||document.body)}),[u,c]),l((function(){if(p&&!c)return(0,a.Z)(n,p),function(){(0,a.Z)(n,null)}}),[n,p,c]),l((function(){s&&(p||c)&&s()}),[s,p,c]),c?o.isValidElement(t)?o.cloneElement(t,{ref:h}):t:p?r.createPortal(t,p):p}))}}]);
//# sourceMappingURL=5865.3a91a5b5.chunk.js.map