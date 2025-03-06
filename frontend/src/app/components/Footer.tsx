"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail(""); // Clear input after submission
  };

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "TOPS", path: "/Tops" },
    { name: "BOTTOMS", path: "/Bottoms" },
    { name: "FOOTWEARS", path: "/Footwears" },
    { name: "HOODIES & SWEATSHIRTS", path: "/Hoodies_Sweatshirt" },
    { name: "ACCESSORIES", path: "/Accessories" },
  ];

  return (
    <footer className="bg-zinc-700 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <Image src="/rugged_gentleman_logo.jpg" alt="Logo" width={120} height={40} />
          <p className="text-sm text-gray-300 mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Navigation Links - Two Columns on Tablet */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          {navItems.map((item, index) => (
            <Link key={index} href={item.path} className="hover:text-gray-300 transition">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row md:items-center md:space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2 w-full md:w-64 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="bg-gray-600 hover:bg-gray-500 transition px-4 py-2 rounded-lg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400 mt-2 md:mt-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Icons - Always Centered */}
      <div className="flex justify-center space-x-4 mt-6">
        <a href="#" aria-label="Facebook" className="hover:text-gray-300 transition">
          <FaFacebook size={20} />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-gray-300 transition">
          <FaInstagram size={20} />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-gray-300 transition">
          <FaTwitter size={20} />
        </a>
      </div>
    </footer>
  );
}