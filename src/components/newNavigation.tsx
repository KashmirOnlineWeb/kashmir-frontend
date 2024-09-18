import { useEffect, useState } from 'react';
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from "next/router";
import image1 from "../../public/assets/images/icons/back-arrow.svg";

type NewNavigationType = {
    breadcrumb?: boolean;
    breadcrumbTitle?: string;
    navigationBarOptions?: any;
};

export const NewNavigation: React.FC<NewNavigationType> = ({
    breadcrumb = false,
    breadcrumbTitle = '',
    navigationBarOptions = []
}) => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);  // This flag is set after the component mounts, ensuring client-specific logic is executed only on the client.
    }, []);

    return (
        <>
            {breadcrumb && breadcrumbTitle ? (
                <div className="bg-default-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] h-[72px] flex items-center overflow-hidden no-underline leading-[40px] font-semibold text-black px-4">
                    <div className="container mx-auto">
                        <span className="font-normal">Home / </span>
                        <span className="font-semibold">{breadcrumbTitle}</span>
                    </div>
                </div>
            ) : isClient && (  // Ensures that the client-specific rendering occurs only after the component has mounted
                <div className="bg-default-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] sm:h-[72px] h-12 flex items-center overflow-hidden text-left text-sm text-black font-others-capitalised px-[24px] sm:px-4">
                    <div className="container mx-auto">
                        <div className="flex flex-row items-end justify-start sm:gap-[46px] gap-2 text-xs sm:text-sm overflow-x-auto container">
                            <div
                                onClick={router.back}
                                className="select-none cursor-pointer"
                            >
                                <Image
                                    src={image1.src}
                                    alt=""
                                    width={32}
                                    height={32}
                                    className="overflow-hidden"
                                />
                            </div>
                            {navigationBarOptions && navigationBarOptions?.map((data: any, index: any) => (
                                <Link key={index}
                                    href={`#${data?.routeId}`}
                                    className="no-underline leading-[40px] font-semibold text-black"
                                >
                                    <ScrollLink
                                        to={`${data?.routeId}`}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        <div className="relative leading-[40px] font-semibold z-[0] whitespace-nowrap">
                                            {data?.name}
                                        </div>
                                    </ScrollLink>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


export default NewNavigation;
