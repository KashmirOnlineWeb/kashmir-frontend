/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

type CardContainerType = {
  arrowDownIconSmallArrowDo?: string;
  faqTitle?: string;
};

const Days: NextPage<CardContainerType> = ({
  arrowDownIconSmallArrowDo,
  faqTitle
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-lg text-black font-label-small-label">
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch flex flex-row items-start justify-between">
          <b className="relative leading-[28px]">{faqTitle}</b>
        </div>
      
      </div>
      <div className="self-stretch relative bg-text-gray-300 h-px overflow-hidden shrink-0" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-inherit font-inherit">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start">
          <div className="flex-1 relative leading-[26px]">
            <ul className="m-0 pl-[19px]">
              Highlight of the trip goes here, it could be about the scene,
              activity, hotel, transport.
            </ul>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start">
          <div className="flex-1 relative leading-[26px]">
            <ul className="m-0 pl-[19px]">
              Highlight of the trip goes here, it could be about the scene,
              activity, hotel, transport.
            </ul>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start">
          <div className="flex-1 relative leading-[26px]">
            <ul className="m-0 pl-[19px]">
              Highlight of the trip goes here, it could be about the scene,
              activity, hotel, transport.
            </ul>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start">
          <div className="flex-1 relative leading-[26px]">
            <ul className="m-0 pl-[19px]">
              Highlight of the trip goes here, it could be about the scene,
              activity, hotel, transport.
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Days;
