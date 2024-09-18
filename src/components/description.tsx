/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { motion } from "framer-motion"

type DescriptionType = {
  title?: string;
  subtitle?: string;
  content?: string | TrustedHTML | undefined;
  imageSrc?: string;
};

const Description: NextPage<DescriptionType> = ({
  title,
  subtitle,
  content,
  imageSrc,
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

  return (
    <div className=" container mx-auto box-border flex w-full lg:flex-row items-start justify-start lg:gap-[130px] pb-[34px] pt-[34px] md:pb-[68px] md:pt-[68px] text-9xl text-black flex-col-reverse px-[24px] sm:px-4">
      <div className="flex flex-col w-full items-start justify-start gap-[10px]">
        <b className="relative flex w-full items-center leading-[40px]">
          <span className="w-full">
            <h2 className="m-0 color--wedge leading-[40px] max-sm:mt-[20px] sm:hoverUnderline text-[24px] sm:text-[28px]">{title}</h2>
            <p className="m-0 color--wedge">{subtitle}</p>
          </span>
        </b>
        {
          content ? <div dangerouslySetInnerHTML={{ __html: content }} className="relative flex w-full items-center text-base leading-[26px]" />
            : ''
        }
      </div>
      <motion.img
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="relative md:h-[350px] md:w-[530px]  w-full shrink-0 overflow-hidden sm:object-cover "
        alt=""
        src={defaultImage(imageSrc)}
      />
    </div>
  );
};

export default Description;
