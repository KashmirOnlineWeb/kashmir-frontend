import type { NextPage } from 'next';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import Property1pack2 from './property1pack2';
import { Key, useEffect } from 'react';
import SectionTitle from './section-title';
import Link from 'next/link';
import PageWithLoaders from './loader';

const RecommendedHotels: NextPage = () => {
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
    if (homeData.hotel) {
      setShowLoader(false)
    }
  }, [homeData.hotel]);

  return (
    <div className="container relative mx-auto box-border flex w-full flex-col items-start justify-start gap-[24px] sm:py-[34px] text-left font-others-capitalised text-9xl text-black px-[24px] sm:px-4">

      {/* <button
        onClick={previousSlide}
        className="swiper-button-prev -translate-x-16 translate-y-20 bg-transparent"
      >
        <img src="/assets/images/icons/arrow-left.svg" alt="" />
      </button> */}
      <SectionTitle topTitle="Hotels recommended" topTitle2="by our travel experts" />

      <div className="relative flex flex-row items-center justify-start gap-[16px] w-full overflow-x-scroll sm:overflow-x-hidden container">
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
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
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          className="packagesSlider custom-position"
        >
          {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
            homeData?.hotel && homeData?.hotel?.filter((value: any) => value?.active)
              ?.map((data: {
                slug: any;
                city: string | undefined;
                id: any;
                imageURL: string | undefined; hotel_name: string | undefined; star: string | undefined; location: string | undefined; total_rooms: any; balcony: string | undefined; breakfast: boolean | undefined; price: number; tax: number;
              }, index: Key | null | undefined) => (
                <SwiperSlide key={index}>
                  <Link href={`/hotel/${data?.slug}`} className="no-underline">
                    <Property1pack2
                      frame95={data.imageURL}
                      property1pack2Position="unset"
                      property1pack2ZIndex="0"
                      packageName={data.hotel_name}
                      star={data.star}
                      location={data.city}
                      amenities1={`${data.total_rooms} bedroom`}
                      amenities2="2 guest"
                      balcony={data.balcony}
                      breakfast={data.breakfast}
                      perPerson="pp"
                      price={`₹ ${data.price}`}
                      tax={`+ ₹ ${Math.round(data.price * (data.tax / 100))} taxes`}
                      isAllListing={true}
                    />
                  </Link>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
      {/* <button
        onClick={nexSlide}
        className="swiper-button-next translate-x-16 translate-y-20 bg-transparent"
      >
        <img src="/assets/images/icons/arrow-right.svg" alt="" />
      </button> */}
      <Link href="/hotel?tab=package" className='[text-decoration:none] mx-auto'>
        <button className='sm:hidden rounded-full bg-pink px-12 py-2.5 text-center font-others-capitalised text-sm text-default-white mx-auto'>
          View all
        </button>
      </Link>
    </div>
  );
};
export default RecommendedHotels;
