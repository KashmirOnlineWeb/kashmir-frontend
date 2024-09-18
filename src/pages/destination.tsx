import type { NextPage } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/header';
import { Navigation } from '@/components/navigation';
import PageHero from '@/components/page-hero';
import DiscoverCard from '@/components/discoverCard';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, Key } from 'react';
import Link from 'next/link';
import { getAllCity } from '@/services/city';
import { City } from '../types/city.type';

const Destination: NextPage = () => {
  const homeData = useSelector((state: any) => state.homePage.data)
  const [cityData, setCityData] = useState<City[] | null>(null);

  useEffect(() => {
    const FetchData = async () => {
      if (!homeData?.city) {
        const cities = await getAllCity();
        setCityData(cities?.data?.data);
      } else {
        setCityData(homeData?.city);
      }
    };
    FetchData();
  }, [])

  return (
    <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
      <Header />
      <PageHero
        heroTitle="Destination"
        heroSubtitle="Caption for blog / stories here"
        variantLabel=""
        heroBg='url("/assets/images/pages/hero/page-hero.jpg")'
      />
      <Navigation breadcrumb={true} breadcrumbTitle="Discover Jammu & Kashmir" />
      <div className="container w-auto mx-auto pb-20 px-4">
        <div className="self-stretch w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-[24px]">
          {cityData && cityData?.map((data, index: Key | null | undefined) => (
            <div key={index}>
              <Link href={`/destination/${data?.slug}`} className='no-underline'>
                <DiscoverCard
                  propBackgroundImage={`url(${data.imageURL})`}
                  touristSpotName={data.city_name}
                />
              </Link>
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
};
export default Destination;
