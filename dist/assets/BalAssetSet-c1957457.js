import{B as b}from"./BalAsset-68194947.js";import{d as $,c as t,n as A,bG as p,_ as z,o as u,a as f,a4 as v,T as _,a3 as k,B}from"./index-60943df8.js";const P=$({components:{BalAsset:b},props:{addresses:{type:Array,default:()=>[]},disabledAddresses:{type:Array,default:()=>[]},logoURIs:{type:Array,default:()=>[]},balAssetProps:{type:Object,default:()=>({})},width:{type:Number,default:200},size:{type:Number,default:26},maxAssetsPerLine:{type:Number,default:8},wrap:{type:Boolean},ringSize:{type:Number,default:2}},emits:["click"],setup(e){const o=t(()=>!!e.addresses&&e.addresses.length>0),d=t(()=>!!e.logoURIs&&e.logoURIs.length>0),h=t(()=>{var s,r;return o.value?((s=e.addresses)==null?void 0:s.length)||0:d.value&&((r=e.logoURIs)==null?void 0:r.length)||0}),c=t(()=>o.value?A.chunk(e.addresses,e.maxAssetsPerLine):d.value?A.chunk(e.logoURIs,e.maxAssetsPerLine):[]),m=t(()=>({"mb-3":c.value.length>1})),n=t(()=>e.size/2),g=t(()=>e.addresses.length<4?30:0),l=t(()=>(e.maxAssetsPerLine/h.value-1)*(n.value*2)+g.value),i=t(()=>{switch(e.ringSize){case 2:return"ring-2";case 1:return"ring-1";default:return"ring-2"}});function a(s){return e.wrap?0:(e.width-n.value*2+l.value)/(e.maxAssetsPerLine-1)*s}function y(s){return{...p(s)?{address:s}:{iconURI:s},disabled:e.disabledAddresses.includes(s)}}function w(s,r){return{left:`${a(r)}px`,zIndex:`${20-r}`,width:`${s>2?"24":e.size}px`,height:`${s>2?"24":e.size}px`}}return{assetChunks:c,assetRowClasses:m,ringClass:i,leftOffsetFor:a,assetAttrsFor:y,getBalAssetStyle:w}}});function C(e,o,d,h,c,m){const n=b;return u(!0),f(k,null,v(e.assetChunks,(g,l)=>(u(),f("div",_({key:l,class:["addresses-row",e.assetRowClasses],ref_for:!0},e.$attrs,{style:{width:`${e.width}px`,height:`${e.size}px`}}),[(u(!0),f(k,null,v(g,(i,a)=>(u(),B(n,_({key:a,ref_for:!0},{...e.assetAttrsFor(i),...e.balAssetProps},{size:e.size,class:["token-icon",e.ringClass,"ring-white dark:ring-gray-800 group-hover:ring-gray-50 dark:group-hover:ring-gray-800",{absolute:!e.wrap,relative:e.wrap}],style:e.getBalAssetStyle(l,a),onClick:y=>e.$emit("click",i)}),null,16,["size","class","style","onClick"]))),128))],16))),128)}const R=z(P,[["render",C],["__scopeId","data-v-8c3e134c"]]);export{R as _};
//# sourceMappingURL=BalAssetSet-c1957457.js.map
