"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaShoppingCart, FaTimes, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "TOPS", path: "/Tops" },
    { name: "BOTTOMS", path: "/Bottoms" },
    { name: "FOOTWEARS", path: "/Footwears" },
    { name: "HOODIES & SWEATSHIRTS", path: "/Hoodies_Sweatshirt" },
    { name: "ACCESSORIES", path: "/Accessories" },
  ];

  return (
    <nav className="bg-zinc-600 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/rugged_gentleman_logo.jpg" width={50} height={50} alt="Rugged Gentleman Logo" />
          </Link>
        </div>

        {/* Navigation Links (Hidden on Small & Tablet) */}
        <ul className="hidden lg:flex flex-1 space-x-6 justify-center items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className={`text-white font-bold hover:text-slate-300 transition ${
                  pathname === item.path ? "text-yellow-400 underline" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons & Hamburger */}
        <div className="flex space-x-4">
          <Link href="/">
            <FaUser className="text-white" size={24} />
          </Link>
          <Link href="/">
            <FaShoppingCart className="text-white" size={24} />
          </Link>

          {/* Hamburger Menu */}
          <button className="text-white lg:hidden focus:outline-none" onClick={toggleSidebar}>
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-zinc-700 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 lg:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          {/* Logo */}
          <Link href="/" onClick={closeSidebar}>
            <Image src="/rugged_gentleman_logo.jpg" width={50} height={50} alt="Logo" />
          </Link>
          {/* Close Button */}
          <button className="text-white focus:outline-none" onClick={closeSidebar}>
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-items-center space-y-4 p-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className={`text-white font-bold hover:text-slate-300 transition ${
                  pathname === item.path ? "text-yellow-400 underline" : ""
                }`}
                onClick={closeSidebar} // Close sidebar when link is clicked
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}