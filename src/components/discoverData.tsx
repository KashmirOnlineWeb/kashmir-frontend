import type { NextPage } from 'next';
import { type CSSProperties, useMemo } from 'react';
import { useState } from 'react';
import PackageIcon from './packageIcon';

type DiscoverDataType = {
    frameTitle?: CSSProperties['backgroundImage'] | any;
    name?: string;
    icon?: string;
};

const DiscoverData: NextPage<DiscoverDataType> = ({
    frameTitle,
    name,
    icon,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const frameDivStyle: CSSProperties = useMemo(() => {
        return {
            backgroundImage: frameTitle,
            // backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            transition: 'background-size 0.5s ease',

        };
    }, [frameTitle, isHovered]);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative box-border bg-[url("/assets/images/package/package.webp")] flex h-[118px] sm:h-[200px] sm:w-[200px] !md:w-full lg:w-full flex-row items-end justify-start rounded-xl overflow-hidden`}
            style={
                frameDivStyle
            }
        >
            {/* blue overlay ----> bg-gradient-to-t from-[#0022CC] */}
            {/* Black overlay  */}
            <div className="absolute inset-0 sm:h-[200px] h-[118px] sm:w-[200px] !md:w-full lg:w-full bg-black opacity-30 rounded-xl"></div>
            <div className='block absolute p-6 text-left font-others-capitalised text-9xl text-default-white'>
                <PackageIcon className="text-white" groupName={icon} />
                <b className="block flex-1 sm:leading-[20px] text-[16px] leading-[22.4px] font-bold">{name}</b>
            </div>
        </div>
    );
};

export default DiscoverData;

