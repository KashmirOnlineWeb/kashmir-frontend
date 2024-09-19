"use strict";(()=>{var e={};e.id=8223,e.ids=[8223],e.modules={9439:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>h,default:()=>d,getServerSideProps:()=>u,getStaticPaths:()=>m,getStaticProps:()=>p,reportWebVitals:()=>f,routeModule:()=>w,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>g});var s=r(7093),l=r(5244),i=r(1323),n=r(8020),o=r(5551),x=r(4514),c=e([o,x]);[o,x]=c.then?(await c)():c;let d=(0,i.l)(x,"default"),p=(0,i.l)(x,"getStaticProps"),m=(0,i.l)(x,"getStaticPaths"),u=(0,i.l)(x,"getServerSideProps"),h=(0,i.l)(x,"config"),f=(0,i.l)(x,"reportWebVitals"),g=(0,i.l)(x,"unstable_getStaticProps"),v=(0,i.l)(x,"unstable_getStaticPaths"),y=(0,i.l)(x,"unstable_getStaticParams"),b=(0,i.l)(x,"unstable_getServerProps"),j=(0,i.l)(x,"unstable_getServerSideProps"),w=new s.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/culture/[slug]",pathname:"/culture/[slug]",bundlePath:"",filename:""},components:{App:o.default,Document:n.default},userland:x});a()}catch(e){a(e)}})},4427:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>x});var s=r(997),l=r(6689),i=r(7499),n=r(1718),o=e([i,n]);[i,n]=o.then?(await o)():o;let x=({title:e,subtitle:t,content:r,imageSrc:a})=>{let[o,x]=(0,l.useState)(null);return(0,l.useEffect)(()=>{if(r?.length>0){var e=JSON.parse(r);x(e)}},[r]),s.jsx(s.Fragment,{children:o&&o.map((e,t)=>s.jsx("div",{children:e?.imagePosition=="right"?s.jsx(n.Z,{parseContentState:e,hasImage:e?.showImage}):s.jsx(i.Z,{parseContentState:e,hasImage:e?.showImage})},t))})};a()}catch(e){a(e)}})},907:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(997),s=r(4490);let l=({topTitle:e,topTitle2:t,topSubTitle:r,viewAllDisable:l,smallTitle:i})=>(0,a.jsxs)("div",{className:"flex flex-col items-start justify-start self-stretch underlineEffect",children:[(0,a.jsxs)("div",{className:"flex flex-row items-start justify-between self-stretch titleContainer",children:[a.jsx("b",{className:"color-pink relative title sm:hoverUnderline text-[14px] leading-[40px] font-bold",children:e}),l?a.jsx("div",{className:"hidden sm:block",children:a.jsx(s.Z,{label:"View all",variantFilledTypePrimaryPosition:"unset",variantFilledTypePrimaryBorderRadius:"25px",variantFilledTypePrimaryBoxSizing:"border-box",variantFilledTypePrimaryCursor:"pointer",variantFilledTypePrimaryBorder:"none",labelDisplay:"inline-block",onClick:function(){throw Error("Function not implemented.")}})}):""]}),t?a.jsx("div",{children:a.jsx("b",{className:"leading-[40px] font-bold sm:text-[36px] color-pink relative title sm:hoverUnderline text-[24px]",children:t})}):"",a.jsx("h1",{className:"relative break-words sm:text-[30px] font-bold leading-[25.2px] color--wedge subtitle ",children:r})]})},7499:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>n});var s=r(997),l=r(6197),i=e([l]);l=(i.then?(await i)():i)[0];let n=({parseContentState:e,hasImage:t})=>s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:" mt-8 container mx-auto box-border flex w-full max-md:flex-col items-start justify-start max-md:gap-10 lg:gap-[80px] max-md:pb-[0px] lg:pb-[20px] text-9xl text-black  sm:px-0",children:[t&&s.jsx(l.motion.img,{whileHover:{scale:.9},whileTap:{scale:.9},transition:{duration:.3,ease:"easeInOut"},className:"relative sm:h-[350px] sm:w-[530px] w-full shrink-0 overflow-hidden sm:object-cover h-[245.66px]",alt:"",src:"http://kashmir-backend.test/"+e?.file}),(0,s.jsxs)("div",{className:"flex flex-col w-full items-start justify-start",children:[s.jsx("b",{className:"relative flex w-full items-center leading-[40px]",children:s.jsx("span",{className:"w-full",children:s.jsx("p",{className:"m-0 text-[#E74433] leading-[40px] sm:hoverUnderline text-[24px] sm:text-[28px]",children:e?.title})})}),e.content?s.jsx("div",{dangerouslySetInnerHTML:{__html:e?.content},className:" relative floara-editor-table floara-editor-ml-0 items-center text-base leading-[26px]"}):""]})]})});a()}catch(e){a(e)}})},1718:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>n});var s=r(997),l=r(6197),i=e([l]);l=(i.then?(await i)():i)[0];let n=({parseContentState:e,hasImage:t})=>s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:" mt-8 container mx-auto max-md:flex-col-reverse box-border flex w-full sm:flex-row items-start justify-start gap-10 lg:gap-[80px] max-md:pb-[0px] lg:pb-[20px] sm:pt-[10px] text-9xl text-black flex-col-reverse sm:px-0",children:[(0,s.jsxs)("div",{className:"flex flex-col w-full items-start justify-start",children:[s.jsx("b",{className:"relative flex w-full items-center leading-[40px]",children:s.jsx("span",{className:"w-full",children:s.jsx("p",{className:"m-0 text-[#E74433] leading-[40px] sm:hoverUnderline text-[24px] sm:text-[28px]",children:e?.title})})}),e?.content?s.jsx("div",{dangerouslySetInnerHTML:{__html:e?.content},className:" relative floara-editor-table floara-editor-ml-0 items-center text-base leading-[26px]"}):""]}),t&&s.jsx(l.motion.img,{whileHover:{scale:.9},whileTap:{scale:.9},transition:{duration:.3,ease:"easeInOut"},className:"relative sm:h-[350px] sm:w-[530px] w-full shrink-0 overflow-hidden sm:object-cover h-[245.66px]",alt:"",src:"http://kashmir-backend.test/"+e?.file})]})});a()}catch(e){a(e)}})},1266:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(997);r(6689);var s=r(8782),l=r.n(s);let i=()=>(0,a.jsxs)(l(),{uniqueKey:"my-random-value",style:{display:"flex",margin:"0 auto",justifyContent:"center",alignItems:"center"},speed:2,width:400,height:500,backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[a.jsx("rect",{x:"10",y:"50",rx:"4",ry:"4",width:"320",height:"200"}),a.jsx("rect",{x:"10",y:"270",rx:"3",ry:"3",width:"380",height:"10"}),a.jsx("rect",{x:"10",y:"290",rx:"3",ry:"3",width:"350",height:"10"}),a.jsx("rect",{x:"10",y:"310",rx:"3",ry:"3",width:"370",height:"10"})]}),n=({prop:e})=>a.jsx("div",{className:"flex flex-row w-full ",children:[...Array(e)].map((e,t)=>a.jsx(i,{},t))})},4514:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>h,getServerSideProps:()=>u});var s=r(997),l=r(6689),i=r(7546),n=r(536),o=r(4427),x=r(907),c=r(1163),d=r(1266),p=r(4285),m=e([i,n,o,p]);[i,n,o,p]=m.then?(await m)():m;let u=async e=>{let{slug:t}=e.query,r=await (0,p.T)(t),a=r?.data?.data,s={metaDescription:a?.meta_description||"",keywords:a?.keywords||"",title:a?.title||""};return{props:{metaTags:s}}},h=()=>{let e=(0,c.useRouter)(),t=e.query.slug,{city:r}=e.query,[a,m]=(0,l.useState)(!0),[u,h]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let e=async()=>{let e=await (0,p.T)(t);h(e?.data?.data),m(!1)};e()},[t]),(0,s.jsxs)("div",{className:"w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white",children:[s.jsx(n.Z,{}),(0,s.jsxs)("div",{className:"container mx-auto my-[60px] px-4 ",children:[s.jsx(x.Z,{topTitle:"Culture",viewAllDisable:!1,topSubTitle:u?.sub_title}),a?s.jsx(d.Z,{prop:1}):s.jsx(s.Fragment,{children:s.jsx(o.Z,{title:"",subtitle:"",content:u?.repeater_mergeAll,imageSrc:"/assets/images/package/package.webp"})})]}),s.jsx(i.Z,{})]})};a()}catch(e){a(e)}})},4285:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{D:()=>i,T:()=>n});var s=r(6235),l=e([s]);s=(l.then?(await l)():l)[0];let i=async()=>{try{let e=await s.Z.get("/culture");return e.data}catch(e){return e}},n=async e=>{try{let t=await s.Z.get(`/culture/${e}`);return t.data}catch(e){return e}};a()}catch(e){a(e)}})},5184:e=>{e.exports=require("@reduxjs/toolkit")},1649:e=>{e.exports=require("next-auth/react")},5648:e=>{e.exports=require("next-redux-wrapper")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},8782:e=>{e.exports=require("react-content-loader")},6405:e=>{e.exports=require("react-dom")},6022:e=>{e.exports=require("react-redux")},997:e=>{e.exports=require("react/jsx-runtime")},5566:e=>{e.exports=import("@iconify/react")},2406:e=>{e.exports=import("@nextui-org/react")},9752:e=>{e.exports=import("@tanstack/react-query")},9648:e=>{e.exports=import("axios")},6197:e=>{e.exports=import("framer-motion")},3590:e=>{e.exports=import("react-toastify")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[2562,266,6859,9526,6602,2738],()=>r(9439));module.exports=a})();