import type { NextPage } from 'next';
import ListingForm from './listing-form';
import { Pagination } from './pagination';
import Link from 'next/link';
import Property1pack2 from './property1pack2';
import SideFilters from './side-filters';
import { useSelector } from 'react-redux';

type AllListing = {
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
};

const AllListingCard: NextPage<AllListing> = ({ }) => {
    const homeData = useSelector((state: any) => state.homePage.data)
    return (
        <div className="bg-white">
            <div className="container mx-auto">
                <div className="flex gap-14">
                    <div className="w-1/5">
                        <SideFilters />
                    </div>
                    <div className="w-4/5">
                        <div className="flex flex-row items-center justify-start py-[40px] text-black">
                            <div className="relative font-medium">Showing 40 results</div>
                        </div>
                        <div className="grid grid-cols-3 flex-wrap items-start pb-[25px] gap-4">
                            {
                                homeData?.category && homeData?.category.map((category: {
                                    id: any; category_name: any; min_price: any; imageURL: any;
                                }, index: any) => (
                                    <div key={index}>
                                        <Link href={`/listing/${category?.id}`} className="no-underline">
                                            <Property1pack2
                                                frame95={category.imageURL}
                                                property1pack2Position="unset"
                                                property1pack2ZIndex="0"
                                                packageName={category.category_name}
                                                price={`From ₹ ${category.min_price} pp`}
                                                isPackage={true}
                                                isAllListing={false}
                                                lgClass="md:w-full lg:w-full"
                                            />
                                        </Link>
                                    </div>
                                ))}
                        </div>
                        <ListingForm />
                        <div className="mt-[40px] border border-solid border-smokegrey" />
                        <div className="pb-[50px]">
                            <Pagination pageCount={0} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllListingCard;
