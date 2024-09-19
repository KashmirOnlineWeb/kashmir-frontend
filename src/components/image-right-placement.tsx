import type { NextPage } from 'next';
import { motion } from "framer-motion"
import { useEffect, useState } from 'react';

type imageRightType = {
    parseContentState?: any | undefined;
    hasImage?: any;
};
const ImageRightPlacement: NextPage<imageRightType> = ({ parseContentState, hasImage }) => {

    return (
        <>
            <div className=" mt-8 container mx-auto max-md:flex-col-reverse box-border flex w-full sm:flex-row items-start justify-start gap-10 lg:gap-[80px] max-md:pb-[0px] lg:pb-[20px] sm:pt-[10px] text-9xl text-black flex-col-reverse sm:px-0">
                <div className="flex flex-col w-full items-start justify-start">
                    <b className="relative flex w-full items-center leading-[40px]">
                        <span className="w-full">
                            <p className="m-0 text-[#E74433] leading-[40px] sm:hoverUnderline text-[24px] sm:text-[28px]">{parseContentState?.title}</p>
                            {/* <p className="m-0 color--wedge">{subtitle}</p> */}
                        </span>
                    </b>
                    {
                        parseContentState?.content ? <div dangerouslySetInnerHTML={{ __html: parseContentState?.content }} className={` relative floara-editor-table floara-editor-ml-0 items-center text-base leading-[26px]`} />
                            : ''
                    }
                </div>
                {hasImage &&
                    <motion.img
                        whileHover={{ scale: 0.9 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="relative sm:h-[350px] sm:w-[530px] w-full shrink-0 overflow-hidden sm:object-cover h-[245.66px]"
                        alt=""
                        src={process.env.NEXT_PUBLIC_IMAGE_PREFIX + parseContentState?.file}
                    />}
            </div>

        </>
    )
}
export default ImageRightPlacement