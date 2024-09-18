import type { GetServerSideProps, NextPage } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/header';
import ImageGallery from '@/components/ImageGallery';
import { Navigation } from '@/components/navigation';
import { useRouter } from 'next/router';
import GolfingCard from '@/components/golfing-card';
import IteneryExpanded from '@/components/itenery-expanded';
import FAQsSection from '@/components/faq';
import { useQuery } from '@tanstack/react-query';
import { HotelServices } from '@/services/hotelFilter';
import { useEffect, useState } from 'react';
import { getSingleHotel } from '@/services/hotel';
import HotelRooms from '@/components/hotelRooms';
import NewNavigation from '@/components/newNavigation';

const Hotel: NextPage = () => {
    const router = useRouter();
    const [hotelApiData, setHotelApiData] = useState<any | null>([])
    const [parseAmenityData, setParseAmenityData] = useState()
    const lastSegment = router.query.hotelSlug; // Access dynamic route parameter
    const hotelNavigation = [
        { name: "Overview", routeId: "overview" },
        { name: "Amenities", routeId: "amenities" },
        { name: "Rooms", routeId: "rooms" },
        { name: "Policies", routeId: "policies" },
        { name: "Nearby places", routeId: "nearbyplaces" },
    ]
    // const { data, isLoading } = useQuery({
    //     queryKey: ["hotelDetails"],
    //     queryFn: async () => {
    //         if (router.query.hotelSlug) {
    //             return await HotelServices.HotelDetails({
    //                 slug: router.query.hotelSlug as string,
    //             });
    //         }
    //     },

    useEffect(() => {
        if (hotelApiData) {
            if (hotelApiData?.amenities_content != undefined && hotelApiData?.amenities_content.length > 0) {
                setParseAmenityData(JSON.parse(
                    hotelApiData?.amenities_content as unknown as string
                ))
            }
        }
    }, [hotelApiData])

    useEffect(() => {
        const fetchData = async () => {
            const packageData = await getSingleHotel(lastSegment)
            setHotelApiData(packageData?.data?.data)
        }
        fetchData()
    }, [lastSegment])

    return (
        <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
            <Header />
            <ImageGallery />
            <NewNavigation navigationBarOptions={hotelNavigation} />
            <GolfingCard trueProp={false}
                tourismText={hotelApiData?.hotel_name}
                content={hotelApiData?.content}
                star={`${hotelApiData?.star} star`}
                location={hotelApiData?.location}
                highlights={hotelApiData?.highlight_editor}
                isHotel={true}
                slug={hotelApiData?.slug}
                pageTitle="hotel"
                hotelpolicy={true}
                amenity={parseAmenityData}
            />
            {/* <div className="container mx-auto">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] mb-20">
                    <div className="flex flex-row items-center justify-start pt-[40px]">
                        <b className="relative leading-[28px] text-gray-100">Itenery</b>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-[16.88px] font-arial">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                            <FAQsSection column="items-start" textLg="text-lg" truePros={true} faqsubtitle="Day 1" faqTitle='Arrival in Chandigarh & Transfer to Shimla'
                                message="If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
                            />
                        </div>
                    </div>
                </div>
            </div> */}
            <Footer />
        </div>
    );
};


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { hotelSlug } = context.query;
    const hoteldata = await getSingleHotel(hotelSlug)
    const data = hoteldata?.data?.data;
    const metaTags = {
        metaDescription: data?.meta_description || "",
        keywords: data?.keywords || "",
        title: data?.title_tag || "",
    };

    return {
        props: {
            metaTags,
        },
    };
};
export default Hotel;
