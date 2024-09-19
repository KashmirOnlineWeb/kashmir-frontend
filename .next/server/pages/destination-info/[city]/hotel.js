"use strict";(()=>{var e={};e.id=8308,e.ids=[8308],e.modules={7365:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>h,default:()=>c,getServerSideProps:()=>f,getStaticPaths:()=>m,getStaticProps:()=>p,reportWebVitals:()=>u,routeModule:()=>w,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>g});var a=s(7093),i=s(5244),l=s(1323),o=s(8020),n=s(5551),d=s(8138),x=e([n,d]);[n,d]=x.then?(await x)():x;let c=(0,l.l)(d,"default"),p=(0,l.l)(d,"getStaticProps"),m=(0,l.l)(d,"getStaticPaths"),f=(0,l.l)(d,"getServerSideProps"),h=(0,l.l)(d,"config"),u=(0,l.l)(d,"reportWebVitals"),g=(0,l.l)(d,"unstable_getStaticProps"),b=(0,l.l)(d,"unstable_getStaticPaths"),v=(0,l.l)(d,"unstable_getStaticParams"),j=(0,l.l)(d,"unstable_getServerProps"),y=(0,l.l)(d,"unstable_getServerSideProps"),w=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/destination-info/[city]/hotel",pathname:"/destination-info/[city]/hotel",bundlePath:"",filename:""},components:{App:n.default,Document:o.default},userland:d});r()}catch(e){r(e)}})},8346:(e,t,s)=>{s.d(t,{Z:()=>a});var r=s(997);let a=({text:e,limit:t})=>r.jsx("span",{dangerouslySetInnerHTML:{__html:((e,t)=>{if(!e)return"";let s=e.split(" ");return s?.length>t?s.slice(0,t).join(" ")+"...":e})(e,t)}})},907:(e,t,s)=>{s.d(t,{Z:()=>i});var r=s(997),a=s(4490);let i=({topTitle:e,topTitle2:t,topSubTitle:s,viewAllDisable:i,smallTitle:l})=>(0,r.jsxs)("div",{className:"flex flex-col items-start justify-start self-stretch underlineEffect",children:[(0,r.jsxs)("div",{className:"flex flex-row items-start justify-between self-stretch titleContainer",children:[r.jsx("b",{className:"color-pink relative title sm:hoverUnderline text-[14px] leading-[40px] font-bold",children:e}),i?r.jsx("div",{className:"hidden sm:block",children:r.jsx(a.Z,{label:"View all",variantFilledTypePrimaryPosition:"unset",variantFilledTypePrimaryBorderRadius:"25px",variantFilledTypePrimaryBoxSizing:"border-box",variantFilledTypePrimaryCursor:"pointer",variantFilledTypePrimaryBorder:"none",labelDisplay:"inline-block",onClick:function(){throw Error("Function not implemented.")}})}):""]}),t?r.jsx("div",{children:r.jsx("b",{className:"leading-[40px] font-bold sm:text-[36px] color-pink relative title sm:hoverUnderline text-[24px]",children:t})}):"",r.jsx("h1",{className:"relative break-words sm:text-[30px] font-bold leading-[25.2px] color--wedge subtitle ",children:s})]})},4720:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>x});var a=s(997),i=s(6689),l=s(8346),o=s(6197),n=s(4145),d=e([o,n]);[o,n]=d.then?(await d)():d;let x=({frame95:e,property1pack2Position:t,property1pack2ZIndex:s,hotelName:r,amenities1:d,amenities2:x,amenities3:c,amenities:p,breakfast:m,star:f,contact:h,hotelText:u,lgClass:g,location:b,price:v,tax:j,cityName:y})=>{let w=(0,i.useMemo)(()=>({position:t,zIndex:s}),[t,s]),N=e=>e.charAt(0).toUpperCase()+e.slice(1),k=(0,i.useMemo)(()=>"string"==typeof p&&p.trim()?p.replace(/[\[\]"]/g,"").split(",").map(e=>e.trim()):[],[p]);return a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:`${g} relative box-border flex flex-col items-start justify-start gap-[16px] rounded-2xl border-[1px] border-solid border-text-gray-300 bg-default-white px-3 pb-4 pt-3 text-left font-others-capitalised text-lg text-black`,style:w,children:[(0,a.jsxs)("div",{className:"flex flex-col items-start justify-start gap-[8px] self-stretch",children:[a.jsx(o.motion.img,{whileHover:{scale:1.1},whileTap:{scale:.9},transition:{duration:.3,ease:"easeInOut"},className:"relative h-[180px] max-w-full shrink-0 self-stretch overflow-hidden rounded-xl object-cover",alt:"",src:e}),(0,a.jsxs)("div",{className:"flex flex-col items-start justify-start gap-[4px]",children:[a.jsx("div",{className:"flex flex-col items-start justify-start",children:a.jsx("b",{className:"relative leading-[28px]",children:r})}),(0,a.jsxs)("div",{className:"flex flex-row items-start justify-start gap-[12px] text-2xs text-default-white",children:[a.jsx("div",{className:"flex flex-row items-start justify-start rounded-mini bg-red-600 py-1 pl-2 pr-[10.389999389648438px]",children:a.jsx("b",{className:"relative leading-[12px]",children:`${f} star`})}),a.jsx("div",{className:"flex flex-row items-start justify-start rounded-mini border-[1px] border-solid border-black py-1 pl-2 pr-[10.389999389648438px] text-black",children:a.jsx("b",{className:"relative break-all leading-[12px]",children:b})})]})]}),a.jsx("div",{className:"flex flex-col items-start justify-start gap-[8px] text-sm text-text-gray-700",children:a.jsx("div",{className:"flex flex-row flex-wrap items-center justify-start sm:gap-[12px] gap-[8px] md:gap-[5px] lg:gap-[5px]",children:k.map((e,t)=>a.jsx("div",{className:"relative font-medium leading-[24px] text-[14px]",children:N(e)},t))})}),a.jsx("div",{className:"relative break-words flex items-center font-body text-smi tracking-[-0.02em] text-black",children:a.jsx(l.Z,{text:u,limit:13})})]}),(0,a.jsxs)("div",{className:"self-stretch px-3 py-2 flex flex-col bg-mediumblue-200 items-start justify-start gap-[16px] text-sm",children:[(0,a.jsxs)("div",{className:"self-stretch flex flex-row items-center justify-start gap-[17px] h-9 bg-[#EBEBEB80]",children:[(0,a.jsxs)("div",{className:"flex-1 relative text-gray-500 leading-[22px] font-medium",children:["Price",(0,a.jsxs)("div",{className:"text-black",children:[v," ",a.jsx("span",{className:"text-xs font-normal",children:j})]})]}),a.jsx("div",{className:"rounded-full bg-red-600 flex flex-row w-8 h-8 items-center justify-center box-border p-2",children:a.jsx(n.Z,{className:"h-4 w-4 text-white",groupName:"bx:rupee"})})]}),a.jsx("div",{className:"self-stretch bg-text-gray-300 h-0.5 overflow-hidden shrink-0 sm:ml-0 "}),(0,a.jsxs)("div",{className:"self-stretch flex flex-row items-center justify-start gap-[17px] bg-[#EBEBEB80]",children:[(0,a.jsxs)("div",{className:"flex-1 relative text-gray-500 leading-[22px] font-medium",children:["Breakfast",a.jsx("div",{className:"text-black",children:0===m?"Breakfast Not Available":1===m?"Breakfast Available":2===m?"Breakfast available at extra charges":""})]}),a.jsx("div",{className:"rounded-full bg-red-600 flex flex-row w-8 h-8 items-center justify-center box-border p-2",children:a.jsx(n.Z,{className:"h-4 w-4 text-white",groupName:"ic:baseline-free-breakfast"})})]}),a.jsx("div",{className:"self-stretch bg-text-gray-300 h-0.5 overflow-hidden shrink-0 sm:ml-0 "}),(0,a.jsxs)("div",{className:"self-stretch flex flex-row items-center justify-start gap-[17px] bg-[#EBEBEB80]",children:[(0,a.jsxs)("div",{className:"flex-1 relative text-gray-500 leading-[22px] font-medium",children:["Contact",(0,a.jsxs)("div",{className:"text-black",children:["+91 ",h]})]}),a.jsx("div",{className:"rounded-full bg-red-600 flex flex-row w-8 h-8 items-center justify-center box-border p-2",children:a.jsx(n.Z,{className:"h-4 w-4 text-white",groupName:"ic:baseline-phone"})})]})]})]})})};r()}catch(e){r(e)}})},8138:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>b,getServerSideProps:()=>g});var a=s(997),i=s(6022),l=s(536),o=s(1163),n=s(6689),d=s(989),x=s(623),c=s(4720),p=s(907),m=s(1266),f=s(7546),h=s(701),u=e([l,d,c,f,h]);[l,d,c,f,h]=u.then?(await u)():u;let g=async e=>{let{city:t}=e.query,s=await (0,d.P)("hotel/"+t),r=s?.data,a={metaDescription:r?.other_data?.meta_description||"",keywords:r?.other_data?.meta_keywords||"",title:"string"==typeof t?r?.other_data?.meta_title||`${t.charAt(0).toUpperCase()+t.slice(1)} Hotels`:"Hotels"};return{props:{metaTags:a}}},b=({isPackage:e,lgClass:t,isHotel:s})=>{let r=(0,i.useSelector)(e=>e.discoverPage.data),u=(0,o.useRouter)(),{city:g}=u.query,b=(0,i.useDispatch)(),[v,j]=(0,n.useState)(!0),[y,w]=(0,n.useState)(null);return(0,n.useEffect)(()=>{let e=async()=>{if(r?.length==0){let e=await (0,d.P)("hotel/"+g);w(e?.data),j(!1),b((0,x.uQ)(e?.data))}else w(r),j(!1)};e()},[b,g]),(0,a.jsxs)("div",{className:"w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white",children:[a.jsx(l.Z,{}),a.jsx("div",{className:"container mx-auto my-[60px] px-4",children:a.jsx(p.Z,{topTitle:"Hotel",viewAllDisable:!1,topSubTitle:y?.other_data?.title})}),v?a.jsx(m.Z,{prop:2}):a.jsx(a.Fragment,{children:a.jsx("div",{className:" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white",children:a.jsx("div",{className:"container lg:mt-5 w-auto mx-auto pb-20 px-4",children:a.jsx("div",{className:"self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-[24px]",children:y?.hotels?.map((e,s)=>a.jsx("div",{children:a.jsx(c.Z,{frame95:"http://kashmir-backend.test/"+e?.image,property1pack2Position:"unset",property1pack2ZIndex:"0",hotelName:e?.name,amenities:e?.amenities,amenities1:"Sightseeing",amenities2:"Hotel",amenities3:"Transport",breakfast:e?.breakfast,address:e.address,contact:e?.contact,location:e?.location,star:e?.star,price:`₹ ${e.price} pp`,tax:`+ ₹ ${Math.round(e.price*(e.tax/100))} taxes`,hotelText:e?.content,lgClass:t})},e.id||s))})})})}),a.jsx(h.Z,{titleName:"Important information",slug:g}),a.jsx(f.Z,{})]})};r()}catch(e){r(e)}})},5184:e=>{e.exports=require("@reduxjs/toolkit")},1649:e=>{e.exports=require("next-auth/react")},5648:e=>{e.exports=require("next-redux-wrapper")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},8782:e=>{e.exports=require("react-content-loader")},6405:e=>{e.exports=require("react-dom")},6022:e=>{e.exports=require("react-redux")},997:e=>{e.exports=require("react/jsx-runtime")},5566:e=>{e.exports=import("@iconify/react")},2406:e=>{e.exports=import("@nextui-org/react")},9752:e=>{e.exports=import("@tanstack/react-query")},9648:e=>{e.exports=import("axios")},6197:e=>{e.exports=import("framer-motion")},3590:e=>{e.exports=import("react-toastify")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")},989:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{P:()=>l});var a=s(6235),i=e([a]);a=(i.then?(await i)():i)[0];let l=async e=>await a.Z.get(e).then(e=>e).catch(e=>e.res);r()}catch(e){r(e)}})}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[2562,266,6859,9526,6602,2738,5458],()=>s(7365));module.exports=r})();