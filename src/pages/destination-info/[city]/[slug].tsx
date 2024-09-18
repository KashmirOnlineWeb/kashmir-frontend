import type { NextPage } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/header';
import SectionTitle from '@/components/section-title';
import { ScrollBar } from '@/components/scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import DestinationThingstodo from '@/components/destination-things-to-do';
import { useEffect, useLayoutEffect, useState } from 'react';
import router, { useRouter } from 'next/router';
import DestinationSectionTitle from '@/components/destination-section-title';
import DiscoverDataMain from '@/components/discoverdataMain';
import { ThingstodoMetaTags } from '@/types/metatags.type';
import { getAllCityThingstodo } from '@/services/thingstodo';
import { CityThingstodo } from '@/redux/slices';

type ThingstodoProps = {
    metaTags: ThingstodoMetaTags;
};

const Thingstodo: NextPage<ThingstodoProps> = () => {
    const discoverData = useSelector((state: any) => state.discoverPage.data);
    const [thingsSlugState, setThingsSlugState] = useState()
    const router = useRouter()
    const { city } = router.query
    const dispatch = useDispatch()
    useEffect(() => {
        const FetchData = async () => {
            const data = await getAllCityThingstodo(city)
            setThingsSlugState(data?.thingstodo[0]?.slug)
            dispatch(CityThingstodo(data?.thingstodo))
        }
        FetchData()
    }, [dispatch, city])
    return (
        <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
            <Header />
            {/* <ScrollBar city={city} /> */}
            <div className="container mx-auto my-[60px] px-4">
                <DestinationSectionTitle
                    topTitle="Things To Do"
                    viewAllDisable={false}
                // topSubTitle="A Spiritual Journey: Exploring the Enchancing Religous Places of Kashmir"
                />
                <DestinationThingstodo titleName={``} />
            </div>
            <DiscoverDataMain titleName={`Important information`} slug={thingsSlugState} />
            <Footer />
        </div >
    );
};
export default Thingstodo;

// function setShowLoader(arg0: boolean) {
//     throw new Error('Function not implemented.');
// }
