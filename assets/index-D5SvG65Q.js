import{r as n,t as S,v as j,w as E,x as P,k as D,u as w,y as N,s as v,j as s}from"./index-CCxDAZXJ.js";import{D as A}from"./index-B5Y4U2ED.js";import{a as C}from"./axios-BdNdhDnj.js";const V=(e,a)=>{const[r,c]=n.useState(e);return n.useEffect(()=>{const i=setTimeout(()=>{c(e)},a);return()=>{clearTimeout(i)}},[e,a]),r},_="https://api.themoviedb.org/3/",I="92b418e837b833be308bbfb1fb2aca1e",U=(e,a=1)=>async r=>{r(S());try{const c=await C.get(`${_}search/multi?api_key=${I}&query=${e}&language=en-US&page=${a}`);r(j(c.data))}catch(c){console.log("error when fetching movies : ",c),r(E())}},k=()=>{const[e,a]=P(),[r,c]=n.useState(()=>e.get("search")||""),[i,u]=n.useState(1),{resultSearch:h,loading:g,error:m,totalResults:d}=D(t=>t.search),l=w(),f=N(),o=V(r,1500);n.useEffect(()=>{o?a({search:o}):(e.delete("search"),a(e),l(v()))},[o,e,a,l]),n.useEffect(()=>{o&&l(U(o,i))},[o,i,l]);const p=()=>{u(t=>t+1)},b=()=>{u(t=>t>1?t-1:t)},x=t=>{const y=t.target.value;u(1),c(y)};return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"bg-gradient-to-b from-gray-900 to-gray-800 p-4 flex items-start justify-center",children:s.jsx("input",{className:"bg-gradient-to-b from-gray-900 to-gray-800 mt-10 px-4 py-2 w-1/2 md:w-1/3 border border-gray-300 rounded-md shadow-md text-white",onChange:x,placeholder:f.formatMessage({id:"searchPlaceholder"}),type:"text",value:r})}),s.jsx("div",{className:"bg-gradient-to-b from-gray-900 to-gray-800 text-white py-2 items-start justify-center pl-3",children:d===0?s.jsx("p",{children:"no elements founds"}):s.jsxs("p",{children:[d," elements founds"]})}),s.jsx("div",{className:"bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen p-4",children:(h==null?void 0:h.length)>0&&s.jsx(A,{currentPage:i,error:m,loading:g,medias:h,onNextPage:p,onPreviousPage:b})})]})};export{k as default};
