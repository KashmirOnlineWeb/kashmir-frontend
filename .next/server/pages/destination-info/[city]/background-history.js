"use strict";(()=>{var e={};e.id=5322,e.ids=[5322],e.modules={5025:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{config:()=>h,default:()=>d,getServerSideProps:()=>u,getStaticPaths:()=>m,getStaticProps:()=>p,reportWebVitals:()=>f,routeModule:()=>y,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>g});var s=a(7093),l=a(5244),i=a(1323),n=a(8020),o=a(5551),c=a(3818),x=e([o,c]);[o,c]=x.then?(await x)():x;let d=(0,i.l)(c,"default"),p=(0,i.l)(c,"getStaticProps"),m=(0,i.l)(c,"getStaticPaths"),u=(0,i.l)(c,"getServerSideProps"),h=(0,i.l)(c,"config"),f=(0,i.l)(c,"reportWebVitals"),g=(0,i.l)(c,"unstable_getStaticProps"),v=(0,i.l)(c,"unstable_getStaticPaths"),b=(0,i.l)(c,"unstable_getStaticParams"),j=(0,i.l)(c,"unstable_getServerProps"),w=(0,i.l)(c,"unstable_getServerSideProps"),y=new s.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/destination-info/[city]/background-history",pathname:"/destination-info/[city]/background-history",bundlePath:"",filename:""},components:{App:o.default,Document:n.default},userland:c});r()}catch(e){r(e)}})},4427:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>c});var s=a(997),l=a(6689),i=a(7499),n=a(1718),o=e([i,n]);[i,n]=o.then?(await o)():o;let c=({title:e,subtitle:t,content:a,imageSrc:r})=>{let[o,c]=(0,l.useState)(null);return(0,l.useEffect)(()=>{if(a?.length>0){var e=JSON.parse(a);c(e)}},[a]),s.jsx(s.Fragment,{children:o&&o.map((e,t)=>s.jsx("div",{children:e?.imagePosition=="right"?s.jsx(n.Z,{parseContentState:e,hasImage:e?.showImage}):s.jsx(i.Z,{parseContentState:e,hasImage:e?.showImage})},t))})};r()}catch(e){r(e)}})},907:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(997),s=a(4490);let l=({topTitle:e,topTitle2:t,topSubTitle:a,viewAllDisable:l,smallTitle:i})=>(0,r.jsxs)("div",{className:"flex flex-col items-start justify-start self-stretch underlineEffect",children:[(0,r.jsxs)("div",{className:"flex flex-row items-start justify-between self-stretch titleContainer",children:[r.jsx("b",{className:"color-pink relative title sm:hoverUnderline text-[14px] leading-[40px] font-bold",children:e}),l?r.jsx("div",{className:"hidden sm:block",children:r.jsx(s.Z,{label:"View all",variantFilledTypePrimaryPosition:"unset",variantFilledTypePrimaryBorderRadius:"25px",variantFilledTypePrimaryBoxSizing:"border-box",variantFilledTypePrimaryCursor:"pointer",variantFilledTypePrimaryBorder:"none",labelDisplay:"inline-block",onClick:function(){throw Error("Function not implemented.")}})}):""]}),t?r.jsx("div",{children:r.jsx("b",{className:"leading-[40px] font-bold sm:text-[36px] color-pink relative title sm:hoverUnderline text-[24px]",children:t})}):"",r.jsx("h1",{className:"relative break-words sm:text-[30px] font-bold leading-[25.2px] color--wedge subtitle ",children:a})]})},7499:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>n});var s=a(997),l=a(6197),i=e([l]);l=(i.then?(await i)():i)[0];let n=({parseContentState:e,hasImage:t})=>s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:" mt-8 container mx-auto box-border flex w-full max-md:flex-col items-start justify-start max-md:gap-10 lg:gap-[80px] max-md:pb-[0px] lg:pb-[20px] text-9xl text-black  sm:px-0",children:[t&&s.jsx(l.motion.img,{whileHover:{scale:.9},whileTap:{scale:.9},transition:{duration:.3,ease:"easeInOut"},className:"relative sm:h-[350px] sm:w-[530px] w-full shrink-0 overflow-hidden sm:object-cover h-[245.66px]",alt:"",src:"http://kashmir-backend.test/"+e?.file}),(0,s.jsxs)("div",{className:"flex flex-col w-full items-start justify-start",children:[s.jsx("b",{className:"relative flex w-full items-center leading-[40px]",children:s.jsx("span",{className:"w-full",children:s.jsx("p",{className:"m-0 text-[#E74433] leading-[40px] sm:hoverUnderline text-[24px] sm:text-[28px]",children:e?.title})})}),e.content?s.jsx("div",{dangerouslySetInnerHTML:{__html:e?.content},className:" relative floara-editor-table floara-editor-ml-0 items-center text-base leading-[26px]"}):""]})]})});r()}catch(e){r(e)}})},1718:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>n});var s=a(997),l=a(6197),i=e([l]);l=(i.then?(await i)():i)[0];let n=({parseContentState:e,hasImage:t})=>s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:" mt-8 container mx-auto max-md:flex-col-reverse box-border flex w-full sm:flex-row items-start justify-start gap-10 lg:gap-[80px] max-md:pb-[0px] lg:pb-[20px] sm:pt-[10px] text-9xl text-black flex-col-reverse sm:px-0",children:[(0,s.jsxs)("div",{className:"flex flex-col w-full items-start justify-start",children:[s.jsx("b",{className:"relative flex w-full items-center leading-[40px]",children:s.jsx("span",{className:"w-full",children:s.jsx("p",{className:"m-0 text-[#E74433] leading-[40px] sm:hoverUnderline text-[24px] sm:text-[28px]",children:e?.title})})}),e?.content?s.jsx("div",{dangerouslySetInnerHTML:{__html:e?.content},className:" relative floara-editor-table floara-editor-ml-0 items-center text-base leading-[26px]"}):""]}),t&&s.jsx(l.motion.img,{whileHover:{scale:.9},whileTap:{scale:.9},transition:{duration:.3,ease:"easeInOut"},className:"relative sm:h-[350px] sm:w-[530px] w-full shrink-0 overflow-hidden sm:object-cover h-[245.66px]",alt:"",src:"http://kashmir-backend.test/"+e?.file})]})});r()}catch(e){r(e)}})},3818:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>v,getServerSideProps:()=>g});var s=a(997),l=a(6689),i=a(7546),n=a(536),o=a(6022),c=a(4427),x=a(907),d=a(1163),p=a(989),m=a(623),u=a(1266),h=a(701),f=e([i,n,c,p,h]);[i,n,c,p,h]=f.then?(await f)():f;let g=async e=>{let{city:t}=e.query,a=await (0,p.P)(t),r=a?.data.background,s={metaDescription:r[0]?.meta_description||"",keywords:r[0]?.keywords||"",title:r[0]?.title||""};return{props:{metaTags:s}}},v=()=>{let e=(0,o.useSelector)(e=>e.discoverPage.data),t=(0,d.useRouter)(),{city:a}=t.query,r=(0,o.useDispatch)(),[f,g]=(0,l.useState)(!0),[v,b]=(0,l.useState)(null);return(0,l.useEffect)(()=>{let t=async()=>{if(e?.length==0){let e=await (0,p.P)(a);b(e?.data),g(!1),r((0,m.uQ)(e?.data))}else b(e),g(!1)};t()},[r,a]),(0,s.jsxs)("div",{className:"w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white",children:[s.jsx(n.Z,{}),(0,s.jsxs)("div",{className:"container mx-auto my-[60px] px-4 ",children:[s.jsx(x.Z,{topTitle:"Background history",viewAllDisable:!1,topSubTitle:v?.background?.map(e=>e?.title)}),f?s.jsx(u.Z,{prop:1}):s.jsx(s.Fragment,{children:v?.background?.map((e,t)=>s.jsx("div",{children:s.jsx(c.Z,{title:"",subtitle:"",content:e?.repeater_mergeAll,imageSrc:"/assets/images/package/package.webp"})},t))})]}),s.jsx(h.Z,{titleName:"Important information",slug:a}),s.jsx(i.Z,{})]})};r()}catch(e){r(e)}})},5184:e=>{e.exports=require("@reduxjs/toolkit")},1649:e=>{e.exports=require("next-auth/react")},5648:e=>{e.exports=require("next-redux-wrapper")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},8782:e=>{e.exports=require("react-content-loader")},6405:e=>{e.exports=require("react-dom")},6022:e=>{e.exports=require("react-redux")},997:e=>{e.exports=require("react/jsx-runtime")},5566:e=>{e.exports=import("@iconify/react")},2406:e=>{e.exports=import("@nextui-org/react")},9752:e=>{e.exports=import("@tanstack/react-query")},9648:e=>{e.exports=import("axios")},6197:e=>{e.exports=import("framer-motion")},3590:e=>{e.exports=import("react-toastify")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")},989:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{P:()=>i});var s=a(6235),l=e([s]);s=(l.then?(await l)():l)[0];let i=async e=>await s.Z.get(e).then(e=>e).catch(e=>e.res);r()}catch(e){r(e)}})}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[2562,266,6859,9526,6602,2738,5458],()=>a(5025));module.exports=r})();