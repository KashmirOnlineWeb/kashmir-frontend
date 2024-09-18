import { NextPage } from "next";
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from "react";
import PackageIcon from "./packageIcon";

type HotelAmenitiesType = {
    amenity?: any;
}
const HotelAmenities: NextPage<HotelAmenitiesType> = ({ amenity }) => {
    console.log(amenity, "amenity")
    const [itemsToShow, setItemsToShow] = useState(3);

    const showMoreItems = () => {
        setItemsToShow(itemsToShow + 3);
    };

    const showMoreButtonText =
        itemsToShow < amenity?.length ? "Show More" : "No More";

    return (
        <div className="mt-5 ">
            <div className="flex flex-row justify-start">
                {amenity && amenity != undefined && <b className="relative leading-[28px]">Amenities</b>}
            </div>
            <div
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-3 text-left text-sm text-black font-others-capitalised"
            >
                {amenity?.slice(0, itemsToShow).map((item: {
                    amenities_icon: any; amenities_title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
                }, index: Key | null | undefined) => (

                    <div key={index} className="flex flex-row items-center justify-start gap-[7px] mt-1">
                        <PackageIcon
                            className="h-6 w-6 color--wedge"
                            groupName={item.amenities_icon}
                        />
                        <div>
                            {item.amenities_title}
                        </div></div>))}

            </div>
            <div className="mt-5">
                {itemsToShow < amenity?.length && (
                    <button
                        className="flex items-start bg-white justify-start mt-3 w-26 h-6 text-base text-mediumblue-100 cursor-pointer"
                        onClick={showMoreItems}
                    >
                        {showMoreButtonText}
                    </button>
                )}</div>
        </div>
    )
}
export default HotelAmenities
