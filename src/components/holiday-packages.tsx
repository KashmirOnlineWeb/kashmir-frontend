import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { type CSSProperties, useMemo } from "react";

import Property1Default from "./property1-default";

type HolidayPackages = {
  vector?: string;
  flightDetails?: string;
  classLink?: any;

  /** Style props */
  property1FlightDefaultPosition?: CSSProperties["position"];
  property1FlightDefaultBorder?: CSSProperties["border"];
  property1FlightDefaultHeight?: CSSProperties["height"];
  vectorIconWidth?: CSSProperties["width"];
  vectorIconHeight?: CSSProperties["height"];
  vectorIconOverflow?: CSSProperties["overflow"];
  vectorIconFlexShrink?: CSSProperties["flexShrink"];
  flightDetailsColor?: CSSProperties["color"];
  tab: "package" | "hotel";
};

const HolidayPackages: NextPage<HolidayPackages> = ({
  vector,
  flightDetails,
  property1FlightDefaultPosition,
  property1FlightDefaultBorder,
  property1FlightDefaultHeight,
  flightDetailsColor,
  classLink,
  tab,
}) => {
  const router = useRouter();
  const property1FlightDefaultStyle: CSSProperties = useMemo(() => {
    return {
      position: property1FlightDefaultPosition,
      border: property1FlightDefaultBorder,
      height: property1FlightDefaultHeight,
    };
  }, [
    property1FlightDefaultPosition,
    property1FlightDefaultBorder,
    property1FlightDefaultHeight,
  ]);

  const flightDetailsStyle: CSSProperties = useMemo(() => {
    return {
      color: flightDetailsColor,
    };
  }, [flightDetailsColor]);

  return (
    <div
      className={`
        // eslint-disable-next-line eqeqeq
        ${router.asPath == `/${classLink}?tab=${tab}`
          ? "active border-outline-grey flex relative box-border rounded-full border-[1px] border-solid border-blueborder  bg-pink px-[12.461538314819336px] py-[6.230769157409668px] text-left font-others-capitalised text-[12.46px] text-white"
          : "border-outline-grey relative flex box-border rounded-full border-[0.8px]  border-solid border-borderlight  bg-whitegrey px-[12.461538314819336px] py-[6.230769157409668px] text-left font-others-capitalised text-[12.46px] text-black"}
      `}
      style={property1FlightDefaultStyle}
    >
      <Link
        href={`${classLink}?tab=${tab}`}
        className="flex flex-row items-center justify-center no-underline"
      >
        <Property1Default
          vector={vector}
          property1DefaultPosition="unset"
          property1DefaultTransform=""
          property1DefaultMargin="unset"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          property1DefaultZIndex="unset"
          className={
            router.asPath === `/${classLink}?tab=${tab}`
              ? "items-center  border-0 bg-transparent p-0 text-white"
              : "items-center border-0 bg-transparent p-0 text-black"
          }
          iconWidth="w-6 h-6"
        />
        <div
          className={` whitespace-nowrap md:whitespace-pre
            ${router.asPath === `/${classLink}?tab=${tab}`
              ? "relative font-medium leading-[18.69px] text-white"
              : "relative font-medium leading-[18.69px] text-black"}
            `}
          style={flightDetailsStyle}
        >
          {flightDetails}
        </div>
      </Link>
    </div>
  );
};

export default HolidayPackages;
