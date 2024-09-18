import type { NextPage } from 'next';

import PackageIcon from './packageIcon';

type FormContainerType = {
  groupName?: string;
  section_title?: string;
  section_subtitle?: string;
  text?: string;
};

const FormContainer: NextPage<FormContainerType> = ({ text, groupName, section_title, section_subtitle }) => {
  return (
    // <div className="flex w-[150px] flex-col items-start justify-start gap-[12px] text-left font-others-capitalised text-lg text-mediumblue-100">
    //   <div className=" custom-bg-pink flex h-[100px] w-[100px] items-center justify-center rounded-full">
    //     <PackageIcon className="package color-pink" groupName={groupName} />
    //   </div>
    //   <div className="flex flex-col items-start justify-start gap-[5px]">
    //     <b className="relative flex w-[187px] text-black	items-center leading-[28px]">
    //       {section_title}
    //     </b>
    //     <div className="relative flex w-[164px] text-black	items-center text-base leading-[26px]">
    //       {section_subtitle}
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="flex justify-center items-center bg-mediumblue-100 w-[130px] rounded h-10 flex-col gap-[12px] text-left font-others-capitalised text-sm font-bold text-white">
        {text}
      </div>
      <span>
        <PackageIcon className=" color-pink" groupName={groupName} />
      </span>
    </>
  );
};

export default FormContainer;
