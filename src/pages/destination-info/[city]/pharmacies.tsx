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
import { PharmacyMetaTags } from '@/types/metatags.type';

type Pharmaciestypes = {
    isPackage?: boolean
    isHotel?: boolean
    lgClass?: string
    metaTags: PharmacyMetaTags
};

const Pharmacies: NextPage<Pharmaciestypes> = ({ isPackage, lgClass, isHotel }) => {
    const propLoaderValue = 2
    const discoverPage = useSelector((state: any) => state.discoverPage.data)
    const router = useRouter();
    const { city } = router.query;
    const dispatch = useDispatch();
    const [showLoader, setShowLoader] = useState(true)
    const [pharmaciesContent, setPharmaciesContent] = useState<any | null>();
    const [discoverData, setDiscoverData] = useState<DestinationResponse | null>(null);

    useEffect(() => {
        const FetchData = async () => {
            if (discoverPage?.length == 0) {
                const discoverResponse = await DiscoverApi('pharmacy/'+ city)
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
        // Assuming discoverData?.pharmacies is an array of stringified JSON objects
        if (discoverData?.pharmacies) {
            const parsedPharmacies = discoverData?.pharmacies?.map((data: any) => (data?.pharmacies_content));
            setPharmaciesContent(parsedPharmacies[0]);
        }
    }, [discoverData]);

    return (
        <div className="w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
            <Header />
            {/* <ScrollBar city={city} /> */}
            <div className="container mx-auto my-[60px] px-4">
                <DestinationSectionTitle
                    topTitle="Pharmacies"
                    viewAllDisable={false}
                    topSubTitle={discoverData?.other_data?.title}
                />
            </div>
            {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
                <>
                    <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
                        <div className="container w-auto mx-auto pb-20 px-4">
                            <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-[24px]">
                                {discoverData?.pharmacies?.map((data: any, index: any) => (
                                    <div key={data?.id || index}>
                                        <Restourants1pack1
                                            // frame95={data?.repeater_image}
                                            property1pack2Position="unset"
                                            property1pack2ZIndex="0"
                                            restourantName={data?.name}
                                            location={data?.google_map}
                                            // cityName="Anantnag"
                                            address={data?.location}
                                            workinghours={data?.working_hours}
                                            contact={data?.contact}
                                            lgClass={lgClass}
                                            pharmaProp={true}
                                            restaurantProp={true}
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
    const DiscoverApiRes = await DiscoverApi('pharmacy/'+city);
    const data = DiscoverApiRes?.data;

    const metaTags = {
        metaDescription: data?.other_data?.meta_description || "",
        keywords: data?.other_data?.meta_keywords || "",
        title: data?.other_data?.meta_title || `${city.charAt(0).toUpperCase() + city.slice(1)} Pharmacies`,
    };

    return {
        props: {
            metaTags,
        },
    };
};
export default Pharmacies;

