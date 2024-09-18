/* eslint-disable @next/next/no-img-element */
import type { GetServerSideProps, NextPage } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/header';
import { ScrollBar } from '@/components/scrollbar';
import AllRestaurants from '@/components/AllRestaurants';
import DestinationSectionTitle from '@/components/destination-section-title';
import DiscoverDataMain from '@/components/discoverdataMain';
import { useEffect, useState } from 'react';
import { DestinationResponse } from '@/types/destination.type';
import { DiscoverApi } from '@/services/discoverService';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscoverData } from '@/redux/slices';
import { RestaurantsMetaTags } from '@/types/metatags.type';

type restaurantProps = {
  metaTags: RestaurantsMetaTags;
};

const Package: NextPage<restaurantProps> = () => {
  const [discoverData, setDiscoverData] = useState<DestinationResponse | null | any>(null);
  const discoverPage = useSelector((state: any) => state.discoverPage.data)
  const router = useRouter();
  const { city } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    const FetchData = async () => {
      if (discoverPage?.length == 0) {
        const discoverResponse = await DiscoverApi(city)
        setDiscoverData(discoverResponse?.data);
        dispatch(getDiscoverData(discoverResponse?.data))
      } else {
        setDiscoverData(discoverPage);
      }
    };
    FetchData();
  }, [dispatch, city]);

  return (
    <>
      <div className="w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
        <Header />
        {/* <ScrollBar /> */}
        <div className="container mx-auto my-[60px] px-4">
          <DestinationSectionTitle
            topTitle="Restaurants"
            viewAllDisable={false}
            topSubTitle={discoverData?.restourants?.map(((val: {
              sub_title: any; title: any;
            }) => val?.sub_title))}
          />
        </div>
        <AllRestaurants />
        <Footer />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { city } = context.query;
  const DiscoverApiRes = await DiscoverApi(city);
  const data = DiscoverApiRes?.data?.restourants;
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

export default Package;
