var ge=(i,h,y)=>new Promise((C,o)=>{var d=r=>{try{g(y.next(r))}catch(v){o(v)}},a=r=>{try{g(y.throw(r))}catch(v){o(v)}},g=r=>r.done?C(r.value):Promise.resolve(r.value).then(d,a);g((y=y.apply(i,h)).next())});/* empty css                                                                   */import{S as Y,a as z}from"./SettingItemBox-6900e67c.js";import{av as b,cP as ue,aw as W,b as Q,d as G,N as P,j as S,O as ne,as as Ve,cQ as ie,L as Fe,r as n,o as _,c as $,u,E as A,w as t,f as e,p,F as j,v as Je,x as We,g as s,ar as pe,at as Ye,cL as Qe,cJ as Xe,au as de,aG as Ke,a3 as le,a4 as se,q as Z,t as O,$ as N,Q as re,n as Ze,cR as I,cb as ye,l as be,ax as K,cS as et,ay as X,cT as tt,aY as ut,cn as nt,aU as at}from"./index-3da848c6.js";import{u as V}from"./useTargetData.hook-3dc23801.js";import{b as Ee}from"./chartEditStore-87bc983c.js";import{i as ee}from"./icon-42e1d81a.js";import{M as ce}from"./EditorWorker-b3d42f33.js";import"./editorWorker-a0599278.js";import{g as ot}from"./plugin-3ade9cd9.js";import{c as Be}from"./http-5398a097.js";import{F as Ce}from"./fileTypeEnum-2ae15dd8.js";var oe=(i=>(i[i.NULL=0]="NULL",i[i.SUCCESS=1]="SUCCESS",i[i.FAILURE=2]="FAILURE",i))(oe||{}),_e=(i=>(i.FILTER="\u6570\u636E\u8FC7\u6EE4",i.MAPPING="\u6570\u636E\u6620\u5C04",i.CONTENT="\u6570\u636E\u5185\u5BB9",i))(_e||{}),ve=(i=>(i.STATIC="\u9759\u6001\u6570\u636E",i.AJAX="\u52A8\u6001\u8BF7\u6C42",i))(ve||{});const lt=[{label:b.GET,value:b.GET,style:{color:"greenyellow",fontWeight:"bold"}},{label:b.POST,value:b.POST,style:{color:"skyblue",fontWeight:"bold"}},{label:b.PUT,value:b.PUT,style:{color:"goldenrod",fontWeight:"bold"}},{label:b.PATCH,value:b.PATCH,style:{color:"violet",fontWeight:"bold"}},{label:b.DELETE,value:b.DELETE,disabled:!0,style:{fontWeight:"bold"}}],De=[{label:ue[W.SECOND],value:W.SECOND},{label:ue[W.MINUTE],value:W.MINUTE},{label:ue[W.HOUR],value:W.HOUR},{label:ue[W.DAY],value:W.DAY}];const he=i=>(Je("data-v-5c2be2f4"),i=i(),We(),i),st=he(()=>p("p",null,[p("span",{class:"func-keyword"},"function"),s("\xA0\xA0filter(data, res)\xA0\xA0{")],-1)),rt={class:"go-ml-4"},it=he(()=>p("p",null,"}",-1)),dt=s(" \u7F16\u8F91 "),ct=s(" \u5220\u9664 "),_t=s(" \u65B0\u589E\u8FC7\u6EE4\u5668 "),pt=s("\u8FC7\u6EE4\u5668\u51FD\u6570\u7F16\u8F91\u5668"),mt=he(()=>p("span",{class:"func-keyword"},"function",-1)),gt=s("\xA0\xA0filter(data, res)\xA0\xA0{ "),vt=s("}"),ft={class:"editor-data-show"},Ft=s("\u9ED8\u8BA4\u8FC7\u6EE4\u6570\u636E(data)\uFF1A"),ht={class:"editor-data-show"},Et=s("\u63A5\u53E3\u8FD4\u56DE\u6570\u636E(res)\uFF1A"),Ct={class:"editor-data-show"},yt=s("\u8FC7\u6EE4\u5668\u7ED3\u679C\uFF1A"),bt={class:"go-flex-items-center"},Bt=s(" \u89C4\u5219 "),Dt=s("\u8FC7\u6EE4\u5668\u9ED8\u8BA4\u5904\u7406\u63A5\u53E3\u8FD4\u56DE\u503C\u7684\u300Cdata\u300D\u5B57\u6BB5"),xt=s("\u53D6\u6D88"),At=s("\u4FDD\u5B58"),wt=G({__name:"index",setup(i){const{DocumentTextIcon:h}=ee.ionicons5,{FilterIcon:y,FilterEditIcon:C}=ee.carbon,{targetData:o,chartEditStore:d}=V();P(o.value.request),P(d.getRequestGlobalConfig);const a=S(!1),g=S(o.value.filter||"return data"),r=S(!1),v=S(""),F=()=>ge(this,null,function*(){try{const B=yield Be(pe(o.value.request),pe(d.getRequestGlobalConfig));if(B){v.value=B;return}window.$message.warning("\u6570\u636E\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\u53C2\u6570\uFF01")}catch(B){window.$message.warning("\u6570\u636E\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\u53C2\u6570\uFF01")}}),f=ne(()=>{try{const B=new Function("data","res",g.value),T=Ve(v.value),m=B(T==null?void 0:T.data,T);return r.value=!1,ie(m)}catch(B){return r.value=!0,"\u8FC7\u6EE4\u51FD\u6570\u9519\u8BEF"}}),k=()=>{a.value=!0},E=()=>{ot({message:"\u662F\u5426\u5220\u9664\u8FC7\u6EE4\u5668",onPositiveCallback:()=>{o.value.filter=void 0}})},x=()=>{a.value=!1},w=()=>{if(r.value){window.$message.error("\u8FC7\u6EE4\u51FD\u6570\u9519\u8BEF\uFF0C\u65E0\u6CD5\u8FDB\u884C\u4FDD\u5B58");return}o.value.filter=g.value,x()};return Fe(()=>a.value,B=>{B&&F()}),(B,T)=>{const m=n("n-code"),c=n("n-icon"),l=n("n-button"),D=n("n-space"),U=n("n-card"),L=n("n-text"),q=n("n-tag"),J=n("n-divider"),te=n("n-scrollbar"),ae=n("n-modal");return _(),$(j,null,[u(o).filter?(_(),A(U,{key:0},{footer:t(()=>[e(D,{justify:"end"},{default:t(()=>[e(l,{type:"primary",tertiary:"",size:"small",onClick:k},{icon:t(()=>[e(c,null,{default:t(()=>[e(u(C))]),_:1})]),default:t(()=>[dt]),_:1}),e(l,{tertiary:"",size:"small",onClick:E},{default:t(()=>[ct]),_:1})]),_:1})]),default:t(()=>[st,p("div",rt,[e(m,{code:u(o).filter,language:"typescript"},null,8,["code"])]),it]),_:1})):(_(),A(l,{key:1,class:"go-ml-3",onClick:k},{icon:t(()=>[e(c,null,{default:t(()=>[e(u(y))]),_:1})]),default:t(()=>[_t]),_:1})),e(ae,{class:"go-chart-data-monaco-editor",show:a.value,"onUpdate:show":T[1]||(T[1]=H=>a.value=H),"mask-closable":!1},{default:t(()=>[e(U,{bordered:!1,role:"dialog",size:"small","aria-modal":"true",style:{width:"1000px",height:"600px"}},{header:t(()=>[e(D,null,{default:t(()=>[e(L,null,{default:t(()=>[pt]),_:1})]),_:1})]),"header-extra":t(()=>[]),action:t(()=>[e(D,{justify:"space-between"},{default:t(()=>[p("div",bt,[e(q,{bordered:!1,type:"primary"},{icon:t(()=>[e(c,{component:u(h)},null,8,["component"])]),default:t(()=>[Bt]),_:1}),e(L,{class:"go-ml-2",depth:"2"},{default:t(()=>[Dt]),_:1})]),e(D,null,{default:t(()=>[e(l,{size:"medium",onClick:x},{default:t(()=>[xt]),_:1}),e(l,{size:"medium",type:"primary",onClick:w},{default:t(()=>[At]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(D,{size:"small",vertical:""},{default:t(()=>[e(D,{justify:"space-between"},{default:t(()=>[p("div",null,[e(D,{vertical:""},{default:t(()=>[e(q,{type:"info"},{default:t(()=>[mt,gt]),_:1}),e(u(ce),{modelValue:g.value,"onUpdate:modelValue":T[0]||(T[0]=H=>g.value=H),width:"460px",height:"380px",language:"javascript"},null,8,["modelValue"]),e(q,{type:"info"},{default:t(()=>[vt]),_:1})]),_:1})]),e(J,{vertical:"",style:{height:"480px"}}),e(te,{style:{"max-height":"480px"}},{default:t(()=>[e(D,{size:15,vertical:""},{default:t(()=>[p("div",ft,[e(D,null,{default:t(()=>{var H;return[e(L,{depth:"3"},{default:t(()=>[Ft]),_:1}),e(m,{code:u(ie)((H=v.value)==null?void 0:H.data)||"\u6682\u65E0",language:"json","word-wrap":!0},null,8,["code"])]}),_:1})]),p("div",ht,[e(D,null,{default:t(()=>[e(L,{depth:"3"},{default:t(()=>[Et]),_:1}),e(m,{code:u(ie)(v.value)||"\u6682\u65E0",language:"json","word-wrap":!0},null,8,["code"])]),_:1})]),p("div",Ct,[e(D,null,{default:t(()=>[e(L,{depth:"3"},{default:t(()=>[yt]),_:1}),e(m,{code:u(f)||"\u6682\u65E0",language:"json","word-wrap":!0},null,8,["code"])]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])],64)}}});var kt=Q(wt,[["__scopeId","data-v-5c2be2f4"]]);const Tt=i=>{const h=S();return{uploadFileListRef:h,beforeUpload:({file:d})=>{h.value=[];const a=d.file.type;return a!==Ce.JSON&&a!==Ce.TXT?(window.$message.warning("\u4EC5\u652F\u6301\u4E0A\u4F20 \u3010JSON\u3011 \u683C\u5F0F\u6587\u4EF6\uFF0C\u8BF7\u91CD\u65B0\u4E0A\u4F20\uFF01"),!1):!0},customRequest:d=>{const{file:a}=d;Ye(()=>{a.file?Qe(a.file).then(g=>{i.value.option.dataset=JSON.parse(g)}):window.$message.error("\u5BFC\u5165\u6570\u636E\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u6216\u8054\u7CFB\u7BA1\u7406\u5458\uFF01")})},download:()=>{try{window.$message.success("\u4E0B\u8F7D\u4E2D\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85..."),Xe(JSON.stringify(i.value.option.dataset),void 0,"json")}catch(d){window.$message.error("\u4E0B\u8F7D\u5931\u8D25\uFF0C\u6570\u636E\u9519\u8BEF\uFF01")}}}};const $t=s("\u65E0"),qt=s("\u8FC7\u6EE4\u5668\u9ED8\u8BA4\u5904\u7406\u63A5\u53E3\u8FD4\u56DE\u503C\u7684\u300Cdata\u300D\u5B57\u6BB5"),St=s(" \u5BFC\u5165\uFF08json / txt\uFF09 "),Ut=s(" \u4E0B\u8F7D "),Rt=s("\u70B9\u51FB\u3010\u4E0B\u8F7D\u3011\u67E5\u770B\u5B8C\u6574\u6570\u636E"),It=G({__name:"index",props:{show:{type:Boolean,required:!1},ajax:{type:Boolean,required:!0}},setup(i){const{targetData:h}=V(),y=["\u5B57\u6BB5","\u6620\u5C04","\u72B6\u6001"],{HelpOutlineIcon:C}=ee.ionicons5,{DocumentAddIcon:o,DocumentDownloadIcon:d}=ee.carbon,a=S(),g=S(),r=S(),v=S(!1),{uploadFileListRef:F,customRequest:f,beforeUpload:k,download:E}=Tt(h),x=ne(()=>h.value.request.requestDataType===de.AJAX),w=ne(()=>h.value.chartConfig.chartFrame===Ee.ECHARTS),B=m=>{let c=oe.SUCCESS;for(let l=0;l<a.value.length;l++)if(a.value[l][m]===void 0)return c=oe.FAILURE,c;return oe.SUCCESS},T=()=>{try{return g.value.map((m,c)=>c===0?{field:"\u901A\u7528\u6807\u8BC6",mapping:m,result:oe.NULL}:{field:`\u6570\u636E\u9879-${c}`,mapping:m,result:B(m)})}catch(m){return[]}};return Fe(()=>{var m,c;return(c=(m=h.value)==null?void 0:m.option)==null?void 0:c.dataset},m=>{var c,l;m&&((l=(c=h==null?void 0:h.value)==null?void 0:c.chartConfig)==null?void 0:l.chartFrame)===Ee.ECHARTS?(a.value=m,w.value&&(g.value=m.dimensions,r.value=T())):m!=null?(r.value=null,a.value=m):(v.value=!0,a.value="\u6B64\u7EC4\u4EF6\u65E0\u6570\u636E\u6E90"),Ke(m)&&(r.value=null)},{immediate:!0}),(m,c)=>{const l=n("n-badge"),D=n("n-text"),U=n("n-space"),L=n("n-table"),q=n("n-timeline-item"),J=n("n-icon"),te=n("n-button"),ae=n("n-upload"),H=n("n-tooltip"),me=n("n-code"),ze=n("n-card"),je=n("n-timeline");return _(),A(je,{class:"go-chart-configurations-timeline"},{default:t(()=>[le(e(q,{type:"info",title:u(_e).MAPPING},{default:t(()=>[e(L,{striped:""},{default:t(()=>[p("thead",null,[p("tr",null,[(_(),$(j,null,Z(y,M=>p("th",{key:M},O(M),1)),64))])]),p("tbody",null,[(_(!0),$(j,null,Z(r.value,(M,Pe)=>(_(),$("tr",{key:Pe},[p("td",null,O(M.field),1),p("td",null,O(M.mapping),1),p("td",null,[M.result===0?(_(),A(U,{key:0},{default:t(()=>[e(l,{dot:"",type:"success"}),e(D,null,{default:t(()=>[$t]),_:1})]),_:1})):(_(),A(U,{key:1},{default:t(()=>[e(l,{dot:"",type:M.result===1?"success":"error"},null,8,["type"]),e(D,null,{default:t(()=>[s("\u5339\u914D"+O(M.result===1?"\u6210\u529F":"\u5931\u8D25"),1)]),_:2},1024)]),_:2},1024))])]))),128))])]),_:1})]),_:1},8,["title"]),[[se,u(w)&&r.value]]),le(e(q,{color:"#97846c",title:u(_e).FILTER},{default:t(()=>[e(U,{size:18,vertical:""},{default:t(()=>[e(D,{depth:"3"},{default:t(()=>[qt]),_:1}),e(u(kt))]),_:1})]),_:1},8,["title"]),[[se,u(x)]]),e(q,{type:"success",title:u(_e).CONTENT},{default:t(()=>[e(U,{vertical:""},{default:t(()=>[e(U,{class:"source-btn-box"},{default:t(()=>[e(ae,{"file-list":u(F),"onUpdate:file-list":c[0]||(c[0]=M=>N(F)?F.value=M:null),"show-file-list":!1,customRequest:u(f),onBeforeUpload:u(k)},{default:t(()=>[e(U,null,{default:t(()=>[i.ajax?re("",!0):(_(),A(te,{key:0,class:"sourceBtn-item",disabled:v.value},{icon:t(()=>[e(J,null,{default:t(()=>[e(u(o))]),_:1})]),default:t(()=>[St]),_:1},8,["disabled"]))]),_:1})]),_:1},8,["file-list","customRequest","onBeforeUpload"]),p("div",null,[e(te,{class:"sourceBtn-item",disabled:v.value,onClick:u(E)},{icon:t(()=>[e(J,null,{default:t(()=>[e(u(d))]),_:1})]),default:t(()=>[Ut]),_:1},8,["disabled","onClick"]),e(H,{trigger:"hover"},{trigger:t(()=>[e(J,{class:"go-ml-1",size:"21",depth:3},{default:t(()=>[e(u(C))]),_:1})]),default:t(()=>[e(D,{depth:"3"},{default:t(()=>[Rt]),_:1})]),_:1})])]),_:1}),e(ze,{size:"small"},{default:t(()=>[e(me,{code:u(ie)(a.value),language:"json"},null,8,["code"])]),_:1})]),_:1})]),_:1},8,["title"])]),_:1})}}});var xe=Q(It,[["__scopeId","data-v-3bd92e38"]]);const Ot={class:"go-chart-configurations-data-static"},Lt=G({__name:"index",setup(i){return(h,y)=>(_(),$("div",Ot,[e(u(xe),{show:!1,ajax:!1})]))}});var Nt=Q(Lt,[["__scopeId","data-v-1a6b01aa"]]);const Gt=p("thead",null,[p("tr",null,[p("th"),p("th",null,"Key"),p("th",null,"Value"),p("th",null,"\u64CD\u4F5C"),p("th",null,"\u7ED3\u679C")])],-1),Ht={style:{width:"80px"}},Mt=s("+"),zt=s(" - "),jt=s(" \u683C\u5F0F\u9519\u8BEF "),Pt=s(" \u683C\u5F0F\u901A\u8FC7 "),fe=G({__name:"index",props:{target:{type:Object,required:!0,default:()=>{}},editDisabled:{type:Boolean,required:!1,default:!1}},emits:["update"],setup(i,{emit:h}){const y=i;S(!1);const C={key:"",value:"",error:!1},o=Ze({content:[]}),d=()=>{let r=0;if(o.content.forEach(v=>{v.key!==""&&v.value==""||v.key===""&&v.value!==""?v.error=!0:(r++,v.error=!1)}),r==o.content.length){const v={};o.content.forEach(F=>{F.key&&(v[F.key]=F.value)}),h("update",v)}},a=r=>{o.content.splice(r+1,0,{key:"",value:"",error:!1})},g=r=>{o.content.length!==1&&o.content.splice(r,1),d()};return Fe(()=>y.target,r=>{o.content=[];for(const v in r)o.content.push({key:v,value:r[v],error:!1});o.content.length||(o.content=[JSON.parse(JSON.stringify(C))])},{immediate:!0,deep:!0}),(r,v)=>{const F=n("n-input"),f=n("n-button"),k=n("n-table");return _(),A(k,{class:"go-request-header-table-box","single-line":!1,size:"small"},{default:t(()=>[Gt,p("tbody",null,[(_(!0),$(j,null,Z(o.content,(E,x)=>(_(),$("tr",{key:x},[p("td",null,O(x+1),1),p("td",null,[e(F,{value:E.key,"onUpdate:value":w=>E.key=w,disabled:i.editDisabled,type:"text",size:"small",onBlur:d},null,8,["value","onUpdate:value","disabled"])]),p("td",null,[e(F,{value:E.value,"onUpdate:value":w=>E.value=w,disabled:i.editDisabled,type:"text",size:"small",onBlur:d},null,8,["value","onUpdate:value","disabled"])]),p("td",null,[p("div",Ht,[e(f,{class:"go-ml-2",type:"primary",size:"small",ghost:"",disabled:i.editDisabled,onClick:w=>a(x)},{default:t(()=>[Mt]),_:2},1032,["disabled","onClick"]),e(f,{class:"go-ml-2",type:"warning",size:"small",ghost:"",disabled:x===0&&i.editDisabled,onClick:w=>g(x)},{default:t(()=>[zt]),_:2},1032,["disabled","onClick"])])]),p("td",null,[E.error?(_(),A(f,{key:0,class:"go-ml-2",text:"",type:"error"},{default:t(()=>[jt]),_:1})):(_(),A(f,{key:1,class:"go-ml-2",text:"",type:"primary"},{default:t(()=>[Pt]),_:1}))])]))),128))])]),_:1})}}}),Vt={class:"go-mt-3"},Jt=G({__name:"index",props:{editDisabled:{type:Boolean,default:!0}},setup(i){const{chartEditStore:h}=V(),{requestParams:y}=P(h.getRequestGlobalConfig),C=S(I.HEADER),o=[I.HEADER],d=a=>{C.value===I.HEADER&&(y.value[C.value]=a)};return(a,g)=>{const r=n("n-tab"),v=n("n-tabs");return _(),$("div",null,[e(v,{type:"line",animated:"",value:C.value,"onUpdate:value":g[0]||(g[0]=F=>C.value=F)},{default:t(()=>[(_(),$(j,null,Z(o,F=>e(r,{key:F,name:F,tab:F},{default:t(()=>[s(O(F),1)]),_:2},1032,["name","tab"])),64))]),_:1},8,["value"]),p("div",Vt,[C.value===u(I).HEADER?(_(),A(u(fe),{key:0,editDisabled:i.editDisabled,target:u(y)[C.value],onUpdate:d},null,8,["editDisabled","target"])):re("",!0)])])}}});const Wt=s(" \u5168\u5C40\u914D\u7F6E "),Yt=s(" \u7F16\u8F91\u914D\u7F6E "),Qt=s(" \u5C55\u5F00 "),Xt=G({__name:"index",setup(i){ye(k=>({cb68ebe0:u(f)}));const{PencilIcon:h,ChevronDownOutlineIcon:y,ChevronUpOutlineIcon:C}=ee.ionicons5,{chartEditStore:o}=V(),{requestOriginUrl:d,requestInterval:a,requestIntervalUnit:g}=P(o.getRequestGlobalConfig),r=S(!0),v=be(),F=S(!1),f=ne(()=>v.getAppTheme);return(k,E)=>{const x=n("n-tag"),w=n("n-input"),B=n("n-input-number"),T=n("n-select"),m=n("n-input-group"),c=n("n-icon"),l=n("n-button"),D=n("n-collapse-transition"),U=n("n-tooltip"),L=n("n-card");return _(),A(L,{class:"n-card-shallow"},{default:t(()=>[e(x,{type:"info",bordered:!1,style:{"border-radius":"5px"}},{default:t(()=>[Wt]),_:1}),e(u(z),{name:"\u670D\u52A1",itemRightStyle:{gridTemplateColumns:"5fr 2fr 1fr"}},{default:t(()=>[e(u(Y),{name:"\u524D\u7F6E URL"},{default:t(()=>[e(w,{value:u(d),"onUpdate:value":E[0]||(E[0]=q=>N(d)?d.value=q:null),valueModifiers:{trim:!0},disabled:r.value,placeholder:"\u4F8B\uFF1Ahttp://127.0.0.1/"},null,8,["value","disabled"])]),_:1}),e(u(Y),{name:"\u66F4\u65B0\u95F4\u9694\uFF0C\u4E3A 0 \u53EA\u4F1A\u521D\u59CB\u5316"},{default:t(()=>[e(m,null,{default:t(()=>[e(B,{class:"select-time-number",value:u(a),"onUpdate:value":E[1]||(E[1]=q=>N(a)?a.value=q:null),valueModifiers:{trim:!0},min:"0","show-button":!1,disabled:r.value,placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"},null,8,["value","disabled"]),e(T,{class:"select-time-options",value:u(g),"onUpdate:value":E[2]||(E[2]=q=>N(g)?g.value=q:null),options:u(De),disabled:r.value},null,8,["value","options","disabled"])]),_:1})]),_:1}),le(e(l,{type:"primary",ghost:"",onClick:E[3]||(E[3]=q=>r.value=!1)},{icon:t(()=>[e(c,null,{default:t(()=>[e(u(h))]),_:1})]),default:t(()=>[Yt]),_:1},512),[[se,r.value]])]),_:1}),e(D,{show:F.value},{default:t(()=>[e(u(Jt),{editDisabled:r.value},null,8,["editDisabled"])]),_:1},8,["show"]),F.value?(_(),$("div",{key:0,class:"go-flex-center go-mt-3 down",onClick:E[4]||(E[4]=q=>F.value=!1)},[e(c,{size:"32"},{default:t(()=>[e(u(C))]),_:1})])):(_(),$("div",{key:1,class:"go-flex-center go-mt-3 down",onClick:E[5]||(E[5]=q=>F.value=!0)},[e(U,{trigger:"hover",placement:"top","keep-alive-on-hover":!1},{trigger:t(()=>[e(c,{size:"32"},{default:t(()=>[e(u(y))]),_:1})]),default:t(()=>[Qt]),_:1})]))]),_:1})}}});var Kt=Q(Xt,[["__scopeId","data-v-80c06452"]]);const Zt={style:{width:"600px"}},eu={class:"go-mt-3"},tu={key:0},uu={key:1},nu=s("\u8BE5\u8BF7\u6C42\u6CA1\u6709 Body \u4F53"),au=s("SQL \u7C7B\u578B\u4E0D\u652F\u6301 Get \u8BF7\u6C42\uFF0C\u8BF7\u4F7F\u7528\u5176\u5B83\u65B9\u5F0F"),ou=s("\u9700\u8981\u540E\u53F0\u63D0\u4F9B\u4E13\u95E8\u5904\u7406 sql \u7684\u63A5\u53E3"),lu=s(" sql "),su=G({__name:"index",setup(i){const{targetData:h}=V(),{requestHttpType:y,requestContentType:C,requestSQLContent:o,requestParams:d,requestParamsBodyType:a}=P(h.value.request),g=S(I.PARAMS),r=F=>{g.value!==I.BODY&&(d.value[g.value]=F)},v=F=>{g.value===I.BODY&&(a.value===X.FORM_DATA||a.value===X.X_WWW_FORM_URLENCODED)&&(d.value[I.BODY][a.value]=F)};return(F,f)=>{const k=n("n-tab"),E=n("n-tabs"),x=n("n-radio"),w=n("n-space"),B=n("n-radio-group"),T=n("n-text"),m=n("n-card"),c=n("n-tag");return _(),A(w,{vertical:""},{default:t(()=>[p("div",Zt,[e(E,{value:u(C),"onUpdate:value":f[0]||(f[0]=l=>N(C)?C.value=l:null),type:"segment",size:"small"},{default:t(()=>[e(k,{name:u(K).DEFAULT,tab:"\u666E\u901A\u8BF7\u6C42"},null,8,["name"]),e(k,{name:u(K).SQL,tab:"SQL \u8BF7\u6C42"},null,8,["name"])]),_:1},8,["value"])]),le(p("div",null,[e(E,{type:"line",animated:"",value:g.value,"onUpdate:value":f[1]||(f[1]=l=>g.value=l)},{default:t(()=>[(_(!0),$(j,null,Z(u(I),l=>(_(),A(k,{key:l,name:l,tab:l},{default:t(()=>[s(O(l),1)]),_:2},1032,["name","tab"]))),128))]),_:1},8,["value"]),p("div",eu,[g.value!==u(I).BODY?(_(),$("div",tu,[e(u(fe),{target:u(d)[g.value],onUpdate:r},null,8,["target"])])):(_(),$("div",uu,[e(B,{value:u(a),"onUpdate:value":f[2]||(f[2]=l=>N(a)?a.value=l:null),name:"radiogroup"},{default:t(()=>[e(w,null,{default:t(()=>[(_(!0),$(j,null,Z(u(et),l=>(_(),A(x,{key:l,value:l},{default:t(()=>[s(O(l),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["value"]),u(a)===u(X).NONE?(_(),A(m,{key:0,class:"go-mt-3 go-pb-3"},{default:t(()=>[e(T,{depth:"3"},{default:t(()=>[nu]),_:1})]),_:1})):u(a)===u(X).FORM_DATA||u(a)===u(X).X_WWW_FORM_URLENCODED?(_(),A(u(fe),{key:1,class:"go-mt-3",target:u(d)[u(I).BODY][u(a)],onUpdate:v},null,8,["target"])):u(a)===u(X).JSON?(_(),A(u(ce),{key:2,modelValue:u(d)[u(I).BODY][u(a)],"onUpdate:modelValue":f[3]||(f[3]=l=>u(d)[u(I).BODY][u(a)]=l),width:"600px",height:"200px",language:"json"},null,8,["modelValue"])):u(a)===u(X).XML?(_(),A(u(ce),{key:3,modelValue:u(d)[u(I).BODY][u(a)],"onUpdate:modelValue":f[4]||(f[4]=l=>u(d)[u(I).BODY][u(a)]=l),width:"600px",height:"200px",language:"html"},null,8,["modelValue"])):re("",!0)]))])],512),[[se,u(C)===u(K).DEFAULT]]),le(p("div",null,[u(y)===u(b).GET?(_(),A(T,{key:0},{default:t(()=>[au]),_:1})):(_(),$(j,{key:1},[e(c,{type:"warning"},{default:t(()=>[ou]),_:1}),e(u(z),{name:"\u952E\u540D"},{default:t(()=>[e(c,{type:"primary",bordered:!1,style:{width:"40px","font-size":"16px"}},{default:t(()=>[lu]),_:1})]),_:1}),e(u(z),{name:"\u952E\u503C"},{default:t(()=>[e(u(ce),{modelValue:u(o).sql,"onUpdate:modelValue":f[5]||(f[5]=l=>u(o).sql=l),width:"600px",height:"200px",language:"sql"},null,8,["modelValue"])]),_:1})],64))],512),[[se,u(C)===u(K).SQL]])]),_:1})}}});var ru=Q(su,[["__scopeId","data-v-5e5be267"]]);const iu=["12a","1a","2a","3a","4a","5a","6a","7a","8a","9a","10a","11a","12p","1p","2p","3p","4p","5p","6p","7p","8p","9p","10p","11p"],du=["Saturday","Friday","Thursday","Wednesday","Tuesday","Monday","Sunday"],cu=[[0,0,"@integer(0, 10)"],[1,0,"@integer(0, 10)"],[2,0,"-"],[3,0,"-"],[4,0,"-"],[5,0,"-"],[6,0,"-"],[7,0,"-"],[8,0,"-"],[9,0,"-"],[10,0,"-"],[11,0,"@integer(0, 10)"],[12,0,"@integer(0, 10)"],[13,0,"@integer(0, 10)"],[14,0,"@integer(0, 10)"],[15,0,"@integer(0, 10)"],[16,0,"@integer(0, 10)"],[17,0,"@integer(0, 10)"],[18,0,"@integer(0, 10)"],[19,0,"@integer(0, 10)"],[20,0,"@integer(0, 10)"],[21,0,"@integer(0, 10)"],[22,0,"@integer(0, 10)"],[23,0,"@integer(0, 10)"],[0,1,7],[1,1,"-"],[2,1,"-"],[3,1,"-"],[4,1,"-"],[5,1,"-"],[6,1,"-"],[7,1,"-"],[8,1,"-"],[9,1,"-"],[10,1,"@integer(0, 10)"],[11,1,"@integer(0, 10)"],[12,1,"@integer(0, 10)"],[13,1,"@integer(0, 10)"],[14,1,"@integer(0, 10)"],[15,1,"@integer(0, 10)"],[16,1,"@integer(0, 10)"],[17,1,"@integer(0, 10)"],[18,1,"@integer(0, 10)"],[19,1,"@integer(0, 10)"],[20,1,"@integer(0, 10)"],[21,1,"@integer(0, 10)"],[22,1,"@integer(0, 10)"],[23,1,"@integer(0, 10)"],[0,2,1],[1,2,1],[2,2,"-"],[3,2,"-"],[4,2,"-"],[5,2,"-"],[6,2,"-"],[7,2,"-"],[8,2,"-"],[9,2,"-"],[10,2,"@integer(0, 10)"],[11,2,"@integer(0, 10)"],[12,2,"@integer(0, 10)"],[13,2,"@integer(0, 10)"],[14,2,"@integer(0, 10)"],[15,2,"@integer(0, 10)"],[16,2,"@integer(0, 10)"],[17,2,"@integer(0, 10)"],[18,2,"@integer(0, 10)"],[19,2,"@integer(0, 10)"],[20,2,"@integer(0, 10)"],[21,2,"@integer(0, 10)"],[22,2,"@integer(0, 10)"],[23,2,"@integer(0, 10)"],[0,3,7],[1,3,3],[2,3,"-"],[3,3,"-"],[4,3,"-"],[5,3,"-"],[6,3,"-"],[7,3,"-"],[8,3,1],[9,3,"-"],[10,3,"@integer(0, 10)"],[11,3,"@integer(0, 10)"],[12,3,"@integer(0, 10)"],[13,3,"@integer(0, 10)"],[14,3,"@integer(0, 10)"],[15,3,"@integer(0, 10)"],[16,3,"@integer(0, 10)"],[17,3,"@integer(0, 10)"],[18,3,"@integer(0, 10)"],[19,3,"@integer(0, 10)"],[20,3,"@integer(0, 10)"],[21,3,"@integer(0, 10)"],[22,3,"@integer(0, 10)"],[23,3,"@integer(0, 10)"],[0,4,"@integer(0, 10)"],[1,4,"@integer(0, 10)"],[2,4,"-"],[3,4,"-"],[4,4,"-"],[5,4,"@integer(0, 10)"],[6,4,"-"],[7,4,"-"],[8,4,"-"],[9,4,"@integer(0, 10)"],[10,4,"@integer(0, 10)"],[11,4,"@integer(0, 10)"],[12,4,"@integer(0, 10)"],[13,4,"@integer(0, 10)"],[14,4,"@integer(0, 10)"],[15,4,"@integer(0, 10)"],[16,4,"@integer(0, 10)"],[17,4,"@integer(0, 10)"],[18,4,"@integer(0, 10)"],[19,4,"@integer(0, 10)"],[20,4,"@integer(0, 10)"],[21,4,"@integer(0, 10)"],[22,4,"@integer(0, 10)"],[23,4,"-"],[0,5,"@integer(0, 10)"],[1,5,"@integer(0, 10)"],[2,5,"-"],[3,5,"@integer(0, 10)"],[4,5,"-"],[5,5,"-"],[6,5,"-"],[7,5,"-"],[8,5,"@integer(0, 10)"],[9,5,"-"],[10,5,"@integer(0, 10)"],[11,5,"@integer(0, 10)"],[12,5,"@integer(0, 10)"],[13,5,"@integer(0, 10)"],[14,5,"@integer(0, 10)"],[15,5,"@integer(0, 10)"],[16,5,"@integer(0, 10)"],[17,5,"@integer(0, 10)"],[18,5,"-"],[19,5,"@integer(0, 10)"],[20,5,"@integer(0, 10)"],[21,5,"@integer(0, 10)"],[22,5,"@integer(0, 10)"],[23,5,"-"],[0,6,"@integer(0, 10)"],[1,6,"-"],[2,6,"-"],[3,6,"-"],[4,6,"-"],[5,6,"-"],[6,6,"-"],[7,6,"-"],[8,6,"-"],[9,6,"-"],[10,6,"@integer(0, 10)"],[11,6,"-"],[12,6,"@integer(0, 10)"],[13,6,"@integer(0, 10)"],[14,6,"@integer(0, 10)"],[15,6,"@integer(0, 10)"],[16,6,"-"],[17,6,"-"],[18,6,"-"],[19,6,"-"],[20,6,"@integer(0, 10)"],[21,6,"@integer(0, 10)"],[22,6,"@integer(0, 10)"],[23,6,"@integer(0, 10)"]];var _u={xAxis:iu,yAxis:du,seriesData:cu},pu=[{dimensions:["data1"],source:[[10,"@integer(0, 100)"],[8.07,"@integer(0, 100)"],[13,"@integer(0, 100)"],[9.05,"@integer(0, 100)"],[11,"@integer(0, 100)"],[14,"@integer(0, 100)"],[13.4,"@integer(0, 100)"],[10,"@integer(0, 100)"],[14,"@integer(0, 100)"],[12.5,"@integer(0, 100)"],[9.15,"@integer(0, 100)"],[11.5,"@integer(0, 100)"],[3.03,"@integer(0, 100)"],[12.2,"@integer(0, 100)"],[2.02,"@integer(0, 100)"],[1.05,"@integer(0, 100)"],[4.05,"@integer(0, 100)"],[6.03,"@integer(0, 100)"],[12,"@integer(0, 100)"],[12,"@integer(0, 100)"],[7.08,"@integer(0, 100)"],[5.02,"@integer(0, 100)"]]},{dimensions:["data2"],source:[[10,"@integer(0, 70)"],[8.07,"@integer(0, 70)"],[13,"@integer(0, 70)"],[9.05,"@integer(0, 70)"],[11,"@integer(0, 70)"],[14,"@integer(0, 70)"],[13.4,"@integer(0, 70)"],[10,"@integer(0, 70)"],[14,"@integer(0, 70)"],[12.5,"@integer(0, 70)"],[9.15,"@integer(0, 70)"],[11.5,"@integer(0, 70)"],[3.03,"@integer(0, 70)"],[12.2,"@integer(0, 70)"],[2.02,"@integer(0, 70)"],[1.05,"@integer(0, 70)"],[4.05,"@integer(0, 70)"],[6.03,"@integer(0, 70)"],[12,"@integer(0, 70)"],[12,"@integer(0, 70)"],[7.08,"@integer(0, 70)"],[5.02,"@integer(0, 70)"]]}],mu={"markers|50":[{name:"\u67D0\u67D0\u5730\u5E02",value:"@integer(2, 20)",position:["@float(115, 117, 1, 6)","@float(38, 40, 1, 6)"]}]},gu=[{name:"@name",value:"@integer(0, 1000)",children:[{name:"@name",value:"@integer(0, 500)"},{name:"@name",value:"@integer(0, 500)"}]},{name:"@name",value:"@integer(0, 1000)",children:[{name:"@name",value:"@integer(0, 00)"},{name:"@name",value:"@integer(0, 500)"}]},{name:"@name",value:"@integer(0, 1000)",children:[{name:"@name",value:"@integer(0, 1000)"}]},{name:"@name",value:"@integer(0, 1000)",children:[{name:"@name",value:"@integer(0, 1000)"}]}],R={fetchMockSingleData:{code:0,status:200,msg:"\u8BF7\u6C42\u6210\u529F",data:{dimensions:["product","dataOne"],"source|50":[{product:"@name","dataOne|0-900":3}]}},fetchCapsule:{code:0,status:200,msg:"\u8BF7\u6C42\u6210\u529F",data:{dimensions:["name","value"],source:[{name:"\u53A6\u95E8","value|0-40":20},{name:"\u5357\u9633","value|20-60":40},{name:"\u5317\u4EAC","value|40-80":60},{name:"\u4E0A\u6D77","value|60-100":80},{name:"\u65B0\u7586",value:100}]}},fetchMockData:{code:0,status:200,msg:"\u8BF7\u6C42\u6210\u529F",data:{dimensions:["product","dataOne","dataTwo"],"source|50":[{product:"@name","dataOne|100-900":3,"dataTwo|100-900":3}]}},fetchRankList:{code:0,status:200,msg:"\u8BF7\u6C42\u6210\u529F","data|50":[{name:"@name","value|100-900":5}]},fetchScrollBoard:{code:0,status:200,msg:"\u8BF7\u6C42\u6210\u529F",data:[["\u884C1\u52171","\u884C1\u52172","1"],["\u884C2\u52171","\u884C2\u52172","2"],["\u884C3\u52171","\u884C3\u52172","3"],["\u884C4\u52171","\u884C4\u52172","4"],["\u884C5\u52171","\u884C5\u52172","5"],["\u884C6\u52171","\u884C6\u52172","6"],["\u884C7\u52171","\u884C7\u52172","\u884C7\u52173"],["\u884C8\u52171","\u884C8\u52172","\u884C8\u52173"],["\u884C9\u52171","\u884C9\u52172","\u884C9\u52173"],["\u884C10\u52171","\u884C10\u52172","\u884C10\u52173"]]},fetchNumberFloat:{code:0,status:200,msg:"\u8BF7\u6C42\u6210\u529F",data:"@float(0, 0.99, 1, 4)"},fetchNumberInt:{code:0,status:200,msg:"\u8BF7\u6C42\u6210\u529F",data:"@integer(0, 100)"},fetchText:{code:0,status:200,msg:"\u8BF7\u6C42\u6210\u529F",data:"@paragraph(1, 10)"},fetchImage:i=>({code:0,status:200,msg:"\u8BF7\u6C42\u6210\u529F",data:`https://robohash.org/${i}`}),fetchRadar:{code:0,status:200,msg:"\u8BF7\u6C42\u6210\u529F",data:{radarIndicator:[{name:"@name",max:1e4},{name:"@name",max:1e4},{name:"@name",max:1e4},{name:"@name",max:1e4},{name:"@name",max:1e4},{name:"@name",max:1e4}],seriesData:[{value:["@integer(0, 10000)","@integer(0, 10000)","@integer(0, 10000)","@integer(0, 10000)","@integer(0, 10000)","@integer(0, 10000)"],name:"data1"},{value:["@integer(0, 10000)","@integer(0, 10000)","@integer(0, 10000)","@integer(0, 10000)","@integer(0, 10000)","@integer(0, 10000)"],name:"data2"}]}},fetchHeatmap:{code:0,status:200,msg:"\u8BF7\u6C42\u6210\u529F",data:_u},fetchScatterBasic:{code:0,status:200,msg:"\u8BF7\u6C42\u6210\u529F",data:pu},fetchMap:{code:0,status:200,msg:"\u8BF7\u6C42\u6210\u529F",data:mu},fetchWordCloud:{code:0,status:200,msg:"\u8BF7\u6C42\u6210\u529F",data:[{name:"@name",value:8e3,textStyle:{color:"#78fbb2"},emphasis:{textStyle:{color:"red"}}},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"}]},fetchTreemap:{code:0,status:200,msg:"\u8BF7\u6C42\u6210\u529F",data:gu},threeEarth01Data:{code:0,status:200,msg:"\u8BF7\u6C42\u6210\u529F",data:[{startArray:{name:"@name",N:"@integer(10, 100)",E:"@integer(10, 100)"},"endArray|10":[{name:"@name",N:"@integer(10, 100)",E:"@integer(10, 100)"}]}]}};const Ae="/mock/chartData",we="/mock/chartSingleData",ke="/mock/number/float",Te="/mock/number/int",$e="/mock/text",qe="/mock/image",Se="/mock/rankList",Ue="/mock/scrollBoard",Re="/mock/radarData",Ie="/mock/heatMapData",Oe="/mock/scatterBasic",Le="/mock/map",Ne="/mock/capsule",Ge="/mock/wordCloud",He="/mock/treemap",Me="/mock/threeEarth01Data";b.GET,b.GET,b.GET,b.GET,b.GET,b.GET,b.GET,b.GET,b.GET,b.GET,b.GET,b.GET,b.GET,b.GET,b.GET,b.GET;const vu=s(" \u5730\u5740 "),fu={class:"go-pl-0"},Fu=s(" \u5F00\u53D1\u73AF\u5883\u4F7F\u7528 mock \u6570\u636E\uFF0C\u8BF7\u8F93\u5165 "),hu=G({__name:"index",setup(i){const{HelpOutlineIcon:h}=ee.ionicons5,{targetData:y,chartEditStore:C}=V(),{requestOriginUrl:o}=P(C.getRequestGlobalConfig),{requestInterval:d,requestIntervalUnit:a,requestHttpType:g,requestUrl:r}=P(y.value.request),v=[{value:`\u3010\u56FE\u8868\u3011${Ae}`},{value:`\u3010\u5355\u6570\u636E\u56FE\u8868\u3011${we}`},{value:`\u3010\u6587\u672C\u3011${$e}`},{value:`\u30100~100 \u6574\u6570\u3011${Te}`},{value:`\u30100~1\u5C0F\u6570\u3011${ke}`},{value:`\u3010\u56FE\u7247\u5730\u5740\u3011${qe}`},{value:`\u3010\u6392\u540D\u5217\u8868\u3011${Se}`},{value:`\u3010\u6EDA\u52A8\u8868\u683C\u3011${Ue}`},{value:`\u3010\u96F7\u8FBE\u3011${Re}`},{value:`\u3010\u70ED\u529B\u56FE\u3011${Ie}`},{value:`\u3010\u57FA\u7840\u6563\u70B9\u56FE\u3011${Oe}`},{value:`\u3010\u5730\u56FE\u6570\u636E\u3011${Le}`},{value:`\u3010\u80F6\u56CA\u67F1\u56FE\u3011${Ne}`},{value:`\u3010\u8BCD\u4E91\u3011${Ge}`},{value:`\u3010\u6811\u56FE\u3011${He}`},{value:`\u3010\u4E09\u7EF4\u5730\u7403\u3011${Me}`}];return(F,f)=>{const k=n("n-divider"),E=n("n-icon"),x=n("n-text"),w=n("n-tooltip"),B=n("n-select"),T=n("n-input"),m=n("n-input-group"),c=n("n-input-number");return _(),$(j,null,[e(k,{class:"go-my-3","title-placement":"left"}),e(u(z),{itemRightStyle:{gridTemplateColumns:"6fr 2fr"},style:{"padding-right":"25px"}},{name:t(()=>[vu,u(tt)()?(_(),A(w,{key:0,trigger:"hover"},{trigger:t(()=>[e(E,{size:"21",depth:3},{default:t(()=>[e(u(h))]),_:1})]),default:t(()=>[p("ul",fu,[Fu,(_(),$(j,null,Z(v,l=>p("li",{key:l.value},[e(x,{type:"info"},{default:t(()=>[s(O(l.value),1)]),_:2},1024)])),64))])]),_:1})):re("",!0)]),default:t(()=>[e(u(Y),{name:"\u8BF7\u6C42\u65B9\u5F0F & URL \u5730\u5740"},{default:t(()=>[e(m,null,{default:t(()=>[e(B,{class:"select-type-options",value:u(g),"onUpdate:value":f[0]||(f[0]=l=>N(g)?g.value=l:null),options:u(lt)},null,8,["value","options"]),e(T,{value:u(r),"onUpdate:value":f[1]||(f[1]=l=>N(r)?r.value=l:null),valueModifiers:{trim:!0},min:1,placeholder:"\u8BF7\u8F93\u5165\u5730\u5740\uFF08\u53BB\u9664\u524D\u7F6EURL\uFF09"},{prefix:t(()=>[e(x,null,{default:t(()=>[s(O(u(o)),1)]),_:1}),e(k,{vertical:""})]),_:1},8,["value"])]),_:1})]),_:1}),e(u(Y),{name:"\u66F4\u65B0\u95F4\u9694\uFF0C\u4E3A 0 \u53EA\u4F1A\u521D\u59CB\u5316"},{default:t(()=>[e(m,null,{default:t(()=>[e(c,{value:u(d),"onUpdate:value":f[2]||(f[2]=l=>N(d)?d.value=l:null),valueModifiers:{trim:!0},class:"select-time-number",min:"0","show-button":!1,placeholder:"\u9ED8\u8BA4\u4F7F\u7528\u5168\u5C40\u6570\u636E"},null,8,["value"]),e(B,{class:"select-time-options",value:u(a),"onUpdate:value":f[3]||(f[3]=l=>N(a)?a.value=l:null),options:u(De)},null,8,["value","options"])]),_:1})]),_:1})]),_:1}),e(u(z),{name:"\u9009\u62E9\u65B9\u5F0F",class:"go-mt-0"},{default:t(()=>[e(u(ru))]),_:1})],64)}}});var Eu=Q(hu,[["__scopeId","data-v-39b5a849"]]);const Cu={class:"go-pr-3"},yu=s("\u2014\u2014 "),bu=s("\u4FDD\u5B58 & \u53D1\u9001\u8BF7\u6C42"),Bu=G({__name:"index",props:{modelShow:Boolean},emits:["update:modelShow","sendHandle"],setup(i,{emit:h}){const{targetData:y}=V(),{chartConfig:C}=P(y.value),{requestContentType:o}=P(y.value.request),d={[K.DEFAULT]:"\u666E\u901A\u8BF7\u6C42",[K.SQL]:"SQL \u8BF7\u6C42"},a=()=>{h("update:modelShow",!1),h("sendHandle")};return(g,r)=>{const v=n("n-space"),F=n("n-scrollbar"),f=n("n-text"),k=n("n-tag"),E=n("n-button"),x=n("n-card"),w=n("n-modal");return _(),A(w,{class:"go-chart-data-request",show:i.modelShow,"onUpdate:show":r[0]||(r[0]=B=>N(modelShow)?modelShow.value=B:null),"mask-closable":!1},{default:t(()=>[e(x,{bordered:!1,role:"dialog",size:"small","aria-modal":"true",style:{width:"1000px",height:"800px"}},{header:t(()=>[]),"header-extra":t(()=>[]),action:t(()=>[e(v,{justify:"space-between"},{default:t(()=>[p("div",null,[e(f,null,{default:t(()=>[s("\u300C "+O(u(C).categoryName)+" \u300D",1)]),_:1}),e(f,null,{default:t(()=>[yu]),_:1}),e(k,{type:"primary",bordered:!1,style:{"border-radius":"5px"}},{default:t(()=>[s(O(d[u(o)]),1)]),_:1})]),e(E,{type:"primary",onClick:a},{default:t(()=>[bu]),_:1})]),_:1})]),default:t(()=>[e(F,{style:{"max-height":"718px"}},{default:t(()=>[p("div",Cu,[e(v,{vertical:""},{default:t(()=>[e(u(Kt)),e(u(Eu))]),_:1})])]),_:1})]),_:1})]),_:1},8,["show"])}}});var Du=Q(Bu,[["__scopeId","data-v-5c376f68"]]);const xu={class:"go-chart-configurations-data-ajax"},Au=s("\u66F4\u65B0\u5185\u5BB9\u8BF7\u70B9\u51FB\u5C55\u793A\u533A\u57DF"),wu={class:"go-absolute-center"},ku=s("\u67E5\u770B\u66F4\u591A"),Tu=s(" \u6D4B\u8BD5 "),$u=s(" \u9ED8\u8BA4\u8D4B\u503C\u7ED9 dataset \u5B57\u6BB5 "),qu=s(" \u53D1\u9001\u8BF7\u6C42 "),Su=G({__name:"index",setup(i){ye(m=>({"23cc3805":u(T)}));const{HelpOutlineIcon:h,FlashIcon:y,PulseIcon:C}=ee.ionicons5,{targetData:o,chartEditStore:d}=V(),{requestOriginUrl:a,requestInterval:g,requestIntervalUnit:r}=P(d.getRequestGlobalConfig),v=be(),F=S(!1),f=S(!1),k=S(!1);let E=0,x;const w=()=>{f.value=!0},B=()=>ge(this,null,function*(){var m;if(!!((m=o.value)!=null&&m.request)){F.value=!0;try{const c=yield Be(pe(o.value.request),pe(d.getRequestGlobalConfig));if(F.value=!1,c){!(c!=null&&c.data)&&!o.value.filter&&window.$message.warning("\u60A8\u7684\u6570\u636E\u4E0D\u7B26\u5408\u9ED8\u8BA4\u683C\u5F0F\uFF0C\u8BF7\u914D\u7F6E\u8FC7\u6EE4\u5668\uFF01"),o.value.option.dataset=at(c==null?void 0:c.data,c,o.value.filter),k.value=!0;return}window.$message.warning("\u6570\u636E\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\u53C2\u6570\uFF01")}catch(c){F.value=!1,window.$message.warning("\u6570\u636E\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\u53C2\u6570\uFF01")}}}),T=ne(()=>v.getAppTheme);return ut(()=>{var c;const m=(c=o.value)==null?void 0:c.filter;x!==m&&E&&(x=m,B()),E++}),nt(()=>{x=null}),(m,c)=>{const l=n("n-tag"),D=n("n-input"),U=n("n-icon"),L=n("n-text"),q=n("n-space"),J=n("n-button"),te=n("n-card"),ae=n("n-tooltip"),H=n("go-skeleton");return _(),$("div",xu,[e(te,{class:"n-card-shallow"},{default:t(()=>[e(u(z),{name:"\u8BF7\u6C42\u914D\u7F6E"},{default:t(()=>[e(u(Y),{name:"\u7C7B\u578B"},{default:t(()=>[e(l,{bordered:!1,type:"primary",style:{"border-radius":"5px"}},{default:t(()=>[s(O(u(o).request.requestContentType===u(K).DEFAULT?"\u666E\u901A\u8BF7\u6C42":"SQL\u8BF7\u6C42"),1)]),_:1})]),_:1}),e(u(Y),{name:"\u65B9\u5F0F"},{default:t(()=>[e(D,{size:"small",placeholder:u(o).request.requestHttpType||"\u6682\u65E0",disabled:!0},null,8,["placeholder"])]),_:1}),e(u(Y),{name:"\u7EC4\u4EF6\u95F4\u9694\uFF08\u9AD8\u7EA7\uFF09"},{default:t(()=>[e(D,{size:"small",placeholder:`${u(o).request.requestInterval||"\u6682\u65E0"}`,disabled:!0},{suffix:t(()=>[s(O(u(ue)[u(o).request.requestIntervalUnit]),1)]),_:1},8,["placeholder"])]),_:1}),e(u(Y),{name:"\u5168\u5C40\u95F4\u9694\uFF08\u9ED8\u8BA4\uFF09"},{default:t(()=>[e(D,{size:"small",placeholder:`${u(g)||"\u6682\u65E0"} `,disabled:!0},{suffix:t(()=>[s(O(u(ue)[u(r)]),1)]),_:1},8,["placeholder"])]),_:1})]),_:1}),e(u(z),{name:"\u6E90\u5730\u5740",alone:!0},{default:t(()=>[e(D,{size:"small",placeholder:u(a)||"\u6682\u65E0",disabled:!0},{prefix:t(()=>[e(U,{component:u(C)},null,8,["component"])]),_:1},8,["placeholder"])]),_:1}),e(u(z),{name:"\u7EC4\u4EF6\u5730\u5740",alone:!0},{default:t(()=>[e(D,{size:"small",placeholder:u(o).request.requestUrl||"\u6682\u65E0",disabled:!0},{prefix:t(()=>[e(U,{component:u(y)},null,8,["component"])]),_:1},8,["placeholder"])]),_:1}),e(q,{justify:"end"},{default:t(()=>[e(L,{depth:"3",style:{"font-size":"12px"}},{default:t(()=>[Au]),_:1})]),_:1}),p("div",{class:"edit-text",onClick:w},[p("div",wu,[e(J,{type:"primary",secondary:""},{default:t(()=>[ku]),_:1})])])]),_:1}),e(u(z),{alone:!0},{name:t(()=>[Tu,e(ae,{trigger:"hover"},{trigger:t(()=>[e(U,{size:"21",depth:3},{default:t(()=>[e(u(h))]),_:1})]),default:t(()=>[$u]),_:1})]),default:t(()=>[e(J,{type:"primary",ghost:"",onClick:B},{icon:t(()=>[e(U,null,{default:t(()=>[e(u(y))]),_:1})]),default:t(()=>[qu]),_:1})]),_:1}),e(u(xe),{show:k.value&&!F.value,ajax:!0},null,8,["show"]),e(H,{load:F.value,repeat:3},null,8,["load"]),e(u(Du),{modelShow:f.value,"onUpdate:modelShow":c[0]||(c[0]=me=>f.value=me),onSendHandle:B},null,8,["modelShow"])])}}});var Uu=Q(Su,[["__scopeId","data-v-1418549e"]]);const Ru={key:0,class:"go-chart-configurations-data"},Wu=G({__name:"index",setup(i){const{targetData:h}=V(),y=[{label:ve.STATIC,value:de.STATIC},{label:ve.AJAX,value:de.AJAX}],C=ne(()=>{var o,d;return typeof((d=(o=h.value)==null?void 0:o.option)==null?void 0:d.dataset)=="undefined"});return(o,d)=>{const a=n("n-select");return u(h)?(_(),$("div",Ru,[e(u(z),{name:"\u8BF7\u6C42\u65B9\u5F0F",alone:!0},{default:t(()=>[e(a,{value:u(h).request.requestDataType,"onUpdate:value":d[0]||(d[0]=g=>u(h).request.requestDataType=g),disabled:u(C),options:y},null,8,["value","disabled"])]),_:1}),u(h).request.requestDataType===u(de).STATIC?(_(),A(u(Nt),{key:0})):(_(),A(u(Uu),{key:1}))])):re("",!0)}}});export{Wu as default};
