import type { NextPage } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/header';
import ImageGallery from '@/components/ImageGallery';
import { Navigation } from '@/components/navigation';
import TourismText from '@/components/TourismText';
import BestTimeVisit from '@/components/BestTimeVisit';
import HighLightSection from '@/components/HighLightSection';
import SpecialPackages from '@/components/special-packages';
import PackagesSection from '@/components/packages-section';
import Location from '@/components/location';
import PageHero from '@/components/page-hero';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import DiscoverCard from '@/components/discoverCard';
import { Key } from 'react';
import Property1pack2 from '@/components/property1pack2';

type CategoryType = {
    data?: string;
};

const Category: NextPage<CategoryType> = ({ data }) => {
    const homeData = useSelector((state: any) => state.homePage.data)
    return (
        <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
            <Header />
            <PageHero
                heroTitle="Categories"
                heroSubtitle=""
                variantLabel=""
                heroBg='url("/assets/images/pages/hero/page-hero.jpg")'
            />
            <Navigation breadcrumb={true} breadcrumbTitle="Categories" />
            <div className="container mt-5 w-auto mx-auto pb-20 px-4">
                <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-[24px]">
                    {homeData?.category && homeData?.category.map((category: {
                        min_price: any;
                        category_name: string | undefined;
                        id: any;
                        title: string | undefined; imageURL: any;
                    }, index: Key | null | undefined) => (
                        <div key={index}>
                            <Link
                                href={`/listing?type=package&category_name=${category?.category_name}`}
                                className='no-underline'>
                                <Property1pack2
                                    frame95={category.imageURL}
                                    property1pack2Position="unset"
                                    property1pack2ZIndex="0"
                                    packageName={category.category_name}
                                    price={`From ₹ ${category.min_price} pp`}
                                    isPackage={true}
                                    isAllListing={false}
                                    lgClass="md:w-full lg:w-full"
                                    categoryProp ={false}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};
export default Category;
