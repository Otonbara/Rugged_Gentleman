"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaShoppingCart, FaTimes } from 'react-icons/fa';
import SearchBar from './SearchBar';
import { FaBars } from "react-icons/fa6";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-zinc-600">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div>
                    <Link href='/'>
                        <Image
                            src='/rugged_gentleman_logo.jpg'
                            width={50}
                            height={50}
                            alt="Rugged Gentleman Logo"/>
                    </Link>
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex flex-1 space-x-6 justify-center items-center">
                    <li>
                        <Link
                            href='/'
                            className="text-white font-bold hover:text-slate-300 transition">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/'
                            className="text-white font-bold hover:text-slate-300 transition">
                            TOPS
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/'
                            className="text-white font-bold hover:text-slate-300 transition">
                            BOTTOMS
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/'
                            className="text-white font-bold hover:text-slate-300 transition">
                            FOOTWEARS
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/'
                            className="text-white font-bold hover:text-slate-300 transition">
                            HOODIES & SWEATSHIRTS
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/'
                            className="text-white font-bold hover:text-slate-300 transition">
                            ACCESSORIES
                        </Link>
                    </li>
                </ul>

                {/* Profile, Cart, Search & Bars Icons */}
                <div className="flex space-x-4">
                    <SearchBar />
                    <Link href='/'>
                        <FaUser className="text-white" size={24} />
                    </Link>
                    <Link href='/'>
                        <FaShoppingCart className="text-white" size={24} />
                    </Link>
                    <div className="md:hidden">
                        <button className="text-white focus:outline-none" onClick={toggleSidebar}>
                            <FaBars size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar Navigation */}
            <div
                className={`fixed top-0 h-full w-full z-50 bg-zinc-600 shadow-md transform ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 md:hidden`}>
                <div className="flex justify-between items-center p-4">
                    {/* Logo */}
                    <div>
                        <Link href='/'>
                            <Image
                                src='/rugged_gentleman_logo.jpg'
                                width={50}
                                height={50}
                                alt="Rugged Gentleman Logo"/>
                        </Link>
                    </div>
                    {/* Close Button */}
                    <button className="text-white focus:outline-none" onClick={toggleSidebar}>
                        <FaTimes size={24} />
                    </button>
                </div>
                <ul className="flex flex-col items-center space-y-4 mt-2">
                    <li>
                        <Link
                            href='/'
                            className="text-white font-bold hover:text-slate-300 transition" onClick={toggleSidebar}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/'
                            className="text-white font-bold hover:text-slate-300 transition" onClick={toggleSidebar}>
                            TOPS
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/'
                            className="text-white font-bold hover:text-slate-300 transition" onClick={toggleSidebar}>
                            BOTTOMS
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/'
                            className="text-white font-bold hover:text-slate-300 transition" onClick={toggleSidebar}>
                            FOOTWEARS
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/'
                            className="text-white font-bold hover:text-slate-300 transition" onClick={toggleSidebar}>
                            HOODIES & SWEATSHIRTS
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/'
                            className="text-white font-bold hover:text-slate-300 transition" onClick={toggleSidebar}>
                            ACCESSORIES
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}