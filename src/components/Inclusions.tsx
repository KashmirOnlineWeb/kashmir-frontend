import { NextPage } from "next";
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from "react";
import PackageIcon from "./packageIcon";

type InclusionsType = {
    inclusions?: any;
}
const Inclusions: NextPage<InclusionsType> = ({ inclusions }) => {
    const [itemsToShow, setItemsToShow] = useState(3);

    const showMoreItems = () => {
        setItemsToShow(itemsToShow + 3);
    };

    const showMoreButtonText =
        itemsToShow < inclusions?.length ? "Show More" : "No More";

    return (
        <div className="mt-5 ">
            <div className="flex flex-row justify-start">
                {inclusions && inclusions != undefined && <b className="relative leading-[28px]">Inclusions</b>}
            </div>
            <div
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-3 text-left text-sm text-black font-others-capitalised"
            >
                {inclusions?.slice(0, itemsToShow).map((item: {
                    illusions_icon: any; illusions_title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
                }, index: Key | null | undefined) => (

                    <div key={index} className="flex flex-row items-center justify-start gap-[7px] mt-1">
                        <PackageIcon
                            className="h-6 w-6 color--wedge"
                            groupName={item.illusions_icon}
                        />
                        <div>
                            {item.illusions_title}
                        </div></div>))}

            </div>
            <div className="mt-5">
                {itemsToShow < inclusions?.length && (
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
export default Inclusions
