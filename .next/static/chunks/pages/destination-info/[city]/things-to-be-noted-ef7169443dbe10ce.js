(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4380],{28836:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/destination-info/[city]/things-to-be-noted",function(){return i(47628)}])},58463:function(e,t,i){"use strict";var r=i(85893),n=i(88372);t.Z=e=>{let{topTitle:t,topTitle2:i,topSubTitle:l,viewAllDisable:a,smallTitle:o}=e;return(0,r.jsxs)("div",{className:"flex flex-col items-start justify-start self-stretch underlineEffect",children:[(0,r.jsxs)("div",{className:"flex flex-row items-start justify-between self-stretch titleContainer",children:[(0,r.jsx)("b",{className:"color-pink relative title sm:hoverUnderline text-[14px] leading-[40px] font-bold",children:t}),a?(0,r.jsx)("div",{className:"hidden sm:block",children:(0,r.jsx)(n.Z,{label:"View all",variantFilledTypePrimaryPosition:"unset",variantFilledTypePrimaryBorderRadius:"25px",variantFilledTypePrimaryBoxSizing:"border-box",variantFilledTypePrimaryCursor:"pointer",variantFilledTypePrimaryBorder:"none",labelDisplay:"inline-block",onClick:function(){throw Error("Function not implemented.")}})}):""]}),i?(0,r.jsx)("div",{children:(0,r.jsx)("b",{className:"leading-[40px] font-bold sm:text-[36px] color-pink relative title sm:hoverUnderline text-[24px]",children:i})}):"",(0,r.jsx)("h1",{className:"relative break-words sm:text-[30px] font-bold leading-[25.2px] color--wedge subtitle ",children:l})]})}},47628:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSP:function(){return x},default:function(){return h}});var r=i(85893),n=i(9393),l=i(28994),a=e=>{let{title:t,subtitle:i,content:n,imageSrc:l}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:" mt-8 container mx-auto box-border flex w-full sm:flex-row items-start justify-start gap-10 sm:gap-[130px] md:gap-[30px] lg:gap-[30px] sm:pt-[10px] text-9xl text-black flex-col-reverse sm:px-0",children:(0,r.jsxs)("div",{className:"flex flex-col w-full items-start justify-start",children:[(0,r.jsx)("b",{className:"relative flex w-full items-center leading-[40px]",children:(0,r.jsxs)("span",{className:"w-full",children:[(0,r.jsx)("p",{className:"m-0 color--wedge leading-[40px] sm:hoverUnderline text-[24px] sm:text-[28px]",children:t}),(0,r.jsx)("p",{className:"m-0 color--wedge",children:i})]})}),n?(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:n},className:" relative items-center text-base leading-[26px]"}):""]})})})},o=i(9473),s=i(11163),c=i(67294),d=i(87335),u=i(70763),f=i(58463),m=i(96132),p=i(20048),x=!0,h=()=>{var e,t;let i=(0,o.v9)(e=>e.discoverPage.data),x=(0,s.useRouter)(),{city:h}=x.query,v=(0,o.I0)(),[g,b]=(0,c.useState)(!0),[y,w]=(0,c.useState)(null);return(0,c.useEffect)(()=>{let e=async()=>{if((null==i?void 0:i.length)==0){let e=await (0,d.P)(h);w(null==e?void 0:e.data),b(!1),v((0,u.uQ)(null==e?void 0:e.data))}else w(i),b(!1)};e()},[v,h]),(0,r.jsxs)("div",{className:" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white",children:[(0,r.jsx)(l.Z,{}),(0,r.jsxs)("div",{className:"container mx-auto my-[60px] px-4",children:[(0,r.jsx)(f.Z,{topTitle:"Things to be noted",viewAllDisable:!1,topSubTitle:null==y?void 0:null===(e=y.thingstobenoted)||void 0===e?void 0:e.map(e=>null==e?void 0:e.title)}),g?(0,r.jsx)(m.Z,{prop:2}):(0,r.jsx)(r.Fragment,{children:null==y?void 0:null===(t=y.thingstobenoted)||void 0===t?void 0:t.map((e,t)=>(0,r.jsx)("div",{children:(0,r.jsx)(a,{title:"",subtitle:"",content:function(e){let t=e.replace(/&lt;/g,"<").replace(/&gt;/g,">");return t}(null==e?void 0:e.content),imageSrc:"/assets/images/package/package.webp"})},t))})]}),(0,r.jsx)(p.Z,{titleName:"Important information",slug:h}),(0,r.jsx)(n.Z,{})]})}},17728:function(){},10367:function(){},24561:function(e,t,i){"use strict";var r=i(67294),n=function(){return(n=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},l=function(e){var t=e.animate,i=void 0===t||t,l=e.animateBegin,a=e.backgroundColor,o=void 0===a?"#f5f6f7":a,s=e.backgroundOpacity,c=void 0===s?1:s,d=e.baseUrl,u=void 0===d?"":d,f=e.children,m=e.foregroundColor,p=e.foregroundOpacity,x=e.gradientRatio,h=void 0===x?2:x,v=e.gradientDirection,g=e.uniqueKey,b=e.interval,y=e.rtl,w=e.speed,j=e.style,E=e.title,N=void 0===E?"Loading...":E,k=e.beforeMask,O=void 0===k?null:k,P=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(i[r[n]]=e[r[n]]);return i}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),_=g||Math.random().toString(36).substring(6),C=_+"-diff",T=_+"-animated-diff",S=_+"-aria",Z="0; "+(void 0===b?.25:b)+"; 1",F=(void 0===w?1.2:w)+"s";return(0,r.createElement)("svg",n({"aria-labelledby":S,role:"img",style:n(n({},void 0===j?{}:j),void 0!==y&&y?{transform:"scaleX(-1)"}:null)},P),N?(0,r.createElement)("title",{id:S},N):null,O&&(0,r.isValidElement)(O)?O:null,(0,r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+u+"#"+C+")",style:{fill:"url("+u+"#"+T+")"}}),(0,r.createElement)("defs",null,(0,r.createElement)("clipPath",{id:C},f),(0,r.createElement)("linearGradient",{id:T,gradientTransform:"top-bottom"===(void 0===v?"left-right":v)?"rotate(90)":void 0},(0,r.createElement)("stop",{offset:"0%",stopColor:o,stopOpacity:c},i&&(0,r.createElement)("animate",{attributeName:"offset",values:-h+"; "+-h+"; 1",keyTimes:Z,dur:F,repeatCount:"indefinite",begin:l})),(0,r.createElement)("stop",{offset:"50%",stopColor:void 0===m?"#eee":m,stopOpacity:void 0===p?1:p},i&&(0,r.createElement)("animate",{attributeName:"offset",values:-h/2+"; "+-h/2+"; "+(1+h/2),keyTimes:Z,dur:F,repeatCount:"indefinite",begin:l})),(0,r.createElement)("stop",{offset:"100%",stopColor:o,stopOpacity:c},i&&(0,r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+h),keyTimes:Z,dur:F,repeatCount:"indefinite",begin:l})))))},a=function(e){return e.children?(0,r.createElement)(l,n({},e)):(0,r.createElement)(o,n({},e))},o=function(e){return(0,r.createElement)(a,n({viewBox:"0 0 476 124"},e),(0,r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=a},87335:function(e,t,i){"use strict";i.d(t,{P:function(){return n}});var r=i(97172);let n=async e=>await r.Z.get(e).then(e=>e).catch(e=>e.res)}},function(e){e.O(0,[1876,6207,6163,9202,9774,2888,179],function(){return e(e.s=28836)}),_N_E=e.O()}]);