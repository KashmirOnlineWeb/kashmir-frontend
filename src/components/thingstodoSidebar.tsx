import type { NextPage } from "next"
import { CSSProperties, useMemo } from "react";

type ThingstodoSidebarType = {
    touristSpotName?: string | any;
    propBackgroundImage?: CSSProperties["backgroundImage"];
};

export const ThingstodoSidebar: NextPage<ThingstodoSidebarType> = ({ propBackgroundImage, touristSpotName }) => {
    const wrodLimitValue = touristSpotName?.split(" ")?.slice(0, 6)?.join(" ")
    const frameDivStyle: CSSProperties = useMemo(() => {
        return {
            // backgroundImage: propBackgroundImage,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${propBackgroundImage}`,
        };
    }, [propBackgroundImage]);

    return (
        <div>
            <div
                className={`shadow-2xl box-border flex justify-center items-center h-[130px] md:px-3 sm:h-[150px] w-[130px] md:w-full flex-row rounded-xl overflow-hidden `}
            // style={frameDivStyle}
            >
                <div className='text-left font-others-capitalised text-black'>
                    <div className="text-center">
                        <img
                            className="h-[70px] max-w-full shrink-0 self-stretch overflow-hidden rounded-xl object-cover"
                            alt=""
                            src={propBackgroundImage} />
                    </div>
                    <b className=" text-center block flex-1 sm:leading-[20px] text-[12px] leading-[20.4px]">{wrodLimitValue}</b>
                </div>
            </div>
        </div>
    )
}