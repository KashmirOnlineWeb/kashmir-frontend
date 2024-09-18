/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { checkEmail, signinApi, signUpApi } from '../services/authService';
import EmailField from './email_field';
import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";
import { setLoginStatus } from "@/redux/slices";
import SecondFactorAuth from '../pages/second-Factor-Auth';
import { router } from 'next/client';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from './context/AuthContext';  // Adjust the path as necessary

type SignInType = {
  onClose?: any;
};

const SignIn: NextPage<SignInType> = ({ onClose }) => {
  const handleGoogleSignIn = (event: React.FormEvent<Element>) => {
    event.preventDefault();
    signIn('google', {
      callbackUrl: 'http://localhost:3000/',
    });
  };

  const dispatch = useDispatch();
  // const history = useHistory()
  const { login } = useAuth();  // Extract logout method from AuthContext

  const router = useRouter()
  const [btnColor, setBtnColor] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('')
  const getLoginError = localStorage.getItem('error')
  useEffect(() => {
    if (emailValue !== '' || passwordValue !== '') {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  }, [emailValue, passwordValue]);

  const { validate } = EmailField(emailValue);
  const handleChange = (e: any, key: any) => {
    if (key === 'email') {
      setEmailValue(e.target.value);
    }
    if (key === 'password') {
      if (e.target.value.length < 8) {
        setError('Password should be minimum 8 digits')
      } else {
        setError('')
      }
      setPasswordValue(e.target.value)
    }
    // setEmailValue(e.target.value);
    // setPasswordValue(e.target.value)
    validate(e.target.value);
  };
  const showPasswordComponent = (e: any) => {
    e.preventDefault();
    setShowPassword(true);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await checkEmail(emailValue);
      if (response.status) {
        const signinResponse = await signinApi({
          email: emailValue,
          password: passwordValue,
        });

        if (signinResponse.status) {
          // localStorage.setItem(
          //   'userSignInData',
          //   JSON.stringify(signinResponse.data)
          // );
          login(signinResponse.data);
          dispatch(setLoginStatus(true));
          // await router.push("/second-Factor-Auth")
          toast.success('Login successfully', {
            position: 'top-right',
            autoClose: 3000, // 3 seconds
          });
          if (onClose) {
            onClose();
          }
        }

      } else {
        // call signup api here
        const signupResponse = await signUpApi({
          email: emailValue,
          password: passwordValue,
        });

        if (signupResponse?.status) {
          // localStorage.setItem(
          //   'userSignInData',
          //   JSON.stringify(signupResponse.data)
          // );
          dispatch(setLoginStatus(true));
          login(signupResponse.data);

          toast.success('Account created successfully', {
            position: 'top-right',
            autoClose: 3000, // 3 seconds
          });
          onClose();
        }
        if (getLoginError) {
          toast.error(getLoginError, {
            position: 'top-right',
            autoClose: 3000, // 3 seconds
          });
        }
      }
    } catch (error) {
      /* empty */
    }
    setEmailValue('');
    setPasswordValue('');
    setError('')
    setShowPassword(true);
  };
  return (
    <div className="font-label-small-label relative box-border flex  w-full flex-col items-center justify-start gap-[24px] rounded-2xl bg-white px-8 py-4 text-left text-xs text-white">
      <div className="flex flex-col items-center justify-center gap-[24px] self-stretch">
        <div className="flex flex-row items-start justify-end self-stretch">
          <button
            className="cursor-pointer bg-transparent p-0"
            onClick={onClose}
          >
            <img
              className="relative h-6 w-6 shrink-0 overflow-hidden"
              alt=""
              src="/assets/images/icons/cross.svg"
            />
          </button>
        </div>
        <div className="flex flex-row items-center justify-start self-stretch">
          <a
            className="box-border flex h-[80px] w-[150px] flex-row items-center justify-center text-[inherit] [text-decoration:none]"
            href="#"
          >
            <div className="font-inter relative">
              <Image
                className="relative h-[80px] max-w-full shrink-0 self-stretch overflow-hidden rounded-xl object-cover"
                alt=""
                src="/assets/images/logo/branding_kashmironline_logo_colorful.png"
                width={150}
                height={80}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="relative self-stretch text-[24px] font-semibold leading-[31px] text-gray-100">
        <p className="font-inter m-0">{`Login / Signup for `}</p>
        <p className="font-inter m-0">Personalised experience</p>
      </div>
      <div className="flex w-96 flex-col items-start justify-start gap-[16px] text-black">
        <form className="w-full">
          <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
            <div className="font-inter relative font-medium leading-[16px]">
              {/* Email or Mobile Number */}
              {showPassword ? 'Password' : 'Email or Mobile Number'}
            </div>
            <div className="text-firebrick flex flex-col items-start justify-start gap-[8px] self-stretch text-2xs">
              {showPassword ? (
                <>
                  <input
                    className="font-inter font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch rounded-[29px] border-[1px] border-solid border-text-gray-300 bg-[transparent] px-6 py-2 text-sm"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={passwordValue}
                    onChange={(e) => handleChange(e, 'password')}
                  />
                  {error}
                  <button
                    onClick={handleSubmit}
                    className="bg-mediumblue relative mt-4 h-12 w-full shrink-0 cursor-pointer self-stretch overflow-hidden rounded-[32px] p-0 mix-blend-normal [border:none]"
                    style={{
                      backgroundColor: btnColor ? '#0022cc' : '#11111138',
                      color: btnColor ? '#fff' : '#000',
                    }}
                  >
                    <div className="flex flex-row items-center justify-center gap-[8px]">
                      Continue
                    </div>
                  </button>
                </>
              ) : (
                <>
                  <input
                    className="font-inter font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch rounded-[29px] border-[1px] border-solid border-text-gray-300 bg-[transparent] px-6 py-2 text-sm"
                    type="text"
                    name="email"
                    placeholder="Please enter email or phone"
                    value={emailValue}
                    onChange={(e) => handleChange(e, 'email')}
                  />
                  {error}
                  <button
                    onClick={showPasswordComponent}
                    className="bg-mediumblue relative mt-4 h-12 w-full shrink-0 cursor-pointer self-stretch overflow-hidden rounded-[32px] p-0 mix-blend-normal [border:none]"
                    style={{
                      backgroundColor: btnColor ? '#0022cc' : '#11111138',
                      color: btnColor ? '#fff' : '#000',
                    }}
                  >
                    <div className="flex flex-row items-center justify-center gap-[8px]">
                      Continue
                    </div>
                  </button>
                </>
              )}
            </div>
          </div>
        </form>
        <div className="text-dimgray-100 font-avenir flex w-[407px] flex-row items-center justify-start gap-[23px]">
          <div className="bg-dimgray-200 relative h-[1.5px] flex-1" />
          <div className="font-inter relative">Or log in / Sign up with</div>
          <div className="bg-dimgray-200 relative h-[1.5px] flex-1" />
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="font-inter border-darkslategray relative box-border h-12 shrink-0 cursor-pointer self-stretch overflow-hidden rounded-[40px] border-[1px] border-solid bg-white p-0"
        >
          <div className="flex flex-row items-center justify-center gap-[16px]">
            <img
              className="relative h-6 w-6 shrink-0 overflow-hidden"
              alt=""
              src="/assets/images/icons/google-logo.svg"
            />
            Continue with Google
          </div>
        </button>
      </div>
      <div className="flex flex-row items-start justify-center self-stretch py-2 pl-0 pr-2 text-center text-[10px] text-darkslategray-100">
        {/* <a
          className="relative flex-1 text-[inherit] [text-decoration:none]"
          href="#"
        > */}
          <span className="text-darkslategray font-inter">{`By continuing, you agree to the `}</span>
          <Link
            href="/term-of-use"
            className="font-inter text-darkslategray-200 [text-decoration:underline]"
          >
            Terms of use
          </Link>
          <span className="text-mediumblue-100">{`  `}</span>&nbsp;
          <span className="text-mediumblue font-inter">and</span>&nbsp;
          <span className="text-mediumblue-100">{` `}</span>
          <Link
            href="/privacy-policy"
            className="font-inter text-darkslategray-200 [text-decoration:underline]"
          >
            <span>Privacy Policy.</span>
            <span className="text-dimgray-100">{` `}</span>
          </Link>
        {/* </a> */}
      </div>
    </div>
  );
};
 export default SignIn;

