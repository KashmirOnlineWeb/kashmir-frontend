/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { motion } from "framer-motion"

type HospitalDescriptionType = {
    hospitalData?: any;
    imageSrc?: string;
};

// Function to remove <p> tags from the content
const removePTags = (content: string) => {
    const updatedContent = content.replace(/<p\s*[/]?>/gi, '\n');
    return updatedContent;
};

const HospitalDescription: NextPage<HospitalDescriptionType> = ({
    hospitalData,
    imageSrc,
}) => {
    return (
        <>
            <div className=" container mx-auto box-border flex w-full sm:flex-row items-start justify-start gap-10 sm:gap-[130px] md:gap-[30px] lg:gap-[30px] sm:pt-[10px] text-9xl text-black flex-col-reverse px-[24px] sm:px-0">
                <div className="flex flex-col w-full items-start justify-start gap-[30px]">
                    <div className="relative float-left items-center text-base leading-[26px]" >
                        <div className="flex flex-col justify-start mt-6">
                            {
                                hospitalData ? <div dangerouslySetInnerHTML={{ __html: removePTags(hospitalData) }} className="relative editor-imgMargin float-left items-center text-base leading-[26px]" />
                                    : ''
                            }
                        </div>
                    </div>
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
        </>
    );
};

export default HospitalDescription;
