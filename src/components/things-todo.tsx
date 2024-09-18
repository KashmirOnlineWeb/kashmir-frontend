import type { NextPage } from 'next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Key, useEffect } from 'react';
import FrameComponent from './frame-component';
import Section from './section';
import Link from 'next/link';
import PageWithLoaders from './loader';

const ThingsTodo: NextPage = () => {
  const propLoaderValue = 4
  const homeData = useSelector((state: any) => state.homePage.data)
  const [showLoader, setShowLoader] = useState(true)

  const defaultImage = (image: any) => {
    if (!image) return "/assets/images/default/default1.webp";
    let imgArr = image.split('/');
    if (!imgArr || imgArr.length === 0) return "/assets/images/default/default1.webp";
    const lastIndex = imgArr.length - 1;
    if (imgArr[lastIndex] !== "default.jpg") {
      return image;
    } else {
      return "/assets/images/default/default1.webp";
    }
  };

  useEffect(() => {
    if (homeData.thingstodo) {
      setShowLoader(false)
    }
  }, [homeData.thingstodo])

  return (
    <div className="sm:px-4 container mx-auto box-border flex w-full flex-col items-start justify-start gap-[24px] py-[34px] text-left font-others-capitalised text-21xl text-default-white px-[24px]">
      <Section
        sectionTitle="Top Things to do"
        sectionTitleSecond="in Kashmir"
        subTitle=" Discover the top things to do in this captivating paradise,"
        subTitle1="as we curate unforgettable holiday experiences exclusively for you."
        buttonText="View all"
        propZIndex="unset"
        linkRoute="/things-to-do"
      />
      <div className="flex flex-col lg:flex-row items-start justify-center lg:gap-[20px] gap-3 w-[100%] lg:w-[100%]">
        <Link href={`/religious-places`} className=' no-underline box-border flex lg:h-[416px] w-[100%] lg:w-full h-[231.44px] flex-row items-end justify-start rounded-3xl bg-[url("/assets/images/things/religious.jpg")] bg-cover bg-[top] bg-no-repeat p-10'>
          {/* <Link href={`/religious-places`} className='no-underline'> */}
            <div className=" text-white relative sm:font-extrabold sm:leading-[54px] sm:text-[40px] text-[24px] leading-[28.8px] font-bold">
              Religious visits
            </div>
          {/* </Link> */}
        </Link>
        <div className="flex flex-col items-start justify-start lg:gap-[20px]  w-[100%] lg:w-full">
          <div className="grid grid-cols-2 items-start justify-start gap-[20px] w-[100%] lg:w-full">
            {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
              homeData?.thingstodo && homeData?.thingstodo
                ?.filter((data: { switch_toggle: any; }) => data?.switch_toggle)
                .slice(0, 4).map((data: {
                  sub_title: any;
                  slug: any;
                  id: any;
                  imageURL: any; title: string | undefined;
                }, index: Key | null | undefined) => (
                  <div key={index}>
                    <Link href={`/thingstodo/${data?.slug}`} className='no-underline'>
                      <FrameComponent
                        title={data.title}
                        // frameDivPosition="unset"
                        frameDivBackgroundImage={`url(${defaultImage(data.imageURL)})`}
                      />
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </div>
      <Link href="/things-to-do" className='[text-decoration:none] mx-auto'>
        <button className='sm:hidden rounded-full bg-pink px-12 py-2.5 text-center font-others-capitalised text-sm text-default-white mx-auto'>
          View all
        </button>
      </Link>
    </div>
  );
};
export default ThingsTodo;
