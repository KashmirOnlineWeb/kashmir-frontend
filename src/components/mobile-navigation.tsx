// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// interface MobileNavigationProps {
//   toggleMenu: () => void;
//   showMobileMenu: boolean;
// }

// const MobileNavigation: React.FC<MobileNavigationProps> = ({ toggleMenu, showMobileMenu }) => {
//   const [openSubMenus, setOpenSubMenus] = useState<number[]>([]);

//   const menuItems:any = [
//     {
//       title: 'Destiations',
//       submenus: [
//         {
//           label: 'Kashmir',
//           submenus: [
//             { label: 'Pahalgam', to: '/'},
//             { label: 'Pahalgam', to: '/'},
//             { label: 'Pahalgam', to: '/'},
//           ],
//         },
//         {
//           label: 'Leh',
//           submenus: [
//             { label: 'Pahalgam', to: '/'},
//             { label: 'Pahalgam', to: '/'},
//             { label: 'Pahalgam', to: '/'},
//           ],
//         },
//       ],
//     },
//     {
//       title: 'Things to do',
//       to: '/',
//       submenus: [
//         {
//           label: 'Activity 1',
//           to: '/',
//         },
//         {
//           label: 'Activity 2',
//           to: '/',
//         },
//       ],
//     },
//     {
//       title: 'Holiday Packages',
//       submenus: [
//         {
//           label: 'Summer packages',
//           to: '/',
//         },
//         {
//           label: 'Winter packages',
//           to: '/',
//         },
//       ],
//     },
//   ];

//   const handleSubMenuClick = (index: number) => {
//     if (openSubMenus.includes(index)) {
//       // If submenu is already open, close it
//       setOpenSubMenus(openSubMenus.filter((i) => i !== index));
//     } else {
//       // If submenu is closed, open it
//       setOpenSubMenus([...openSubMenus, index]);
//     }
//   };


//   return (
//     <div className={`fixed inset-0 z-50 overflow-hidden transition-transform ease-in-out duration-300 ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'}`}>
//       <div className="flex h-full">
//         <div className="flex flex-col items-start w-[95%] bg-white h-full shadow-xl">
//           <div className="h-[162px] w-full bg-mediumblue-100 relative">
//             <div onClick={toggleMenu} className="absolute right-5 top-5 cursor-pointer">
//               <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </div>

//             <div className="flex p-[20px] pt-[50px] gap-8">
//               <Image
//                 alt=""
//                 src="/assets/images/logo/user.png"
//                 width={91}
//                 height={91}
//               />
//               <div>
//                 <p className="text-[18px] leading-4 font-semibold">Allen Fernandes</p>
//                 <button className="bg-white text-black py-[10px] px-[20px] rounded-full text-[14px] font-medium leading-3 w-[159px] h-[40px] cursor-pointer">Logout</button>
//               </div>
//             </div>
//           </div>

//           <nav className="mt-3 text-black w-full">
//             <ul className='p-0 m-0'>
//               {menuItems.map((menuItem:any, index:number) => (
//                 <li key={index} className='list-none px-5'>
//                   <div>
//                     <div className='flex justify-between items-center' onClick={() => handleSubMenuClick(index)}>
//                       <p className='text-[18px] leading-[21.6px] font-bold cursor-pointer'>{menuItem.title}</p>
//                       <p className='cursor-pointer text-[24px] m-0'>
//                         {openSubMenus.includes(index) ? 
//                         <span className="text-[26px]">-</span>  : '+'}
//                       </p>
//                     </div>
//                     {openSubMenus.includes(index) && (
//                       <div>
//                         {/* Render submenu items */}
//                         {menuItem.submenus.map((submenu:any, subIndex:number) => (
//                           <div key={subIndex} className='px-5'>
//                             <div className='text-[#404040] text-[16px] py-2 font-semibold leading-[25.2px] cursor-pointer'>
//                               {submenu.submenus && submenu.label}
//                               {
//                                 !submenu.submenus && 
//                                 <Link className="no-underline hover:text-mediumblue-100 text-[#404040] text-[16px] py-2 font-semibold leading-[25.2px] cursor-pointer" href={submenu.to}>
//                                   {submenu.label}
//                                 </Link>
//                               }
//                               </div>
//                             <div className='border-b border-solid border-smokegrey' />

//                             {/* Nested submenu items */}
//                             {submenu?.submenus && submenu?.submenus?.map((innerMenu:any, innerIndex:any) => (
//                               <div key={innerIndex} className="px-5 text-[#707070] py-2">
//                                 <Link className="no-underline hover:text-mediumblue-100 text-[#707070] leading-[22.4px] text-[16px] font-semibold" href={innerMenu.to}>
//                                   {innerMenu.label}
//                                 </Link>
//                               </div>
//                             ))}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     {!openSubMenus.includes(index) && <div className='border-b border-solid border-smokegrey' /> }
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </nav>



