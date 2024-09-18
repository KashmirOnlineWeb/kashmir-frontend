/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

type BestTimeToVisitContainerType = {
  timePeriods?: string;
  vectorImageUrl?: string;
  vectorLabel?: string;
  sub_title?: string;
  title?: string;
  add_more_things?: string;
  customStyle?: any;
};

const BestTimeCard: NextPage<BestTimeToVisitContainerType> = ({
  timePeriods,
  vectorImageUrl,
  vectorLabel,
  sub_title,
  title,
  add_more_things,
  customStyle
}) => {
  return (
    <div className="flex-1 custom-minHeight rounded-[16px] bg-default-white flex flex-col items-start justify-start p-3 gap-[24px] text-left text-base text-black font-others-capitalised border-[1px] border-solid border-text-gray-300 lg:w-[240px] sm:first-line:w-[272px]" style={customStyle} >
      <div className="flex flex-col items-start justify-start gap-[4px]">
        <b className="relative text-[#E74433] leading-[28px]">{timePeriods}</b>
        <div className="relative text-xs leading-[28px] font-medium text-darkgray-100">
          {title}
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-sm">
        <div className="self-stretch flex flex-row items-start justify-start gap-[17px]">
          <div className="rounded-full bg-red-200 flex flex-row items-start justify-start p-2">
            <img className="relative w-6 h-6 img-color-pink" alt="" src={vectorImageUrl} />
          </div>
          <div className="flex-1 relative leading-[22px] font-medium">
            {sub_title}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[17px]">
          <div className="rounded-full bg-red-200 w-10 h-10 flex flex-row items-center justify-center p-2 box-border">
            <img
              className="relative w-5 h-[20.66px] img-color-pink"
              alt=""
              src={vectorLabel}
            />
          </div>
          <div className="flex-1 relative leading-[22px] font-medium">
            {add_more_things}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestTimeCard;
