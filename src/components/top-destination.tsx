/* eslint-disable @next/next/no-img-element */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { NextPage } from 'next';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DestinationCard from './destination-card';
import SectionTitle from './section-title';
import { useSelector } from 'react-redux';
import { Key, useEffect, useState } from 'react';
import Link from 'next/link';
import PageWithLoaders from './loader';

const TopDestinations: NextPage = () => {
  const propLoaderValue = 4
  const homeData = useSelector((state: any) => state.homePage.data)
  const [swiper, setSwiper] = useState<any>(null);
  const [showLoader, setShowLoader] = useState(true)

  const nexSlide = () => {
    swiper.slideNext();
  };
  const previousSlide = () => {
    swiper.slidePrev();
  };

  useEffect(() => {
    if (homeData.city) {
      setShowLoader(false)
    }
  }, [homeData.city])

  return (
    <div className="box-border relative flex w-full flex-col items-start justify-start gap-[24px] pb-[30px] sm:py-[34px] text-left font-others-capitalised text-9xl text-black px-[24px] sm:px-4">

      <div className="container mx-auto ">
        <SectionTitle topTitle="Explore Top Destinations " topTitle2="in kashmir" />
        {/* <div className='hidden sm:flex'>
          <button
            onClick={previousSlide}
            className="swiper-button-prev relative translate-x-5 translate-y-16 bg-transparent"
          >
            <img src="/assets/images/icons/arrow-left.svg" alt="" />
          </button>
        </div> */}
        <Swiper
          slidesPerView={1}
          slidesPerGroup={3}
          spaceBetween={16}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(s) => {
            setSwiper(s);
          }}
          className="topDestinationSlides top-d-custom-position"
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          autoplay={{ delay: 3000, disableOnInteraction: false, }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
          }}
        >
          <div className="flex flex-row items-start justify-start overflow-x-auto text-lg">
            {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
              homeData?.city && homeData?.city
                // Filter based on the switch_toggle value
                .filter((data: { switch_toggle: boolean }) => data.switch_toggle)
                .map((data: {
                  sub_title: any;
                  slug: any; id: any; imageURL: any; city_name: string | undefined;
                }, index: Key | null | undefined) => (
                  <SwiperSlide key={index}>
                    <Link href={`/destination/${data?.slug}`} className='no-underline'>
                      <DestinationCard
                        frameTitle={data.imageURL}
                        locationName={data.city_name}
                        // subTitle={data.sub_title}
                      />
                    </Link>
                  </SwiperSlide>
                ))}
          </div>
        </Swiper>
        {/* <div className='hidden sm:flex'>
          <button
            onClick={nexSlide}
            className="swiper-button-next right100px translate-x-16 translate-y-16 bg-transparent"
          >
            <img src="/assets/images/icons/arrow-right.svg" alt="" />
          </button>
        </div> */}

      </div>
      <Link href="/destination" className='[text-decoration:none] mx-auto'>
        <button className='sm:hidden rounded-full bg-pink px-12 py-2.5 text-center font-others-capitalised text-sm text-default-white mx-auto'>
          View all
        </button>
      </Link>
    </div>
  );
};

export default TopDestinations;

