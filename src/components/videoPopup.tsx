// import React from 'react';
// import { NextPage } from 'next';

// type VideoPropProps = {
//     videoUrl?: any;
//     closePopup?: any;
// }
// const VideoPopup: NextPage<VideoPropProps> = ({ videoUrl, closePopup }) => {
//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closePopup}>
//             <div className="bg-white p-4 rounded-md top relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
//                 <button className="absolute top- right-2 text-black" onClick={closePopup}>
//                     &times;
//                 </button>
//             </div>
//             <div className=" pb-9/16 h-0">
//                 <iframe
//                     className="absolute top-0 left-0 w-full h-full"
//                     src={videoUrl}
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     title="YouTube video"
//                 ></iframe>
//             </div>
//         </div>
//     );
// };

// export default VideoPopup;

import React from 'react';
import { NextPage } from 'next';

type VideoPropProps = {
    videoUrl?: any;
    closePopup?: () => void;
}

const VideoPopup: NextPage<VideoPropProps> = ({ videoUrl, closePopup }) => {
    return (
        <div className="fixed w-full inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closePopup}>
            <div className="bg-white p-5 rounded-md relative w-full h-[380px]" onClick={(e) => e.stopPropagation()}>
                <button className="absolute top-2 right-2 text-black" onClick={closePopup}>
                    &times;
                </button>
                <div className="relative pb-9/16 h-0" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                        className="absolute top-0 left-0 w-full h-[340px]"
                        src={videoUrl}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="YouTube video"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoPopup;
