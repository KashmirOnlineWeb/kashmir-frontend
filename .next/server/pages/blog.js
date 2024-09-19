"use strict";(()=>{var e={};e.id=9195,e.ids=[9195],e.modules={5035:(e,t,s)=>{s.a(e,async(e,l)=>{try{s.r(t),s.d(t,{config:()=>u,default:()=>o,getServerSideProps:()=>f,getStaticPaths:()=>p,getStaticProps:()=>m,reportWebVitals:()=>h,routeModule:()=>N,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>g});var a=s(7093),r=s(5244),i=s(1323),n=s(8020),d=s(5551),x=s(3883),c=e([d,x]);[d,x]=c.then?(await c)():c;let o=(0,i.l)(x,"default"),m=(0,i.l)(x,"getStaticProps"),p=(0,i.l)(x,"getStaticPaths"),f=(0,i.l)(x,"getServerSideProps"),u=(0,i.l)(x,"config"),h=(0,i.l)(x,"reportWebVitals"),g=(0,i.l)(x,"unstable_getStaticProps"),j=(0,i.l)(x,"unstable_getStaticPaths"),b=(0,i.l)(x,"unstable_getStaticParams"),y=(0,i.l)(x,"unstable_getServerProps"),v=(0,i.l)(x,"unstable_getServerSideProps"),N=new a.PagesRouteModule({definition:{kind:r.x.PAGES,page:"/blog",pathname:"/blog",bundlePath:"",filename:""},components:{App:d.default,Document:n.default},userland:x});l()}catch(e){l(e)}})},7919:(e,t,s)=>{async function l(e){let t=await fetch("https://www.kashmironline.com/blog/graphql",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)}),s=await t.json();return s}async function a(e=null,t=null){let s=`after: "${e}", first: 4, where: {orderby: {field: DATE, order: DESC}}`;t&&(s=`after: "${e}", first: 4, where: {orderby: {field: DATE, order: DESC}, ${t.key}: "${t.value}"}`);let a={query:`query getAllPosts {
            posts(${s}) {
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
          }`};try{let e=await l(a),t=e.data.posts;return t}catch(e){return!1}}async function r(e){let t={query:`query getSinglePost {
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
          }`};try{let e=await l(t),s=e.data.post;return s}catch(e){return!1}}async function i(){let e={query:`query getPostSlugs {
            posts {
              nodes {
                slug
                id
              }
            }
          }`};try{let t=await l(e),s=t.data.posts.nodes;return s}catch(e){return{}}}async function n(){let e={query:`query NewQuery {
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
    }`},t=await l(e),s=t.data.posts.nodes;return s}async function d(e){let t={query:`query NewQuery {
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
    }`},s=await l(t),a=s.data.posts.nodes;return a}async function x(e){let t={query:`query NewQuery {
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
    }`},s=await l(t),a=s.data.posts.nodes;return a}s.d(t,{kh:()=>n,UI:()=>a,p$:()=>i,rg:()=>x,U0:()=>d,JF:()=>r})},645:(e,t,s)=>{s.a(e,async(e,l)=>{try{s.d(t,{Z:()=>c});var a=s(997),r=s(7919),i=s(6689),n=s(1137),d=s(6695),x=e([d]);d=(x.then?(await x)():x)[0];let c=function(){let[e,t]=(0,i.useState)([]),[s,l]=(0,i.useState)(),[x,c]=(0,i.useState)(),[o,m]=(0,i.useState)(0),[p,f]=(0,i.useState)(4),[u,h]=(0,i.useState)([]);async function g(){let e=await (0,r.U0)(65),s=e[0],a=e[1],i=e.slice(2);s&&l(s),a&&c(a),i.length&&(h(i),t(i.slice(0,4)),m(i.length))}return(0,i.useEffect)(()=>{g()},[]),(0,a.jsxs)("div",{className:"flex flex-col items-start justify-start gap-[40px] self-stretch pt-[50px] text-9xl text-black px-[24px]",children:[a.jsx("div",{className:"flex flex-col items-start justify-start self-stretch",children:(0,a.jsxs)("div",{className:"flex flex-row justify-between items-center sm:items-start sm:justify-start self-stretch",children:[a.jsx("b",{className:"relative sm:leading-[40px] text-[24px] sm:text-[28px] leading-[28.8px]",children:"Adventure Stories"}),a.jsx("span",{className:"text-[16px] font-bold text-[#DD1045] leading-[22.4px] sm:hidden block",children:"See All"})]})}),(0,a.jsxs)("div",{className:"flex w-full sm:flex-row flex-col items-start justify-start gap-[20px]",children:[s&&a.jsx(n.Z,{blog:s}),a.jsx("div",{className:"border-b border-solid border-smokegrey w-full sm:hidden block"}),x&&a.jsx(n.Z,{blog:x}),a.jsx("div",{className:"border-b border-solid border-smokegrey w-full sm:hidden block"})]}),a.jsx("div",{className:" w-full grid grid-cols-1 sm:grid-cols-4 flex-wrap items-start justify-start gap-[20px] text-left text-xs text-black",children:e.map(e=>a.jsx(d.Z,{blog:e},e.id))}),a.jsx("div",{className:"w-full items-center justify-center sm:flex hidden",children:a.jsx("button",{type:"button",className:"relative flex flex-row items-center justify-start rounded-full bg-mediumblue-100 px-5 py-2.5 text-center font-others-capitalised text-sm text-default-white",onClick:function(){return p>o?null:(t(u.slice(0,p+4)),f(e=>e+4))},disabled:p>o,children:p>o?"No more posts to load":"Load more posts"})})]})};l()}catch(e){l(e)}})},1137:(e,t,s)=>{s.d(t,{Z:()=>c});var l=s(997),a=s(4384),r=s.n(a),i=s(1369),n=s.n(i),d=s(1664),x=s.n(d);let c=({blog:e})=>{let t=e?.categories.nodes.map(e=>e.name).join(" / "),s=e?.author.node.firstName?`${e?.author.node.firstName} ${e?.author.node.lastName}`:"";return(0,l.jsxs)("div",{className:"font-lead-lead-2 flex flex-1 flex-col items-start justify-start gap-[24px] self-stretch text-left text-xs text-black",children:[l.jsx("img",{className:"relative max-h-full max-w-full flex-1 self-stretch overflow-hidden rounded-2xl object-cover",alt:e.featuredImage.node.altText,src:e.featuredImage.node.link}),(0,l.jsxs)("div",{className:"flex flex-col items-start justify-start gap-[8px] self-stretch",children:[(0,l.jsxs)("div",{className:"flex flex-col items-start justify-start",children:[l.jsx("div",{className:"relative font-medium leading-[16px]",children:t}),l.jsx(x(),{className:"relative text-xl font-medium leading-[30px] text-[inherit] [text-decoration:none]",href:`/blog/${e.slug}`,children:e?.title})]}),(0,l.jsxs)("div",{className:"flex flex-col items-start justify-end gap-[4px] text-sm",children:[l.jsx("div",{className:"flex flex-row items-center justify-center",children:(0,l.jsxs)("div",{className:"relative font-semibold leading-[16px]",children:["By ",s]})}),l.jsx("div",{className:"flex flex-row items-center justify-center gap-[8px] text-xs",children:l.jsx("div",{className:"relative font-medium leading-[16px]",children:function(){if(!e?.date)return"";let t=n()(e?.date),s=r()(t,"MMM dd, yyyy");return s}()})})]}),l.jsx("div",{className:"font-work-sans flex flex-row items-center justify-start self-stretch text-smi",children:l.jsx("div",{className:"relative flex-1 leading-[18px] tracking-[-0.02em]",children:l.jsx("div",{dangerouslySetInnerHTML:{__html:e.excerpt}})})})]})]})}},6695:(e,t,s)=>{s.a(e,async(e,l)=>{try{s.d(t,{Z:()=>p});var a=s(997),r=s(4384),i=s.n(r),n=s(1369),d=s.n(n),x=s(1664),c=s.n(x);s(6689);var o=s(6197),m=e([o]);o=(m.then?(await m)():m)[0];let p=function({blog:e,rowPros:t,lastIndex:s,isHomePage:l}){let r=e?.categories.nodes.map(e=>e.name).slice(0,2).join(" / "),n=e?.author.node.firstName?`${e?.author.node.firstName} ${e?.author.node.lastName}`:"";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:`flex ${t} ${l&&"max-w-[100%]"} sm:max-w-[300px] flex-1 flex-col items-start justify-start gap-[24px] text-black`,children:[a.jsx(o.motion.img,{whileHover:{scale:.9},whileTap:{scale:.9},transition:{duration:.3,ease:"easeInOut"},className:'relative h-[199px] w-full shrink-0 overflow-hidden rounded-2xl object-cover"',alt:e.featuredImage.node.altText,src:e.featuredImage.node.link}),(0,a.jsxs)("div",{className:"flex flex-col items-start justify-start gap-[8px] self-stretch",children:[(0,a.jsxs)("div",{className:"flex flex-col items-start justify-start",children:[a.jsx("div",{className:"relative font-medium leading-[16px]",children:r}),a.jsx(c(),{className:"relative text-xl mt-2 font-bold leading-[25px] text-[inherit] [text-decoration:none]",href:`/blog/${e.slug}`,children:a.jsx("div",{dangerouslySetInnerHTML:{__html:e?.title}})})]}),(0,a.jsxs)("div",{className:"flex flex-col items-start justify-end gap-[4px] text-sm",children:[a.jsx("div",{className:"flex flex-row items-center justify-center",children:(0,a.jsxs)("div",{className:"relative font-semibold leading-[16px]",children:["By ",n]})}),a.jsx("div",{className:"flex flex-row items-center justify-center gap-[8px] text-xs",children:a.jsx("div",{className:"relative font-medium leading-[16px]",children:function(){if(!e?.date)return"";let t=d()(e?.date),s=i()(t,"MMM dd, yyyy");return s}()})})]}),a.jsx("div",{className:" flex flex-row items-center justify-start self-stretch text-smi",children:a.jsx("div",{className:"relative flex-1 leading-[18px] tracking-[-0.02em]",children:a.jsx("div",{dangerouslySetInnerHTML:{__html:e.excerpt.substring(0,150)}})})})]})]}),!s&&a.jsx("div",{className:"border-b border-solid border-smokegrey sm:hidden block"})]})};l()}catch(e){l(e)}})},9990:(e,t,s)=>{s.a(e,async(e,l)=>{try{s.d(t,{Z:()=>c});var a=s(997),r=s(7919),i=s(6689),n=s(6695),d=s(5937),x=e([n]);n=(x.then?(await x)():x)[0];let c=function(){let[e,t]=(0,i.useState)([]),[s,l]=(0,i.useState)([]),[x,c]=(0,i.useState)(),[o,m]=(0,i.useState)(0),[p,f]=(0,i.useState)(4);async function u(){let e=await (0,r.kh)(),s=e[0],a=e.slice(1);s&&c(s),a.length&&(l(a),t(a.slice(0,4)),m(a.length))}return(0,i.useEffect)(()=>{u()},[]),a.jsx("div",{className:" flex flex-col items-center justify-start gap-[52px] text-sm text-black px-[24px]",children:a.jsx("div",{className:"flex flex-col items-start justify-start gap-[48px] pt-[50px] text-9xl",children:a.jsx("div",{className:"flex flex-col items-start justify-start self-stretch",children:(0,a.jsxs)("div",{className:"flex flex-col items-start justify-start gap-[40px] self-stretch",children:[a.jsx("div",{className:"flex flex-col items-start justify-start self-stretch",children:(0,a.jsxs)("div",{className:"flex flex-row items-center sm:items-start justify-between self-stretch",children:[a.jsx("b",{className:"relative sm:leading-[40px] text-[24px] sm:text-[28px] leading-[28.8px]",children:"Latest Stories"}),a.jsx("span",{className:"text-[16px] font-bold text-[#DD1045] leading-[22.4px] sm:hidden block",children:"See All"})]})}),a.jsx("div",{className:"sm:block hidden",children:x&&a.jsx(d.Z,{blog:x})}),a.jsx("div",{className:" w-full grid grid-cols-1 sm:grid-cols-4 flex-wrap items-start justify-start gap-[20px] text-left text-xs text-black",children:e&&e?.map(e=>a.jsx(n.Z,{blog:e},e.id))}),a.jsx("div",{className:"w-full items-center justify-center hidden sm:flex",children:a.jsx("button",{type:"button",className:"relative flex flex-row items-center justify-start rounded-full bg-mediumblue-100 px-5 py-2.5 text-center font-others-capitalised text-sm text-default-white",onClick:function(){return p>o?null:(t(s.slice(0,p+4)),f(e=>e+4))},disabled:p>o,children:p>o?"No more posts to load":"Load more posts"})})]})})})})};l()}catch(e){l(e)}})},5937:(e,t,s)=>{s.d(t,{Z:()=>c});var l=s(997),a=s(4384),r=s.n(a),i=s(1369),n=s.n(i),d=s(1664),x=s.n(d);s(6689);let c=function({blog:e}){let t=e?.categories.nodes.map(e=>e.name).join(" / "),s=e?.author.node.firstName?`${e?.author.node.firstName} ${e?.author.node.lastName}`:"";return(0,l.jsxs)("div",{className:"flex w-full flex-row items-start justify-start gap-[24px] text-sm",children:[l.jsx("img",{className:"h-[426px] w-[749px] rounded-3xl object-cover",alt:e.featuredImage.node.altText,src:e.featuredImage.node.link}),(0,l.jsxs)("div",{className:"flex flex-1 flex-col items-start justify-end gap-[8px]",children:[(0,l.jsxs)("div",{className:"flex flex-col items-start justify-end",children:[l.jsx("b",{className:"relative uppercase leading-[18px] tracking-[1px]",children:t}),l.jsx(x(),{href:`/blog/${e.slug}`,className:"relative text-21xl font-extrabold leading-[54px] text-[inherit] [text-decoration:none]",children:l.jsx("div",{dangerouslySetInnerHTML:{__html:e?.title}})})]}),(0,l.jsxs)("div",{className:"flex flex-col items-start justify-end gap-[4px]",children:[l.jsx("div",{className:"flex flex-row items-center justify-center",children:(0,l.jsxs)("div",{className:"relative font-semibold leading-[16px]",children:["By ",s]})}),l.jsx("div",{className:"flex flex-row items-center justify-center gap-[8px] text-xs",children:l.jsx("div",{className:"relative font-medium leading-[16px]",children:function(){if(!e?.date)return"";let t=n()(e?.date),s=r()(t,"MMM dd, yyyy");return s}()})})]}),l.jsx("div",{className:"flex flex-row items-center justify-center self-stretch text-base",children:l.jsx("div",{className:"relative flex-1 leading-[26px]",children:l.jsx("div",{dangerouslySetInnerHTML:{__html:e.excerpt}})})})]})]})}},711:(e,t,s)=>{s.a(e,async(e,l)=>{try{s.d(t,{Z:()=>x});var a=s(997),r=s(7919),i=s(6689),n=s(6695),d=e([n]);n=(d.then?(await d)():d)[0];let x=function(){let[e,t]=(0,i.useState)([]),[s,l]=(0,i.useState)(4),[d,x]=(0,i.useState)(0),[c,o]=(0,i.useState)([]);async function m(){let e=await (0,r.rg)(65);e.length&&(o(e),t(e.slice(0,4)),x(e.length))}return(0,i.useEffect)(()=>{m()},[]),a.jsx("div",{className:"flex flex-col items-start justify-start gap-[40px] self-stretch sm:pt-[50px] pt-0 text-9xl text-black px-[24px]",children:(0,a.jsxs)("div",{className:"flex flex-col items-start justify-start gap-[40px] self-stretch sm:pb-[100px] pb-10 pt-[50px] text-9xl text-black",children:[a.jsx("div",{className:"flex flex-col items-start justify-start self-stretch",children:(0,a.jsxs)("div",{className:"flex flex-row justify-between items-center sm:items-start sm:justify-start self-stretch",children:[a.jsx("b",{className:"relative sm:leading-[40px] text-[24px] sm:text-[28px] leading-[28.8px]",children:"Other stories"}),a.jsx("span",{className:"text-[16px] font-bold text-[#0022CC] leading-[22.4px] sm:hidden block",children:"See All"})]})}),a.jsx("div",{className:" w-full grid grid-cols-1 sm:grid-cols-4 flex-wrap items-start justify-start gap-[20px] text-left text-xs text-black",children:e.map((t,s)=>a.jsx(n.Z,{blog:t,lastIndex:s==e.length-1},t.id))}),a.jsx("div",{className:"sm:flex w-full items-center justify-center hidden",children:a.jsx("button",{type:"button",className:"relative flex flex-row items-center justify-start rounded-full bg-mediumblue-100 px-5 py-2.5 text-center font-others-capitalised text-sm text-default-white",onClick:function(){return s>d?null:(t(c.slice(0,s+4)),l(e=>e+4))},disabled:s>d,children:s>d?"No more posts to load":"Load more posts"})})]})})};l()}catch(e){l(e)}})},9869:(e,t,s)=>{s.a(e,async(e,l)=>{try{s.d(t,{r:()=>p});var a=s(997),r=s(6689),i=s(4145),n=s(1163),d=s(4384),x=s.n(d),c=s(3488),o=s.n(c),m=e([i]);i=(m.then?(await m)():m)[0];let p=()=>{let e=(0,n.useRouter)(),{date:t,room:s,adult:l,child:d}=e.query,c=(0,r.useRef)(null),m=(0,r.useRef)(null),p=(0,r.useRef)(null),f=(0,r.useRef)(null),u=async()=>{if(c.current&&m.current&&p.current&&f.current){let t=x()(c.current?.valueAsDate||x()(new Date,"dd-MM-yyyy"),"dd-MM-yyyy");await e.push({pathname:e.pathname,query:{...e.query,date:t,room:m.current.value||"1",adult:p.current.value||"1",child:f.current.value||"0"}})}},h=()=>{c.current&&t&&(c.current.value=x()(o()(t,"dd-MM-yyyy",new Date),"yyyy-MM-dd")),m.current&&s&&(m.current.value=s),p.current&&l&&(p.current.value=l),f.current&&d&&(f.current.value=d)};return(0,r.useEffect)(()=>{h()},[t,s,l,d]),a.jsx("div",{className:"container mx-auto",children:(0,a.jsxs)("div",{className:"flex flex-col items-start justify-start text-left text-xs text-black font-label-small-label",children:[a.jsx("div",{className:"bg-default-white [backdrop-filter:blur(12px)] sm:flex hidden flex-row items-center justify-start py-0 box-border gap-[24px]",children:a.jsx("div",{className:"flex flex-row items-center justify-start",children:a.jsx("div",{className:"flex flex-col items-start justify-start pt-4 pb-6 pr-6",children:a.jsx("div",{children:(0,a.jsxs)("div",{className:"rounded-[100px] bg-mediumblue-300 [backdrop-filter:blur(3.12px)] flex flex-row items-center justify-start py-2 pr-3 pl-6 lg:gap-[40px] border-[1px] border-solid border-darkgray",children:[(0,a.jsxs)("div",{className:"flex flex-row items-center justify-start gap-8 lg:gap-[40px]",children:[(0,a.jsxs)("div",{className:"flex flex-col items-start justify-center gap-[2px]",children:[(0,a.jsxs)("div",{className:"flex flex-row items-center justify-center gap-[4px] pl-3",children:[a.jsx("b",{className:"relative leading-[18.69px]",children:"When you planing?"})," ",a.jsx(i.Z,{className:"arrow text-dark text-[20px]",groupName:"uim:angle-down"})]}),a.jsx("input",{ref:c,className:"[border:none] font-label-small-label text-sm bg-[transparent] pt-0 pb-0 relative leading-[24px] text-black text-left",placeholder:"When Planing",type:"date"})]}),a.jsx("div",{className:"relative bg-smokegrey w-px h-10 overflow-hidden shrink-0"}),(0,a.jsxs)("div",{className:"flex flex-col items-start justify-center gap-[2px]",children:[(0,a.jsxs)("div",{className:"flex flex-row items-center justify-center gap-[4px] pl-3",children:[a.jsx("b",{className:"relative leading-[18.69px]",children:"Rooms - Adult - Child"}),a.jsx(i.Z,{className:"arrow text-dark text-[20px]",groupName:"uim:angle-down"})]}),(0,a.jsxs)("div",{className:"w-full flex flex-row",children:[a.jsx("input",{ref:m,className:"[border:none] w-[80px] font-label-small-label text-sm bg-[transparent] pt-0 pb-0 relative leading-[24px] text-black text-left",placeholder:"Total Room",type:"number"}),a.jsx("input",{ref:p,className:"[border:none] w-[80px] font-label-small-label text-sm bg-[transparent] pt-0 pb-0 relative leading-[24px] text-black text-left",placeholder:"Total Adult",type:"number"}),a.jsx("input",{ref:f,className:"[border:none] w-[80px] font-label-small-label text-sm bg-[transparent] pt-0 pb-0 relative leading-[24px] text-black text-left",placeholder:"Total Child",type:"number"})]})]})]}),a.jsx("button",{onClick:u,className:"disabled:bg-pink cursor-pointer [border:none] p-0.5 bg-pink rounded-[100px] w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center box-border",children:a.jsx(i.Z,{className:"arrow text-white text-[24px]",groupName:"iconamoon:search-light"})})]})})})})}),(0,a.jsxs)("div",{className:"flex sm:hidden flex-col py-0 box-border gap-[4px] w-full pb-11",children:[a.jsx("div",{className:"flex flex-col items-start justify-start pt-4 pb-6 max-md:pr-0 w-[100%]",children:(0,a.jsxs)("div",{className:"flex flex-col items-start justify-center gap-[2px] w-full rounded-[100px] bg-white py-2 pr-3 pl-6 border-[1px] border-solid border-darkgray",children:[(0,a.jsxs)("div",{className:"flex flex-row items-center justify-center gap-[4px] pl-3",children:[a.jsx("b",{className:"relative leading-[18.69px]",children:"When you planing?"})," ",a.jsx(i.Z,{className:"arrow text-dark text-[20px]",groupName:"uim:angle-down"})]}),a.jsx("input",{ref:c,className:"[border:none] font-label-small-label text-sm bg-[transparent] pt-0 pb-0 relative leading-[24px] text-black text-left",placeholder:"When Planing",type:"date"})]})}),(0,a.jsxs)("div",{className:"flex flex-row gap-3",children:[a.jsx("div",{className:"w-[50%]",children:(0,a.jsxs)("div",{className:"flex flex-col items-start justify-center gap-[2px] w-full rounded-[100px] bg-white py-2 pr-3 pl-6 border-[1px] border-solid border-darkgray",children:[(0,a.jsxs)("div",{className:"whitespace-nowrap flex flex-row items-center justify-center gap-[4px] pl-3",children:[a.jsx("b",{className:"relative leading-[18.69px]",children:"Travel duration"})," ",a.jsx(i.Z,{className:"arrow text-dark text-[20px]",groupName:"uim:angle-down"})]}),a.jsx("input",{className:"[border:none] font-label-small-label text-sm bg-[transparent] pt-0 pb-0 relative leading-[24px] text-black text-left",placeholder:"Select duration",type:"text"})]})}),a.jsx("div",{className:"w-[50%]",children:(0,a.jsxs)("div",{className:"flex flex-col items-start justify-center gap-[2px] w-full rounded-[100px] bg-white py-2 pr-3 pl-6 border-[1px] border-solid border-darkgray",children:[(0,a.jsxs)("div",{className:"flex flex-row items-center justify-center gap-[4px] pl-3 whitespace-nowrap",children:[a.jsx("b",{className:"relative leading-[18.69px]",children:"Room and guest"})," ",a.jsx(i.Z,{className:"arrow text-dark text-[20px]",groupName:"uim:angle-down"})]}),a.jsx("input",{className:"[border:none] font-label-small-label text-sm bg-[transparent] pt-0 pb-0 relative leading-[24px] text-black text-left",placeholder:"When planning",type:"text"})]})})]})]})]})})};l()}catch(e){l(e)}})},5050:(e,t,s)=>{s.a(e,async(e,l)=>{try{s.d(t,{Z:()=>d});var a=s(997),r=s(6689),i=s(9869),n=e([i]);i=(n.then?(await n)():n)[0];let d=({heroTitle:e,heroSubtitle:t,variantLabel:s,heroBg:l,isListingPage:n})=>{let[d,x]=(0,r.useState)(!1),c=(0,r.useMemo)(()=>({backgroundImage:l}),[l]);return(0,a.jsxs)("div",{className:"box-border parallax-effect flex min-h-[270px] w-full flex-col items-start justify-center gap-[24px] bg-black bg-cover bg-[center] bg-no-repeat py-0",style:c,children:[a.jsx("div",{className:`"container mx-auto px-[24px] sm:px-4 ${n&&"sm:text-start text-center "}`,children:(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center gap-[8px] self-stretch pb-[24px] pt-16 sm:pt-0",children:[a.jsx("h1",{className:"relative self-stretch lg:text-[40px] sm:text-[32px] font-extrabold sm:leading-[54px] leading-[28.8px] text-[24px]",children:e}),a.jsx("div",{className:"relative inline-block text-base leading-[26px]",children:t})]})}),n&&a.jsx("div",{className:"hidden px-[24px] w-full mt-[-40px]",children:a.jsx(i.r,{})})]})};l()}catch(e){l(e)}})},3883:(e,t,s)=>{s.a(e,async(e,l)=>{try{s.r(t),s.d(t,{default:()=>g,getStaticProps:()=>h});var a=s(997),r=s(968),i=s.n(r),n=s(6689),d=s(645),x=s(9990),c=s(711),o=s(7546),m=s(536),p=s(5050),f=s(7919),u=e([d,x,c,o,m,p]);[d,x,c,o,m,p]=u.then?(await u)():u;let h=async e=>{let t=await (0,f.UI)();return{props:{allPosts:t}}},g=({allPosts:e})=>{let[t]=(0,n.useState)(e);return console.log("posts----->",t),(0,a.jsxs)(a.Fragment,{children:[a.jsx(i(),{children:a.jsx("title",{children:"Blogs"})}),(0,a.jsxs)("div",{className:" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white",children:[a.jsx(m.Z,{}),a.jsx(p.Z,{heroTitle:"Travel Stories",heroSubtitle:"Caption for blog / stories here",heroBg:'url("/assets/images/pages/hero/page-hero.jpg")'}),(0,a.jsxs)("div",{className:"container mx-auto",children:[a.jsx(x.Z,{}),a.jsx("div",{className:"mt-[40px] sm:border-t sm:border-solid sm:border-smokegrey"}),a.jsx(d.Z,{}),a.jsx("div",{className:"mt-[40px] sm:border-t sm:border-solid sm:border-smokegrey"}),a.jsx(c.Z,{})]}),a.jsx(o.Z,{})]})]})};l()}catch(e){l(e)}})},5184:e=>{e.exports=require("@reduxjs/toolkit")},4384:e=>{e.exports=require("date-fns/format")},3488:e=>{e.exports=require("date-fns/parse")},1369:e=>{e.exports=require("date-fns/parseISO")},1649:e=>{e.exports=require("next-auth/react")},5648:e=>{e.exports=require("next-redux-wrapper")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},6022:e=>{e.exports=require("react-redux")},997:e=>{e.exports=require("react/jsx-runtime")},5566:e=>{e.exports=import("@iconify/react")},2406:e=>{e.exports=import("@nextui-org/react")},9752:e=>{e.exports=import("@tanstack/react-query")},9648:e=>{e.exports=import("axios")},6197:e=>{e.exports=import("framer-motion")},3590:e=>{e.exports=import("react-toastify")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),l=t.X(0,[2562,266,6859,9526,6602,2738],()=>s(5035));module.exports=l})();