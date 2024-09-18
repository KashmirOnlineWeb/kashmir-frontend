/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/button-has-type */
import type { NextPage } from 'next';

type CarouselButtonsType = {
  clickSlide: (e: React.MouseEvent<HTMLButtonElement>) => void;
  imgSrc?: string;
  classPosition?: string;
};
const CarouselButtons: NextPage<CarouselButtonsType> = ({
  clickSlide,
  imgSrc,
  classPosition,
}) => {
  return (
    <div>
      <button
        onClick={clickSlide}
        className={`bg-transparent ${classPosition}`}
      >
        <img src={imgSrc} alt="" className="relative" />
      </button>
    </div>
  );
};

export default CarouselButtons;
