exports.id=6602,exports.ids=[6602],exports.modules={8902:(e,t,a)=>{"use strict";a.d(t,{H:()=>n,a:()=>c});var i=a(997),r=a(6689);let s=(0,r.createContext)({isLoggedIn:!1,userId:null,login:e=>{},logout:()=>{}}),n=({children:e})=>{let[t,a]=(0,r.useState)(!1),[n,c]=(0,r.useState)(null);return(0,r.useEffect)(()=>{console.log("sss ",localStorage.getItem("userSignInData"));let e=JSON.parse(localStorage.getItem("userSignInData"));e?(a(!0),c(e._id)):(a(!1),c(null))},[]),i.jsx(s.Provider,{value:{isLoggedIn:t,login:e=>{localStorage.setItem("userSignInData",JSON.stringify(e)),a(!0),c(e._id)},userId:n,logout:()=>{localStorage.removeItem("userSignInData"),a(!1),c(null)}},children:e})},c=()=>(0,r.useContext)(s)},953:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var i=a(997),r=a(6689),s=a(1163);let n=()=>{let[e,t]=(0,r.useState)(!1),a=(0,s.useRouter)();return(0,r.useEffect)(()=>{let e=()=>{t(!0)},i=()=>{t(!1)};return a.events.on("routeChangeStart",e),a.events.on("routeChangeComplete",i),a.events.on("routeChangeError",i),()=>{a.events.off("routeChangeStart",e),a.events.off("routeChangeComplete",i),a.events.off("routeChangeError",i)}},[]),i.jsx(i.Fragment,{children:e&&i.jsx("div",{className:" h-1 loadingBar",children:i.jsx("div",{className:" loadingProgress"})})})}},9247:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var i=a(997),r=a(1664),s=a.n(r);let n=()=>i.jsx("div",{style:{position:"fixed",bottom:"20px",right:"20px",zIndex:"1000"},children:i.jsx(s(),{href:"https://web.whatsapp.com/send?phone=917051885580",target:"_blank",title:"WhatsApp us",children:i.jsx("button",{style:{display:"flex",padding:"10px",background:"#25d366",color:"#fff",border:"none",borderRadius:"50%",cursor:"pointer",boxShadow:"0px 4px 5px rgba(0, 0, 0, 0.2)"},children:(0,i.jsxs)("svg",{className:" w-5 md:w-[30px]",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 39 39",children:[i.jsx("path",{fill:"#00E676",d:"M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"}),i.jsx("path",{fill:"#FFF",d:"M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"})]})})})})},5551:(e,t,a)=>{"use strict";a.a(e,async(e,i)=>{try{a.r(t),a.d(t,{default:()=>m});var r=a(997);a(2786);var s=a(3590);a(8819);var n=a(8175),c=a(953),l=a(1649),o=a(968),d=a.n(o),u=a(8732),g=a(9247),p=a(6689),h=a(1163),x=a(8902),S=e([s,u]);[s,u]=S.then?(await S)():S;let m=n.Y.withRedux(({Component:e,pageProps:t})=>{let{metaTags:a,...i}=t,[n,o]=(0,p.useState)(""),[S,m]=(0,p.useState)(!1);return(0,h.useRouter)(),(0,p.useEffect)(()=>{let e=a?.keywords.replace(/<[^>]*>/g,""),t=e?.replace(/&lt;/g,"<").replace(/&gt;/g,">");o(t)},[a]),r.jsx(u.M,{children:r.jsx(l.SessionProvider,{session:t.session,children:(0,r.jsxs)(x.H,{children:[(0,r.jsxs)(d(),{children:[r.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r.jsx("meta",{name:"description",content:a?.metaDescription}),r.jsx("meta",{name:"keywords",content:n}),r.jsx("title",{children:a?.title})]}),r.jsx(c.Z,{}),r.jsx(e,{...i}),r.jsx(s.ToastContainer,{}),r.jsx(g.Z,{})]})})})});i()}catch(e){i(e)}})},8020:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var i=a(997),r=a(6859),s=a.n(r);class n extends s(){render(){return(0,i.jsxs)(r.Html,{lang:"en",children:[i.jsx(r.Head,{}),(0,i.jsxs)("body",{children:[i.jsx(r.Main,{}),i.jsx(r.NextScript,{})]})]})}}let c=n},8732:(e,t,a)=>{"use strict";a.a(e,async(e,i)=>{try{a.d(t,{M:()=>l});var r=a(997);a(6689);var s=a(9752),n=e([s]);s=(n.then?(await n)():n)[0];let c=new s.QueryClient({defaultOptions:{queries:{_optimisticResults:"optimistic"}}}),l=({children:e})=>r.jsx(s.QueryClientProvider,{client:c,children:e});i()}catch(e){i(e)}})},8551:(e,t,a)=>{"use strict";a.d(t,{NO:()=>A,OG:()=>E,OM:()=>H,Qb:()=>Q,R2:()=>w,_4:()=>T,dF:()=>Y,dX:()=>Z,f0:()=>M,gF:()=>_,ig:()=>P,mY:()=>I,oX:()=>k,rf:()=>L,uA:()=>O,uQ:()=>R,uk:()=>F,vy:()=>z,z9:()=>N});var i=a(5184),r=a(5648);let s=(0,i.createSlice)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setLoginStatus:(e,t)=>{e.isLoggedIn=t.payload}},extraReducers:{[r.HYDRATE]:(e,t)=>({...e,...t.payload.auth})}}),n=(0,i.createSlice)({name:"homePage",initialState:{data:[],isLoggedIn:!1},reducers:{getHomeData:(e,t)=>{e.data=t.payload}}}),c=(0,i.createSlice)({name:"discoverPage",initialState:{data:[]},reducers:{getDiscoverData:(e,t)=>{e.data=t.payload}}}),l=(0,i.createSlice)({name:"categorypackage",initialState:{data:[]},reducers:{getCategoryPackage:(e,t)=>{e.data=t.payload}}}),o=(0,i.createSlice)({name:"packagesingle",initialState:{data:[]},reducers:{singlePackage:(e,t)=>{e.data=t.payload}}}),d=(0,i.createSlice)({name:"packagespecial",initialState:{data:[]},reducers:{specialPackage:(e,t)=>{e.data=t.payload}}}),u=(0,i.createSlice)({name:"hotelsingle",initialState:{data:[]},reducers:{singleHotel:(e,t)=>{e.data=t.payload}}}),g=(0,i.createSlice)({name:"thingstodosingle",initialState:{data:[]},reducers:{singleThingstodo:(e,t)=>{e.data=t.payload}}}),p=(0,i.createSlice)({name:"citythingstodo",initialState:{data:[]},reducers:{CityThingstodo:(e,t)=>{e.data=t.payload}}}),h=(0,i.createSlice)({name:"citytopdestination",initialState:{data:[]},reducers:{CityTopdestination:(e,t)=>{e.data=t.payload}}}),x=(0,i.createSlice)({name:"topDestinationsingle",initialState:{data:[]},reducers:{singleTopDestination:(e,t)=>{e.data=t.payload}}}),S=(0,i.createSlice)({name:"citysingle",initialState:{data:[]},reducers:{singleCity:(e,t)=>{e.data=t.payload}}}),m=(0,i.createSlice)({name:"car",initialState:{data:[]},reducers:{getCar:(e,t)=>{e.data=t.payload}}}),{getCategoryPackage:y}=l.actions,{singlePackage:v}=o.actions,{singleHotel:f}=u.actions,{singleTopDestination:j}=x.actions,{singleThingstodo:w}=g.actions,{specialPackage:C}=d.actions,{getCar:k}=m.actions,{CityThingstodo:I}=p.actions,{CityTopdestination:b}=h.actions,{singleCity:D}=S.actions,{getHomeData:P}=n.actions,{getDiscoverData:R}=c.actions,{setLoginStatus:O}=s.actions,E=l.reducer,F=o.reducer,H=u.reducer,L=x.reducer,M=g.reducer,N=d.reducer,z=m.reducer,T=p.reducer,_=h.reducer,Q=S.reducer,Y=n.reducer,A=c.reducer,Z=s.reducer},8175:(e,t,a)=>{"use strict";a.d(t,{Y:()=>l});var i=a(5184),r=a(5648),s=a(8551);let n={categorypackage:s.OG,packagesingle:s.uk,hotelsingle:s.OM,topDestinationsingle:s.rf,thingstodosingle:s.f0,packagespecial:s.z9,car:s.vy,citythingstodo:s._4,citytopdestination:s.gF,citysingle:s.Qb,homePage:s.dF,discoverPage:s.NO,auth:s.dX},c=(e,t)=>{if(t.type!==r.HYDRATE)return(0,i.combineReducers)(n)(e,t);{let a={...e,...t.payload};return a}},l=(0,r.createWrapper)(()=>(console.log("vvvv ",""),(0,i.configureStore)({reducer:c,preloadedState:{auth:{isLoggedIn:!1}}})),{debug:!0})},2786:()=>{}};