import type { NextPage } from "next";

import Property1Default from "./property1-default";
import ValueSlider from "./ValueSlider";
import PackageIcon from "./packageIcon";
import SortBy from "./SortBy";

const CarFilter: NextPage = () => {
  return (
    <div className="bg-default-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.05)] flex flex-col items-start justify-start gap-[9px] text-left text-xs text-black font-label-small-label">
      <div className="flex flex-col items-start justify-start pt-4 px-[70px] pb-2">
        <div className="flex flex-wrap flex-row items-start justify-start gap-4 lg:gap-[51px]">
          <div className="flex flex-col items-start justify-center gap-[4px]">
            <div className="flex flex-row items-center justify-center">
              <b className="relative leading-[18.69px]">Car type</b>
            </div>
            <div className="grid sm:grid-cols-4 gap-1">
              <SortBy titleName="Sedan" name="Sedan" id="Sedan" />
              <SortBy titleName="Hatchback" name="Hatchback" id="Hatchback" />
              <SortBy titleName="SUV" name="SUV" id="SUV" />
              <SortBy titleName="Traveller" name="Traveller" id="Traveller" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[4px]">
            <div className="flex flex-row items-center justify-center">
              <b className="relative leading-[18.69px]">Car model</b>
            </div>
            <div className="grid sm:grid-cols-4 gap-1">
              <SortBy titleName="TATA" name="TATA" id="TATA" />
              <SortBy titleName="Toyota" name="Toyota" id="Toyota" />
              <SortBy titleName="Suzuki" name="Suzuki" id="Suzuki" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[4px]">
            <div className="flex flex-row items-center justify-center">
              <b className="relative leading-[18.69px]">Fuel type</b>
            </div>
            <div className="grid sm:grid-cols-4 gap-1">
              <SortBy titleName="Petrol" name="Petrol" id="Petrol" />
              <SortBy titleName="Diesel" name="Diesel" id="Diesel" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-darkgray-200 w-[1440px] overflow-hidden" />
    </div>
  );
};
export default CarFilter;
