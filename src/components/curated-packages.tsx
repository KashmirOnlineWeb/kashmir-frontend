/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/button-has-type */
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getyoutube } from '@/services/youtubeService'
import TravelTogetherCard from './travel-together-card';


type CuratedPackagesType = {
  videoSrc?: string;
};

const CuratedPackages: NextPage<CuratedPackagesType> = ({ videoSrc }) => {
  const [swiper, setSwiper] = useState<any>(null);
  const [linksState, setLinksState] = useState<any>()
  const nexSlide = () => {
    swiper.slideNext();
  };
  const previousSlide = () => {
    swiper.slidePrev();
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getyoutube()
      setLinksState(data?.data?.data)
    }
    fetchData()
  }, [])

  return (
    <div className="box-border flex w-full flex-col items-start justify-start gap-[24px] py-[30px] md:py-[68px] text-left font-others-capitalised text-9xl text-black px-[24px] sm:px-4">
      <div className="container mx-auto">
        <div className="relative flex flex-col items-start justify-start self-stretch">
          <div className="flex flex-row items-start justify-between self-stretch">
            <b className="color--wedge relative hoverUnderline leading-[40px] font-bold sm:text-[36px]">
              Experience Virtual
            </b>
            {/* <div className="btns sm:block hidden">
              <button
                onClick={previousSlide}
                className="swiper-button-prev !left-auto !right-[82px] bg-transparent"
              >
                <img src="/assets/images/icons/arrow-left.svg" alt="" />
              </button>
              <button
                onClick={nexSlide}
                className="swiper-button-next bg-transparent "
              >
                <img src="/assets/images/icons/arrow-right.svg" alt="" />
              </button>
            </div> */}
          </div>
          <div>
            <b className="color-pink relative hoverUnderline leading-[40px]  font-bold sm:text-[36px]">
              Tour with Kashmir online
            </b>
          </div>
          <div className="relative text-mid leading-[25.2px] text-text-gray-700 sm:mt-[12px]">
            <span>{`Discovering Heaven on Earth: Journeys through the Valley `}</span>
            {/* <b className="text-darkslategray-100">Summer</b>
            <span>{` & `}</span>
            <b className="text-darkslategray-100">Winter</b>
            <span>{` Tours and Enchanting `}</span>
            <b className="text-mediumblue-100">Honeymoon</b>
            <span> Getaways</span> */}
          </div>
        </div>

        <div className="curated_packages pt-[24px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={(s) => {
              setSwiper(s);
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false, }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="packagesSlider custom-position"
          >

            {linksState && linksState?.map((items: any, index: any) => (
              <SwiperSlide key={index}>
                <TravelTogetherCard videoSrc={items?.youtube_link} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CuratedPackages;