//           <div className='text-black px-5 pt-5'>
//             <p className='text-[12px] leading-[14.4px]'>For any help call on</p>
//             <p className='text-[18px] leading-[21.6px] text-mediumblue-100 font-bold'>+91 99999 99999</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileNavigation;

// MobileNavigation.tsx

import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import SignIn from "./sign-in";
import AfterLoginButton from "./AfterLoginButton";
import { Dialog, Transition } from "@headlessui/react";

interface MenuItem {
  subMenu: any;
  label: string;
  to: string;
}

interface MobileNavigationProps {
  toggleMenu: () => void;
  showMobileMenu: boolean;
  headerRoutes: any;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ toggleMenu, showMobileMenu, headerRoutes }) => {
  const [openSubMenus, setOpenSubMenus] = useState<number[]>([]);
  const router = useRouter();
  const homeData = useSelector((state: any) => state.homePage.data)
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSubMenuClick = (index: number) => {
    if (openSubMenus.includes(index)) {
      setOpenSubMenus(openSubMenus.filter((i) => i !== index));
    } else {
      setOpenSubMenus([...openSubMenus, index]);
    }
  };

  return (
    <div className={`fixed ${isOpen ? "hidden" : ""} inset-0 z-10 overflow-hidden transition-transform ease-in-out duration-300 ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex h-full">
        <div className="flex flex-col items-start sm:w-[60%] w-[95%] bg-white h-full shadow-xl">
          <div className="h-[162px] w-full bg-mediumblue-100 relative">
            <div onClick={toggleMenu} className="absolute right-5 top-5 cursor-pointer">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>

            <div className="flex p-[20px] pt-[50px] gap-8">
              <Image
                alt=""
                src="/assets/images/logo/user.png"
                width={91}
                height={91}
              />
              <AfterLoginButton />
              <div>
                <button onClick={openModal} className="bg-white mt-3 text-black py-[10px] px-[20px] rounded-full text-[14px] font-medium leading-3 w-[159px] h-[40px] cursor-pointer">Sign in</button>
              </div>

            </div>
          </div>
          <nav className="mt-3 text-black w-full">
            <ul className="p-0 m-0">
              {headerRoutes?.map((route: any, index: any) => (
                <li key={index} className="list-none px-5">
                  <div>
                    {route.label == "Top Destinations" ||
                      route.label == "Religious Tourism" ||
                      route.label == "Services" ||
                      route.label == "Things to do" ||
                      route.label == "Culture" ? (
                      < div >
                        <div className="flex justify-between items-center" >
                          <Link href={route.to}
                            className='no-underline text-black text-[18px] leading-[21.6px] font-bold cursor-pointer'>{route.label}</Link>
                          <p onClick={() => handleSubMenuClick(index)}
                            className="cursor-pointer text-[24px] m-0">{openSubMenus.includes(index) ? <span className="text-[26px]">-</span> : '+'}</p>
                        </div>
                        {openSubMenus.includes(index) && (
                          <div>
                            <div className="px-5">
                              <ul className="px-0" role="none">
                                {route?.subMenu?.map((subRoute: any, index: any) => (
                                  <>
                                    <li className='list-none hover:bg-gray-100' key={index}>
                                      <Link href={subRoute?.to} className='no-underline text-mediumblue-100'>
                                        <p className="cursor-pointer text-gray-700 py-2 text-sm block px-4  dark:hover:bg-gray-600 hover:text-white" onClick={toggleMenu}>
                                          {subRoute?.label}
                                        </p>
                                      </Link>
                                    </li>
                                  </>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link href={route.to} className='no-underline text-mediumblue-100'>
                        <p className="text-[18px] mt-1 text-black leading-[21.6px] font-bold cursor-pointer" onClick={toggleMenu}>
                          {route.label}
                        </p>
                      </Link>
                    )}
                  </div>
                </li >
              ))}
            </ul>
          </nav>

          <div>
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <SignIn onClose={closeModal} />
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>

          <div className='text-black px-5 pt-5'>
            <p className='text-[18px] font-bold leading-[14.4px]'>For any help call on</p>
            {homeData?.contactdetail && homeData?.contactdetail.map((data: any, index: any) => (
              <p key={index}
                className='text-[18px] mt-3 leading-[21.6px] text-mediumblue-100 font-bold'>
                {` +91 ${data?.contact}`}</p>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
};

export default MobileNavigation;

