import type { NextPage } from 'next';
import VariantFilledTypePrimary from './variant-filled-type-primary';

type SectionTitleType = {
  topTitle?: string;
  topSubTitle?: string;
  viewAllDisable?: boolean;
  topTitle2?: string;
  smallTitle?: boolean;
};

const SectionTitle: NextPage<SectionTitleType> = ({
  topTitle,
  topTitle2,
  topSubTitle,
  viewAllDisable,
  smallTitle
}) => {
  return (
    <div className="flex flex-col items-start justify-start self-stretch underlineEffect">
      <div className="flex flex-row items-start justify-between self-stretch titleContainer">
        <b className={`color--wedge relative title sm:hoverUnderline text-[24px] max-sm:leading-[15px] leading-[40px] font-bold ${smallTitle ? "sm:text-[36px]" : "sm:text-[36px]"}`}>{topTitle}</b>
        {viewAllDisable ? <div className="hidden sm:block">
          <VariantFilledTypePrimary
            label="View all"
            variantFilledTypePrimaryPosition="unset"
            variantFilledTypePrimaryBorderRadius="25px"
            // variantFilledTypePrimaryBackgroundColor="#0022cc"
            variantFilledTypePrimaryBoxSizing="border-box"
            variantFilledTypePrimaryCursor="pointer"
            variantFilledTypePrimaryBorder="none"
            labelDisplay="inline-block" onClick={function (): void {
              throw new Error('Function not implemented.');
            }} />
        </div> : ""}
      </div>
      {topTitle2 ?
        <div>
          <b className="leading-[40px] font-bold sm:text-[36px] color-pink relative title sm:hoverUnderline text-[24px] sm:mt-[12px]">{topTitle2}</b>
        </div> : ""}
      {topSubTitle && <div className="relative text-mid leading-[25.2px] text-text-gray-700 subtitle sm:mt-[12px]">
        {topSubTitle}
      </div>}
    </div>
  );
};

export default SectionTitle;

