/* eslint-disable @next/next/no-img-element */
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import Property1pack2 from './property1pack2';
import VariantFilledTypePrimary from './variant-filled-type-primary';
import Link from 'next/link';
import PageWithLoaders from './loader';
import { Package, Duration, Tab } from '../services/listing.type.package';
import { getAllPackage } from '@/services/package';
import { getAllTabsPackage } from '@/services/package';

type PackagesSectionType = {
  titlePackage?: string;
  trueProp?: boolean;
  isPackage?: boolean
  lgClass?: string;
};
const PackagesSection: NextPage<PackagesSectionType> = ({ isPackage, titlePackage, trueProp, lgClass }) => {
  const propLoaderValue = 4
  const [swiper, setSwiper] = useState<any>(null);
  const homeData = useSelector((state: any) => state.homePage.data)
  const [showLoader, setShowLoader] = useState(true)

  const [packages, setPackages] = useState<Package[] | null>(null);
  const [filteredPackages, setFilteredPackages] = useState<Package[] | null>(null);

  const initialTabs: Tab[] = homeData?.package?.tabs;
  const [initialTabsState, setInitialTabsState] = useState([])
  const [activeTab, setActiveTab] = useState<Duration | null | any>(null);
  const nexSlide = () => {
    swiper.slideNext();
  };
  const previousSlide = () => {
    swiper.slidePrev();
  };

  // const initialTabs = [
  //   { days: 3, nights: 2, label: "2N - 3D" },
  //   { days: 4, nights: 3, label: "4N - 3D" },
  //   // ... other tabs
  // ];

  // let filteredPackage: Package[] | null = activeTab 
  // ? packages?.filter((pkg: Package) =>
  //       pkg.duration.days === activeTab.days &&
  //       pkg.duration.nights === activeTab.nights
  //   ) || null
  // : packages || null;

  // setFilteredPackages(filteredPackage);

  useEffect(() => {
    const filterPackages = () => {
      if (activeTab) {
        return packages?.filter(
          (pkg: Package) =>
            pkg.duration.days === activeTab.days &&
            pkg.duration.nights === activeTab.nights
        ) || null;
      } else {
        return packages || null;
      }
    };

    const filteredPackage = filterPackages();
    setFilteredPackages(filteredPackage);
  }, [activeTab, packages]); // Dependencies array - useEffect will run when these change

  const handleTabClick = (days: number, nights: number) => {
    if (days && nights) {
      setActiveTab({ days, nights });
    } else {
      setActiveTab(null);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!homeData?.package?.packages) {
          const packageResponse = await getAllPackage();
          setPackages(packageResponse?.data?.data);

          const tabsResponse = await getAllTabsPackage();
          setInitialTabsState(tabsResponse?.data?.tabs);
        } else {
          setPackages(homeData?.package?.packages);
          setInitialTabsState(homeData?.package?.tabs);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [homeData?.package?.packages]);

  useEffect(() => {
    if (packages) {
      setShowLoader(false)
    }
  }, [packages]);

  return (
    <div className="container relative sm:px-4 mx-auto box-border flex w-full flex-col items-start justify-start gap-[24px] sm:py-[34px] text-left font-others-capitalised text-9xl text-black px-[24px]">
      <div className="flex flex-col items-start justify-start self-stretch">
        <div className="flex flex-row items-start justify-between self-stretch">
          <b className="leading-[40px] max-sm:leading-[15px] font-bold sm:text-[36px] text-[24px] color--wedge relative sm:hoverUnderline ">
            Top Rated
          </b>
          <div className='sm:block hidden'>
            <Link href="/listing?tab=package" className='[text-decoration:none]'>
              <VariantFilledTypePrimary
                label="View all"
                variantFilledTypePrimaryPosition="unset"
                variantFilledTypePrimaryBorderRadius="25px"
                // variantFilledTypePrimaryBackgroundColor="#0022cc"
                variantFilledTypePrimaryBoxSizing="border-box"
                variantFilledTypePrimaryCursor="pointer"
                variantFilledTypePrimaryBorder="none"
                labelDisplay="inline-block"
              /></Link>
          </div>
        </div>
        <div>
          <b className="leading-[40px] font-bold sm:text-[36px] text-[24px] color-pink relative sm:hoverUnderline ">
            Kashmir Tour Packages
          </b></div>
        <div className="relative text-mid leading-[25.2px] text-text-gray-700 sm:mt-[12px]">
          <span className="text-[16px] sm:text-[17px]">{`Explore the Grandeur of Jammu and Kashmir with Unforgettable Tours for All Seasons, Captivating Honeymoon Getaways, and Immersive Summer and Winter Experiences.`}</span>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start sm:gap-[16px] gap-2 text-center text-sm overflow-x-auto sm:overflow-x-hidden container">
        <div className={`${activeTab == null ? `bg-pink text-white` : `bg-white text-black`} border-[1.5px] border-solid border-text-gray-700 cursor-pointer box-border flex h-10 lg:min-w-[64px] flex-row items-center justify-center rounded-3xl px-4 py-2 text-base`}>
          <div className="relative flex-1 font-medium leading-[24px]">
            {' '}
            <a onClick={() => handleTabClick(0, 0)} className=" no-underline">
              All
            </a>
          </div>
        </div>
        {initialTabsState && initialTabsState.map((tab: any, index: any) => (
          <div key={index}
            className={`${activeTab && activeTab.days === tab.days && activeTab.nights === tab.nights ? 'bg-pink text-white' : 'bg-white'} cursor-pointer box-border flex h-10 lg:min-w-[64px] flex-row items-center justify-center rounded-3xl border-[1.5px] border-solid border-text-gray-700 px-4 py-2`}>
            <a
              onClick={() => handleTabClick(tab.days, tab.nights)}
              className={`  no-underline whitespace-nowrap md:whitespace-pre`}>
              <b className={`relative flex-1 uppercase leading-[18px] tracking-[1px]`}>
                {/* 2N - 4N */}
                {tab.label}
              </b>
            </a>
          </div>
        ))}

        {/* <div className="box-border flex h-10 min-w-[64px] flex-row items-center justify-center rounded-3xl border-[1.5px] border-solid border-text-gray-700 px-4 py-2">
          <a href="#" className="text-black no-underline  whitespace-nowrap md:whitespace-pre">
            <b className="relative flex-1 uppercase leading-[18px] tracking-[1px]">
              4N - 6N
            </b>
          </a>
        </div>
        <div className="box-border flex h-10 min-w-[64px] flex-row items-center justify-center rounded-3xl border-[1.5px] border-solid border-text-gray-700 px-4 py-2">
          <a href="#" className="text-black no-underline  whitespace-nowrap md:whitespace-pre">
            <b className="relative flex-1 uppercase leading-[18px] tracking-[1px]">
              6N - 12N
            </b>
          </a>
        </div> */}
      </div>
      {/* <button
        onClick={previousSlide}
        className="swiper-button-prev -translate-x-16 translate-y-20 bg-transparent"
      >
        <img src="/assets/images/icons/arrow-left.svg" alt="" />
      </button> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        navigation={false}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Navigation, Autoplay]}
        onSwiper={(s) => {
          setSwiper(s);
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false, }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
        }}
        className="packagesSlider custom-position"
      >
        {showLoader ?
          <PageWithLoaders prop={propLoaderValue} />
          :
          // homeData?.package && homeData?.package.map((data: {
          filteredPackages?.filter((value) => value?.active)
            ?.map((data, index: React.Key | null | undefined) => (
              <SwiperSlide key={index}>
                <Link href={`/package/${data?.slug}`} className="no-underline">
                  <Property1pack2
                    minheightFromPackage="min-h-[390px]"
                    frame95={data?.imageURL}
                    property1pack2Position="unset"
                    property1pack2ZIndex="0"
                    packageName={data?.package_name}
                    totalDays={`${data?.duration.nights}N / ${data?.duration.days}D`}
                    location={data?.destination}
                    amenities1="Sightseeing"
                    amenities2="Hotel"
                    amenities3="Transport"
                    pacakgeText={data?.content}
                    perPerson="pp"
                    price={`From ₹ ${data?.price}`}
                    isPackage={isPackage}
                    isAllListing={true}
                    lgClass={lgClass}
                    // isHotel={true}
                  />
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>
      {/* <button
        onClick={nexSlide}
        className="swiper-button-next translate-x-16 translate-y-20 bg-transparent"
      >
        <img src="/assets/images/icons/arrow-right.svg" alt="" />
      </button> */}
      <Link href="/listing?tab=package" className='[text-decoration:none] mx-auto max-md:mb-[30px]'>
        <button className='sm:hidden rounded-full bg-pink px-12 py-2.5 text-center font-others-capitalised text-sm text-default-white mx-auto'>
          View all
        </button>
      </Link>
    </div>
  );
};
export default PackagesSection;

/* eslint-disable @next/next/no-img-element */
// import React, { useState, useEffect } from 'react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import type { NextPage } from 'next';

// import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { useSelector } from 'react-redux';
// import Property1pack2 from './property1pack2';
// import VariantFilledTypePrimary from './variant-filled-type-primary';
// import Link from 'next/link';
// import PageWithLoaders from './loader';
// import { Package, Duration, Tab } from '../services/listing.type.package';
// import { getAllPackage } from '@/services/package';

// type PackagesSectionType = {
//   titlePackage?: string;
//   trueProp?: boolean;
//   isPackage?: boolean;
//   lgClass?: string;
// };

// const PackagesSection: NextPage<PackagesSectionType> = ({
//   isPackage,
//   titlePackage,
//   trueProp,
//   lgClass,
// }) => {
//   const propLoaderValue = 4;
//   const [swiper, setSwiper] = useState<any>(null);
//   const homeData = useSelector((state: any) => state.homePage.data);
//   const [showLoader, setShowLoader] = useState(true);

//   const [packages, setPackages] = useState<Package[] | null>(null);
//   const [filteredPackages, setFilteredPackages] = useState<Package[] | null>(null);

//   const initialTabs: Tab[] = homeData?.package?.tabs;
//   const [activeTab, setActiveTab] = useState<Duration | null>(null);

//   const nexSlide = () => {
//     swiper.slideNext();
//   };

//   const previousSlide = () => {
//     swiper.slidePrev();
//   };

//   useEffect(() => {
//     const filterPackages = () => {
//       if (activeTab) {
//         return packages?.filter(
//           (pkg: Package) =>
//             pkg.duration.days === activeTab.days && pkg.duration.nights === activeTab.nights
//         ) || null;
//       } else {
//         return packages || null;
//       }
//     };

//     const filteredPackage = filterPackages();
//     setFilteredPackages(filteredPackage);
//   }, [activeTab, packages]);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!homeData?.package?.packages) {
//         const packages = await getAllPackage();
//         setPackages(packages?.data?.data);
//       } else {
//         setPackages(homeData?.package?.packages);
//       }
//     };
//     fetchData();
//   }, [homeData?.package?.packages]);

//   useEffect(() => {
//     if (packages) {
//       setShowLoader(false);
//     }
//   }, [packages]);

//   return (
//     <div className="container relative sm:px-4 mx-auto box-border flex w-full flex-col items-start justify-start gap-[24px] sm:py-[34px] text-left font-others-capitalised text-9xl text-black px-[24px]">
//       <div className="flex flex-col items-start justify-start self-stretch">
//         <div className="flex flex-row items-start justify-between self-stretch">
//           <b className="leading-[40px] font-bold sm:text-[36px] text-[24px] color--wedge relative sm:hoverUnderline ">
//             Top Rated
//           </b>
//           <div className="sm:block hidden">
//             <Link href="/listing?tab=package" className="[text-decoration:none]">
//               <VariantFilledTypePrimary
//                 label="View all"
//                 variantFilledTypePrimaryPosition="unset"
//                 variantFilledTypePrimaryBorderRadius="25px"
//                 variantFilledTypePrimaryCursor="pointer"
//                 variantFilledTypePrimaryBorder="none"
//                 labelDisplay="inline-block"
//               />
//             </Link>
//           </div>
//         </div>
//         <div>
//           <b className="leading-[40px] font-bold sm:text-[36px] text-[24px] color-pink relative sm:hoverUnderline ">
//             Kashmir Tour Packages
//           </b>
//         </div>
//         <div className="relative text-mid leading-[25.2px] text-text-gray-700 sm:mt-[12px]">
//           <span className="text-[16px] sm:text-[17px]">
//             Explore the Grandeur of Jammu and Kashmir with Unforgettable Tours for All Seasons,
//             Captivating Honeymoon Getaways, and Immersive Summer and Winter Experiences.
//           </span>
//         </div>
//       </div>
//       <div className="flex flex-row items-start justify-start sm:gap-[16px] gap-2 text-center text-sm overflow-x-auto sm:overflow-x-hidden container">
//         <div
//           className={`${activeTab == null ? 'bg-pink text-white' : 'bg-white text-black'
//             } border-[1.5px] border-solid border-text-gray-700 cursor-pointer box-border flex h-10 lg:min-w-[64px] flex-row items-center justify-center rounded-3xl px-4 py-2 text-base`}
//         >
//           <div className="relative flex-1 font-medium leading-[24px]">
//             {' '}
//             <a onClick={() => setActiveTab(null)} className="no-underline">
//               All
//             </a>
//           </div>
//         </div>
//         {initialTabs &&
//           initialTabs.map((tab, index) => (
//             <div
//               key={index}
//               className={`${activeTab && activeTab.days === tab.days && activeTab.nights === tab.nights
//                   ? 'bg-pink text-white'
//                   : 'bg-white'
//                 } cursor-pointer box-border flex h-10 lg:min-w-[64px] flex-row items-center justify-center rounded-3xl border-[1.5px] border-solid border-text-gray-700 px-4 py-2`}
//             >
//               <a
//                 onClick={() => setActiveTab(tab)}
//                 className="no-underline whitespace-nowrap md:whitespace-pre"
//               >
//                 <b className="relative flex-1 uppercase leading-[18px] tracking-[1px]">
//                   {tab.label}
//                 </b>
//               </a>
//             </div>
//           ))}
//       </div>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={16}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Navigation, Pagination, Autoplay]}
//         onSwiper={(s) => setSwiper(s)}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 16,
//           },
//         }}
//         className="packagesSlider"
//       >
//         {showLoader ? (
//           <PageWithLoaders prop={propLoaderValue} />
//         ) : (
//           filteredPackages
//             ?.filter((value) => value?.active)
//             .map((data, index) => (
//               <SwiperSlide key={index}>
//                 <Link href={`/package/${data?.slug}`} className="no-underline">
//                   <Property1pack2
//                     minheightFromPackage="min-h-[390px]"
//                     frame95={data?.imageURL}
//                     property1pack2Position="unset"
//                     property1pack2ZIndex="0"
//                     packageName={data?.package_name}
//                     totalDays={`${data?.duration.nights}N / ${data?.duration.days}D`}
//                     location={data?.destination}
//                     amenities1="Sightseeing"
//                     amenities2="Hotel"
//                     amenities3="Transport"
//                     pacakgeText={data?.content}
//                     perPerson="pp"
//                     price={`From ₹ ${data?.price}`}
//                     isPackage={isPackage}
//                     isAllListing={true}
//                     lgClass={lgClass}
//                   />
//                 </Link>
//               </SwiperSlide>
//             ))
//         )}
//       </Swiper>
//       {/* <div className="flex justify-center mt-4">
//         <button
//           onClick={previousSlide}
//           className="swiper-button-prev bg-transparent text-black"
//         >
//           <img src="/assets/images/icons/arrow-left.svg" alt="Previous" />
//         </button>
//         <button onClick={nexSlide} className="swiper-button-next bg-transparent text-black">
//           <img src="/assets/images/icons/arrow-right.svg" alt="Next" />
//         </button>
//       </div> */}
//       <Link
//         href="/listing?tab=package"
//         className="[text-decoration:none] mx-auto max-md:mb-[30px]"
//       >
//         <button className="sm:hidden rounded-full bg-pink px-12 py-2.5 text-center font-others-capitalised text-sm text-default-white mx-auto">
//           View all
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default PackagesSection;

