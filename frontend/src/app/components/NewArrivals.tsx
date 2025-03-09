"use client"

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import Button from "./Buttons";
import { FaCartShopping, FaChevronLeft, FaChevronRight, FaDollarSign } from "react-icons/fa6";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export const products = [
    {
        id: 1,
        name: "Brown Corduroy Short Sleeve Shirt",
        price: "₦50,000",
        image: "/New_Arrivals/1.jpg",
        size: ["S", "M", "L", "XL", "2XL"],
    },
    {
        id: 2,
        name: "Grey Linen Short Sleeve Shirt",
        price: "₦50,000",
        image: "/New_Arrivals/2.jpg",
        size: ["S", "M", "L", "XL", "2XL"],
    },
    {
        id: 3,
        name: "Black Short Sleeve T-Shirt W/Collar",
        price: "₦30,000",
        image: "/New_Arrivals/3.jpg",
        size: ["S", "M", "L", "XL", "2XL"],
    },
    {
        id: 4,
        name: "Black Formal Trousers",
        price: "₦25,000",
        image: "/New_Arrivals/4.jpg",
        size: [30, 32, 34, 36, 38],
    },
    {
        id: 5,
        name: "Washed Blue Straight Jeans",
        price: "₦28,000",
        image: "/New_Arrivals/5.jpg",
        size: [30, 32, 34, 36, 38],
    },
    {
        id: 6,
        name: "Navy Blue Formal Trouser",
        price: "₦25,000",
        image: "/New_Arrivals/6.jpg",
        size: [30, 32, 34, 36, 38],
    },
    {
        id: 7,
        name: "Black Jordan Sweatpants",
        price: "₦15,000",
        image: "/New_Arrivals/7.jpg",
        size: ["S", "M", "L", "XL", "2XL"],
    },
    {
        id: 8,
        name: "Black Monkstrap Shoe",
        price: "₦55,000",
        image: "/New_Arrivals/8.jpg",
        size: [41, 42, 43, 44, 45],
    },
    {
        id: 9,
        name: "Nike Air Jordan 1 Black/White & Green",
        price: "₦60,000",
        image: "/New_Arrivals/9.jpg",
        size: [41, 42, 43, 44, 45],
    },
    {
        id: 10,
        name: "Black Chelsea Boots",
        price: "₦58,000",
        image: "/New_Arrivals/10.jpg",
        size: [41, 42, 43, 44, 45],
    },
]

export default function NewArrivals() {
    const swiperRef = useRef<any>(null);
    const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string | number }>({});
    const { addToCart } = useCart();
    const router = useRouter();

    // Size Selection Function
    const handleSizeSelect = (productId: number, size: string | number) => {
        setSelectedSizes((prevSizes) => ({
            ...prevSizes,
            [productId]: size,
        }));
    };

    // Buy Now Function
    const handleBuyNow = (product: { id: number; name: string; price: string; image: string; size: (string | number)[] }) => {
        if (!selectedSizes[product.id]) return;

        router.push(
            `/Checkout?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(
                product.price
            )}&image=${encodeURIComponent(product.image)}&size=${selectedSizes[product.id]}`
        );
    };

    return (
        <section className="mx-auto px-4 py-6 bg-zinc-200">
            <h2 className="text-4xl font-bold text-center mb-4">
                <span className="text-slate-600">NEW</span> ARRIVALS
            </h2>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-6 justify-items-center items-start mb-8">
                    {/* Image */}
                    <div className="relative w-full md:h-[506px] h-[400px]">
                        <Image
                            src="/newarrivals_banner.jpg"
                            fill
                            objectFit="contain"
                            alt="New Arrivals Image"
                            className="rounded-lg"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black bg-opacity-50 rounded-lg">
                            <h2 className="text-3xl font-bold text-white">
                                GET<br />THE<br />LATEST WITH US
                            </h2>
                        </div>
                    </div>

                    {/* Product Card Carousel */}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        pagination={false}
                        autoplay={false}
                        grabCursor={true}
                        spaceBetween={16}
                        slidesPerView={1}
                        loop={true}
                        breakpoints={{
                            768: { slidesPerView: 1 },
                            1024: { slidesPerView: 2 },
                        }}
                        className="w-full"
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="bg-white p-2 rounded-lg shadow-lg text-center h-full">
                                    <div className="relative w-full h-72">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            layout="fill"
                                            objectFit="fill"
                                            className="rounded-[4px]"
                                        />
                                    </div>
                                    <h3 className="text-md font-semibold mt-4">{product.name}</h3>
                                    <p className="text-gray-600">{product.price}</p>

                                    {/* Size Selection */}
                                    <div className="flex justify-center gap-1 mt-4 flex-wrap">
                                        {product.size.map((size) => (
                                            <button
                                                key={size}
                                                className={`px-4 py-2 border rounded-md transition ${
                                                    selectedSizes[product.id] === size
                                                        ? "bg-black text-white border-black"
                                                        : "bg-gray-800 hover:bg-gray-600 text-white"
                                                }`}
                                                onClick={() => handleSizeSelect(product.id, size)}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Select size message */}
                                    {!selectedSizes[product.id] && (
                                        <p className="text-sm text-red-500 mt-2">Please select a size</p>
                                    )}

                                    {/* Buttons */}
                                    <div className="flex justify-center items-center gap-2 mt-4">
                                        <button
                                            className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm transition ${
                                                selectedSizes[product.id]
                                                    ? "bg-gray-800 text-white hover:bg-gray-600"
                                                    : "bg-gray-400 text-gray-200 cursor-not-allowed"
                                            }`}
                                            disabled={!selectedSizes[product.id]}
                                            onClick={() => addToCart({ ...product, size: selectedSizes[product.id] })} // Pass selected size
                                        >
                                            Add to Cart <FaCartShopping />
                                        </button>

                                        <button
                                            className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm transition ${
                                                selectedSizes[product.id]
                                                    ? "bg-green-800 text-white hover:bg-green-600"
                                                    : "bg-gray-400 text-gray-200 cursor-not-allowed"
                                            }`}
                                            disabled={!selectedSizes[product.id]}
                                            onClick={() => handleBuyNow(product)}
                                        >
                                            Buy Now <FaDollarSign />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* Custom Navigation Buttons */}
                        <div className="flex justify-center items-center gap-4 mt-4">
                            <button
                                className="bg-gray-800 text-white p-3 rounded-lg z-10 hover:bg-gray-600"
                                onClick={() => swiperRef.current?.slidePrev()}
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                className="bg-gray-800 text-white p-3 rounded-lg z-10 hover:bg-gray-600"
                                onClick={() => swiperRef.current?.slideNext()}
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    </Swiper>
                </div>
            </div>

            <div className="flex justify-center">
                <Link href="/Tops">
                    <Button label="SHOP NOW" />
                </Link>
            </div>
        </section>
    );
}