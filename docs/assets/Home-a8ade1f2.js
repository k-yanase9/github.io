import{m as L,a as z,b as N,u as It}from"./tag-62a010d2.js";import{t as se,p as b,v as R,c as v,x as q,y as Re,z as xe,j as r,F as je,A as Ve,n as X,h as $,q as J,B as Oe,C as B,g as Ae,D as $t,b as Ge,i as Pt,E as ce,G as O,a as Et,H as Bt,o as Lt,I as Nt,J as Tt,f as zt,K as de,L as Rt,d as I,M as ae,r as K,N as jt,O as Ot,T as At,s as j,S as fe,P as Gt,u as Me,Q as Mt,R as Ie,U as We,V as Wt,W as $e,X as ie,Y as De,Z as Q,_ as ve,$ as me,a0 as Dt,a1 as Ht,a2 as Ut,l as He,m as Ue,w as E,a3 as Z,a4 as ge}from"./index-288fb89c.js";const Ft=["top","bottom"],Yt=["start","end","left","right"];function qt(e,t){let[n,s]=e.split(" ");return s||(s=se(Ft,n)?"start":se(Yt,n)?"top":"center"),{side:Pe(n,t),align:Pe(s,t)}}function Pe(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const Xt="/github.io/assets/logo-3f834fa8.svg";const Fe=b({border:[Boolean,Number,String]},"border");function Ye(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{borderClasses:v(()=>{const s=q(e)?e.value:e.border,i=[];if(s===!0||s==="")i.push(`${t}--border`);else if(typeof s=="string"||s===0)for(const a of String(s).split(" "))i.push(`border-${a}`);return i})}}const Jt=[null,"default","comfortable","compact"],qe=b({density:{type:String,default:"default",validator:e=>Jt.includes(e)}},"density");function Xe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{densityClasses:v(()=>`${t}--density-${e.density}`)}}const Je=b({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Ke(e){return{elevationClasses:v(()=>{const n=q(e)?e.value:e.elevation,s=[];return n==null||s.push(`elevation-${n}`),s})}}const Qe=b({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ze(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{roundedClasses:v(()=>{const s=q(e)?e.value:e.rounded,i=[];if(s===!0||s==="")i.push(`${t}--rounded`);else if(typeof s=="string"||s===0)for(const a of String(s).split(" "))i.push(`rounded-${a}`);return i})}}function et(e){return Re(()=>{const t=[],n={};return e.value.background&&(xe(e.value.background)?n.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(xe(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function le(e,t){const n=v(()=>({text:q(e)?e.value:t?e[t]:null})),{colorClasses:s,colorStyles:i}=et(n);return{textColorClasses:s,textColorStyles:i}}const Kt=["elevated","flat","tonal","outlined","text","plain"];function Qt(e,t){return r(je,null,[e&&r("span",{key:"overlay",class:`${t}__overlay`},null),r("span",{key:"underlay",class:`${t}__underlay`},null)])}const tt=b({color:String,variant:{type:String,default:"elevated",validator:e=>Kt.includes(e)}},"variant");function Zt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();const n=v(()=>{const{variant:a}=Ve(e);return`${t}--variant-${a}`}),{colorClasses:s,colorStyles:i}=et(v(()=>{const{variant:a,color:l}=Ve(e);return{[["elevated","flat"].includes(a)?"background":"text"]:l}}));return{colorClasses:s,colorStyles:i,variantClasses:n}}const nt=b({divided:Boolean,...Fe(),...L(),...qe(),...Je(),...Qe(),...z(),...X(),...tt()},"VBtnGroup"),Ee=$()({name:"VBtnGroup",props:nt(),setup(e,t){let{slots:n}=t;const{themeClasses:s}=J(e),{densityClasses:i}=Xe(e),{borderClasses:a}=Ye(e),{elevationClasses:l}=Ke(e),{roundedClasses:o}=Ze(e);Oe({VBtn:{height:"auto",color:B(e,"color"),density:B(e,"density"),flat:!0,variant:B(e,"variant")}}),N(()=>r(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},s.value,a.value,i.value,l.value,o.value,e.class],style:e.style},n))}}),en=b({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),tn=b({value:null,disabled:Boolean,selectedClass:String},"group-item");function nn(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const s=Ae("useGroupItem");if(!s)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=$t();Ge(Symbol.for(`${t.description}:id`),i);const a=Pt(t,null);if(!a){if(!n)return a;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const l=B(e,"value"),o=v(()=>a.disabled.value||e.disabled);a.register({id:i,value:l,disabled:o},s),ce(()=>{a.unregister(i)});const u=v(()=>a.isSelected(i)),d=v(()=>u.value&&[a.selectedClass.value,e.selectedClass]);return O(u,m=>{s.emit("group:selected",{value:m})}),{id:i,isSelected:u,toggle:()=>a.select(i,!u.value),select:m=>a.select(i,m),selectedClass:d,value:l,disabled:o,group:a}}function sn(e,t){let n=!1;const s=Et([]),i=Bt(e,"modelValue",[],c=>c==null?[]:st(s,Tt(c)),c=>{const f=ln(s,c);return e.multiple?f:f[0]}),a=Ae("useGroup");function l(c,f){const S=c,h=Symbol.for(`${t.description}:id`),k=zt(h,a==null?void 0:a.vnode).indexOf(f);k>-1?s.splice(k,0,S):s.push(S)}function o(c){if(n)return;u();const f=s.findIndex(S=>S.id===c);s.splice(f,1)}function u(){const c=s.find(f=>!f.disabled);c&&e.mandatory==="force"&&!i.value.length&&(i.value=[c.id])}Lt(()=>{u()}),ce(()=>{n=!0});function d(c,f){const S=s.find(h=>h.id===c);if(!(f&&(S!=null&&S.disabled)))if(e.multiple){const h=i.value.slice(),p=h.findIndex(y=>y===c),k=~p;if(f=f??!k,k&&e.mandatory&&h.length<=1||!k&&e.max!=null&&h.length+1>e.max)return;p<0&&f?h.push(c):p>=0&&!f&&h.splice(p,1),i.value=h}else{const h=i.value.includes(c);if(e.mandatory&&h)return;i.value=f??!h?[c]:[]}}function m(c){if(e.multiple,i.value.length){const f=i.value[0],S=s.findIndex(k=>k.id===f);let h=(S+c)%s.length,p=s[h];for(;p.disabled&&h!==S;)h=(h+c)%s.length,p=s[h];if(p.disabled)return;i.value=[s[h].id]}else{const f=s.find(S=>!S.disabled);f&&(i.value=[f.id])}}const C={register:l,unregister:o,selected:i,select:d,disabled:B(e,"disabled"),prev:()=>m(s.length-1),next:()=>m(1),isSelected:c=>i.value.includes(c),selectedClass:v(()=>e.selectedClass),items:v(()=>s),getItemIndex:c=>an(s,c)};return Ge(t,C),C}function an(e,t){const n=st(e,[t]);return n.length?e.findIndex(s=>s.id===n[0]):-1}function st(e,t){const n=[];return t.forEach(s=>{const i=e.find(l=>Nt(s,l.value)),a=e[s];(i==null?void 0:i.value)!=null?n.push(i.id):a!=null&&n.push(a.id)}),n}function ln(e,t){const n=[];return t.forEach(s=>{const i=e.findIndex(a=>a.id===s);if(~i){const a=e[i];n.push(a.value!=null?a.value:i)}}),n}const at=Symbol.for("vuetify:v-btn-toggle"),rn=b({...nt(),...en()},"VBtnToggle");$()({name:"VBtnToggle",props:rn(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{isSelected:s,next:i,prev:a,select:l,selected:o}=sn(e,at);return N(()=>{const[u]=Ee.filterProps(e);return r(Ee,de({class:["v-btn-toggle",e.class]},u,{style:e.style}),{default:()=>{var d;return[(d=n.default)==null?void 0:d.call(n,{isSelected:s,next:i,prev:a,select:l,selected:o})]}})}),{next:i,prev:a,select:l}}});const on=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ee=$(!1)({name:"VDefaultsProvider",props:on(),setup(e,t){let{slots:n}=t;const{defaults:s,disabled:i,reset:a,root:l,scoped:o}=Rt(e);return Oe(s,{reset:a,root:l,scoped:o,disabled:i}),()=>{var u;return(u=n.default)==null?void 0:u.call(n)}}});const un=["x-small","small","default","large","x-large"],he=b({size:{type:[String,Number],default:"default"}},"size");function ye(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return Re(()=>{let n,s;return se(un,e.size)?n=`${t}--size-${e.size}`:e.size&&(s={width:I(e.size),height:I(e.size)}),{sizeClasses:n,sizeStyles:s}})}const cn=b({color:String,start:Boolean,end:Boolean,icon:ae,...L(),...he(),...z({tag:"i"}),...X()},"VIcon"),A=$()({name:"VIcon",props:cn(),setup(e,t){let{attrs:n,slots:s}=t;const i=K(),{themeClasses:a}=J(e),{iconData:l}=jt(v(()=>i.value||e.icon)),{sizeClasses:o}=ye(e),{textColorClasses:u,textColorStyles:d}=le(B(e,"color"));return N(()=>{var C,c;const m=(C=s.default)==null?void 0:C.call(s);return m&&(i.value=(c=Ot(m).filter(f=>f.type===At&&f.children&&typeof f.children=="string")[0])==null?void 0:c.children),r(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",a.value,o.value,u.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:I(e.size),height:I(e.size),width:I(e.size)},d.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[m]})}),{}}});function dn(e,t){const n=K(),s=j(!1);if(fe){const i=new IntersectionObserver(a=>{e==null||e(a,i),s.value=!!a.find(l=>l.isIntersecting)},t);ce(()=>{i.disconnect()}),O(n,(a,l)=>{l&&(i.unobserve(l),s.value=!1),a&&i.observe(a)},{flush:"post"})}return{intersectionRef:n,isIntersecting:s}}const fn=b({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...L(),...he(),...z({tag:"div"}),...X()},"VProgressCircular"),vn=$()({name:"VProgressCircular",props:fn(),setup(e,t){let{slots:n}=t;const s=20,i=2*Math.PI*s,a=K(),{themeClasses:l}=J(e),{sizeClasses:o,sizeStyles:u}=ye(e),{textColorClasses:d,textColorStyles:m}=le(B(e,"color")),{textColorClasses:C,textColorStyles:c}=le(B(e,"bgColor")),{intersectionRef:f,isIntersecting:S}=dn(),{resizeRef:h,contentRect:p}=It(),k=v(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),y=v(()=>Number(e.width)),w=v(()=>u.value?Number(e.size):p.value?p.value.width:Math.max(y.value,32)),T=v(()=>s/(1-y.value/w.value)*2),P=v(()=>y.value/w.value*T.value),G=v(()=>I((100-k.value)/100*i));return Gt(()=>{f.value=a.value,h.value=a.value}),N(()=>r(e.tag,{ref:a,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":S.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,o.value,d.value,e.class],style:[u.value,m.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:k.value},{default:()=>[r("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${T.value} ${T.value}`},[r("circle",{class:["v-progress-circular__underlay",C.value],style:c.value,fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":P.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),r("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":P.value,"stroke-dasharray":i,"stroke-dashoffset":G.value},null)]),n.default&&r("div",{class:"v-progress-circular__content"},[n.default({value:k.value})])]})),{}}}),it=b({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function lt(e){return{dimensionStyles:v(()=>({height:I(e.height),maxHeight:I(e.maxHeight),maxWidth:I(e.maxWidth),minHeight:I(e.minHeight),minWidth:I(e.minWidth),width:I(e.width)}))}}const Be={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},mn=b({location:String},"location");function gn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=Me();return{locationStyles:v(()=>{if(!e.location)return{};const{side:a,align:l}=qt(e.location.split(" ").length>1?e.location:`${e.location} center`,s.value);function o(d){return n?n(d):0}const u={};return a!=="center"&&(t?u[Be[a]]=`calc(100% - ${o(a)}px)`:u[a]=0),l!=="center"?t?u[Be[l]]=`calc(100% - ${o(l)}px)`:u[l]=0:(a==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[a]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[a]),u})}}const hn=b({loading:[Boolean,String]},"loader");function yn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{loaderClasses:v(()=>({[`${t}--loading`]:e.loading}))}}const bn=["static","relative","fixed","absolute","sticky"],_n=b({position:{type:String,validator:e=>bn.includes(e)}},"position");function Cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{positionClasses:v(()=>e.position?`${t}--${e.position}`:void 0)}}function Sn(e,t){const n=Mt("RouterLink"),s=v(()=>!!(e.href||e.to)),i=v(()=>(s==null?void 0:s.value)||Ie(t,"click")||Ie(e,"click"));if(typeof n=="string")return{isLink:s,isClickable:i,href:B(e,"href")};const a=e.to?n.useLink(e):void 0;return{isLink:s,isClickable:i,route:a==null?void 0:a.route,navigate:a==null?void 0:a.navigate,isActive:a&&v(()=>{var l,o;return e.exact?(l=a.isExactActive)==null?void 0:l.value:(o=a.isActive)==null?void 0:o.value}),href:v(()=>e.to?a==null?void 0:a.route.value.href:e.href)}}const pn=b({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function kn(e,t){O(()=>{var n;return(n=e.isActive)==null?void 0:n.value},n=>{e.isLink.value&&n&&t&&We(()=>{t(!0)})},{immediate:!0})}const re=Symbol("rippleStop"),wn=80;function Le(e,t){e.style.transform=t,e.style.webkitTransform=t}function oe(e){return e.constructor.name==="TouchEvent"}function rt(e){return e.constructor.name==="KeyboardEvent"}const xn=function(e,t){var C;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,i=0;if(!rt(e)){const c=t.getBoundingClientRect(),f=oe(e)?e.touches[e.touches.length-1]:e;s=f.clientX-c.left,i=f.clientY-c.top}let a=0,l=.3;(C=t._ripple)!=null&&C.circle?(l=.15,a=t.clientWidth/2,a=n.center?a:a+Math.sqrt((s-a)**2+(i-a)**2)/4):a=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const o=`${(t.clientWidth-a*2)/2}px`,u=`${(t.clientHeight-a*2)/2}px`,d=n.center?o:`${s-a}px`,m=n.center?u:`${i-a}px`;return{radius:a,scale:l,x:d,y:m,centerX:o,centerY:u}},Y={show(e,t){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=t==null?void 0:t._ripple)!=null&&f.enabled))return;const s=document.createElement("span"),i=document.createElement("span");s.appendChild(i),s.className="v-ripple__container",n.class&&(s.className+=` ${n.class}`);const{radius:a,scale:l,x:o,y:u,centerX:d,centerY:m}=xn(e,t,n),C=`${a*2}px`;i.className="v-ripple__animation",i.style.width=C,i.style.height=C,t.appendChild(s);const c=window.getComputedStyle(t);c&&c.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),Le(i,`translate(${o}, ${u}) scale3d(${l},${l},${l})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),Le(i,`translate(${d}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var a;if(!((a=e==null?void 0:e._ripple)!=null&&a.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const s=performance.now()-Number(n.dataset.activated),i=Math.max(250-s,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},i)}};function ot(e){return typeof e>"u"||!!e}function W(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[re])){if(e[re]=!0,oe(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||rt(e),n._ripple.class&&(t.class=n._ripple.class),oe(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{Y.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var s;(s=n==null?void 0:n._ripple)!=null&&s.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},wn)}else Y.show(e,n,t)}}function Ne(e){e[re]=!0}function V(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{V(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),Y.hide(t)}}function ut(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let D=!1;function ct(e){!D&&(e.keyCode===$e.enter||e.keyCode===$e.space)&&(D=!0,W(e))}function dt(e){D=!1,V(e)}function ft(e){D&&(D=!1,V(e))}function vt(e,t,n){const{value:s,modifiers:i}=t,a=ot(s);if(a||Y.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=a,e._ripple.centered=i.center,e._ripple.circle=i.circle,Wt(s)&&s.class&&(e._ripple.class=s.class),a&&!n){if(i.stop){e.addEventListener("touchstart",Ne,{passive:!0}),e.addEventListener("mousedown",Ne);return}e.addEventListener("touchstart",W,{passive:!0}),e.addEventListener("touchend",V,{passive:!0}),e.addEventListener("touchmove",ut,{passive:!0}),e.addEventListener("touchcancel",V),e.addEventListener("mousedown",W),e.addEventListener("mouseup",V),e.addEventListener("mouseleave",V),e.addEventListener("keydown",ct),e.addEventListener("keyup",dt),e.addEventListener("blur",ft),e.addEventListener("dragstart",V,{passive:!0})}else!a&&n&&mt(e)}function mt(e){e.removeEventListener("mousedown",W),e.removeEventListener("touchstart",W),e.removeEventListener("touchend",V),e.removeEventListener("touchmove",ut),e.removeEventListener("touchcancel",V),e.removeEventListener("mouseup",V),e.removeEventListener("mouseleave",V),e.removeEventListener("keydown",ct),e.removeEventListener("keyup",dt),e.removeEventListener("dragstart",V),e.removeEventListener("blur",ft)}function Vn(e,t){vt(e,t,!1)}function In(e){delete e._ripple,mt(e)}function $n(e,t){if(t.value===t.oldValue)return;const n=ot(t.oldValue);vt(e,t,n)}const Pn={mounted:Vn,unmounted:In,updated:$n},En=b({active:{type:Boolean,default:void 0},symbol:{type:null,default:at},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ae,appendIcon:ae,block:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Fe(),...L(),...qe(),...it(),...Je(),...tn(),...hn(),...mn(),..._n(),...Qe(),...pn(),...he(),...z({tag:"button"}),...X(),...tt({variant:"elevated"})},"VBtn"),te=$()({name:"VBtn",directives:{Ripple:Pn},props:En(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:n,slots:s}=t;const{themeClasses:i}=J(e),{borderClasses:a}=Ye(e),{colorClasses:l,colorStyles:o,variantClasses:u}=Zt(e),{densityClasses:d}=Xe(e),{dimensionStyles:m}=lt(e),{elevationClasses:C}=Ke(e),{loaderClasses:c}=yn(e),{locationStyles:f}=gn(e),{positionClasses:S}=Cn(e),{roundedClasses:h}=Ze(e),{sizeClasses:p,sizeStyles:k}=ye(e),y=nn(e,e.symbol,!1),w=Sn(e,n),T=v(()=>{var _;return e.active!==void 0?e.active:w.isLink.value?(_=w.isActive)==null?void 0:_.value:y==null?void 0:y.isSelected.value}),P=v(()=>(y==null?void 0:y.disabled.value)||e.disabled),G=v(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),H=v(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function g(_){var x;P.value||((x=w.navigate)==null||x.call(w,_),y==null||y.toggle())}return kn(w,y==null?void 0:y.select),N(()=>{var Se,pe;const _=w.isLink.value?"a":e.tag,x=!!(e.prependIcon||s.prepend),U=!!(e.appendIcon||s.append),M=!!(e.icon&&e.icon!==!0),Ce=(y==null?void 0:y.isSelected.value)&&(!w.isLink.value||((Se=w.isActive)==null?void 0:Se.value))||!y||((pe=w.isActive)==null?void 0:pe.value);return ie(r(_,{type:_==="a"?void 0:"button",class:["v-btn",y==null?void 0:y.selectedClass.value,{"v-btn--active":T.value,"v-btn--block":e.block,"v-btn--disabled":P.value,"v-btn--elevated":G.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},i.value,a.value,Ce?l.value:void 0,d.value,C.value,c.value,S.value,h.value,p.value,u.value,e.class],style:[Ce?o.value:void 0,m.value,f.value,k.value,e.style],disabled:P.value||void 0,href:w.href.value,onClick:g,value:H.value},{default:()=>{var ke;return[Qt(!0,"v-btn"),!e.icon&&x&&r("span",{key:"prepend",class:"v-btn__prepend"},[s.prepend?r(ee,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},s.prepend):r(A,{key:"prepend-icon",icon:e.prependIcon},null)]),r("span",{class:"v-btn__content","data-no-activator":""},[!s.default&&M?r(A,{key:"content-icon",icon:e.icon},null):r(ee,{key:"content-defaults",disabled:!M,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var we;return[((we=s.default)==null?void 0:we.call(s))??e.text]}})]),!e.icon&&U&&r("span",{key:"append",class:"v-btn__append"},[s.append?r(ee,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},s.append):r(A,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&r("span",{key:"loader",class:"v-btn__loader"},[((ke=s.loader)==null?void 0:ke.call(s))??r(vn,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[De("ripple"),!P.value&&e.ripple,null]])}),{}}});const Bn=b({fluid:{type:Boolean,default:!1},...L(),...z()},"VContainer"),Ln=$()({name:"VContainer",props:Bn(),setup(e,t){let{slots:n}=t;const{rtlClasses:s}=Me();return N(()=>r(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},s.value,e.class],style:e.style},n)),{}}}),gt=(()=>Q.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),ht=(()=>Q.reduce((e,t)=>{const n="offset"+ve(t);return e[n]={type:[String,Number],default:null},e},{}))(),yt=(()=>Q.reduce((e,t)=>{const n="order"+ve(t);return e[n]={type:[String,Number],default:null},e},{}))(),Te={col:Object.keys(gt),offset:Object.keys(ht),order:Object.keys(yt)};function Nn(e,t,n){let s=e;if(!(n==null||n===!1)){if(t){const i=t.replace(e,"");s+=`-${i}`}return e==="col"&&(s="v-"+s),e==="col"&&(n===""||n===!0)||(s+=`-${n}`),s.toLowerCase()}}const Tn=["auto","start","end","center","baseline","stretch"],zn=b({cols:{type:[Boolean,String,Number],default:!1},...gt,offset:{type:[String,Number],default:null},...ht,order:{type:[String,Number],default:null},...yt,alignSelf:{type:String,default:null,validator:e=>Tn.includes(e)},...L(),...z()},"VCol"),ne=$()({name:"VCol",props:zn(),setup(e,t){let{slots:n}=t;const s=v(()=>{const i=[];let a;for(a in Te)Te[a].forEach(o=>{const u=e[o],d=Nn(a,o,u);d&&i.push(d)});const l=i.some(o=>o.startsWith("v-col-"));return i.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),i});return()=>{var i;return me(e.tag,{class:[s.value,e.class],style:e.style},(i=n.default)==null?void 0:i.call(n))}}}),be=["start","end","center"],bt=["space-between","space-around","space-evenly"];function _e(e,t){return Q.reduce((n,s)=>{const i=e+ve(s);return n[i]=t(),n},{})}const Rn=[...be,"baseline","stretch"],_t=e=>Rn.includes(e),Ct=_e("align",()=>({type:String,default:null,validator:_t})),jn=[...be,...bt],St=e=>jn.includes(e),pt=_e("justify",()=>({type:String,default:null,validator:St})),On=[...be,...bt,"stretch"],kt=e=>On.includes(e),wt=_e("alignContent",()=>({type:String,default:null,validator:kt})),ze={align:Object.keys(Ct),justify:Object.keys(pt),alignContent:Object.keys(wt)},An={align:"align",justify:"justify",alignContent:"align-content"};function Gn(e,t,n){let s=An[e];if(n!=null){if(t){const i=t.replace(e,"");s+=`-${i}`}return s+=`-${n}`,s.toLowerCase()}}const Mn=b({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_t},...Ct,justify:{type:String,default:null,validator:St},...pt,alignContent:{type:String,default:null,validator:kt},...wt,...L(),...z()},"VRow"),Wn=$()({name:"VRow",props:Mn(),setup(e,t){let{slots:n}=t;const s=v(()=>{const i=[];let a;for(a in ze)ze[a].forEach(l=>{const o=e[l],u=Gn(a,l,o);u&&i.push(u)});return i.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),i});return()=>{var i;return me(e.tag,{class:["v-row",s.value,e.class],style:e.style},(i=n.default)==null?void 0:i.call(n))}}});function Dn(e){return{aspectStyles:v(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const xt=b({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...L(),...it()},"VResponsive"),ue=$()({name:"VResponsive",props:xt(),setup(e,t){let{slots:n}=t;const{aspectStyles:s}=Dn(e),{dimensionStyles:i}=lt(e);return N(()=>{var a;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[r("div",{class:"v-responsive__sizer",style:s.value},null),(a=n.additional)==null?void 0:a.call(n),n.default&&r("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),Hn=b({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),F=(e,t)=>{let{slots:n}=t;const{transition:s,disabled:i,...a}=e,{component:l=Dt,...o}=typeof s=="object"?s:{};return me(l,de(typeof s=="string"?{name:i?"":s}:o,a,{disabled:i}),n)};function Un(e,t){if(!fe)return;const n=t.modifiers||{},s=t.value,{handler:i,options:a}=typeof s=="object"?s:{handler:s,options:{}},l=new IntersectionObserver(function(){var C;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const d=(C=e._observe)==null?void 0:C[t.instance.$.uid];if(!d)return;const m=o.some(c=>c.isIntersecting);i&&(!n.quiet||d.init)&&(!n.once||m||d.init)&&i(m,o,u),m&&n.once?Vt(e,t):d.init=!0},a);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:l},l.observe(e)}function Vt(e,t){var s;const n=(s=e._observe)==null?void 0:s[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Fn={mounted:Un,unmounted:Vt},Yn=Fn,qn=b({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...xt(),...L(),...Hn()},"VImg"),Xn=$()({name:"VImg",directives:{intersect:Yn},props:qn(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:s}=t;const i=j(""),a=K(),l=j(e.eager?"loading":"idle"),o=j(),u=j(),d=v(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=v(()=>d.value.aspect||o.value/u.value||0);O(()=>e.src,()=>{C(l.value!=="idle")}),O(m,(g,_)=>{!g&&_&&a.value&&p(a.value)}),Ht(()=>C());function C(g){if(!(e.eager&&g)&&!(fe&&!g&&!e.eager)){if(l.value="loading",d.value.lazySrc){const _=new Image;_.src=d.value.lazySrc,p(_,null)}d.value.src&&We(()=>{var _,x;if(n("loadstart",((_=a.value)==null?void 0:_.currentSrc)||d.value.src),(x=a.value)!=null&&x.complete){if(a.value.naturalWidth||f(),l.value==="error")return;m.value||p(a.value,null),c()}else m.value||p(a.value),S()})}}function c(){var g;S(),l.value="loaded",n("load",((g=a.value)==null?void 0:g.currentSrc)||d.value.src)}function f(){var g;l.value="error",n("error",((g=a.value)==null?void 0:g.currentSrc)||d.value.src)}function S(){const g=a.value;g&&(i.value=g.currentSrc||g.src)}let h=-1;function p(g){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const x=()=>{clearTimeout(h);const{naturalHeight:U,naturalWidth:M}=g;U||M?(o.value=M,u.value=U):!g.complete&&l.value==="loading"&&_!=null?h=window.setTimeout(x,_):(g.currentSrc.endsWith(".svg")||g.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,u.value=1)};x()}const k=v(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),y=()=>{var x;if(!d.value.src||l.value==="idle")return null;const g=r("img",{class:["v-img__img",k.value],src:d.value.src,srcset:d.value.srcset,alt:e.alt,sizes:e.sizes,ref:a,onLoad:c,onError:f},null),_=(x=s.sources)==null?void 0:x.call(s);return r(F,{transition:e.transition,appear:!0},{default:()=>[ie(_?r("picture",{class:"v-img__picture"},[_,g]):g,[[Ut,l.value==="loaded"]])]})},w=()=>r(F,{transition:e.transition},{default:()=>[d.value.lazySrc&&l.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",k.value],src:d.value.lazySrc,alt:e.alt},null)]}),T=()=>s.placeholder?r(F,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!s.error)&&r("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,P=()=>s.error?r(F,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&r("div",{class:"v-img__error"},[s.error()])]}):null,G=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,H=j(!1);{const g=O(m,_=>{_&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{H.value=!0})}),g())})}return N(()=>{const[g]=ue.filterProps(e);return ie(r(ue,de({class:["v-img",{"v-img--booting":!H.value},e.class],style:e.style},g,{aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(je,null,[r(y,null,null),r(w,null,null),r(G,null,null),r(T,null,null),r(P,null,null)]),default:s.default}),[[De("intersect"),{handler:C,options:e.options},null,{once:!0}]])}),{currentSrc:i,image:a,state:l,naturalWidth:o,naturalHeight:u}}}),Jn=ge("div",{class:"text-body-2 font-weight-light mb-n1"},"Welcome to",-1),Kn=ge("h1",{class:"text-h2 font-weight-bold"},"Vuetify",-1),Qn=ge("div",{class:"py-14"},null,-1),Zn={__name:"HelloWorld",setup(e){return(t,n)=>(He(),Ue(Ln,{class:"fill-height"},{default:E(()=>[r(ue,{class:"align-center text-center fill-height"},{default:E(()=>[r(Xn,{height:"300",src:Xt}),Jn,Kn,Qn,r(Wn,{class:"d-flex align-center justify-center"},{default:E(()=>[r(ne,{cols:"auto"},{default:E(()=>[r(te,{href:"https://vuetifyjs.com/components/all/","min-width":"164",rel:"noopener noreferrer",target:"_blank",variant:"text"},{default:E(()=>[r(A,{icon:"mdi-view-dashboard",size:"large",start:""}),Z(" Components ")]),_:1})]),_:1}),r(ne,{cols:"auto"},{default:E(()=>[r(te,{color:"primary",href:"https://vuetifyjs.com/introduction/why-vuetify/#feature-guides","min-width":"228",rel:"noopener noreferrer",size:"x-large",target:"_blank",variant:"flat"},{default:E(()=>[r(A,{icon:"mdi-speedometer",size:"large",start:""}),Z(" Get Started ")]),_:1})]),_:1}),r(ne,{cols:"auto"},{default:E(()=>[r(te,{href:"https://community.vuetifyjs.com/","min-width":"164",rel:"noopener noreferrer",target:"_blank",variant:"text"},{default:E(()=>[r(A,{icon:"mdi-account-group",size:"large",start:""}),Z(" Community ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},ns={__name:"Home",setup(e){return(t,n)=>(He(),Ue(Zn))}};export{ns as default};
