import{E as d,bc as c,c9 as m,c as n}from"./index-60943df8.js";function p(){const e=d(window.innerWidth),i=()=>e.value=window.innerWidth;c(()=>window.addEventListener("resize",i)),m(()=>window.removeEventListener("resize",i));const s=n(()=>e.value<440?"xs":e.value<640?"sm":e.value<748?"md":e.value<1024?"lg":e.value<1280?"xl":"2xl"),t=n(()=>e.value),o=n(()=>["xs","sm","md","lg"].includes(s.value)),u=n(()=>["xs","sm","md"].includes(s.value)),r=n(()=>["xs","sm","md","lg"].includes(s.value)),l=n(()=>["xl","2xl"].includes(s.value)),a=n(()=>["xs","sm"].includes(s.value));return{width:t,bp:s,isMobile:r,isDesktop:l,upToLargeBreakpoint:o,upToMediumBreakpoint:u,upToSmallBreakpoint:a}}export{p as u};
//# sourceMappingURL=useBreakpoints-76e5f77c.js.map
