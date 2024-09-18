import type { NextPage } from 'next';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import PackageIcon from './packageIcon';
import Property1Default from './property1-default';
import VariantFilledTypePrimary from './variant-filled-type-primary';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key, useState, useEffect } from 'react';
import Image from 'next/image';
import { getContactDetail } from "@/services/contactDetail"
import { SubscribeEmailPostService } from "@/services/subscribeService"
import { toast } from "react-toastify";
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/router';
type FooterFormType = {};

const FooterForm: NextPage<FooterFormType> = ({ }) => {
  const homeData = useSelector((state: any) => state.homePage.data)
  const [contactData, setContactData] = useState([])
  const [collapseFooterMenu, setCollapseFooterMenu] = useState("");
  const [subscribeEmail, setSubscribeEmail] = useState<any>({ email: "" })
  const [isClient, setIsClient] = useState(false);
  const router = useRouter()
  const toggleCollapseFooterMenu = (menuName: string) => {
    if (collapseFooterMenu === menuName) {
      setCollapseFooterMenu("");
    } else {
      setCollapseFooterMenu(menuName);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (homeData?.contactDetail) {
        setContactData(homeData?.contactDetail)
      }
      else {
        const ContactApiData = await getContactDetail()
        setContactData(ContactApiData?.data?.data?.data)
      }
    }
    fetchData()
  }, [])

  const handleChangeSubscribeEmail = (e: any) => {
    if (e.target.value != undefined) {
      setSubscribeEmail({
        email: e.target.value
      })
    }
  }

  const handleSubscribedEmsilSubmit = async () => {
    try {
      if (subscribeEmail.email !== undefined && subscribeEmail.email !== "" && subscribeEmail.email.includes("@")) {
        const response = await SubscribeEmailPostService(subscribeEmail)
        setSubscribeEmail({
          email: ""
        })
        toast.success("Subscribed Sucessfully", {
          position: 'top-right',
          autoClose: 3000,
        });
      } else {
        toast.warning("Enter a valid email", {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    }
    catch (err) {
      toast.error("Error to Subscribe", {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  }

  return (
    <>
      <footer className="bg-mediumblue-400 box-border relative z-1 w-full sm:py-[68px] py-[40px] px-[20px] text-left font-others-capitalised text-base text-black  sm:px-4">
        <div className="container mx-auto flex md:flex-row flex-col items-start justify-between">
          <div className="flex flex-col items-start justify-start gap-[0px]">
            <div className="flex flex-col items-start justify-start gap-[8px] text-21xl">
              <div className="relative font-extrabold leading-[54px]">
                <Image
                  className="relative h-[80px] max-w-full shrink-0 self-stretch overflow-hidden rounded-xl object-cover"
                  alt=""
                  src="/assets/images/logo/branding_kashmironline_logo_colorful.png"
                  width={150}
                  height={80} />
              </div>
              {/* <div className="relative text-xl font-medium leading-[30px]">
                Tagline here
              </div> */}
            </div>

            {contactData && contactData?.map((data: { contact: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; email: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; address: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; instagram: any; dribbble: any; twitter: any; youtube: any; }, index: Key | null | undefined) => (
              <div key={index}>
                <div className="flex-col items-start justify-end gap-[24px] sm:flex ">
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <PackageIcon
                      className="arrow color-pink"
                      groupName="fluent:call-12-filled"
                    />
                    <Link
                      className="flex flex-row items-center justify-start text-[inherit] [text-decoration:none]"
                      href={`tel: ${data?.contact}`}
                    >
                      <div className="relative font-medium leading-[40px] md:leading-[20px]">
                        {`+91 ${data?.contact}`}
                      </div>
                    </Link>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <PackageIcon
                      className="arrow color-pink"
                      groupName="material-symbols:mail"
                    />
                    <Link
                      className="flex flex-row items-center justify-start text-[inherit] [text-decoration:none]"
                      href={`mailto: ${data?.email}`}
                    >
                      <div className="relative font-medium leading-[40px] md:leading-[20px]">
                        {data?.email}
                      </div>
                    </Link>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <PackageIcon
                      className="arrow color-pink"
                      groupName="bxs:map"
                    />
                    <a
                      className="flex flex-row items-center justify-start text-[inherit] [text-decoration:none]"
                      href="#"
                    >
                      <div className="relative w-80 font-medium leading-[40px] md:leading-[30px]">
                        {data?.address}
                      </div>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-start gap-[15px] my-[25px] text-mediumblue-100">
                  <div className="relative mt-4 font-medium leading-[28px]">
                    Follow us
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px] overflow-hidden">
                    <Link className="relative [text-decoration:none]" href={`${data?.instagram}`}>
                      {/* <Image
                        className="items-center justify-center border-none"
                        src='/assets/images/socialIcons/insta.png'
                        alt='instagram'
                        width={33}
                        height={33}
                      /> */}
                      <Property1Default
                        vector="akar-icons:instagram-fill"
                        property1DefaultPosition="unset"
                        property1DefaultTransform=""
                        property1DefaultMargin="unset"
                        property1DefaultTop="unset"
                        property1DefaultLeft="unset"
                        property1DefaultZIndex="unset"
                        className="h-4 w-4 items-center justify-center border-none bg-rose-200"
                        iconWidth="w-[17px] h-[17px] color-pink"
                      />
                    </Link>
                    <Link className="relative [text-decoration:none]" href={`${data?.dribbble}`}>
                      {/* <Image
                        className="items-center justify-center border-none"
                        src='/assets/images/socialIcons/facebook.png'
                        alt='facebook'
                        width={30}
                        height={30}
                      /> */}
                      <Property1Default
                        vector="mdi:facebook"
                        property1DefaultPosition="unset"
                        property1DefaultTransform=""
                        property1DefaultMargin="unset"
                        property1DefaultTop="unset"
                        property1DefaultLeft="unset"
                        property1DefaultZIndex="unset"
                        className="h-4 w-4 items-center justify-center border-none bg-rose-200"
                        iconWidth="w-[17px] h-[17px] color-pink"
                      />
                    </Link>
                    <Link className="relative [text-decoration:none]" href={`${data?.twitter}`}>
                      {/* <Image
                        className="items-center justify-center border-none"
                        src='/assets/images/socialIcons/twitter.png'
                        alt='twitter'
                        width={30}
                        height={30}
                      /> */}
                      <Property1Default
                        vector="mdi:twitter"
                        property1DefaultPosition="unset"
                        property1DefaultTransform=""
                        property1DefaultMargin="unset"
                        property1DefaultTop="unset"
                        property1DefaultLeft="unset"
                        property1DefaultZIndex="unset"
                        className="h-4 w-4 items-center justify-center border-none bg-rose-200"
                        iconWidth="w-[17px] h-[17px] color-pink"
                      />
                    </Link>
                    <Link className="relative [text-decoration:none]" href={`${data?.youtube}`}>
                      {/* <Image
                        className="items-center justify-center border-none"
                        src='/assets/images/socialIcons/youtube.png'
                        alt='youtube'
                        width={30}
                        height={30}
                      /> */}
                      <Property1Default
                        vector="mdi:youtube"
                        property1DefaultPosition="unset"
                        property1DefaultTransform=""
                        property1DefaultMargin="unset"
                        property1DefaultTop="unset"
                        property1DefaultLeft="unset"
                        property1DefaultZIndex="unset"
                        className="h-4 w-4 items-center justify-center border-none bg-rose-200"
                        iconWidth="w-[17px] h-[17px] color-pink"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-col items-start justify-start gap-[24px] mb-[40px] text-text-gray-900 sm:hidden flex">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative sm:text-xl text-[18px] font-medium leading-[30px]">
                For travel stories and upcoming offers
              </div>
            </div>
            <input
              className="box-border flex h-10 w-[286px] flex-row items-center justify-start rounded-3xl border-[1px] border-solid border-mediumblue-100 bg-default-white px-6 py-2 font-others-capitalised text-xs font-medium"
              type="text"
              placeholder="Enter Email address here"
            />
            <div className="flex flex-col items-start justify-start gap-[15px] text-xs">
              <div className="relative font-medium leading-[16px]">
                <p className="m-0">Subscribe to kashmironline newsletters.</p>
                <p className="m-0">
                  <span>{`Read our `}</span>
                  <span className="text-mediumblue-100">privacy policy</span>
                </p>
              </div>
              <VariantFilledTypePrimary
                label="Subscribe"
                variantFilledTypePrimaryPosition="unset"
                variantFilledTypePrimaryBorderRadius="25px"
                variantFilledTypePrimaryBackgroundColor="#0022cc"
                variantFilledTypePrimaryBoxSizing="border-box"
                variantFilledTypePrimaryCursor="pointer"
                variantFilledTypePrimaryBorder="none"
                labelDisplay="inline-block"
              />
            </div>
          </div>

          <div className="md:flex lg:flex-row flex-col items-start justify-start xl:gap-[64px] text-sm hidden">
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <b className="relative color--wedge flex h-[18px] w-[166px] shrink-0 items-center uppercase leading-[18px] tracking-[1px]">
                Kashmir online
              </b>
              <div className="flex flex-col items-start justify-start gap-[8px] text-darkslategray-200">
                <div className="relative flex shrink-0 items-center font-medium leading-[24px]">
                  <Link href="/destination" className="text-darkslategray-200 no-underline">
                    Top Destinations
                  </Link>
                </div>
                <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                  <Link href="/things-to-do" className="text-darkslategray-200 no-underline">
                    Things to do
                  </Link>
                </div>
                <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                  <Link href="/hotel?tab=package" className="text-darkslategray-200 no-underline">
                    Hotels
                  </Link>
                </div>
                <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                  <Link href="/listing?tab=package" className="text-darkslategray-200 no-underline">
                    Tour packages
                  </Link>
                </div>
                <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                  <Link href="/culture" className="text-darkslategray-200 no-underline">
                    Kashmir Culture
                  </Link>
                </div>
                <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                  <Link href="/religious-places" className="text-darkslategray-200 no-underline">
                    Religious tourism
                  </Link>
                </div>
                {/* <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                  <a href="#" className="text-darkslategray-200 no-underline">
                    Accommodation
                  </a>
                </div>
                <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                  <a href="#" className="text-darkslategray-200 no-underline">
                    Transport
                  </a>
                </div>
                <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                  <a href="#" className="text-darkslategray-200 no-underline">
                    Restaurants
                  </a>
                </div>
                <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                  <a href="#" className="text-darkslategray-200 no-underline">
                    Sitemap
                  </a>
                </div> */}
                <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                  <Link
                    href="/blog"
                    className="text-darkslategray-200 no-underline"
                  >
                    Blog
                  </Link>
                </div>
                {/* <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                  <a href="#" className="text-darkslategray-200 no-underline">
                    Kashmir Helpline
                  </a>
                </div> */}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <b className="relative color--wedge flex h-[18px] w-[166px] shrink-0 items-center uppercase leading-[18px] tracking-[1px]">
                Policies
              </b>
              <div className="flex flex-col items-start justify-start gap-[8px] text-darkslategray-200">
                <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                  <Link href="/about" className="text-darkslategray-200 no-underline">
                    About us
                  </Link>
                </div>

                {/* {isClient ? (
                  <ScrollLink to="/faqs" smooth={true} offset={-70} duration={500}>
                    <a className="text-darkslategray-200 no-underline font-medium  cursor-pointer">FAQ’s</a>
                  </ScrollLink>
                ) : (
                  <Link href="#faqs" passHref
                    className="text-darkslategray-200 font-medium  no-underline cursor-pointer">FAQ’s
                  </Link>
                )} */}
                <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                  <Link href="/faq" className="text-darkslategray-200 no-underline">
                    FAQ's
                  </Link>
                </div>
                <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                  <Link href="/refund-policy" className="text-darkslategray-200 no-underline">
                    Refund Policy
                  </Link>
                </div>
                <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                  <Link href="/privacy-policy" className="text-darkslategray-200 no-underline">
                    Privacy Policy
                  </Link>
                </div>
                <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                  <Link href="/disclaimer" className="text-darkslategray-200 no-underline">
                    Disclaimer
                  </Link>
                </div>
                <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                  <Link href="/term-of-use" className="text-darkslategray-200 no-underline">
                    Terms of use
                  </Link>
                </div>
                <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                  <Link href="/pay-online" className="text-darkslategray-200 no-underline">
                    Pay online
                  </Link>
                </div>
                <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                  <Link href="/contact-us" className="text-darkslategray-200 no-underline">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-col items-start justify-start gap-[24px] text-text-gray-900 sm:flex hidden">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative lg:text-xl text-[18px] w-[80%] lg:w-auto font-medium leading-[30px]">
                  For travel stories and upcoming offers
                </div>
              </div>
              <input
                className="box-border flex h-10 w-[286px] flex-row items-center justify-start rounded-3xl border-[1px] border-solid border-mediumblue-100 bg-default-white px-6 py-2 font-others-capitalised text-xs font-medium"
                type="email"
                name="email"
                value={subscribeEmail?.email}
                placeholder="Enter Email address here"
                onChange={handleChangeSubscribeEmail}
                required
              />
              <div className="flex flex-col items-start justify-start gap-[15px] text-xs">
                <div className="relative font-medium leading-[16px]">
                  <p className="m-0">Subscribe to kashmironline newsletters.</p>
                  <p className="m-0">
                    <span>{`Read our `}</span>
                    <Link href="/privacy-policy" className='no-underline'>
                      <span className="color-pink">privacy policy</span></Link>
                  </p>
                </div>
                <VariantFilledTypePrimary
                  label="Subscribe"
                  variantFilledTypePrimaryPosition="unset"
                  variantFilledTypePrimaryBorderRadius="25px"
                  variantFilledTypePrimaryBackgroundColor="#DD1045"
                  variantFilledTypePrimaryBoxSizing="border-box"
                  variantFilledTypePrimaryCursor="pointer"
                  variantFilledTypePrimaryBorder="none"
                  labelDisplay="inline-block"
                  onClick={handleSubscribedEmsilSubmit}
                />
              </div>
            </div>
          </div>

          {/*  For mobile device */}
          <div className="flex flex-col items-start justify-start text-sm md:hidden w-full">
            <div className="flex flex-col items-start justify-start gap-[16px] w-full">
              <div className="flex items-center justify-between h-[54px] w-full text-[16px] leading-[18px] font-bold">
                <b className="uppercase color--wedge text-[16px] leading-[18px] font-bold tracking-[1px]">
                  Kashmir online
                </b>
                <div onClick={() => toggleCollapseFooterMenu("Kashmir online")} className="cursor-pointer">
                  <img
                    alt=""
                    src="/assets/images/icons/iconamoon_arrowup.svg" />
                </div>
              </div>
              {collapseFooterMenu == "Kashmir online" &&
                <div className="sm:flex flex-col items-start justify-start gap-[8px] text-darkslategray-200">
                  <div className="relative flex shrink-0 items-center font-medium leading-[24px]">
                    <Link href="/destination" className="text-darkslategray-200 no-underline">
                      Top Destinations
                    </Link>
                  </div>
                  <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                    <Link href="/things-to-do" className="text-darkslategray-200 no-underline">
                      Things to do
                    </Link>
                  </div>
                  <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                    <Link href="/hotel?tab=package" className="text-darkslategray-200 no-underline">
                      Hotels
                    </Link>
                  </div>
                  <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                    <Link href="/listing?tab=package" className="text-darkslategray-200 no-underline">
                      Tour packages
                    </Link>
                  </div>
                  <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                    <Link href="/culture" className="text-darkslategray-200 no-underline">
                      Kashmir Culture
                    </Link>
                  </div>
                  <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                    <Link href="/religious-places" className="text-darkslategray-200 no-underline">
                      Religious tourism
                    </Link>
                  </div>
                  {/* <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                    <a href="#" className="text-darkslategray-200 no-underline">
                      Accommodation
                    </a>
                  </div>
                  <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                    <a href="#" className="text-darkslategray-200 no-underline">
                      Transport
                    </a>
                  </div>
                  <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                    <a href="#" className="text-darkslategray-200 no-underline">
                      Restaurants
                    </a>
                  </div>
                  <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                    <a href="#" className="text-darkslategray-200 no-underline">
                      Sitemap
                    </a>
                  </div> */}
                  <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                    <Link
                      href="/blog"
                      className="text-darkslategray-200 no-underline"
                    >
                      Blog
                    </Link>
                  </div>
                  <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                    <a href="#" className="text-darkslategray-200 no-underline">
                      Kashmir Helpline
                    </a>
                  </div>
                </div>
              }

            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] w-full">
              <div className="flex items-center justify-between h-[54px] w-full text-[16px] leading-[18px] font-bold">
                <b className="uppercase color--wedge text-[16px] leading-[18px] font-bold tracking-[1px]">
                  Policies
                </b>
                <div onClick={() => toggleCollapseFooterMenu("Policies")} className="cursor-pointer">
                  <img
                    alt=""
                    src="/assets/images/icons/iconamoon_arrowup.svg" />
                </div>
              </div>

              {collapseFooterMenu == "Policies" &&
                <div className="sm:flex flex-col items-start justify-start gap-[8px] text-darkslategray-200">
                  <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                    <Link href="/about" className="text-darkslategray-200 no-underline">
                      About us
                    </Link>
                  </div>
                  <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                    <Link href="/faq" className="text-darkslategray-200 no-underline">
                      FAQ's
                    </Link>
                  </div>
                  <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                    <Link href="/refund-policy" className="text-darkslategray-200 no-underline">
                      Refund Policy
                    </Link>
                  </div>
                  <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                    <Link href="/privacy-policy" className="text-darkslategray-200 no-underline">
                      Privacy Policy
                    </Link>
                  </div>
                  <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                    <Link href="/disclaimer" className="text-darkslategray-200 no-underline">
                      Disclaimer
                    </Link>
                  </div>
                  <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                    <Link href="/term-of-use" className="text-darkslategray-200 no-underline">
                      Terms of use
                    </Link>
                  </div>
                  <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                    <Link href="/pay-online" className="text-darkslategray-200 no-underline">
                      Pay online
                    </Link>
                  </div>
                  <div className="relative flex  shrink-0 items-center font-medium leading-[24px]">
                    <Link href="/contact-us" className="text-darkslategray-200 no-underline">
                      Contact us
                    </Link>
                  </div>
                </div>
              }
            </div>
          </div>

        </div>
      </footer >
      <div className="box-border flex w-full flex-row items-center justify-center bg-black p-2 font-helvetica">
        <div className="relative font-light leading-[19.6px]  sm:px-4">
          © 2023 Kashmironline . All rights reserved. No part of this site may
          be reproduced without our written permission.
        </div>
      </div>
    </>
  );
};
export default FooterForm;
