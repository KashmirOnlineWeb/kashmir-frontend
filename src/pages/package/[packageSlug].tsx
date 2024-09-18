/* eslint-disable @next/next/no-img-element */
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import ImageGallery from "@/components/ImageGallery";
import { Navigation } from "@/components/navigation";
import BestTimeVisit from "@/components/BestTimeVisit";
import FAQsSection from "@/components/faq";
import { Key, useEffect, useState } from "react";
import PageWithLoaders from "@/components/loader";
import HighLightSection from "@/components/HighLightSection";
import TourismText from "@/components/TourismText";
import PriceCard from "@/components/price-card";
import Itenery from "@/components/Itenery";
import Amenity from "@/components/Inclusions";
import Exclusions from "@/components/Exclusions";
import AddOns from "@/components/Add-ons";
import { useQuery } from "@tanstack/react-query";
import { ListingServices } from "@/services/listing";
import { getSinglePackage } from "@/services/package";
import PackageFaqs from "@/components/packageFaqs";
import Inclusions from "@/components/Inclusions";
import ThingsToDoForm from "@/components/thingstodoForm";

const Package: NextPage = () => {
  const router = useRouter();
  const propLoaderValue = 3
  console.log(router.query);
  const [showLoader, setShowLoader] = useState(true)
  const [packageApiData, setPackageApiData] = useState<any | null>([])
  const [parseSinglePackageContent, setParseSinglePackageContent] = useState<any | null>([])
  const [parseSingleIllusionsData, setParseSingleIllusionsData] = useState<any | null>([])
  const [parseSingleIteneryData, setParseSingleIteneryData] = useState<any | null>([])
  const [parseSingleFaqsData, setParseSingleFaqsData] = useState<any | null>([])
  const lastSegment = router.query.packageSlug; // Access dynamic route parameter
  // const { data, isLoading } = useQuery({
  //   queryKey: ["packageDetails"],
  //   queryFn: async () => {
  //     if (router.query.packageSlug) {
  //       return await ListingServices.PackageDetails({
  //         slug: router.query.packageSlug as string,
  //       });
  //     }
  //   },
  // });

  useEffect(() => {
    const fetchData = async () => {
      const packageData = await getSinglePackage(lastSegment)
      setPackageApiData(packageData?.data?.data)
      setShowLoader(false)
    }
    fetchData()
  }, [lastSegment])

  useEffect(() => {
    if (packageApiData) {
      if (packageApiData?.package_content != undefined && packageApiData?.package_content.length > 0) {
        setParseSinglePackageContent(JSON.parse(
          packageApiData?.package_content as unknown as string
        ))
      }
    }
  }, [packageApiData])

  useEffect(() => {
    if (packageApiData) {
      if (packageApiData?.illusions_content != undefined && packageApiData?.illusions_content.length > 0) {
        setParseSingleIllusionsData(JSON.parse(
          packageApiData?.illusions_content as unknown as string
        ))
      }
    }
  }, [packageApiData])

  useEffect(() => {
    if (packageApiData) {
      if (packageApiData?.faqs_content) {
        if (packageApiData?.faqs_content != undefined && packageApiData?.faqs_content.length > 0) {
          setParseSingleFaqsData(JSON.parse(packageApiData?.faqs_content as unknown as string))
        }
      }
    }
  }, [packageApiData])

  useEffect(() => {
    if (packageApiData) {
      if (packageApiData?.itenery_content) {
        if (packageApiData?.itenery_content != undefined && packageApiData?.itenery_content.length > 0) {
          setParseSingleIteneryData(JSON.parse(
            packageApiData?.itenery_content as unknown as string
          ))
        }
      }
    }
  }, [packageApiData])

  return (
    <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
      {packageApiData && <Header />}
      {/* {packageApiData && <div className="sm:hidden block w-full">
        <Navigation />
      </div>} */}
      {packageApiData &&
        <ImageGallery images={packageApiData?.galleryImageURL?.split(",")} />}

      {packageApiData && <div className={` sm:block`}>
        <Navigation trueProp={false} />
      </div>}
      {showLoader ? (
        <PageWithLoaders prop={propLoaderValue} />
      ) : (
        <>
          <div className="container mx-auto px-[24px] sm:px-4">
            <div className="flex md:flex-row flex-col">
              <div className="md:w-3/5 w-full gap-[48px] text-left text-black font-lead-lead-2">
                <div id="overview" className="gap-[16px]">
                  {packageApiData && <TourismText
                    tourismText={packageApiData?.package_name}
                    content={packageApiData?.content}
                    trueAdventure={true}
                    pageTitle="Packages"
                    slug={packageApiData?.slug}
                    totaldays={`${packageApiData?.duration?.nights}N / ${packageApiData?.duration?.days}D`}
                    tagsdata={packageApiData?.tags}
                  />}
                </div>
                {packageApiData && <Inclusions inclusions={parseSingleIllusionsData} />}
                {packageApiData && <AddOns addonsdata={packageApiData?.addons_editor} />}
                {packageApiData && <div id="highlight">
                  <HighLightSection highlights={packageApiData?.highlight_editor} />
                </div>}
                {packageApiData && <div className={` w-fit pt-10`}>
                  <div id="best-time-to-visit" className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-black font-others-capitalised">
                    <div className="flex flex-row items-center justify-center">
                      <b className="relative text-[#E74433] leading-[28px]">
                        Best Time to Visit
                      </b>
                    </div>
                    {packageApiData &&
                      <div className="self-stretch flex lg:flex-row flex-col lg:overflow-hidden overflow-x-auto container items-start justify-start gap-[8px] text-base">
                        {parseSinglePackageContent && (
                          <>
                            {parseSinglePackageContent.map(
                              (
                                value: {
                                  time_period: string | undefined;
                                  sub_title: string | undefined;
                                  title: string | undefined;
                                  add_more_things: string | undefined;
                                },
                                index: Key | null | undefined
                              ) => (
                                <BestTimeVisit
                                  key={index}
                                  timePeriods={value?.time_period}
                                  sub_title={value?.sub_title}
                                  title={value?.title}
                                  add_more_things={value?.add_more_things}
                                  vectorImageUrl="/assets/images/icons/sun.svg"
                                  vectorLabel="/assets/images/icons/vector1.svg"
                                />
                              )
                            )}
                          </>
                        )}
                      </div>
                    }
                  </div>
                </div>}
                {packageApiData && <div id="itenery">
                  <Itenery
                    itenerydata={parseSingleIteneryData}
                    start_Date={String(
                      parseSingleIteneryData?.date_range?.start_date
                    )}
                    end_Date={String(
                      parseSingleIteneryData?.date_range?.end_date
                    )}
                  />
                </div>}
                {packageApiData && <div className="flex flex-col items-start justify-start pt-[40px]">
                  <PackageFaqs
                    noPadding="pb-0"
                    faqsdata={parseSingleFaqsData}
                    faqTitle="Whats included"
                    message="If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
                  />
                </div>}
                {packageApiData && <Exclusions exclusionsdata={packageApiData?.exclusions_editor} />}
              </div>
              <div className="sm:w-0 lg:w-20"></div>
              {/* {data?.price ||
                ((data?.price as number) > 0 && (
                  <PriceCard price={data?.price} />
                ))} */}
              {packageApiData && <div>
                <PriceCard title={packageApiData?.package_name} price={packageApiData?.price} />
                <ThingsToDoForm formClassProp={true} />
              </div>}
            </div>
          </div>
        </>
      )}
      {packageApiData &&
        <div id="footer" className="mt-10">
          <Footer /></div>}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { packageSlug } = context.query;
  const packagedata = await getSinglePackage(packageSlug)
  const data = packagedata?.data?.data;
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
export default Package;
