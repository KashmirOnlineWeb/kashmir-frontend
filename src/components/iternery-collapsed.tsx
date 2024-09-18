/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

type IteneryCollapsedType = {
  day1?: string;
  iconamoonarrowDown2Fill?: string;
};

const IteneryCollapsed: NextPage<IteneryCollapsedType> = ({
  day1,
}) => {
  return (
    <div className="flex flex-row items-start justify-start gap-[16px] text-left text-lg text-mediumblue-100 font-label-small-label self-stretch">
      <b className="relative leading-[28px] flex items-center w-16 shrink-0">
        {day1}
      </b>
      <div className="flex-1 flex flex-col items-start justify-start text-black">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch flex flex-row items-start justify-between">
              <b className="relative leading-[28px]">{`Arrival in Chandigarh & Transfer to Shimla`}</b>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-2xs">
              <div className="rounded-mini flex flex-row items-start justify-start py-1 pr-[10.389999389648438px] pl-2 border-[1px] border-solid border-silver">
                <div className="relative leading-[12px] font-semibold">
                  1 Transfer
                </div>
              </div>
              <div className="rounded-mini flex flex-row items-start justify-start py-1 pr-[10.389999389648438px] pl-2 border-[1px] border-solid border-silver">
                <div className="relative leading-[12px] font-semibold">
                  1 Hotel
                </div>
              </div>
              <div className="rounded-mini flex flex-row items-start justify-start py-1 pr-[10.389999389648438px] pl-2 border-[1px] border-solid border-silver">
                <div className="relative leading-[12px] font-semibold">
                  1 Sightseeings
                </div>
              </div>
              <div className="rounded-mini flex flex-row items-start justify-start py-1 pr-[10.389999389648438px] pl-2 border-[1px] border-solid border-silver">
                <div className="relative leading-[12px] font-semibold">
                  2 Adventure
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch relative bg-text-gray-300 h-px overflow-hidden shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default IteneryCollapsed;
