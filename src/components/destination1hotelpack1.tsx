/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { type CSSProperties, useMemo } from 'react';
import TruncateText from './TruncateText';
import { motion } from "framer-motion"
import PackageIcon from './packageIcon';
import { add } from 'date-fns';

type Hotel1pack1Type = {
    frame95?: string;
    cityName?: string;
    hotelName?: string;
    amenities1?: string;
    amenities2?: string;
    amenities3?: string;
    amenities4?: string;
    amenities?: string;
    hotelText?: string | undefined;
    breakfast?: boolean;
    property1pack2Position?: CSSProperties['position'];
    property1pack2ZIndex?: CSSProperties['zIndex'];
    lgClass?: string;
    address?: string;
    star?: any;
    location?: any;
    price?: any;
    tax?: any;
    contact?: any;
};

const Hotel1pack1: NextPage<Hotel1pack1Type> = ({
    frame95,
    property1pack2Position,
    property1pack2ZIndex,
    hotelName,
    amenities1,
    amenities2,
    amenities3,
    amenities,
    breakfast,
    star,
    contact,
    hotelText,
    lgClass,
    location,
    price,
    tax,
    cityName

}) => {
    const restourants1pack1Style: CSSProperties = useMemo(() => {
        return {
            position: property1pack2Position,
            zIndex: property1pack2ZIndex,
        };
    }, [property1pack2Position, property1pack2ZIndex]);

    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const amenitiesArray = useMemo(() => {
        if (typeof amenities === 'string' && amenities.trim()) {
            // Remove brackets and quotes, then split and trim each item
            return amenities.replace(/[\[\]"]/g, '').split(',').map(item => item.trim());
        }
        return [];
    }, [amenities]);

    return (
        <>
            <div
                className={`${lgClass} relative box-border flex flex-col items-start justify-start gap-[16px] rounded-2xl border-[1px] border-solid border-text-gray-300 bg-default-white px-3 pb-4 pt-3 text-left font-others-capitalised text-lg text-black`}
                style={restourants1pack1Style}
            >
                <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="relative h-[180px] max-w-full shrink-0 self-stretch overflow-hidden rounded-xl object-cover"
                        alt=""
                        src={frame95} />
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="flex flex-col items-start justify-start">
                            <b className="relative leading-[28px]">{hotelName}</b>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[12px] text-2xs text-default-white">
                            <div className="flex flex-row items-start justify-start rounded-mini bg-red-600 py-1 pl-2 pr-[10.389999389648438px]">
                                <b className="relative leading-[12px]">{`${star} star`}</b>
                            </div>
                            <div className="flex flex-row items-start justify-start rounded-mini border-[1px] border-solid border-black py-1 pl-2 pr-[10.389999389648438px] text-black">
                                <b className="relative break-all leading-[12px]">{location}</b>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[8px] text-sm text-text-gray-700">
                        <div className="flex flex-row flex-wrap items-center justify-start sm:gap-[12px] gap-[8px] md:gap-[5px] lg:gap-[5px]">
                            {amenitiesArray.map((amenity, index) => (
                                <div key={index} className="relative font-medium leading-[24px] text-[14px]">
                                    {capitalizeFirstLetter(amenity)}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative break-words flex items-center font-body text-smi tracking-[-0.02em] text-black">
                        <TruncateText text={hotelText} limit={13} />
                    </div>
                </div>
                <div className="self-stretch px-3 py-2 flex flex-col bg-mediumblue-200 items-start justify-start gap-[16px] text-sm">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[17px] h-9 bg-[#EBEBEB80]">
                        <div className="flex-1 relative text-gray-500 leading-[22px] font-medium">
                            Price
                            <div className='text-black'>{price} <span className="text-xs font-normal">{tax}</span></div>
                        </div>
                        <div className="rounded-full bg-red-600 flex flex-row w-8 h-8 items-center justify-center box-border p-2">
                            <PackageIcon
                                className="h-4 w-4 text-white"
                                groupName="bx:rupee"
                            />
                        </div>
                    </div>

                    <div className="self-stretch bg-text-gray-300 h-0.5 overflow-hidden shrink-0 sm:ml-0 " />
                    <div className="self-stretch flex flex-row items-center justify-start gap-[17px] bg-[#EBEBEB80]">
                        <div className="flex-1 relative text-gray-500 leading-[22px] font-medium">
                            Breakfast
                            <div className='text-black'>
                                {breakfast === 0 ? "Breakfast Not Available" : 
                                 breakfast === 1 ? "Breakfast Available" : 
                                 breakfast === 2 ? "Breakfast available at extra charges" : ""}
                            </div>
                        </div>
                        <div className="rounded-full bg-red-600 flex flex-row w-8 h-8 items-center justify-center box-border p-2">
                            <PackageIcon
                                className="h-4 w-4 text-white"
                                groupName="ic:baseline-free-breakfast"
                            />
                        </div>
                    </div>
                    <div className="self-stretch bg-text-gray-300 h-0.5 overflow-hidden shrink-0 sm:ml-0 " />
                    <div className="self-stretch flex flex-row items-center justify-start gap-[17px] bg-[#EBEBEB80]">
                        <div className="flex-1 relative text-gray-500 leading-[22px] font-medium">
                            Contact
                            <div className='text-black'>+91 {contact}</div>
                        </div>
                        <div className="rounded-full bg-red-600 flex flex-row w-8 h-8 items-center justify-center box-border p-2">
                            <PackageIcon
                                className="h-4 w-4 text-white"
                                groupName="ic:baseline-phone"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Hotel1pack1;

