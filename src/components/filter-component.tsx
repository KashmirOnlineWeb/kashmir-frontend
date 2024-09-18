import type { NextPage } from 'next';

import Property1Default from './property1-default';
import ValueSlider from './ValueSlider';
import PackageIcon from './packageIcon';
import SortBy from './SortBy';


const FilterComponent: NextPage = () => {
  return (
    <div className="bg-default-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.05)] flex flex-col items-start justify-start gap-[9px] text-left text-xs text-black font-label-small-label">
      <div className="flex flex-col items-start justify-start pt-4 px-[70px] pb-2">
        <div className="flex flex-row items-start justify-start gap-[51px]">
          <div className="flex flex-col items-start justify-start gap-[4px]">

            <div className="flex flex-col items-center justify-start gap-4">
              <ValueSlider x={0} xmax={0} />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[4px]">
            <div className="flex flex-row items-center justify-center">
              <b className="relative leading-[18.69px]">Hotel Category</b>
            </div>
            <div className="grid sm:grid-cols-4 gap-1">
              <button type='submit' className="relative flex flex-col bg-white p-2 border-[1px] border-solid border-darkgray rounded-lg  cursor-pointer">
                <span className="font-semibold  leading-tight uppercase">5 <PackageIcon className="arrow  text-[12px]" groupName="material-symbols:star" /></span>
              </button>
              <button type='submit' className="relative flex flex-col bg-white p-2 border-[1px] border-solid border-darkgray rounded-lg  cursor-pointer">
                <span className="font-semibold  leading-tight uppercase">4 <PackageIcon className="arrow  text-[12px]" groupName="material-symbols:star" /></span>
              </button>
              <button type='submit' className="relative flex flex-col bg-white p-2 border-[1px] border-solid border-darkgray rounded-lg  cursor-pointer">
                <span className="font-semibold  leading-tight uppercase">3 <PackageIcon className="arrow  text-[12px]" groupName="material-symbols:star" /></span>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[4px]">
            <div className="flex flex-row items-center justify-center">
              <b className="relative leading-[18.69px]">Theme</b>
            </div>
            <div className="grid sm:grid-cols-4 gap-1">
              <SortBy titleName="Family" name="Family" id="Family" />
              <SortBy titleName="Couple" name="Couple" id="Couple" />
              <SortBy titleName="Friends" name="Friends" id="Friends" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-darkgray-200 w-[1440px] overflow-hidden" />
    </div>
  );
};
export default FilterComponent;
