import type { NextPage } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/header';
import { Navigation } from '@/components/navigation';
import PageHero from '@/components/page-hero';
import DiscoverCard from '@/components/discoverCard';
import { useSelector } from 'react-redux';
import { Key } from 'react';
import Link from 'next/link';

const ReligiousPlaces: NextPage = () => {
    return (
        <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
            <Header />
            <PageHero
                heroTitle="Religious Places"
                heroSubtitle="Caption for Religious Places"
                variantLabel=""
                heroBg='url("/assets/images/pages/hero/page-hero.jpg")'
            />
            <Navigation breadcrumb={true} breadcrumbTitle="Religious Places Jammu & Kashmir" />
            <div className="container w-auto mx-auto pb-20 px-4">
                <div className="self-stretch w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-[24px]">
                    <Link href="/destination/amarnath" className='[text-decoration:none]'>
                        <DiscoverCard
                            propBackgroundImage={`url("/assets/images/religiousPlaces/rp.jpg")`}
                            touristSpotName='Amarnath'
                        />
                    </Link>
                    <Link href="/destination/vaishno-devi" className='[text-decoration:none]'>
                        <DiscoverCard
                            propBackgroundImage={`url("/assets/images/religiousPlaces/Katra.jpg")`}
                            touristSpotName='Vaishno Devi'
                        />
                    </Link>
                    <Link href="/destination/islamic-sites" className='[text-decoration:none]'>
                        <DiscoverCard
                            propBackgroundImage={`url("/assets/images/religiousPlaces/islamic.jpg")`}
                            touristSpotName='Islamic Sites'
                        />
                    </Link>

                </div>

            </div>
            <Footer />
        </div>
    );
};
export default ReligiousPlaces;
