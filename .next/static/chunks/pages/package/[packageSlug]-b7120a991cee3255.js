(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9331],{89121:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/package/[packageSlug]",function(){return l(60392)}])},34709:function(e,t,l){"use strict";l.d(t,{W:function(){return c}});var s=l(85893),i=l(67294),a=l(25675),r=l.n(a),n=l(66261),o=l(11163),d=l(44778);let c=e=>{let{breadcrumb:t=!1,trueProp:l=!1,breadcrumbTitle:a="",propTrue:c=!1}=e,x=(0,o.useRouter)(),[m,u]=(0,i.useState)(!1),[f,h]=(0,i.useState)(!1),[p,v]=(0,i.useState)(null);return(0,i.useEffect)(()=>{if(m){let e=document.getElementById("navigation");e&&v(e.offsetTop);let t=()=>{null!==p&&h(window.scrollY>p)};return window.addEventListener("scroll",t),t(),()=>{window.removeEventListener("scroll",t)}}},[m,p]),(0,i.useEffect)(()=>{u(!0)},[]),(0,s.jsx)(s.Fragment,{children:t&&a?(0,s.jsx)("div",{className:"bg-default-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] h-[72px] flex items-center overflow-hidden no-underline leading-[40px] font-semibold text-black px-4",children:(0,s.jsxs)("div",{className:"container mx-auto",children:[(0,s.jsx)("span",{className:"font-normal",children:"Home / "}),(0,s.jsx)("span",{className:"font-semibold",children:a})]})}):m&&(0,s.jsx)("div",{id:"navigation",className:"".concat(f?"fixed z-10 sm:top-[40px] max-sm:top-[60px]":""," w-full max-sm:py-2 bg-default-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] sm:h-[72px] h-12 flex items-center overflow-hidden text-left text-sm text-black font-others-capitalised px-[24px] sm:px-4"),children:(0,s.jsx)("div",{className:"container mx-auto",children:(0,s.jsxs)("div",{className:"flex flex-row items-end justify-start sm:gap-[46px] gap-4 text-xs sm:text-sm overflow-x-auto container",children:[(0,s.jsx)("div",{onClick:x.back,className:"select-none cursor-pointer",children:(0,s.jsx)(r(),{src:d.Z.src,alt:"",width:32,height:32,className:"overflow-hidden"})}),(0,s.jsx)("div",{className:"no-underline leading-[40px] font-semibold text-black cursor-pointer",children:(0,s.jsx)(n.rU,{to:"overview",spy:!0,smooth:!0,offset:-70,duration:500,children:(0,s.jsx)("div",{className:"relative leading-[40px] font-semibold z-[0] whitespace-nowrap",children:"Overview"})})}),c?(0,s.jsx)("div",{className:"no-underline leading-[40px] font-semibold text-black cursor-pointer",children:(0,s.jsx)(n.rU,{to:"other-activity",spy:!0,smooth:!0,offset:-70,duration:500,children:(0,s.jsx)("div",{className:"relative leading-[40px] font-semibold z-[0] whitespace-nowrap",children:"Other Activity"})})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"no-underline leading-[40px] font-semibold text-black cursor-pointer",children:(0,s.jsx)(n.rU,{to:"best-time-to-visit",spy:!0,smooth:!0,offset:-70,duration:500,children:(0,s.jsx)("div",{className:"relative leading-[40px] font-semibold z-[0] whitespace-nowrap",children:"Best time to visit"})})}),l?(0,s.jsx)("div",{className:"no-underline leading-[40px] font-semibold text-black cursor-pointer",children:(0,s.jsx)(n.rU,{to:"Importantinformation",spy:!0,smooth:!0,offset:-70,duration:500,children:(0,s.jsx)("div",{className:"relative leading-[40px] font-semibold z-[0] whitespace-nowrap",children:"Important Information"})})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"no-underline leading-[40px] font-semibold text-black cursor-pointer",children:(0,s.jsx)(n.rU,{to:"highlight",spy:!0,smooth:!0,offset:-70,duration:500,children:(0,s.jsx)("div",{className:"relative leading-[40px] font-semibold z-[0] whitespace-nowrap",children:"Highlight"})})}),!c&&(0,s.jsx)("div",{className:"no-underline leading-[40px] font-semibold text-black cursor-pointer",children:(0,s.jsx)(n.rU,{to:"itenery",spy:!0,smooth:!0,offset:-70,duration:500,children:(0,s.jsx)("div",{className:"relative leading-[40px] font-semibold z-[0] whitespace-nowrap",children:"Itinerary"})})})]})]})]})})})})}},19277:function(e,t,l){"use strict";var s=l(85893),i=l(87536),a=l(47533),r=l(16310),n=l(16257),o=l(9473),d=l(91444),c=l(97172),x=l(41664),m=l.n(x);t.Z=e=>{var t,l,x,u,f;let{formClassProp:h,customMargin:p}=e,v=(0,o.v9)(e=>e.homePage.data),g=r.Ry({name:r.Z_().required("Name is Required"),email:r.Z_().required("Email is required").email("Invalid email format").min(5,"Email must be at least 5 characters long").max(255,"Email must be less than 255 characters"),number:r.Z_().required("Number is Required").min(10,"Number must be at least 10 Digits").max(10,"Number should not be at greater than 10 Digits"),guest:r.Z_().required("Guest are Required"),hollyday:r.Z_().required("Holiday are Required")}),{register:b,handleSubmit:j,formState:{errors:y},reset:N,control:w}=(0,i.cI)({defaultValues:{name:"",email:"",number:"",guest:"",hollyday:""},resolver:(0,a.X)(g)}),_=async e=>{try{await c.Z.post("queryform",{name:e.name,email:null==e?void 0:e.email,number:null==e?void 0:e.number,guest:null==e?void 0:e.guest,hollyday:null==e?void 0:e.hollyday}),d.Am.success("User Query Send Sucessfully",{position:"top-right",autoClose:3e3}),N()}catch(e){d.Am.error("Error to Send Query",{position:"top-right",autoClose:3e3})}};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"".concat(h?" ".concat(p?"mt-0":"mt-8"," rounded-2xl bg-default-white box-border w-full flex flex-col items-start self-start justify-center p-4 gap-[16px] text-left text-sm text-black font-lead-lead-2 border-[1px] border-solid border-mediumblue-100"):"rounded-2xl bg-default-white box-border md:w-1/3 w-full mt-8 flex flex-col items-start self-start justify-center p-4 gap-[16px] text-left text-sm text-black font-lead-lead-2 border-[1px] border-solid border-mediumblue-100"),children:(0,s.jsxs)("div",{className:"self-stretch flex flex-col items-start justify-start gap-[16px]",children:[(0,s.jsx)("p",{className:"mt-2 text-9xl color--wedge text-center font-bold",children:"Lets help you find the best deal!"}),(0,s.jsxs)("form",{onSubmit:j(_),className:" mt-2 flex flex-col w-full items-start justify-center text-lg text-text-black-700",children:[(0,s.jsx)("label",{className:"md:text-base text-sm",children:"Your Name"}),(0,s.jsx)("input",{className:"font-inter mt-1 rounded-full font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch border-[1px] border-solid border-text-gray-300 bg-[transparent] px-3 text-sm",...b("name"),type:"text",placeholder:"Enter Name"}),(0,s.jsx)("p",{className:" text-red-600 ",children:null===(t=y.name)||void 0===t?void 0:t.message}),(0,s.jsx)("label",{className:"mt-4 md:text-base text-sm",children:"Your Number"}),(0,s.jsx)("input",{className:"font-inter mt-1 rounded-full font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch border-[1px] border-solid border-text-gray-300 bg-[transparent] px-3 text-sm",...b("number"),type:"tel",placeholder:"Enter Contact Number"}),(0,s.jsx)("p",{className:" text-red-600 ",children:null===(l=y.number)||void 0===l?void 0:l.message}),(0,s.jsx)("label",{className:"mt-4 md:text-base text-sm",children:"Your Email"}),(0,s.jsx)("input",{className:"font-inter mt-1 rounded-full font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch border-[1px] border-solid border-text-gray-300 bg-[transparent] px-3 text-sm",...b("email"),type:"text",placeholder:"Enter Email Address"}),(0,s.jsx)("p",{className:" text-red-600 ",children:null===(x=y.email)||void 0===x?void 0:x.message}),(0,s.jsxs)("div",{className:"self-stretch flex mt-4 flex-col items-start justify-start gap-[16px]",children:[(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("label",{className:"mt-4 md:text-base text-sm",children:"Number of guest"}),(0,s.jsxs)("select",{id:"countries",...b("guest"),defaultValue:"",placeholder:"Enter total Guest",className:" w-full font-inter mt-1 rounded-full font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch border-[1px] border-solid border-text-gray-300 bg-[transparent] px-3 text-sm",children:[(0,s.jsx)("option",{value:"",children:"Select number of guests"}),(0,s.jsx)("option",{value:"1",children:"1"}),(0,s.jsx)("option",{value:"2",children:"2"}),(0,s.jsx)("option",{value:"3",children:"3"}),(0,s.jsx)("option",{value:"4",children:"4"})]}),(0,s.jsx)("p",{className:" text-red-600 ",children:null===(u=y.guest)||void 0===u?void 0:u.message})]}),(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("label",{className:"mt-4 md:text-base text-sm",children:"Holiday Duration"}),(0,s.jsxs)("select",{id:"hollydays",...b("hollyday"),defaultValue:"",placeholder:"Enter duration",className:"w-full font-inter mt-1 rounded-full font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch border-[1px] border-solid border-text-gray-300 bg-[transparent] px-3 text-sm",children:[(0,s.jsx)("option",{value:"",children:"Select holiday duration"}),(0,s.jsx)("option",{value:"Jan to Feb",children:"Jan to Feb"}),(0,s.jsx)("option",{value:"March to April",children:"March to April"}),(0,s.jsx)("option",{value:"Summer",children:"Summer"})]}),(0,s.jsx)("p",{className:" text-red-600 ",children:null===(f=y.hollyday)||void 0===f?void 0:f.message})]})]}),(0,s.jsx)("button",{className:"cursor-pointer bg-mediumblue-100 px-6 py-3 mt-4 w-full rounded-full text-white",children:"Submit"}),(0,s.jsxs)("div",{className:"text-3xs mt-4 flex flex-col items-center justify-center gap-[4px] self-stretch font-body",children:[(0,s.jsxs)("div",{className:"flex flex-row items-center justify-center gap-[4px] self-stretch",children:[(0,s.jsx)(n.Z,{className:"h-3 w-3 text-[#C9C9C9]",groupName:"eva:phone-call-fill"}),(0,s.jsx)("div",{className:" text-sm relative tracking-[-0.02em]",children:"Or simply call us for any query"})]}),(null==v?void 0:v.contactdetail)&&(null==v?void 0:v.contactdetail.map((e,t)=>(0,s.jsx)("div",{children:(0,s.jsx)(m(),{className:"flex flex-row items-center justify-start text-[inherit] [text-decoration:none]",href:"tel: ".concat(null==e?void 0:e.contact),children:(0,s.jsx)("div",{className:"font-montserrat flex flex-col items-center justify-center self-stretch text-9xl",children:(0,s.jsx)("b",{className:"relative leading-[120%]",children:"+91 ".concat(null==e?void 0:e.contact)})},t)})},t)))]})]})]})})})}},60392:function(e,t,l){"use strict";l.r(t),l.d(t,{__N_SSP:function(){return k},default:function(){return E}});var s=l(85893),i=l(11163),a=l(47670),r=l(28994),n=l(47076),o=l(34709),d=l(59891),c=l(67294),x=l(96132),m=l(10788),u=l(88323),f=l(79982),h=l(28368),p=l(16257),v=e=>{let{itenerydata:t,start_Date:l,end_Date:i}=e;return(0,s.jsxs)("div",{className:"mt-9 w-full col-12",children:[(0,s.jsx)("div",{className:"flex flex-row justify-start",children:(0,s.jsx)("b",{className:"relative leading-[28px]",children:"Itinerary"})}),(0,s.jsx)("div",{className:"mt-4 w-full",children:(0,s.jsx)(h.p,{children:t&&t.length>0&&(e=>{let{open:l}=e;return(0,s.jsx)(s.Fragment,{children:t.map((e,t)=>(null==e?void 0:e.itenery_title)?(0,s.jsx)(h.p,{children:t=>{let{open:l}=t;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(h.p.Button,{className:"inline-flex w-full gap-x-1.5 bg-white sm:px-3 py-2 relative font-medium leading-[20px] self-stretch text-sm cursor-pointer mt-5 sm:mt-0",children:[(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row items-start justify-start",children:[(0,s.jsxs)("b",{className:"relative sm:leading-[18px] text-[16px] leading-[28px] text-mediumblue-100 font-bold",children:["Day ",null==e?void 0:e.itenery_day]}),(0,s.jsx)("b",{className:"relative sm:ml-7 sm:leading-[18px] leading-[28px] text-[16px]",children:null==e?void 0:e.itenery_title})]}),(0,s.jsx)(p.Z,{className:"".concat(l?"rotate-180 transform":""," arrow-down font-bold absolute right-0"),groupName:"iconamoon:arrow-down-2"})]}),(0,s.jsxs)("div",{className:"flex flex-wrap flex-row items-start mt-2 sm:ml-20 justify-start gap-[12px] text-2xs text-default-white whitespace-nowrap md:whitespace-pre",children:[e.transfer&&(0,s.jsx)("div",{className:"flex flex-row items-start justify-start rounded-mini py-1 border-[1px] border-solid border-gray-400 pl-2 pr-[10.389999389648438px] text-black",children:(0,s.jsx)("b",{className:"relative leading-[12px]",children:null==e?void 0:e.transfer})}),e.hotel&&(0,s.jsx)("div",{className:"flex flex-row items-start justify-start rounded-mini border-[1px] border-solid border-gray-400 py-1 pl-2 pr-[10.389999389648438px] text-black",children:(0,s.jsx)("b",{className:"relative leading-[12px]",children:null==e?void 0:e.hotel})}),(0,s.jsx)("div",{className:"flex flex-row items-start justify-start rounded-mini border-[1px] border-solid border-gray-400 py-1 pl-2 pr-[10.389999389648438px] text-black",children:(0,s.jsx)("b",{className:"relative leading-[12px]",children:null==e?void 0:e.sightseeings})}),e.adventure&&(0,s.jsx)("div",{className:"flex flex-row items-start justify-start rounded-mini border-[1px] border-solid border-gray-400 py-1 pl-2 pr-[10.389999389648438px] text-black",children:(0,s.jsx)("b",{className:"relative leading-[12px]",children:null==e?void 0:e.adventure})})]}),(0,s.jsx)("div",{className:"self-stretch bg-text-gray-300 h-0.5 overflow-hidden shrink-0 mt-4 sm:ml-16 "}),(0,s.jsx)(h.p.Panel,{children:(0,s.jsx)("div",{className:"flex flex-col items-start justify-start gap-[8px] text-inherit font-inherit mt-2 sm:ml-16 ",children:(0,s.jsx)("div",{className:"flex flex-row items-center justify-center",children:(0,s.jsx)("div",{className:"relative leading-[28px]",dangerouslySetInnerHTML:{__html:null==e?void 0:e.itenery_highlights}})})})})]})}},t):null)})})})})]})},g=e=>{let{exclusionsdata:t}=e;return(0,s.jsx)("div",{className:"container mx-auto",children:(0,s.jsxs)("div",{className:"flex flex-col items-start justify-start",children:[(0,s.jsx)("div",{className:"flex flex-row items-center justify-center mt-8",children:(0,s.jsx)("b",{className:"relative leading-[28px] text-black",children:"Exclusions"})}),(0,s.jsx)("div",{className:"flex flex-col items-start justify-start gap-[1px] text-inherit font-inherit",children:(0,s.jsx)("div",{className:"flex flex-row items-center justify-center",children:(0,s.jsx)("div",{className:"relative leading-[26px] editor-content",dangerouslySetInnerHTML:{__html:t}})})})]})})},b=e=>{let{addonsdata:t}=e;return(0,s.jsx)("div",{className:"container mx-auto",children:(0,s.jsxs)("div",{className:"flex flex-col items-start justify-start",children:[(0,s.jsx)("div",{className:"flex flex-row items-center justify-center mt-8",children:(0,s.jsx)("b",{className:"relative leading-[28px] text-black",children:"Add-ons"})}),(0,s.jsx)("div",{className:"flex flex-col items-start justify-start gap-[8px] text-inherit font-inherit",children:(0,s.jsx)("div",{className:"flex flex-row items-center justify-center",children:(0,s.jsx)("div",{className:"relative leading-[26px] editor-content",dangerouslySetInnerHTML:{__html:t}})})})]})})},j=l(67917),y=l(75406),N=e=>{let{noPadding:t,faqsdata:l,message:i,faqTitle:a,faqsubtitle:r,truePros:n,column:o,textLg:d}=e;return(0,s.jsx)("div",{className:" ".concat(t," font-heading-h6 flex flex-row items-center justify-between self-stretch text-left text-9xl text-gray-100"),children:(0,s.jsx)("div",{className:"w-full",children:l&&l.map((e,t)=>(0,s.jsx)("div",{className:"w-full",children:(0,s.jsx)(y.Z,{faqTitle:null==e?void 0:e.faqs_question,faqIcon:"iconamoon:arrow-down-2",subContent:null==e?void 0:e.faqs_answer,width:"w-full",borderWidth:"border-b-2"})},t))})})},w=e=>{let{inclusions:t}=e,[l,i]=(0,c.useState)(3),a=l<(null==t?void 0:t.length)?"Show More":"No More";return(0,s.jsxs)("div",{className:"mt-5 ",children:[(0,s.jsx)("div",{className:"flex flex-row justify-start",children:t&&void 0!=t&&(0,s.jsx)("b",{className:"relative leading-[28px]",children:"Inclusions"})}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-3 text-left text-sm text-black font-others-capitalised",children:null==t?void 0:t.slice(0,l).map((e,t)=>(0,s.jsxs)("div",{className:"flex flex-row items-center justify-start gap-[7px] mt-1",children:[(0,s.jsx)(p.Z,{className:"h-6 w-6 color--wedge",groupName:e.illusions_icon}),(0,s.jsx)("div",{children:e.illusions_title})]},t))}),(0,s.jsx)("div",{className:"mt-5",children:l<(null==t?void 0:t.length)&&(0,s.jsx)("button",{className:"flex items-start bg-white justify-start mt-3 w-26 h-6 text-base text-mediumblue-100 cursor-pointer",onClick:()=>{i(l+3)},children:a})})]})},_=l(19277),k=!0,E=()=>{var e,t,l,h,p;let y=(0,i.useRouter)();console.log(y.query);let[k,E]=(0,c.useState)(!0),[S,q]=(0,c.useState)([]),[O,Z]=(0,c.useState)([]),[C,P]=(0,c.useState)([]),[I,T]=(0,c.useState)([]),[U,F]=(0,c.useState)([]),M=y.query.packageSlug;return(0,c.useEffect)(()=>{let e=async()=>{var e;let t=await (0,j.UP)(M);q(null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.data),E(!1)};e()},[M]),(0,c.useEffect)(()=>{S&&(null==S?void 0:S.package_content)!=void 0&&(null==S?void 0:S.package_content.length)>0&&Z(JSON.parse(null==S?void 0:S.package_content))},[S]),(0,c.useEffect)(()=>{S&&(null==S?void 0:S.illusions_content)!=void 0&&(null==S?void 0:S.illusions_content.length)>0&&P(JSON.parse(null==S?void 0:S.illusions_content))},[S]),(0,c.useEffect)(()=>{S&&(null==S?void 0:S.faqs_content)&&(null==S?void 0:S.faqs_content)!=void 0&&(null==S?void 0:S.faqs_content.length)>0&&F(JSON.parse(null==S?void 0:S.faqs_content))},[S]),(0,c.useEffect)(()=>{S&&(null==S?void 0:S.itenery_content)&&(null==S?void 0:S.itenery_content)!=void 0&&(null==S?void 0:S.itenery_content.length)>0&&T(JSON.parse(null==S?void 0:S.itenery_content))},[S]),(0,s.jsxs)("div",{className:" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white",children:[S&&(0,s.jsx)(r.Z,{}),S&&(0,s.jsx)(n.Z,{images:null==S?void 0:null===(e=S.galleryImageURL)||void 0===e?void 0:e.split(",")}),S&&(0,s.jsx)("div",{className:" sm:block",children:(0,s.jsx)(o.W,{trueProp:!1})}),k?(0,s.jsx)(x.Z,{prop:3}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"container mx-auto px-[24px] sm:px-4",children:(0,s.jsxs)("div",{className:"flex md:flex-row flex-col",children:[(0,s.jsxs)("div",{className:"md:w-3/5 w-full gap-[48px] text-left text-black font-lead-lead-2",children:[(0,s.jsx)("div",{id:"overview",className:"gap-[16px]",children:S&&(0,s.jsx)(u.Z,{tourismText:null==S?void 0:S.package_name,content:null==S?void 0:S.content,trueAdventure:!0,pageTitle:"Packages",slug:null==S?void 0:S.slug,totaldays:"".concat(null==S?void 0:null===(t=S.duration)||void 0===t?void 0:t.nights,"N / ").concat(null==S?void 0:null===(l=S.duration)||void 0===l?void 0:l.days,"D"),tagsdata:null==S?void 0:S.tags})}),S&&(0,s.jsx)(w,{inclusions:C}),S&&(0,s.jsx)(b,{addonsdata:null==S?void 0:S.addons_editor}),S&&(0,s.jsx)("div",{id:"highlight",children:(0,s.jsx)(m.Z,{highlights:null==S?void 0:S.highlight_editor})}),S&&(0,s.jsx)("div",{className:" w-fit pt-10",children:(0,s.jsxs)("div",{id:"best-time-to-visit",className:"self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-black font-others-capitalised",children:[(0,s.jsx)("div",{className:"flex flex-row items-center justify-center",children:(0,s.jsx)("b",{className:"relative text-[#E74433] leading-[28px]",children:"Best Time to Visit"})}),S&&(0,s.jsx)("div",{className:"self-stretch flex lg:flex-row flex-col lg:overflow-hidden overflow-x-auto container items-start justify-start gap-[8px] text-base",children:O&&(0,s.jsx)(s.Fragment,{children:O.map((e,t)=>(0,s.jsx)(d.Z,{timePeriods:null==e?void 0:e.time_period,sub_title:null==e?void 0:e.sub_title,title:null==e?void 0:e.title,add_more_things:null==e?void 0:e.add_more_things,vectorImageUrl:"/assets/images/icons/sun.svg",vectorLabel:"/assets/images/icons/vector1.svg"},t))})})]})}),S&&(0,s.jsx)("div",{id:"itenery",children:(0,s.jsx)(v,{itenerydata:I,start_Date:String(null==I?void 0:null===(h=I.date_range)||void 0===h?void 0:h.start_date),end_Date:String(null==I?void 0:null===(p=I.date_range)||void 0===p?void 0:p.end_date)})}),S&&(0,s.jsx)("div",{className:"flex flex-col items-start justify-start pt-[40px]",children:(0,s.jsx)(N,{noPadding:"pb-0",faqsdata:U,faqTitle:"Whats included",message:"If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."})}),S&&(0,s.jsx)(g,{exclusionsdata:null==S?void 0:S.exclusions_editor})]}),(0,s.jsx)("div",{className:"sm:w-0 lg:w-20"}),S&&(0,s.jsxs)("div",{children:[(0,s.jsx)(f.Z,{title:null==S?void 0:S.package_name,price:null==S?void 0:S.price}),(0,s.jsx)(_.Z,{formClassProp:!0})]})]})})}),S&&(0,s.jsx)("div",{id:"footer",className:"mt-10",children:(0,s.jsx)(a.Z,{})})]})}},67917:function(e,t,l){"use strict";l.d(t,{UP:function(){return r},cA:function(){return a},k_:function(){return i}});var s=l(97172);let i=async()=>await s.Z.get("/packages").then(e=>e.data).catch(e=>e.response),a=async()=>await s.Z.get("/packages/package-with-tabs").then(e=>e.data).catch(e=>e.response),r=async e=>await s.Z.get("/packages/".concat(e)).then(e=>e.data).catch(e=>e.response)},24561:function(e,t,l){"use strict";var s=l(67294),i=function(){return(i=Object.assign||function(e){for(var t,l=1,s=arguments.length;l<s;l++)for(var i in t=arguments[l])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},a=function(e){var t=e.animate,l=void 0===t||t,a=e.animateBegin,r=e.backgroundColor,n=void 0===r?"#f5f6f7":r,o=e.backgroundOpacity,d=void 0===o?1:o,c=e.baseUrl,x=void 0===c?"":c,m=e.children,u=e.foregroundColor,f=e.foregroundOpacity,h=e.gradientRatio,p=void 0===h?2:h,v=e.gradientDirection,g=e.uniqueKey,b=e.interval,j=e.rtl,y=e.speed,N=e.style,w=e.title,_=void 0===w?"Loading...":w,k=e.beforeMask,E=void 0===k?null:k,S=function(e,t){var l={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(l[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)0>t.indexOf(s[i])&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(l[s[i]]=e[s[i]]);return l}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),q=g||Math.random().toString(36).substring(6),O=q+"-diff",Z=q+"-animated-diff",C=q+"-aria",P="0; "+(void 0===b?.25:b)+"; 1",I=(void 0===y?1.2:y)+"s";return(0,s.createElement)("svg",i({"aria-labelledby":C,role:"img",style:i(i({},void 0===N?{}:N),void 0!==j&&j?{transform:"scaleX(-1)"}:null)},S),_?(0,s.createElement)("title",{id:C},_):null,E&&(0,s.isValidElement)(E)?E:null,(0,s.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+x+"#"+O+")",style:{fill:"url("+x+"#"+Z+")"}}),(0,s.createElement)("defs",null,(0,s.createElement)("clipPath",{id:O},m),(0,s.createElement)("linearGradient",{id:Z,gradientTransform:"top-bottom"===(void 0===v?"left-right":v)?"rotate(90)":void 0},(0,s.createElement)("stop",{offset:"0%",stopColor:n,stopOpacity:d},l&&(0,s.createElement)("animate",{attributeName:"offset",values:-p+"; "+-p+"; 1",keyTimes:P,dur:I,repeatCount:"indefinite",begin:a})),(0,s.createElement)("stop",{offset:"50%",stopColor:void 0===u?"#eee":u,stopOpacity:void 0===f?1:f},l&&(0,s.createElement)("animate",{attributeName:"offset",values:-p/2+"; "+-p/2+"; "+(1+p/2),keyTimes:P,dur:I,repeatCount:"indefinite",begin:a})),(0,s.createElement)("stop",{offset:"100%",stopColor:n,stopOpacity:d},l&&(0,s.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+p),keyTimes:P,dur:I,repeatCount:"indefinite",begin:a})))))},r=function(e){return e.children?(0,s.createElement)(a,i({},e)):(0,s.createElement)(n,i({},e))},n=function(e){return(0,s.createElement)(r,i({viewBox:"0 0 476 124"},e),(0,s.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,s.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,s.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,s.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,s.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,s.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=r}},function(e){e.O(0,[3365,1876,6207,6261,2216,920,921,5012,5501,9774,2888,179],function(){return e(e.s=89121)}),_N_E=e.O()}]);