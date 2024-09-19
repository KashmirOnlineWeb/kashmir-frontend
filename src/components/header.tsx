import React from 'react';
import { Dialog, Transition } from "@headlessui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Fragment, useEffect, useState } from "react";
import PackageIcon from "./packageIcon";
import SignIn from "./sign-in";
import SignOut from "./sign-out";
import VariantFilledTypePrimary from "./variant-filled-type-primary";
import HoverCity from "./HoverCity";
import { useRouter } from "next/router";
import Image from "next/image";
import MobileNavigation from './mobile-navigation';
import Property1Default from "./property1-default";
import { Tooltip } from "@nextui-org/react";
import HoverCulture from "./HoverCulture";
import HoverReligiousTourism from "./HoverReligiousTourism";
import HoverService from "./HoverService";
import HoverThingstodo from "./HoverThingstodo";
import { getCachedCityData } from '../utils/commonFunctions';
import { useSelector, useDispatch } from "react-redux";
import { setLoginStatus } from "@/redux/slices";
import { useAuth } from './context/AuthContext';
import { getAllDestinations } from '@/services/city';




const Header: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setisShow] = useState(false);
  const [isShowReligiousTourism, setisShowReligiousTourism] = useState(false);
  const [isShowCulture, setisShowCulture] = useState(false);
  const [isShowService, setisShowService] = useState(false);
  const [isShowThingstodo, setisShowThingstodo] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [cachedCityState, setCachedCityState] = useState<any[]>(getCachedCityData());
  const [wishlistData, setWishlistData] = useState<any>()
  const [filterData, setFilterData] = useState([])
  const [direction, setDirection] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [destinations, setDestinations] = useState({});
  const [religiousDestinations, setReligiousDestinations] = useState<any[]>([]);
  const [topDestinations, setTopDestinations] = useState<any[]>([]);

  const authContext = useAuth();
  //console.log("authContext ", authContext);
  const isLoggedIn = authContext?.isLoggedIn;


  const path = router.asPath
  useEffect(() => {
    setIsClient(true); // Set to true after component mounts
    const FetchData = async () => {
      try {
        const data = await getAllDestinations();
        if (!data) {
          throw new Error("No data received from API");
        }

        const topDestinations = data
          .filter((destination: any) => destination.destination_type === 1)
          .map((destination: any) => ({
            label: destination.name.toUpperCase(),
            to: destination.slug,
            id: destination.id,
            slug: destination.slug
          }));

        const religiousDestinations = data
          .filter((destination: any) => destination.destination_type === 2)
          .map((destination: any) => ({
            label: destination.name.toUpperCase(),
            to: destination.slug,
            id: destination.id,
            slug: destination.slug
          }));

        setDestinations(topDestinations);
        setReligiousDestinations(religiousDestinations);
        setTopDestinations(topDestinations);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };
    FetchData();
  }, []); // Add an empty dependency array to run only once


  useEffect(() => {
    setIsClient(true);
    // const FetchData = async () => {
    //   const alldestinations = await getAllDestinations();
    //   setAllDestinations(alldestinations);
    // }
    // FetchData();
    let data = typeof window !== 'undefined' ? localStorage.getItem("userSignInData") : false;
    if (data) {
      dispatch(setLoginStatus(true));
    }
  }, [])

  // useEffect(() => {
  //   setIsClient(true);
  //   if (cachedCityState) {
  //     const updatedCachedCityState = cachedCityState?.map((val: any) => ({
  //       label: `${val?.city_name}`,
  //       to: `/destination/${val?.slug}`
  //     }));
  //     setCachedCityState(updatedCachedCityState);
  //   }
  // }, []);

  const headerRoutes = [
    { label: 'Home', to: '/' },
    {
      label: 'Top Destinations', to: '/destination', subMenu: topDestinations
    },
    {
      label: 'Religious Tourism', to: '/religious-places', subMenu: religiousDestinations
    },
    {
      label: 'Culture', to: '/culture', subMenu: [
        { label: "CUISINE", to: "CUISINE" },
        { label: "RELIGIOUS PLACES", to: "RELIGIOUS PLACES" },
        { label: "HERITAGE & HISTORICAL PLACES", to: "HERITAGE & HISTORICAL PLACES" },
        { label: "MUSIC", to: "MUSIC" },
        { label: "DANCES", to: "DANCES" },
        { label: "DRESSES", to: "DRESSES" },
        { label: "ARTS AND CRAFTS", to: "ARTS AND CRAFTS" },
      ]
    },
    {
      label: 'Things to do', to: '/things-to-do', subMenu: [
        { label: "Attractions", to: "#" },
      ]
    },
    {
      label: 'Services', to: '/listing?tab=package', subMenu: [
        { label: "Listing", to: "listing?tab=package" },
        { label: "Hotel", to: "hotel?tab=package" },
        { label: "Car", to: "car?tab=package" },
      ]
    },

    { label: 'About', to: '/about' },
    { label: 'Shop', to: '/shopping' },
  ];

  /**
   * function to open mobile menu
   */
  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  function toggle() {
    setisShow((isShow) => !isShow);
  }

  const religiousTourismToggle = () => {
    setisShowReligiousTourism((prev) => !prev)
  }

  const thingsToDoToggle = () => {
    setisShowThingstodo((prev) => !prev)
  }

  const cultureToggle = () => {
    setisShowCulture((prev) => !prev)
  }

  const serviceToggle = () => {
    setisShowService((prev) => !prev)
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onClickDiscover = () => {
    //router.push('/discover');
  };

  let windowWidth: any = typeof window !== "undefined" && window.innerWidth
  useEffect(() => {
    if (windowWidth < 768) {
      setDirection(true)
    }
    else {
      setDirection(false)
    }
  }, [windowWidth])

  return (
    <>
      <div className={` flex w-full bg-red-600 fixed z-10 top-0`}>
        <div className="container relative zindex mx-auto box-border flex flex-row max-lg:flex-col items-center overflow-scroll justify-between sm:py-2  px-[24px] lg:overflow-hidden">
          <div className={`${direction ? `scrolling-text` : ``} first-line:relative font-medium leading-[20px] whitespace-nowrap md:whitespace-pre max-md:pt-[3px]`}>
            Registered with Department of Tourism Government of India,
            Registration number: JKEA00001506
          </div>
          <div className="flex flex-row items-center justify-center gap-[14px] overflow-hidden max-md:p-[7px] ">
            <Tooltip placement="top"
              showArrow
              offset={-7}
              content="Instagram"
              classNames={{
                base: [
                  // arrow color
                  "before:bg-neutral-400 dark:before:bg-white",
                ],
                content: [
                  "py-2 px-4 shadow-xl",
                  "font-inter text-black rounded-lg bg-black text-white",
                ],
              }}
            >
              <Link className="relative text-white [text-decoration:none]" href="https://www.instagram.com/mykashmironline/?igshid=YmMyMTA2M2Y%3D">
                <Property1Default
                  vector="akar-icons:instagram-fill"
                  property1DefaultPosition="unset"
                  property1DefaultTransform=""
                  property1DefaultMargin="unset"
                  property1DefaultTop="unset"
                  property1DefaultLeft="unset"
                  property1DefaultZIndex="unset"
                  className="items-center justify-center bg-black/[.09]"
                  iconWidth="w-[23px] h-[23px]"
                />
              </Link>
            </Tooltip>
            <Tooltip placement="top"
              showArrow
              offset={-7}
              content="Facebook"
              classNames={{
                base: [
                  // arrow color
                  "before:bg-neutral-400 dark:before:bg-white",
                ],
                content: [
                  "py-2 px-4 shadow-xl",
                  "font-inter text-black rounded-lg bg-black text-white",
                ],
              }}
            >
              <Link className="relative text-white [text-decoration:none]" href="https://www.facebook.com/kashmironline.4/?mibextid=ZbWKwL">
                <Property1Default
                  vector="mdi:facebook"
                  property1DefaultPosition="unset"
                  property1DefaultTransform=""
                  property1DefaultMargin="unset"
                  property1DefaultTop="unset"
                  property1DefaultLeft="unset"
                  property1DefaultZIndex="unset"
                  className="items-center justify-center bg-black/[.09]"
                  iconWidth="w-6 h-6"
                />
              </Link>
            </Tooltip>
            <Tooltip placement="top"
              showArrow
              offset={-7}
              content="Twitter"
              classNames={{
                base: [
                  // arrow color
                  "before:bg-neutral-400 dark:before:bg-white",
                ],
                content: [
                  "py-2 px-4 shadow-xl ",
                  "font-inter text-black rounded-lg bg-black text-white",
                ],
              }}
            >
              <Link className="relative text-white [text-decoration:none]" href="https://twitter.com/mykashmironline">
                <Property1Default
                  vector="mdi:twitter"
                  property1DefaultPosition="unset"
                  property1DefaultTransform=""
                  property1DefaultMargin="unset"
                  property1DefaultTop="unset"
                  property1DefaultLeft="unset"
                  property1DefaultZIndex="unset"
                  className="items-center justify-center bg-black/[.09]"
                  iconWidth="w-6 h-6"
                />
              </Link>
            </Tooltip>
            <Tooltip placement="top"
              showArrow
              offset={-7}
              content="Youtube"
              classNames={{
                base: [
                  // arrow color
                  "before:bg-neutral-400 dark:before:bg-white",
                ],
                content: [
                  "py-2 px-4 shadow-xl",
                  "font-inter text-black rounded-lg bg-black text-white",
                ],
              }}
            >
              <Link className="relative text-white [text-decoration:none]" href="https://www.youtube.com/channel/UC2rqwz7Zd5p9O_lFwCjd1GQ">
                <Property1Default
                  vector="mdi:youtube"
                  property1DefaultPosition="unset"
                  property1DefaultTransform=""
                  property1DefaultMargin="unset"
                  property1DefaultTop="unset"
                  property1DefaultLeft="unset"
                  property1DefaultZIndex="unset"
                  className="items-center justify-center bg-black/[.09]"
                  iconWidth="sm:w-6 sm:h-6"
                />
              </Link>
            </Tooltip>
          </div>
        </div>
      </div >

      {/* desktop menu */}
      < div className="container sm:px-4 mx-auto mt-10 pt-2 md:block hidden" >
        <div className=" box-border flex h-[72px] w-full flex-row items-center justify-between py-0 text-left font-others-capitalised text-lg text-text-gray-900">
          <Link
            href="/"
            className="flex flex-row items-center justify-start text-[inherit] [text-decoration:none]"
          >
            <Image
              className="relative h-[80px] max-w-full shrink-0 self-stretch overflow-hidden rounded-xl object-cover"
              alt=""
              src="/assets/images/logo/branding_kashmironline_logo_colorful.png"
              width={150}
              height={80}
            />
          </Link>
          <div className={`flex flex-row items-center justify-start gap-[30px] custom-media-font relative ${isLoggedIn && isLoggedIn ? `text-[11px]` : `text-sm`}`}>
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => setisShow(true)}
              onMouseLeave={() => setisShow(false)}
            >
              <div>
                <Link className="[text-decoration:none]" href="/destination">
                  <button
                    type="button"
                    className={`${path == "/destination" ? " color-pink " : ""} inline-flex bgHoverRed w-full justify-center ${isLoggedIn && isLoggedIn ? `` : `gap-x-1.5`} bg-white py-2 relative font-medium leading-[20px] text-sm cursor-pointer`}
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={toggle}
                  >
                    Top Destinations
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
              {isShow ? (
                <div
                  className="absolute hide right-0 z-10 mt-0 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                  onMouseEnter={() => setisShow(true)}
                  onMouseLeave={() => setisShow(false)}
                >
                  <ul className="px-0" role="none">
                    {topDestinations && topDestinations.map((destination: { slug: string; label: string; }, index: React.Key | null | undefined) => (
                      <li key={index} className='list-none hover:bg-gray-100'>
                        <a
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-0"
                          onClick={() => router.push(`/destination/${destination.slug}`)}
                          className={`cursor-pointer text-gray-700 py-2 text-sm block px-4 dark:hover:bg-gray-600 hover:text-white ${path === destination.slug ? 'color-pink' : ''}`}>
                          {destination.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>

            {/* <Link
              className="flex bgHoverRed flex-row items-center justify-start text-[inherit] [text-decoration:none]"
              href="/package"
            >
              <div className="relative font-medium leading-[20px]">
                Packages
              </div>
            </Link> */}

            {/* <Link
              className="flex flex-row bgHoverRed items-center justify-start text-[inherit] [text-decoration:none]"
              href="/things-to-do"
            >
              <div className={` ${path == "/things-to-do" ? " color-pink " : ""} relative ${isLoggedIn && isLoggedIn ? `text-[14px]` : `text-sm`} font-medium leading-[20px]`}>
                Things to do
              </div>
            </Link> */}

            <div
              className="relative inline-block text-left"
              onMouseEnter={() => setisShowReligiousTourism(true)}
              onMouseLeave={() => setisShowReligiousTourism(false)}
            >
              <div>
                <Link className="[text-decoration:none]" href="/religious-places">
                  <button
                    type="button"
                    className={` ${path == "/religious-places" ? " color-pink " : ""} inline-flex bgHoverRed w-full justify-center ${isLoggedIn && isLoggedIn ? `` : `gap-x-1.5`} bg-white py-2 relative font-medium leading-[20px] text-sm cursor-pointer`}
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={religiousTourismToggle}
                  >
                    Religious Tourism
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
              {isShowReligiousTourism ? (
                <div
                  className="absolute hide right-0 z-10 mt-0 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                  onMouseEnter={() => setisShowReligiousTourism(true)}
                  onMouseLeave={() => setisShowReligiousTourism(false)}
                >
                  
                  <ul className="px-0" role="none">
                    {religiousDestinations.length > 0 && religiousDestinations.map((destination: { slug: string; label: string; }, index: React.Key | null | undefined) => (
                      <li key={index} className='list-none hover:bg-gray-100'>
                        <a
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-0"
                          onClick={() => router.push(`/destination/${destination.slug}`)}
                          className={`cursor-pointer text-gray-700 py-2 text-sm block px-4 dark:hover:bg-gray-600 hover:text-white ${path === destination.slug ? 'color-pink' : ''}`}>
                          {destination.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>

            <div
              className="relative inline-block text-left"
              onMouseEnter={() => setisShowCulture(true)}
              onMouseLeave={() => setisShowCulture(false)}
            >
              <div>
                <Link className="[text-decoration:none]" href="/culture">
                  <button
                    type="button"
                    className={`${path == "/culture" ? " color-pink " : ""} inline-flex bgHoverRed w-full justify-center ${isLoggedIn && isLoggedIn ? `` : `gap-x-1.5`} bg-white py-2 relative font-medium leading-[20px] text-sm cursor-pointer`}
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={cultureToggle}
                  >
                    Culture
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
              {isShowCulture ? (
                <div
                  className="absolute hide right-0 z-10 mt-0 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                  onMouseEnter={() => setisShowCulture(true)}
                  onMouseLeave={() => setisShowCulture(false)}
                >
                  <HoverCulture />
                </div>
              ) : (
                ""
              )}
            </div>

            <div
              className="relative inline-block text-left"
              onMouseEnter={() => setisShowThingstodo(true)}
              onMouseLeave={() => setisShowThingstodo(false)}
            >
              <div>
                <Link className="[text-decoration:none]" href="/things-to-do">
                  <button
                    type="button"
                    className={` ${path == "/things-to-do" ? " color-pink " : ""} inline-flex bgHoverRed w-full justify-center ${isLoggedIn && isLoggedIn ? `` : `gap-x-1.5`} bg-white py-2 relative font-medium leading-[20px] text-sm cursor-pointer`}
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={thingsToDoToggle}
                  >
                    Things to do
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
              {isShowThingstodo ? (
                <div
                  className="absolute hide right-0 z-10 mt-0 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                  onMouseEnter={() => setisShowThingstodo(true)}
                  onMouseLeave={() => setisShowThingstodo(false)}
                >
                  <HoverThingstodo />
                </div>
              ) : (
                ""
              )}
            </div>

            {/* <Link
              href="/listing?tab=package"
              className="flex flex-row bgHoverRed items-center justify-start text-[inherit] [text-decoration:none]"
            >
              <div className="relative font-medium leading-[20px]">
                Services
              </div>
            </Link> */}

            <div
              className="relative inline-block text-left"
              onMouseEnter={() => setisShowService(true)}
              onMouseLeave={() => setisShowService(false)}
            >
              <div>
                <Link className="[text-decoration:none]" href="/listing?tab=package">
                  <button
                    type="button"
                    className={`${path == "/listing?tab=package" ? " color-pink " : ""} inline-flex bgHoverRed w-full justify-center ${isLoggedIn && isLoggedIn ? `` : `gap-x-1.5`} bg-white py-2 relative font-medium leading-[20px] text-sm cursor-pointer`}
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={serviceToggle}
                  >
                    Services
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
              {isShowService ? (
                <div
                  className="absolute hide right-0 z-10 mt-0 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                  onMouseEnter={() => setisShowService(true)}
                  onMouseLeave={() => setisShowService(false)}
                >
                  <HoverService />
                </div>
              ) : (
                ""
              )}
            </div>

            <Link
              className="flex bgHoverRed flex-row items-center justify-start text-[inherit] [text-decoration:none]"
              href="/about"
            >
              <div className="relative font-medium leading-[20px]">About</div>
            </Link>

            <Link
              className="flex bgHoverRed flex-row items-center justify-start text-[inherit] [text-decoration:none]"
              href="/shopping"
            >
              <div className="relative font-medium leading-[20px]">Shop</div>
            </Link>
          </div>

          <div className="flex gap-[40px]">
            {session || isLoggedIn && isLoggedIn ? (
              <>
                <Link href="/listing?tab=package" className='[text-decoration:none]'>
                  <VariantFilledTypePrimary
                    label="Book now"
                    variantFilledTypePrimaryPosition="unset"
                    variantFilledTypePrimaryBorderRadius="25px"
                    // variantFilledTypePrimaryBackgroundColor="#0022cc"
                    variantFilledTypePrimaryBoxSizing="border-box"
                    variantFilledTypePrimaryCursor="pointer"
                    variantFilledTypePrimaryBorder="none"
                    labelDisplay="inline-block"
                  // onClick={function (): void {
                  //   throw new Error("Function not implemented.");
                  // }}
                  />
                </Link>
                <SignOut />
              </>
            ) : (
              <VariantFilledTypePrimary
                label="Sign in"
                variantFilledTypePrimaryPosition="unset"
                variantFilledTypePrimaryBorderRadius="0px"
                variantFilledTypePrimaryBackgroundColor="#fff"
                variantFilledTypePrimaryBoxSizing="border-box"
                variantFilledTypePrimaryCursor="pointer"
                variantFilledTypePrimaryBorder="none"
                labelDisplay="inline-block"
                clickModal={openModal}
                labelColor="#000"
              // onClick={function (): void {
              //   throw new Error("Function not implemented.");
              // }}
              />
            )}
          </div>
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
      </div >

      {/* Mobile Hamburger icon menu */}
      < div className="container mx-auto mt-10 pt-2 block md:hidden" >
        <div className=" box-border flex h-[80px] max-md:pt-[14px] w-full flex-row items-center justify-between py-0 text-text-gray-900 px-[24px]">
          <Link
            href="/"
            className="flex flex-row items-center justify-start text-[inherit] [text-decoration:none]"
          >
            <Image
              className="relative h-[80px] max-w-full shrink-0 self-stretch overflow-hidden rounded-xl object-cover"
              alt=""
              src="/assets/images/logo/branding_kashmironline_logo_colorful.png"
              width={150}
              height={80}
            />
          </Link>
          <div onClick={toggleMenu} className="cursor-pointer z-50">
            <Image
              alt=""
              src="/assets/images/logo/menu.png"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div >

      {/* mobile menu */}
      < div className="block md:hidden z-999" >
        <MobileNavigation
          toggleMenu={toggleMenu}
          showMobileMenu={showMobileMenu}
          headerRoutes={headerRoutes}
        />
      </div >

      <div
        className={`md:hidden h-full w-full fixed top-0 left-0 bg-gray-400 opacity-90 ${showMobileMenu ? 'block' : 'hidden'}`}
        onClick={toggleMenu}></div>


    </>
  );
};

export default Header;
function dispatch(arg0: { payload: any; type: "auth/setLoginStatus"; }) {
  throw new Error("Function not implemented.");
}