// import React, { useState } from 'react';
// import { signIn } from 'next-auth/react';
// import Router, { useRouter } from 'next/router';
// import { useDispatch } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';
// import { checkEmail, signinApi, signUpApi } from '../services/authService';
// import 'react-toastify/dist/ReactToastify.css';
// import { NextPage } from 'next';
// import { setLoginStatus } from '@/redux/slices';
// import Image from 'next/image';
// import { button } from '@nextui-org/react';

// type SignInType = {
//   onClose?: any;
// };

// const SignIn: NextPage<SignInType> = ({ onClose }) => {
//   const router = useRouter();
//   const dispatch = useDispatch()
//   const [btnColor, setBtnColor] = useState(false);
//   const [signinResponseSave, setSigninResponseSave] = useState<any>()
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [otp, setOtp] = useState('');
//   const [step, setStep] = useState(1);  // 1: Email & Password, 2: OTP
//   const [error, setError] = useState<any>('');
//   const [showPassword, setShowPassword] = useState(true);

//   const handleGoogleSignIn = (event: React.FormEvent<Element>) => {
//     event.preventDefault();
//     signIn('google', {
//       callbackUrl: 'http://localhost:3000/',
//     });
//   };
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
//     const value: any = e.target.value;
//     if (key === 'email') {
//       setBtnColor(value)
//       setEmail(value);
//     } else if (key === 'password') {
//       setPassword(value);
//       if (value.length < 8) {
//         setError('Password should be minimum 8 digits');
//       } else {
//         setError('');
//       }
//     }
//   };

