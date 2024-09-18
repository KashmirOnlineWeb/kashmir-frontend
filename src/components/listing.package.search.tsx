import React, { useCallback, useEffect, useRef } from "react";
import PackageIcon from "./packageIcon";
import { useRouter } from "next/router";
import { format, parse } from "date-fns";
import { router } from "next/client";

export const ListingPackageSearch: React.FC = () => {
  const router = useRouter();
  const { date, room, adult, child } = router.query;
  const DateRef = useRef<HTMLInputElement | null>(null);
  const RoomRef = useRef<HTMLInputElement | null>(null);
  const AdultRef = useRef<HTMLInputElement | null>(null);
  const ChildRef = useRef<HTMLInputElement | null>(null);

  const HandleOnClick = async () => {
    if (
      DateRef.current &&
      RoomRef.current &&
      AdultRef.current &&
      ChildRef.current
    ) {
      const formattedDate = format(
        (DateRef.current?.valueAsDate as Date) ||
          format(new Date(), "dd-MM-yyyy"),
        "dd-MM-yyyy"
      );
      await router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          date: formattedDate,
          room: RoomRef.current.value || "1",
          adult: AdultRef.current.value || "1",
          child: ChildRef.current.value || "0",
        },
      });
    }
  };
  const setValue = () => {
    if (DateRef.current && date) {
      DateRef.current.value = format(
        parse(date as string, "dd-MM-yyyy", new Date()),
        "yyyy-MM-dd"
      );
    }
    if (RoomRef.current && room) {
      RoomRef.current.value = room as string;
    }
    if (AdultRef.current && adult) {
      AdultRef.current.value = adult as string;
    }
    if (ChildRef.current && child) {
      ChildRef.current.value = child as string;
    }
  };
  useEffect(() => {
    setValue();
  }, [date, room, adult, child]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-start justify-start text-left text-xs text-black font-label-small-label">
        <div className="bg-default-white [backdrop-filter:blur(12px)] sm:flex hidden flex-row items-center justify-start py-0 box-border gap-[24px]">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-col items-start justify-start pt-4 pb-6 pr-6">
              <div>
                <div className="rounded-[100px] bg-mediumblue-300 [backdrop-filter:blur(3.12px)] flex flex-row items-center justify-start py-2 pr-3 pl-6 lg:gap-[40px] border-[1px] border-solid border-darkgray">
                  <div className="flex flex-row items-center justify-start gap-8 lg:gap-[40px]">
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-center gap-[4px] pl-3">
                        <b className="relative leading-[18.69px]">
                          When you planing?
                        </b>{" "}
                        <PackageIcon
                          className="arrow text-dark text-[20px]"
                          groupName="uim:angle-down"
                        />
                      </div>
                      <input
                        ref={DateRef}
                        className="[border:none] font-label-small-label text-sm bg-[transparent] pt-0 pb-0 relative leading-[24px] text-black text-left"
                        placeholder="When Planing"
                        type="date"
                      />
                    </div>
                    <div className="relative bg-smokegrey w-px h-10 overflow-hidden shrink-0" />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-center gap-[4px] pl-3">
                        <b className="relative leading-[18.69px]">{`Rooms - Adult - Child`}</b>
                        <PackageIcon
                          className="arrow text-dark text-[20px]"
                          groupName="uim:angle-down"
                        />
                      </div>
                      <div className={"w-full flex flex-row"}>
                        <input
                          ref={RoomRef}
                          className="[border:none] w-[80px] font-label-small-label text-sm bg-[transparent] pt-0 pb-0 relative leading-[24px] text-black text-left"
                          placeholder="Total Room"
                          type="number"
                        />
                        <input
                          ref={AdultRef}
                          className="[border:none] w-[80px] font-label-small-label text-sm bg-[transparent] pt-0 pb-0 relative leading-[24px] text-black text-left"
                          placeholder="Total Adult"
                          type="number"
                        />
                        <input
                          ref={ChildRef}
                          className="[border:none] w-[80px] font-label-small-label text-sm bg-[transparent] pt-0 pb-0 relative leading-[24px] text-black text-left"
                          placeholder="Total Child"
                          type="number"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={HandleOnClick}
                    className="disabled:bg-pink cursor-pointer [border:none] p-0.5 bg-pink rounded-[100px] w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center box-border"
                  >
                    <PackageIcon
                      className="arrow text-white text-[24px]"
                      groupName="iconamoon:search-light"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex sm:hidden flex-col py-0 box-border gap-[4px] w-full pb-11">
          <div className="flex flex-col items-start justify-start pt-4 pb-6 max-md:pr-0 w-[100%]">
            <div className="flex flex-col items-start justify-center gap-[2px] w-full rounded-[100px] bg-white py-2 pr-3 pl-6 border-[1px] border-solid border-darkgray">
              <div className="flex flex-row items-center justify-center gap-[4px] pl-3">
                <b className="relative leading-[18.69px]">When you planing?</b>{" "}
                <PackageIcon
                  className="arrow text-dark text-[20px]"
                  groupName="uim:angle-down"
                />
              </div>
              <input
                ref={DateRef}
                className="[border:none] font-label-small-label text-sm bg-[transparent] pt-0 pb-0 relative leading-[24px] text-black text-left"
                placeholder="When Planing"
                type="date"
              />
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <div className="w-[50%]">
              <div className="flex flex-col items-start justify-center gap-[2px] w-full rounded-[100px] bg-white py-2 pr-3 pl-6 border-[1px] border-solid border-darkgray">
                <div className="whitespace-nowrap flex flex-row items-center justify-center gap-[4px] pl-3">
                  <b className="relative leading-[18.69px]">Travel duration</b>{" "}
                  <PackageIcon
                    className="arrow text-dark text-[20px]"
                    groupName="uim:angle-down"
                  />
                </div>
                <input
                  className="[border:none] font-label-small-label text-sm bg-[transparent] pt-0 pb-0 relative leading-[24px] text-black text-left"
                  placeholder="Select duration"
                  type="text"
                />
              </div>
            </div>

            <div className="w-[50%]">
              <div className="flex flex-col items-start justify-center gap-[2px] w-full rounded-[100px] bg-white py-2 pr-3 pl-6 border-[1px] border-solid border-darkgray">
                <div className="flex flex-row items-center justify-center gap-[4px] pl-3 whitespace-nowrap">
                  <b className="relative leading-[18.69px]">Room and guest</b>{" "}
                  <PackageIcon
                    className="arrow text-dark text-[20px]"
                    groupName="uim:angle-down"
                  />
                </div>
                <input
                  className="[border:none] font-label-small-label text-sm bg-[transparent] pt-0 pb-0 relative leading-[24px] text-black text-left"
                  placeholder="When planning"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
