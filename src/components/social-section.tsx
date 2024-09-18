/* eslint-disable @next/next/no-img-element */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import CarouselButtons from './carousel-buttons';
import Property1Default from './property1-default';
import { getInstagramApiData } from '@/services/instagramApi';
import axios from 'axios';

const SocialSection: NextPage = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const nexSlide = () => {
    swiper.slideNext();
  };
  const previousSlide = () => {
    swiper.slidePrev();
  };
  const INSTAGRAM_ACCESS_TOKEN = 'EAAa1r5F7RlsBO1ZCwxrDbFzfBfaJomKWsA6CDpkGbkruaBge1jUZA3Kl6Mb8IIVHGOgOE9xd3Cg4mE6PZCUpEB3wL4ou89tJF23ZB03ZBekzocwZA5PrvPGTa1cRHPy3ePWal8L3rEJM5DwZC8vvZB41nYSIeMqXson7LGpZBKSWArhiyJKZBt7oskQPu5WrWZBhWCe8otYRCsB2sS0eu6K3gZDZD';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,name&access_token=${INSTAGRAM_ACCESS_TOKEN}`);
        console.log(response.data, "response.data");
        return response.data;
      } catch (err:any) {
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("Error response data:", err.response.data);
          console.log("Error response status:", err.response.status);
          console.log("Error response headers:", err.response.headers);
        } else if (err.request) {
          // The request was made but no response was received
          console.log("Error request data:", err.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error message:", err.message);
        }
        console.log("Error config:", err.config);
        return err;
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-[20px] box-border flex w-full flex-col items-start justify-start gap-[24px] bg-mediumblue-100 py-[30px] md:py-[68px] text-left font-others-capitalised text-21xl text-default-white  sm:px-4">
      <div className="container mx-auto">
        <div className="social-section flex flex-col items-start justify-start gap-[7px] self-stretch">
          <div className="relative flex flex-row items-start justify-between self-stretch">
            <div className="relative font-extrabold leading-[54px] text-[32px] sm:text-[40px]">
              #kashmironline
            </div>
            <div className='sm:block hidden'>
              <CarouselButtons
                clickSlide={previousSlide}
                imgSrc="/assets/images/icons/arrow-left.svg"
                classPosition="!left-auto !right-[82px] swiper-button-prev"
              />
              <CarouselButtons
                clickSlide={nexSlide}
                imgSrc="/assets/images/icons/arrow-right.svg"
                classPosition="swiper-button-next"
              />
            </div>
          </div>
          <div className="relative text-mid leading-[25.2px] text-gray-300">
            Follow us
          </div>
          <div className="flex flex-row items-center justify-center gap-[10px] overflow-hidden ">
            <a className="relative text-white [text-decoration:none]" href="https://www.instagram.com/mykashmironline/?igshid=YmMyMTA2M2Y%3D">
              {/* <Image
                className="items-center justify-center border-none"
                src='/assets/images/socialIcons/instagram.png'
                alt='instagram'
                width={35}
                height={35}
              /> */}
              <Property1Default
                vector="akar-icons:instagram-fill"
                property1DefaultPosition="unset"
                property1DefaultTransform=""
                property1DefaultMargin="unset"
                property1DefaultTop="unset"
                property1DefaultLeft="unset"
                property1DefaultZIndex="unset"
                className="items-center justify-center bg-white/[.09] p-4"
                iconWidth="w-[17px] h-[17px]"
              />
            </a>
            <a className="relative text-white [text-decoration:none]" href="https://www.facebook.com/kashmironline.4/?mibextid=ZbWKwL">
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
                className="items-center justify-center bg-white/[.09] p-4"
                iconWidth="w-[17px] h-[17px]"
              />
            </a>
            <a className="relative text-white [text-decoration:none]" href="https://twitter.com/mykashmironline">
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
                className="items-center justify-center bg-white/[.09] p-4"
                iconWidth="w-[17px] h-[17px]"
              />
            </a>
            <a className="relative text-white [text-decoration:none]" href="https://www.youtube.com/channel/UC2rqwz7Zd5p9O_lFwCjd1GQ">
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
                className="items-center justify-center bg-white/[.09] p-4"
                iconWidth="w-[17px] h-[17px]"
              />
            </a>
          </div>
        </div>
        <div className="curated_packages pt-[24px] lg:block hidden">
          <Swiper
            navigation={false}
            modules={[Navigation, Autoplay]}
            onSwiper={(s) => {
              setSwiper(s);
            }}
            autoplay={{ delay: 1000 }}
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
                slidesPerView: 5,
                spaceBetween: 0,
              },
            }}
            className="mySwiper1"
          >
            <SwiperSlide>
              <img
                className="relative h-[260px] w-[260px] shrink-0 overflow-hidden object-cover"
                alt=""
                src="/assets/images/instagram/insta1.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="relative h-[260px] w-[260px] shrink-0 overflow-hidden object-cover"
                alt=""
                src="/assets/images/instagram/insta2.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="relative h-[260px] w-[260px] shrink-0 overflow-hidden object-cover"
                alt=""
                src="/assets/images/instagram/insta3.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="relative h-[260px] w-[260px] shrink-0 overflow-hidden object-cover"
                alt=""
                src="/assets/images/instagram/insta4.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="relative h-[260px] w-[260px] shrink-0 overflow-hidden object-cover"
                alt=""
                src="/assets/images/instagram/insta5.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="relative h-[260px] w-[260px] shrink-0 overflow-hidden object-cover"
                alt=""
                src="/assets/images/instagram/insta4.svg"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className='lg:hidden block mt-5'>
          <div className='flex overflow-x-scroll'>
            <img
              className="relative h-[195px] w-[195px] shrink-0 overflow-hidden object-cover"
              alt=""
              src="/assets/images/instagram/insta1.svg"
            />
            <img
              className="relative h-[195px] w-[195px] shrink-0 overflow-hidden object-cover"
              alt=""
              src="/assets/images/instagram/insta2.svg"
            />
            <img
              className="relative h-[195px] w-[195px] shrink-0 overflow-hidden object-cover"
              alt=""
              src="/assets/images/instagram/insta3.svg"
            />
          </div>

          <div className='flex overflow-x-scroll'>
            <img
              className="relative h-[195px] w-[195px] shrink-0 overflow-hidden object-cover"
              alt=""
              src="/assets/images/instagram/insta4.svg"
            />
            <img
              className="relative h-[195px] w-[195px] shrink-0 overflow-hidden object-cover"
              alt=""
              src="/assets/images/instagram/insta5.svg"
            />
            <img
              className="relative h-[195px] w-[195px] shrink-0 overflow-hidden object-cover"
              alt=""
              src="/assets/images/instagram/insta4.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SocialSection;
