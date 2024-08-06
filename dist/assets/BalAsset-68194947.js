import{d as g,c as d,o as i,a as f,aE as B,C as t,bg as $,j as z,E as m,a1 as b,bc as C,a9 as I,cq as v,B as h,U as R,l as E,ah as U,w as S,T as A,eH as D,_ as M}from"./index-60943df8.js";const L=g({__name:"BalLoadingBlock",props:{white:{type:Boolean,default:!1},darker:{type:Boolean,default:!1},square:{type:Boolean,default:!1},rounded:{default:"lg"}},setup(n){const a=n,{darkMode:c}=$(),l=d(()=>a.white?"shimmer-white":c.value?a.darker?"shimmer-dark-mode-darker":"shimmer-dark-mode":a.darker?"shimmer-dark-mode":"shimmer-light-mode"),o=d(()=>({[`rounded-${a.rounded}`]:!a.square,[l.value]:!0}));return(r,s)=>(i(),f("div",{class:B(["bal-loading-block",t(o)])},null,2))}});function q(n){return n?n.replace("ipfs://",`https://${z.env.IPFS_NODE}/ipfs/`).replace("ipns://",`https://${z.env.IPFS_NODE}/ipns/`):""}function w(){return{resolve:q}}const x=["src"],N=g({__name:"Avatar",props:{address:{},iconURI:{default:""},size:{default:24}},setup(n){const a=n,{resolve:c}=w(),l=m(!1),o=m(!1),r=d(()=>c(a.iconURI));return b(r,s=>{s!==""&&(l.value=!1)}),C(()=>o.value=!0),(s,u)=>{const p=I("Jazzicon");return r.value&&!l.value?(i(),f("img",{key:0,src:r.value,style:v({width:`${s.size}px`,height:`${s.size}px`,background:"white"}),class:"inline-block leading-none rounded-full shadow-sm",onError:u[0]||(u[0]=_=>l.value=!0)},null,44,x)):(i(),f("div",{key:1,class:"overflow-hidden leading-none rounded-full",style:v({width:`${s.size}px`,height:`${s.size}px`})},[o.value?(i(),h(p,{key:0,address:s.address,diameter:s.size},null,8,["address","diameter"])):R("",!0)],4))}}}),P=["src","width","height"],T=g({__name:"BalAsset",props:{address:{default:""},iconURI:{default:""},size:{default:24},button:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(n){const a=n,{getToken:c}=E(),{resolve:l}=w(),{address:o}=U(a),r=m(!1),s=d(()=>o.value?c(o.value):void 0),u=d(()=>{var e;return a.iconURI?l(a.iconURI):(e=s.value)!=null&&e.logoURI?l(s.value.logoURI):""}),p=d(()=>a.button?"button":"div"),_=d(()=>{var e;return{"aria-label":(e=s.value)==null?void 0:e.symbol,disabled:a.disabled}});return b(u,e=>{e!==""&&(r.value=!1)}),(e,k)=>{var y;return i(),h(D(t(p)),A({title:(y=t(s))==null?void 0:y.symbol,class:"inline-block leading-none rounded-full shadow-sm bal-asset",style:{width:`${e.size}px`,height:`${e.size}px`}},t(_)),{default:S(()=>[t(u)&&!t(r)?(i(),f("img",{key:0,src:t(u),alt:"icon",width:e.size,height:e.size,class:"bg-white rounded-full",loading:"lazy",onError:k[0]||(k[0]=F=>r.value=!0)},null,40,P)):t(o)?(i(),h(N,{key:1,address:t(o),size:e.size},null,8,["address","size"])):(i(),f("div",{key:2,class:"overflow-visible bg-gray-300 dark:bg-gray-700 rounded-full",style:v({width:`${e.size}px`,height:`${e.size}px`})},null,4))]),_:1},16,["title","style"])}}});const O=M(T,[["__scopeId","data-v-e96328fa"]]);export{O as B,L as _,w as u};
//# sourceMappingURL=BalAsset-68194947.js.map
