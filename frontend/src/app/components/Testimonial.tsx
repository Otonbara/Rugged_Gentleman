"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonials = [
    {
        name: "John Doe",
        role: "Fashion Enthusiast",
        quote: "The best clothing store! Amazing quality and style.",
    },
    {
        name: "Jane Smith",
        role: "Style Influencer",
        quote: "Absolutely love their collections! Always trendy and unique.",
    },
    {
        name: "Michael Lee",
        role: "Entrepreneur",
        quote: "Great customer service and premium quality outfits.",
    },
    {
        name: "Sophia Adams",
        role: "Model",
        quote: "Their designs are always top-notch! Highly recommended.",
    },
    {
        name: "David Carter",
        role: "Business Owner",
        quote: "Excellent shopping experience with high-quality fashion!",
    },
];

export default function Testimonials() {
    return (
        <section className="mx-auto px-4 py-6 bg-gradient-to-r from-slate-300 to-zinc-600">
            <h2 className="text-4xl font-bold text-center mb-4">TESTIMONIALS</h2>
            <div className="flex items-center justify-center">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={false}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    spaceBetween={50}
                    grabCursor={true}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="w-full"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105">
                                <p className="text-xl italic font-satisfy">
                                    "{testimonial.quote}"
                                </p>
                                <h4 className="text-lg font-semibold mt-4">{testimonial.name}</h4>
                                <p className="text-gray-500">{testimonial.role}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
