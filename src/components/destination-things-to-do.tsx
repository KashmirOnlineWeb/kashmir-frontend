/* eslint-disable @next/next/no-img-element */
import 'swiper/css';
import 'swiper/css/navigation';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect, Key } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Property1pack3 from './property1pack3';
import SectionTitle from './section-title';
import { useDispatch, useSelector } from 'react-redux';
import PageWithLoaders from './loader';
import { getAllCityThingstodo } from '@/services/thingstodo';
import { CityThingstodo } from '@/redux/slices';
import Link from 'next/link';
import DiscoverCard from './discoverCard';

type DestinationThingstodoType = {
    color?: string;
    topSubTitle?: string;
    titleName?: string;
};

const DestinationThingstodo: NextPage<DestinationThingstodoType> = ({ color, topSubTitle, titleName }) => {
    const propLoaderValue = 4
    const router = useRouter()
    const [swiper, setSwiper] = useState<any>(null);
    const ThingstodoCityData = useSelector((state: any) => state.citythingstodo.data)
    const [showLoader, setShowLoader] = useState(true)
    // Check if router.asPath is defined before splitting
    const currentURL = router.asPath || ''; // Initialize it as an empty string if undefined
    const segments = currentURL.split('/'); // Split the URL by '/'
    const lastSegment = segments[segments.length - 1];
    const dispatch = useDispatch()
    useEffect(() => {
        const FetchData = async () => {
            const data = await getAllCityThingstodo(lastSegment)
            dispatch(CityThingstodo(data?.thingstodo))
            setShowLoader(false)
        }
        FetchData()
    }, [dispatch, lastSegment])

    return (
        <div className={`${color} relative box-border flex w-full flex-col items-start  justify-start gap-[24px] text-left font-others-capitalised text-9xl text-black px-4`}>
            <div className="container mx-auto">
                <SectionTitle
                    topTitle={titleName}
                    topSubTitle={topSubTitle}
                />
                <div className="container w-auto mx-auto pb-20 px-4">
                    <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-[24px]">
                        {showLoader ?
                            <PageWithLoaders prop={propLoaderValue} />
                            :
                            ThingstodoCityData && ThingstodoCityData.map((data: {
                                slug: any;
                                id: any;
                                title: string | undefined; imageURL: any;
                            }, index: Key | null | undefined) => (
                                <div key={index}>
                                    <Link href={`/thingstodo/${data?.slug}`} className='no-underline'>
                                        <DiscoverCard
                                            propBackgroundImage={`url(${data.imageURL})`}
                                            touristSpotName={data.title}
                                        />
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div >
    );
};
export default DestinationThingstodo;