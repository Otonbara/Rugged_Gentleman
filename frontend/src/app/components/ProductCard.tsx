"use client"

import Image from "next/image";
import { FaCartShopping, FaDollarSign } from "react-icons/fa6";
import { useState } from "react";

export default function ProductCard({ product }) {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleBuyNow = (product) => {
        if (!selectedSize) {
            alert("Please select a size before buying!");
            return;
        }
        console.log(`Buying ${product.name} in size ${selectedSize}`);
    };

    return (
        <div className="bg-white p-2 rounded-lg shadow-lg text-center h-full hover:scale-105 transition">
            {/* Product Image */}
            <div className="relative w-full h-72">
                <Image 
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="fill"
                    className="rounded-[4px]" 
                />
            </div>

            {/* Product Details */}
            <h3 className="text-md font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>

            {/* Add to Cart & Buy Now Buttons */}
            <div className="flex justify-center items-center gap-2 mt-4">
                <button
                    className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm transition ${
                        selectedSize ? "bg-gray-800 text-white hover:bg-gray-600" : "bg-gray-400 text-gray-200 cursor-not-allowed"
                    }`}
                    disabled={!selectedSize}
                >
                    {selectedSize ? "Add to Cart" : "Select Size"}
                    <FaCartShopping />
                </button>

                <button
                    className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm transition ${
                        selectedSize ? "bg-green-800 text-white hover:bg-green-600" : "bg-gray-400 text-gray-200 cursor-not-allowed"
                    }`}
                    disabled={!selectedSize}
                    onClick={() => handleBuyNow(product)}
                >
                    Buy Now
                    <FaDollarSign />
                </button>
            </div>

            {/* Size Selection */}
            <div className="flex justify-center gap-1 mt-4 flex-wrap">
                {product.size.map((size) => (
                    <button
                        key={size}
                        className={`px-3 py-1 border rounded-md transition ${
                            selectedSize === size ? "bg-black text-white border-black" : "bg-gray-800 hover:bg-gray-600 text-white"
                        }`}
                        onClick={() => handleSizeSelect(size)}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
}