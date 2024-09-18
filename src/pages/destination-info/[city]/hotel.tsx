import type { GetServerSideProps, NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import Header from '@/components/header';
import { ScrollBar } from '@/components/scrollbar';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DestinationResponse } from '@/types/destination.type';
import { DiscoverApi } from '@/services/discoverService';
import { getDiscoverData } from '@/redux/slices';
import Hotel1pack1 from '@/components/destination1hotelpack1';
import DestinationSectionTitle from '@/components/destination-section-title';
import PageWithLoaders from '@/components/loader';
import Footer from '@/components/Footer';
import DiscoverDataMain from '@/components/discoverdataMain';
import { HotelMetaTags } from '@/types/metatags.type';

type Hoteltypes = {
    isPackage?: boolean
    isHotel?: boolean
    lgClass?: string
    metaTags: HotelMetaTags;
};

const Hotel: NextPage<Hoteltypes> = ({ isPackage, lgClass, isHotel }) => {
    const propLoaderValue = 2
    const discoverPage = useSelector((state: any) => state.discoverPage.data)
    const router = useRouter();
    const { city } = router.query;
    const dispatch = useDispatch();
    const [showLoader, setShowLoader] = useState(true)
    const [discoverData, setDiscoverData] = useState<DestinationResponse | null>(null);

    useEffect(() => {
        const FetchData = async () => {
            if (discoverPage?.length == 0) {
                const discoverResponse = await DiscoverApi(city)
                setDiscoverData(discoverResponse?.data);
                setShowLoader(false)
                dispatch(getDiscoverData(discoverResponse?.data))
            } else {
                setDiscoverData(discoverPage);
                setShowLoader(false)
            }
        };
        FetchData();
    }, [dispatch, city]);

    return (
        <div className="w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
            <Header />
            {/* <ScrollBar city={city} /> */}
            <div className="container mx-auto my-[60px] px-4">
                <DestinationSectionTitle
                    topTitle="Hotel"
                    viewAllDisable={false}
                    topSubTitle={discoverData?.hotel?.map((val => val?.sub_title))}
                // topSubTitle="A Spiritual Journey: Exploring the Enchancing Religous Places of Kashmir"
                />
            </div>
            {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
                <>
                    <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
                        <div className="container lg:mt-5 w-auto mx-auto pb-20 px-4">
                            <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-[24px]">
                                {discoverData?.hotel?.map((data: any, index: any) => (
                                    <div key={data.id || index}>
                                        <Hotel1pack1
                                            frame95={data?.imageURL}
                                            property1pack2Position="unset"
                                            property1pack2ZIndex="0"
                                            hotelName={data?.hotel_name}
                                            // cityName="Anantnag"
                                            amenities1="Sightseeing"
                                            amenities2="Hotel"
                                            amenities3="Transport"
                                            breakfast={data?.breakfast}
                                            address={data.address}
                                            contact={data?.contact}
                                            location={data?.location}
                                            star={data?.star}
                                            price={`₹ ${data.price} pp`}
                                            tax={`+ ₹ ${Math.round(data.price * (data.tax / 100))} taxes`}
                                            hotelText={data?.content}
                                            lgClass={lgClass}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            }
            <DiscoverDataMain titleName={`Important information`} slug={city} />
            <Footer />
        </div>
    );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { city } = context.query;
    const DiscoverApiRes = await DiscoverApi(city);
    const data = DiscoverApiRes?.data.hotel;

    const metaTags = {
        metaDescription: data[0]?.meta_description || "",
        keywords: data[0]?.keywords || "",
        title: data[0]?.title || "",
    };

    return {
        props: {
            metaTags,
        },
    };
};
export default Hotel;

