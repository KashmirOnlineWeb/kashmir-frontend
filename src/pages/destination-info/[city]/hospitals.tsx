import type { GetServerSideProps, NextPage } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/header';
import SectionTitle from '@/components/section-title';
import { ScrollBar } from '@/components/scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import HospitalDescription from '@/components/hospital-description';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DestinationResponse } from '@/types/destination.type';
import { getDiscoverData } from '@/redux/slices';
import { DiscoverApi } from '@/services/discoverService';
import DestinationSectionTitle from '@/components/destination-section-title';
import PageWithLoaders from '@/components/loader';
import DiscoverDataMain from '@/components/discoverdataMain';
import { HospitalMetaTags } from '@/types/metatags.type';
import HospitalCardComponent from '@/components/hospitalCardComponent';
type HospitalMetaTagsProps = {
    metaTags: HospitalMetaTags;
};

const Hospitals: NextPage<HospitalMetaTagsProps> = () => {
    const propLoaderValue = 2
    const discoverPage = useSelector((state: any) => state.discoverPage.data)
    const router = useRouter();
    const { city } = router.query;
    const dispatch = useDispatch();
    const [showLoader, setShowLoader] = useState(true)
    const [hospitalParseData, setHospitalParseData] = useState<any>()
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
    useEffect(() => {
        if (discoverData?.hospitals !== undefined) {
            const parsedHospitalContent = discoverData?.hospitals?.[0]?.hospital_content?.map((data: any) => JSON.parse(data));
            setHospitalParseData(parsedHospitalContent[0]);
        }
    }, [discoverData]);

    return (
        <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
            <Header />
            {/* <ScrollBar city={city} /> */}
            <div className="container mx-auto mt-[60px] sm:mb-[60px] max-sm:mb-[36px] px-4">
                <DestinationSectionTitle
                    topTitle="Hospitals"
                    viewAllDisable={false}
                    topSubTitle={discoverData?.hospitals?.map((val => val?.sub_title))}
                // topSubTitle="A Spiritual Journey: Exploring the Enchancing Religous Places of Kashmir"
                />
                {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
                    <>
                        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-[24px]">
                            {hospitalParseData?.map((data: any, index: any) => (
                                <div key={data?.id || index}>
                                    <HospitalCardComponent
                                        hospitalName={data?.name}
                                        address={data?.address}
                                        contact={data?.contact}
                                        content={data?.content}
                                        description={data?.description}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                }
            </div>
            <DiscoverDataMain titleName={`Important information`} slug={city} />
            <Footer />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { city } = context.query;
    const DiscoverApiRes = await DiscoverApi(city);
    const data = DiscoverApiRes?.data.hospitals;

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
export default Hospitals;