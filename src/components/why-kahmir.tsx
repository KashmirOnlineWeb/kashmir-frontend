/* eslint-disable react/jsx-key */
import type { NextPage } from 'next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect } from 'react';
import PackageIcon from './packageIcon';
import PageWithLoaders from './loader';
import Link from 'next/link';

const WhyKashmir: NextPage = () => {
  const propLoaderValue = 1
  const homeData = useSelector((state: any) => state.homePage.data)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    if (homeData.contactdetail) {
      setShowLoader(false)
    }
  }, [homeData?.contactdetail])

  return (
    <div className="bg-mediumblue-400 p-5 box-border flex md:h-[535px] grid-cols-4 flex-col items-start justify-center gap-[30px] rounded-xl sm:px-6 py-8 text-5xl">
      {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
        homeData?.whykashmironline && homeData?.whykashmironline.map((data: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; sub_title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; whykashmironline_content: any[]; agents: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; travellers: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; destinations: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }, index: Key | null | undefined) => (
          <div key={index} className='w-full '>
            <div className="flex flex-col items-start justify-center gap-[16px] self-stretch w-full">
              <div className="flex flex-col items-start justify-start self-stretch">
                <div className="color--wedge sm:pt-9 hoverUnderline relative self-stretch font-semibold text-[24px] text-semibold leading-[31px] text-gray-100">
                  {data.title}
                </div>
              </div>
              <div className="relative  flex sm:w-96 items-center text-base leading-[140%] tracking-[0.2px] text-black">
                <span className="w-full">
                  <span>{data?.sub_title}</span>
                </span>
              </div>
            </div>
            <div className="font-montserrat mt-8 flex flex-col items-center justify-center sm:gap-[35px] self-stretch text-xs text-black">
              <div className="flex flex-col items-center justify-center gap-[16px] self-stretch">
                <div className="flex flex-row items-center justify-start gap-[16px] self-stretch">
                  {data?.whykashmironline_content?.map((content, index) => (
                    <div key={index} className="border-darkgray box-border flex h-[100px] flex-1 flex-col items-center justify-start gap-[8px] rounded-2xl border-[1px] border-solid border-[#9f9f9f] bg-default-white px-0 py-4">
                      <div className="flex h-8 w-8 flex-col items-center justify-center">
                        <PackageIcon
                          className="h-9 w-9 color-pink"
                          groupName={content.icon}
                        />
                      </div>
                      <div className="flex color-pink flex-col items-center justify-start gap-[1px] self-stretch">
                        <b className="relative leading-[120%]">{content?.content_text}</b>
                        <div className="text-3xs relative self-stretch text-center font-body tracking-[-0.02em]">
                          {content?.content_safety}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="font-heading-h6 flex flex-col items-center justify-center self-stretch text-center text-sm text-mediumblue-100">
                  <div className="relative self-stretch font-semibold leading-[31px]">
                    {data?.agents}+ agents | {data?.travellers} Lac+ travellers | {data?.destinations}+ destinations
                  </div>
                </div>
              </div>
              <div className="text-3xs flex flex-col items-center justify-center gap-[4px] self-stretch font-body">
                <div className="flex flex-row items-center justify-center gap-[4px] self-stretch">
                  <PackageIcon
                    className="h-3 w-3 text-[#C9C9C9]"
                    groupName="eva:phone-call-fill"
                  />
                  <div className="relative tracking-[-0.02em]">
                    Call us for details
                  </div>
                </div>
                {homeData?.contactdetail && homeData?.contactdetail.map((data: { contact: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }, index: Key | null | undefined) => (
                  <div key={index} className="font-montserrat color-pink flex flex-col items-center justify-center self-stretch text-5xl">
                    <Link href={`tel: ${data?.contact}`} className=" color-pink no-underline relative leading-[120%]">
                      +91 {data?.contact}
                    </Link>
                  </div>
                ))}

              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WhyKashmir;
