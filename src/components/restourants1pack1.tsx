/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { type CSSProperties, useMemo } from 'react';
import TruncateText from './TruncateText';
import { motion } from "framer-motion"
import PackageIcon from './packageIcon';
import { add } from 'date-fns';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';

type Restourants1pack1Type = {
    frame95?: any;
    cityName?: string;
    restourantName?: any;
    amenities1?: string;
    amenities2?: string;
    amenities3?: string;
    amenities4?: string;
    pacakgeText?: string | undefined | any;
    balcony?: string;
    property1pack2Position?: CSSProperties['position'];
    property1pack2ZIndex?: CSSProperties['zIndex'];
    lgClass?: string;
    address?: any;
    board?: any;
    websiteUrl?: any;
    contact?: number;
    workinghours?: any;
    restaurantProp?: boolean;
    location?: any;
    pharmaProp?: any;
};

const Restourants1pack1: NextPage<Restourants1pack1Type> = ({
    frame95,
    property1pack2Position,
    property1pack2ZIndex,
    restourantName,
    amenities1,
    amenities2,
    amenities3,
    workinghours,
    contact,
    address,
    board,
    websiteUrl,
    pacakgeText,
    lgClass,
    cityName,
    restaurantProp,
    location,
    pharmaProp

}) => {
    const restourants1pack1Style: CSSProperties = useMemo(() => {
        return {
            position: property1pack2Position,
            zIndex: property1pack2ZIndex,
        };
    }, [property1pack2Position, property1pack2ZIndex]);

    const truncateText = (text: string, limit: number) => {
        return text.length > limit ? text.slice(0, limit) + '...' : text;
    };

    const defaultImage = (image: any) => {
        if (image) {
            return image;
        } else {
            return "/assets/images/default/default1.webp"
        }
    }

    return (
        <>
            <div
                className={`${lgClass} relative box-border flex flex-col items-start justify-start gap-[16px] rounded-2xl border-[1px] border-solid border-text-gray-300 bg-default-white px-3 pb-4 pt-3 text-left font-others-capitalised text-lg text-black`}
                style={restourants1pack1Style}
            >
                <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
                    {restaurantProp ? "" : <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="relative h-[180px] max-w-full shrink-0 self-stretch overflow-hidden rounded-xl object-cover"
                        alt=""
                        src={defaultImage(frame95)} />}

                    <div className="flex flex-col mt-2 items-start justify-start min-h-[56px]">
                        <Tooltip title={restourantName?.length > 50 ? restourantName : ''} arrow placement="top">
                            <h4 className="break-words relative leading-[28px]">
                                {truncateText(restourantName || '', 50)}</h4>
                        </Tooltip>
                        <b className="relative leading-[28px]">{cityName}</b>

                    </div>
                    {/* <div className="flex flex-col items-start justify-start gap-[8px] text-sm text-text-gray-700">
                        <div className="flex flex-row flex-wrap items-center justify-start sm:gap-[12px] gap-[8px] md:gap-[5px] lg:gap-[5px]">
                            <div className="relative font-medium leading-[24px] text-[14px]">
                                {amenities1}
                            </div>
                            <div className="relative h-[3px] w-[3px] rounded-[50%] bg-gainsboro" />
                            <div className="relative font-medium leading-[24px] text-[14px]">
                                {' '}
                                {amenities2}
                            </div>
                            <div className="relative h-[3px] w-[3px] rounded-[50%] bg-gainsboro" />
                            <div className="relative font-medium leading-[24px] text-[14px]">
                                {' '}
                                {amenities3}
                            </div>
                        </div>
                    </div> */}

                    {pacakgeText && <Tooltip title={pacakgeText?.length > 50 ? <div dangerouslySetInnerHTML={{ __html: pacakgeText }} /> : ''} arrow placement="top">
                        <div className="relative break-words  min-h-[30px] items-center font-body text-smi tracking-[-0.02em] text-black">
                            {/* {truncateText(pacakgeText || '', 80)} */}
                            <div dangerouslySetInnerHTML={{ __html: truncateText(pacakgeText, 80) }} />
                        </div>
                    </Tooltip>}
                </div>
                <div className="self-stretch px-3 py-2 flex flex-col bg-mediumblue-200 items-start justify-start gap-[16px] text-sm">
                    {board ?
                        <div className="self-stretch flex flex-row items-center justify-start gap-[17px] bg-[#EBEBEB80]">
                            <div className="flex-1 relative text-gray-500 leading-[22px] font-medium">
                                Board Affiliation
                                <Tooltip title={board?.length > 50 ? board : ''} arrow placement="top">
                                    <div className='break-all min-h-[45px] text-black'>
                                        {truncateText(board || '', 50)}
                                    </div>
                                </Tooltip>
                            </div>
                            <div className="rounded-full bg-red-600 flex flex-row w-8 h-8 items-center justify-center box-border p-2">
                                <PackageIcon
                                    className="h-4 w-4 text-white"
                                    groupName="material-symbols:location-on-rounded"
                                /></div>
                        </div> :
                        <div className="self-stretch flex flex-row items-center justify-start gap-[17px] bg-[#EBEBEB80]">
                            <div className="flex-1 relative text-gray-500 leading-[22px] font-medium">
                                Contact
                                <Link
                                    className="flex flex-row items-center min-h-[45px] justify-start text-[inherit] [text-decoration:none]"
                                    href={`tel: ${contact}`}
                                >
                                    <div className='text-black'>+91 {contact}</div>
                                </Link>
                            </div>
                            <div className="rounded-full bg-red-600 flex flex-row w-8 h-8 items-center justify-center box-border p-2">
                                <PackageIcon
                                    className="h-4 w-4 text-white"
                                    groupName="material-symbols:call"
                                /></div>
                        </div>
                    }
                    {/* <div className="self-stretch flex flex-row items-center justify-start gap-[17px] h-9 bg-[#EBEBEB80]">
                        <div className="flex-1 relative text-gray-500 leading-[22px] font-medium">
                            Contact
                            <div className='text-black'>+91 78345 56747</div>
                        </div>
                        <div className="rounded-full bg-red-600 flex flex-row w-8 h-8 items-center justify-center box-border p-2">
                            <PackageIcon
                                className="h-4 w-4 text-white"
                                groupName="material-symbols:location-on-rounded"
                            /></div>
                    </div> */}
                    <div className="self-stretch bg-text-gray-300 h-0.5 overflow-hidden shrink-0 sm:ml-0 " />
                    <div className="self-stretch flex flex-row items-center justify-start gap-[17px] bg-[#EBEBEB80]">
                        <div className="flex-1 relative text-gray-500 leading-[22px] font-medium">
                            Address
                            <Tooltip title={address?.length > 50 ? address : ''} arrow placement="top">
                                <div className='break-words min-h-[45px] text-black'>
                                    {truncateText(address || '', 50)}
                                </div>
                            </Tooltip>
                        </div>
                        <div className="rounded-full bg-red-600 flex flex-row w-8 h-8 items-center justify-center box-border p-2">
                            <PackageIcon
                                className="h-4 w-4 text-white"
                                groupName="material-symbols:location-on-rounded"
                            /></div>
                    </div>
                    <div className="self-stretch bg-text-gray-300 h-0.5 overflow-hidden shrink-0 sm:ml-0 " />
                    {workinghours ?
                        <div className="self-stretch flex flex-row items-center justify-start gap-[17px] bg-[#EBEBEB80]">

                            <div className="flex-1 relative text-gray-500 leading-[22px] font-medium">
                                Working Hours
                                <div className='text-black'>{workinghours}</div>
                            </div>
                            <div className="rounded-full bg-red-600 flex flex-row w-8 h-8 items-center justify-center box-border p-2">
                                <PackageIcon
                                    className="h-4 w-4 text-white"
                                    groupName="material-symbols:timelapse"
                                />
                            </div>
                        </div>
                        :
                        <div className="self-stretch flex flex-row items-center justify-start gap-[17px] bg-[#EBEBEB80]">

                            <div className="flex-1 relative text-gray-500 leading-[22px] font-medium">
                                Website/Contact
                                <Tooltip title={websiteUrl?.length > 50 ? websiteUrl : ''} arrow placement="top">
                                    <div className='break-all min-h-[45px] text-black'>
                                        {truncateText(websiteUrl || '', 50)}
                                    </div>
                                </Tooltip>
                            </div>
                            <div className="rounded-full bg-red-600 flex flex-row w-8 h-8 items-center justify-center box-border p-2">
                                <PackageIcon
                                    className="h-4 w-4 text-white"
                                    groupName="mdi:web"
                                /></div>

                        </div>
                    }
                    {pharmaProp && <div className="self-stretch flex flex-row items-center justify-start gap-[17px] bg-[#EBEBEB80]">

                        <div className="flex-1 relative text-gray-500 leading-[22px] font-medium">
                            Google Map
                            <Tooltip title={location?.length > 50 ? location : ''} arrow placement="top">
                            <div className='break-all min-h-[45px] text-black'>
                                {truncateText(location || '', 50)}
                            </div>
                            </Tooltip>
                        </div>
                        <div className="rounded-full bg-red-600 flex flex-row w-8 h-8 items-center justify-center box-border p-2">
                            <PackageIcon
                                className="h-4 w-4 text-white"
                                groupName="mdi:web"
                            />
                        </div>
                    </div>}
                </div>
            </div>
        </>
    );
};
export default Restourants1pack1;

