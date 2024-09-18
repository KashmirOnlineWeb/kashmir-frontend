/* eslint-disable react/button-has-type */
import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect } from 'react';
import FormContainer from './form-container';
import PackageIcon from './packageIcon';
import PageWithLoaders from './loader';
import { useState } from 'react';
import { getHowItworks } from '@/services/howitworks'
import Link from 'next/link';

const AmazingHolidays: NextPage = () => {
  const propLoaderValue = 3
  const homeData = useSelector((state: any) => state.homePage.data)
  const [howitworksData, setHowitworksData] = useState([])
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      if (homeData?.howitworks) {
        setHowitworksData(homeData?.howitworks)
        setShowLoader(false)
      }
      else {
        const howItWorkApiData = await getHowItworks()
        setHowitworksData(howItWorkApiData?.data?.data)
        setShowLoader(false)
      }
    }
    fetchData()
  }, [homeData?.howitworks])

  return (
    <div className="box-border w-full bg-mediumblue-300 py-[30px] md:py-[68px] px-[24px] text-left font-others-capitalised text-base text-black sm:px-4 ">
      {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
        howitworksData && howitworksData?.map((data: { sub_title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; section_content: any[]; }, index: Key | null | undefined) => (
          <div key={index} className="container mx-auto flex md:flex-row flex-col items-start justify-start xl:gap-[0px] lg:gap-[0px]">
            <div className=" w-full lg:w-[25%] flex flex-col items-start justify-between gap-3">
              <div className="flex flex-col items-start justify-start md:gap-[8px] gap-1">
                <div className="relative text-black flex w-[178px] items-center font-medium leading-[24px]">
                  {data.sub_title}
                </div>
                <b className="relative flex items-center text-9xl leading-[40px]">
                  <span className=" [line-break:anywhere]">
                    <p className="m-0 color--wedge text-[24px] leading-[40px] font-bold md:text-[36px]">{data.title}</p>
                  </span>
                </b>
              </div>
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <button className="relative color-pink flex w-[115px] shrink-0 cursor-pointer items-center bg-[transparent] p-0 text-left font-others-capitalised text-lg font-bold leading-[28px] [border:none]">
                  <Link
                    className="flex flex-row items-center justify-start text-[inherit] [text-decoration:none]"
                    href='/contact-us'
                  >
                    Get in Touch
                  </Link>
                </button>
                <PackageIcon
                  className="color-pink"
                  groupName="iconoir:arrow-tr"
                />
              </div>
            </div>
            <div className=' w-full lg:w-[75%] flex md:flex-row flex-row mt-5 md:mt-[30px] gap-12 overflow-x-auto lg:overflow-x-hidden container lg:justify-end lg:items-center'>
              {/* {data.section_content.map((sectiondata: { icon: string | undefined; title_section: any; subtitle_section: any; }, index: Key | null | undefined) => ( */}
              <div className="flex flex-row items-center justify-start gap-[10px] text-lg text-mediumblue-100">
                <FormContainer text="Sign in / Sign up" groupName="bxs:right-arrow-alt"
                // groupName={sectiondata.icon}
                // section_title={sectiondata.title_section}
                // section_subtitle={sectiondata.subtitle_section}
                />
                <FormContainer text="View Packages" groupName="bxs:right-arrow-alt" />
                <FormContainer text="Select Package" groupName="bxs:right-arrow-alt" />
                <FormContainer text="Make Payment" groupName="bxs:right-arrow-alt" />
                <FormContainer text="Done" />
              </div>
              {/* ))} */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default AmazingHolidays;
