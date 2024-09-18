// import { motion, useAnimation } from 'framer-motion';
// import { CSSProperties, useMemo, useEffect, useState } from 'react';
// import { useInView } from 'react-intersection-observer';

// type Property1Default1Type = {
//   adventure?: string;
//   min_price?: string;

//   /** Style props */
//   property1DefaultPosition?: CSSProperties['position'];
//   property1DefaultBackgroundImage?: CSSProperties['backgroundImage'];
//   property1DefaultTextDecoration?: CSSProperties['textDecoration'];
// };

// const Property1Default1: React.FC<Property1Default1Type> = ({
//   adventure = 'Default Adventure',
//   property1DefaultPosition = 'relative',
//   property1DefaultBackgroundImage = 'url("/property-1default@3x.png")',
//   property1DefaultTextDecoration,
//   min_price = 'Default Price',
// }) => {
//   const textAnimationControls = useAnimation();
//   const [textRef, textInView] = useInView({ triggerOnce: true });
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     if (textInView) {
//       textAnimationControls.start({ opacity: 1, y: 0, transition: { duration: 0.9 } });
//     } else {
//       textAnimationControls.start({ opacity: 0, y: 20, transition: { duration: 0.9 } });
//     }
//   }, [textInView, textAnimationControls]);

//   const property1Default1Style: CSSProperties = useMemo(() => {
//     return {
//       position: property1DefaultPosition,
//       backgroundImage: property1DefaultBackgroundImage,
//       textDecoration: property1DefaultTextDecoration,
//     };
//   }, [property1DefaultPosition, property1DefaultBackgroundImage, property1DefaultTextDecoration]);

//   return (
//     <motion.div
//       initial={false}
//       animate={isLoaded ? { backgroundPositionX: '0%' } : { backgroundPositionX: '100%' }}
//       transition={{ duration: 1, delay: 1 }}
//       viewport={{ once: true }}
//       onViewportEnter={() => setIsLoaded(true)}
//       className='relative box-border flex h-[352px] w-full flex-col items-center justify-end rounded-2xl bg-cover bg-[top] bg-no-repeat px-2 py-4 text-left font-others-capitalised text-5xl text-default-white property-container'
//       style={property1Default1Style}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

//       <motion.div ref={textRef} className="flex flex-col items-center justify-start gap-[8px] relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={textAnimationControls}
//           className="relative font-semibold leading-[32px]"
//         >
//           {adventure}
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={textAnimationControls}
//           className="relative text-sm font-medium leading-[24px]"
//         >
//           15+ packages
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={textAnimationControls}
//           className="flex flex-row items-center justify-start rounded-[12.86px] bg-mediumblue-100 px-[8.571428298950195px] py-[4.285714149475098px] text-center text-xs"
//         >
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={textAnimationControls}
//             className="relative font-medium leading-[16px]"
//           >
//             {min_price}
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Property1Default1;



// import { motion, useAnimation } from 'framer-motion';
// import { CSSProperties, useMemo, useEffect, useState } from 'react';
// import { useInView } from 'react-intersection-observer';

// type Property1Default1Type = {
//   adventure?: string;
//   min_price?: string;

//   /** Style props */
//   property1DefaultPosition?: CSSProperties['position'];
//   property1DefaultBackgroundImage?: CSSProperties['backgroundImage'];
//   property1DefaultTextDecoration?: CSSProperties['textDecoration'];
// };

// const Property1Default1: React.FC<Property1Default1Type> = ({
//   adventure = 'Default Adventure',
//   property1DefaultPosition = 'relative',
//   property1DefaultBackgroundImage = 'url("/property-1default@3x.png")',
//   property1DefaultTextDecoration,
//   min_price = 'Default Price',
// }) => {
//   const textAnimationControls = useAnimation();
//   const [textRef, textInView] = useInView({ triggerOnce: true });
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const animateText = async () => {
//       if (textInView) {
//         await textAnimationControls.start({ opacity: 1, y: 0, transition: { duration: 0.9 } });
//       } else {
//         await textAnimationControls.start({ opacity: 0, y: 20, transition: { duration: 0.9 } });
//       }
//     };

//     if (isLoaded) {
//       animateText();
//     }
//   }, [textInView, textAnimationControls, isLoaded]);

//   const property1Default1Style: CSSProperties = useMemo(() => {
//     return {
//       position: property1DefaultPosition,
//       backgroundImage: property1DefaultBackgroundImage,
//       textDecoration: property1DefaultTextDecoration,
//     };
//   }, [property1DefaultPosition, property1DefaultBackgroundImage, property1DefaultTextDecoration]);

//   return (
//     <motion.div
//       initial={{ scaleY: 0 }}
//       animate={isLoaded ? { scaleY: 1 } : {}}
//       transition={{ duration: 1, delay: 0.2 }}
//       viewport={{ once: true }}
//       onViewportEnter={() => setIsLoaded(true)}
//       className='relative box-border flex sm:h-[352px] h-[192px] w-full flex-col items-center justify-end rounded-2xl bg-cover bg-[top] bg-no-repeat px-2 py-4 text-left font-others-capitalised text-5xl text-default-white property-container'
//       style={property1Default1Style}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

//       <motion.div ref={textRef} className="flex flex-col items-center justify-start gap-[8px] relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={textAnimationControls}
//           className="relative font-semibold sm:leading-[32px] text-[16px] leading-[22.4px] sm:text-[24px]"
//         >
//           {adventure}
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={textAnimationControls}
//           className="relative text-sm font-medium leading-[24px] hidden sm:block"
//         >
//           15+ packages
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={textAnimationControls}
//           className="flex flex-row items-center justify-start bg-pink px-[8.571428298950195px] py-[4.285714149475098px] text-center text-xs"
//         >
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={textAnimationControls}
//             className="relative font-medium leading-[16px]"
//           >
//             {min_price}
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Property1Default1;

import { motion, useAnimation } from 'framer-motion';
import { CSSProperties, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type Property1Default1Type = {
  adventure?: string;
  min_price?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties['position'];
  property1DefaultBackgroundImage?: CSSProperties['backgroundImage'];
  property1DefaultTextDecoration?: CSSProperties['textDecoration'];
};

const Property1Default1: React.FC<Property1Default1Type> = ({
  adventure = 'Default Adventure',
  property1DefaultPosition = 'relative',
  property1DefaultBackgroundImage = 'url("/property-1default@3x.png")',
  property1DefaultTextDecoration,
  min_price = 'Default Price',
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, transition: { duration: 0.5 } });
    } else {
      controls.start({ opacity: 0, x: -20 });
    }
  }, [controls, inView]);

  const property1Default1Style: CSSProperties = {
    position: property1DefaultPosition,
    backgroundImage: property1DefaultBackgroundImage,
    textDecoration: property1DefaultTextDecoration,
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={controls}
      className='relative box-border flex sm:h-[352px] h-[192px] w-full flex-col items-center justify-end rounded-2xl bg-cover bg-[top] bg-no-repeat px-2 py-4 text-left font-others-capitalised text-5xl text-default-white property-container'
      style={property1Default1Style}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

      <div className="flex flex-col items-center justify-start gap-[8px] relative z-10">
        <div className="relative font-semibold sm:leading-[32px] text-[16px] leading-[22.4px] sm:text-[24px]">
          {adventure}
        </div>
        <div className="relative text-sm font-medium leading-[24px] hidden sm:block">
          15+ packages
        </div>
        <div className="flex flex-row items-center justify-start rounded-xl bg-pink px-[8.571428298950195px] py-[4.285714149475098px] text-center text-xs">
          <div className="relative font-medium leading-[16px]">
            {min_price}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Property1Default1;

