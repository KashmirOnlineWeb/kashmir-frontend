/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { type CSSProperties, useMemo, Key } from 'react';
import TruncateText from './TruncateText';
import { motion } from "framer-motion"
import PackageIcon from './packageIcon';
import { add } from 'date-fns';

type SafetyInformationPack1pack1Type = {
    frame95?: string;
    cityName?: string;
    restourantName?: string;
    amenities1?: string;
    amenities2?: string;
    amenities3?: string;
    amenities4?: string;
    pacakgeText?: string | undefined;
    balcony?: string;
    property1pack2Position?: CSSProperties['position'];
    property1pack2ZIndex?: CSSProperties['zIndex'];
    lgClass?: string;
    address?: string;
    board?: any;
    websiteUrl?: any;
    safety_content?: any;
    safety_number?: any;
    safety_title?: any;
};

const SafetyInformationPack1: NextPage<SafetyInformationPack1pack1Type> = ({
    frame95,
    property1pack2Position,
    property1pack2ZIndex,
    restourantName,
    amenities1,
    amenities2,
    amenities3,
    address,
    board,
    websiteUrl,
    pacakgeText,
    lgClass,
    cityName,
    safety_number,
    safety_title,
    safety_content
}) => {
    const safetypack1Style: CSSProperties = useMemo(() => {
        return {
            position: property1pack2Position,
            zIndex: property1pack2ZIndex,
        };
    }, [property1pack2Position, property1pack2ZIndex]);

    return (
        <>
            <div
                className={`${lgClass} relative box-border flex flex-col items-start justify-start gap-[16px] rounded-2xl border-[1px] border-solid border-text-gray-300 bg-default-white px-3 pb-4  text-left font-others-capitalised text-lg text-black`}
                style={safetypack1Style}
            >
                <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
                    {/* <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="relative h-[180px] max-w-full shrink-0 self-stretch overflow-hidden rounded-xl object-cover"
                        alt=""
                        src={frame95} /> */}
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="flex flex-col items-start justify-start">
                            <b className="relative leading-[28px]">{restourantName}</b>
                            <b className="relative leading-[28px]">{cityName}</b>
                        </div>
                    </div>
                </div>

                {/* {safety_content && safety_content?.map((data: any, index: Key | null | undefined) => (
                    <div key={index} className="self-stretch">
                        {data?.map((value: any, index: Key | null | undefined) => (
                            <div key={index} className="self-stretch px-3 py-2 flex flex-col bg-mediumblue-200 items-start justify-start gap-[16px] text-sm">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[17px] h-9 bg-[#EBEBEB80]">
                                    <div className="flex-1 relative text-gray-500 leading-[22px] font-medium">
                                        {value?.safety_title}
                                        <div className='text-black'>{value?.safety_number}</div>
                                    </div>
                                    <div className="rounded-full bg-red-600 flex flex-row w-8 h-8 items-center justify-center box-border p-2">
                                        <PackageIcon
                                            className="h-4 w-4 text-white"
                                            groupName="material-symbols:location-on-rounded"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))} */}
                <div className="self-stretch py-10 px-5 flex flex-row items-center justify-start gap-[17px] h-9 bg-[#EBEBEB80]">
                    <div className="flex-1 relative text-gray-500 leading-[22px] font-medium">
                        {safety_title}
                        <div className='text-black'>{safety_number}</div>
                    </div>
                    <div className="rounded-full bg-red-600 flex flex-row w-8 h-8 items-center justify-center box-border p-2">
                        <PackageIcon
                            className="h-4 w-4 text-white"
                            groupName="material-symbols:call"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default SafetyInformationPack1;

