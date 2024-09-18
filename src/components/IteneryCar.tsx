import { NextPage } from "next";
import PackageIcon from "./packageIcon";
import Image from 'next/image';

type IteneryCarType = {
    car_detail?: string;
    car_transfer_detail?: string;
    car_time_duration?: number;
    car_type?: string;
};

const IteneryCar: NextPage<IteneryCarType> = ({
    car_detail,
    car_transfer_detail,
    car_type,
    car_time_duration
}) => {
    return (
        <div className="mt-0 w-full">
            <div className="self-stretch mt-6 sm:ml-16 rounded-3xl flex flex-col bg-mediumblue-200 items-start justify-start gap-[16px] text-sm">
                <div className="self-stretch flex flex-row items-center justify-start gap-[17px] h-9 bg-[#EBEBEB80]">
                    <div className="rounded-full bg-mediumblue-200 flex flex-row w-8 h-8 items-center justify-center box-border p-2">
                        <PackageIcon
                            className="h-4 w-4 text-black"
                            groupName="material-symbols:hotel-rounded"
                        /></div>
                    <div className="flex-1 relative leading-[22px] font-medium">
                        {car_transfer_detail}
                    </div>
                    <div className="sm:flex hidden flex-row items-center gap-2 justify-start rounded-mini border-[1px] border-solid border-gray-400 py-1 pl-2 pr-[10.389999389648438px] mr-2 text-black">
                        <div className="rounded-full bg-mediumblue-200 h-2 w-3 flex flex-row items-center justify-center box-border">
                            <PackageIcon
                                className="h-4 w-4 text-black"
                                groupName="mdi:edit"
                            />
                        </div>
                        <b className="relative leading-[12px] text-xs w-full">Change hotel</b>
                    </div>
                </div>
            </div>

            <div className="flex w-[130px] mt-3 sm:hidden flex-row items-center gap-2 justify-start rounded-mini border-[1px] border-solid border-gray-400 py-1 pl-2 pr-[10.389999389648438px] mr-2 text-black">
                <div className="rounded-full bg-mediumblue-200 h-2 w-3 flex flex-row items-center justify-center box-border">
                    <PackageIcon
                        className="h-4 w-4 text-black"
                        groupName="mdi:edit"
                    />
                </div>
                <b className="relative leading-[12px] text-xs w-full">Change Vehicle</b>
            </div>
            
            <div className="flex flex-row mt-2 items-start justify-start gap-[18px] ">
                <Image
                    className="relative h-[80px] sm:ml-16 max-w-full shrink-0 self-stretch overflow-hidden object-cover"
                    alt=""
                    src="/assets/images/car/car.jpeg"
                    width={193}
                    height={102}
                />
                <div className="flex flex-col items-start mt-4 justify-start">
                    <div className="flex-1 relative leading-[22px] text-lg font-medium">
                        {car_detail}
                    </div>
                    <div className="text-base text-zinc-600	">
                       {car_type}
                    </div>
                    <div className="text-xs	text-zinc-500">
                    <PackageIcon
                            className="h-4 w-4 text-black"
                            groupName="mdi:Vector"
                        />
                        {car_time_duration} hrs journey
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IteneryCar