"use client"

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Button from './Buttons';
import Link from 'next/link';

export default function SwiperComponent () {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={false}
            pagination={false}
            autoplay={{ delay: 5000 }}
            spaceBetween={50}
            slidesPerView={1}>
            <SwiperSlide>
                <div className='relative w-full h-[550px]'>
                    <Image 
                        src="/Hero/Hero(1).jpg"
                        alt='Hero Image 1'
                        layout='fill'
                        objectFit='fill' />
                    <div className='absolute inset-0 flex flex-col items-center justify-center text-black p-6 text-center bg-white bg-opacity-20'>
                        <h2 className='text-3xl font-bold'>RUGGED GENTLEMAN</h2>
                        <p className='mt-2 text-lg font-bold'>DRESS GOOD, FEEL GOOD</p>
                        <Link href='/'>
                            <Button label='SHOP NOW' onClick={() => console.log('Shop Now')} />
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative w-full h-[550px]'>
                    <Image 
                        src="/Hero/Hero(2).jpg"
                        alt='Hero Image 2'
                        layout='fill'
                        objectFit='fill'/>
                    <div className='absolute inset-0 flex flex-col items-center justify-center text-black p-6 text-center bg-white bg-opacity-20'>
                        <h2 className='text-3xl font-bold'>LUXURY & STYLE</h2>
                        <p className='mt-2 text-lg font-bold'>LET'S ENRICH YOUR AURA</p>
                        <Link href='/'>
                            <Button label='SHOP NOW' onClick={() => console.log('Shop Now')} />
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative w-full h-[550px]'>
                    <Image 
                        src="/Hero/Hero(3).jpg"
                        alt='Hero Image 3'
                        layout='fill'
                        objectFit='fill'/>
                    <div className='absolute inset-0 flex flex-col items-center justify-center text-black p-6 text-center bg-white bg-opacity-20'>
                        <h2 className='text-3xl font-bold'>SHOP THE COLLECTION</h2>
                        <p className='mt-2 text-lg font-bold'>DISCOVER THE LATEST TRENDS AND EXCLUSIVE DESIGNS</p>
                        <Link href='/'>
                            <Button label='SHOP NOW' onClick={() => console.log('Shop Now')} />
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}