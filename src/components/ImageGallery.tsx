/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';
import 'react-image-lightbox/style.css';
import PageWithLoaders from "./loader";
import Tooltip from '@mui/material/Tooltip';

interface ImageGalleryProps {
    images?: { file: string, alt: string, title: string, description: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    const propLoaderValue = 2;
    const [photoIndex, setPhotoIndex] = useState(0);
    const [showLoader, setShowLoader] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const defaultImages = [
        { file: "/assets/images/slider/1.jpg", alt: '', title: '', description: '' },
        // { file: "/assets/images/slider/2.jpg", alt: '', title: '', description: '' },
        // { file: "/assets/images/slider/3.jpg", alt: '', title: '', description: '' },
        // { file: "/assets/images/slider/4.jpg", alt: '', title: '', description: '' },
        // { file: "/assets/images/slider/5.jpg", alt: '', title: '', description: '' },
        // { file: "/assets/images/slider/6.jpg", alt: '', title: '', description: '' },
        // { file: "/assets/images/slider/7.jpg", alt: '', title: '', description: '' },
    ];

    // Parse the images string into an array
    let parsedImages = [];
    if (images && typeof images === 'string' && images.trim().length > 0) {
        try {
            parsedImages = JSON.parse(images);
        } catch (error) {
        }
    }

    // Convert images to the required format if they are strings
    const convertedImages = Array.isArray(parsedImages) 
        ? parsedImages.map(img => {
            if (typeof img === 'string') {
                return { file: img, alt: '', title: '', description: '' };
            }
            return img;
        })
        : [];

    const prefix = process.env.NEXT_PUBLIC_IMAGE_PREFIX || ''; // Add your desired prefix here

    const validImages = convertedImages
        .map(img => ({
            ...img,
            file: prefix + img?.file?.replace(/\\/g, '/')
        }))
        .filter(img => {
            const isValid = typeof img.file === 'string' && img.file.trim().length > 0;
            return isValid;
        });

    // Use valid images if available, otherwise use default images
    const imageList = validImages.length > 0 ? validImages : defaultImages;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (images) {
            setShowLoader(false); // Stop loading once images are loaded
        }
        setPhotoIndex(0); // Reset the photoIndex when the images prop changes
    }, [images]);

    useEffect(() => {
        if (isMobile) {
            const autoScrollInterval = setInterval(() => {
                setPhotoIndex((prevIndex) => (prevIndex + 1) % imageList.length);
            }, 2000); // Change image every 2 seconds

            return () => clearInterval(autoScrollInterval); // Clear interval on unmount
        }
    }, [isMobile, imageList.length]);

    const handleThumbnailClick = (index: number) => {
        setPhotoIndex(index);
    };

    const handlePrevImage = () => {
        const length = imageList.length;
        setPhotoIndex((photoIndex - 1 + length) % length);
    };

    const handleNextImage = () => {
        const length = imageList.length;
        setPhotoIndex((photoIndex + 1) % length);
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleNextImage,
        onSwipedRight: handlePrevImage,
        trackMouse: true
    });

    return (
        <div className="container mx-auto sm:px-4">
            <div className="sm:h-[500px] h-[200px] flex flex-row items-start justify-start gap-[8px] text-left text-[12.46px] text-default-white font-others-capitalised" {...handlers}>
                {showLoader ? <PageWithLoaders prop={propLoaderValue} /> :
                    <div
                        className="sm:flex sm:rounded-2xl self-stretch relative w-full lg:w-full overflow-hidden shrink-0 bg-cover bg-no-repeat bg-[top]"
                        style={{ backgroundImage: `url(${imageList[photoIndex].file})` }}
                    >
                        <div className="absolute max-sm:top-[40%] max-sm:left-5 max-sm:translate-y-1/2 sm:top-[60%] sm:left-16 w-1/2">
                            {/* <div className="text-[11px] sm:text-[20px] font-light ">
                                {imageList[photoIndex].title}
                            </div> */}
                            <div className="text-[20px] sm:text-[30px] font-black">
                                {imageList[photoIndex].title}
                            </div>
                            <div className="text-[8px] sm:text-[15px] mt-1 sm:mt-2 ">
                                {imageList[photoIndex].description}
                            </div>
                        </div>
                        <div className="absolute top-[50%] left-[16px] text-white cursor-pointer hidden sm:block" onClick={handlePrevImage}>
                            <FaArrowLeft size={24} />
                        </div>
                        <div className="absolute top-[50%] right-[16px] text-white cursor-pointer hidden sm:block" onClick={handleNextImage}>
                            <FaArrowRight size={24} />
                        </div>
                        {!isMobile && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 flex p-4 gap-4">
                            {imageList.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.file}
                                    alt={image.alt}
                                    className="cursor-pointer border-black rounded h-6 w-8 lg:w-16"
                                    onClick={() => handleThumbnailClick(index)}
                                />
                            ))}
                        </div>}
                    </div>
                }
            </div>
        </div>
    );
};

export default ImageGallery;