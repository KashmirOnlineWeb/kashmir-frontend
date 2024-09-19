import type { GetServerSideProps, NextPage } from 'next';
import Restourants1pack1 from './restourants1pack1';
import { ScrollBar } from '@/components/scrollbar';
import { useSelector, useDispatch } from 'react-redux';
import BackgroundDescription from '@/components/background-description';
import DestinationSectionTitle from '@/components/destination-section-title';
import { useRouter } from 'next/router';
import { DiscoverApi } from "@/services/discoverService"
import { getDiscoverData } from '@/redux/slices';
import { DestinationResponse } from '@/types/destination.type';
import { useEffect, useState } from 'react';
import PageWithLoaders from './loader';
import DiscoverDataMain from './discoverdataMain';
import RestourantCard from './restaurantCard';

type AllRestorentstypes = {
    isPackage?: boolean
    isHotel?: boolean
};

const removeBrTags = (content: string) => {
    const updatedContent = content?.replace(/<p\s*[/]?>/gi, '');
    let e = document.createElement('div');
    e.innerHTML = updatedContent;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue?.replace(/<br\s*[/]?>/gi, '\n');
    // return updatedContent;
};

const AllRestaurants: NextPage<AllRestorentstypes> = ({ isPackage, isHotel }) => {
    const discoverPage = useSelector((state: any) => state.discoverPage.data)
    const propLoaderValue = 2
    const router = useRouter();
    const { city } = router.query;
    const dispatch = useDispatch();
    const [showLoader, setShowLoader] = useState(true)
    const [discoverData, setDiscoverData] = useState<DestinationResponse | null>(null);
    const [parseRestaurantContent, setParseRestaurantContent] = useState<any>([])

    useEffect(() => {
        const FetchData = async () => {
            if (discoverPage?.length == 0) {
                const discoverResponse = await DiscoverApi('restaurant/' + city)
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

    // useEffect(() => {
    //     if (discoverData?.restourants) {
    //         const parsedRestaurantContent = discoverData?.restourants?.map((data: any) => (data?.restourant_content));
    //         const mapParsed = parsedRestaurantContent?.map((value: any) => {
    //             if (value.length > 0) {
    //                 return JSON.parse(value)
    //             }
    //         })
    //         setParseRestaurantContent(mapParsed[0]);
    //     }
    // }, [discoverData]);
    return (
        <>
            <div className=" w-full mt-5 overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
                <div className="container w-auto mx-auto pb-20 px-4">
                    {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
                        <>
                            <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-[24px]">
                                {discoverData?.restaurants?.map((item: any, index: any) => (
                                    <RestourantCard key={index}
                                        property1pack2Position="unset"
                                        property1pack2ZIndex="0"
                                        restourantName={item?.name}
                                        contact={item?.contact}
                                        location={item?.google_map}
                                        address={item?.address}
                                        websiteUrl={item?.website_url}
                                        pacakgeText={removeBrTags(item?.description	)}
                                        lgClass="md:w-full lg:w-full"
                                        restaurantProp={true}
                                    />
                                ))}
                            </div>
                        </>
                    }
                </div>
            </div>
            <DiscoverDataMain titleName={`Important information`} slug={city} />
        </>
    );
};
export default AllRestaurants;



