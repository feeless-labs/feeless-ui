import{d as f,av as v,y as L,c as k,G as p,o as y,B as g,w as h,b as e,t as o,C as s,F as A,aq as V,H as b}from"./index-60943df8.js";import{P as x}from"./constants-5d025550.js";const I={class:"p-4 w-full border-b dark:border-gray-900"},E={class:"flex justify-center items-center p-10 -mt-2"},w={class:"text-2xl font-semibold"},D={class:"flex justify-center border-t dark:border-gray-900"},F={class:"p-2 w-1/2 text-center border-r dark:border-gray-900"},T={class:"text-gray-400"},C={class:"p-3 w-1/2 text-center"},N={class:"text-gray-400"},j=f({__name:"MyVeBAL",props:{veBalLockInfo:{}},setup(u){const a=u,{veBalBalance:n,veBalTokenInfo:m}=v(),{fNum:r}=L(),B=k(()=>{if(a.veBalLockInfo!=null){const t=p(a.veBalLockInfo.totalSupply);if(t.gt(0))return p(n.value).div(t).toString()}return"0"});return(t,S)=>{const _=b;return y(),g(_,{noPad:"",shadow:"none"},{default:h(()=>{var c,l,i,d;return[e("div",I,[e("h6",null,o(t.$t("getVeBAL.myVeBAL.title")),1)]),e("div",E,[e("div",w,o(s(r)(s(n),s(A).token))+" "+o((c=s(m))==null?void 0:c.symbol),1)]),e("div",D,[e("div",F,[e("div",null,o((l=t.veBalLockInfo)!=null&&l.hasExistingLock?s(r)(B.value,{style:"percent",maximumFractionDigits:4}):"-"),1),e("div",T,o(t.$t("getVeBAL.myVeBAL.percentVeBAL")),1)]),e("div",C,[e("div",null,o((i=a.veBalLockInfo)!=null&&i.hasExistingLock?s(V)(a.veBalLockInfo.lockedEndDate,s(x)):"-"),1),e("div",N,o((d=a.veBalLockInfo)!=null&&d.isExpired?t.$t("getVeBAL.myVeBAL.expiredOn"):t.$t("getVeBAL.myVeBAL.lockedEndDate")),1)])])]}),_:1})}}});export{j as _};
//# sourceMappingURL=MyVeBAL.vue_vue_type_script_setup_true_lang-b25cf078.js.map
