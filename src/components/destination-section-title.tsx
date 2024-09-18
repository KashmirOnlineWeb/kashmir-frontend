import type { NextPage } from 'next';
import VariantFilledTypePrimary from './variant-filled-type-primary';

type DestinationSectionTitleType = {
  topTitle?: string;
  topSubTitle?: any;
  viewAllDisable?: boolean;
  topTitle2?: string;
  smallTitle?: boolean;
};

const DestinationSectionTitle: NextPage<DestinationSectionTitleType> = ({
  topTitle,
  topTitle2,
  topSubTitle,
  viewAllDisable,
  smallTitle
}) => {
  return (
    <div className="flex flex-col items-start justify-start self-stretch underlineEffect">
      <div className="flex flex-row items-start justify-between self-stretch titleContainer">
        <b className={`color-pink relative title sm:hoverUnderline text-[14px] leading-[40px] font-bold`}>{topTitle}</b>
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
          <b className="leading-[40px] font-bold sm:text-[36px] color-pink relative title sm:hoverUnderline text-[24px]">{topTitle2}</b>
        </div> : ""}
      <h1 className="relative break-words sm:text-[30px] font-bold leading-[25.2px] color--wedge subtitle ">
        {topSubTitle}
      </h1>
    </div>
  );
};

export default DestinationSectionTitle;
