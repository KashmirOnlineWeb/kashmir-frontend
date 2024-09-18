import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Header from '@/components/header';
import ImageGallery from '@/components/ImageGallery';
import { Navigation } from '@/components/navigation';
import Location from '@/components/location';
import GolfingCard from '@/components/golfing-card';
import SpecialPackages from '@/components/special-packages';
import { useDispatch, useSelector } from 'react-redux';
import { Key, useEffect } from 'react';
import { getSingleThingstodo } from '@/services/thingstodo';
import { singleThingstodo } from '@/redux/slices';
import { useState } from 'react';
import PageWithLoaders from '@/components/loader';
import TourismText from '@/components/TourismText';
import HighLightSection from '@/components/HighLightSection';
import ThingsToDoForm from '@/components/thingstodoForm';
import Loader from '@/components/loading';
import BackgroundPage from '@/components/background-page';
import DestinationSectionTitle from '@/components/destination-section-title';
import ThingstodoPage from '@/components/things-to-do-page';

const BookActivity: NextPage = () => {
    const router = useRouter()
    const propLoaderValue = 2
    const singleThingstodoData = useSelector((state: any) => state.thingstodosingle.data)
    const [showLoader, setShowLoader] = useState(true)
    const [loading, setLoading] = useState(true);
    // Check if router.asPath is defined before splitting
    const currentURL = router.asPath || ''; // Initialize it as an empty string if undefined
    const segments = currentURL.split('/'); // Split the URL by '/'
    const lastSegment = segments[segments.length - 1];
    const dispatch = useDispatch()

    useEffect(() => {
        const FetchData = async () => {
            const data = await getSingleThingstodo(lastSegment)
            dispatch(singleThingstodo(data?.data?.data))
            setShowLoader(false)
            setLoading(false);
        }
        FetchData()
    }, [dispatch, lastSegment])

    if (loading) {
        return <PageWithLoaders prop={propLoaderValue} />;
    }
    return (
        <div className="w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
            <Header />
            {/* <ImageGallery />
            <Navigation propTrue={true} /> */}
            <div className="container mx-auto my-[60px] px-4 ">
                <DestinationSectionTitle
                    // topTitle="Background history"
                    viewAllDisable={false}
                    topSubTitle={singleThingstodoData?.sub_title}
                // topSubTitle="A Spiritual Journey: Exploring the Enchancing Religous Places of Kashmir"
                />

                {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
                    <>
                        <BackgroundPage
                            title=""
                            subtitle=""
                            content={singleThingstodoData?.repeater_mergeAll}
                            imageSrc="/assets/images/package/package.webp"
                        />
                        {/* <ThingsToDoForm /> */}
                    </>
                }
            </div>
            {/* <div id="other-activity">
                <SpecialPackages lgClass="md:w-full lg:w-full" color="bg-white" titleName="Other Activities" />
            </div> */}
            <div id='footerId'>
            <Footer />
            </div>
        </div>

    );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { bookActivitySlug } = context.query;
    const thingsdata = await getSingleThingstodo(bookActivitySlug)
    const data = thingsdata?.data?.data;
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
export default BookActivity;
