(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3943],{38421:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hotel/[hotelSlug]",function(){return i(65597)}])},58694:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var n=i(85893),a=i(9473),l=i(67294),r=i(75406),s=i(96132),o=i(97172);let d=async()=>{try{let e=await o.Z.get("/faqs");return e.data}catch(e){return e}};var c=e=>{let{noPadding:t,faqsdata:i,message:o,faqTitle:c,faqsubtitle:u,truePros:m,column:f,textLg:x}=e,h=(0,a.v9)(e=>e.homePage.data),[p,v]=(0,l.useState)(!0),[g,y]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let e=async()=>{if(h.faqs)y(h.faqs),v(!1);else{var e;let t=await d();y(null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.data),v(!1)}};e()},[h.faqs]),(0,n.jsx)("div",{className:" ".concat(t," font-heading-h6 flex flex-row items-center justify-between self-stretch text-left text-9xl text-gray-100"),children:(0,n.jsx)("div",{className:"w-full",children:p?(0,n.jsx)(s.Z,{prop:1}):g&&(null==g?void 0:g.map((e,t)=>(0,n.jsx)("div",{className:"w-full",children:(0,n.jsx)(r.Z,{faqTitle:null==e?void 0:e.question,faqIcon:"iconamoon:arrow-down-2",subContent:null==e?void 0:e.answer,width:"w-full",borderWidth:"border-b-2"})},t)))})})}},56798:function(e,t,i){"use strict";i.d(t,{Z:function(){return m}});var n=i(85893),a=i(58694),l=i(10788),r=i(88323),s=i(53264),o=i(59891),d=i(67294),c=i(16257),u=e=>{let{amenity:t}=e;console.log(t,"amenity");let[i,a]=(0,d.useState)(3),l=i<(null==t?void 0:t.length)?"Show More":"No More";return(0,n.jsxs)("div",{className:"mt-5 ",children:[(0,n.jsx)("div",{className:"flex flex-row justify-start",children:t&&void 0!=t&&(0,n.jsx)("b",{className:"relative leading-[28px]",children:"Amenities"})}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-3 text-left text-sm text-black font-others-capitalised",children:null==t?void 0:t.slice(0,i).map((e,t)=>(0,n.jsxs)("div",{className:"flex flex-row items-center justify-start gap-[7px] mt-1",children:[(0,n.jsx)(c.Z,{className:"h-6 w-6 color--wedge",groupName:e.amenities_icon}),(0,n.jsx)("div",{children:e.amenities_title})]},t))}),(0,n.jsx)("div",{className:"mt-5",children:i<(null==t?void 0:t.length)&&(0,n.jsx)("button",{className:"flex items-start bg-white justify-start mt-3 w-26 h-6 text-base text-mediumblue-100 cursor-pointer",onClick:()=>{a(i+3)},children:l})})]})},m=e=>{let{trueProp:t,tourismText:i,slug:d,price:c,content:m,timePeriods:f,sub_title:x,title:h,add_more_things:p,vectorImageUrl:v,vectorLabel:g,star:y,pageTitle:w,location:j,highlights:b,isHotel:N,hotelpolicy:_,amenity:E}=e;return(0,n.jsx)("div",{className:"container mx-auto",children:(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsxs)("div",{className:"md:w-3/5 md:px-0 px-4  gap-[48px] text-left text-black font-lead-lead-2",children:[(0,n.jsx)("div",{className:"gap-[16px]",children:(0,n.jsx)(r.Z,{tourismText:i,content:m,trueAdventure:!0,star:y,slug:d,pageTitle:w,location:j,isHotel:N})}),t?(0,n.jsx)(o.Z,{containerClass:""}):"",b&&void 0!=b&&(0,n.jsx)("div",{id:"policies",children:(0,n.jsx)(l.Z,{highlights:b,hotelpolicy:_})}),E?(0,n.jsxs)("div",{id:"amenities",children:[(0,n.jsx)(u,{amenity:E})," "]}):"",(0,n.jsx)("div",{className:"flex flex-col items-start justify-start pb-[60px] pt-[40px]",children:(0,n.jsx)(a.Z,{noPadding:"pb-0",faqTitle:"Whats included",message:"If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."})})]}),(0,n.jsx)("div",{className:"md:w-20"}),c||c>0&&(0,n.jsx)(s.Z,{price:c})]})})}},65597:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSP:function(){return y},default:function(){return w}});var n=i(85893),a=i(9393),l=i(28994),r=i(47076),s=i(11163),o=i(56798),d=i(67294),c=i(97172);let u=async e=>await c.Z.get("/hotel/".concat(e)).then(e=>e.data).catch(e=>e.response);var m=i(25675),f=i.n(m),x=i(41664),h=i.n(x),p=i(66261),v=i(44778),g=e=>{let{breadcrumb:t=!1,breadcrumbTitle:i="",navigationBarOptions:a=[]}=e,l=(0,s.useRouter)(),[r,o]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{o(!0)},[]),(0,n.jsx)(n.Fragment,{children:t&&i?(0,n.jsx)("div",{className:"bg-default-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] h-[72px] flex items-center overflow-hidden no-underline leading-[40px] font-semibold text-black px-4",children:(0,n.jsxs)("div",{className:"container mx-auto",children:[(0,n.jsx)("span",{className:"font-normal",children:"Home / "}),(0,n.jsx)("span",{className:"font-semibold",children:i})]})}):r&&(0,n.jsx)("div",{className:"bg-default-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] sm:h-[72px] h-12 flex items-center overflow-hidden text-left text-sm text-black font-others-capitalised px-[24px] sm:px-4",children:(0,n.jsx)("div",{className:"container mx-auto",children:(0,n.jsxs)("div",{className:"flex flex-row items-end justify-start sm:gap-[46px] gap-2 text-xs sm:text-sm overflow-x-auto container",children:[(0,n.jsx)("div",{onClick:l.back,className:"select-none cursor-pointer",children:(0,n.jsx)(f(),{src:v.Z.src,alt:"",width:32,height:32,className:"overflow-hidden"})}),a&&(null==a?void 0:a.map((e,t)=>(0,n.jsx)(h(),{href:"#".concat(null==e?void 0:e.routeId),className:"no-underline leading-[40px] font-semibold text-black",children:(0,n.jsx)(p.rU,{to:"".concat(null==e?void 0:e.routeId),spy:!0,smooth:!0,offset:-70,duration:500,children:(0,n.jsx)("div",{className:"relative leading-[40px] font-semibold z-[0] whitespace-nowrap",children:null==e?void 0:e.name})})},t)))]})})})})},y=!0,w=()=>{let e=(0,s.useRouter)(),[t,i]=(0,d.useState)([]),[c,m]=(0,d.useState)(),f=e.query.hotelSlug;return(0,d.useEffect)(()=>{t&&(null==t?void 0:t.amenities_content)!=void 0&&(null==t?void 0:t.amenities_content.length)>0&&m(JSON.parse(null==t?void 0:t.amenities_content))},[t]),(0,d.useEffect)(()=>{let e=async()=>{var e;let t=await u(f);i(null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.data)};e()},[f]),(0,n.jsxs)("div",{className:" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white",children:[(0,n.jsx)(l.Z,{}),(0,n.jsx)(r.Z,{}),(0,n.jsx)(g,{navigationBarOptions:[{name:"Overview",routeId:"overview"},{name:"Amenities",routeId:"amenities"},{name:"Rooms",routeId:"rooms"},{name:"Policies",routeId:"policies"},{name:"Nearby places",routeId:"nearbyplaces"}]}),(0,n.jsx)(o.Z,{trueProp:!1,tourismText:null==t?void 0:t.hotel_name,content:null==t?void 0:t.content,star:"".concat(null==t?void 0:t.star," star"),location:null==t?void 0:t.location,highlights:null==t?void 0:t.highlight_editor,isHotel:!0,slug:null==t?void 0:t.slug,pageTitle:"hotel",hotelpolicy:!0,amenity:c}),(0,n.jsx)(a.Z,{})]})}},24561:function(e,t,i){"use strict";var n=i(67294),a=function(){return(a=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e){var t=e.animate,i=void 0===t||t,l=e.animateBegin,r=e.backgroundColor,s=void 0===r?"#f5f6f7":r,o=e.backgroundOpacity,d=void 0===o?1:o,c=e.baseUrl,u=void 0===c?"":c,m=e.children,f=e.foregroundColor,x=e.foregroundOpacity,h=e.gradientRatio,p=void 0===h?2:h,v=e.gradientDirection,g=e.uniqueKey,y=e.interval,w=e.rtl,j=e.speed,b=e.style,N=e.title,_=void 0===N?"Loading...":N,E=e.beforeMask,O=void 0===E?null:E,k=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]]);return i}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),Z=g||Math.random().toString(36).substring(6),C=Z+"-diff",S=Z+"-animated-diff",P=Z+"-aria",q="0; "+(void 0===y?.25:y)+"; 1",T=(void 0===j?1.2:j)+"s";return(0,n.createElement)("svg",a({"aria-labelledby":P,role:"img",style:a(a({},void 0===b?{}:b),void 0!==w&&w?{transform:"scaleX(-1)"}:null)},k),_?(0,n.createElement)("title",{id:P},_):null,O&&(0,n.isValidElement)(O)?O:null,(0,n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+u+"#"+C+")",style:{fill:"url("+u+"#"+S+")"}}),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:C},m),(0,n.createElement)("linearGradient",{id:S,gradientTransform:"top-bottom"===(void 0===v?"left-right":v)?"rotate(90)":void 0},(0,n.createElement)("stop",{offset:"0%",stopColor:s,stopOpacity:d},i&&(0,n.createElement)("animate",{attributeName:"offset",values:-p+"; "+-p+"; 1",keyTimes:q,dur:T,repeatCount:"indefinite",begin:l})),(0,n.createElement)("stop",{offset:"50%",stopColor:void 0===f?"#eee":f,stopOpacity:void 0===x?1:x},i&&(0,n.createElement)("animate",{attributeName:"offset",values:-p/2+"; "+-p/2+"; "+(1+p/2),keyTimes:q,dur:T,repeatCount:"indefinite",begin:l})),(0,n.createElement)("stop",{offset:"100%",stopColor:s,stopOpacity:d},i&&(0,n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+p),keyTimes:q,dur:T,repeatCount:"indefinite",begin:l})))))},r=function(e){return e.children?(0,n.createElement)(l,a({},e)):(0,n.createElement)(s,a({},e))},s=function(e){return(0,n.createElement)(r,a({viewBox:"0 0 476 124"},e),(0,n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=r}},function(e){e.O(0,[3365,1876,6207,6261,2216,920,6163,5012,7639,9774,2888,179],function(){return e(e.s=38421)}),_N_E=e.O()}]);