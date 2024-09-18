import type { GetServerSideProps, NextPage } from 'next';
import Restourants1pack1 from '@/components/restourants1pack1';
import { useDispatch, useSelector } from 'react-redux';
import Header from '@/components/header';
import { ScrollBar } from '@/components/scrollbar';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DestinationResponse } from '@/types/destination.type';
import { DiscoverApi } from '@/services/discoverService';
import { getDiscoverData } from '@/redux/slices';
import DestinationSectionTitle from '@/components/destination-section-title';
import PageWithLoaders from '@/components/loader';
import Footer from '@/components/Footer';
import DiscoverDataMain from '@/components/discoverdataMain';
import { SchoolsAndCollagesMetaTags } from '@/types/metatags.type';

type SchoolsAndCollagesstypes = {
    isPackage?: boolean
    isHotel?: boolean
    lgClass?: string
    metaTags: SchoolsAndCollagesMetaTags;
};

const SchoolsAndCollages: NextPage<SchoolsAndCollagesstypes> = ({ isPackage, lgClass, isHotel }) => {
    const discoverPage = useSelector((state: any) => state.discoverPage.data)
    const propLoaderValue = 2
    const router = useRouter();
    const { city } = router.query;
    const dispatch = useDispatch();
    const [showLoader, setShowLoader] = useState(true)
    const [discoverData, setDiscoverData] = useState<DestinationResponse | null | any>(null);
    const [collagesAndSchoolsParsedState, setCollagesAndSchoolsParsedState] = useState([])

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

    useEffect(() => {
        if (discoverData?.collagesandschools !== undefined && discoverData?.collagesandschools.length > 0) {
            const parsedCollagesContent = discoverData?.collagesandschools?.[0]?.collage_repeater?.map((data: any) => JSON.parse(data));
            setCollagesAndSchoolsParsedState(parsedCollagesContent[0]);
        }
    }, [discoverData]);

    return (
        <div className="w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
            <Header />
            {/* <ScrollBar city={city} /> */}
            <div className="container mx-auto my-[60px] px-4">
                <DestinationSectionTitle
                    topTitle="Colleges and School"
                    viewAllDisable={false}
                    topSubTitle={discoverData?.collagesandschools?.map(((val: any) => val?.sub_title))}
                />
            </div>
            <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
                <div className="container w-auto mx-auto pb-20 px-4">
                    {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
                        <>
                            <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-[24px]">
                                {collagesAndSchoolsParsedState && collagesAndSchoolsParsedState?.map((data: any, index: any) => (
                                    <div key={data.id || index}>
                                        <Restourants1pack1
                                            // frame95={data?.repeater_image}
                                            property1pack2Position="unset"
                                            property1pack2ZIndex="0"
                                            restourantName={data?.name}
                                            // cityName="Anantnag"
                                            amenities1="Sightseeing"
                                            amenities2="Hotel"
                                            amenities3="Transport"
                                            address={data?.address}
                                            websiteUrl={data?.website_url}
                                            board={data?.board}
                                            pacakgeText={data?.description}
                                            lgClass={lgClass}
                                            restaurantProp={true}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    }
                </div>
            </div>
            <DiscoverDataMain titleName={`Important information`} slug={city} />
            <Footer />
        </div>
    );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { city } = context.query;
    const DiscoverApiRes = await DiscoverApi(city);
    const data = DiscoverApiRes?.data?.collagesandschools;

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
export default SchoolsAndCollages;

