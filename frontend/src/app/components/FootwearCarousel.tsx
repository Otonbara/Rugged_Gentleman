"use client"

import { useRef } from "react";
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Link from 'next/link';
import Button from './Buttons';
import { FaCartShopping, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const products = [
    {
        id: 1, name: "Black Chelsea Boots", price: "₦58,000", image: "/Footwears/3.jpg",
    },
    {
        id: 2,
        name: "Brown Chelsea Boots",
        price: "₦58,000",
        image: "/Footwears/4.jpg",
    },
    {
        id: 3,
        name: "Brown Prada Penny Loafers",
        price: "₦45,000",
        image: "/Footwears/1.jpg",
    },
    {
        id: 4,
        name: "White Nike Airforce 1",
        price: "₦70,000",
        image: "/Footwears/5.jpg",
    },
    {
        id: 5,
        name: "Biege Vans Cruze",
        price: "₦60,000",
        image: "/Footwears/15.jpg",
    },
    {
        id: 6,
        name: "Black Vans Old Skool",
        price: "₦55,000",
        image: "/Footwears/6.jpg",
    },
    {
        id: 7,
        name: "Blue Suede Adidas Samba",
        price: "₦70,000",
        image: "/Footwears/7.jpg",
    },
    {
        id: 8,
        name: "Nike Airmax '00",
        price: "₦67,000",
        image: "/Footwears/16.jpg",
    },
    {
        id: 9,
        name: "All-Star Converse High",
        price: "₦60,000",
        image: "/Footwears/12.jpg",
    },
    {
        id: 10,
        name: "Black Crocs Clogs",
        price: "₦38,000",
        image: "/Footwears/18.jpg",
    },
]

export default function FootwearCarousel () {
    const swiperRef = useRef(null);

    return (
        <section className="mx-auto px-4 py-6 bg-slate-200">
            <h2 className="text-4xl font-bold text-center mb-4"><span className='text-slate-600'>TRENDING</span> FOOTWEARS</h2>
            <div className="container mx-auto">
                <div className="flex flex-col-reverse md:flex-row gap-6 justify-items-center items-center mb-8">
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
                        className="w-full">
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="bg-white p-2 rounded-lg shadow-lg text-center h-[450px]">
                                    <div className="relative w-full h-72">
                                        <Image 
                                            src={product.image}
                                            alt={product.name}
                                            layout="fill"
                                            objectFit="fill"
                                            className="rounded-[4px]" />
                                    </div>
                                    <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
                                    <div className="flex justify-center items-center gap-4">
                                        <p className="text-gray-600">{product.price}</p>
                                        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">
                                            <FaCartShopping/>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        {/* Custom Navigation Buttons */}
                        <div className="flex justify-center items-center gap-4 mt-4">
                            <button
                                className="bg-gray-800 text-white p-3 rounded-lg z-10 hover:bg-gray-600"
                                onClick={() => swiperRef.current?.slidePrev()}>
                                <FaChevronLeft/>
                            </button>
                            <button
                                className="bg-gray-800 text-white p-3 rounded-lg z-10 hover:bg-gray-600"
                                onClick={() => swiperRef.current?.slideNext()}>
                                <FaChevronRight/>
                            </button>
                        </div>
                    </Swiper>
                    <div className="relative w-full h-[400px] md:h-[506]">
                        <Image
                            src="/footwear_banner.jpg"
                            fill
                            objectFit="contain"
                            alt="New Arrivals Image"
                            className="rounded-lg" />
                        <div className='absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black bg-opacity-50 rounded-lg'>
                            <h2 className='text-3xl font-bold text-white'>WALK<br/>WITH<br/>CONFIDENCE</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Link href="/Footwears">
                    <Button label="SHOP NOW" onClick={() => console.log('Shop Now')}/>
                </Link>
            </div>
        </section>
    )
}