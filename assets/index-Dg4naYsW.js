import{r as n,m as P,n as E,o as D,p as N,k as w,u as A,q as M,l as _,j as e,M as m}from"./index-CAmcdjXB.js";import{D as v}from"./index-uvh1gCM0.js";import{a as C,T as F}from"./index-C-swCT_t.js";const I=(a,s)=>{const[r,c]=n.useState(a);return n.useEffect(()=>{const i=setTimeout(()=>{c(a)},s);return()=>{clearTimeout(i)}},[a,s]),r},V="92b418e837b833be308bbfb1fb2aca1e",T=(a,s=1)=>async r=>{r(P());try{const c=await C.get(`${F}/search/multi?api_key=${V}&query=${a}&language=en-US&page=${s}`);r(E(c.data))}catch(c){console.log("error when fetching movies : ",c),r(D())}},R=()=>{const[a,s]=N(),[r,c]=n.useState(()=>a.get("search")||""),[i,l]=n.useState(1),{resultSearch:d,loading:g,error:f,totalResults:u,totalPages:p}=w(t=>t.search),h=A(),x=M(),o=I(r,1500);n.useEffect(()=>{o?s({search:o}):(a.delete("search"),s(a),h(_()))},[o,a,s,h]),n.useEffect(()=>{o&&h(T(o,i))},[o,i,h]);const b=()=>{l(t=>t+1)},y=()=>{l(t=>t>1?t-1:t)},S=t=>{const j=t.target.value;l(1),c(j)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-gradient-to-b from-gray-900 to-gray-800 p-4 flex items-start justify-center",children:e.jsx("input",{className:"bg-gradient-to-b from-gray-900 to-gray-800 mt-10 px-4 py-2 w-1/2 md:w-1/3 border border-gray-300 rounded-md shadow-md text-white",onChange:S,placeholder:x.formatMessage({id:"searchPlaceholder"}),type:"text",value:r})}),e.jsx("div",{className:"bg-gradient-to-b from-gray-900 to-gray-800 text-white py-2 items-start justify-center pl-3",children:u===0?e.jsx("span",{children:e.jsx(m,{id:"noItemFound"})}):e.jsxs("span",{children:[u," ",e.jsx(m,{id:"itemsFound"})]})}),e.jsx("div",{className:"bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen p-4",children:(d==null?void 0:d.length)>0&&e.jsx(v,{currentPage:i,error:f,loading:g,medias:d,onNextPage:b,onPreviousPage:y,totalPages:p})})]})};export{R as default};
