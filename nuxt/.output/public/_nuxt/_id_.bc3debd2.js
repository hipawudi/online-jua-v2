import{_ as u}from"./PageHeader.60330589.js";import{u as m}from"./useStrapiMedia.a40b7fdd.js";import{u as x}from"./useStrapi.5b077a2e.js";import{i as p,j as b,c,b as f,h as s,a as t,t as o,k as v,o as d}from"./entry.9d9d2d8e.js";const g={class:"py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0"},w={class:"container mx-auto xl:pl-16 px-4"},k={class:"mb-4"},y=["src"],j={class:"flex flex-col md:flex-row gap-6"},A={class:"flex flex-col text-gray-500 text-lg"},B={class:"flex gap-6"},N=t("div",{class:"w-16"},"Title",-1),S={class:"text-black font-bold"},V={class:"flex gap-6"},C=t("div",{class:"w-16"},"Address",-1),E={class:"text-black font-bold"},M={class:"flex gap-6"},P=t("div",{class:"w-16"},"Phone",-1),D={class:"text-black font-bold"},J={class:"flex gap-6"},O=t("div",{class:"w-16"},"Web",-1),R={class:"text-black font-bold"},T={class:"flex gap-6"},U=t("div",{class:"w-16"},"Email",-1),W={class:"text-black font-bold"},q={class:"grow md:text-right text-left"},z={class:"flex md:justify-end justify-start gap-6 md:flex-row flex-row-reverse"},F={class:"flex flex-col"},G=t("div",{class:"text-lg text-gray-500"},"President",-1),H={class:"text-lg font-bold"},I={class:"w-28 h-32"},K=["src"],st={__name:"[id]",async setup(L){let a,i;const l=m(),{findOne:_}=x(),n=p(),{data:e}=([a,i]=b(()=>_("jua-members",n.params.id,{populate:"*"})),a=await a,i(),a),r=[{text:"JUA Members",to:"/jua-members"},{text:e.attributes.title,to:""}];return(Q,X)=>{const h=u;return d(),c("div",null,[f(h,{title:s(e).attributes.title,classes:r},null,8,["title"]),t("section",g,[t("div",w,[t("div",k,[t("img",{src:s(l)+s(e).attributes.member_image.data.attributes.url,class:"w-40 shadow-lg"},null,8,y)]),t("div",j,[t("div",A,[t("div",B,[N,t("div",S,o(s(e).attributes.title),1)]),t("div",V,[C,t("div",E,o(s(e).attributes.address),1)]),t("div",M,[P,t("div",D,o(s(e).attributes.phone),1)]),t("div",J,[O,t("div",R,o(s(e).attributes.web),1)]),t("div",T,[U,t("div",W,o(s(e).attributes.email),1)])]),t("div",q,[t("div",z,[t("div",F,[G,t("div",H,o(s(e).attributes.president),1)]),t("div",I,[s(e).attributes.president_image.data!=null?(d(),c("img",{key:0,src:s(l)+s(e).attributes.president_image.data.attributes.url,class:"w-28 h-32 shadow-lg"},null,8,K)):v("",!0)])])])])])])])}}};export{st as default};