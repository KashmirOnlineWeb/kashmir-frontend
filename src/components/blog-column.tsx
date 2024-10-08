/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

type BlogColumnType = {
  frameLabel?: string;
  frameNumber?: string;
  frameImageLabel?: string;
  frameImageName?: string;
};

const BlogColumn: NextPage<BlogColumnType> = ({
  frameLabel,
  frameNumber,
  frameImageLabel,
  frameImageName,
}) => {
  return (
    <div className="font-lead-lead-2 flex w-full flex-row items-start justify-start gap-[20px] text-left text-xs text-black">
      <div className="flex flex-1 flex-col items-start justify-start gap-[24px]">
        <img
          className="relative h-[199px] w-[312px] shrink-0 overflow-hidden rounded-2xl object-cover"
          alt=""
          src={frameLabel}
        />
        <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
          <div className="flex flex-col items-start justify-start">
            <div className="relative font-medium leading-[16px]">
              RELIGIOUS VISIT / TAGS
            </div>
            <a
              className="relative text-xl font-medium leading-[30px] text-[inherit] [text-decoration:none]"
              href="#"
            >
              Blog Title
            </a>
          </div>
          <div className="flex flex-col items-start justify-end gap-[4px] text-sm">
            <div className="flex flex-row items-center justify-center">
              <div className="relative font-semibold leading-[16px]">
                By Allen Fernandes
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[8px] text-xs">
              <div className="relative font-medium leading-[16px]">
                Jun 30,2023
              </div>
              <div className="relative h-[5px] w-[5px] rounded-[50%] bg-black" />
              <div className="relative font-medium leading-[16px]">
                4 min read
              </div>
            </div>
          </div>
          <div className="font-work-sans flex flex-row items-center justify-start self-stretch text-smi">
            <div className="relative flex-1 leading-[18px] tracking-[-0.02em]">
              New year are the perfect time of the year to get rid of hustle
              bustle of daily activities of city life ...
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start justify-start gap-[24px]">
        <img
          className="relative h-[199px] w-[312px] shrink-0 overflow-hidden rounded-2xl object-cover"
          alt=""
          src={frameNumber}
        />
        <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
          <div className="flex flex-col items-start justify-start">
            <div className="relative font-medium leading-[16px]">
              RELIGIOUS VITSIT / TAGS
            </div>
            <a
              className="relative text-xl font-medium leading-[30px] text-[inherit] [text-decoration:none]"
              href="#"
            >
              Blog Title
            </a>
          </div>
          <div className="flex flex-col items-start justify-end gap-[4px] text-sm">
            <div className="flex flex-row items-center justify-center">
              <div className="relative font-semibold leading-[16px]">
                By Allen Fernandes
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[8px] text-xs">
              <div className="relative font-medium leading-[16px]">
                Jun 30,2023
              </div>
              <div className="relative h-[5px] w-[5px] rounded-[50%] bg-black" />
              <div className="relative font-medium leading-[16px]">
                4 min read
              </div>
            </div>
          </div>
          <div className="font-work-sans flex flex-row items-center justify-start self-stretch text-smi">
            <div className="relative flex-1 leading-[18px] tracking-[-0.02em]">
              New year are the perfect time of the year to get rid of hustle
              bustle of daily activities of city life ...
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start justify-start gap-[24px]">
        <img
          className="relative h-[199px] w-[312px] shrink-0 overflow-hidden rounded-2xl object-cover"
          alt=""
          src={frameImageLabel}
        />
        <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
          <div className="flex flex-col items-start justify-start">
            <div className="relative font-medium leading-[16px]">
              RELIGIOUS VITSIT / TAGS
            </div>
            <a
              className="relative text-xl font-medium leading-[30px] text-[inherit] [text-decoration:none]"
              href="#"
            >
              Blog Title
            </a>
          </div>
          <div className="flex flex-col items-start justify-end gap-[4px] text-sm">
            <div className="flex flex-row items-center justify-center">
              <div className="relative font-semibold leading-[16px]">
                By Allen Fernandes
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[8px] text-xs">
              <div className="relative font-medium leading-[16px]">
                Jun 30,2023
              </div>
              <div className="relative h-[5px] w-[5px] rounded-[50%] bg-black" />
              <div className="relative font-medium leading-[16px]">
                4 min read
              </div>
            </div>
          </div>
          <div className="font-work-sans flex flex-row items-center justify-start self-stretch text-smi">
            <div className="relative flex-1 leading-[18px] tracking-[-0.02em]">
              New year are the perfect time of the year to get rid of hustle
              bustle of daily activities of city life ...
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start justify-start gap-[24px]">
        <img
          className="relative h-[199px] w-[312px] shrink-0 overflow-hidden rounded-2xl object-cover"
          alt=""
          src={frameImageName}
        />
        <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
          <div className="flex flex-col items-start justify-start">
            <div className="relative font-medium leading-[16px]">
              RELIGIOUS VITSIT / TAGS
            </div>
            <a
              className="relative text-xl font-medium leading-[30px] text-[inherit] [text-decoration:none]"
              href="#"
            >
              Blog Title
            </a>
          </div>
          <div className="flex flex-col items-start justify-end gap-[4px] text-sm">
            <div className="flex flex-row items-center justify-center">
              <div className="relative font-semibold leading-[16px]">
                By Allen Fernandes
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[8px] text-xs">
              <div className="relative font-medium leading-[16px]">
                Jun 30,2023
              </div>
              <div className="relative h-[5px] w-[5px] rounded-[50%] bg-black" />
              <div className="relative font-medium leading-[16px]">
                4 min read
              </div>
            </div>
          </div>
          <div className="font-work-sans flex flex-row items-center justify-start self-stretch text-smi">
            <div className="relative flex-1 leading-[18px] tracking-[-0.02em]">
              New year are the perfect time of the year to get rid of hustle
              bustle of daily activities of city life ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogColumn;
