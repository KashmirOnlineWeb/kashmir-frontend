import { Disclosure } from "@headlessui/react";
import type { NextPage } from "next";

import PackageIcon from "./packageIcon";
import Tags from "./tags";

type FaqCollapse = {
  faqTitle?: string;
  subContent?: any;
  faqIcon?: string;
  width?: string;
  textLg?: string;
  colorBlue?: string;
  borderWidth: string;
  faqsubtitle?: string;
  truePros?: boolean;
  column?: string;
  Pb30?: string;
  gapDestination?: string;
};

const FaqCollapse: NextPage<FaqCollapse> = ({
  faqTitle,
  subContent,
  faqIcon,
  width,
  textLg,
  colorBlue,
  borderWidth,
  faqsubtitle,
  truePros,
  column,
  gapDestination,
  Pb30,
}) => {
  return (
    <div
      className={`font-heading-h6 sm:${width} relative flex flex-col items-start justify-center gap-[8px] text-left text-base text-black`}
    >
      <div
        className="flex flex-col items-center justify-between self-stretch"
        style={{ alignItems: column }}
      >
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex w-full items-center justify-between ${borderWidth} ${column} ${gapDestination} border-solid border-[#D9DBE1] bg-transparent py-2.5 text-left text-sm font-medium px-0`}
              >
                <span
                  className={`font-heading-h6 text-left ${textLg} text-base font-bold leading-[28px] text-black`}
                >
                  {faqsubtitle ? (
                    <span className="text-lg text-mediumblue-100 font-label-small-label">
                      {faqsubtitle ? faqsubtitle : ""}
                    </span>
                  ) : (
                    ""
                  )}
                  {faqTitle}
                  {truePros ? (
                    <div className="flex w-full justify-center">
                      <Tags />
                    </div>
                  ) : (
                    ""
                  )}
                </span>
                <PackageIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } arrow-down  font-bold ${colorBlue} lg:w-[24px] min-w-[16px] max-w-[16px] ml-[2px]`}
                  groupName={faqIcon}
                />
              </Disclosure.Button>

              <Disclosure.Panel
                className={`max-sm:flex max-sm:gap-2 overflow-x-auto sm:py-2 text-sm text-gray-500 w-full sm:${width}`}
              >
                {subContent}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default FaqCollapse;
