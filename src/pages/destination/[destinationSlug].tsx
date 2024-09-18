import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Header from '@/components/header';
import ImageGallery from '@/components/ImageGallery';
import { Navigation } from '@/components/navigation';
import TourismText from '@/components/TourismText';
import BestTimeVisit from '@/components/BestTimeVisit';
import HighLightSection from '@/components/HighLightSection';
import SpecialPackages from '@/components/special-packages';
import ThingstodoCard from '@/components/ThingstodoCard';
import PackagesSection from '@/components/packages-section';
import Location from '@/components/location';
import { useDispatch, useSelector } from 'react-redux';
import { Key, useEffect } from 'react';
import { getSingleCity } from '@/services/city';
import { singleCity } from '@/redux/slices';
import { useState } from 'react';
import PageWithLoaders from '@/components/loader';
import { DiscoverApi } from "@/services/discoverService"
import { getDiscoverData } from '@/redux/slices';
import DiscoverDataMain from '@/components/discoverdataMain';
import { City, CityBestTimeToVisit } from '@/types/city.type';
import { CityMetaTags } from '@/types/metatags.type';
import { json } from 'stream/consumers';

type DestinationProps = {
  metaTags: CityMetaTags;
};

const Destination: NextPage<DestinationProps> = () => {
  const router = useRouter()
  const propLoaderValue = 2
  const citySingle = useSelector((state: any) => state.citysingle.data);
  const [singleCityData, setSingleCityData] = useState<City | null | any>(null);
  const [showLoader, setShowLoader] = useState(true)
  const [parseSingleCityBestTimeToVisit, setParseSingleCityBestTimeToVisit] = useState<CityBestTimeToVisit[] | null>(null);
  const [parseGalleryText, setParseGalleryText] = useState([])
  const [destination, setDestination] = useState({});
  // Check if router.asPath is defined before splitting
  const lastSegment = router.query.destinationSlug; // Access dynamic route parameter
  const dispatch = useDispatch()
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true); // Set to true after component mounts
    const FetchData = async () => {
      if (lastSegment) {
        const data = await getSingleCity(lastSegment);
        //console.log(data)
        //dispatch(singleCity(data));
        setDestination(data);
        setShowLoader(false);
        //const discoverResponse = await DiscoverApi(lastSegment)
        //dispatch(getDiscoverData(discoverResponse?.data))

      }
    };
    FetchData();
  }, [dispatch, lastSegment]);

  // useEffect(() => {
  //   setIsClient(true);
  //   if (citySingle) {
  //     setSingleCityData(citySingle);
  //     if (citySingle?.city_content) {
  //       try {
  //         setParseSingleCityBestTimeToVisit(JSON.parse(citySingle?.city_content));
  //       }
  //       catch (err) { [] }
  //       setShowLoader(false);
  //     }
  //   }
  // }, [citySingle]);

  // useEffect(() => {
  //   setIsClient(true);
  //   if (singleCityData?.repeater_citytext) {
  //     if (singleCityData?.repeater_citytext != undefined && singleCityData?.repeater_citytext.length > 0) {
  //       setParseGalleryText(JSON.parse(singleCityData?.repeater_citytext))
  //     }
  //     else {
  //       setParseGalleryText([])
  //     }
  //   }
  //   else {
  //     setParseGalleryText([])
  //   }
  // }, [singleCityData])

  return (
    <div className="w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white  sm:px-4 lg:px-0">
      <Header />
      <ImageGallery images={destination.image_gallery || []} />
      {destination && <Navigation trueProp={true} />}
      {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
        <>
          <div id="overview" className="container mx-auto px-4">
            {destination && <TourismText tourismText={destination?.name} content={destination?.description} />}

          </div>
          {/* <BestTimeVisit containerClass="container" /> */}
          <div className={`container mx-auto pt-10 px-4`}>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-lg text-black font-others-capitalised">
              {parseSingleCityBestTimeToVisit && parseSingleCityBestTimeToVisit.length > 0 &&
                <div className="flex flex-row items-center justify-center">
                  <b className="relative leading-[24px] text-[#E74433] text-[18px] font-bold">Best Time to Visit</b>
                </div>}
              <div id='best-time-to-visit' className="self-stretch container overflow-x-auto flex lg:flex-row flex-col items-start justify-start gap-[8px] text-base">
                {parseSingleCityBestTimeToVisit &&
                  parseSingleCityBestTimeToVisit?.map((cityContent: any, index: Key | null | undefined) => (
                    <BestTimeVisit key={index}
                      timePeriods={cityContent?.time_period}
                      sub_title={cityContent?.sub_title}
                      title={cityContent?.title}
                      add_more_things={cityContent?.add_more_things}
                      vectorImageUrl="/assets/images/icons/sun.svg"
                      vectorLabel="/assets/images/icons/vector1.svg"
                      customStyle={"sm:w-[367.67px] w-full"}
                    />
                  ))}

              </div>
            </div>
          </div>
          {destination && destination?.highlights_content != undefined && destination?.highlights_content != "" ?
            <div className='container mx-auto px-4'>
              <HighLightSection highlights={destination?.highlights_content} />
            </div>
            :
            <></>
          }
          {destination && <div id="Importantinformation">
            <DiscoverDataMain titleName={`Important information`} slug={destination?.slug} />
          </div>}
          {/* {singleCityData && <PlacesToVisit titleName={`Places to visit in ${singleCityData?.city_name}`} />} */}
          {/* <SpecialPackages color="bg-white" titleName="Things to do in pahalgam" /> */}
          {/* {singleCityData && <div id='thingstodo'>
            <ThingstodoCard titleName={`Things to do in ${singleCityData?.city_name}`} />
          </div>} */}
          <PackagesSection isPackage={true} lgClass="md:w-full lg:w-full" titlePackage="Packages curated just for you" trueProp={false} />
          {/* <Location /> */}
        </>
      }
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { destinationSlug } = context.query;
  const citydata = await getSingleCity(destinationSlug);
  const data = citydata;

  const metaTags = {
    metaDescription: data?.meta?.meta_description || "",
    keywords: data?.meta?.meta_keywords || "",
    title: data?.meta?.meta_title || "",
  };

  return {
    props: {
      metaTags,
    },
  };
};

export default Destination;
