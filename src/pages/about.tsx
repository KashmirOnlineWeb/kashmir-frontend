import type { NextPage } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/header';
import { useSelector, useDispatch } from 'react-redux';
import DestinationSectionTitle from '@/components/destination-section-title';
import AboutPage from '@/components/about-page';
import { getAbout } from '../services/about'
import { useEffect, useState } from 'react';
import { getHomeData } from '@/redux/slices';
import PageWithLoaders from '@/components/loader';

const About: NextPage = () => {
    const propLoaderValue = 2
    const homeData = useSelector((state: any) => state.homePage.data)
    const [aboutState, setAboutState] = useState([])
    const [showLoader, setShowLoader] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const FetchData = async () => {
            if (homeData != undefined) {
                const aboutResponse = await getAbout()
                setAboutState(aboutResponse?.data?.data);
                setShowLoader(false)
            } else {
                console.log(homeData, "homeData else")
                setAboutState(homeData);
                setShowLoader(false)
            }
        };
        FetchData();
    }, []);

    return (
        <div className="w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
            <Header />
            {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
                <div className="container mx-auto my-[60px] px-4 ">
                    {/* <DestinationSectionTitle
                    topTitle="About us"
                    viewAllDisable={false}
                /> */}
                    {aboutState?.map((data: any, index: any) => (
                        <div key={index}>
                            <AboutPage
                                title={data?.about_name}
                                subtitle=""
                                content={data?.content}
                                imageSrc={data?.imageURL}
                            />
                        </div>
                    ))}
                </div>
            }
            <Footer />
        </div>
    );
};
export default About;