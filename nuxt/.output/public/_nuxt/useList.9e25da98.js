import{u as l}from"./useStrapi.c14347dc.js";import{q as t,h as p,s as d,v as f}from"./entry.38819e61.js";const w=(r,u)=>{const e=t([]),{find:i}=l(),c=p(),o=t({pagination:{page:1,pageCount:1,total:0}}),a=t(!0),s=async()=>{a.value=!0;const n=await i(r,{...u});e.value=n.data,o.value=n.meta,a.value=!1,!(typeof window>"u")&&(window==null||window.scrollTo(0,0))};return d(()=>c.query.page,s),f({data:e,meta:o,loading:a,load:s})};export{w as u};