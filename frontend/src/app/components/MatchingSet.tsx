"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Buttons';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function MatchingSet () {
    const [activeIndex, setActiveIndex] = useState(0);
    
    return (
        <section className='mx-auto px-4 py-6 bg-slate-200'>
            <h2 className='text-4xl font-bold text-center mb-4'>MATCHING SETS</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={true}
                pagination={false}
                autoplay={{ delay: 4000 }}
                spaceBetween={80}
                slidesPerView={3}
                loop={true}
                centeredSlides={true}
                grabCursor={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                breakpoints={{
                    320: {slidesPerView: 1},
                    640: {slidesPerView: 2},
                    1024: {slidesPerView: 3},
                }}
                className='mb-6'>
                {[...Array(8).keys()].map((index) =>(
                    <SwiperSlide key={index}>
                        <div 
                            className={`relative w-[350px] h-[550px] transition-transform duration-300 ${
                                activeIndex === index ? "scale-90" : "scale-50 opacity-20"}`}>
                            <Image
                                src={`/Fits/${index + 1}.png`}
                                alt={`Fit ${index + 1}`}
                                layout='fill'
                                objectFit='cover'
                                className='drop-shadow-xl' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='flex justify-center'>
                <Link href='/'>
                    <Button label='SHOP NOW' onClick={() => console.log('Shop Now')} />
                </Link>
            </div>
        </section>
    )
}