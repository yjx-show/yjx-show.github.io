import{y as f,z as a,A as m,B as r,C as g,D as w,h as k,g as l,P as h,E as y,G as O,H as P,I as S,J as v,K as b}from"./index.2e944e3f.js";const[C,N]=f("notify"),D=a({},m,{type:r("danger"),color:String,message:g,position:r("top"),className:w,background:String,lockScroll:Boolean});var c=k({name:C,props:D,emits:["update:show"],setup(e,{emit:n,slots:s}){const d=p=>n("update:show",p);return()=>l(h,{show:e.show,class:[N([e.type]),e.className],style:{color:e.color,background:e.background},overlay:!1,position:e.position,duration:.2,lockScroll:e.lockScroll,"onUpdate:show":d},{default:()=>[s.default?s.default():e.message]})}});let i,t;const x=e=>P(e)?e:{message:e};function B(){({instance:t}=S({setup(){const{state:e,toggle:n}=v();return()=>l(c,b(e,{"onUpdate:show":n}),null)}}))}function o(e){if(!!y)return t||B(),e=a({},o.currentOptions,x(e)),t.open(e),clearTimeout(i),e.duration>0&&(i=window.setTimeout(o.clear,e.duration)),t}const u=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:"",lockScroll:!1,background:void 0});o.clear=()=>{t&&t.toggle(!1)};o.currentOptions=u();o.setDefaultOptions=e=>{a(o.currentOptions,e)};o.resetDefaultOptions=()=>{o.currentOptions=u()};o.Component=O(c);o.install=e=>{e.use(o.Component),e.config.globalProperties.$notify=o};export{o as N};
