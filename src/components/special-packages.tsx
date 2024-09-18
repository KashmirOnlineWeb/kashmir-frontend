/* eslint-disable @next/next/no-img-element */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Property1pack3 from './property1pack3';
import SectionTitle from './section-title';
import { getAllPackage } from '@/services/package';
import { useDispatch, useSelector } from 'react-redux';
import PageWithLoaders from './loader';
import Link from 'next/link';
import router from 'next/router';

type SpecialPackagesType = {
  color?: string;
  topSubTitle?: string;
  titleName?: string;
  lgClass?: string;
  titlename2?: string;
  smallTitle?: boolean;
};

const SpecialPackages: NextPage<SpecialPackagesType> = ({ color, topSubTitle, titlename2, titleName, lgClass, smallTitle }) => {
  const propLoaderValue = 4
  const homeData = useSelector((state: any) => state.homePage.data)
  const packages = homeData?.package?.packages;
  const [swiper, setSwiper] = useState<any>(null);
  const [showLoader, setShowLoader] = useState(true)
  const [packageApiData, setPackageApiData] = useState([])
  const nexSlide = () => {
    swiper.slideNext();
  };
  const previousSlide = () => {
    swiper.slidePrev();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (packages != undefined) {
          setPackageApiData(packages)
          setShowLoader(false)
        }
        else {
          const data = await getAllPackage()
          setPackageApiData(data?.data?.data)
          setShowLoader(false)
        }
      }
      catch (err) { err }
    }
    fetchData()
  }, [packages, packageApiData])

  return (
    <div className={`${color} container mx-auto box-border flex w-full flex-col items-start  justify-start gap-[24px] py-8 lg:py-[34px] text-left font-others-capitalised text-9xl text-black px-[24px] sm:px-4`}>
        <SectionTitle
          topTitle={titleName}
          topTitle2={titlename2}
          topSubTitle={topSubTitle}
          smallTitle={true}
        />
        {/* <div className='hidden sm:block'>
          <button
            onClick={previousSlide}
            className="swiper-button-prev -translate-x-16 translate-y-16 bg-transparent"
          >
            <img src="/assets/images/icons/arrow-left.svg" alt="" />
          </button>
        </div> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          // autoplay={true}
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
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          className="mySwiper1 custom-position"
        >

          {showLoader ?
            <PageWithLoaders prop={propLoaderValue} />
            :
            packageApiData && packageApiData
              .filter((data: { switch_toggle: any; }) => data.switch_toggle)
              .map((data: {
                slug: any;
                id: any;
                imageURL: string | undefined; package_name: string | undefined; duration: { nights: any; days: any; }; destination: string | undefined; inclusions: string | undefined; content: string | undefined; price: any;
              }, index: React.Key | null | undefined) => (
                <SwiperSlide key={index}>
                  <Link href={`/package/${data?.slug}`} className="no-underline">
                    <Property1pack3
                      frame95={data.imageURL}
                      property1pack3Position="unset"
                      property1pack3ZIndex="0"
                      packageName={data.package_name}
                      totalDays={`${data.duration.nights}N / ${data.duration.days}D`}
                      location={data.destination}
                      amenities1="Sightseeing"
                      amenities2="Hotel"
                      amenities3="Transport"
                      price={`From ₹ ${data.price} pp`}
                      lgClass={lgClass}
                      minheightFromSpecialPackage="min-h-[390px]"
                    />
                  </Link>
                </SwiperSlide>
              ))}
        </Swiper>
        {/* <div className='hidden sm:block'>
          <button
            onClick={nexSlide}
            className="swiper-button-next translate-x-16 translate-y-16 bg-transparent"
          >
            <img src="/assets/images/icons/arrow-right.svg" alt="" />
          </button>
        </div> */}
    </div>
  );
};
export default SpecialPackages;
