// import type { NextPage } from 'next';
// import { motion } from "framer-motion"
// import { useEffect, useState } from 'react';

// type ThingstodoRightType = {
//     parseContentState?: any | undefined;
//     hasImage?: any;
// };
// const ThingstodoImagePlacementPlacement: NextPage<ThingstodoRightType> = ({ parseContentState, hasImage }) => {

//     return (
//         <>
//             <div className=" mt-8 container mx-auto max-md:flex-col-reverse box-border flex w-full sm:flex-row items-start justify-start gap-10 lg:gap-[80px] max-md:pb-[0px] lg:pb-[20px] sm:pt-[10px] text-9xl text-black flex-col-reverse sm:px-0">
//                 <div className="flex flex-col w-full items-start justify-start">
//                     <b className="relative flex w-full items-center leading-[40px]">
//                         <span className="w-full">
//                             <p className="m-0 text-black leading-[40px] sm:hoverUnderline text-[24px] sm:text-[28px]">{parseContentState?.repeater_title}</p>
//                             {/* <p className="m-0 color--wedge">{subtitle}</p> */}
//                         </span>
//                     </b>
//                     {
//                         parseContentState?.repeater_content ? <div dangerouslySetInnerHTML={{ __html: parseContentState?.repeater_content }} className={` relative floara-editor-ml-0 items-center text-base leading-[26px]`} />
//                             : ''
//                     }
//                 </div>
//                 {hasImage &&
//                     <motion.img
//                         whileHover={{ scale: 0.9 }}
//                         whileTap={{ scale: 0.9 }}
//                         transition={{ duration: 0.3, ease: 'easeInOut' }}
//                         className="relative sm:h-[350px] sm:w-[530px] w-full shrink-0 overflow-hidden sm:object-cover h-[245.66px]"
//                         alt=""
//                         src={parseContentState?.repeater_image}
//                     />}
//             </div>

//         </>
//     )
// }
// export default ThingstodoImagePlacementPlacement

// import type { NextPage } from 'next';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { useEffect, useState } from 'react';

// type ThingstodoRightType = {
//   parseContentState?: any | undefined;
//   hasImage?: any;
// };

// const ThingstodoImagePlacementPlacement: NextPage<ThingstodoRightType> = ({ parseContentState, hasImage }) => {
//   const { ref, inView } = useInView({
//     // triggerOnce: true, // Only trigger the animation once
//     threshold: 0.8, // Trigger when 10% of the image is in view
//   });

//   return (
//     <>
//       <div className="mt-8 container mx-auto max-md:flex-col-reverse box-border flex w-full sm:flex-row items-start justify-start gap-10 lg:gap-[80px] max-md:pb-[0px] lg:pb-[20px] sm:pt-[10px] text-9xl text-black flex-col-reverse sm:px-0">
//         <div className="flex flex-col w-full items-start justify-start">
//           <b className="relative flex w-full items-center leading-[40px]">
//             <span className="w-full">
//               <p className="m-0 text-black leading-[40px] sm:hoverUnderline text-[24px] sm:text-[28px]">
//                 {parseContentState?.repeater_title}
//               </p>
//             </span>
//           </b>
//           {parseContentState?.repeater_content ? (
//             <div
//               dangerouslySetInnerHTML={{ __html: parseContentState?.repeater_content }}
//               className="relative floara-editor-ml-0 items-center text-base leading-[26px]"
//             />
//           ) : (
//             ''
//           )}
//         </div>
//         {hasImage && (
//           <motion.img
//             ref={ref}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
//             transition={{ duration: 0.5, ease: 'easeOut' }}
//             className="relative sm:h-[350px] sm:w-[530px] w-full shrink-0 overflow-hidden sm:object-cover h-[245.66px]"
//             alt=""
//             src={parseContentState?.repeater_image}
//           />
//         )}
//       </div>
//     </>
//   );
// };

// export default ThingstodoImagePlacementPlacement;


/* eslint-disable @next/next/no-img-element */
// import type { NextPage } from 'next';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { useEffect, useState } from 'react';

// type ThingstodoImagePlacementPlacementProps = {
//     parseContentState: {
//         repeater_title: string;
//         repeater_content: string;
//         repeater_image: string;
//         repeater_has_dropdown: boolean;
//     };
//     hasImage: boolean;
// };

// const ThingstodoImagePlacementPlacement: NextPage<ThingstodoImagePlacementPlacementProps> = ({ parseContentState, hasImage }) => {
//     const { ref, inView } = useInView({
//         rootMargin: '500px 0px 0px 0px',
//         // threshold: 0.5, // Adjust this value based on how much of the section should be in view
//     });
//     const [fixedState, setFixedState] = useState(false)
//     const [currentImage, setCurrentImage] = useState(parseContentState.repeater_image);

//     const getFooterElement = document.getElementById("footerId")
//     console.log(getFooterElement,"getFooterElement")

