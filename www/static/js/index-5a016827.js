import{b as Y,d as j,N as G,n as y,a8 as a,O as C,r,o as n,E as c,w as t,f as s,u as J,c as g,q as f,F as E,W as S,p as F,t as h,co as Q}from"./index-67a30bc6.js";import{g as U}from"./plugin-463a9df8.js";import{i as X}from"./icon-99a136c4.js";import{u as Z}from"./useKeyboard.hook-a6cfdb90.js";import{u as ee,a as te,H as l}from"./chartEditStore-8254eca3.js";import{u as v,C as i}from"./chartLayoutStore-340d4435.js";const oe=j({__name:"index",setup(ne){const{LayersIcon:B,BarChartIcon:A,PrismIcon:D,HomeIcon:b,ArrowBackIcon:H,ArrowForwardIcon:I}=X.ionicons5,{setItem:L}=v(),{getLayers:w,getCharts:x,getDetails:R}=G(v()),_=ee(),d=te(),K=y([{key:i.CHARTS,select:x,title:"\u56FE\u8868\u7EC4\u4EF6",icon:a(A)},{key:i.LAYERS,select:w,title:"\u56FE\u5C42\u63A7\u5236",icon:a(B)},{key:i.DETAILS,select:R,title:"\u8BE6\u60C5\u8BBE\u7F6E",icon:a(D)}]),T=C(()=>d.getBackStack.length>1),z=C(()=>d.getForwardStack.length>0),N=y([{key:l.BACK_STACK,select:T,title:"\u540E\u9000",icon:a(H)},{key:l.FORWARD_STACK,select:z,title:"\u524D\u8FDB",icon:a(I)}]),O=o=>o.key===i.DETAILS?o.select?"":"primary":o.select?"primary":"",W=o=>{L(o.key,!o.select)},$=o=>{switch(o.key){case l.BACK_STACK:_.setBack();break;case l.FORWARD_STACK:_.setForward();break}},q=()=>{U({message:"\u8FD4\u56DE\u5C06\u4E0D\u4F1A\u4FDD\u5B58\u4EFB\u4F55\u64CD\u4F5C",isMaskClosable:!0,onPositiveCallback:()=>{Q(),Z()}})};return(o,p)=>{const P=r("n-icon"),u=r("n-button"),k=r("n-tooltip"),V=r("n-divider"),m=r("n-space");return n(),c(m,{class:"header-left-btn",size:25},{default:t(()=>[s(u,{size:"small",quaternary:"",onClick:p[0]||(p[0]=e=>q())},{icon:t(()=>[s(P,{depth:3},{default:t(()=>[s(J(b))]),_:1})]),_:1}),s(m,null,{default:t(()=>[(n(!0),g(E,null,f(K,e=>(n(),c(k,{key:e.key,placement:"bottom",trigger:"hover"},{trigger:t(()=>[s(u,{size:"small",ghost:"",type:O(e),onClick:M=>W(e)},{default:t(()=>[(n(),c(S(e.icon)))]),_:2},1032,["type","onClick"])]),default:t(()=>[F("span",null,h(e.title),1)]),_:2},1024))),128)),s(V,{vertical:""}),(n(!0),g(E,null,f(N,e=>(n(),c(k,{key:e.key,placement:"bottom",trigger:"hover"},{trigger:t(()=>[s(u,{size:"small",ghost:"",type:"primary",disabled:!e.select,onClick:M=>$(e)},{default:t(()=>[(n(),c(S(e.icon)))]),_:2},1032,["disabled","onClick"])]),default:t(()=>[F("span",null,h(e.title),1)]),_:2},1024))),128))]),_:1})]),_:1})}}});var ue=Y(oe,[["__scopeId","data-v-7e9c588f"]]);export{ue as default};
