import PackageIcon from "./packageIcon"
import Image from "next/image"
const HotelRooms = () => {
    return (
            <div>
                <h3 className="text-black">Choose your room</h3>
                <div className=" relative border-[1px] border-solid border-text-gray-300 rounded-xl h-50 px-2 mt-5 ">
                    <div>
                        <div className="flex justify-between">
                            <div>
                                <p className="text-md font-bold leading-7" >Classic</p>
                                <p className=" text-xs font-medium text-gray-400 leading-7">Room size : 100 sqft</p>
                            </div>
                            <div className="flex items-center pt-2">
                                <Image
                                    className="rounded-xl max-sm:w-[87px] max-sm:h-[65px]"
                                    src={"/assets/images/slider/1.jpg"}
                                    alt="rooms"
                                    width={212}
                                    height={144}
                                />
                            </div>
                        </div>
                        <div className="sm:absolute top-[80px] max-sm:mt-2 flex flex-row items-center gap-[16px]">
                            <div className="flex flex-row items-center gap-[10px]">
                                <PackageIcon
                                    className=" p-[5px] rounded-full bg-[#0022CC0D] color-pink"
                                    groupName="eva:phone-call-fill"
                                />
                                <div className=" text-sm font-medium tracking-[-0.02em]">
                                    Complimentary breakfast
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-[10px]">
                                <PackageIcon
                                    className="p-[5px] rounded-full bg-[#0022CC0D] color-pink"
                                    groupName="solar:tv-bold"
                                />
                                <div className=" text-sm font-medium tracking-[-0.02em]">
                                    TV
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="self-stretch bg-text-gray-300 h-[1px] overflow-hidden shrink-0 mt-4" />
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-base font-bold leading-[28px] color--wedge ">₹1762</p>
                            <p className="text-xs font-medium leading-[28px] text-gray-400"> + ₹ 200 taxes & fee</p>
                        </div>
                        <div className="flex flex-row items-start justify-start rounded-mini border-[1px] border-solid border-gray-400 px-[20px] py-[10px] text-black">
                            <b className="leading-[12px]">Selected</b>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default HotelRooms