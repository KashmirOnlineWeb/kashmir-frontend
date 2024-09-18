import type { NextPage } from 'next';
import { type CSSProperties, useMemo } from 'react';

import VariantFilledTypePrimary from './variant-filled-type-primary';
import Link from 'next/link';

type SectionType = {
  sectionTitle?: string;
  buttonText?: string;
  sectionLink?: string;
  subTitle?: string;
  subTitle1?: string;
  linkRoute?: string;
  sectionTitleSecond?: string;

  /** Style props */
  propZIndex?: CSSProperties['zIndex'];
};

const Section: NextPage<SectionType> = ({
  sectionTitleSecond,
  sectionTitle,
  propZIndex,
  sectionLink,
  subTitle,
  subTitle1,
  linkRoute
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      zIndex: propZIndex,
    };
  }, [propZIndex]);

  return (
    <div
      className="z-[0] w-full flex flex-col items-start justify-start self-stretch text-left font-others-capitalised text-9xl text-black"
      style={frameDiv1Style}
    >
      <div className="flex flex-row items-start justify-between self-stretch">
        <b className="color--wedge relative sm:hoverUnderline text-[24px] max-sm:leading-[15px] font-bold sm:text-[36px]">{sectionTitle}</b>
        <div className='sm:block hidden'>
          <Link href={linkRoute || ''} className='[text-decoration:none]'>
          <VariantFilledTypePrimary
            label="View all"
            variantFilledTypePrimaryPosition="unset"
            variantFilledTypePrimaryBorderRadius="25px"
            // variantFilledTypePrimaryBackgroundColor="#0022cc"
            variantFilledTypePrimaryBoxSizing="border-box"
            variantFilledTypePrimaryCursor="pointer"
            variantFilledTypePrimaryBorder="none"
            labelDisplay="inline-block"
            sectionLink={sectionLink}
          />
          </Link>
        </div>

      </div>
      {sectionTitleSecond &&
        <div>
          <b className="leading-[40px] font-bold sm:text-[36px] color-pink relative sm:hoverUnderline text-[24px] sm:mt-[12px]">{sectionTitleSecond}</b>
        </div>}
      <div className="relative text-mid leading-[25.2px] text-text-gray-700">
        <p className="m-0 text-[16px] sm:text-[17px] sm:mt-[12px]">
          {subTitle}
          <span className='sm:block inline'>{subTitle1}</span>
        </p>
      </div>
    </div>
  );
};
export default Section;