//     useEffect(() => {
//         if (inView) {
//             setCurrentImage(parseContentState.repeater_image);
//         }
//     }, [inView, parseContentState.repeater_image]);

//     useEffect(() => {
//         const handleFixed = () => {
//             setFixedState(window.scrollY > 50)
//         }

//         window.addEventListener('scroll', handleFixed)

//         return (() => window.removeEventListener('scroll', handleFixed))
//     })

//     return (
//         <div
//             className="mt-8 container mx-auto max-md:flex-col-reverse box-border flex w-full sm:flex-row items-start justify-start gap-10 lg:gap-[80px] max-md:pb-[0px] lg:pb-[20px] sm:pt-[10px] text-9xl text-black flex-col-reverse sm:px-0"
//             ref={ref}
//         >
//             <div className="flex flex-col w-full items-start justify-start">
//                 <b className="relative flex w-full items-center leading-[40px]">
//                     <span className="w-full">
//                         <p className="m-0 text-black leading-[40px] sm:hoverUnderline text-[24px] sm:text-[28px]">
//                             {parseContentState.repeater_title}
//                         </p>
//                     </span>
//                 </b>
//                 {parseContentState.repeater_content && (
//                     <div
//                         dangerouslySetInnerHTML={{ __html: parseContentState.repeater_content }}
//                         className="relative w-[50%] floara-editor-ml-0 items-center text-base leading-[26px]"
//                     />
//                 )}
//             </div>
//             {hasImage && (
//                 <motion.img
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: inView ? 1 : 0 }}
//                     transition={{ duration: 0.5, ease: 'easeOut' }}
//                     className={`fixed top-[230px] right-[65px] rounded-xl sm:h-[300px] sm:w-[400px] w-full shrink-0  sm:object-cover h-[245.66px]`}
//                     alt="Content Image"
//                     src={currentImage}
//                 />
//             )}
//         </div>
//     );
// };

// export default ThingstodoImagePlacementPlacement;

import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useRef } from 'react';

type ThingstodoImagePlacementPlacementProps = {
    parseContentState: {
        repeater_title: string;
        repeater_content: string;
        repeater_image: string;
        repeater_has_dropdown: boolean;
    };
    hasImage: boolean;
};

const ThingstodoImagePlacementPlacement: NextPage<ThingstodoImagePlacementPlacementProps> = ({ parseContentState, hasImage }) => {
    const { ref, inView } = useInView({
        rootMargin: '500px 0px 0px 0px',
    });
    const [fixedState, setFixedState] = useState(false);
    const [footerView, setFooterView] = useState(false)
    console.log(footerView, "footerViewfooterView")
    const [currentImage, setCurrentImage] = useState(parseContentState.repeater_image);
    const footerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        footerRef.current = document.getElementById("footerId");
    }, []);

    useEffect(() => {
        if (inView) {
            setCurrentImage(parseContentState.repeater_image);
        }
    }, [inView, parseContentState.repeater_image]);

    useEffect(() => {
        const handleFixed = () => {
            setFixedState(window.scrollY > 50);
            if (footerRef.current) {
                const footerRect = footerRef.current.getBoundingClientRect();
                const isFooterInView = footerRect.top <= window.innerHeight && footerRect.bottom < 1060;
                console.log(isFooterInView ? "Footer is in view" : "Footer is not in view");
                setFooterView(isFooterInView)
            }
        };

        window.addEventListener('scroll', handleFixed);

        return () => window.removeEventListener('scroll', handleFixed);
    }, []);

    return (
        <div
            className="mt-8 container mx-auto max-md:flex-col-reverse box-border flex w-full sm:flex-row items-start justify-start gap-10 lg:gap-[80px] max-md:pb-[0px] lg:pb-[20px] sm:pt-[10px] text-9xl text-black flex-col-reverse sm:px-0"
            ref={ref}
        >
            <div className="flex flex-col w-full items-start justify-start">
                <b className="relative flex w-full items-center leading-[40px]">
                    <span className="w-full">
                        <p className="m-0 text-black leading-[40px] sm:hoverUnderline text-[24px] sm:text-[28px]">
                            {parseContentState.repeater_title}
                        </p>
                    </span>
                </b>
                {parseContentState.repeater_content && (
                    <div
                        dangerouslySetInnerHTML={{ __html: parseContentState.repeater_content }}
                        className="relative w-[50%] floara-editor-ml-0 items-center text-base leading-[26px]"
                    />
                )}
            </div>
            {hasImage &&
                <div>
                    {
                        footerView ? "" : (
                            <motion.img
                                initial={{ opacity: 0 }}
                                animate={{ opacity: inView ? 1 : 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className={`fixed top-[220px] right-[65px] rounded-xl sm:h-[300px] sm:w-[400px] w-full shrink-0 sm:object-cover h-[245.66px]`}
                                alt="Content Image"
                                src={currentImage}
                            />
                        )
                    }
                </div>
            }
        </div>
    );
};

export default ThingstodoImagePlacementPlacement;

