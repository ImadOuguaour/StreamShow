import{o as g,p as h,q as l,u as m,k as p,r as c,s as u,j as o}from"./index-DXRWPTGV.js";import{F as v}from"./index-BxEGyihJ.js";import{D as b}from"./index-Bpj3S85c.js";import{a as x}from"./axios-TjGalm48.js";const P="https://api.themoviedb.org/3/",T="92b418e837b833be308bbfb1fb2aca1e",y=(t=1)=>async e=>{e(g());try{const a=await x.get(`${P}discover/tv?api_key=${T}&page=${t}`);e(h(a.data.results))}catch(a){console.log("error when fetching movies : ",a),e(l())}},w=()=>{const t=m(),{tv:e,loadingTv:a,errorTv:i}=p(s=>s.series),[r,n]=c.useState(1);c.useEffect(()=>(t(y(r)),()=>{t(u())}),[t,r]);const d=()=>{n(s=>s+1)},f=()=>{n(s=>s>1?s-1:s)};return o.jsxs("div",{className:"bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen overflow-hidden",children:[(e==null?void 0:e.length)>0&&o.jsx(v,{media:e[0]}),o.jsx(b,{currentPage:r,error:i,loading:a,medias:e,onNextPage:d,onPreviousPage:f})]})};export{w as default};