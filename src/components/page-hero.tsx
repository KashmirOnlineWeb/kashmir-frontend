/* eslint-disable no-template-curly-in-string */
import type { NextPage } from 'next';
import { type CSSProperties, useMemo, useState } from 'react';

import VariantFilledTypePrimary from './variant-filled-type-primary';
import { ListingPackageSearch } from './listing.package.search';
import PopUp from './popup_modal';

type PageHeroType = {
  heroTitle?: string;
  heroSubtitle?: string;
  variantLabel?: string;
  heroBg?: CSSProperties['backgroundImage'];
  isListingPage?: boolean;
};
const PageHero: NextPage<PageHeroType> = ({
  heroTitle,
  heroSubtitle,
  variantLabel,
  heroBg,
  isListingPage
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const bgHeroImg: CSSProperties = useMemo(() => {
    return {
      backgroundImage: heroBg,
    };
  }, [heroBg]);

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <div
      className="box-border parallax-effect flex min-h-[270px] w-full flex-col items-start justify-center gap-[24px] bg-black bg-cover bg-[center] bg-no-repeat py-0"
      style={bgHeroImg}
    >
      <div className={`"container mx-auto px-[24px] sm:px-4 ${isListingPage && "sm:text-start text-center "}`}>
        <div className="flex flex-col items-center justify-center gap-[8px] self-stretch pb-[24px] pt-16 sm:pt-0">
          <h1 className="relative self-stretch lg:text-[40px] sm:text-[32px] font-extrabold sm:leading-[54px] leading-[28.8px] text-[24px]">
            {heroTitle}
          </h1>
          <div className="relative inline-block text-base leading-[26px]">
            {heroSubtitle}
          </div>
        </div>
        {/* {variantLabel ? (
          <VariantFilledTypePrimary
            label={variantLabel}
            variantFilledTypePrimaryPosition="unset"
            variantFilledTypePrimaryBorderRadius="25px"
            variantFilledTypePrimaryBackgroundColor="#fff"
            variantFilledTypePrimaryJustifyContent="center"
            variantFilledTypePrimaryWidth="143px"
            labelColor="#0022cc"
            variantFilledTypePrimaryCursor="pointer"
            isListingPage={isListingPage}
            onClick={openModal}
          />
        ) : (
          ''
        )} */}
      </div>
      {/* {isOpen && <PopUp isOpen={isOpen} closeModal={closeModal} />} */}

      {
        isListingPage &&
        <div className='hidden px-[24px] w-full mt-[-40px]'>
          <ListingPackageSearch />

        </div>
      }
    </div>
  );
};
export default PageHero;
