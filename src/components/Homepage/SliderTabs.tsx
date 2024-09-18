import React, { useState } from 'react';
// Import your PackageIcon component here
import PackageIcon from '../packageIcon';
import AutocompleteSearch from './AutocompleteSearch';

const SliderTabs = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="relative flex flex-col items-center justify-center gap-[8px] sm:w-full w-[80%]">
      {/* <div className="flex flex-col items-center justify-start">
        <div className="flex-row items-start justify-start gap-[32px] sm:flex hidden">
          
          <div className={`rounded-81xl box-border flex h-10 flex-col items-start justify-center ${activeTab === 'all' ? 'bg-mediumblue-200' : 'bg-lightblue'} px-0 py-[6.230769157409668px]`}>
            <div className="flex h-6 flex-row items-center justify-center gap-[6px]" onClick={() => setActiveTab('all')}>
              <PackageIcon className="arrow" groupName="material-symbols:card-travel" />
              <span className="relative font-medium leading-[18.69px] text-white no-underline cursor-pointer">All</span>
            </div>
            {activeTab === 'all' && <div className="relative h-0.5 w-[39px] rounded-md bg-default-white" />}
            
          </div>
          <div className={`rounded-81xl box-border flex h-10 flex-col items-start justify-center ${activeTab === 'packages' ? 'bg-mediumblue-200' : 'bg-lightblue'} px-0 py-[6.230769157409668px]`}>
            <div className="flex h-6 flex-row items-center justify-center gap-[6px]" onClick={() => setActiveTab('packages')}>
              <PackageIcon className="arrow" groupName="material-symbols:card-travel" />
              <span className="relative font-medium leading-[18.69px] text-white no-underline cursor-pointer">Packages</span>
            </div>
            {activeTab === 'packages' && <div className="relative h-0.5 w-[39px] rounded-md bg-default-white" />}
          </div>

          <div className={`rounded-81xl box-border flex h-10 flex-col items-start justify-center ${activeTab === 'hotel' ? 'bg-mediumblue-200' : 'bg-lightblue'} px-0 py-[6.230769157409668px]`}>
            <div className="flex h-6 flex-row items-center justify-center gap-[6px]" onClick={() => setActiveTab('hotel')}>
              <PackageIcon className="arrow" groupName="material-symbols:hotel-rounded" />
              <span className="relative font-medium leading-[18.69px] text-white no-underline cursor-pointer">Hotel</span>
            </div>
            {activeTab === 'hotel' && <div className="relative h-0.5 w-[39px] rounded-md bg-default-white" />}
          </div>

          <div className={`rounded-81xl box-border flex h-10 flex-col items-start justify-center ${activeTab === 'carrental' ? 'bg-mediumblue-200' : 'bg-lightblue'} px-0 py-[6.230769157409668px]`}>
            <div className="flex h-6 flex-row items-center justify-center gap-[6px]" onClick={() => setActiveTab('carrental')}>
              <PackageIcon className="arrow" groupName="bxs:car" />
              <span className="relative font-medium leading-[18.69px] text-white no-underline cursor-pointer">Car rental</span>
            </div>
            {activeTab === 'carrental' && <div className="relative h-0.5 w-[39px] rounded-md bg-default-white" />}
          </div>

        </div>
      </div> */}
 
      {/* <input className="relative box-border flex h-10 w-full flex-row items-center justify-between rounded-3xl bg-default-white px-6 py-2 font-others-capitalised text-xs font-medium [border:none]" type="text" placeholder="Search places , package , experience" /> */}
      <AutocompleteSearch searchType={activeTab} />
      <a href="#" className="flex items-center w-[30px] h-[30px] justify-center absolute lg:right-[5px] right-[8px] p-2 bg-pink text-white rounded-full sm:right-[40px]">
        <PackageIcon className="arrow scale-150	" groupName="iconamoon:search-light" />
      </a>
    </div>
  );
};

export default SliderTabs;
