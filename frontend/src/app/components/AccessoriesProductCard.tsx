"use client";

import Image from "next/image";
import { FaCartShopping, FaDollarSign } from "react-icons/fa6";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export default function AccessoriesProductCard({ product }) {
    const { addToCart } = useCart();
    const router = useRouter();

    const handleBuyNow = () => {
        // Navigate to checkout without a size parameter
        router.push(`/Checkout?buyNow=true&name=${encodeURIComponent(product.name)}&price=${product.price}&image=${encodeURIComponent(product.image)}`);
    };

    return (
        <div className="bg-white p-2 rounded-lg shadow-lg text-center h-full hover:scale-105 transition">
            {/* Product Image */}
            <div className="relative w-full h-72">
                <Image 
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[4px]" 
                />
            </div>

            {/* Product Details */}
            <h3 className="text-md font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>

            {/* Add to Cart & Buy Now Buttons */}
            <div className="flex justify-center items-center gap-2 mt-4">
                <button 
                    className="flex items-center gap-1 px-3 py-1 rounded-md text-sm bg-gray-800 text-white hover:bg-gray-600 transition"
                    onClick={() => addToCart(product)}>
                    Add to Cart
                    <FaCartShopping />
                </button>

                <button
                    className="flex items-center gap-1 px-3 py-1 rounded-md text-sm bg-green-800 text-white hover:bg-green-600 transition"
                    onClick={handleBuyNow}
                >
                    Buy Now
                    <FaDollarSign />
                </button>
            </div>
        </div>
    );
}
