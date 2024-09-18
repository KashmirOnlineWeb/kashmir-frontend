import { useEffect, useState } from 'react';
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from "next/router";
import image1 from "../../public/assets/images/icons/back-arrow.svg";

type NavigationType = {
  breadcrumb?: boolean;
  breadcrumbTitle?: string;
  trueProp?: boolean;
  propTrue?: boolean;
};

export const Navigation: React.FC<NavigationType> = ({
  breadcrumb = false,
  trueProp = false,
  breadcrumbTitle = '',
  propTrue = false,
}) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [stickyBar, setStickyBar] = useState<any>(false)
  const [initialPosition, setInitialPosition] = useState<number | null>(null);
  
  useEffect(() => {
    if (isClient) {
      const navigationElement = document.getElementById('navigation');
      if (navigationElement) {
        setInitialPosition(navigationElement.offsetTop);
      }

      const handleScroll = () => {
        if (initialPosition !== null) {
          setStickyBar(window.scrollY > initialPosition);
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Call initially to set the correct state

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isClient, initialPosition]);

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
        <div id='navigation' className={`${stickyBar ? "fixed z-10 sm:top-[40px] max-sm:top-[60px]" : ""} w-full max-sm:py-2 bg-default-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] sm:h-[72px] h-12 flex items-center overflow-hidden text-left text-sm text-black font-others-capitalised px-[24px] sm:px-4`}>
          <div className="container mx-auto">
            <div className="flex flex-row items-end justify-start sm:gap-[46px] gap-4 text-xs sm:text-sm overflow-x-auto container">
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
              <div
                className="no-underline leading-[40px] font-semibold text-black cursor-pointer"
              >
                <ScrollLink
                  to="overview"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <div className="relative leading-[40px] font-semibold z-[0] whitespace-nowrap">
                    Overview
                  </div>
                </ScrollLink>
              </div>

              {renderLinksBasedOnProps(propTrue, trueProp)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

function renderLinksBasedOnProps(propTrue: boolean, trueProp: boolean) {
  if (propTrue) {
    return (
      <div
        className="no-underline leading-[40px] font-semibold text-black cursor-pointer"
      >
        <ScrollLink
          to="other-activity"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div className="relative leading-[40px] font-semibold z-[0] whitespace-nowrap">
            Other Activity
          </div>
        </ScrollLink>
      </div>
    );
  } else {
    return (
      <>
        <div
          className="no-underline leading-[40px] font-semibold text-black cursor-pointer"
        >
          <ScrollLink
            to="best-time-to-visit"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="relative leading-[40px] font-semibold z-[0] whitespace-nowrap">
              Best time to visit
            </div>
          </ScrollLink>
        </div>

        {trueProp ? (
          <div
            className="no-underline leading-[40px] font-semibold text-black cursor-pointer"
          >
            <ScrollLink
              to="Importantinformation"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <div className="relative leading-[40px] font-semibold z-[0] whitespace-nowrap">
                Important Information
              </div>
            </ScrollLink>
          </div>
        ) : (
          <>
            <div
              className="no-underline leading-[40px] font-semibold text-black cursor-pointer"
            >
              <ScrollLink
                to="highlight"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <div className="relative leading-[40px] font-semibold z-[0] whitespace-nowrap">
                  Highlight
                </div>
              </ScrollLink>
            </div>
            {!propTrue && (
              <div
                className="no-underline leading-[40px] font-semibold text-black cursor-pointer"
              >
                <ScrollLink
                  to="itenery"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <div className="relative leading-[40px] font-semibold z-[0] whitespace-nowrap">
                    Itinerary
                  </div>
                </ScrollLink>
              </div>
            )}
          </>
        )}
      </>
    );
  }
}

export default Navigation;