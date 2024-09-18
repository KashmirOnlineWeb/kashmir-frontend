/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import PackageIcon from './packageIcon';
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import Loader from './loader';
import PageWithLoaders from './loader';
import SliderTabs from './Homepage/SliderTabs';
import Link from 'next/link';

const HeroSection: NextPage = () => {
  const propLoaderValue = 1
  const homeData = useSelector((state: any) => state.homePage.data)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    if (homeData.slider) {
      setShowLoader(false)
    }
  }, [homeData.slider]);

  return (
    <div className="container mx-auto sm:px-4">
      {showLoader ? (<PageWithLoaders prop={propLoaderValue} />) :
        (homeData?.slider && homeData?.slider?.map((data: { imageURL: any; title_color: string | (string & {}) | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; subtitle_color: string | (string & {}) | undefined; sub_title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }, index: Key | null | undefined) => (
          <div key={index} style={{ backgroundImage: `url(${data?.imageURL})` }} className='m-auto sm:h-[600px] h-auto parallax-effect rounded-none sm:rounded-3xl  bg-[url("/assets/images/hero/bg-hero.jpeg")] bg-cover bg-[bottom] bg-no-repeat text-left font-others-capitalised text-[12.46px] text-default-white'>

            {/* Dark overlay */}
            <div className="absolute inset-0 sm:h-auto bg-black opacity-50 rounded-none sm:rounded-3xl"></div>

            <div className="m-auto box-border flex w-full md:w-[90%] lg:w-[814px] flex-wrap items-center justify-center gap-[24px] p-2 pt-20">
              <div className="flex flex-col items-center justify-center gap-[8px] self-stretch text-center sm:text-21xl sm:px-0 px-[40px]">
                <div className="relative self-stretch font-extrabold leading-[54px]">
                  <p style={{ color: data.title_color ? data.title_color : 'white' }} className="m-0 text-[24px] sm:text-[32px] md:text-[35px] lg:text-[40px] leading-[28.8px] sm:leading-[40.8px] md:leading-[42.8px] lg:leading-[54px] font-bold	">{data.title}</p>
                </div>
                <div className="mt-3 sm-mt-0 relative inline-block w-full sm:w-[593px] text-base leading-[26px]">
                  <p style={{ color: data.subtitle_color ? data.subtitle_color : 'white' }} className="m-0 text-[16px] leading-[26px]">{data.sub_title}</p>
                </div>
              </div>
              {/* <div className="relative flex flex-col items-center justify-center gap-[8px] sm:w-full w-[80%]">
                <div className="flex flex-col items-center justify-start">
                  <div className="flex-row items-start justify-start gap-[32px] sm:flex hidden">
                    <div className="rounded-81xl box-border flex h-10 flex-col items-start justify-center bg-mediumblue-200 px-0 py-[6.230769157409668px]">
                      <div className="flex h-6 flex-row items-center justify-center gap-[6px]">
                        <PackageIcon
                          className="arrow"
                          groupName="material-symbols:card-travel"
                        />
                        <a
                          href="#"
                          className="relative font-medium leading-[18.69px] text-white no-underline"
                        >
                          All
                        </a>
                      </div>
                      <div className="relative h-0.5 w-[39px] rounded-md bg-default-white" />
                    </div>
                    <div className="rounded-81xl box-border flex h-10 flex-col items-start justify-center bg-mediumblue-200 px-0 py-[6.230769157409668px]">
                      <div className="flex h-6 flex-row items-center justify-center gap-[6px]">
                        <PackageIcon
                          className="arrow"
                          groupName="material-symbols:card-travel"
                        />
                        <a
                          href="#"
                          className="relative font-medium leading-[18.69px] text-white no-underline"
                        >
                          Packages
                        </a>
                      </div>
                    </div>
                    <div className="rounded-81xl box-border flex h-10 flex-col items-start justify-center bg-mediumblue-200 px-0 py-[6.230769157409668px]">
                      <div className="flex h-6 flex-row items-center justify-center gap-[6px]">
                        <PackageIcon
                          className="arrow"
                          groupName="material-symbols:hotel-rounded"
                        />
                        <a
                          href="#"
                          className="relative font-medium leading-[18.69px] text-white no-underline"
                        >
                          Hotel
                        </a>
                      </div>
                    </div>
                    <div className="rounded-81xl box-border flex h-10 flex-col items-start justify-center bg-mediumblue-200 px-0 py-[6.230769157409668px]">
                      <div className="flex h-6 flex-row items-center justify-center gap-[6px]">
                        <PackageIcon className="arrow" groupName="bxs:car" />
                        <a
                          href="#"
                          className="relative font-medium leading-[18.69px] text-white no-underline"
                        >
                          Car rental
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  className="relative box-border flex h-10 w-full flex-row items-center justify-between rounded-3xl bg-default-white px-6 py-2 font-others-capitalised text-xs font-medium [border:none]"
                  type="text"
                  placeholder="Search places , package , experience"
                />
                <a href="#" className="absolute sm:right-[25px] sm:top-[53px] right-[18px] p-2 bg-pink text-white rounded-full top-5">
                  <PackageIcon
                    className="arrow"
                    groupName="iconamoon:search-light"
                  />
                </a>
              </div>  */}
              <SliderTabs />
            </div>
            <div className="m-auto box-border flex w-full sm:w-[90%] flex-wrap items-center justify-center gap-2 p-2 pt-5 px-[44px] py-[16px] sm:px-0 sm:py-5">
              {homeData?.tags && homeData?.tags.slice(0, 6).map((data: any, index: Key | null | undefined) => (
                <div key={index} className="flex flex-col items-center justify-start gap-[16px] text-mediumblue-100">
                  <div className="flex flex-row items-start justify-start gap-[12px]">
                    <Link
                      className="bg-darkgray box-border flex h-[31.15px] flex-row items-center justify-center rounded-[18.69px] border-[0.8px] border-solid border-default-white px-[12.461538314819336px] py-[6.230769157409668px] text-[inherit] [text-decoration:none]"
                      href={data?.link}
                    >
                      <div className=" zoom-out-effect gap-1 flex relative font-medium leading-[18.69px]">
                        <span>#</span>
                        <span className="text-default-white ">{data?.tags_name}</span>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        )))
      }
    </div>
  );
};
export default HeroSection;
