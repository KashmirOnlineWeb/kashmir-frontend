import type { NextPage } from 'next';
import { type CSSProperties, useMemo } from 'react';
import { motion } from "framer-motion"
import TruncateText from './TruncateText';

type FrameComponentType = {
  /** Style props */
  // frameDivPosition?: CSSProperties['position'];
  frameDivBackgroundImage?: CSSProperties['backgroundImage'];
  title?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  title,
  // frameDivPosition,
  frameDivBackgroundImage,
}) => {

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      // position: frameDivPosition,
      backgroundImage: frameDivBackgroundImage,
    };
  }, [frameDivBackgroundImage]);

  return (
    <motion.div
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className='relative box-border flex h-[118px] md:h-[198px] lg:w-full !md:w-full flex-row items-end justify-start rounded-3xl bg-[url("/frame-81@3x.png")] bg-cover bg-[top] bg-no-repeat p-6 text-left font-others-capitalised text-9xl text-default-white'
      style={frameDivStyle}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 md:h-[198px]  h-[118px] !md:w-full lg:w-full bg-black opacity-50 rounded-3xl"></div>

      <b className="relative flex-1 lg:leading-[25px] sm:text-[18px] text-[15px] leading-[21.4px] font-bold max-sm:truncate ">{title} </b>
    </motion.div>
  );
};

export default FrameComponent;