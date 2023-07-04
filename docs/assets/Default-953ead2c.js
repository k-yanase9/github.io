import{p as P,i as N,c,r as se,a as z,g as le,s as Z,o as D,b as ue,d as L,f as ie,e as re,h as F,j as _,k as ce,l as K,m as X,w as U,n as ve,q as pe,u as de}from"./index-68436a1f.js";import{u as me,m as W,a as fe,b as Y}from"./tag-daf5d1d6.js";const B=Symbol.for("vuetify:layout"),ye=Symbol.for("vuetify:layout-item"),q=1e3,ge=P({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");function he(){const e=N(B);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}const be=(e,v,n,s)=>{let l={top:0,left:0,right:0,bottom:0};const u=[{id:"",layer:{...l}}];for(const i of e){const m=v.get(i),y=n.get(i),b=s.get(i);if(!m||!y||!b)continue;const g={...l,[m.value]:parseInt(l[m.value],10)+(b.value?parseInt(y.value,10):0)};u.push({id:i,layer:g}),l=g}return u};function _e(e){const v=N(B,null),n=c(()=>v?v.rootZIndex.value-100:q),s=se([]),l=z(new Map),u=z(new Map),i=z(new Map),m=z(new Map),y=z(new Map),{resizeRef:b,contentRect:g}=me(),G=c(()=>{const o=new Map,p=e.overlaps??[];for(const t of p.filter(r=>r.includes(":"))){const[r,a]=t.split(":");if(!s.value.includes(r)||!s.value.includes(a))continue;const f=l.get(r),h=l.get(a),S=u.get(r),V=u.get(a);!f||!h||!S||!V||(o.set(a,{position:f.value,amount:parseInt(S.value,10)}),o.set(r,{position:h.value,amount:-parseInt(V.value,10)}))}return o}),x=c(()=>{const o=[...new Set([...i.values()].map(t=>t.value))].sort((t,r)=>t-r),p=[];for(const t of o){const r=s.value.filter(a=>{var f;return((f=i.get(a))==null?void 0:f.value)===t});p.push(...r)}return be(p,l,u,m)}),k=c(()=>!Array.from(y.values()).some(o=>o.value)),w=c(()=>x.value[x.value.length-1].layer),J=c(()=>({"--v-layout-left":L(w.value.left),"--v-layout-right":L(w.value.right),"--v-layout-top":L(w.value.top),"--v-layout-bottom":L(w.value.bottom),...k.value?void 0:{transition:"none"}})),I=c(()=>x.value.slice(1).map((o,p)=>{let{id:t}=o;const{layer:r}=x.value[p],a=u.get(t),f=l.get(t);return{id:t,...r,size:Number(a.value),position:f.value}})),O=o=>I.value.find(p=>p.id===o),M=le("createLayout"),T=Z(!1);D(()=>{T.value=!0}),ue(B,{register:(o,p)=>{let{id:t,order:r,position:a,layoutSize:f,elementSize:h,active:S,disableTransitions:V,absolute:te}=p;i.set(t,r),l.set(t,a),u.set(t,f),m.set(t,S),V&&y.set(t,V);const H=ie(ye,M==null?void 0:M.vnode).indexOf(o);H>-1?s.value.splice(H,0,t):s.value.push(t);const E=c(()=>I.value.findIndex($=>$.id===t)),R=c(()=>n.value+x.value.length*2-E.value*2),oe=c(()=>{const $=a.value==="left"||a.value==="right",C=a.value==="right",ae=a.value==="bottom",j={[a.value]:0,zIndex:R.value,transform:`translate${$?"X":"Y"}(${(S.value?0:-110)*(C||ae?-1:1)}%)`,position:te.value||n.value!==q?"absolute":"fixed",...k.value?void 0:{transition:"none"}};if(!T.value)return j;const d=I.value[E.value];if(!d)throw new Error(`[Vuetify] Could not find layout item "${t}"`);const A=G.value.get(t);return A&&(d[A.position]+=A.amount),{...j,height:$?`calc(100% - ${d.top}px - ${d.bottom}px)`:h.value?`${h.value}px`:void 0,left:C?void 0:`${d.left}px`,right:C?`${d.right}px`:void 0,top:a.value!=="bottom"?`${d.top}px`:void 0,bottom:a.value!=="top"?`${d.bottom}px`:void 0,width:$?h.value?`${h.value}px`:void 0:`calc(100% - ${d.left}px - ${d.right}px)`}}),ne=c(()=>({zIndex:R.value-1}));return{layoutItemStyles:oe,layoutItemScrimStyles:ne,zIndex:R}},unregister:o=>{i.delete(o),l.delete(o),u.delete(o),m.delete(o),y.delete(o),s.value=s.value.filter(p=>p!==o)},mainRect:w,mainStyles:J,getLayoutItem:O,items:I,layoutRect:g,rootZIndex:n});const Q=c(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ee=c(()=>({zIndex:n.value,position:v?"relative":void 0,overflow:v?"hidden":void 0}));return{layoutClasses:Q,layoutStyles:ee,getLayoutItem:O,items:I,layoutRect:g,layoutRef:b}}function xe(){const e=Z(!1);return D(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:c(()=>e.value?void 0:{transition:"none !important"}),isBooted:re(e)}}const we=P({scrollable:Boolean,...W(),...fe({tag:"main"})},"VMain"),Ie=F()({name:"VMain",props:we(),setup(e,v){let{slots:n}=v;const{mainStyles:s}=he(),{ssrBootStyles:l}=xe();return Y(()=>_(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[s.value,l.value,e.style]},{default:()=>{var u,i;return[e.scrollable?_("div",{class:"v-main__scroller"},[(u=n.default)==null?void 0:u.call(n)]):(i=n.default)==null?void 0:i.call(n)]}})),{}}}),Se={__name:"View",setup(e){return(v,n)=>{const s=ce("router-view");return K(),X(Ie,null,{default:U(()=>[_(s)]),_:1})}}};const Ve=P({...W(),...ge({fullHeight:!0}),...ve()},"VApp"),$e=F()({name:"VApp",props:Ve(),setup(e,v){let{slots:n}=v;const s=pe(e),{layoutClasses:l,layoutStyles:u,getLayoutItem:i,items:m,layoutRef:y}=_e(e),{rtlClasses:b}=de();return Y(()=>{var g;return _("div",{ref:y,class:["v-application",s.themeClasses.value,l.value,b.value,e.class],style:[u.value,e.style]},[_("div",{class:"v-application__wrap"},[(g=n.default)==null?void 0:g.call(n)])])}),{getLayoutItem:i,items:m,theme:s}}}),Re={__name:"Default",setup(e){return(v,n)=>(K(),X($e,null,{default:U(()=>[_(Se)]),_:1}))}};export{Re as default};
