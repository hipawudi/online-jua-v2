import{u as l}from"./useStrapi.5b077a2e.js";import{g as t,i as p,K as d,L as f}from"./entry.9d9d2d8e.js";const w=(r,u)=>{const e=t([]),{find:i}=l(),c=p(),o=t({pagination:{page:1,pageCount:1,total:0}}),a=t(!0),s=async()=>{a.value=!0;const n=await i(r,{...u});e.value=n.data,o.value=n.meta,a.value=!1,!(typeof window>"u")&&(window==null||window.scrollTo(0,0))};return d(()=>c.query.page,s),f({data:e,meta:o,loading:a,load:s})};export{w as u};