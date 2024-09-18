/* eslint-disable @next/next/no-img-element */
import 'swiper/css';
import 'swiper/css/navigation';

import type { NextPage } from 'next';
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import TripCard from './trip-card';
import PageWithLoaders from './loader';
import { getTestimonial } from "@/services/testimonial"

type TestimonialType = {
  bgColor?: string;
};
const Testimonial: NextPage<TestimonialType> = ({ bgColor }) => {
  const propLoaderValue = 4
  const homeData = useSelector((state: any) => state.homePage.data)
  const [testimonialData, setTestimonialData] = useState([])
  const [swiper, setSwiper] = useState<any>(null);
  const [showLoader, setShowLoader] = useState(true)

  const nexSlide = () => {
    swiper.slideNext();
  };
  const previousSlide = () => {
    swiper.slidePrev();
  };

  useEffect(() => {
    const fetchData = async () => {
      if (homeData?.testimonial) {
        setTestimonialData(homeData?.testimonial)
        setShowLoader(false)
      }
      else {
        const testimonialData = await getTestimonial()
        setTestimonialData(testimonialData?.data?.data)
        setShowLoader(false)
      }
    }
    fetchData()
  }, [homeData?.testimonial])

  return (
    <div
      className={`${bgColor} card_arrows box-border flex w-full flex-col items-start justify-start gap-[24px] py-[30px] md:py-[68px] text-left font-others-capitalised text-9xl text-black px-[24px]  sm:px-4`}
    >
      {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
        testimonialData && testimonialData?.map((data: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; sub_title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; testimonial_content: any[]; }, index: Key | null | undefined) => (
          <div key={index} className="container mx-auto">
            <div className="flex flex-col items-start justify-start gap-[7px] self-stretch">
              <div className="relative flex flex-row items-start justify-between self-stretch">
                <b className="relative leading-[40px]">
                  <h2 className="m-0 color--wedge sm:hoverUnderline text-[24px] sm:text-[28px] leading-[40px] max-sm:leading-[28px]">{data.title}</h2>
                  <p className="m-0">
                    <span className="text-mediumblue-100 color--wedge">{data.sub_title}</span>
                  </p>
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

              <div className="relative text-mid leading-[25.2px] text-text-gray-700">
                TESTIMONIALS
              </div>
            </div>
            <div className="curated_packages pt-[24px]">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={false}
                modules={[Navigation, Autoplay]}
                onSwiper={(s) => {
                  setSwiper(s);
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false, }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                className="testimonialSlider"
              >
                {data.testimonial_content && data.testimonial_content.map((contentdata: { testimonial: any; name: any; city: any; }, index: Key | null | undefined) => (
                  <SwiperSlide key={index}>
                    <TripCard
                      labelId="/assets/images/testimonial/coma.svg"
                      groupIdentifier="/assets/images/testimonial/heart.svg"
                      testimonial={contentdata.testimonial}
                      name={contentdata.name}
                      city={contentdata.city}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Testimonial;
