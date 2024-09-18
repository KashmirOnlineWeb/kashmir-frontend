/* eslint-disable @next/next/no-img-element */
import 'swiper/css';
import 'swiper/css/navigation';

import type { NextPage } from 'next';

import DestinationCard from './destination-card';
import { useState } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type PlacesToVisitType = {
    titleName?: string;
}

const PlacesToVisit: NextPage<PlacesToVisitType> = ({ titleName }) => {
    const [swiper, setSwiper] = useState<any>(null);
    const nexSlide = () => {
        swiper.slideNext();
    };
    const previousSlide = () => {
        swiper.slidePrev();
    };
    return (
        <div className="container mx-auto px-4">
            <div className="box-border flex w-full flex-col items-start justify-start gap-[24px] py-[68px] text-left font-others-capitalised text-9xl text-black">
                <div className="flex flex-row items-start justify-between self-stretch">
                    <b className="relative leading-[40px] color--wedge hoverUnderline text-[24px] sm:text-[36px]">
                        {titleName}
                    </b>
                    {/* <div className="btns relative hidden md:block">
                        <button
                            onClick={previousSlide}
                            className="swiper-button-prev !left-auto !right-[82px] bg-transparent !top-[30px]"
                        >
                            <img src="/assets/images/icons/arrow-left.svg" alt="" />
                        </button>
                        <button
                            onClick={nexSlide}
                            className="swiper-button-next bg-transparent !top-[30px]"
                        >
                            <img src="/assets/images/icons/arrow-right.svg" alt="" />
                        </button>
                    </div> */}
                </div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={5}
                    navigation={false}
                    onSwiper={(s) => {
                        setSwiper(s);
                    }}
                    modules={[Navigation, Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false, }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        },
                    }}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <DestinationCard
                            frameTitle="/assets/images/package/package.webp"
                            locationName="Baisaran"
                            locationText="The one that combines shikhara, Valley visits, snow rides and more"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <DestinationCard
                            frameTitle="/assets/images/package/package.webp"
                            locationName="Baisaran"
                            locationText="The one that combines shikhara, Valley visits, snow rides and more"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <DestinationCard
                            frameTitle="/assets/images/package/package.webp"
                            locationName="Baisaran"
                            locationText="The one that combines shikhara, Valley visits, snow rides and more"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <DestinationCard
                            frameTitle="/assets/images/package/package.webp"
                            locationName="Baisaran"
                            locationText="The one that combines shikhara, Valley visits, snow rides and more"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <DestinationCard
                            frameTitle="/assets/images/package/package.webp"
                            locationName="Baisaran"
                            locationText="The one that combines shikhara, Valley visits, snow rides and more"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default PlacesToVisit;
