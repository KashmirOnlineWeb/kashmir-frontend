(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5584],{66721:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/second-Factor-Auth",function(){return s(63102)}])},63102:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var n=s(85893),a=s(67294),l=s(92592),o=s(16881),r=s(11163),i=s(91444),c=s(9473),d=s(70763);let u=e=>(0,n.jsx)("button",{className:"p-2 rounded-md border border-solid hover:bg-white hover:text-black transition-colors duration-300",type:"button",...e});function f(){var e;let t=(0,r.useRouter)(),s=(0,c.I0)(),[f,x]=(0,a.useState)("disabled"),[h,p]=(0,a.useState)(),[g,b]=(0,a.useState)(),[m,v]=(0,a.useState)(),[j,N]=(0,a.useState)(),[y,_]=(0,a.useState)(),[S,k]=(0,a.useState)();console.log({twofaStatus:S}),(0,a.useEffect)(()=>{let e=localStorage.getItem("userSignInData");e&&_(JSON.parse(e))},[]),null==y||null===(e=y.user)||void 0===e||e._id;let w=async()=>{if(S)return;let e=o.generateSecret({name:"Next.js + Google authenticator"}),t=await l.toDataURL(e.otpauth_url||"");p(t),b(e.base32)};(0,a.useEffect)(()=>{let e=async()=>{var e;console.log("run"),k(null==y?void 0:null===(e=y.user)||void 0===e?void 0:e.twofa_enable),console.log(S,"insde use effect")};e()},[]);let E=async()=>{if(!h||!g||!m){N("Invalid QR code data or token.");return}try{let e=await fetch("/api/verify2fa",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({secret:g,token:m})}),n=await e.json();n.verified?(s((0,d.uA)(!0)),i.Am.success("Login successfully",{position:"top-right",autoClose:3e3}),t.push("/"),x("enabled"),N("")):N("Invalid token. Please try again.")}catch(e){N("Error verifying token."),console.error(e)}};return(0,n.jsxs)("main",{className:"flex flex-col gap-4 items-center p-4 md:p-24",children:[(0,n.jsxs)("div",{className:"flex gap-1",children:[(0,n.jsx)("span",{children:"2FA is"}),(0,n.jsx)("span",{className:"enabled"===f?"text-green-500":"text-red-500",children:"enabled"===f?"enable":"disabled"})]}),"enabled"!==f&&h&&(0,n.jsxs)("div",{className:"flex flex-col gap-4",children:[S?"":(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsx)("span",{children:"1. Scan the QR code with Google Authenticator:"}),(0,n.jsx)("img",{src:h,alt:"2FA QR Code"})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsx)("span",{children:"2. Enter the 6-digits code from Google Authenticator:"}),(0,n.jsx)("input",{type:"text",className:"rounded-md text-black p-2 border border-solid text-center",maxLength:6,onChange:e=>v(e.target.value),value:m})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsx)("span",{children:"3. Click Verify:"}),(0,n.jsx)(u,{onClick:E,children:"Verify"}),j&&(0,n.jsx)("span",{className:"text-sm text-center text-red-500",children:j})]})]}),"disabled"===f&&(0,n.jsx)(u,{onClick:w,children:"Enable 2FA"})]})}}},function(e){e.O(0,[3714,1876,296,9774,2888,179],function(){return e(e.s=66721)}),_N_E=e.O()}]);