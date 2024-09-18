/* eslint-disable @next/next/no-img-element */
import { Menu, Transition } from '@headlessui/react';
import axios from 'axios';
import type { NextPage } from 'next';
import { signOut, useSession } from 'next-auth/react';
import { router } from 'next/client';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, } from "react-redux";
import { setLoginStatus } from "@/redux/slices";
import { useAuth } from './context/AuthContext';  // Adjust the path as necessary

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
const SignOut: NextPage = () => {
  const [isShowCulture, setisShowCulture] = useState(false);
  // const [getLocalstorageData, setGetLocalstorageData] = useState<any | null>()
  // const [wishlistData, setWishlistData] = useState()
  const { data: session } = useSession();
  const { userId, logout } = useAuth();  // Extract logout method from AuthContext

  const router = useRouter();
  const dispatch = useDispatch()

  const Options = [
    { label: "Wishlist", value: "wishlist" },
  ]

  // useEffect(() => {
  //   let data = localStorage.getItem("userSignInData")
  //   if (data) {
  //     setGetLocalstorageData(JSON.parse(data))
  //   }
  // }, [])

 

  const handleSignOut = () => {
    // localStorage.removeItem('userSignInData');
    logout();
  
    dispatch(setLoginStatus(false));
    router.push('/');
    // signOut();
  };

  const handleWishlist = async (value: any) => {
    if (value === "wishlist") {
      router.push(`/wishlist/${userId}`);
    }
  };

  return (
    <Menu as="div" className=" flex items-center relative ml-3">
      {/* <div
        className="relative inline-block text-left"
        onMouseEnter={() => setisShowCulture(true)}
        onMouseLeave={() => setisShowCulture(false)}
      > */}
      <div>
        <Menu.Button className="relative flex cursor-pointer rounded-full bg-white text-sm focus:outline-none">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img
            className="h-10 w-10 rounded-full"
            src="/assets/images/logo/useravatar.svg"
            alt=""
          />
        </Menu.Button>
      </div>
      {/* {isShowCulture ? (
          <div
            className="absolute hide -right-16 z-10 mt-0 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
            onMouseEnter={() => setisShowCulture(true)}
            onMouseLeave={() => setisShowCulture(false)}
          >
            <ul className="px-0" role="none">
              {Options && Options.map((data, index) => (
                <li key={index} className='list-none hover:bg-gray-100'>
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-0"
                    onClick={() => handleWishlist(data?.value)}
                    className="cursor-pointer text-gray-700 py-2 text-sm block px-4  dark:hover:bg-gray-600 hover:text-white">{data?.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div> */}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-white' : '',
                  'block px-4 py-2 text-sm text-gray-700 no-underline',
                )}
              >
                {session?.user?.email}
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <>
                <button
                  onClick={() => handleWishlist("wishlist")}
                  className={classNames(
                    active ? 'bg-white' : '',
                    'block px-4 py-2 text-sm text-gray-700 bg-transparent cursor-pointer',
                  )}
                >
                  Wishlist
                </button>
                <button
                  onClick={handleSignOut}
                  className={classNames(
                    active ? 'bg-white' : '',
                    'block px-4 py-2 text-sm text-gray-700 bg-transparent cursor-pointer',
                  )}
                >
                  Sign out
                </button>
              </>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SignOut;
