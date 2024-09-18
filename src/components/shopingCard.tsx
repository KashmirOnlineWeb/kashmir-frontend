import { NextPage } from "next"
import PackageIcon from "./packageIcon"
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import HospitalDescription from "./hospital-description";
type ShoppingCardTypes = {
    name?: any
    image?: any
    contact?: any
    description?: any
    content?: any
}

const ShoppingCard: NextPage<ShoppingCardTypes> = ({ name,
    image,
    contact,
    description,
    content }) => {

    const truncateText = (text: string, limit: number) => {
        return text?.length > limit ? text.slice(0, limit) + '...' : text;
    };

    const defaultImage = (image: any) => {
        if (image) {
            return image;
        } else {
            return "/assets/images/slider/shop.jpeg"
        }
    }

    return (
        <>
            <div
                className={`relative mt-5 box-border flex flex-col items-start justify-start gap-[16px] rounded-2xl  bg-default-white px-3 pb-4 pt-3 text-left font-others-capitalised text-lg text-black`}
            >
                <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
                    <motion.img
                        whileHover={{ scale: 0.9 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="relative h-[180px] pt-1 max-w-full shrink-0 self-stretch overflow-hidden rounded-xl object-cover"
                        alt=""
                        src={defaultImage(image)} />

                    <div className="flex flex-col mt-2 items-start justify-start min-h-[56px]">
                        <Tooltip title={name?.length > 50 ? name : ''} arrow placement="top">
                            <h4 className="break-all relative leading-[28px]">
                                {truncateText(name || '', 50)}</h4>
                        </Tooltip>

                    </div>
                    <div className="relative break-words  min-h-[30px] items-center font-body text-smi tracking-[-0.02em] text-black">
                        {/* {truncateText(pacakgeText || '', 80)} */}Description
                    </div>
                    <div className="relative color-pink break-words items-center font-bold text-base tracking-[-0.02em] text-black">
                        ₹1200.00
                    </div>
                    <div className="w-full text-start pr-3">
                        <button className="w-full bg-white px-3 py-2 font-medium color-pink border border-solid border-[#0000004D] cursor-pointer rounded-full ">
                            Quick View</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShoppingCard