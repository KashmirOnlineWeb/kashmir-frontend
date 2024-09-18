import type { NextPage } from 'next';
import { useDispatch, useSelector } from "react-redux";
import { Key, useEffect, useState } from "react";
import FaqCollapse from './faq-collapse';
import PageWithLoaders from './loader';

type PackageFaqsType = {
  noPadding?: string;
  message?: any;
  faqTitle?: string;
  faqsubtitle?: string;
  truePros?: boolean;
  column?: string;
  textLg?: string;
  faqsdata?: any;
};

const PackageFaqs: NextPage<PackageFaqsType> = ({ noPadding, faqsdata, message, faqTitle, faqsubtitle, truePros, column, textLg }) => {
  return (
    <div className={` ${noPadding} font-heading-h6 flex flex-row items-center justify-between self-stretch text-left text-9xl text-gray-100`}>
      <div className="w-full">
        {
          faqsdata &&
          faqsdata.map((data: any, index: any) => (
            <div key={index} className="w-full">
              <FaqCollapse
                faqTitle={data?.faqs_question}
                faqIcon="iconamoon:arrow-down-2"
                subContent={data?.faqs_answer}
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

export default PackageFaqs;
