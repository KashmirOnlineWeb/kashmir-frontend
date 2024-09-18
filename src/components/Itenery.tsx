import { Disclosure } from "@headlessui/react";
import { NextPage } from "next";
import PackageIcon from "./packageIcon";
import IteneryHotel from "./IteneryHotel";
import IteneryCar from "./IteneryCar";

type IteneryType = {
  itenerydata?: any;
  start_Date?: string;
  end_Date?: string;
};

const Itenery: NextPage<IteneryType> = ({ itenerydata, start_Date, end_Date }) => {
  return (
    <div className="mt-9 w-full col-12">
      <div className="flex flex-row justify-start">
        <b className="relative leading-[28px]">Itinerary</b>
      </div>

      <div className="mt-4 w-full">
        <Disclosure>
          {itenerydata && itenerydata.length > 0 && (
            ({ open }) => (
              <>
                {itenerydata.map((data: any, index: number) => (
                  data?.itenery_title ? (
                    <Disclosure key={index}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className="inline-flex w-full gap-x-1.5 bg-white sm:px-3 py-2 relative font-medium leading-[20px] self-stretch text-sm cursor-pointer mt-5 sm:mt-0"
                          >
                            <div className="flex flex-col sm:flex-row items-start justify-start">
                              <b className="relative sm:leading-[18px] text-[16px] leading-[28px] text-mediumblue-100 font-bold">
                                Day {data?.itenery_day}
                              </b>
                              <b className="relative sm:ml-7 sm:leading-[18px] leading-[28px] text-[16px]">
                                {data?.itenery_title}
                              </b>
                            </div>
                            <PackageIcon
                              className={`${open ? 'rotate-180 transform' : ''} arrow-down font-bold absolute right-0`}
                              groupName="iconamoon:arrow-down-2"
                            />
                          </Disclosure.Button>

                          <div className="flex flex-wrap flex-row items-start mt-2 sm:ml-20 justify-start gap-[12px] text-2xs text-default-white whitespace-nowrap md:whitespace-pre">
                            {data.transfer && (
                              <div className="flex flex-row items-start justify-start rounded-mini py-1 border-[1px] border-solid border-gray-400 pl-2 pr-[10.389999389648438px] text-black">
                                <b className="relative leading-[12px]">{data?.transfer}</b>
                              </div>
                            )}
                            {data.hotel && (
                              <div className="flex flex-row items-start justify-start rounded-mini border-[1px] border-solid border-gray-400 py-1 pl-2 pr-[10.389999389648438px] text-black">
                                <b className="relative leading-[12px]">{data?.hotel}</b>
                              </div>
                            )}
                            <div className="flex flex-row items-start justify-start rounded-mini border-[1px] border-solid border-gray-400 py-1 pl-2 pr-[10.389999389648438px] text-black">
                              <b className="relative leading-[12px]">{data?.sightseeings}</b>
                            </div>
                            {data.adventure && (
                              <div className="flex flex-row items-start justify-start rounded-mini border-[1px] border-solid border-gray-400 py-1 pl-2 pr-[10.389999389648438px] text-black">
                                <b className="relative leading-[12px]">{data?.adventure}</b>
                              </div>
                            )}
                          </div>

                          <div className="self-stretch bg-text-gray-300 h-0.5 overflow-hidden shrink-0 mt-4 sm:ml-16 " />
                          <Disclosure.Panel>
                            <div className="flex flex-col items-start justify-start gap-[8px] text-inherit font-inherit mt-2 sm:ml-16 ">
                              <div className="flex flex-row items-center justify-center">
                                <div
                                  className="relative leading-[28px]"
                                  dangerouslySetInnerHTML={{ __html: data?.itenery_highlights }}
                                ></div>
                              </div>
                            </div>
                            {/* <div className="inline-flex w-full gap-x-1.5 bg-white px-3 py-2 relative font-medium leading-[20px] text-sm cursor-pointer">
                    <IteneryHotel
                      hotel_detail={data?.hotel_detail}
                      hotel_check_time={data?.hotel_check_time}
                      hotel_star={data?.hotel_star}
                      start_Date={start_Date}
                      end_Date={end_Date}
                    />
                  </div>
                  <div className="inline-flex w-full gap-x-1.5 bg-white px-3 py-2 relative font-medium leading-[20px] text-sm cursor-pointer">
                    <IteneryCar
                      car_detail={data?.car_detail}
                      car_transfer_detail={data?.car_transfer_detail}
                      car_time_duration={data?.car_time_duration}
                      car_type={data?.car_type}
                    />
                  </div> */}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ) : null
                ))}
              </>
            )
          )}


        </Disclosure>
      </div>
    </div>


  );
};

export default Itenery;