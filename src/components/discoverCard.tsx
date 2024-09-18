import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { motion } from "framer-motion"

type DiscoverCardType = {
    touristSpotName?: string;

    /** Style props */
    propBackgroundImage?: CSSProperties["backgroundImage"];
};

const DiscoverCard: NextPage<DiscoverCardType> = ({
    touristSpotName,
    propBackgroundImage,
}) => {
    const frameDivStyle: CSSProperties = useMemo(() => {
        return {
            // backgroundImage: propBackgroundImage,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${propBackgroundImage}`,

        };
    }, [propBackgroundImage]);

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex-1 w-full rounded-2xl h-[257px] mt-7 flex flex-row items-end justify-start py-6 px-4 box-border bg-cover bg-no-repeat bg-[top] text-left text-9xl text-default-white font-lead-lead-2"
            style={frameDivStyle}
        >
            <span className="[text-decoration:none] relative text-[28px] leading-[30px] font-bold">
                {touristSpotName}
            </span>
        </motion.div>
    );
};

export default DiscoverCard;
