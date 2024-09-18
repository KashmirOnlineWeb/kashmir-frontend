/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import PackageIcon from "./packageIcon";

const HotelSearch: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-start justify-start text-left text-xs text-black font-label-small-label">
        <div className="bg-default-white [backdrop-filter:blur(12px)] flex flex-row items-center justify-start py-0 box-border gap-[24px]">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-col items-start justify-start pt-4 pb-6 pr-6">
              <form action="">
                <div className="rounded-[100px] bg-mediumblue-300 [backdrop-filter:blur(3.12px)] flex flex-row items-center justify-start py-2 pr-3 pl-6 lg:gap-[40px] border-[1px] border-solid border-darkgray">
                  <div className="flex flex-row items-center justify-start gap-6 lg:gap-[40px]">
                    <div className="flex flex-col items-start justify-center gap-[2px] w-[125px]">
                      <div className="flex flex-row items-center justify-center gap-[4px] pl-3">
                        <b className="relative leading-[18.69px]">
                          Starting from
                        </b>{" "}
                        <PackageIcon
                          className="arrow text-dark text-[20px]"
                          groupName="uim:angle-down"
                        />
                      </div>
                      <input
                        className="[border:none] font-label-small-label text-sm bg-[transparent] pt-0 pb-0 relative leading-[24px] text-black text-left"
                        placeholder="Choose travel dates"
                        type="text"
                      />
                    </div>
                    <div className="relative bg-smokegrey w-px h-10 overflow-hidden shrink-0" />
                    <div className="flex flex-col items-start justify-center gap-[2px] w-[125px]">
                      <div className="flex flex-row items-center justify-center gap-[4px] pl-3">
                        <b className="relative leading-[18.69px]">Check-in</b>
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
                    <div className="relative bg-smokegrey w-px h-10 overflow-hidden shrink-0" />
                    <div className="flex flex-col items-start justify-center gap-[2px] w-[125px]">
                      <div className="flex flex-row items-center justify-center gap-[4px] pl-3">
                        <b className="relative leading-[18.69px]">Check-out</b>
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
                    <div className="relative bg-smokegrey w-px h-10 overflow-hidden shrink-0" />
                    <div className="flex flex-col items-start justify-center gap-[2px] w-[125px]">
                      <div className="flex flex-row items-center justify-center gap-[4px] pl-3">
                        <b className="relative leading-[18.69px]">{`Rooms & Guest`}</b>
                        <PackageIcon
                          className="arrow text-dark text-[20px]"
                          groupName="uim:angle-down"
                        />
                      </div>
                      <input
                        className="[border:none] font-label-small-label text-sm bg-[transparent] pt-0 pb-0 relative leading-[24px] text-black text-left"
                        placeholder="1 Room, 2 Guest"
                        type="text"
                      />
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-0.5 bg-pink rounded-[100px] w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center box-border">
                    <PackageIcon
                      className="arrow text-white text-[24px]"
                      groupName="iconamoon:search-light"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HotelSearch;
