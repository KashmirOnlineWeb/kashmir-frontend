/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { motion } from "framer-motion"
import { useEffect, useState } from 'react';

type BackgroundDescriptionType = {
    title?: string;
    subtitle?: string;
    content?: any | TrustedHTML | undefined;
    imageSrc?: string;
};

const BackgroundDescription: NextPage<BackgroundDescriptionType> = ({
    title,
    subtitle,
    content,
    imageSrc,
}) => {
    return (
        <>
            <div className=" mt-8 container mx-auto box-border flex w-full sm:flex-row items-start justify-start gap-10 sm:gap-[130px] md:gap-[30px] lg:gap-[30px] sm:pt-[10px] text-9xl text-black flex-col-reverse sm:px-0">
                <div className="flex flex-col w-full items-start justify-start">
                    <b className="relative flex w-full items-center leading-[40px]">
                        <span className="w-full">
                            <p className="m-0 color--wedge leading-[40px] sm:hoverUnderline text-[24px] sm:text-[28px]">{title}</p>
                            <p className="m-0 color--wedge">{subtitle}</p>
                        </span>
                    </b>
                    {
                        content ? <div dangerouslySetInnerHTML={{ __html: content }} className={` relative items-center text-base leading-[26px]`} />
                            : ''
                    }
                </div>
                {/* <motion.img
                            whileHover={{ scale: 0.9 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="relative sm:h-[350px] sm:w-[530px] w-full shrink-0 overflow-hidden sm:object-cover h-[245.66px]"
                            alt=""
                            src={content.repeater_image}
                        /> */}
            </div>
        </>
    );
};

export default BackgroundDescription;
