import{j as s,L as l}from"./index-CCxDAZXJ.js";import{M as n,E as o}from"./axios-BdNdhDnj.js";const c=({medias:t,currentPage:e,onNextPage:r,onPreviousPage:a})=>s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 m-auto justify-center ",children:t.map(i=>s.jsx(n,{media:i},i.id))}),s.jsxs("div",{className:"flex justify-between m-4",children:[s.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50",disabled:e===1,onClick:a,children:"Previous"}),s.jsxs("span",{className:"text-white",children:["Page ",e]}),s.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 rounded",onClick:r,children:"Next"})]})]}),j=({loading:t,error:e,medias:r,currentPage:a,onNextPage:i,onPreviousPage:d})=>t?s.jsx(l,{}):e?s.jsx(o,{error:e}):s.jsx(c,{currentPage:a,medias:r,onNextPage:i,onPreviousPage:d});export{j as D};
