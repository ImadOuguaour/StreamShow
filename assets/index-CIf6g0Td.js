import{u,k as g,r as n,l as p,j as t}from"./index-jCpgKdMV.js";import{F as f}from"./index-D8bP69vL.js";import{D as h}from"./index-DhAY71vG.js";import{b as x}from"./index-XUUdmKvG.js";const b=()=>{const s=u(),{tv:r,loadingTv:i,errorTv:c,totalPages:d}=g(e=>e.series),[a,o]=n.useState(1);n.useEffect(()=>(s(x(a)),()=>{s(p())}),[s,a]);const l=()=>{o(e=>e+1)},m=()=>{o(e=>e>1?e-1:e)};return t.jsxs("div",{className:"bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen overflow-hidden",children:[(r==null?void 0:r.length)>0&&t.jsx(f,{media:r[0]}),t.jsx(h,{currentPage:a,error:c,loading:i,medias:r,onNextPage:l,onPreviousPage:m,totalPages:d})]})};export{b as default};