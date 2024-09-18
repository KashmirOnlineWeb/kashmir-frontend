import type { NextPage } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/header';
import { Navigation } from '@/components/navigation';
import PageHero from '@/components/page-hero';
import DiscoverCard from '@/components/discoverCard';
import { useSelector } from 'react-redux';
import { Key, useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Property1pack2 from '@/components/property1pack2';
import { getUserAllWhishlists } from '@/services/whishlist.service';
import router from 'next/router';
import PageWithLoaders from '@/components/loader';

const Wishlist: NextPage = () => {
    const propLoaderValue = 3
    const [showLoader, setShowLoader] = useState(true)
    const [getLocalstorageData, setGetLocalstorageData] = useState<any | null>()
    const [wishlistData, setWishlistData] = useState<any>()
    const [filterData, setFilterData] = useState([])
    
    useEffect(() => {
        let data = localStorage.getItem("userSignInData")
        if (data) {
            setGetLocalstorageData(JSON.parse(data))
        }
    }, [])

    const userId = getLocalstorageData?.user?._id

    useEffect(() => {
        const fetchData = async () => {
            if (userId) {
                try {
                    const response = await getUserAllWhishlists(userId);
                    setWishlistData(response);
                    setFilterData(response);
                    setShowLoader(false)
                } catch (error) {
                    console.error('Error fetching wishlist data:', error);
                }
            }
        };
        fetchData();
    }, [userId]);

    const allData = () => {
        setFilterData(wishlistData)
    }

    const handleClick = (value: any) => {
        if (value != undefined) {
            let PackData = wishlistData?.filter((pack: { item_type: any; }) => pack?.item_type == value)
            setFilterData(PackData)
        }
        else {
            alert("No wishlist Added")
        }
    }

    return (
        <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
            <Header />
            <PageHero
                heroTitle="Wishlist"
                heroSubtitle="Caption for Wishlist / stories here"
                variantLabel=""
                heroBg='url("/assets/images/pages/hero/page-hero.jpg")'
            />

            <div className="bg-default-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] sm:h-[72px] h-12 flex items-center overflow-hidden text-left text-sm text-black font-others-capitalised px-[24px] sm:px-4">
                <div className="container mx-auto">
                    <div className="flex flex-row items-end justify-start sm:gap-[46px] gap-2 text-xs sm:text-sm overflow-x-auto container">

                        <div
                            onClick={() => handleClick("Packages")}
                            className="cursor-pointer leading-[40px] font-semibold text-black"
                        >
                            <div className="relative leading-[40px] font-semibold z-[0] whitespace-nowrap">
                                Packages
                            </div>
                        </div>

                        <div
                            onClick={() => handleClick("hotel")}
                            className="cursor-pointer leading-[40px] font-semibold text-black"
                        >
                            <div className="relative leading-[40px] font-semibold z-[0] whitespace-nowrap">
                                Hotels
                            </div>
                        </div>

                        <div
                            onClick={allData}
                            className="cursor-pointer leading-[40px] font-semibold text-black"
                        >
                            <div className="relative leading-[40px] font-semibold z-[0] whitespace-nowrap">
                                All
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {showLoader ? (
                <PageWithLoaders prop={propLoaderValue} />
            ) : (
                <>
                    <div className="container mt-7 w-auto mx-auto pb-20 px-4 ">
                        <div className="self-stretch w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-[24px]">
                            {
                                filterData && filterData?.map((data: any, index: Key | null | undefined) => (
                                    <div key={index}>
                                        {data?.item?.package_name != undefined ?
                                            <Link href={`/package/${data?.item?.slug}`} className="no-underline">
                                                <Property1pack2
                                                    frame95={data?.item?.imageURL}
                                                    property1pack2Position="unset"
                                                    property1pack2ZIndex="0"
                                                    packageName={data?.item?.package_name || data?.item?.hotel_name}
                                                    totalDays={`${data?.item?.duration?.nights}N / ${data?.item?.duration?.days}D` || data?.item?.star}
                                                    location={data?.item?.destination || data?.item?.city}
                                                    amenities1="Sightseeing"
                                                    amenities2="Hotel"
                                                    amenities3="Transport"
                                                    pacakgeText={data?.item?.content}
                                                    price={`From ₹ ${data?.item?.price} pp`}
                                                    isPackage={true}
                                                    isAllListing={true}
                                                    lgClass="md:w-full lg:w-full"
                                                />
                                            </Link>
                                            :
                                            <Link href={`/hotel/${data?.item?.slug}`} className="no-underline">
                                                <Property1pack2
                                                    frame95={data?.item?.imageURL}
                                                    property1pack2Position="unset"
                                                    property1pack2ZIndex="0"
                                                    packageName={data?.item?.hotel_name}
                                                    star={data?.item?.star}
                                                    location={data?.item?.city}
                                                    amenities1={`${data?.item?.total_rooms} bedroom`}
                                                    amenities2="2 guest"
                                                    balcony={data?.item?.balcony}
                                                    breakfast={data?.item?.breakfast}
                                                    price={`₹ ${data?.item?.price} pp`}
                                                    tax={`+ ₹ ${Math.round(data?.item?.price * (data?.item?.tax / 100))} taxes`}
                                                    isAllListing={true}
                                                />
                                            </Link>
                                        }
                                    </div>
                                ))}
                        </div>
                    </div>
                </>
            )}
            <Footer />
        </div>
    );
};
export default Wishlist;
