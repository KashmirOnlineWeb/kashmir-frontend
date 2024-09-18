/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { type CSSProperties, useMemo } from 'react';
import TruncateText from './TruncateText';
import { motion } from "framer-motion"
type Property1pack2Type = {
  frame95?: string;
  packageName?: string;
  totalDays?: string;
  location?: string;
  amenities1?: string;
  amenities2?: string;
  amenities3?: string;
  amenities4?: string;
  breakfast?: boolean;
  pacakgeText?: any;
  price?: string;
  taxes?: string;
  balcony?: any;
  inclusions?: string;
  star?: string;
  tax?: string;
  property1pack2Position?: CSSProperties['position'];
  property1pack2ZIndex?: CSSProperties['zIndex'];
  isPackage?: boolean;
  isHotel?: boolean;
  isAllListing?: boolean;
  lgClass?: string;
  minheightFromPackage?: string;
  perPerson?: string;
  categoryProp?:boolean;
};

const Property1pack2: NextPage<Property1pack2Type> = ({
  frame95,
  property1pack2Position,
  property1pack2ZIndex,
  packageName,
  totalDays,
  location,
  amenities1,
  amenities2,
  amenities3,
  amenities4,
  balcony,
  pacakgeText,
  star,
  breakfast,
  inclusions,
  price,
  tax,
  isPackage,
  isHotel,
  isAllListing,
  categoryProp,
  lgClass,
  minheightFromPackage,
  perPerson
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

  const property1pack2Style: CSSProperties = useMemo(() => {
    return {
      position: property1pack2Position,
      zIndex: property1pack2ZIndex,
    };
  }, [property1pack2Position, property1pack2ZIndex]);

  return (
    <>
      <div
        className={`${lgClass} relative box-border flex w-full flex-col items-start justify-start gap-[16px] rounded-2xl border-[1px] border-solid border-text-gray-300 bg-default-white px-3 pb-4 pt-3 text-left font-others-capitalised text-lg text-black`}
        style={property1pack2Style}
      >
        <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
          <motion.img
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="relative h-[180px] max-w-full shrink-0 self-stretch overflow-hidden rounded-xl object-cover"
            alt=""
            src={defaultImage(frame95)} />
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="flex min-h-[55px] flex-col items-start justify-start">
              <b className="relative color--wedge leading-[28px]"><TruncateText text={packageName} limit={4} /></b>
            </div>
            {isAllListing ?
              <div className="flex h-35 flex-row items-start justify-start gap-[12px] text-2xs text-default-white">
                {star ?
                  <div className="flex flex-row items-start justify-start rounded-mini border-[1px] border-solid border-pink  bg-pink py-1 pl-2 pr-[10.389999389648438px]">
                    <b className="relative leading-[12px]">{`${star} star`}</b>
                  </div>
                  :
                  <div className="flex flex-row items-start justify-start rounded-mini border-[1px] border-solid border-pink  bg-pink py-1 pl-2 pr-[10.389999389648438px]">
                    <b className="relative leading-[12px]">{totalDays}</b>
                  </div>}
                <div className="flex flex-row items-start justify-start rounded-mini border-[1px] border-solid border-black py-1 pl-2 pr-[10.389999389648438px] text-black">
                  <b className="relative break-all  leading-[12px]">{location}</b>
                </div>
              </div> : ""}
          </div>
         {categoryProp &&  <div className="flex flex-col items-start justify-start gap-[8px] text-sm text-text-gray-700">
            <div className="flex flex-row flex-wrap items-center justify-start sm:gap-[12px] gap-[8px] md:gap-[5px] lg:gap-[5px]">
              <div className="relative font-medium leading-[24px] text-[14px]">
                {amenities1}
              </div>
              <div className="relative h-[3px] w-[3px] rounded-[50%] bg-gainsboro" />
              <div className="relative font-medium leading-[24px] text-[14px]">
                {' '}
                {amenities2}
              </div>
              <div className="relative h-[3px] w-[3px] rounded-[50%] bg-gainsboro" />
              {amenities3 ? <div className="relative font-medium leading-[24px] text-[14px]">
                {amenities3}
              </div> : !isPackage ?
                <div className="relative font-medium leading-[24px]">
                  {balcony ? "Balcony" : ""}
                </div> : ""}
              <div className="relative h-[3px] w-[3px] rounded-[50%] bg-gainsboro" />
              <div className="relative font-medium leading-[24px] text-[14px]">
                {' '}
                {amenities4}
              </div>
            </div>
          </div>}

          {isHotel ? (<div className="relative flex w-[235px] min-h-[30px] items-center font-body text-smi tracking-[-0.02em] text-black">
            <TruncateText text={pacakgeText} limit={8} />
          </div>) : ""}

          {!isPackage ? (
            <div className="relative flex w-[235px] items-center font-body text-smi tracking-[-0.02em] text-black">
              {breakfast ? "Breakfast available" : "Breakfast available at extra charges"}
            </div>) : ""}

          <div className="flex flex-row items-center justify-start text-base">
            <b className="relative color-pink leading-[20px]">
              {price}<span className=' font-normal text-[10px] '>&nbsp;{perPerson}</span> <span className="text-xs font-normal">{tax}</span>
            </b>
          </div>
        </div>
      </div>

    </>
  );
};
export default Property1pack2;

