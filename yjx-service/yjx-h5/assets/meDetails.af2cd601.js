import{u as N,a as v,r as w,x as g,b as x,c as C,g as t,d as e,w as o,F as V,N as c,W as y,V as d,X as U,Y as b,P as B,m as F,Z as I,v as P,a0 as A}from"./index.ea97895c.js";/* empty css              */const D=F("div",{style:{color:"darkgrey"}},"\u597D\u540D\u5B57\u53EF\u4EE5\u8BA9\u4F60\u7684\u670B\u53CB\u66F4\u5BB9\u6613\u8BB0\u4F4F\u4F60",-1),$={__name:"meDetails",setup(E){const m=N(),p=()=>{m.go(-1)};let r=v();const l=r.state.user,a=w({show:!1,nickName:l.userInfo.nickName}),f=n=>{I(n).then(s=>{let i=s.data.url;r.dispatch("user/setAvatar",i)})},h=()=>!0,k=()=>{a.show=!0},_=()=>{if($function.hasEmoji(a.nickName)){P.fail("\u8BF7\u52FF\u8F93\u5165\u8868\u60C5\u5305");return}A(a.nickName).then(n=>{r.dispatch("user/setNickName",a.nickName),a.show=!1})};return(n,s)=>{const i=g("van-image");return x(),C(V,null,[t(e(c),{"left-text":"\u8FD4\u56DE","left-arrow":"",onClickLeft:p}),t(e(d),{center:"","is-link":"",title:"\u5934\u50CF"},{default:o(()=>[t(e(y),{class:"uploader","before-read":h,"after-read":f},{default:o(()=>[t(i,{width:"70",height:"70",radius:"8px",src:e(l).userInfo.avatar},null,8,["src"])]),_:1})]),_:1}),t(e(d),{center:"","is-link":"",title:"\u540D\u5B57",onClick:k,value:e(l).userInfo.nickName},null,8,["value"]),t(e(B),{show:a.show,"onUpdate:show":s[1]||(s[1]=u=>a.show=u),position:"top",style:{height:"30%"}},{default:o(()=>[t(e(c),{title:"\u4FEE\u6539\u540D\u5B57","right-text":"\u4FDD\u5B58",onClickRight:_}),t(e(U),{inset:""},{default:o(()=>[t(e(b),{modelValue:a.nickName,"onUpdate:modelValue":s[0]||(s[0]=u=>a.nickName=u),label:""},null,8,["modelValue"]),D]),_:1})]),_:1},8,["show"])],64)}}};export{$ as default};
