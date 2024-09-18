/* eslint-disable @next/next/no-img-element */
import 'swiper/css';
import 'swiper/css/navigation';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect, Key } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Property1pack3 from './property1pack3';
import SectionTitle from './section-title';
import { useDispatch, useSelector } from 'react-redux';
import PageWithLoaders from './loader';
import { getAllCityThingstodo } from '@/services/thingstodo';
import { CityThingstodo } from '@/redux/slices';
import Link from 'next/link';

type ThingstodoCardType = {
    color?: string;
    topSubTitle?: string;
    titleName?: string;
};

const ThingstodoCard: NextPage<ThingstodoCardType> = ({ color, topSubTitle, titleName }) => {
    const propLoaderValue = 4
    const router = useRouter()
    const [swiper, setSwiper] = useState<any>(null);
    const ThingstodoCityData = useSelector((state: any) => state.citythingstodo.data)
    const [showLoader, setShowLoader] = useState(true)
    // Check if router.asPath is defined before splitting
    const currentURL = router.asPath || ''; // Initialize it as an empty string if undefined
    const segments = currentURL.split('/'); // Split the URL by '/'
    const lastSegment = segments[segments.length - 1];
    const nexSlide = () => {
        swiper.slideNext();
    };
    const previousSlide = () => {
        swiper.slidePrev();
    };

    const dispatch = useDispatch()
    useEffect(() => {
        const FetchData = async () => {
            const data = await getAllCityThingstodo(lastSegment)
            dispatch(CityThingstodo(data?.thingstodo))
            setShowLoader(false)
        }
        FetchData()
    }, [dispatch, lastSegment])

    return (
        <div className={`${color} relative box-border flex w-full flex-col items-start  justify-start gap-[24px] py-[68px] text-left font-others-capitalised text-9xl text-black px-4`}>
            <div className="container mx-auto">
                <SectionTitle
                    topTitle={titleName}
                    topSubTitle={topSubTitle}
                />
                {/* <button
                    onClick={previousSlide}
                    className="swiper-button-prev translate-x-7 custom-displaynone translate-y-16 bg-transparent hidden md:block"
                >
                    <img src="/assets/images/icons/arrow-left.svg" alt="" />
                </button> */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={16}
                    navigation={false}
                    onSwiper={(s) => {
                        setSwiper(s);
                    }}
                    modules={[Navigation, Autoplay]}
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
                            slidesPerView: 4,
                            spaceBetween: 16,
                        },
                    }}
                    className="mySwiper1"
                >
                    {showLoader ?
                        <PageWithLoaders prop={propLoaderValue} />
                        :
                        ThingstodoCityData && ThingstodoCityData.map((data: {
                            slug: any; id: any; imageURL: string | undefined; title: string | undefined; duration: { nights: any; days: any; }; destination: string | undefined; price: any;
                        }, index: Key | null | undefined) => (
                            <SwiperSlide key={index}>
                                <Link href={`/thingstodo/${data?.slug}`} className='no-underline'>
                                    <Property1pack3
                                        frame95={data.imageURL}
                                        property1pack3Position="unset"
                                        property1pack3ZIndex="0"
                                        packageName={data.title}
                                        amenities1="Sightseeing"
                                        amenities2="Hotel"
                                        amenities3="Transport"
                                        price={`From ₹ ${data.price} pp`}
                                        lgClass="md:w-full lg:w-full"
                                    />
                                </Link>
                            </SwiperSlide>
                        ))}
                </Swiper>
                {/* <button
                    onClick={nexSlide}
                    className="swiper-button-next -translate-x-3 translate-y-16 bg-transparent custom-displaynone hidden md:block"
                >
                    <img src="/assets/images/icons/arrow-right.svg" alt="" />
                </button> */}
            </div>
        </div>
    );
};
export default ThingstodoCard;