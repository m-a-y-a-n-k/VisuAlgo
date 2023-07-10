"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2391],{2391:(e,t,s)=>{s.r(t),s.d(t,{default:()=>C});var i=s(2791),a=s(743),l=s(6153),n=s(7988),o=s(5095),h=s(2357),r=s(3638),d=s(8284),m=s(6187),g=s(2377),c=s(4555),u=s(4257),x=s(184);class p extends i.Component{constructor(){super(...arguments),this.hexToRgb=e=>e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,((e,t,s,i)=>"#"+t+t+s+s+i+i)).substring(1).match(/.{2}/g).map((e=>parseInt(e,16)))}shouldComponentUpdate(e,t){return e!==this.props||t!==this.state}captureMousePixel(e){let t=document.getElementById("cusImage"),s=document.getElementById("detailsPane"),i=t.getContext("2d").getImageData(e.nativeEvent.offsetX,e.nativeEvent.offsetY,t.width,t.height).data;s.innerHTML="R: "+i[0]+"<br>G: "+i[1]+"<br>B: "+i[2]+"<br>A: "+i[3]}fillPixel(e,t,s,i,a){if(t<0||t>a.width||s<0||s>a.width)return;let l=a.getContext("2d").getImageData(t,s,a.width,a.height).data;if(l[0]!==i[0]||l[1]!==i[1]||l[2]!==i[2])return;let n=this.hexToRgb(e),o=a.getContext("2d").createImageData(1,1);l=o.data,l[0]=n[0],l[1]=n[1],l[2]=n[2],l[3]=255,a.getContext("2d").putImageData(o,t,s),setTimeout((()=>{this.fillPixel(e,t+1,s,i,a)}),20),setTimeout((()=>{this.fillPixel(e,t+1,s-1,i,a)}),20),setTimeout((()=>{this.fillPixel(e,t+1,s+1,i,a)}),20),setTimeout((()=>{this.fillPixel(e,t,s-1,i,a)}),20),setTimeout((()=>{this.fillPixel(e,t,s+1,i,a)}),20),setTimeout((()=>{this.fillPixel(e,t-1,s,i,a)}),20),setTimeout((()=>{this.fillPixel(e,t-1,s+1,i,a)}),20),setTimeout((()=>{this.fillPixel(e,t-1,s-1,i,a)}),20)}render(){return(0,x.jsx)("canvas",{id:"cusImage",width:"360",height:"360",style:{cursor:"crosshair",margin:"5% auto",border:"1px solid #bbb"},onMouseMove:e=>{this.captureMousePixel(e)},onClick:e=>{let t=e.nativeEvent.offsetX,s=e.nativeEvent.offsetY,i=document.getElementById("cusImage"),a=i.getContext("2d").getImageData(t,s,i.width,i.height).data;this.fillPixel(this.props.fill,t,s,a,i)}})}}class f extends i.Component{render(){return(0,x.jsx)("div",{id:"detailsPane",style:{position:"relative",top:"50%",margin:"auto",height:"100px",width:"200px",border:"1px solid #bbb"}})}}class C extends i.Component{constructor(e){super(e),this.handleChangeComplete=e=>{this.setState({background:e.hex})},this.getCustomImage=this.getCustomImage.bind(this),this.handleChangeComplete=this.handleChangeComplete.bind(this),this.state={hasImage:!1,alert:null,background:"#fff"}}getCustomImage(e){var t=this,s=window.URL,i=new Image;let a=e.target.files[0];if(-1!==a.type.indexOf("image")){var l=s.createObjectURL(a);i.onload=function(){t.setState({hasImage:!0,alert:"Click at position in image to start flood fill with color of choice"},(()=>{var e=document.getElementById("cusImage"),s=e.getContext("2d");s.clearRect(0,0,e.width,e.height),s.drawImage(i,0,0,360,360),setTimeout((()=>{t.setState({alert:null})}),5e3)}))},i.src=l}else t.setState({hasImage:!1,alert:"Please upload an image"},(()=>{setTimeout((()=>{t.setState({alert:null})}),5e3)}))}render(){return(0,x.jsxs)(a.Z,{children:[(0,x.jsx)(l.Z,{children:(0,x.jsx)(n.Z,{sm:12,children:this.state.alert&&(0,x.jsx)(o.Z,{color:"primary",children:this.state.alert})})}),(0,x.jsxs)(l.Z,{children:[(0,x.jsx)(n.Z,{sm:6,children:(0,x.jsxs)(h.Z,{style:{border:"1px solid rgba(22,45,167,0.9)"},children:[(0,x.jsx)(r.Z,{children:"Flood Fill Algorithm on Custom Image"}),(0,x.jsxs)(d.Z,{className:"text-center",children:[(0,x.jsx)(m.Z,{children:"Choose Custom Image"}),(0,x.jsx)(g.Z,{children:(0,x.jsx)(c.Z,{id:"getCustomImage",type:"file",placeholder:"Custom Image",onChange:this.getCustomImage})})]})]})}),this.state.hasImage&&(0,x.jsx)(n.Z,{sm:6,children:(0,x.jsx)(u.ZP,{color:this.state.background,onChangeComplete:this.handleChangeComplete})})]}),(0,x.jsxs)(l.Z,{children:[(0,x.jsx)(n.Z,{sm:6,children:this.state.hasImage&&(0,x.jsx)(p,{fill:this.state.background})}),(0,x.jsx)(n.Z,{sm:6,children:(0,x.jsx)(f,{})})]})]})}}}}]);
//# sourceMappingURL=2391.1f3e251c.chunk.js.map