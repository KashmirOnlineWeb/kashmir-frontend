import type { NextPage } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/header';
import { useSelector, useDispatch } from 'react-redux';
import DestinationSectionTitle from '@/components/destination-section-title';
import Property1Policies from '@/components/property1-Policies';
import { useEffect, useState } from 'react';
import { HomeApi } from '@/services/homeService';
import { getHomeData } from '@/redux/slices';
import PageWithLoaders from '@/components/loader';

const removeBrTags = (content: string) => {
    const updatedContent = content?.replace(/<br\s*[/]?>/gi, '\n');
    let e = document.createElement('div');
    e.innerHTML = updatedContent;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue?.replace(/<br\s*[/]?>/gi, '\n');;
    // return updatedContent;
};

const RefundPolicy: NextPage = () => {
    const propLoaderValue = 1
    const homeData = useSelector((state: any) => state.homePage.data)
    const [homeApiData, setHomeApiDataData] = useState<any | null>(null);
    const [showLoader, setShowLoader] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const FetchData = async () => {
            if (homeData?.length == 0) {
                const homeResponse = await HomeApi()
                setHomeApiDataData(homeResponse?.data);
                setShowLoader(false)
                dispatch(getHomeData(homeResponse?.data))
            } else {
                setHomeApiDataData(homeData);
                setShowLoader(false)
            }
        };
        FetchData();
    }, [dispatch]);
    return (
        <div className="w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
            <Header />
            <div className="container mx-auto my-[60px] px-4 ">
                {/* <DestinationSectionTitle
                    topTitle="About us"
                    viewAllDisable={false}
                /> */}
                {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
                    <>
                        {homeApiData?.
                            policy?.filter((item: any) => item.name.localeCompare("Refund Policy", "en", { sensitivity: "accent" }) === 0)
                            ?.map((data: any, index: any) => (
                                <div key={index}>
                                    <Property1Policies
                                        name={"Refund Policy"}
                                        content={removeBrTags(data?.content)}
                                    />
                                </div>
                            ))}
                    </>
                }
            </div>
            <Footer />
        </div>
    );
};
export default RefundPolicy;

