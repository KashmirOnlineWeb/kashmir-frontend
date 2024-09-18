import type { GetServerSideProps, NextPage } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/header';
import SectionTitle from '@/components/section-title';
import Description from '@/components/description';
import { ScrollBar } from '@/components/scrollbar';
import BackgroundDescription from '@/components/background-description';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SafetyInformationPack1 from '@/components/safetyin-formation-pack1';
import { useRouter } from 'next/router';
import { DestinationResponse } from '@/types/destination.type';
import { DiscoverApi } from '@/services/discoverService';
import { getDiscoverData } from '@/redux/slices';
import DestinationSectionTitle from '@/components/destination-section-title';
import PageWithLoaders from '@/components/loader';
import { setHours } from 'date-fns';
import DiscoverDataMain from '@/components/discoverdataMain';
import { SafetyInformationMetaTags } from '@/types/metatags.type';

type SafetyInformationProps = {
    metaTags: SafetyInformationMetaTags;
};
const SafetyInformation: NextPage<SafetyInformationProps> = () => {
    const propLoaderValue = 3
    const discoverPage = useSelector((state: any) => state.discoverPage.data)
    const [safetyContent, setSafetyContent] = useState<any | null>();
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

    useEffect(() => {
        // Assuming discoverData?.safetyinformation is an array of stringified JSON objects
        if (discoverData?.safetyinformation) {
            const parsedSafetyContent = discoverData?.safetyinformation?.map((data: any) => JSON.parse(data?.safety_content));
            setSafetyContent(parsedSafetyContent);
        }
    }, [discoverData]);

    console.log(discoverData?.safetyinformation, " discoverData?.safetyinformation")

    return (
        <div className="w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
            <Header />
            {/* <ScrollBar city={city} /> */}
            <div className=" w-full mt-5 overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
                <div className="container w-auto mx-auto pb-20 px-4">
                    <DestinationSectionTitle
                        topTitle="Safety Information"
                        viewAllDisable={false}
                        topSubTitle={discoverData?.safetyinformation?.map(((val: { title: any; }) => val?.title))}
                    />
                    {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
                        <>
                            {safetyContent?.map((data: any, index: any) => (
                                <div key={data.id || index} className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-[24px] mt-6 ">
                                    {data?.map((value: any, index: any) => (
                                        <div key={index}>
                                            <SafetyInformationPack1
                                                // frame95={discoverData?.safetyinformation?.map((image: any) => image?.imageURL)}
                                                property1pack2Position="unset"
                                                property1pack2ZIndex="0"
                                                restourantName={data.name}
                                                safety_number={value?.safety_number}
                                                safety_title={value?.safety_title}
                                                safety_content={safetyContent}
                                                pacakgeText={data.description}
                                            // lgClass={lgClass}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                            <div className="flex mt-[40px] w-full ">
                                {
                                    discoverData?.safetyinformation ? <div dangerouslySetInnerHTML={{ __html: discoverData?.safetyinformation?.map(((val: { content: any; }) => val?.content)) }} className={` relative text-black items-center text-base leading-[26px]`} />
                                        : ''
                                }
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
    const data = DiscoverApiRes?.data?.safetyinformation;

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
export default SafetyInformation;