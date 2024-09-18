import type { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/header';
import { useSelector, useDispatch } from 'react-redux';
import BackgroundPage from '@/components/background-page';
import DestinationSectionTitle from '@/components/destination-section-title';
import { useRouter } from 'next/router';
import PageWithLoaders from '@/components/loader';
import DiscoverDataMain from '@/components/discoverdataMain';
import { BackgroundMetaTags } from '@/types/metatags.type';
import { getSingleCulture } from '@/services/culture';

type BackgroundHistoryProps = {
    metaTags: BackgroundMetaTags;
};


const BackgroundHistory: NextPage<BackgroundHistoryProps> = () => {
    const propLoaderValue = 1
    const router = useRouter();
    const lastSegment = router.query.slug
    const { city } = router.query;
    const [showLoader, setShowLoader] = useState(true)
    const [cultureState, setCultureState] = useState<any>([])

    useEffect(() => {
        const fetchData = async () => {
            const cultureData = await getSingleCulture(lastSegment)
            setCultureState(cultureData?.data?.data)
            setShowLoader(false)
        }
        fetchData()
    }, [lastSegment])

    return (
        <div className="w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
            <Header />
            {/* <ScrollBar city={city} /> */}
            <div className="container mx-auto my-[60px] px-4 ">
                <DestinationSectionTitle
                    topTitle="Culture"
                    viewAllDisable={false}
                    topSubTitle={cultureState?.sub_title}
                />
                {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
                    <>
                        <BackgroundPage
                            title=""
                            subtitle=""
                            content={cultureState?.repeater_mergeAll}
                            imageSrc="/assets/images/package/package.webp"
                        />
                    </>
                }
            </div>
            <Footer />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { slug } = context.query;
    const CultureApiRes = await getSingleCulture(slug);
    const data = CultureApiRes?.data?.data;

    const metaTags = {
        metaDescription: data?.meta_description || "",
        keywords: data?.keywords || "",
        title: data?.title || "",
    };

    return {
        props: {
            metaTags,
        },
    };
};

export default BackgroundHistory;