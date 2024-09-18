/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { motion } from "framer-motion"

type DestinationCardType = {
  frameTitle?: any;
  locationName?: string;
  locationText?: string;
  subTitle?: string
};

const DestinationCard: NextPage<DestinationCardType> = ({
  frameTitle,
  locationName,
  locationText,
  subTitle
}) => {

  const defaultImage = (image: any) => {
    if (!image) return "/assets/images/default/default.png";
    let imgArr = image.split('/');
    if (!imgArr || imgArr.length === 0) return "/assets/images/default/default.png";
    const lastIndex = imgArr.length - 1;
    if (imgArr[lastIndex] !== "default.jpg" && imgArr[lastIndex] !== undefined) {
      return image;
    } else {
      return "/assets/images/default/default.png";
    }
  };

  return (
    <div className="box-border flex flex-col items-start justify-start rounded-2xl bg-default-white px-4 pt-6 pb-4 text-left font-others-capitalised text-lg text-black">
      <div className="flex relative flex-1 flex-col items-center justify-start gap-[8px] self-stretch">
        <motion.img
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className=" self-stretch overflow-hidden rounded-xl object-cover"
          alt=""
          src={defaultImage(frameTitle)}
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-30 rounded-xl"></div>

        <div className="flex absolute flex-col justify-center z-10 align-items-center right-0 left-0 top-0 bottom-0">
          <div className=" flex flex-col gap-4 justify-start">
            <b className="text-center text-[30px] text-white leading-[28px]">{locationName}</b>
              <b className=" px-3 text-center font-thin text-[15px] text-white leading-[20px]">{subTitle}</b>
          </div>
        </div>
        {
          locationText ? <div className="relative font-medium leading-[18px]">{locationText}</div> :
            // <div className="flex flex-col items-start justify-start text-sm text-text-gray-700">
            //   <div className="flex flex-row items-center justify-start gap-[12px]">
            //     <div className="relative font-medium leading-[24px]">
            //       Sightseeing
            //     </div>
            //     <div className="bg-gainsboro-100 relative h-[3px] w-[3px] rounded-[50%]" />
            //     <div className="relative font-medium leading-[24px]">Adventure</div>
            //   </div>
            // </div>
            <></>
        }
      </div>
    </div>
  );
};

export default DestinationCard;
