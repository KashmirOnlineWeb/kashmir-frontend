/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { motion } from "framer-motion"

type AboutPageType = {
    title?: string;
    subtitle?: string;
    content?: string | any | TrustedHTML | undefined;
    imageSrc?: string;
};

const AboutPage: NextPage<AboutPageType> = ({
    title,
    subtitle,
    content,
    imageSrc,
}) => {
    return (
        <div className=" mt-8 container mx-auto box-border flex w-full sm:flex-row items-start justify-start gap-10 sm:gap-[130px] md:gap-[30px] lg:gap-[30px] pb-[92px] sm:pt-[10px] text-9xl text-black flex-col-reverse sm:px-0">
            <div className="flex flex-col w-full items-start justify-start">
                <b className="relative flex w-full items-center leading-[40px]">
                    <span className="w-full">
                        <p className="m-0 color-pink">About us</p>
                        <p className="mt-5 font-thin leading-[25px] sm:hoverUnderline text-[12px] sm:text-[16px]">{title}</p>
                    </span>
                </b>
                {
                    content ? <div dangerouslySetInnerHTML={{ __html: content?.replace(/<strong>/g, '<strong style="color: #DD1045;">') }}
                        className="relative editor-content items-center text-base leading-[26px]" />
                        : ''
                }
            </div>
            {/* <motion.img
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="relative sm:h-[350px] sm:w-[530px] w-full shrink-0 overflow-hidden sm:object-cover h-[245.66px]"
                alt=""
                src={imageSrc}
            /> */}
        </div>
    );
};

export default AboutPage;
