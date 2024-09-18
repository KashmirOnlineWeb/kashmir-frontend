/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { motion } from "framer-motion"

type Property1PoliciesType = {
    content?: string | any | TrustedHTML | undefined;
    name?: String;
};

const Property1Policies: NextPage<Property1PoliciesType> = ({
    content,
    name
}) => {
    const removeBr = (content: string) => {
        return content.replace(/<br\s*[/]?>/gi, '\n');
    }

    return (
        <div className=" mt-8 container mx-auto box-border flex w-full sm:flex-row items-start justify-start gap-10 sm:gap-[130px] md:gap-[30px] lg:gap-[30px] pb-[92px] sm:pt-[10px] text-9xl text-black flex-col-reverse sm:px-0">
            <div className="flex flex-col w-full items-start justify-start gap-5">
                <b className="relative flex w-full items-center leading-[40px]">
                    <span className="w-full">
                        <p className="m-0 color-pink">{name}</p>
                        {/* <p className="mt-5 font-thin leading-[25px] sm:hoverUnderline text-[12px] sm:text-[16px]">{title}</p> */}
                    </span>
                </b>
                {
                    content ? <div dangerouslySetInnerHTML={{ __html: removeBr(content) }}
                        className="relative editor-content items-center text-base leading-[26px]" />
                        : ''
                }
            </div>
        </div>
    );
};

export default Property1Policies;
