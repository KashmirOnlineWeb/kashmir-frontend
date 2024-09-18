import type { GetServerSideProps, NextPage } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/header';
import ImageGallery from '@/components/ImageGallery';
import { Navigation } from '@/components/navigation';
import PageHero from '@/components/page-hero';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import DiscoverCard from '@/components/discoverCard';
import { ThingToDo } from '@/types/thingstodo.type';
import { useEffect, useState, Key } from 'react';
import { getAllThingstodo } from '@/services/thingstodo';
import PageWithLoaders from '@/components/loader';
import { ThingstodoSidebar } from '@/components/thingstodoSidebar';
import TruncateText from '@/components/TruncateText';
import { getSeo } from '@/services/seo';

const ThingsToDo: NextPage = () => {
  const propLoaderValue = 3
  const [showLoader, setShowLoader] = useState(true)
  const homeData = useSelector((state: any) => state.homePage.data)
  const [thingsTodo, setThingsTodo] = useState<ThingToDo[] | null>(null);
  const [allthingsTodo, setAllThingsTodo] = useState<ThingToDo[] | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  useEffect(() => {
    const FetchData = async () => {
      if (!homeData?.thingstodo) {
        const thingstodo = await getAllThingstodo();
        setThingsTodo(thingstodo?.data?.data);
        setSelectedTitle(thingstodo?.data?.data[0]?.title || null);
        setShowLoader(false)

      } else {
        setThingsTodo(homeData?.thingstodo);
        setSelectedTitle(homeData?.thingstodo[0]?.title || null);
        setShowLoader(false)
      }
    };
    FetchData();
  }, [])

  const defaultImage = (image: any) => {
    if (!image) return "/assets/images/default/default1.webp";
    let imgArr = image.split('/');
    if (!imgArr || imgArr.length === 0) return "/assets/images/default/default1.webp";
    const lastIndex = imgArr.length - 1;
    if (imgArr[lastIndex] !== "default.jpg" && imgArr[lastIndex] !== undefined) {
      return image;
    } else {
      return "/assets/images/default/default1.webp";
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const allThings = await getAllThingstodo()
      setAllThingsTodo(allThings?.data?.data)
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
        {thingsTodo && <Header />}
        {thingsTodo && <PageHero
          heroTitle="Things to do"
          heroSubtitle="Caption for blog / stories here"
          variantLabel=""
          heroBg='url("/assets/images/pages/hero/page-hero.jpg")'
        />}
        {thingsTodo && <Navigation breadcrumb={true} breadcrumbTitle="Things to do in Jammu & Kashmir" />}
        {showLoader ? (
          <PageWithLoaders prop={propLoaderValue} />
        ) : (
          <>
            <div className="container w-auto mx-auto pb-20 px-4">
              {/* <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-[24px]">
                {thingsTodo && thingsTodo?.map((thingstodo, index: Key | null | undefined) => (
                  <div key={index}>
                    <Link href={`/book-activity/${thingstodo?.slug}`} className='no-underline'>
                      <DiscoverCard
                        propBackgroundImage={`url(${thingstodo.imageURL})`}
                        touristSpotName={thingstodo.title}
                      />
                    </Link>
                  </div>
                ))}
              </div> */}
              <div className="flex md:flex-row flex-col">
                <div className=' lg:w-[30%] flex w-full md:grid overflow-x-scroll md:grid-cols-2 gap-8 mt-4 md:m-5'>
                  {thingsTodo && thingsTodo?.map((thingstodo, index: Key | null | undefined) => (
                    <div className={`${selectedTitle == thingstodo.title ? "custom-border-active" : "custom-border"} cursor-pointer  rounded-xl`}
                      onClick={() => setSelectedTitle(thingstodo.title)}
                      key={index}>
                      {/* <Link href={`/book-activity/${thingstodo?.slug}`} className='no-underline'> */}
                      <ThingstodoSidebar
                        propBackgroundImage={defaultImage(thingstodo?.imageURL)}
                        touristSpotName={thingstodo?.title}
                      />
                      {/* </Link> */}
                    </div>
                  ))}
                </div>
                <div className="sm:w-0 lg:w-10"></div>
                <div className='text-black w-full md:w-[60%] mt-7 md:m-5 shadow-lg p-5 '>
                  {allthingsTodo && allthingsTodo?.
                    filter((data) => data?.title === selectedTitle)?.
                    map((data, index) => (
                      <div key={index}>
                        <b className='text-[24px]'>{data?.title}</b>
                        <>
                          <div className=" mt-5 relative text-sm leading-[24px] md:leading-[26px] inline-block shrink-0 editor-image">
                            <TruncateText text={data?.content} limit={150} /></div>
                          {data?.content && data?.content.length > 150 && (
                            <Link href={`/thingstodo/${data?.slug}`} className='no-underline'>
                              <div className="mt-2">
                                <button
                                  className="flex items-start bg-white justify-start w-26 h-6 text-base text-mediumblue-100 cursor-pointer"
                                >
                                  Read More
                                </button>
                              </div>
                            </Link>
                          )}
                        </>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
        <Footer />
      </div>
    </>
  );
};


export const getServerSideProps: GetServerSideProps = async (context) => {
  const seoResponse = await getSeo();
  const data = seoResponse?.data?.data;
  const metaTags = {
    metaDescription: data[0]?.meta_description || "",
    keywords: data[0]?.keywords || "",
    title: data[0]?.title_tag || "",
  };

  return {
    props: {
      metaTags,
    },
  };
};
export default ThingsToDo;
