import React, { useState } from "react";
import InputSlider from "react-input-slider";
import { ListingType } from "@/services/listing.type";
import { useRouter } from "next/router";

const ValueSlider: React.FC<ListingType.price> = (props) => {
  const [value, setValue] = useState(props?.x || 50);
  const router = useRouter();
  return (
    <>
      <div className="flex flex-row items-center justify-start gap-[8px]">
        <div className="flex flex-row items-center justify-center">
          <b className="relative leading-[18.69px]">Starting from</b>
        </div>
        <div className="relative text-sm leading-[24px]">
          <span>{`| ₹ ${props.x}- ₹ ${props.xmax}  `}</span>
        </div>
      </div>
      <InputSlider
        axis="x"
        x={value}
        xmax={props.xmax}
        xstep={2}
        onChange={({ x }) => {
          router.push({
            pathname: router.pathname,
            query: {
              ...router.query,
              price: x,
            },
          });
          setValue(x);
        }}
      />
    </>
  );
};

export default ValueSlider;
