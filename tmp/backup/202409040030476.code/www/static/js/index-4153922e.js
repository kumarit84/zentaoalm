import{b as w,d as k,r as n,o as l,c as i,f as o,w as t,g as x,t as B,p as d,e as a,a3 as y,a4 as C,u as $,Q as u,E as f,am as m}from"./index-5427279b.js";import{i as S}from"./icon-d6196121.js";const N={key:0,class:"top go-mt-0 go-flex-no-wrap"},T={class:"mt-1"},I={key:1,class:"bottom go-mt-0"},V={class:"aside"},z=k({__name:"index",props:{title:String,showTop:{type:Boolean,default:!0},showBottom:{type:Boolean,default:!1},flex:{type:Boolean,default:!1},backIcon:{type:Boolean,default:!0},depth:{type:Number,default:1},xScroll:{type:Boolean,default:!1}},emits:["back"],setup(e,{emit:h}){const{ChevronBackOutlineIcon:p}=S.ionicons5,_=()=>{h("back")};return(s,D)=>{const v=n("n-text"),b=n("n-ellipsis"),r=n("n-space"),g=n("n-icon"),c=n("n-scrollbar");return l(),i("div",{class:m(["go-content-box",[`bg-depth${e.depth}`,e.flex&&"flex"]])},[e.showTop?(l(),i("div",N,[o(r,{class:"go-flex-no-wrap",size:5},{default:t(()=>[o(b,null,{default:t(()=>[o(v,null,{default:t(()=>[x(B(e.title),1)]),_:1})]),_:1}),d("div",T,[a(s.$slots,"icon",{},void 0,!0)])]),_:3}),o(r,{align:"center",style:{gap:"4px"}},{default:t(()=>[a(s.$slots,"top-right",{},void 0,!0),y(o(g,{size:"20",class:"go-cursor-pointer go-d-block",onClick:_},{default:t(()=>[o($(p))]),_:1},512),[[C,e.backIcon]])]),_:3})])):u("",!0),d("div",{class:m(["content",{"content-height-show-top-bottom":e.showBottom||e.showTop,"content-height-show-both":e.showBottom&&e.showTop}])},[e.xScroll?(l(),f(c,{key:0,"x-scrollable":""},{default:t(()=>[o(c,null,{default:t(()=>[a(s.$slots,"default",{},void 0,!0)]),_:3})]),_:3})):(l(),f(c,{key:1},{default:t(()=>[a(s.$slots,"default",{},void 0,!0)]),_:3}))],2),e.showBottom?(l(),i("div",I,[a(s.$slots,"bottom",{},void 0,!0)])):u("",!0),d("div",V,[a(s.$slots,"aside",{},void 0,!0)])],2)}}});var O=w(z,[["__scopeId","data-v-6ad94280"]]);export{O as C};
