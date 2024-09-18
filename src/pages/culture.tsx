import type { NextPage } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/header';
import { Navigation } from '@/components/navigation';
import PageHero from '@/components/page-hero';
import DiscoverCard from '@/components/discoverCard';
import { useSelector } from 'react-redux';
import { Key, useEffect, useState } from 'react';
import Link from 'next/link';
import { getCulture } from '@/services/culture';
import PageWithLoaders from '@/components/loader';

const Culture: NextPage = () => {
    const propLoaderValue = 3
    const [cultureState, setCultureState] = useState<any>()
    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const cultureData = await getCulture()
            setCultureState(cultureData?.data?.data)
            setShowLoader(false)
        }
        fetchData()
    }, [])

    return (
        <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
            <Header />
            <PageHero
                heroTitle="Cultures"
                heroSubtitle="Caption for culture / stories here"
                variantLabel=""
                heroBg='url("/assets/images/pages/hero/page-hero.jpg")'
            />
            <Navigation breadcrumb={true} breadcrumbTitle="Cultures Jammu & Kashmir" />
            <div className="container w-auto mx-auto pb-20 px-4">
                {showLoader ? (
                    <PageWithLoaders prop={propLoaderValue} />
                ) : (
                    <div className="self-stretch w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-[24px]">
                        {cultureState && cultureState?.map((data: any) => (
                            <div key={data.id}>
                                <Link href={`/culture/${data?.slug}`} className='[text-decoration:none]'>
                                    <DiscoverCard
                                        propBackgroundImage={`url(${data?.imageURL})`}
                                        touristSpotName={data?.culture_name}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};
export default Culture;
