/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import PackageIcon from "./packageIcon";
import Link from "next/link";

type HotelCheckInType = {
  iconImageUrl?: string;
  iconName?: string;
  buttonText?: string;
  frameLabel?: string;
  symbolImageUrl?: string;
};

const HotelCheckIn: NextPage<HotelCheckInType> = ({
  iconImageUrl,
  iconName,
  buttonText,
  frameLabel,
  symbolImageUrl,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-[12.46px] text-black font-label-small-label">
      <div className="self-stretch rounded-81xl bg-whitesmoke-200 flex flex-row items-center justify-between py-2 pr-3 pl-2">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <div className="rounded-81xl bg-mediumblue-300 [backdrop-filter:blur(3.12px)] box-border w-11 h-11 flex flex-row items-center justify-center py-[6.230769157409668px] px-[12.461538314819336px] gap-[6.23px] border-[0.8px]">
            <PackageIcon className="!w-32 !h-32" groupName={iconImageUrl} />
            <div className="relative leading-[18.69px] font-medium hidden">
              Hotel
            </div>
          </div>
          <b className="relative text-lg leading-[28px]">
            Check-in to Hotel in Kashmir @ 2PM
          </b>
        </div>
        <div className="rounded-mini flex flex-row items-center justify-start py-1 pr-[10.389999389648438px] pl-2 gap-[4px] text-sm border-[1px] border-solid border-black">
          <PackageIcon className="w-3 h-3" groupName={iconName} />
          <Link href="#" className="text-black no-underline"> <b className="relative leading-[12px]">{buttonText}</b></Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[16px] text-lg">
        <img
          className="relative w-[193px] h-[102px] overflow-hidden shrink-0 object-cover"
          alt=""
          src={frameLabel}
        />
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[28px] font-semibold">
              Hotel Kashmir Hillton | 3 star
            </div>
            <div className="relative text-base leading-[24px] font-medium text-text-gray-800">
              Srinagar
            </div>
          </div>
          <div className="flex flex-row items-start justify-start text-[13.35px] text-text-gray-700">
            <div className="flex flex-row items-center justify-start gap-[5.34px]">
              <img
                className="relative w-[13.35px] h-[13.35px]"
                alt=""
                src={symbolImageUrl}
              />
              <div className="relative leading-[20.03px] font-medium">
                Tue, 29 Aug 2023
              </div>
              <div className="relative leading-[20.03px] font-medium">-</div>
              <div className="relative leading-[20.03px] font-medium">
                Fri, 01 Sep 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCheckIn;
