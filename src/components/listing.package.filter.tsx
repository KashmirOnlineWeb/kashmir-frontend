import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import ValueSlider from "./ValueSlider";
import PackageIcon from "./packageIcon";
import SortBy from "./SortBy";
import { HeaderFilter } from "@/services/listing.type.package";
import { packageCategoryNames } from "../utils/commonFunctions";

export const ListingPackageFilter: React.FC<HeaderFilter> = (props) => {
  const StarRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();
  const [clickedButton, setClickedButton] = useState<string | null>(null);


  // const { hotel_star } = router.query;
  // const onChange = async () => {
  //   if (StarRef.current) {
  //     await router.push({
  //       pathname: router.pathname,
  //       query: {
  //         ...router.query,
  //         hotel_star: StarRef.current?.value,
  //       },
  //     });
  //   }
  // };
  const { hotel_star } = router.query;
  const { budget_type } = router.query;
  const { category_name } = router.query;
  const onChange = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, opt: string) => {
    const target = event.currentTarget as HTMLButtonElement; // Type assertion
    const newStarValue = target.value;
    setClickedButton(newStarValue); // Update the clicked button
    await router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        [opt]: newStarValue,
      },
    });
  };

  useEffect(() => { }, [StarRef.current, hotel_star, budget_type, category_name]);
  return (
    <>
      <div className="bg-default-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.05)] flex-col items-start justify-start gap-[9px] text-left text-xs text-black font-label-small-label sm:flex ">
        <div className="flex flex-col items-start justify-start pt-4 px-[24px] overflow-x-auto overflow-y-hidden sm:px-[70px] pb-2">
          <div className="flex flex-row flex-wrap items-start justify-start lg:gap-[51px]">
            {props?.defaultProp && <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="flex flex-row items-center justify-center">
                {props.categories && (
                  <b className="relative color--wedge leading-[18.69px]">Package Categories</b>
                )}
              </div>
              <div className="flex items-center justify-start gap-2">
                {props.budget_type && props.budget_type.length && (
                  props.budget_type?.map((value, index) => (
                    <button
                      key={index}
                      // ref={StarRef}
                      value={value}
                      // onClick={onChange}
                      onClick={(e) => onChange(e, "budget_type")}
                      className={`${budget_type == value ? " bg-pink text-white " : "bg-white"} select-none m-auto  relative flex flex-col  p-2 border-[1px] border-solid border-darkgray rounded-lg  cursor-pointer`}
                    >{packageCategoryNames(value)}</button>
                  ))

                  // <ValueSlider
                  //   x={Number(props.price[0]) || 0}
                  //   xmax={(props?.price.slice(-1).pop() as number) || 0}
                  // />
                )}
                {/* {props.price && props.price.length >= 2 && (
                  <ValueSlider
                    x={Number(props.price[0]) || 0}
                    xmax={(props?.price.slice(-1).pop() as number) || 0}
                  />
                )} */}
              </div>
            </div>}
            {!props?.defaultProp &&
              <div className="flex flex-col items-start justify-center gap-[4px] lg:ml-0 ml-4">
                <div className="flex flex-row items-center justify-center">
                  {props.hotel_star && (
                    <b className="relative color--wedge leading-[18.69px]">Hotel Category</b>
                  )}
                </div>
                <div className="grid sm:grid-cols-4 gap-1">
                  {props.hotel_star?.map((value, index) => (
                    <button
                      key={index}
                      // ref={StarRef}
                      value={value}
                      // onClick={onChange}
                      onClick={(e) => onChange(e, "hotel_star")}
                      className={`select-none ${hotel_star == value ? " bg-pink text-white " : "bg-white"} relative flex flex-col p-2 border-[1px] border-solid border-darkgray rounded-lg  cursor-pointer`}
                    >
                      <span
                        key={index}
                        className="font-semibold  leading-tight uppercase"
                      >
                        {value}
                        <PackageIcon
                          className="arrow custom-height text-[12px]"
                          groupName="material-symbols:star"
                        />
                      </span>
                    </button>
                  ))}
                </div>
              </div>}
            {/* {props?.defaultProp && <div className="flex flex-col items-start justify-center max-md:mt-4 gap-[4px]">
              <div className="flex flex-row items-center justify-center">
                {props.categories && (
                  <b className="relative color--wedge leading-[18.69px]">Popular Packages</b>
                )}
              </div>
              <div className="flex items-center justify-start gap-2">
                {props?.categories?.map((value, index) => (
                  // <SortBy key={index} titleName={value} name={value} id={value} />
                  <button
                    key={index}
                    // ref={StarRef}
                    value={value}
                    // onClick={onChange}
                    onClick={(e) => onChange(e, "category_name")}
                    className={`select-none ${category_name == value ? " bg-pink text-white " : "bg-white"} relative flex flex-col p-2 border-[1px] border-solid border-darkgray rounded-lg  cursor-pointer`}
                  >{value}</button>
                ))}
              </div>
            </div>} */}

            {props?.defaultProp && (
              <div className="flex flex-col items-start justify-center max-md:mt-4 gap-[4px]">
                <div className="flex flex-row items-center justify-center">
                  {props.categories && (
                    <b className="relative color--wedge leading-[18.69px]">Popular Packages</b>
                  )}
                </div>
                <div className="flex items-center justify-start gap-2">
                  {(props?.categories ? [...props.categories] : [])
                    .sort((a, b) => a.localeCompare(b))
                    .map((value, index) => (
                      <button
                        key={index}
                        value={value}
                        onClick={(e) => onChange(e, "category_name")}
                        className={`select-none ${category_name == value ? "bg-pink text-white" : "bg-white"
                          } relative flex flex-col p-2 border-[1px] border-solid border-darkgray rounded-lg cursor-pointer`}
                      >
                        {value}
                      </button>
                    ))}
                </div>
              </div>
            )}


            <div className=" max-sm:hidden flex flex-col items-start justify-center max-md:mt-3 gap-[4px]">
              <div
                onClick={async () => {
                  await router.push({
                    pathname: router.pathname,
                    query: {
                      ...router.query,
                      price: null,
                      hotel_star: null,
                      destination: null,
                      max_capacity: null,
                      days: null,
                      nights: null,
                      available_slots: null,
                      category_name: null,
                      season: null,
                      budget_type: null
                    },
                  });
                }}
                className="relative sm:top-[20px] flex p-2 border-[1px] border-solid border-darkgray rounded-lg select-none cursor-pointer font-semibold color-pink no-underline"
              >
                RESET
              </div>
            </div>

          </div>
        </div>
        <div className="bg-darkgray-200 w-[1440px] overflow-hidden" />
      </div>

      {/* static ui */}
      {/* <div className="w-full sm:hidden block px-[24px] py-4">
        <h3 className="m-0 font-medium text-black">Choose Filters</h3>
        <div className="mt-4 flex gap-2 container overflow-x-auto">
          <select
            className="block bg-white border-2 border-[#9F9F9F80] rounded-full text-[12px] leading-6 font-bold pr-6 py-1"
          >
            <option value="">Package theme</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>

          <select
            className="block bg-white border-2 border-[#9F9F9F80] rounded-full text-[12px] leading-6 font-bold pr-6 py-1"
          >
            <option value="">Select budget</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>


          <select
            className="block bg-white border-2 border-[#9F9F9F80] rounded-full text-[12px] leading-6 font-bold pr-6 py-1"
          >
            <option value="">Hotel category</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <button className="w-[90%] text-[16px] mt-4 font-semibold rounded-full bg-mediumblue-100 text-white py-4 cursor-pointer">Search</button>
      </div> */}
    </>
  );
};

