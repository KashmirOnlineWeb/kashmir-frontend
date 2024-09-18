import type { NextPage } from "next";

import HolidayPackages from "./holiday-packages";
import Link from "next/link";

const PageTopBar: NextPage = () => {
  return (
    <div className="my-0 h-[72px] w-full bg-default-white [backdrop-filter:blur(12px)] px-[24px]">
      <div className="container mx-auto">
        <div className="container box-border flex flex-row overflow-scroll items-center justify-center gap-[24px] py-0">
          <Link href="/">
            <img className="lg:hidden block cursor-pointer" src="/assets/images/icons/back-arrow.svg" alt="" />
          </Link>
          <HolidayPackages
            vector="material-symbols:card-travel"
            flightDetails="Holiday Packages"
            property1FlightDefaultPosition="unset"
            property1FlightDefaultHeight="44px"
            vectorIconWidth="24px"
            vectorIconHeight="24px"
            vectorIconOverflow="hidden"
            vectorIconFlexShrink="0"
            classLink="listing"
            tab={"package"}
          />
          <HolidayPackages
            vector="ic:round-hotel"
            flightDetails="Hotel"
            property1FlightDefaultPosition="unset"
            property1FlightDefaultHeight="40px"
            vectorIconWidth="24px"
            vectorIconHeight="24px"
            vectorIconOverflow="hidden"
            vectorIconFlexShrink="0"
            classLink="hotel"
            tab={"package"}
          />
          {/* <HolidayPackages
            vector="mdi:car"
            flightDetails="Car rentals"
            property1FlightDefaultPosition="unset"
            property1FlightDefaultHeight="40px"
            vectorIconWidth="24px"
            vectorIconHeight="24px"
            vectorIconOverflow="hidden"
            vectorIconFlexShrink="0"
            classLink="car"
            tab={"package"}
          /> */}
          {/* <HolidayPackages
            vector="mdi:flight"
            flightDetails="Flight details"
            property1FlightDefaultPosition="unset"
            property1FlightDefaultHeight="40px"
            vectorIconWidth="20px"
            vectorIconHeight="20px"
            vectorIconOverflow="unset"
            vectorIconFlexShrink="unset"
            classLink="flight"
            tab={"package"}
          /> */}
        </div>
      </div>
    </div>
  );
};
export default PageTopBar;
