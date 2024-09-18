import type { NextPage } from 'next';
import { motion } from "framer-motion"
import { useEffect, useState } from 'react';

type imageLeftType = {
    parseContentState?: any | undefined;
    hasImage?: any;
};

const ImageLeftPlacement: NextPage<imageLeftType> = ({ parseContentState, hasImage }) => {
    return (
        <>
            <div className=" mt-8 container mx-auto box-border flex w-full max-md:flex-col items-start justify-start max-md:gap-10 lg:gap-[80px] max-md:pb-[0px] lg:pb-[20px] text-9xl text-black  sm:px-0">
                {hasImage && <motion.img
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="relative sm:h-[350px] sm:w-[530px] w-full shrink-0 overflow-hidden sm:object-cover h-[245.66px]"
                    alt=""
                    src={parseContentState?.repeater_image}
                />}
                <div className="flex flex-col w-full items-start justify-start">
                    <b className="relative flex w-full items-center leading-[40px]">
                        <span className="w-full">
                            <p className="m-0 text-[#E74433] leading-[40px] sm:hoverUnderline text-[24px] sm:text-[28px]">{parseContentState?.repeater_title}</p>
                            {/* <p className="m-0 color--wedge">{subtitle}</p> */}
                        </span>
                    </b>
                    {
                        parseContentState.repeater_content ? <div dangerouslySetInnerHTML={{ __html: parseContentState?.repeater_content }} className={` relative floara-editor-table floara-editor-ml-0 items-center text-base leading-[26px]`} />
                            : ''
                    }
                </div>
            </div>
        </>
    )
}
export default ImageLeftPlacement