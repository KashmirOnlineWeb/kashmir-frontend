import type { NextPage } from 'next';
import { type CSSProperties, useMemo } from 'react';

type Property1ViewallType = {
  /** Style props */
  property1ViewallPosition?: CSSProperties['position'];
  property1ViewallBackgroundImage?: CSSProperties['backgroundImage'];
};

const Property1Viewall: NextPage<Property1ViewallType> = ({
  property1ViewallPosition,
  property1ViewallBackgroundImage,
}) => {
  const property1ViewallStyle: CSSProperties = useMemo(() => {
    return {
      position: property1ViewallPosition,
      backgroundImage: property1ViewallBackgroundImage,
    };
  }, [property1ViewallPosition, property1ViewallBackgroundImage]);

  return (
    <div
      className='relative box-border flex h-[352px] w-60 flex-col items-center justify-end rounded-2xl bg-[url("/property-1viewall@3x.png")] bg-cover bg-[top] bg-no-repeat px-2 py-4 text-left font-others-capitalised text-5xl text-default-white'
      style={property1ViewallStyle}
    >
      <div className="flex flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-start gap-[16px]">
          <div className="custom-button relative font-semibold leading-[32px] [text-decoration:underline]">
            View all
          </div>
          <div className="relative flex w-[183px] items-center justify-center text-center text-sm font-medium leading-[20px]">
            more than 120 packages to choose from
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Viewall;
