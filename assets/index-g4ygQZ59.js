import{r as o,j as s,M as n,L as c}from"./index-_3Uvv5pk.js";import{M as x,E as m}from"./index-CSfmTKHi.js";const p=({medias:t,currentPage:e,totalPages:i,onNextPage:d,onPreviousPage:r})=>(console.log(i," et current : ",e),s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 m-auto justify-center ",children:t.map(a=>s.jsx(x,{media:a},a.id))}),s.jsxs("div",{className:"flex justify-between m-4",children:[s.jsx("button",{"aria-label":"Previous",className:"bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50",disabled:e===1,onClick:r,children:"Previous"}),s.jsxs("span",{className:"text-white",children:[s.jsx(n,{id:"page"})," ",e," / ",i]}),s.jsx("button",{"aria-label":"Next",className:"bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50",disabled:e===i,onClick:d,children:"Next"})]})]})),j=o.memo(p),g=({loading:t,error:e,medias:i,currentPage:d,totalPages:r,onNextPage:a,onPreviousPage:l})=>t?s.jsx(c,{}):e?s.jsx(m,{error:e}):s.jsx(j,{currentPage:d,medias:i,onNextPage:a,onPreviousPage:l,totalPages:r});export{g as D};
