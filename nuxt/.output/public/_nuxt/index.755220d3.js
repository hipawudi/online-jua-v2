import{_ as g}from"./PageHeader.60330589.js";import{_ as w}from"./nuxt-link.278a5002.js";import{i as k,g as y,j,c as n,b as x,a as e,l as C,v as S,h as a,m as Z,F as d,r as c,o as l,t as r,w as A,n as M}from"./entry.9d9d2d8e.js";import{u as z}from"./useStrapi.5b077a2e.js";import{u as U}from"./useStrapiMedia.a40b7fdd.js";import{u as B}from"./useList.2a7feb88.js";const E={class:"py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0",style:{"background-image":"url('/flex-ui-assets/elements/pattern-white.svg')","background-position":"center"}},J={class:"container mx-auto xl:pl-16 px-4"},L={class:"block md:hidden text-center mb-8"},N=["value"],V={class:"flex gap-3"},D={class:"flex flex-wrap md:w-3/4"},F={class:"mx-auto md:ml-0 flex gap-3"},R={class:"flex justify-between items-center shrink-0"},$=["src"],G={class:"flex flex-col"},W={class:"mb-1 text-sm text-coolGray-800 font-semibold"},q={class:"inline-block mb-4 text-sm font-medium text-red-500"},H={class:"hidden md:flex flex-col shrink-0 bg-gray-200 shadow-lg p-2 h-[340px] text-sm rounded-md"},I=e("div",{class:"font-bold text-xl px-2 py-2 mx-1"},"JUA Members",-1),K=["onClick"],oe={__name:"index",async setup(O){let m,u;k(),z();const b=U(),h=[{text:"JUA Members",to:"/jua-members"}],i=["All Zone","Central Zone","South East Zone","East Zone","West Zone","South Zone"],o=y(0),_=B("jua-members",{populate:"*",sort:["name:asc"]});return[m,u]=j(()=>_.load()),await m,u(),(P,p)=>{const f=g,v=w;return l(),n("div",null,[x(f,{classes:h,title:"JUA Members"}),e("section",E,[e("div",J,[e("div",L,[C(e("select",{"onUpdate:modelValue":p[0]||(p[0]=t=>Z(o)?o.value=t:null),class:"px-2 w-64 h-10 border rounded-md shadow-md after:bg-red-500"},[(l(),n(d,null,c(i,(t,s)=>e("option",{key:s,value:s},r(t),9,N)),64))],512),[[S,a(o)]])]),e("div",V,[e("div",D,[(l(!0),n(d,null,c(a(_).data.filter(function(t){return a(o)!=0?t.attributes.zone==i[a(o)]:t}),(t,s)=>(l(),n("div",{class:"w-full md:w-1/2 xl:w-1/3 mb-10 px-4",key:s},[x(v,{to:"/jua-members/"+t.id},{default:A(()=>[e("div",F,[e("div",R,[e("img",{src:a(b)+t.attributes.member_image.data.attributes.url,class:"w-32 h-20 mb-6 shadow-lg"},null,8,$)]),e("div",G,[e("div",null,[e("h3",W,r(t.attributes.name),1)]),e("div",q,r(t.attributes.title),1)])])]),_:2},1032,["to"])]))),128))]),e("div",H,[I,(l(),n(d,null,c(i,(t,s)=>e("button",{class:M(["p-2 mx-4 border-b border-red-500 text-left text-lg",s==a(o)?"text-red-500 border-red-500":"border-white"]),key:s,onClick:Q=>o.value=s},r(t),11,K)),64))])])])])])}}};export{oe as default};