/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { type CSSProperties, useMemo } from 'react';
import TruncateText from './TruncateText';
import { motion } from "framer-motion"

type Property1pack3Type = {
  frame95?: string;
  packageName?: string;
  totalDays?: string;
  location?: string;
  amenities1?: string;
  amenities2?: string;
  amenities3?: string;
  amenities4?: string;
  price?: string;
  lgClass?: string;
  minheightFromSpecialPackage?: string;

  /** Style props */
  property1pack3Position?: CSSProperties['position'];
  property1pack3ZIndex?: CSSProperties['zIndex'];
};

const Property1pack3: NextPage<Property1pack3Type> = ({
  frame95,
  packageName,
  totalDays,
  location,
  amenities1,
  amenities2,
  amenities3,
  price,
  property1pack3Position,
  property1pack3ZIndex,
  lgClass,
  minheightFromSpecialPackage
}) => {

  const defaultImage = (image: any) => {
    if (!image) return "/assets/images/default/default1.webp";
    let imgArr = image.split('/');
    if (!imgArr || imgArr.length === 0) return "/assets/images/default/default1.webp";
    const lastIndex = imgArr.length - 1;
    if (imgArr[lastIndex] !== "default.jpg" && imgArr[lastIndex] !== undefined) {
      return image;
    } else {
      return "/assets/images/default/default1.webp";
    }
  };

  const property1pack3Style: CSSProperties = useMemo(() => {
    return {
      position: property1pack3Position,
      zIndex: property1pack3ZIndex,
    };
  }, [property1pack3Position, property1pack3ZIndex]);

  return (
    <div
      className={`${lgClass} ${minheightFromSpecialPackage} relative box-border flex flex-col items-start justify-start gap-[16px] rounded-2xl border-[1px] border-solid border-text-gray-300 bg-default-white px-3 pb-4 pt-3 text-left font-others-capitalised text-lg text-black`}
      style={property1pack3Style}
    >
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <motion.img
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative h-[180px] max-w-full shrink-0 self-stretch overflow-hidden rounded-xl object-cover"
          alt=""
          src={defaultImage(frame95)}
        />
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className=" min-h-[55px] flex flex-col items-start justify-start">
            <b className="relative leading-[28px]">< TruncateText text={packageName} limit={6} /></b>
          </div>
          {totalDays ?
            <div className="flex flex-row items-start justify-start gap-[12px] text-2xs text-default-white">
              <div className="flex flex-row items-start justify-start rounded-mini bg-black py-1 pl-2 pr-[10.389999389648438px]">
                <b className="relative leading-[12px]">{totalDays}</b>
              </div>
              <div className="flex flex-row items-start justify-start rounded-mini border-[1px] border-solid border-black py-1 pl-2 pr-[10.389999389648438px] text-black">
                <b className="relative leading-[12px]">{location}</b>
              </div>
            </div>
            : ""}
        </div>
        <div className="flex flex-col items-start justify-start gap-[8px] text-sm text-text-gray-700">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="relative font-medium leading-[24px]">
              {amenities1}
            </div>
            <div className="relative h-[3px] w-[3px] rounded-[50%] bg-gainsboro" />
            <div className="relative font-medium leading-[24px]">
              {' '}
              {amenities2}
            </div>
            <div className="relative h-[3px] w-[3px] rounded-[50%] bg-gainsboro" />
            <div className="relative font-medium leading-[24px]">
              {amenities3}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start text-base">
        <b className="relative leading-[20px]">{price}</b>
      </div>
    </div>
  );
};
export default Property1pack3;
