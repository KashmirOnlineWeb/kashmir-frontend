"use strict";(()=>{var e={};e.id=8615,e.ids=[8615],e.modules={4531:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>p,default:()=>x,getServerSideProps:()=>f,getStaticPaths:()=>u,getStaticProps:()=>m,reportWebVitals:()=>h,routeModule:()=>v,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>g});var a=r(7093),l=r(5244),i=r(1323),o=r(8020),n=r(5551),d=r(9725),c=e([n,d]);[n,d]=c.then?(await c)():c;let x=(0,i.l)(d,"default"),m=(0,i.l)(d,"getStaticProps"),u=(0,i.l)(d,"getStaticPaths"),f=(0,i.l)(d,"getServerSideProps"),p=(0,i.l)(d,"config"),h=(0,i.l)(d,"reportWebVitals"),g=(0,i.l)(d,"unstable_getStaticProps"),b=(0,i.l)(d,"unstable_getStaticPaths"),y=(0,i.l)(d,"unstable_getStaticParams"),j=(0,i.l)(d,"unstable_getServerProps"),w=(0,i.l)(d,"unstable_getServerSideProps"),v=new a.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/blog/[postSlug]",pathname:"/blog/[postSlug]",bundlePath:"",filename:""},components:{App:n.default,Document:o.default},userland:d});s()}catch(e){s(e)}})},7919:(e,t,r)=>{async function s(e){let t=await fetch("https://www.kashmironline.com/blog/graphql",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)}),r=await t.json();return r}async function a(e=null,t=null){let r=`after: "${e}", first: 4, where: {orderby: {field: DATE, order: DESC}}`;t&&(r=`after: "${e}", first: 4, where: {orderby: {field: DATE, order: DESC}, ${t.key}: "${t.value}"}`);let a={query:`query getAllPosts {
            posts(${r}) {
              nodes {
                date
                slug
                title
                excerpt(format: RENDERED)
                featuredImage {
                  node {
                    mediaDetails {
                      file
                      sizes {
                        sourceUrl
                        width
                        height
                      }
                    }
                  }
                }
               
                categories {
                  nodes {
                    name
                    slug
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
            }
          }`};try{let e=await s(a),t=e.data.posts;return t}catch(e){return!1}}async function l(e){let t={query:`query getSinglePost {
            post(id: "${e}", idType: SLUG) {
              content(format: RENDERED)
              date
              excerpt(format: RENDERED)
              modified
              slug
              title(format: RENDERED)
              databaseId
              featuredImage {
                node {
                  mediaDetails {
                    sizes {
                      sourceUrl
                      width
                      height
                    }
                  }
                }
              }
              categories {
                nodes {
                  name
                  slug
                }
              }
              author {
                node {
                  name
                }
              }
            }
          }`};try{let e=await s(t),r=e.data.post;return r}catch(e){return!1}}async function i(){let e={query:`query getPostSlugs {
            posts {
              nodes {
                slug
                id
              }
            }
          }`};try{let t=await s(e),r=t.data.posts.nodes;return r}catch(e){return{}}}async function o(){let e={query:`query NewQuery {
      posts(where: {orderby: {field: DATE, order: DESC}}) {
        nodes {
          date
          author {
            node {
              id
              firstName
              lastName
            }
          }
          categories {
            nodes {
              id
              name
              link
            }
          }
          id
          title
          link
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              link
              title
            }
          }
          slug
        }
      }
    }`},t=await s(e),r=t.data.posts.nodes;return r}async function n(e){let t={query:`query NewQuery {
      posts(where: {categoryId: ${e}}) {
        nodes {
          date
          author {
            node {
              id
              firstName
              lastName
            }
          }
          categories {
            nodes {
              id
              name
              link
            }
          }
          id
          title
          link
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              link
              title
            }
          }
          slug
        }
      }
    }`},r=await s(t),a=r.data.posts.nodes;return a}async function d(e){let t={query:`query NewQuery {
      posts(where: {categoryNotIn: ${e}}) {
        nodes {
          date
          author {
            node {
              id
              firstName
              lastName
            }
          }
          categories {
            nodes {
              id
              name
              link
            }
          }
          id
          title
          link
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              link
              title
            }
          }
          slug
        }
      }
    }`},r=await s(t),a=r.data.posts.nodes;return a}r.d(t,{kh:()=>o,UI:()=>a,p$:()=>i,rg:()=>d,U0:()=>n,JF:()=>l})},9525:(e,t,r)=>{r.d(t,{Z:()=>Date});var s=r(997),a=r(4384),l=r.n(a),i=r(1369),o=r.n(i);function Date({dateString:e}){let t=o()(e);return s.jsx("time",{dateTime:e,children:l()(t,"LLL d, yyyy")})}},236:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>d});var a=r(997),l=r(6689),i=r(9525),o=r(3666),n=e([o]);function d({postData:e,featuredImageUrl:t}){let[r,s]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=()=>{s(window.scrollY>277)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"font-label-small-label flex flex-col items-start justify-start gap-[16px] self-stretch max-lg:px-5 py-5 text-left text-sm text-black",children:[a.jsx("div",{className:"flex flex-row items-start justify-between self-stretch",children:(0,a.jsxs)("div",{className:"flex flex-1 flex-col items-start justify-end gap-[8px]",children:[a.jsx("b",{className:"font-inter relative uppercase leading-[18px] tracking-[1px]",children:"Religious visits"}),a.jsx("div",{className:"font-inter flex md:flex-row flex-col items-center md:items-start md:justify-start gap-[12px] self-stretch text-[25px] md:text-21xl",children:a.jsx("div",{className:"relative flex-1 font-extrabold max-md:text-center leading-[34px] md:leading-[54px] text-black",children:a.jsx("div",{dangerouslySetInnerHTML:{__html:e?.title}})})})]})}),a.jsx("div",{className:"flex flex-row items-center justify-start text-xs",children:(0,a.jsxs)("div",{className:"flex flex-row items-center justify-start gap-[8px]",children:[(0,a.jsxs)("div",{className:"font-inter relative text-sm font-semibold leading-[16px]",children:["By ",e.author.node.name]}),a.jsx("div",{className:"bg-darkgray relative h-[5px] w-[5px] rounded-[50%]"}),a.jsx("div",{className:"font-inter relative font-medium leading-[16px]",children:a.jsx(i.Z,{dateString:e.modified})}),a.jsx("div",{className:"bg-darkgray relative h-[5px] w-[5px] rounded-[50%]"}),a.jsx("div",{className:"font-inter relative font-medium leading-[16px]",children:"4 min read"})]})})]}),a.jsx("div",{className:"relative font-inherit flex flex-col items-start justify-start gap-[24px] max-md:px-5 self-stretch text-inherit text-black",children:(0,a.jsxs)("div",{className:" w-full flex md:gap-0 gap-4 flex-col md:flex-row mb-10",children:[(0,a.jsxs)("div",{className:" md:w-3/5 w-full col-span-10 md:col-span-7",children:[a.jsx("div",{className:"font-label-small-label flex flex-row items-start justify-start gap-[38px] self-stretch text-sm text-gray-200",children:a.jsx("img",{className:"w-full rounded-3xl object-cover",alt:"",src:t})}),a.jsx("div",{dangerouslySetInnerHTML:{__html:e.content},className:"custom-css font-label-small-label w-full font-inter my-0 flex flex-col items-start justify-start gap-[8px] px-30 py-0 text-base text-black"})]}),a.jsx("div",{className:"sm:w-0 lg:w-20"}),a.jsx("div",{className:` ${r?"md:sticky md:top-12 md:right-0 ":""} md:w-1/3 col-span-10 md:col-span-3 h-[710px] bg-white rounded-lg shadow-xl border-[1px] `,children:a.jsx("div",{children:a.jsx(o.Z,{formClassProp:!0,customMargin:!0})})})]})})]})}o=(n.then?(await n)():n)[0],s()}catch(e){s(e)}})},3666:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>p});var a=r(997),l=r(5641),i=r(1908),o=r(5609),n=r(4145),d=r(6022),c=r(3590),x=r(6235),m=r(1664),u=r.n(m),f=e([l,i,n,c,x]);[l,i,n,c,x]=f.then?(await f)():f;let p=({formClassProp:e,customMargin:t})=>{let r=(0,d.useSelector)(e=>e.homePage.data),s=o.object({name:o.string().required("Name is Required"),email:o.string().required("Email is required").email("Invalid email format").min(5,"Email must be at least 5 characters long").max(255,"Email must be less than 255 characters"),number:o.string().required("Number is Required").min(10,"Number must be at least 10 Digits").max(10,"Number should not be at greater than 10 Digits"),guest:o.string().required("Guest are Required"),hollyday:o.string().required("Holiday are Required")}),{register:m,handleSubmit:f,formState:{errors:p},reset:h,control:g}=(0,l.useForm)({defaultValues:{name:"",email:"",number:"",guest:"",hollyday:""},resolver:(0,i.yupResolver)(s)}),b=async e=>{try{await x.Z.post("queryform",{name:e.name,email:e?.email,number:e?.number,guest:e?.guest,hollyday:e?.hollyday}),c.toast.success("User Query Send Sucessfully",{position:"top-right",autoClose:3e3}),h()}catch(e){c.toast.error("Error to Send Query",{position:"top-right",autoClose:3e3})}};return a.jsx(a.Fragment,{children:a.jsx("div",{className:`${e?` ${t?"mt-0":"mt-8"} rounded-2xl bg-default-white box-border w-full flex flex-col items-start self-start justify-center p-4 gap-[16px] text-left text-sm text-black font-lead-lead-2 border-[1px] border-solid border-mediumblue-100`:"rounded-2xl bg-default-white box-border md:w-1/3 w-full mt-8 flex flex-col items-start self-start justify-center p-4 gap-[16px] text-left text-sm text-black font-lead-lead-2 border-[1px] border-solid border-mediumblue-100"}`,children:(0,a.jsxs)("div",{className:"self-stretch flex flex-col items-start justify-start gap-[16px]",children:[a.jsx("p",{className:"mt-2 text-9xl color--wedge text-center font-bold",children:"Lets help you find the best deal!"}),(0,a.jsxs)("form",{onSubmit:f(b),className:" mt-2 flex flex-col w-full items-start justify-center text-lg text-text-black-700",children:[a.jsx("label",{className:"md:text-base text-sm",children:"Your Name"}),a.jsx("input",{className:"font-inter mt-1 rounded-full font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch border-[1px] border-solid border-text-gray-300 bg-[transparent] px-3 text-sm",...m("name"),type:"text",placeholder:"Enter Name"}),a.jsx("p",{className:" text-red-600 ",children:p.name?.message}),a.jsx("label",{className:"mt-4 md:text-base text-sm",children:"Your Number"}),a.jsx("input",{className:"font-inter mt-1 rounded-full font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch border-[1px] border-solid border-text-gray-300 bg-[transparent] px-3 text-sm",...m("number"),type:"tel",placeholder:"Enter Contact Number"}),a.jsx("p",{className:" text-red-600 ",children:p.number?.message}),a.jsx("label",{className:"mt-4 md:text-base text-sm",children:"Your Email"}),a.jsx("input",{className:"font-inter mt-1 rounded-full font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch border-[1px] border-solid border-text-gray-300 bg-[transparent] px-3 text-sm",...m("email"),type:"text",placeholder:"Enter Email Address"}),a.jsx("p",{className:" text-red-600 ",children:p.email?.message}),(0,a.jsxs)("div",{className:"self-stretch flex mt-4 flex-col items-start justify-start gap-[16px]",children:[(0,a.jsxs)("div",{className:"w-full",children:[a.jsx("label",{className:"mt-4 md:text-base text-sm",children:"Number of guest"}),(0,a.jsxs)("select",{id:"countries",...m("guest"),defaultValue:"",placeholder:"Enter total Guest",className:" w-full font-inter mt-1 rounded-full font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch border-[1px] border-solid border-text-gray-300 bg-[transparent] px-3 text-sm",children:[a.jsx("option",{value:"",children:"Select number of guests"}),a.jsx("option",{value:"1",children:"1"}),a.jsx("option",{value:"2",children:"2"}),a.jsx("option",{value:"3",children:"3"}),a.jsx("option",{value:"4",children:"4"})]}),a.jsx("p",{className:" text-red-600 ",children:p.guest?.message})]}),(0,a.jsxs)("div",{className:"w-full",children:[a.jsx("label",{className:"mt-4 md:text-base text-sm",children:"Holiday Duration"}),(0,a.jsxs)("select",{id:"hollydays",...m("hollyday"),defaultValue:"",placeholder:"Enter duration",className:"w-full font-inter mt-1 rounded-full font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch border-[1px] border-solid border-text-gray-300 bg-[transparent] px-3 text-sm",children:[a.jsx("option",{value:"",children:"Select holiday duration"}),a.jsx("option",{value:"Jan to Feb",children:"Jan to Feb"}),a.jsx("option",{value:"March to April",children:"March to April"}),a.jsx("option",{value:"Summer",children:"Summer"})]}),a.jsx("p",{className:" text-red-600 ",children:p.hollyday?.message})]})]}),a.jsx("button",{className:"cursor-pointer bg-mediumblue-100 px-6 py-3 mt-4 w-full rounded-full text-white",children:"Submit"}),(0,a.jsxs)("div",{className:"text-3xs mt-4 flex flex-col items-center justify-center gap-[4px] self-stretch font-body",children:[(0,a.jsxs)("div",{className:"flex flex-row items-center justify-center gap-[4px] self-stretch",children:[a.jsx(n.Z,{className:"h-3 w-3 text-[#C9C9C9]",groupName:"eva:phone-call-fill"}),a.jsx("div",{className:" text-sm relative tracking-[-0.02em]",children:"Or simply call us for any query"})]}),r?.contactdetail&&r?.contactdetail.map((e,t)=>a.jsx("div",{children:a.jsx(u(),{className:"flex flex-row items-center justify-start text-[inherit] [text-decoration:none]",href:`tel: ${e?.contact}`,children:a.jsx("div",{className:"font-montserrat flex flex-col items-center justify-center self-stretch text-9xl",children:a.jsx("b",{className:"relative leading-[120%]",children:`+91 ${e?.contact}`})},t)})},t))]})]})]})})})};s()}catch(e){s(e)}})},9725:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>m,getStaticPaths:()=>x,getStaticProps:()=>c});var a=r(997),l=r(236),i=r(7546),o=r(536),n=r(7919),d=e([l,i,o]);async function c({params:e}){let t=await (0,n.JF)(e.postSlug),r="https://www.kashmironline.com/blog/wp-content/uploads/2023/09/unnamed-11.jpg";return(t.featuredImage&&(r=t.featuredImage.node.mediaDetails.sizes[0].sourceUrl),t)?{props:{postData:t,featuredImageUrl:r},notFound:!1}:{notFound:!0}}async function x(){let e=await (0,n.p$)();return{paths:Array.isArray(e)?e.map(e=>({params:{postSlug:e.slug}})):[],fallback:"blocking"}}function m({postData:e,featuredImageUrl:t}){return(0,a.jsxs)("div",{className:"w-full bg-default-white text-left font-others-capitalised text-sm text-default-white",children:[a.jsx(o.Z,{}),(0,a.jsxs)("div",{className:"container mx-auto",children:[a.jsx(l.Z,{postData:e,featuredImageUrl:t}),a.jsx("div",{className:"my-4"})]}),a.jsx(i.Z,{})]})}[l,i,o]=d.then?(await d)():d,s()}catch(e){s(e)}})},5184:e=>{e.exports=require("@reduxjs/toolkit")},4384:e=>{e.exports=require("date-fns/format")},1369:e=>{e.exports=require("date-fns/parseISO")},1649:e=>{e.exports=require("next-auth/react")},5648:e=>{e.exports=require("next-redux-wrapper")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},6022:e=>{e.exports=require("react-redux")},997:e=>{e.exports=require("react/jsx-runtime")},5609:e=>{e.exports=require("yup")},1908:e=>{e.exports=import("@hookform/resolvers/yup")},5566:e=>{e.exports=import("@iconify/react")},2406:e=>{e.exports=import("@nextui-org/react")},9752:e=>{e.exports=import("@tanstack/react-query")},9648:e=>{e.exports=import("axios")},5641:e=>{e.exports=import("react-hook-form")},3590:e=>{e.exports=import("react-toastify")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[2562,266,6859,9526,6602,2738],()=>r(4531));module.exports=s})();