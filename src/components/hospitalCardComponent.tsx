import { NextPage } from "next"
import PackageIcon from "./packageIcon"
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';
import { useEffect, useState } from "react";
import HospitalDescription from "./hospital-description";
type HospitalCardComponentTypes = {
    hospitalName?: any
    address?: any
    contact?: any
    description?: any
    content?: any
    howtoreach?: any
    facilities?: any
    introduction?: any
    referralsystem?: any
    traumaservices?: any
    googlemap?: any
}

const HospitalCardComponent: NextPage<HospitalCardComponentTypes> = ({ hospitalName,
    address,
    contact,
    description,
    content,
    facilities,
    introduction,
    referralsystem,
    traumaservices,
    googlemap }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const truncateText = (text: string, limit: number) => {
        return text.length > limit ? text.slice(0, limit) + '...' : text;
    };

    useEffect(() => {
        if (isModalOpen) {
            // Start the animation after the modal is opened
            setIsAnimating(true);
        } else {
            // Reset animation state when the modal is closed
            setIsAnimating(false);
        }
    }, [isModalOpen]);

    return (
        <>
            <div
                className={`relative box-border flex flex-col items-start justify-start gap-[16px] rounded-2xl border-[1px] border-solid border-text-gray-300 bg-default-white  pb-4 pt-3 text-left font-others-capitalised text-lg text-black mt-5 `}
            >
                <div className="flex px-3 flex-col mt-2 items-start justify-start min-h-[56px]">
                    <Tooltip title={hospitalName?.length > 50 ? hospitalName : ''} arrow placement="top">
                        <h4 className=" relative leading-[28px]">
                            {truncateText(hospitalName || '', 50)}</h4>
                    </Tooltip>
                </div>

                <Tooltip title={description?.length > 50 ? <div dangerouslySetInnerHTML={{ __html: description }} /> : ''} arrow placement="top">
                    <div className="relative px-3 break-words  min-h-[30px] items-center font-body text-smi tracking-[-0.02em] text-black">
                        {/* {truncateText(pacakgeText || '', 80)} */}
                        <div dangerouslySetInnerHTML={{ __html: truncateText(description, 80) }} />
                    </div>
                </Tooltip>

                <div className="self-stretch px-3 py-2 flex flex-col bg-mediumblue-200 items-start justify-start gap-[16px] text-sm">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[17px] bg-[#EBEBEB80]">
                        <div className="flex-1 relative text-gray-500 leading-[22px] font-medium">
                            Address
                            <Tooltip title={address?.length > 60 ? address : ''} arrow placement="top">
                                <div className='break-all min-h-[45px] text-black'>
                                    {truncateText(address || '', 60)}
                                </div>
                            </Tooltip>
                        </div>
                        <div className="rounded-full bg-red-600 flex flex-row w-8 h-8 items-center justify-center box-border p-2">
                            <PackageIcon
                                className="h-4 w-4 text-white"
                                groupName="material-symbols:location-on-rounded"
                            />
                        </div>
                    </div>

                    <div className="self-stretch bg-text-gray-300 h-0.5 overflow-hidden shrink-0 sm:ml-0 " />

                    <div className="self-stretch flex flex-row items-center justify-start gap-[17px] bg-[#EBEBEB80]">

                        <div className="flex-1 relative text-gray-500 leading-[22px] font-medium">
                            Contact
                            <div className='break-all min-h-[45px] text-black'>
                                {contact}
                            </div>
                        </div>
                        <div className="rounded-full bg-red-600 flex flex-row w-8 h-8 items-center justify-center box-border p-2">
                            <PackageIcon
                                className="h-4 w-4 text-white"
                                groupName="mdi:web"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full text-end pr-3">
                    <button className="px-3 py-2 bg-red-600 cursor-pointer text-white rounded "
                        onClick={() => setIsModalOpen(true)} >More Detail</button>
                </div>
                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-10 shadow-2xl">
                        <div
                            className={`relative transform transition-all duration-500 ease-in-out sm:py-14 sm:px-14 gap-10 bg-white sm:p-8 rounded-lg shadow-xl h-4/5 w-4/5 overflow-hidden
                             ${isAnimating ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                                }`}
                        >
                            {/* Close Button */}
                            <div
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 cursor-pointer"
                            >
                                <PackageIcon className="text-black" groupName="bitcoin-icons:cross-outline" />
                            </div>

                            {/* Scrollable Content */}
                            <div className="overflow-y-auto h-full">
                                <HospitalDescription hospitalData={content} imageSrc="/assets/images/package/package.webp" />
                                <HospitalDescription hospitalData={facilities} imageSrc="/assets/images/package/package.webp" />
                                <HospitalDescription hospitalData={introduction} imageSrc="/assets/images/package/package.webp" />
                                <HospitalDescription hospitalData={referralsystem} imageSrc="/assets/images/package/package.webp" />
                                <HospitalDescription hospitalData={traumaservices} imageSrc="/assets/images/package/package.webp" />
                                <HospitalDescription hospitalData={googlemap} imageSrc="/assets/images/package/package.webp" />
                            </div>
                            <div className="overflow-y-auto h-full">
                                
                            </div>

                            {/* Close Button (duplicate for bottom) */}
                            <div className="flex justify-end gap-2 pt-5">
                                <button
                                    type="button"
                                    className="px-4 py-2 cursor-pointer bg-red-700 text-white rounded-md"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}
export default HospitalCardComponent