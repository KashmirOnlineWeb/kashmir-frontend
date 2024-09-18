/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { type CSSProperties, useMemo } from 'react';

type BlogCardFormType = {
  frameLabel?: string;

  /** Style props */
  propZIndex?: CSSProperties['zIndex'];
};

const BlogCardForm: NextPage<BlogCardFormType> = ({
  frameLabel,
  propZIndex,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      zIndex: propZIndex,
    };
  }, [propZIndex]);

  return (
    <div
      className="z-[1] flex w-[312px] flex-col items-start justify-start gap-[24px] text-left font-others-capitalised text-xs text-black"
      style={frameDiv2Style}
    >
      <img
        className="relative h-[199px] w-[312px] shrink-0 overflow-hidden rounded-2xl object-cover"
        alt=""
        src={frameLabel}
      />
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <div className="relative font-medium leading-[16px]">
          RELIGIOUS VITSIT / TAGS
        </div>
        <div className="relative text-xl font-medium leading-[30px]">
          Blog Title
        </div>
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <div className="relative font-medium leading-[16px]">Jun 30,2023</div>
          <div className="relative h-[5px] w-[5px] rounded-[50%] bg-black" />
          <div className="relative font-medium leading-[16px]">4 min read</div>
        </div>
        <div className="flex flex-row items-center justify-start self-stretch font-body text-smi">
          <div className="relative flex-1 leading-[18px] tracking-[-0.02em]">
            New year are the perfect time of the year to get rid of hustle
            bustle of daily activities of city life ...
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCardForm;
