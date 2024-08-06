import{B as Ee,_ as we}from"./BalAsset-68194947.js";import{C as Pe}from"./Col3Layout-c3f8cef0.js";import{u as $e}from"./usePoolQuery-da6fa219.js";import{ab as Z,ac as re,ad as Ve,ae as De,af as xe,ag as Ie,d as E,x as U,k as ue,c as k,o as s,B as v,w as h,b as o,t as i,f as T,e as S,C as c,a as g,a4 as z,a3 as x,a8 as ee,a5 as de,_ as Q,l as oe,y as q,G as F,F as D,H as _e,r as ve,ah as Ce,ai as Se,aj as ce,ak as Me,E as V,al as Ne,u as me,am as Fe,an as Oe,ao as Re,ap as Ke,aq as J,ar as ne,as as je,a1 as qe,a2 as fe,U as O,at as We,au as He,a7 as Le,av as te,aw as be,ax as ge,ay as Xe,az as Te,aA as Ue,j as ze,aB as Qe,aC as Ge}from"./index-60943df8.js";import{u as Ye}from"./useBreakpoints-76e5f77c.js";import{_ as Je}from"./BalAccordion.vue_vue_type_script_setup_true_lang-cc7bb03c.js";import{_ as Ze}from"./MyVeBAL.vue_vue_type_script_setup_true_lang-b25cf078.js";import{M as eo,a as oo,P as ie,I as to}from"./constants-5d025550.js";import{_ as lo}from"./BalCircle-528e0679.js";import{_ as ao}from"./BalAlert-7103ffb1.js";import{_ as no}from"./BalActionSteps.vue_vue_type_script_setup_true_lang-cd43f961.js";import{u as so,A as co}from"./useTokenApprovalActions-885c33f2.js";import{_ as io}from"./FeedbackCard.vue_vue_type_script_setup_true_lang-f0ae37aa.js";import{_ as ro}from"./BalTooltip.vue_vue_type_style_index_0_lang-8cf64573.js";import{_ as uo}from"./TokenInput.vue_vue_type_script_setup_true_lang-da11efe6.js";import{_ as mo}from"./BalTextInput-8696f087.js";import"./anime.es-37453147.js";import"./BalHStack.vue_vue_type_script_setup_true_lang-f88d7582.js";import"./helpers-7076a817.js";import"./SelectTokenModal-bd0cd63c.js";import"./validations-cc161b3f.js";import"./numeral-088ce989.js";function se(a,t){Z(2,arguments);var e=Ve(t),u=e*7;return re(a,u)}function ko(a){return Z(1,arguments),De(a).getDay()===4}function po(a,t){Z(2,arguments);var e=xe(a)-t;return e<=0&&(e+=7),Ie(a,e)}function _o(a){return Z(1,arguments),po(a,4)}const vo={class:"group flex justify-between items-center p-4 w-full rounded-xl"},fo={class:"group-hover:text-blue-500 transition-colors"},Lo={class:"p-4 border-t dark:border-gray-900"},bo={class:"text-secondary"},go={class:"text-sm steps"},To=["innerHTML"],ho=E({__name:"HowToLock",props:{lockablePool:{},lockablePoolTokenInfo:{}},setup(a){const t=a,{t:e}=U(),{networkSlug:u}=ue(),m=k(()=>[e("getVeBAL.howToLock.steps.lock",[t.lockablePoolTokenInfo.symbol]),e("getVeBAL.howToLock.earn.boost"),e("getVeBAL.howToLock.earn.voting")]);return(l,n)=>{const d=ee,_=de,p=Je;return s(),v(p,{class:"mt-4",showSectionBorder:!1,sections:[{title:l.$t("getVeBAL.howToLock.title"),id:"how-to-lock",handle:"how-to-lock-handle"}]},{"how-to-lock-handle":h(()=>[o("button",vo,[o("h6",fo,i(l.$t("getVeBAL.howToLock.title")),1),T(d,{name:"chevron-down",class:"text-blue-500 group-hover:text-pink-500 transition-colors"})])]),"how-to-lock":h(()=>[o("div",Lo,[o("div",bo,[o("ol",go,[o("li",null,[S(i(l.$t("getVeBAL.howToLock.steps.investPart1"))+" ",1),T(_,{tag:"router-link",to:{name:"add-liquidity",params:{networkSlug:c(u),id:l.lockablePool.id}},external:""},{default:h(()=>[S(i(l.lockablePoolTokenInfo.symbol),1)]),_:1},8,["to"]),S(" "+i(l.$t("getVeBAL.howToLock.steps.investPart2")),1)]),(s(!0),g(x,null,z(m.value,(r,f)=>(s(),g("li",{key:f,innerHTML:r},null,8,To))),128))])])])]),_:1},8,["sections"])}}});const pe=Q(ho,[["__scopeId","data-v-a3e7b1aa"]]),yo={class:"p-4 w-full border-b dark:border-gray-900"},Ao={class:"p-4 -mt-2"},Bo={class:"flex justify-between"},Eo={class:"flex justify-between text-secondary"},wo=E({__name:"LockableTokens",props:{lockablePool:{},lockablePoolTokenInfo:{},veBalLockInfo:{}},setup(a){const t=a,{balanceFor:e}=oe(),{fNum:u}=q(),{networkSlug:m}=ue(),l=k(()=>e(t.lockablePool.address)),n=k(()=>F(t.lockablePool.totalLiquidity).div(t.lockablePool.totalShares).times(l.value).toString());return(d,_)=>{const p=de,r=_e;return s(),v(r,{noPad:"",shadow:"none"},{default:h(()=>[o("div",yo,[o("h6",null,i(d.$t("getVeBAL.lockableTokens.title")),1)]),o("div",Ao,[o("div",Bo,[o("div",null,i(d.lockablePoolTokenInfo.symbol),1),o("div",null,i(c(u)(l.value,c(D).token)),1)]),o("div",Eo,[o("div",null,i(d.lockablePoolTokenInfo.name),1),o("div",null,i(c(u)(n.value,c(D).fiat)),1)]),T(p,{tag:"router-link",to:{name:"add-liquidity",params:{networkSlug:c(m),id:d.lockablePool.id}},external:"",class:"block mt-2 text-sm"},{default:h(()=>[S(i(d.$t("getVeBAL.lockableTokens.getMoreVeBAL",[d.lockablePoolTokenInfo.symbol])),1)]),_:1},8,["to"])])]),_:1})}}});var B=(a=>(a.CREATE_LOCK="createLock",a.EXTEND_LOCK="extendLock",a.INCREASE_LOCK="increaseLock",a))(B||{});const he=ve({lockAmount:"",lockEndDate:""});function Po(){he.lockAmount=""}function W(){return{...Ce(he),resetState:Po}}function $o(a){const{lockAmount:t}=W(),e=k(()=>F(t.value||"0").gt(0)),u=k(()=>{var l;return((l=a==null?void 0:a.value)==null?void 0:l.hasExistingLock)&&e.value}),m=k(()=>{var l;return(l=a==null?void 0:a.value)!=null&&l.hasExistingLock?F(a.value.lockedAmount).plus(t.value||"0").toString():t.value||"0"});return{isValidLockAmount:e,isIncreasedLockAmount:u,totalLpTokens:m}}function Vo(a){const t=re(a,oo),e=ko(t)?t:_o(t);return ce(e).getTime()}function Do(a){const t=Se(new Date),e=ce(Me(re(a!=null&&a.hasExistingLock?a.lockedEndDate:t,eo))).getTime(),u=Vo(t),{lockEndDate:m}=W(),l=k(()=>m.value===""?0:ce(new Date(m.value)).getTime()),n=k(()=>l.value>=e&&l.value<=u),d=k(()=>(a==null?void 0:a.hasExistingLock)&&n.value);return{todaysDate:t,minLockEndDateTimestamp:e,maxLockEndDateTimestamp:u,isValidLockEndDate:n,isExtendedLockEndDate:d}}const xo={class:"flex items-center"},Io={class:"ml-2"},Co=E({__name:"LockActions",props:{lockablePoolTokenInfo:{},lockAmount:{},lockEndDate:{},lockType:{},lockConfirmed:{type:Boolean},veBalLockInfo:{}},emits:["success"],setup(a,{emit:t}){const e=a,u=t,m=V(!0),l=ve(e.lockType.map(()=>({init:!1,confirming:!1,confirmed:!1,confirmedAt:""}))),{t:n}=U(),{networkConfig:d}=Ne(),{getProvider:_,explorerLinks:p,isMismatchedNetwork:r}=me(),{addTransaction:f}=Fe(),{txListener:w,getTxConfirmedAt:A}=Oe(),{fNum:I}=q(),{totalVotes:R,unallocatedVotes:P}=Re(),{networkSlug:M}=ue(),{getTokenApprovalActions:H}=so(),{refetch:G}=Ke(),Y=e.lockType.map((b,$)=>({label:n(`getVeBAL.previewModal.actions.${b}.label`,[J(new Date(e.lockEndDate),ie)]),loadingLabel:n(`getVeBAL.previewModal.actions.${b}.loadingLabel`),confirmingLabel:n(`getVeBAL.previewModal.actions.${b}.confirming`),action:()=>ye(b,$),stepTooltip:n(`getVeBAL.previewModal.actions.${b}.tooltip`)})),K=V([...Y]),L=k(()=>l.every(b=>b.confirmed)),C=k(()=>R!==P.value),N=k(()=>[{address:e.lockablePoolTokenInfo.address,amount:e.lockAmount}]);async function j(b,$,y){f({id:b.hash,type:"tx",action:$,summary:$===B.EXTEND_LOCK?n("transactionSummary.extendLock",[J(new Date(e.lockEndDate),ie)]):`${I(e.lockAmount,D.token)} ${e.lockablePoolTokenInfo.symbol}`,details:{lockAmount:e.lockAmount,lockEndDate:e.lockEndDate,lockType:$}}),l[y].confirmed=await w(b,{onTxConfirmed:async X=>{l[y].confirming=!1,l[y].receipt=X;const le=await A(X);l[y].confirmedAt=He(le),G()},onTxFailed:()=>{l[y].confirming=!1}})}async function ye(b,$){try{let y;if(l[$].init=!0,b===B.CREATE_LOCK)y=await ne.veBAL.createLock(_(),e.lockAmount,e.lockEndDate);else if(b===B.EXTEND_LOCK)y=await ne.veBAL.extendLock(_(),e.lockEndDate);else if(b===B.INCREASE_LOCK)y=await ne.veBAL.increaseLock(_(),e.lockAmount);else throw new Error("Unsupported lockType provided");return l[$].init=!1,l[$].confirming=!0,console.log("Receipt",y),j(y,b,$),y}catch(y){return je({error:y,context:{level:"fatal",extra:{lockType:b,props:e}}}),Promise.reject(y)}}return qe(L,()=>{L.value&&u("success",l)}),fe(async()=>{const b=await H({amountsToApprove:N.value,spender:d.addresses.veBAL,actionType:co.Locking,forceMax:!1});K.value.unshift(...b),m.value=!1}),(b,$)=>{const y=no,X=ee,le=de,ke=ao,Ae=Le;return s(),g("div",null,[L.value?(s(),g(x,{key:1},[(s(!0),g(x,null,z(l,(ae,Be)=>(s(),g("div",{key:Be,class:"flex justify-between items-center mt-4 text-sm text-gray-400 dark:text-gray-600"},[o("div",xo,[T(X,{name:"clock"}),o("span",Io,i(ae.confirmedAt),1)]),ae.receipt?(s(),v(le,{key:0,href:c(p).txLink(ae.receipt.transactionHash),external:"",noStyle:"",class:"group flex items-center"},{default:h(()=>[S(i(c(d).explorerName)+" ",1),T(X,{name:"arrow-up-right",size:"sm",class:"ml-px group-hover:text-pink-500 transition-colors"})]),_:2},1032,["href"])):O("",!0)]))),128)),b.lockConfirmed&&!b.veBalLockInfo.hasExistingLock?(s(),v(ke,{key:0,class:"mt-4",type:"tip",title:c(n)("getVeBAL.previewModal.firstVeBALReceived.title"),description:c(n)("getVeBAL.previewModal.firstVeBALReceived.description")},null,8,["title","description"])):C.value?(s(),v(ke,{key:1,class:"mt-4",type:"warning",title:c(n)("veBAL.liquidityMining.resubmit.hint.title"),description:c(n)("veBAL.liquidityMining.resubmit.hint.description")},null,8,["title","description"])):O("",!0),T(Ae,{tag:"router-link",to:{name:"vebal",params:{networkSlug:c(M)}},color:"gray",outline:"",block:"",class:"mt-4"},{default:h(()=>[S(i(b.$t("getVeBAL.previewModal.returnToVeBalPage")),1)]),_:1},8,["to"]),T(We,{name:"pop"},{default:h(()=>[T(io,{class:"mt-3"})]),_:1})],64)):(s(),v(y,{key:0,actions:K.value,isLoading:m.value,disabled:c(r),primaryActionType:"extendLock"},null,8,["actions","isLoading","disabled"]))])}}}),So={class:"container"},Mo={class:"flex justify-between items-center p-3"},No={class:"font-semibold"},Fo={class:"text-gray-400 dark:text-gray-600"},Oo={class:"grid grid-cols-2 gap-1"},Ro=E({__name:"LockAmount",props:{lockablePool:{},totalLpTokens:{}},setup(a){const t=a,{getToken:e}=oe(),{fNum:u}=q(),m=k(()=>t.lockablePool.tokens.map(n=>{const d=l(n.weight),_=n.symbol??e(n.address).symbol;return`${d} ${_}`}).join(" / "));function l(n){return u(n||"0",{style:"percent",maximumFractionDigits:0})}return(n,d)=>{const _=Ee;return s(),g("div",So,[o("div",Mo,[o("div",null,[o("div",No,i(n.$t("getVeBAL.previewModal.lpTokens",[c(u)(n.totalLpTokens,c(D).token)])),1),o("div",Fo,i(m.value),1)]),o("div",Oo,[(s(!0),g(x,null,z(n.lockablePool.tokensList,p=>(s(),v(_,{key:p,address:p,size:30},null,8,["address"]))),128))])])])}}});const Ko=Q(Ro,[["__scopeId","data-v-09d26ad6"]]),jo={class:"text-sm divide-y dark:divide-gray-900"},qo={class:"p-3 bg-gray-50 dark:bg-gray-700 rounded-t"},Wo={class:"p-3"},Ho={class:"mb-3 text-secondary"},Xo={class:"flex items-center mb-1 whitespace-nowrap"},Uo={class:"w-full table-fixed"},zo={class:"table-header-cell"},Qo={class:"table-header-cell"},Go={class:"table-body-cell"},Yo={class:"table-body-cell"},Jo=E({__name:"VeBalTooltipExplainer",props:{totalLpTokens:{},lockEndDate:{},expectedVeBalAmount:{}},setup(a){const{fNum:t}=q(),{veBalTokenInfo:e}=te(),{t:u}=U(),m=k(()=>{var l,n,d;return[{label:u("getVeBAL.lockForm.lockPeriods.1y"),value:`~1 ${(l=e.value)==null?void 0:l.symbol}`},{label:u("getVeBAL.lockForm.lockPeriods.6m"),value:`~0.5 ${(n=e.value)==null?void 0:n.symbol}`},{label:u("getVeBAL.lockForm.lockPeriods.3m"),value:`~0.25 ${(d=e.value)==null?void 0:d.symbol}`}]});return(l,n)=>{const d=ee,_=ro;return s(),v(_,{width:"72",noPad:"",class:"ml-2"},{activator:h(()=>[T(d,{name:"info",size:"sm",class:"text-secondary"})]),default:h(()=>{var p;return[o("div",jo,[o("div",qo,[o("h5",null,i(c(t)(l.expectedVeBalAmount,c(D).token))+" "+i((p=c(e))==null?void 0:p.symbol),1)]),o("div",Wo,[o("div",Ho,i(l.$t("getVeBAL.previewModal.summary.totalVotingEscrowTooltip.explainer")),1),o("div",Xo,[o("table",Uo,[o("thead",null,[o("tr",null,[o("th",zo,i(l.$t("getVeBAL.previewModal.summary.totalVotingEscrowTooltip.table.lockPeriod")),1),o("th",Qo,i(l.$t("getVeBAL.previewModal.summary.totalVotingEscrowTooltip.table.totalVeBAL")),1)])]),o("tbody",null,[(s(!0),g(x,null,z(m.value,(r,f)=>(s(),g("tr",{key:f},[o("td",Go,i(r.label),1),o("td",Yo,i(r.value),1)]))),128))])])])])])]}),_:1})}}});const Zo=Q(Jo,[["__scopeId","data-v-363ce41c"]]),et={class:"summary-table"},ot={class:"p-2"},tt={class:"p-2"},lt={class:"summary-item-row"},at={key:0,class:"summary-item-row"},nt={class:"summary-item-row"},st={class:"summary-item-row"},ct={class:"flex items-center"},it=E({__name:"LockSummary",props:{lockablePool:{},totalLpTokens:{},lockEndDate:{},lockAmount:{},expectedVeBalAmount:{},lockType:{},veBalLockInfo:{}},setup(a){const t=a,{fNum:e}=q(),{veBalTokenInfo:u}=te(),m=k(()=>F(t.lockablePool.totalLiquidity).div(t.lockablePool.totalShares)),l=k(()=>m.value.times(t.veBalLockInfo.lockedAmount).toString()),n=k(()=>m.value.times(t.lockAmount).toString()),d=k(()=>m.value.times(t.totalLpTokens).toString()),_=k(()=>t.lockType.length===1&&t.lockType.includes(B.EXTEND_LOCK)),p=k(()=>t.lockType.length===1&&t.lockType.includes(B.INCREASE_LOCK));return(r,f)=>{var w;return s(),g("div",et,[o("h6",ot,i(r.$t("getVeBAL.previewModal.summary.title")),1),o("div",tt,[o("div",lt,[o("div",null,i(_.value||p.value?r.$t("getVeBAL.previewModal.summary.totalAlreadyLocked"):r.$t("getVeBAL.previewModal.summary.totalToLock")),1),o("div",null,i(c(e)(p.value?l.value:d.value,c(D).fiat)),1)]),p.value?(s(),g("div",at,[o("div",null,i(r.$t("getVeBAL.previewModal.summary.increasedLockAmount")),1),o("div",null,i(c(e)(n.value,c(D).fiat)),1)])):O("",!0),o("div",nt,[o("div",null,i(_.value?r.$t("getVeBAL.previewModal.summary.newLockEndDate"):r.$t("getVeBAL.previewModal.summary.lockEndDate")),1),o("div",null,i(c(J)(new Date(r.lockEndDate),c(ie))),1)]),o("div",st,[o("div",null,i(r.$t("getVeBAL.previewModal.summary.totalVotingEscrow")),1),o("div",ct,[S(i(c(e)(r.expectedVeBalAmount,c(D).token))+" "+i((w=c(u))==null?void 0:w.symbol)+" ",1),T(Zo,{expectedVeBalAmount:r.expectedVeBalAmount,lockEndDate:r.lockEndDate,totalLpTokens:r.totalLpTokens},null,8,["expectedVeBalAmount","lockEndDate","totalLpTokens"])])])])])}}});const rt=Q(it,[["__scopeId","data-v-82615bd1"]]),ut={class:"flex items-center"},dt=E({__name:"LockPreviewModal",props:{lockablePool:{},lockablePoolTokenInfo:{},lockAmount:{},lockEndDate:{},lockType:{},veBalLockInfo:{},totalLpTokens:{}},emits:["close"],setup(a,{emit:t}){const e=a,u=t,m=V(!1),l=V(e.lockablePool),n=V(e.lockablePoolTokenInfo),d=V(e.lockAmount),_=V(e.lockEndDate),p=V(e.lockType),r=V(e.veBalLockInfo),f=V(e.totalLpTokens),w=be(f.value,_.value),{t:A}=U(),{refetch:I}=ge(),{resetState:R}=W(),P=k(()=>p.value.length===1?m.value?A(`getVeBAL.previewModal.titles.${p.value[0]}.confirmed`):A(`getVeBAL.previewModal.titles.${p.value[0]}.default`):m.value?A(`getVeBAL.previewModal.titles.${B.CREATE_LOCK}.confirmed`):A(`getVeBAL.previewModal.titles.${B.CREATE_LOCK}.default`));function M(){u("close")}function H(){m.value=!0,I(),R()}return(G,Y)=>{const K=ee,L=lo,C=Xe;return s(),v(C,{show:"",fireworks:m.value,onClose:M},{header:h(()=>[o("div",ut,[m.value?(s(),v(L,{key:0,size:"8",color:"green",class:"mr-2 text-white"},{default:h(()=>[T(K,{name:"check"})]),_:1})):O("",!0),o("h4",null,i(P.value),1)])]),default:h(()=>[T(Ko,{lockablePool:l.value,totalLpTokens:f.value},null,8,["lockablePool","totalLpTokens"]),T(rt,{lockablePool:l.value,totalLpTokens:f.value,lockAmount:d.value,lockEndDate:_.value,expectedVeBalAmount:c(w),lockType:p.value,veBalLockInfo:r.value},null,8,["lockablePool","totalLpTokens","lockAmount","lockEndDate","expectedVeBalAmount","lockType","veBalLockInfo"]),T(Co,{veBalLockInfo:r.value,lockConfirmed:m.value,lockAmount:d.value,lockEndDate:_.value,lockType:p.value,lockablePoolTokenInfo:n.value,class:"mt-4",onSuccess:H},null,8,["veBalLockInfo","lockConfirmed","lockAmount","lockEndDate","lockType","lockablePoolTokenInfo"])]),_:1},8,["fireworks"])}}}),mt={class:"mb-6"},kt={class:"pb-2 font-semibold"},pt=E({__name:"LockAmount",props:{lockablePool:{},lockablePoolTokenInfo:{}},setup(a){const t=a,{lockAmount:e}=W(),u=k(()=>F(t.lockablePool.totalLiquidity).div(t.lockablePool.totalShares).times(e.value).toString());return(m,l)=>(s(),g("div",mt,[o("div",null,[o("p",kt,i(m.$t("getVeBAL.lockForm.lockAmount.title")),1)]),T(uo,{amount:c(e),"onUpdate:amount":l[0]||(l[0]=n=>Te(e)?e.value=n:null),address:m.lockablePoolTokenInfo.address,tokenValue:u.value,fixedToken:"",name:"lockAmount"},null,8,["amount","address","tokenValue"])]))}}),_t={class:"mb-6"},vt={class:"pb-2 font-semibold"},ft={class:"flex px-1 mt-2 text-sm text-secondary"},Lt=["onClick"],bt=E({__name:"LockEndDate",props:{minLockEndDateTimestamp:{},maxLockEndDateTimestamp:{},veBalLockInfo:{default:null}},setup(a){const{t}=U(),e=a,{lockEndDate:u}=W(),m=k(()=>[{label:t("getVeBAL.lockForm.lockPeriods.2w"),action:()=>l(e.minLockEndDateTimestamp)},{label:t("getVeBAL.lockForm.lockPeriods.1m"),action:()=>l(se(e.minLockEndDateTimestamp,4).getTime())},{label:t("getVeBAL.lockForm.lockPeriods.3m"),action:()=>l(se(e.minLockEndDateTimestamp,12).getTime())},{label:t("getVeBAL.lockForm.lockPeriods.6m"),action:()=>l(se(e.minLockEndDateTimestamp,24).getTime())},{label:t("getVeBAL.lockForm.lockPeriods.1y"),action:()=>{u.value=n(e.maxLockEndDateTimestamp)}}]);fe(()=>{var d;u.value=(d=e.veBalLockInfo)!=null&&d.hasExistingLock?n(e.veBalLockInfo.lockedEndDate):n(e.maxLockEndDateTimestamp)});function l(d){u.value=n(Math.min(d,e.maxLockEndDateTimestamp))}function n(d){return J(d,to)}return(d,_)=>{const p=mo;return s(),g("div",_t,[o("div",null,[o("p",vt,i(d.$t("getVeBAL.lockForm.lockEndDate.title")),1)]),T(p,{modelValue:c(u),"onUpdate:modelValue":_[0]||(_[0]=r=>Te(u)?u.value=r:null),name:"lockEndDate",type:"date",min:n(d.minLockEndDateTimestamp),max:n(d.maxLockEndDateTimestamp),step:"7"},null,8,["modelValue","min","max"]),o("div",ft,[(s(!0),g(x,null,z(m.value,(r,f)=>(s(),g("div",{key:f,class:"mr-3 hover:text-pink-500 focus:text-pink-500 cursor-pointer",onClick:r.action}," ~"+i(r.label),9,Lt))),128))])])}}}),gt={class:"container"},Tt={class:"row"},ht=E({__name:"Summary",props:{expectedVeBalAmount:{}},setup(a){const{fNum:t}=q(),{veBalTokenInfo:e}=te();return(u,m)=>{var l;return s(),g("div",gt,[o("div",Tt,[o("div",null,i(u.$t("getVeBAL.lockForm.summary.receive.title")),1),o("div",null,i(u.expectedVeBalAmount!=null?c(t)(u.expectedVeBalAmount,c(D).token):"-")+" "+i((l=c(e))==null?void 0:l.symbol),1)])])}}});const yt=Q(ht,[["__scopeId","data-v-023b74e8"]]),At={class:"w-full"},Bt={class:"pb-1.5 text-xs leading-none text-secondary"},Et={class:"flex justify-between items-center"},wt={class:"mt-6"},Pt=E({__name:"VeBalForm",props:{lockablePool:{},lockablePoolTokenInfo:{},veBalLockInfo:{}},setup(a){const t=a,e=V(!1),{lockEndDate:u,lockAmount:m}=W(),{isWalletReady:l,startConnectWithInjectedProvider:n,isMismatchedNetwork:d}=me(),{isValidLockAmount:_,isIncreasedLockAmount:p,totalLpTokens:r}=$o(Ue(t,"veBalLockInfo")),{minLockEndDateTimestamp:f,maxLockEndDateTimestamp:w,isValidLockEndDate:A,isExtendedLockEndDate:I}=Do(t.veBalLockInfo),{balanceFor:R}=oe(),P=k(()=>R(t.lockablePool.address)),M=k(()=>{var N,j;if(d.value)return!0;const L=F(P.value||"0");return F(m.value||"0").isGreaterThan(L)?!0:(N=t.veBalLockInfo)!=null&&N.hasExistingLock&&!((j=t.veBalLockInfo)!=null&&j.isExpired)?!p.value&&!I.value:!L.gt(0)||!_.value||!A.value}),H=k(()=>M.value?"0":be(r.value,u.value)),G=k(()=>{var L,C;if((L=t.veBalLockInfo)!=null&&L.hasExistingLock&&!((C=t.veBalLockInfo)!=null&&C.isExpired)){if(p.value&&I.value)return[B.INCREASE_LOCK,B.EXTEND_LOCK];if(I.value)return[B.EXTEND_LOCK];if(p.value)return[B.INCREASE_LOCK]}return[B.CREATE_LOCK]});function Y(){e.value=!1}function K(){M.value||(e.value=!0)}return(L,C)=>{const N=Le,j=_e;return s(),g(x,null,[T(j,{shadow:"xl",exposeOverflow:"",noBorder:""},{header:h(()=>[o("div",At,[o("div",Bt,i(c(ze).network.chainName),1),o("div",Et,[o("h4",null,i(L.$t("getVeBAL.lockForm.title")),1)])])]),default:h(()=>[T(pt,{lockablePool:L.lockablePool,lockablePoolTokenInfo:L.lockablePoolTokenInfo},null,8,["lockablePool","lockablePoolTokenInfo"]),T(bt,{minLockEndDateTimestamp:c(f),maxLockEndDateTimestamp:c(w),veBalLockInfo:L.veBalLockInfo},null,8,["minLockEndDateTimestamp","maxLockEndDateTimestamp","veBalLockInfo"]),T(yt,{expectedVeBalAmount:H.value},null,8,["expectedVeBalAmount"]),o("div",wt,[c(l)?(s(),v(N,{key:1,color:"gradient",block:"",disabled:M.value,onClick:K},{default:h(()=>[S(i(L.$t("preview")),1)]),_:1},8,["disabled"])):(s(),v(N,{key:0,label:L.$t("connectWallet"),color:"gradient",block:"",onClick:c(n)},null,8,["label","onClick"]))])]),_:1}),(s(),v(Qe,{to:"#modal"},[e.value&&L.veBalLockInfo?(s(),v(dt,{key:0,lockablePool:L.lockablePool,lockablePoolTokenInfo:L.lockablePoolTokenInfo,lockAmount:c(m),lockEndDate:c(u),lockType:G.value,veBalLockInfo:L.veBalLockInfo,totalLpTokens:c(r),onClose:Y},null,8,["lockablePool","lockablePoolTokenInfo","lockAmount","lockEndDate","lockType","veBalLockInfo","totalLpTokens"])):O("",!0)]))],64)}}}),$t=E({__name:"LockForm",setup(a){const{getToken:t}=oe(),{isWalletReady:e}=me(),{lockablePoolId:u}=te(),{isDesktop:m,isMobile:l}=Ye(),n=$e(u.value),d=ge(),_=k(()=>n.isLoading.value),p=k(()=>d.isLoading.value),r=k(()=>n.data.value),f=k(()=>r.value!=null?t(r.value.address):null),w=k(()=>d.data.value),A=k(()=>e.value?_.value||p.value:_.value);return(I,R)=>{const P=we;return s(),v(Pe,{offsetGutters:""},{gutterLeft:h(()=>[A.value||!r.value||!f.value?(s(),v(P,{key:0,class:"h-36"})):(s(),v(wo,{key:1,lockablePool:r.value,lockablePoolTokenInfo:f.value},null,8,["lockablePool","lockablePoolTokenInfo"])),c(m)?(s(),g(x,{key:2},[A.value||!r.value||!f.value?(s(),v(P,{key:0,class:"mt-4 h-12"})):(s(),v(pe,{key:1,lockablePool:r.value,lockablePoolTokenInfo:f.value},null,8,["lockablePool","lockablePoolTokenInfo"]))],64)):O("",!0)]),gutterRight:h(()=>[A.value?(s(),v(P,{key:0,class:"h-64"})):(s(),v(Ze,{key:1,veBalLockInfo:w.value},null,8,["veBalLockInfo"])),c(l)?(s(),g(x,{key:2},[A.value||!r.value||!f.value?(s(),v(P,{key:0,class:"mt-4 h-12"})):(s(),v(pe,{key:1,lockablePool:r.value,lockablePoolTokenInfo:f.value},null,8,["lockablePool","lockablePoolTokenInfo"]))],64)):O("",!0)]),default:h(()=>[A.value||!r.value||!f.value?(s(),v(P,{key:0,class:"h-96"})):(s(),v(Pt,{key:1,lockablePool:r.value,lockablePoolTokenInfo:f.value,veBalLockInfo:w.value},null,8,["lockablePool","lockablePoolTokenInfo","veBalLockInfo"]))]),_:1})}}}),Vt={key:1,class:"text-center"},Dt={class:"text-lg font-semibold"},el=E({__name:"get-vebal",setup(a){return(t,e)=>c(Ge)?(s(),v($t,{key:0})):(s(),g("div",Vt,[o("div",Dt,i(t.$t("veBAL.notSupported.title")),1),o("div",null,i(t.$t("veBAL.notSupported.description")),1)]))}});export{el as default};
//# sourceMappingURL=get-vebal-efef6b24.js.map
