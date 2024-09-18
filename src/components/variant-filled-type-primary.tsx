/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/button-has-type */
import type { NextPage } from 'next';
import Link from 'next/link';
import { type CSSProperties, useMemo } from 'react';

type VariantFilledTypePrimaryType = {
  label?: string;
  sectionLink?: string;
  clickModal?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: any; // Add this line to include onClick prop
  isListingPage?: boolean;
  /** Style props */
  variantFilledTypePrimaryPosition?: CSSProperties['position'];
  variantFilledTypePrimaryBorderRadius?: CSSProperties['borderRadius'];
  variantFilledTypePrimaryBackgroundColor?: CSSProperties['backgroundColor'];
  variantFilledTypePrimaryBoxSizing?: CSSProperties['boxSizing'];
  variantFilledTypePrimaryCursor?: CSSProperties['cursor'];
  variantFilledTypePrimaryBorder?: CSSProperties['border'];
  labelDisplay?: CSSProperties['display'];
  variantFilledTypePrimaryJustifyContent?: CSSProperties['justifyContent'];
  variantFilledTypePrimaryWidth?: CSSProperties['width'];
  labelColor?: CSSProperties['color'];
  variantFilledTypePrimaryAlignSelf?: CSSProperties["alignSelf"];
};

const VariantFilledTypePrimary: NextPage<VariantFilledTypePrimaryType> = ({
  label,
  variantFilledTypePrimaryPosition,
  variantFilledTypePrimaryBorderRadius,
  variantFilledTypePrimaryBackgroundColor,
  variantFilledTypePrimaryBoxSizing,
  variantFilledTypePrimaryCursor,
  variantFilledTypePrimaryBorder,
  variantFilledTypePrimaryJustifyContent,
  variantFilledTypePrimaryAlignSelf,
  labelDisplay,
  variantFilledTypePrimaryWidth,
  labelColor,
  sectionLink,
  clickModal,
  onClick,
  isListingPage
}) => {
  const variantFilledTypePrimaryStyle: CSSProperties = useMemo(() => {
    return {
      position: variantFilledTypePrimaryPosition,
      borderRadius: variantFilledTypePrimaryBorderRadius,
      backgroundColor: variantFilledTypePrimaryBackgroundColor,
      boxSizing: variantFilledTypePrimaryBoxSizing,
      cursor: variantFilledTypePrimaryCursor,
      border: variantFilledTypePrimaryBorder,
      justifyContent: variantFilledTypePrimaryJustifyContent,
      width: variantFilledTypePrimaryWidth,
      alignSelf: variantFilledTypePrimaryAlignSelf,
    };
  }, [
    variantFilledTypePrimaryPosition,
    variantFilledTypePrimaryBorderRadius,
    variantFilledTypePrimaryBackgroundColor,
    variantFilledTypePrimaryBoxSizing,
    variantFilledTypePrimaryCursor,
    variantFilledTypePrimaryBorder,
    variantFilledTypePrimaryJustifyContent,
    variantFilledTypePrimaryWidth,
    variantFilledTypePrimaryAlignSelf,
  ]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      display: labelDisplay,
      color: labelColor,
    };
  }, [labelDisplay, labelColor]);

  return (
    <>
      {sectionLink ? (
        <Link
          className="relative flex flex-row items-center justify-start rounded-md bg-pink px-5 py-2.5 text-center font-others-capitalised text-sm text-default-white no-underline"
          style={variantFilledTypePrimaryStyle}
          href={sectionLink}
        >
          <div
            className="relative font-medium leading-[20px]"
            style={labelStyle}
          >
            {label}
          </div>
        </Link>
      ) : (
        <button
          className={`relative flex flex-row items-center bg-pink justify-start rounded-md  px-5 py-2.5 text-center font-others-capitalised text-sm text-default-white no-underline ${isListingPage ? "hidden sm:block" : "block"}`}
          style={variantFilledTypePrimaryStyle}
          onClick={clickModal}
        >
          <div
            className="relative cursor-pointer font-medium leading-[20px]"
            style={labelStyle}
            onClick={onClick}
          >
            {label}
          </div>
        </button>
      )}
    </>
  );
};
export default VariantFilledTypePrimary;
