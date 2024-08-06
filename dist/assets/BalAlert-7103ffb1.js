import{_ as y,o as s,a as o,aa as H,d as L,a8 as _,a7 as v,c as t,b as n,aE as a,B as h,aD as m,e as u,t as C,U as k,f as w,w as V,b8 as Z}from"./index-60943df8.js";const j={},N={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I=H('<path d="M18.4 5.6L17.7 6.3M3 12H4H3ZM12 3V4V3ZM20 12H21H20ZM5.6 5.6L6.3 6.3L5.6 5.6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.4 5.6L17.7 6.3M3 12H4H3ZM12 3V4V3ZM20 12H21H20ZM5.6 5.6L6.3 6.3L5.6 5.6Z" stroke="currentColor" stroke-opacity="0.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 16C8.16047 15.3704 7.54033 14.4925 7.22743 13.4908C6.91453 12.4892 6.92473 11.4144 7.25658 10.4189C7.58844 9.4233 8.22512 8.55739 9.07645 7.94379C9.92778 7.33019 10.9506 7 12 7C13.0494 7 14.0722 7.33019 14.9236 7.94379C15.7749 8.55739 16.4116 9.4233 16.7434 10.4189C17.0753 11.4144 17.0855 12.4892 16.7726 13.4908C16.4597 14.4925 15.8395 15.3704 15 16C14.6096 16.3865 14.3156 16.8594 14.1419 17.3806C13.9681 17.9018 13.9195 18.4566 14 19C14 19.5304 13.7893 20.0391 13.4142 20.4142C13.0391 20.7893 12.5304 21 12 21C11.4696 21 10.9609 20.7893 10.5858 20.4142C10.2107 20.0391 10 19.5304 10 19C10.0805 18.4566 10.0319 17.9018 9.85813 17.3806C9.6844 16.8594 9.39043 16.3865 9 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 16C8.16047 15.3704 7.54033 14.4925 7.22743 13.4908C6.91453 12.4892 6.92473 11.4144 7.25658 10.4189C7.58844 9.4233 8.22512 8.55739 9.07645 7.94379C9.92778 7.33019 10.9506 7 12 7C13.0494 7 14.0722 7.33019 14.9236 7.94379C15.7749 8.55739 16.4116 9.4233 16.7434 10.4189C17.0753 11.4144 17.0855 12.4892 16.7726 13.4908C16.4597 14.4925 15.8395 15.3704 15 16C14.6096 16.3865 14.3156 16.8594 14.1419 17.3806C13.9681 17.9018 13.9195 18.4566 14 19C14 19.5304 13.7893 20.0391 13.4142 20.4142C13.0391 20.7893 12.5304 21 12 21C11.4696 21 10.9609 20.7893 10.5858 20.4142C10.2107 20.0391 10 19.5304 10 19C10.0805 18.4566 10.0319 17.9018 9.85813 17.3806C9.6844 16.8594 9.39043 16.3865 9 16" stroke="currentColor" stroke-opacity="0.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.7002 17H14.3002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.7002 17H14.3002" stroke="currentColor" stroke-opacity="0.2" stroke-linecap="round" stroke-linejoin="round"></path>',6),A=[I];function q(e,r){return s(),o("svg",N,A)}const D=y(j,[["render",q]]),E=L({name:"BalAlert",components:{BalIcon:_,BalBtn:v},props:{type:{type:String,default:"info"},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},title:{type:String,default:"A title message"},description:{type:String,default:""},actionLabel:{type:String,default:""},raised:{type:Boolean,default:!1},block:{type:Boolean,default:!1},contentClass:{type:String,default:""},square:{type:Boolean,default:!1},noBorder:{type:Boolean,default:!1},dismissable:{type:Boolean,default:!1}},emits:["action-click","close"],setup(e,{slots:r}){const b=t(()=>{switch(e.type){case"tip":return"bg-blue-50 dark:bg-blue-500 dark:bg-opacity-10 border-blue-200 dark:border-blue-500 text-black dark:text-white";case"warning":return"bg-orange-50 dark:bg-orange-600/10 border-orange-200 dark:border-orange-700 text-black dark:text-white";case"error":return"bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-900 text-black dark:text-white";default:return"bg-gray-100 dark:bg-gray-500 dark:border-0 border-gray-200 text-black dark:text-white"}}),p=t(()=>{switch(e.size){case"sm":return"p-1";default:return"p-2"}}),g=t(()=>{switch(e.size){case"sm":return"text-xs";case"lg":return"text-base";default:return"text-sm"}}),f=t(()=>({[b.value]:!0,[p.value]:!0,"shadow-sm":e.raised,"w-full":e.block,"rounded-lg":!e.square,border:!e.noBorder})),i=t(()=>({"items-center":!e.description&&!r.default})),l=t(()=>[e.contentClass,{"items-center":!e.description&&!r.default,"flex-col":!!e.description||r.default}]),d=t(()=>{switch(e.size){case"sm":return"w-5 h-5";case"lg":return"w-7 h-7";default:return"w-6 h-6"}}),c=t(()=>{switch(e.type){case"tip":return"text-blue-700 dark:text-blue-400";case"warning":return"text-orange-500 dark:text-white bg-orange-500/10 dark:bg-white/10";case"error":return"text-red-500 dark:text-white bg-red-500/10 dark:bg-white/10";default:return"text-secondary dark:text-white bg-black/10 dark:bg-white/10"}}),B=t(()=>({[d.value]:!0,[c.value]:!0})),x=t(()=>({"font-semibold":!!e.description||r.default})),z=t(()=>e.type==="tip"?"text-black dark:text-white":"text-black dark:text-white text-opacity-70"),$=t(()=>{switch(e.size){case"sm":return"sm";default:return"md"}}),M=t(()=>{switch(e.type){case"warning":return"yellow";case"error":return"red";default:return"gray"}}),S=t(()=>({"pl-4":!e.description&&!r.default,"mt-1":!!e.description||r.default}));return{classes:f,containerClasses:i,contentClasses:l,iconClasses:B,iconSize:$,titleClasses:x,textSizeClass:g,descriptionColor:z,btnColor:M,actionClasses:S}}});const T={key:0,class:"absolute top-1 right-1"};function U(e,r,b,p,g,f){const i=D,l=_,d=v;return s(),o("div",{class:a(["bal-alert relative",e.classes])},[n("div",{class:a(["bal-alert-container",e.containerClasses])},[n("div",null,[n("div",{class:a(["bal-alert-icon",e.iconClasses])},[e.type==="tip"?(s(),h(i,{key:0})):(s(),h(l,{key:1,name:"alert-circle",size:e.iconSize},null,8,["size"]))],2)]),n("div",{class:a(["bal-alert-content",e.contentClasses])},[n("div",null,[n("h5",{class:a(["bal-alert-title",e.titleClasses,e.textSizeClass])},[m(e.$slots,"title",{},()=>[u(C(e.title),1)],!0)],2),e.$slots.default||e.description?(s(),o("div",{key:0,class:a(["bal-alert-description font-normal",e.descriptionColor,e.textSizeClass])},[m(e.$slots,"default",{},()=>[u(C(e.description),1)],!0)],2)):k("",!0)]),e.actionLabel?(s(),o("div",{key:0,class:a([e.actionClasses])},[w(d,{color:e.btnColor,size:"xs",onClick:r[0]||(r[0]=c=>e.$emit("action-click"))},{default:V(()=>[u(C(e.actionLabel),1)]),_:1},8,["color"])],2)):k("",!0)],2)],2),e.dismissable?(s(),o("div",T,[w(l,{name:"x",size:"sm",class:"cursor-pointer",onClick:r[1]||(r[1]=Z(c=>e.$emit("close"),["stop"]))})])):k("",!0)],2)}const G=y(E,[["render",U],["__scopeId","data-v-d6a69703"]]);export{G as _};
//# sourceMappingURL=BalAlert-7103ffb1.js.map