//   const sendOtp = async (email: string) => {
//     try {
//       const response = await fetch('/api/send-otp', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });
//       const data = await response.json();
//       if (data.success) {
//         toast.info('OTP sent to your email.');
//       } else {
//         console.log("cc ", data.message);
//         throw new Error(data.message);
//       }
//     } catch (error: any) {
//       toast.error(error.message);
//     }
//   };

//   const showPasswordComponent = (e: any) => {
//     e.preventDefault();
//     setShowPassword(false);
//   };

//   const handleSubmit = async (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     if (step === 1) {
//       // Check email and password via your authService
//       try {
//         const emailResponse = await checkEmail(email);
//         // if (!emailResponse.status) {
//         //   toast.error('Email does not exist.');
//         //   return;
//         // }
//         if (emailResponse.status) {
//           const signinResponse = await signinApi({ email, password });
//           setSigninResponseSave(signinResponse.data)
//           sendOtp(email);
//           setStep(2);
//         } else {
//           // setError('Invalid email or password');
//           // toast.error('Invalid credentials');
//           // call signup api here
//           const signupResponse = await signUpApi({
//             email: email,
//             password: password,
//           });

//           if (signupResponse?.status) {
//             toast.success('Account created successfully', {
//               position: 'top-right',
//               autoClose: 3000, // 3 seconds
//             });
//             onClose();
//           }

//         }
//       } catch (error: any) {
//         setError('An error occurred while logging in');
//         toast.error(error.message);
//       }
//     } else if (step === 2) {
//       // Proceed to verify OTP
//       verifyOtp();
//     }
//   };

//   const verifyOtp = async () => {
//     // This should call another API to verify the OTP
//     // Here, just simulating an API call
//     if (otp === '123456') { // Assuming 123456 is the OTP for demonstration
//       if (signinResponseSave) {
//         localStorage.setItem(
//           'userSignInData',
//           JSON.stringify(signinResponseSave)
//         )
//       }
//       dispatch(setLoginStatus(true));
//       router.push("/")
//       // signIn('credentials', { email, callbackUrl: '/' });
//       if (onClose) onClose();
//     } else {
//       toast.error('Invalid OTP');
//     }
//   };

