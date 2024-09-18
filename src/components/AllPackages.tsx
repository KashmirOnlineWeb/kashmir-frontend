import type { NextPage } from 'next';
import ListingForm from './listing-form';
import { Pagination } from './pagination';
import Property1pack2 from './property1pack2';
import SideFilters from './side-filters';
import { useSelector } from 'react-redux';
import { Key } from 'react';
import Link from 'next/link';

type AllPackagestypes = {
    imageUrl?: string;
    name?: string;
    totalDays?: string;
    place?: string;
    amenities1?: string;
    amenities2?: string;
    amenities3?: string;
    description?: string;
    taxes?: string;
    amenities4?: string;
    price?: string;
    star?: string;
    isPackage?: boolean
    isHotel?: boolean
    lgClass?: string
};

const AllPackages: NextPage<AllPackagestypes> = ({ isPackage, lgClass }) => {
    const homeData = useSelector((state: any) => state.homePage.data)
    const packages = homeData?.package?.packages;
    return (
        <div className="bg-white px-4">
            <div className="container mx-auto">
                <div className="flex md:flex-row flex-col gap-8 lg:gap-14">
                    <div className="md:w-1/5 w-full sm:m-[12px] md:m-0">
                        <SideFilters />
                    </div>
                    <div className="md:w-4/5 w-full">
                        <div className="flex flex-row items-center justify-start md:py-[40px] text-black">
                            <div className="relative font-medium">Showing {packages?.length || 0} results</div>
                        </div>
                        <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 flex-wrap items-start pb-[25px] gap-4">
                            {
                                packages && packages.map((data: any, index: Key | null | undefined) => (

                                    <div key={index}>
                                        <Link href={`/package/${data?.slug}`} className="no-underline">
                                            <Property1pack2
                                                frame95={data?.imageURL}
                                                property1pack2Position="unset"
                                                property1pack2ZIndex="0"
                                                packageName={data?.package_name}
                                                totalDays={`${data?.duration?.nights}N / ${data.duration.days}D`}
                                                location={data?.destination}
                                                amenities1="Sightseeing"
                                                amenities2="Hotel"
                                                amenities3="Transport"
                                                pacakgeText={data?.content}
                                                price={`From ₹ ${data?.price} pp`}
                                                isPackage={isPackage}
                                                isAllListing={true}
                                                lgClass={lgClass}
                                            />
                                        </Link>
                                    </div>
                                ))}
                        </div>
                        <div className="hidden md:block w-[90%] lg:w-full">
                            <ListingForm />
                        </div>
                        <div className="mt-[40px] border border-solid border-smokegrey" />
                        <div className="pb-[50px] sm:px-4">
                            <Pagination pageCount={0} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPackages;