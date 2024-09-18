import Description from '@/components/description';
import FAQsSection from '@/components/faq';
import Footer from '@/components/Footer';
import RecommendedHotels from '@/components/recommended-hotel';
import TopDestinations from '@/components/top-destination';
import { Key, useEffect } from 'react';
import AmazingHolidays from '../components/amazing-holidays';
import CuratedPackages from '../components/curated-packages';
import ExploreLatestStories from '../components/explore-latest-stories';
import Header from '../components/header';
import HeroSection from '../components/hero-section';
import PackagesSection from '../components/packages-section';
import PopularPackage from '../components/popular-package';
import SocialSection from '../components/social-section';
import SpecialPackages from '../components/special-packages';
import Testimonial from '../components/testimonial';
import { useDispatch, useSelector } from 'react-redux';
import ThingsTodo from '../components/things-todo';
import WhyKashmir from '@/components/why-kahmir';
import { useState } from 'react';
import { getHomeData } from '@/redux/slices';
import { HomeApi } from '@/services/homeService'
import PageWithLoaders from '@/components/loader';
import { wrapper } from '@/redux/store';
import { getsectionHideShow } from '@/services/sectionHideShoe'
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { getSeo } from '@/services/seo';
import { getCulture } from '@/services/culture';

const Index = () => {
  const propLoaderValue = 1
  const homeData = useSelector((state: any) => state.homePage.data);
  const [showLoader, setShowLoader] = useState(true)
  const [dataHideShowState, setDataHideShowState] = useState<any>([])
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setShowLoader(true);
        const response = await HomeApi()
        const cityData = response?.data?.city.sort((a: any, b: any) => a.order - b.order)
        dispatch(getHomeData(response.data));
        if (cityData) {
          localStorage.setItem('city', JSON.stringify(cityData));
        }
        const responsehideShow = await getsectionHideShow()
        setDataHideShowState(responsehideShow?.data?.data)

      } catch (error) {
        console.error("Error fetching home data", error);
      } finally {

      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const cultureData = await getCulture()
      const cultureRes = cultureData?.data?.data
      if (cultureRes) {
        localStorage.setItem("cultures", JSON.stringify(cultureRes))
      }
    }
    fetchData()
  }, [])

  function getDropdownValue(name: any) {
    if (dataHideShowState?.length) {
      for (const item of dataHideShowState) {
        if (item?.showHide_dropdown?.name === name) {
          return item?.showHide_dropdown?.dropdown_value;
        }
      }
    }
    return null;
  }

  return (
    <div className="w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
      <Header />
      <HeroSection />
      <PopularPackage />
      <div className={`${getDropdownValue("Packages") ? "" : "hidden"}`}><PackagesSection isPackage={true} lgClass="md:w-full lg:w-full" titlePackage="Most loved packages in Kashmir" trueProp={true} /></div>
      <div className={`${getDropdownValue("Top Destinations") ? "" : "hidden"}`}><TopDestinations /></div>
      <div className={`${getDropdownValue("Hotels") ? "" : "hidden"}`}>
        <RecommendedHotels />
      </div>
      <div className={`${getDropdownValue("Things to do") ? "" : "hidden"}`}> <ThingsTodo />
      </div>

      <div className={`${getDropdownValue("Special Packages") ? "" : "hidden"}`}><SpecialPackages color="bg-mediumblue-300" lgClass="md:w-full lg:w-full" topSubTitle="Discover Exquisite Jammu and Kashmir: With our tailor made packages and
        courses" titleName="Special packages" titlename2="when in kashmir" /></div>
      <div className={`${getDropdownValue("Hero Section") ? "" : "hidden"}`}>{
        !homeData?.herosection ? <PageWithLoaders prop={propLoaderValue} /> :
          homeData?.herosection && homeData?.herosection.map((data: {
            imageURL: string | undefined; title: string | undefined; sub_title: string | undefined; content: string | undefined;
          }, index: Key | null | undefined) => (
            <div key={index}>
              <Description
                title={data.title}
                subtitle={data.sub_title}
                content={data.content}
                imageSrc={data.imageURL}
              />
            </div>
          ))
      }</div>
      <div className={`${getDropdownValue("How it work") ? "" : "hidden"}`}><AmazingHolidays /></div>
      <div className={`${getDropdownValue("Faqs/Why kashmir online") ? "" : "hidden"}`}><div className="container mx-auto px-4">
        <div className="text-9xl text-gray-100 pt-[30px] pb-[15px] md:pt-[68px] md:pb-[40px]">
          <b className="relative font-bold leading-[31px] hoverUnderline color--wedge">{`FAQs `}</b>
        </div>
        <div id='faqs' className="flex justify-between flex-col lg:flex-row gap-[40px] md:gap-[100px]">
          <div className="faq w-full">
            <FAQsSection noPadding="pb-0" faqTitle="Whats included" message="If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked." />
          </div>
          <div className="right-section w-full sm:w-auto ">
            <WhyKashmir />
          </div>
        </div>
      </div>
      </div>
      <div className={`${getDropdownValue("Youtube Videos") ? "" : "hidden"}`}>
        <CuratedPackages videoSrc="https://www.youtube.com/embed/fsl8VlyUJ-I?si=_8Jna0qKrKsGF6HI" />
      </div>
      <ExploreLatestStories />
      <div className={`${getDropdownValue("Testimonials") ? "" : "hidden"}`}>
        <Testimonial bgColor="bg-[#B7B7B71A]" />
      </div>
      <SocialSection />
      <Footer />
    </div >
  );
};

// export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
//   const data = await HomeApi();
//   store.dispatch(getHomeData(data?.data));
//   return { props: {} };
// });

export const getServerSideProps: GetServerSideProps = async (context) => {
  const seoResponse = await getSeo();
  const data = seoResponse?.data?.data;
  const metaTags = {
    metaDescription: data[0]?.meta_description || "",
    keywords: data[0]?.keywords || "",
    title: data[0]?.title_tag || "",
  };

  return {
    props: {
      metaTags,
    },
  };
};

export default Index;
