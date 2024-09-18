import { NextPage } from "next";
import React, { useState } from "react";

type ShopCart = {
    product?: any,
    onclose?: any,
}
const AddToCart: NextPage<ShopCart> = ({ product = {}, onclose }) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <div className="flex flex-col p-4 bg-white rounded-lg">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold color--wedge mb-2">My cart</h2>
                <button onClick={onclose} className="text-[#C82727] cursor-pointer bg-white text-xs font-semibold text-right">Cancel</button>
            </div>
            <div className="flex items-start mt-4 border border-solid border-[#D9DBE1] rounded-lg p-[10px]">
                <span className="flex">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-[140px] h-[140px] rounded-lg object-cover"
                    /></span>
                <div className="ml-4 flex-grow flex flex-col gap-1">
                    <h3 className="sm:text-xl text-lg font-semibold text-black">{product.name}</h3>
                    <p className="text-gray-600">
                        Size <span className="color-pink font-bold">{product.size}g</span>
                    </p>
                    <div className="flex items-center mt-2 gap-2">
                        <button
                            onClick={decreaseQuantity}
                            className="color--wedge w-6 h-6 text-center rounded-full border border-solid border-[#9F9F9F80] text-base font-medium"
                        >
                            -
                        </button>
                        <span className="flex justify-center items-center color-pink w-6 h-6 rounded border border-solid border-[#20202080] text-sm font-semibold ">{quantity}</span>
                        <button
                            onClick={increaseQuantity}
                            className="color--wedge w-6 h-6 text-center rounded-full border border-solid border-[#9F9F9F80] text-base font-medium"
                        >
                            +
                        </button>
                    </div>
                    <div className="leading-10">
                        <p className="color-pink font-bold text-lg">
                            ₹{(product.price * quantity).toFixed(0)}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddToCart;
