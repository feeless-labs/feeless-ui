import{d as H,o as k,B as $,w as i,aD as we,U as R,aE as ae,C as e,a8 as U,E as P,av as Be,a as E,b as g,f as s,e as V,t as L,n as le,aB as Ce,z as Le,aF as Ae,a7 as re,aG as Fe,x as $e,aH as X,aI as de,a4 as q,a3 as G,a5 as Ie,H as ze,_ as Ee,l as ie,k as ne,aJ as Ne,a1 as D,aK as Re,aL as Ve,j as je,aM as oe,aN as ke,aO as De,aP as Me,aQ as se,Q as qe,az as W,G as pe,c as N,X as Ge,aR as He,aS as I,r as Oe,a2 as Qe,aT as Xe,aU as me,aV as We,aW as Ue,aX as _e,D as Ke,aY as Ye,aZ as fe,at as Je,a_ as Ze,a$ as z}from"./index-60943df8.js";import{_ as ve}from"./BalVStack.vue_vue_type_script_setup_true_lang-a25ce916.js";import{c as et,a as tt,_ as he}from"./BalHStack.vue_vue_type_script_setup_true_lang-f88d7582.js";import{B as ot}from"./BalAsset-68194947.js";import{S as st}from"./SelectTokenModal-bd0cd63c.js";import{u as be}from"./useBreakpoints-76e5f77c.js";import{_ as at,a as lt}from"./UserInvestedInAffectedPoolAlert.vue_vue_type_script_setup_true_lang-3926eecf.js";import{u as nt}from"./usePoolFilters-25c0237c.js";import{_ as rt}from"./BalPopover-5c2abaf0.js";import{_ as it}from"./BalCheckbox-acca24cf.js";import{_ as ct}from"./BalText.vue_vue_type_script_setup_true_lang-595463f4.js";import"./BalTextInput-8696f087.js";import"./helpers-7076a817.js";import"./anime.es-37453147.js";import"./BalTable.vue_vue_type_style_index_0_lang-bf21b918.js";import"./BalTooltip.vue_vue_type_style_index_0_lang-8cf64573.js";import"./BalAssetSet-c1957457.js";import"./constants-5d025550.js";import"./APRTooltip.vue_vue_type_script_setup_true_lang-7ca94d25.js";import"./useDisabledJoinPool-1947dad7.js";import"./TokenPills.vue_vue_type_script_setup_true_lang-ee78290c.js";import"./tokens_black-ddc115cd.js";import"./BalChip-810690c3.js";import"./BalChipNew.vue_vue_type_script_setup_true_lang-42797145.js";import"./PoolWarningTooltip.vue_vue_type_script_setup_true_lang-d116052e.js";import"./PoolFeatureChip.vue_vue_type_script_setup_true_lang-913aa74f.js";import"./BalAlert-7103ffb1.js";const ut=H({__name:"BalTag",props:{color:{},size:{},closeable:{type:Boolean},iconSize:{default:"xs"}},emits:["closed"],setup(v,{emit:l}){const T=tt("flex flex-row items-center font-medium rounded-full",{variants:{color:{blue:"bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-600 text-blue-500 dark:text-blue-300"},size:{md:"shadow-sm text-sm py-1 px-2 space-x-1"}},defaultVariants:{color:"blue",size:"md"}}),b=l;return(p,x)=>{const u=U,n=he;return k(),$(n,{class:ae(e(et)(e(T)({color:p.color,size:p.size})))},{default:i(()=>[we(p.$slots,"default"),p.closeable?(k(),$(u,{key:0,name:"x",size:p.iconSize,class:"cursor-pointer",onClick:x[0]||(x[0]=d=>b("closed"))},null,8,["size"])):R("",!0)]),_:3},8,["class"])}}}),dt={class:"flex flex-wrap gap-x-6 gap-y-3 items-stretch"},pt=H({__name:"TokenSearchInput",props:{modelValue:{default:()=>[]}},emits:["add","remove"],setup(v,{emit:l}){const T=l,b=P(!1),{veBalTokenInfo:p}=Be(),{upToMediumBreakpoint:x}=be();function u(d){let _=d;Le(d)===Ae&&(_=Fe),T("add",_)}function n(){b.value=!0}return(d,_)=>{var c;const h=U,f=re;return k(),E("div",null,[g("div",dt,[s(f,{color:"white",size:"sm",block:e(x),justifyContent:"between",onClick:n},{default:i(()=>[s(h,{name:"search",size:"sm",class:"mr-2"}),V(" "+L(d.$t("filterByToken")),1)]),_:1},8,["block"])]),(k(),$(Ce,{to:"#modal"},[b.value?(k(),$(st,{key:0,excludedTokens:e(le.compact)([...d.modelValue,(c=e(p))==null?void 0:c.address]),onClose:_[0]||(_[0]=S=>b.value=!1),onSelect:u},null,8,["excludedTokens"])):R("",!0)]))])}}}),mt={class:"mb-4"},_t={class:"grid grid-cols-12 gap-4"},ft={class:"text-sm leading-5"},gt={class:"text-sm font-medium"},kt=H({__name:"FeaturedProtocols",setup(v){const{t:l}=$e(),T=[{title:"Xave",description:l("featuredProtocols.Xave.description"),linkText:l("featuredProtocols.Xave.linkText"),imgSrc:"/images/banners/xave.jpg",link:X.Xave.Home},{title:"Fjord Foundry",description:l("featuredProtocols.Copper.description"),linkText:l("featuredProtocols.Copper.linkText"),imgSrc:"/images/banners/fjord.png",link:X.Copper.Home},{title:"Gyroscope",description:l("featuredProtocols.Gyroscope.description"),linkText:l("featuredProtocols.Gyroscope.linkText"),imgSrc:"/images/banners/gyroscope.jpg",link:X.Gyroscope.Home},{title:"Beethoven X",description:l("featuredProtocols.Beets.description"),linkText:l("featuredProtocols.Beets.linkText"),imgSrc:"/images/banners/beets.jpg",link:X.Beets.Home}];return(b,p)=>{const x=U,u=Ie,n=ze;return p[0]||(de(-1),(p[0]=g("div",{class:"featured-protocols"},[g("h3",mt,L(b.$t("featuredProtocols.title")),1),g("div",_t,[(k(),E(G,null,q(T,({title:d,imgSrc:_,description:h,linkText:f,link:c})=>g("div",{key:d,class:"col-span-12 xs:col-span-6 lg:col-span-3"},[s(n,{title:d,imgSrc:_,class:"hover:shadow-xl transition-shadow",hFull:"",growContent:""},{footer:i(()=>[s(u,{href:c,external:""},{default:i(()=>[g("span",gt,L(f),1),s(x,{name:"arrow-up-right",size:"sm",class:"relative top-0.5 ml-0.5"})]),_:2},1032,["href"])]),default:i(()=>[g("p",ft,L(h),1)]),_:2},1032,["title","imgSrc"])])),64))])])).cacheIndex=0,de(1),p[0])}}});const vt=Ee(kt,[["__scopeId","data-v-ae5fc1b9"]]);function ht(v,l={enabled:!0},T=!1){const{injectTokens:b,tokens:p}=ie(),{networkId:x}=ne();let u=n();function n(){const t=Ne();return new t(_(),{timeout:30*1e3})}function d(){return{fetch:async t=>{console.assert("start to request pools");const r=await Ve.pools.get(h(t));console.assert("number of pools:"+r.length);const a=new Me(r);let o=await a.decorate(p.value);return o=await a.reCalculateTotalLiquidities(),o}}}function _(){const t=[],r=d();return t.push(r),t}function h(t){const{tokens:r,poolIds:a,poolTypes:o,sortField:m,poolAttributes:B}=v.value,j=!!(a!=null&&a.length)&&(a==null?void 0:a.length)>0,A=!!(o!=null&&o.length),K=!!(B!=null&&B.length),O=v.value.useExactTokens?"eq":"contains",Y=(r==null?void 0:r.map(Z=>Z.toLowerCase()))||[],J="totalLiquidity",C={chainId:je.network.chainId,orderBy:J,orderDirection:"desc",where:{tokensList:{[O]:Y},poolType:{in:oe.IncludedPoolTypes},totalShares:{gt:1e-5},id:{not_in:oe.BlockList}}};return C.where&&A&&(o!=null&&o.length)&&(C.where.poolType={in:o}),C.where&&j&&(C.where.id={in:v.value.poolIds}),t.first&&(C.first=v.value.first||t.first),t.skip&&(C.skip=t.skip),C.where&&K&&B.includes(ke.New)&&(C.where.createTime={gt:De(1)}),C}function f(t=0){const r={};return r.first=v.value.pageSize||oe.Pagination.PerPage,t&&t>0&&(r.skip=t),r}function c(t){const r=v.value.sortField||"totalLiquidity";return r==="totalLiquidity"?t:r==="apr"?t.sort((a,o)=>{var j,A;const m=((j=a==null?void 0:a.apr)==null?void 0:j.max)??0;return(((A=o==null?void 0:o.apr)==null?void 0:A.max)??0)-m}):r==="volume"?t.sort((a,o)=>{const m=pe((a==null?void 0:a.totalSwapVolume)??0);return pe((o==null?void 0:o.totalSwapVolume)??0).minus(m).toNumber()}):t}D(v,()=>{u=n(),se.setPools([])},{deep:!0});const S=qe.Pools.All(x,v),M=async({pageParam:t=0})=>{if(!l.enabled||W(l.enabled)&&!l.enabled.value)return{pools:[],skip:0};const r=f(t),a=(r.first||0)+(r.skip||0);try{let o=await u.fetch(r);return o=c(o),se.addPools(o),{pools:o,skip:a}}catch(o){const m=se.pools.value;if(m&&m.length>0)return{pools:m,skip:a};throw o}};return l.getNextPageParam=t=>t.skip||0,Re(S,M,l)}function bt({filterTokens:v=P([]),sortField:l=P("totalLiquidity"),poolIds:T=P([]),poolTypes:b=P([]),poolAttributes:p=P([])}){const x=N(()=>({tokens:v.value,sortField:l.value,poolIds:T.value,poolTypes:b.value,poolAttributes:p.value})),u=ht(x,{enabled:!0,refetchOnWindowFocus:!1,keepPreviousData:!0},!1);ie();const n=N(()=>{const c=u.data.value;return c?le.flatten(c.pages.map(S=>S.pools)):[]}),d=N(()=>Ge(u)),_=N(()=>{var c;return(c=u.hasNextPage)==null?void 0:c.value}),h=N(()=>{var c;return(c=u.isFetchingNextPage)==null?void 0:c.value});function f(){u.fetchNextPage()}return D(n,c=>{le.flatten(c.map(S=>[...S.tokensList,...He(S.tokens),S.address]))}),{pools:n,isLoading:d,hasNextPage:_,isFetchingNextPage:h,loadMorePools:f}}const yt={key:0,class:"px-2"},Pt={class:"flex justify-center items-center p-2 w-5 h-5 text-xs text-center text-white bg-blue-600 rounded-full"},xt=H({__name:"PoolFeatureSelect",props:{selectedPoolType:{},selectedAttributes:{}},emits:["update:selectedPoolType","update:selectedAttributes"],setup(v,{emit:l}){const T=v,b=l,p=[I.Weighted,I.Stable,I.CLP,I.LBP,I.LRT],x=[ke.New],u=P(),n=Oe([]),d=N(()=>n.length+(u.value?1:0));D(()=>T.selectedPoolType,f=>{u.value=f}),D(u,f=>{b("update:selectedPoolType",f)}),D(n,f=>{b("update:selectedAttributes",f)});function _(f,c){f.target.checked?u.value=c:u.value=void 0}function h(f,c){if(f.target.checked)n.push(c);else{const S=n.indexOf(c);n.splice(S,1)}}return(f,c)=>{const S=U,M=re,t=ct,r=it,a=ve,o=rt;return k(),$(o,{minWidth:"40",align:"left"},{activator:i(()=>[s(M,{color:"white",size:"sm"},{default:i(()=>[s(S,{name:"filter",size:"sm",class:"mr-2"}),V(" More filters "),e(d)>0?(k(),E("div",yt,[g("div",Pt,L(e(d)),1)])):R("",!0)]),_:1})]),default:i(()=>[s(a,{spacing:"md",width:"40"},{default:i(()=>[s(a,{spacing:"sm"},{default:i(()=>[s(t,{size:"lg",weight:"bold"},{default:i(()=>[V("Pool type")]),_:1}),(k(),E(G,null,q(p,m=>g("div",{key:m,class:"text-base text-gray-600 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-850 cursor-pointer"},[s(r,{modelValue:e(u)===m,name:m,label:m,noMargin:"",alignCheckbox:"items-center",onInput:B=>_(B,m)},null,8,["modelValue","name","label","onInput"])])),64))]),_:1}),s(a,{spacing:"sm"},{default:i(()=>[s(t,{size:"lg",weight:"bold",margin:""},{default:i(()=>[V("Pool attributes")]),_:1}),(k(),E(G,null,q(x,m=>g("div",{key:m,class:"text-base text-gray-600 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-850 cursor-pointer"},[s(r,{modelValue:e(n).includes(m),name:m,label:m,noMargin:"",alignCheckbox:"items-center",onInput:B=>h(B,m)},null,8,["modelValue","name","label","onInput"])])),64))]),_:1})]),_:1})]),_:1})}}}),ge=P([]),St={1:"mainnet",1101:"zkevm"};function Tt(v){const l=St[v]||"mainnet";return Qe(async()=>{const b=(await Xe(Object.assign({"../assets/data/pools/mainnet.json":()=>me(()=>import("./mainnet-e494e9be.js"),[]),"../assets/data/pools/zkevm.json":()=>me(()=>import("./zkevm-2f6921d9.js"),[])}),`../assets/data/pools/${l}.json`)).default;ge.value=b.filter(p=>p.categories.includes("lrt")).map(p=>p.id)}),{lrtPools:ge}}const wt={class:"xl:container xl:px-4 pt-10 md:pt-8 xl:mx-auto"},Bt={class:"px-4 xl:px-0"},Ct={class:"flex justify-between items-end mb-2"},Lt={class:"lowercase"},At={class:"flex flex-col md:flex-row justify-between items-end lg:items-center w-full"},Ft={class:"ml-2"},$t={key:0,class:"p-4 xl:p-0 mt-12"},no=H({__name:"index",setup(v){var ce;const l=P(null),T=P(!1),x=((ce=We().query)==null?void 0:ce.sort)||Ue(_e.App.PoolSorting)||"totalLiquidity",u=P("totalLiquidity"),n=P(),d=P([]),_=P([]),h=P([]),f=Ke(),{getToken:c}=ie(),{appNetworkConfig:S}=ne(),M=S.supportsElementPools,{selectedTokens:t,addSelectedToken:r,removeSelectedToken:a}=nt(),{pools:o,isLoading:m,isFetchingNextPage:B,loadMorePools:j}=bt({filterTokens:t,sortField:u,poolIds:d,poolTypes:_,poolAttributes:h}),{upToSmallBreakpoint:A}=be(),{networkSlug:K,networkConfig:O}=ne(),{lrtPools:Y}=Tt(O.chainId),J=N(()=>o.value.length>=10);function C(){f.push({name:"create-pool",params:{networkSlug:K}})}function Z(w){u.value=w,Ze(_e.App.PoolSorting,w)}function ye(w){switch(w){case I.Weighted:d.value=[],_.value=[z.Weighted];break;case I.Stable:d.value=[],_.value=[z.Stable,z.StablePhantom,z.MetaStable,z.ComposableStable];break;case I.CLP:d.value=[],_.value=[z.Gyro2,z.Gyro3,z.GyroE];break;case I.LBP:d.value=[],_.value=[z.LiquidityBootstrapping];break;case I.LRT:d.value=Y.value,_.value=[];break;default:d.value=[],_.value=[]}}function Pe(w){const F=h.value.indexOf(w);h.value.splice(F,1)}return D(n,w=>{ye(w)}),(w,F)=>{const ue=re,ee=he,xe=ot,te=ut,Se=ve,Te=Ye;return k(),E("div",null,[g("div",wt,[s(at),s(Te,{vertical:""},{default:i(()=>[g("div",Bt,[g("div",Ct,[g("h3",null,[V(L(e(O).chainName)+" ",1),g("span",Lt,L(w.$t("pools")),1)]),e(A)?(k(),$(ue,{key:0,color:"blue",size:"sm",outline:"",class:ae({"mt-4":e(A)}),onClick:C},{default:i(()=>[V(L(w.$t("createAPool.title")),1)]),_:1},8,["class"])):R("",!0)]),g("div",At,[s(Se,{width:"full"},{default:i(()=>[s(ee,{justify:"between",width:"full"},{default:i(()=>[s(ee,{spacing:"md"},{default:i(()=>[s(pt,{modelValue:e(t),"onUpdate:modelValue":F[0]||(F[0]=y=>W(t)?t.value=y:null),onAdd:e(r),onRemove:e(a)},null,8,["modelValue","onAdd","onRemove"]),s(xt,{selectedPoolType:e(n),"onUpdate:selectedPoolType":F[1]||(F[1]=y=>W(n)?n.value=y:null),selectedAttributes:e(h),"onUpdate:selectedAttributes":F[2]||(F[2]=y=>W(h)?h.value=y:null)},null,8,["selectedPoolType","selectedAttributes"])]),_:1}),e(A)?R("",!0):(k(),$(ue,{key:0,color:"blue",size:"sm",outline:"",class:ae({"mt-4":e(A)}),block:e(A),onClick:C},{default:i(()=>[V(L(w.$t("createAPool.title")),1)]),_:1},8,["class","block"]))]),_:1}),s(ee,{spacing:"sm"},{default:i(()=>[s(fe,{name:"pop"},{default:i(()=>[(k(!0),E(G,null,q(e(t),y=>(k(),$(te,{key:y,closeable:!0,class:"mt-4",onClosed:Q=>e(a)(y)},{default:i(()=>{var Q;return[s(xe,{address:y,size:20,class:"flex-auto"},null,8,["address"]),g("span",Ft,L((Q=e(c)(y))==null?void 0:Q.symbol),1)]}),_:2},1032,["onClosed"]))),128))]),_:1}),s(Je,{name:"pop"},{default:i(()=>[e(n)?(k(),$(te,{key:0,closeable:!0,class:"mt-4",onClosed:F[3]||(F[3]=y=>n.value=void 0)},{default:i(()=>[g("span",null,L(e(n)),1)]),_:1})):R("",!0)]),_:1}),s(fe,{name:"pop"},{default:i(()=>[(k(!0),E(G,null,q(e(h),y=>(k(),$(te,{key:y,closeable:!0,class:"mt-4",onClosed:Q=>Pe(y)},{default:i(()=>[g("span",null,L(y),1)]),_:2},1032,["onClosed"]))),128))]),_:1})]),_:1})]),_:1})])]),s(lt,{data:e(o),noPoolsLabel:w.$t("noPoolsFound"),isLoading:e(m),selectedTokens:e(t),class:"mb-8",sortColumn:e(x),hiddenColumns:["migrate","actions","lockEndDate"],isLoadingMore:e(B),isPaginated:e(J),skeletonClass:"pools-table-loading-height",onOnColumnSort:Z,onLoadMore:e(j)},null,8,["data","noPoolsLabel","isLoading","selectedTokens","sortColumn","isLoadingMore","isPaginated","onLoadMore"]),g("div",{ref_key:"featuredProtocolsSentinel",ref:l},null,512),e(M)&&e(T)?(k(),E("div",$t,[s(vt)])):R("",!0)]),_:1})])])}}});export{no as default};
//# sourceMappingURL=index-38c5261d.js.map
