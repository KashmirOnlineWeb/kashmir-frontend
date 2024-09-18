import type { NextPage } from 'next';
import { type CSSProperties, useMemo } from 'react';

import PackageIcon from './packageIcon';

type Property1DefaultType = {
  vector?: string;
  className?: string;
  iconWidth?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties['position'];
  property1DefaultTransform?: CSSProperties['transform'];
  property1DefaultMargin?: CSSProperties['margin'];
  property1DefaultTop?: CSSProperties['top'];
  property1DefaultLeft?: CSSProperties['left'];
  property1DefaultRight?: CSSProperties['right'];
  property1DefaultZIndex?: CSSProperties['zIndex'];
};

const Property1Default: NextPage<Property1DefaultType> = ({
  vector,
  property1DefaultPosition,
  property1DefaultTransform,
  property1DefaultMargin,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultZIndex,
  property1DefaultRight,
  className,
  iconWidth,
}) => {
  const property1DefaultStyle: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition || 'unset',
      transform: property1DefaultTransform || 'unset', // Ensure transform has a default value
      margin: property1DefaultMargin || 'unset',
      top: property1DefaultTop || 'unset',
      left: property1DefaultLeft || 'unset',
      right: property1DefaultRight || 'unset',
      zIndex: property1DefaultZIndex || 'unset',
    };
  }, [
    property1DefaultPosition,
    property1DefaultTransform,
    property1DefaultMargin,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultZIndex,
    property1DefaultRight,
  ]);

  return (
    <div
      className={`relative flex sm:h-[32px] sm:w-[32px] h-[25px] w-[25px] sm:p-0 p-[4px] flex-row items-start overflow-hidden rounded-31xl border-solid  border-mediumblue-100 ${className}`}
      style={property1DefaultStyle}
    >
      <PackageIcon className={`${iconWidth} arrow`} groupName={vector} />
    </div>
  );
};
export default Property1Default;
