import{d as $,E as g,x as W,y as D,l as E,u as U,a2 as V,fN as x,a1 as z,F as v,G as k,o as A,B as G,w as r,f as t,b as d,t as B,C as f,cc as H,P,n as M,j as O,bv as Y,H as J,a as K,aY as Q,e as y,a5 as R}from"./index-60943df8.js";import{_ as X}from"./BalTable.vue_vue_type_style_index_0_lang-bf21b918.js";import{B as Z}from"./BalAsset-68194947.js";import{u as ee}from"./useBreakpoints-76e5f77c.js";import{v as C}from"./vault.service-6d069f2c.js";import{_ as ae}from"./TxActionBtn.vue_vue_type_script_setup_true_lang-27990a4e.js";import"./constants-dee7c074.js";const ne={class:"flex items-center py-4 px-6"},se={class:"ml-2"},te={class:"flex justify-end py-4 px-6"},oe=$({__name:"InternalBalancesTable",setup(F){const o=g([]),c=g(!0),{t:i}=W(),{upToLargeBreakpoint:m}=ee(),{fNum:h}=D(),{priceFor:L,getToken:N,tokens:S}=E(),{account:p}=U();function T(e){const a=o.value.find(_=>_.address===e),s=H((a==null?void 0:a.balance)||"0",a==null?void 0:a.decimals).toString();return()=>C.manageUserBalance({kind:1,asset:e,amount:s,sender:p.value,recipient:p.value})}async function w(){const e=Object.keys(S.value),u=await C.getInternalBalance(p.value,e),a=e.map((s,_)=>{const n=N(s),l=P(u[_],n.decimals),b=L(s),j=k(l).times(b).toString();return k(l).lte(0)||!n.decimals&&!n.name&&!n.symbol?null:{...n,balance:l,price:b,value:j}}).filter(s=>s);o.value=M.orderBy(a,["value","balance"],["desc","desc"])}function q(e){const u=O.network.tokens.DisableInternalBalanceWithdrawals;return!!u&&Y(u,e)}V(async()=>{p.value?x(w,c):c.value=!1}),z(p,async e=>{e?x(w,c):(o.value=[],c.value=!1)});const I=g([{name:"Token",id:"token",accessor:"token",Cell:"tokenColumnCell",width:475,noGrow:!0},{name:i("balance"),id:"Balance",align:"right",width:150,accessor:({balance:e})=>`${h(e,v.token)}`},{name:i("value"),id:"value",align:"right",width:150,accessor:({value:e})=>k(e).eq(0)?"-":h(e,v.fiat)},{name:"",id:"withdraw",align:"right",accessor:"withdraw",Cell:"withdrawColumnCell",width:150}]);return(e,u)=>{const a=Z,s=X,_=J;return A(),G(_,{shadow:"lg",square:f(m),noBorder:f(m),noPad:""},{default:r(()=>[t(s,{columns:I.value,data:o.value,skeletonClass:"h-64",square:f(m),isLoading:c.value},{tokenColumnCell:r(({symbol:n,address:l})=>[d("div",ne,[t(a,{address:l},null,8,["address"]),d("span",se,B(n),1)])]),withdrawColumnCell:r(({address:n,value:l})=>[d("div",te,[t(ae,{label:e.$t("transactionAction.withdraw"),color:"gradient",size:"sm",actionFn:T(n),action:"withdraw",summary:e.$t("transactionSummary.withdrawFromBalance",[f(h)(l,f(v).fiat)]),confirmingLabel:`${e.$t("withdrawing")}...`,disabled:q(n),onConfirmed:w},null,8,["label","actionFn","summary","confirmingLabel","disabled"])])]),_:1},8,["columns","data","square","isLoading"])]),_:1},8,["square","noBorder"])}}}),le={class:"xl:container xl:px-4 pt-10 md:pt-12 xl:mx-auto"},re={class:"px-4 xl:px-0"},ce={class:"px-4 lg:px-0 mt-4 max-w-3xl text-sm text-gray-500"},he=$({__name:"balances",setup(F){return(o,c)=>{const i=Q,m=R;return A(),K("div",le,[t(i,{vertical:""},{default:r(()=>[d("div",re,[t(i,{horizontal:"",justify:"between",align:"center"},{default:r(()=>[d("h3",null,B(o.$t("pages.balances.title")),1)]),_:1})]),t(i,{vertical:"",spacing:"2xl"},{default:r(()=>[t(oe)]),_:1}),d("p",ce,[y(B(o.$t("pages.balances.eulerHack"))+" ",1),t(m,{href:"https://redemptions.euler.finance/",external:""},{default:r(()=>[y("https://redemptions.euler.finance/")]),_:1})])]),_:1})])}}});export{he as default};
//# sourceMappingURL=balances-dbcb3da6.js.map
