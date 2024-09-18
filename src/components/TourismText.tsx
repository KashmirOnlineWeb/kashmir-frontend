/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import PackageIcon from "./packageIcon";
import { Fragment, useEffect, useState } from "react";
import TruncateText from "./TruncateText";
import axios from "axios";
import { toast } from "react-toastify";
import router, { useRouter } from "next/router"
import SignIn from "./sign-in";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from 'react-redux';
import { getUserAllWhishlists, storeWhishlist } from '@/services/whishlist.service';
import { setLoginStatus } from "@/redux/slices";

type TourismTextType = {
  tourismText?: string;
  trueAdventure?: boolean;
  content?: string | undefined;
  star?: string | undefined;
  location?: string;
  totaldays?: string;
  isHotel?: boolean;
  tagsdata?: string;
  slug?: string;
  pageTitle?: string;
  thingstodoProps?: boolean;
};

const TourismText: NextPage<TourismTextType> = ({ tourismText, thingstodoProps, pageTitle, slug, tagsdata, totaldays, isHotel, trueAdventure, content, star, location }) => {
  const [showFullContent, setShowFullContent] = useState(false);
  const [getLocalstorageData, setGetLocalstorageData] = useState<any>(null)
  const getLoginError = "You are not Loged in"
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    let data = typeof window !== 'undefined' ? localStorage.getItem("userSignInData") : false;
    if (data) {
      setGetLocalstorageData(JSON.parse(data))
      dispatch(setLoginStatus(true));
    }
  }, [])

  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const whishlistAdd = async (data: any) => {
    if (isLoggedIn) {
      try {
        const user_id = getLocalstorageData?.user?._id;
        // Check if the item is already in the wishlist
        const response = await getUserAllWhishlists(user_id);
        const itemExists = response?.
          some((item: { item_type: any; item_id: string | undefined; }) => item?.item_id === slug);
        if (itemExists) {
          // Item already exists in the wishlist
          toast.error("Item already added to Wishlist", {
            position: 'top-right',
            autoClose: 3000,
          });
        } else {
          // Item does not exist in the wishlist, add it
          await storeWhishlist(
            {
              item_type: data,
              item_id: slug,
              user_id: user_id
            });

          toast.success("Item added to Wishlist", {
            position: 'top-right',
            autoClose: 3000,
          });
        }
      } catch (err) {
        toast.error("Failed to add item to Wishlist", {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    } else {
      // toast.error(getLoginError, {
      //   position: 'top-right',
      //   autoClose: 3000,
      // });
      openModal();
    }
  };

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] mt-8 text-left text-9xl text-black font-others-capitalised">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div id="overview" className="self-stretch flex sm:flex-row sm:items-center items-start mb-3 sm:mb-0 justify-between">
          <b className="relative color--wedge sm:leading-[40px] text-[18px] sm:text-[28px] leading-[21.6px] w-full">{tourismText}</b>

          <div className="flex flex-row items-start justify-end gap-[15px] w-full">
            {/* <Link href="#"> */}
            <img
              className="cursor-pointer relative sm:w-[46px] w-[32px] sm:h-[46px] h-[32px]"
              alt=""
              // whishlist-active.svg
              src="/assets/images/icons/heart.svg"
              onClick={(e) => whishlistAdd(pageTitle)}
            />
            {/* </Link> */}
            {/* <Link href="#">
              <img
                className="relative sm:w-[46px] w-[32px] sm:h-[46px] h-[32px]"
                alt=""
                src="/assets/images/icons/download.svg"
              />
            </Link> */}
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
        {trueAdventure ? <div className={`${isHotel ? "d-block text-base" : "flex flex-row items-center justify-start gap-[8px] text-lg"}`}>
          <div className="flex flex-row items-start justify-start text-2xs">
            {star ?
              <div className="rounded-mini flex flex-row items-start justify-start bg-mediumblue-100 text-default-white py-1 pr-[10.389999389648438px] pl-2 border-[1px] border-solid border-black">
                <b className="relative leading-[12px]">{star}</b>
              </div> : <div className="rounded-mini flex flex-row items-start justify-start py-1 pr-[10.389999389648438px] pl-2 border-[1px] border-solid border-black">
                <b className="relative leading-[12px]">Adventure</b>
              </div>}
          </div>
          {location ?
            <div className="flex flex-row items-center justify-start gap-[7px] mt-3">
              <PackageIcon
                className="arrow"
                groupName="bxs:map"
              />
              <div className="relative leading-[28px] break-all font-medium">{location}</div></div>
            :
            <>
              <div className="flex flex-row items-start text-sm justify-start leading-[15px] text-default-white rounded-mini bg-mediumblue-100 py-1 pl-2 pr-[10.389999389648438px]">{totaldays}</div>
              {/* <div className="relative rounded-[50%] bg-black w-1 h-1" />
              <div className="relative leading-[28px] font-medium">Info</div> */}
            </>}
        </div> : ''}
      </div>
      <div className=" mt-4 relative text-sm leading-[26px] inline-block shrink-0">{tagsdata}</div>
      {thingstodoProps ? (
        <div className="mt-4 relative text-sm leading-[26px] inline-block shrink-0 editor-image" dangerouslySetInnerHTML={{ __html: content || "" }} />
      ) : (
        showFullContent ? (
          <div className="mt-4 relative text-sm leading-[26px] inline-block shrink-0 editor-image" dangerouslySetInnerHTML={{ __html: content || "" }} />
        ) : (
          <>
            <div className="relative text-sm leading-[26px] inline-block shrink-0 editor-image">
              <TruncateText text={content} limit={80} />
            </div>
            {content && content.length > 80 && (
              <div className="mt-2">
                <button
                  className="flex items-start bg-white justify-start w-26 h-6 text-base text-mediumblue-100 cursor-pointer"
                  onClick={toggleContent}
                >
                  Read More
                </button>
              </div>
            )}
          </>
        )
      )}

    </div>
  );
};

export default TourismText;
