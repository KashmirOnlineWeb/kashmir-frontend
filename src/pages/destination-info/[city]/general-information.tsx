import type { GetServerSideProps, NextPage } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/header';
import SectionTitle from '@/components/section-title';
import Description from '@/components/description';
import { ScrollBar } from '@/components/scrollbar';
import BackgroundDescription from '@/components/background-description';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DestinationResponse } from '@/types/destination.type';
import { DiscoverApi } from '@/services/discoverService';
import { getDiscoverData } from '@/redux/slices';
import DestinationSectionTitle from '@/components/destination-section-title';
import PageWithLoaders from '@/components/loader';
import DiscoverDataMain from '@/components/discoverdataMain';
import { GeneralInformationMetaTags } from '@/types/metatags.type';
import BackgroundPage from '@/components/background-page';

type GeneralInformationProps = {
    metaTags: GeneralInformationMetaTags;
};

const GeneralInformation: NextPage<GeneralInformationProps> = () => {
    const propLoaderValue = 1
    const discoverPage = useSelector((state: any) => state.discoverPage.data)
    const router = useRouter();
    const { city } = router.query;
    const dispatch = useDispatch();
    const [showLoader, setShowLoader] = useState(true)
    const [discoverData, setDiscoverData] = useState<DestinationResponse | null>(null);

    // Function to remove <br> tags from the content
    const removeTags = (content: string) => {
        let updatedContent = content?.replace(/<br\s*[/]?>/gi, '\n');
        return updatedContent;
    };

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
        <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
            <Header />
            {/* <ScrollBar city={city} /> */}
            <div className="container mx-auto my-[60px] px-4">
                <DestinationSectionTitle
                    topTitle="General Information"
                    viewAllDisable={false}
                    topSubTitle={discoverData?.generalinformation?.map((data: any) => data?.title)}
                />
                {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
                    <>
                        {discoverData?.generalinformation?.map((data: any, index: any) => (
                            <div key={index}>
                                <BackgroundPage
                                    title={data?.name}
                                    subtitle=""
                                    content={data?.repeater_mergeAll}
                                    imageSrc="/assets/images/package/package.webp"
                                />
                            </div>
                        ))}
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
    const data = DiscoverApiRes?.data.generalinformation;

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
export default GeneralInformation;