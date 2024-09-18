/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

type TripCardType = {
  labelId?: string;
  groupIdentifier?: string;
  testimonial?: string;
  name?: string;
  city?: string;
};

const TripCard: NextPage<TripCardType> = ({ labelId, groupIdentifier, testimonial, name, city }) => {
  return (
    <div className="box-border flex h-80 w-full flex-col items-start justify-between rounded-2xl border-[1px] border-solid border-text-gray-300 bg-default-white px-4 py-6 text-left font-others-capitalised text-lg text-black">
      <div className="flex flex-col items-start justify-start gap-[15px] self-stretch">
        <img className="relative h-[23px] w-[29px]" alt="" src={labelId} />
        <div className="relative self-stretch font-medium leading-[28px]">
          {testimonial}
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[16px] text-base">
        <img
          className="relative h-[50px] w-[50px]"
          alt=""
          src={groupIdentifier}
        />
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className="relative flex w-[152px] items-center font-medium leading-[24px]">
            {name}
          </div>
          <div className="relative flex w-[152px] items-center text-sm font-medium leading-[20px] text-text-gray-700">
            {city}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TripCard;
