/* eslint-disable @next/next/no-img-element */
import "swiper/css";
import "swiper/css/navigation";

import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import Property1Default1 from "./property1-default1";
import Section from "./section";
import Link from "next/link";
import PageWithLoaders from "./loader";

const PopularPackage: NextPage = () => {
  const propLoaderValue = 4;
  const homeData = useSelector((state: any) => state.homePage.data)
  const countCategoryData = useSelector((state: any) => state.homePage.data.categoryCount)
  const [swiper, setSwiper] = useState<any>(null);
  const [showLoader, setShowLoader] = useState(true);
  const nexSlide = () => {
    swiper.slideNext();
  };
  const previousSlide = () => {
    swiper.slidePrev();
  };

  const defaultImage = (image: any) => {
    if (!image) return "/assets/images/default/default1.webp";
    let imgArr = image.split('/');
    if (!imgArr || imgArr.length === 0) return "/assets/images/default/default1.webp";
    const lastIndex = imgArr.length - 1;
    if (imgArr[lastIndex] !== "default.jpg" && imgArr[lastIndex] !== undefined) {
      return image;
    } else {
      return "/assets/images/default/default1.webp";
    }
  };

  useEffect(() => {
    if (homeData.category) {
      setShowLoader(false)
    }
  }, [homeData.category]);

  return (
    <div className="container relative mx-auto sm:px-4 ">
      <div className=" box-border flex w-full flex-col items-center justify-center gap-[24px] lg:py-[68px] py-[30px] text-left font-others-capitalised text-9xl text-black px-[24px] sm:px-0">
        <Section
          sectionTitle="Popular"
          sectionTitleSecond="packages for you"
          subTitle="Unforgettable Kashmir holiday Packages crafted just for you."
          subTitle1="Relax, explore, and create everlasting memories."
          buttonText="View all"
          linkRoute="/category"
        />
        {/* <button
          onClick={previousSlide}
          className="swiper-button-prev -translate-x-16 translate-y-16 bg-transparent opacity-0 lg:opacity-100"
        >
          <img src="/assets/images/icons/arrow-left.svg" alt="" />
        </button> */}

        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          navigation={false}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false, }}
          onSwiper={(s) => {
            setSwiper(s);
          }}
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
              spaceBetween: 44,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {showLoader ? (
            <PageWithLoaders prop={propLoaderValue} />
          ) : (
            homeData?.category &&
            homeData?.category?.map(
              (
                category: {
                  id: string;
                  category_name: string | undefined;
                  min_price: string | undefined;
                  imageURL: any;
                  slug: string;
                },
                index: React.Key | null | undefined
              ) => (
                <SwiperSlide key={index}>
                  <Link
                    href={`/listing?type=package&category_name=${category?.category_name}`}
                    className="no-underline"
                  >
                    <Property1Default1
                      adventure={category?.category_name}
                      min_price={category?.min_price}
                      property1DefaultPosition="unset"
                      property1DefaultBackgroundImage={`url(${defaultImage(category?.imageURL)})`}
                      property1DefaultTextDecoration="none"
                    />
                  </Link>
                </SwiperSlide>
              )
            )
          )}
        </Swiper>
        {/* <button
          onClick={nexSlide}
          className="swiper-button-next translate-x-16 translate-y-16 bg-transparent opacity-0 lg:opacity-100"
        >
          <img src="/assets/images/icons/arrow-right.svg" alt="" />
        </button> */}
      </div>
    </div>
  );
};
export default PopularPackage;