//   return (
//     <>
//       <div className="font-label-small-label relative box-border flex w-full flex-col items-center justify-start gap-[24px] rounded-2xl bg-white px-8 py-4 text-left text-xs text-white">
//         <div className="flex flex-col items-center justify-center gap-[24px] self-stretch">
//           <div className="flex flex-row items-start justify-end self-stretch">
//             <button
//               className="cursor-pointer bg-transparent p-0"
//               onClick={onClose}
//             >
//               <img
//                 className="relative h-6 w-6 shrink-0 overflow-hidden"
//                 alt=""
//                 src="/assets/images/icons/cross.svg" />
//             </button>
//           </div>
//           <div className="flex flex-row items-center justify-start self-stretch">
//             <a
//               className="box-border flex h-[80px] w-[150px] flex-row items-center justify-center text-[inherit] [text-decoration:none]"
//               href="#"
//             >
//               <div className="font-inter relative">
//                 <Image
//                   className="relative h-[80px] max-w-full shrink-0 self-stretch overflow-hidden rounded-xl object-cover"
//                   alt=""
//                   src="/assets/images/logo/branding_kashmironline_logo_colorful.png"
//                   width={150}
//                   height={80} />
//               </div>
//             </a>
//           </div>
//         </div>
//         <div className="relative self-stretch text-[24px] font-semibold leading-[31px] text-gray-100">
//           <p className="font-inter m-0">{`Login / Signup for `}</p>
//           <p className="font-inter m-0">Personalised experience</p>
//         </div>
//         <div className="flex w-full lg:w-96 flex-col items-start justify-start gap-[16px] text-black">
//           <form className="w-full" >
//             <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
//               <div className="font-inter relative font-medium leading-[16px]">
//                 {/* {step === 1 ? 'Email or Mobile Number' : 'Enter OTP'} */}
//               </div>
//               <div className="text-firebrick flex flex-col items-start justify-start gap-[8px] self-stretch text-2xs">
//                 {step === 1 ? (
//                   <>
//                     {showPassword ?
//                       <><input
//                         className="font-inter font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch rounded-[29px] border-[1px] border-solid border-text-gray-300 bg-[transparent] px-6 py-2 text-sm"
//                         type="text"
//                         name="email"
//                         placeholder="Please enter email or phone"
//                         value={email}
//                         required
//                         onChange={(e) => handleChange(e, 'email')} />
//                         <button
//                           onClick={showPasswordComponent}
//                           className="bg-mediumblue relative mt-4 h-12 w-full shrink-0 cursor-pointer self-stretch overflow-hidden rounded-[32px] p-0 mix-blend-normal [border:none]"
//                           style={{
//                             backgroundColor: btnColor ? '#0022cc' : '#11111138',
//                             color: btnColor ? '#fff' : '#000',
//                           }}
//                         >
//                           <div className="flex flex-row items-center justify-center gap-[8px]">
//                             Continue
//                           </div>
//                         </button></>
//                       : <>
//                         <input
//                           className="font-inter font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch rounded-[29px] border-[1px] border-solid border-text-gray-300 bg-[transparent] px-6 py-2 text-sm"
//                           type="password"
//                           name="password"
//                           placeholder="Enter Password"
//                           value={password}
//                           onChange={(e) => handleChange(e, 'password')} />
//                         {error && <div className="error">{error}</div>}</>
//                     }
//                   </>
//                 ) : (
//                   <>
//                     <input
//                       className="font-inter font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch rounded-[29px] border-[1px] border-solid border-text-gray-300 bg-[transparent] px-6 py-2 text-sm"
//                       type="text"
//                       name="otp"
//                       placeholder="OTP"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)} />
//                   </>
//                 )}
//                 {!showPassword &&
//                   <button
//                     onClick={handleSubmit}
//                     className="bg-mediumblue relative mt-4 h-12 w-full shrink-0 cursor-pointer self-stretch overflow-hidden rounded-[32px] p-0 mix-blend-normal [border:none]"
//                     style={{
//                       backgroundColor: btnColor ? '#0022cc' : '#11111138',
//                       color: btnColor ? '#fff' : '#000',
//                     }}
//                   >
//                     <div className="flex flex-row items-center justify-center gap-[8px]">
//                       {step === 1 ? 'Continue' : 'Verify OTP'}
//                     </div>
//                   </button>}
//               </div>
//             </div>
//           </form>
//           <div className="text-dimgray-100 font-avenir flex w-full flex-row items-center justify-start gap-[23px]">
//             <div className="bg-dimgray-200 relative h-[1.5px] flex-1" />
//             <div className="font-inter relative">Or log in / Sign up with</div>
//             <div className="bg-dimgray-200 relative h-[1.5px] flex-1" />
//           </div>
//           <button
//             onClick={handleGoogleSignIn}
//             className="font-inter border-darkslategray relative box-border h-12 shrink-0 cursor-pointer self-stretch overflow-hidden rounded-[40px] border-[1px] border-solid bg-white p-0"
//           >
//             <div className="flex flex-row items-center justify-center gap-[16px]">
//               <img
//                 className="relative h-6 w-6 shrink-0 overflow-hidden"
//                 alt=""
//                 src="/assets/images/icons/google-logo.svg"
//               />
//               Continue with Google
//             </div>
//           </button>
//         </div>
//         <div className="flex flex-row items-start justify-center self-stretch py-2 pl-0 pr-2 text-center text-[10px] text-darkslategray-100">
//           <a
//             className="relative flex-1 text-[inherit] [text-decoration:none]"
//             href="#"
//           >
//             <span className="text-darkslategray font-inter">{`By continuing, you agree to the `}</span>
//             <a
//               href="#"
//               className="font-inter text-darkslategray-200 [text-decoration:underline]"
//             >
//               Terms of use
//             </a>
//             <span className="text-mediumblue-100">{`  `}</span>
//             <span className="text-mediumblue font-inter">and</span>
//             <span className="text-mediumblue-100">{` `}</span>
//             <a
//               href="#"
//               className="font-inter text-darkslategray-200 [text-decoration:underline]"
//             >
//               <span>Privacy Policy.</span>
//               <span className="text-dimgray-100">{` `}</span>
//             </a>
//           </a>
//         </div>
//       </div >
//     </>
//   );
// };

// export default SignIn;
// function dispatch(arg0: { payload: any; type: "auth/setLoginStatus"; }) {
//   throw new Error('Function not implemented.');
// }

