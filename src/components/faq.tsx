import type { NextPage } from 'next';
import { useSelector } from "react-redux";
import { Key, useEffect, useState } from "react";
import FaqCollapse from './faq-collapse';
import WhyKashmir from './why-kahmir';
import PageWithLoaders from './loader';
import { getFaqs } from "@/services/faqs"

type FAQsType = {
  noPadding?: string;
  message?: any;
  faqTitle?: string;
  faqsubtitle?: string;
  truePros?: boolean;
  column?: string;
  textLg?: string;
  faqsdata?: any;
};

const FAQsSection: NextPage<FAQsType> = ({ noPadding, faqsdata, message, faqTitle, faqsubtitle, truePros, column, textLg }) => {
  const propLoaderValue = 1
  const homeData = useSelector((state: any) => state.homePage.data)
  const [showLoader, setShowLoader] = useState(true)
  const [faqsData, setFaqsData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (homeData.faqs) {
        setFaqsData(homeData.faqs)
        setShowLoader(false)
      } else {
        const faqsApiData = await getFaqs()
        setFaqsData(faqsApiData?.data?.data)
        setShowLoader(false)
      }
    }
    fetchData()
  }, [homeData.faqs]);

  return (
    <div className={` ${noPadding} font-heading-h6 flex flex-row items-center justify-between self-stretch text-left text-9xl text-gray-100`}>
      <div className="w-full">
        {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
          faqsData &&
          faqsData?.map((data: any, index: any) => (
            <div key={index} className="w-full">
              <FaqCollapse
                faqTitle={data?.question}
                faqIcon="iconamoon:arrow-down-2"
                subContent={data?.answer}
                width="w-full"
                borderWidth="border-b-2"
              />
            </div>
          ))
        }

      </div>

    </div>
  );
};

export default FAQsSection;
