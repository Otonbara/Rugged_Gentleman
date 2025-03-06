"use client"

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic (e.g., send to API)
    console.log("Subscribed with:", email);
    setEmail(""); // Clear input after submission
  };

  return (
    <footer className="bg-zinc-700 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Logo & Copyright */}
        <div className="mb-6 md:mb-0 flex flex-col items-center">
          <Image
            src="/rugged_gentleman_logo.jpg"
            alt="Logo"
            width={120}
            height={40}/>
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Navigation Links (Same as Navbar) */}
        <ul className="flex flex-col flex-wrap justify-center md:justify-start space-y-2 mb-6 md:mb-0">
          <li><Link href="/" className="hover:text-gray-300 transition">HOME</Link></li>
          <li><Link href="/" className="hover:text-gray-300 transition">TOPS</Link></li>
          <li><Link href="/" className="hover:text-gray-300 transition">BOTTOMS</Link></li>
          <li><Link href="/" className="hover:text-gray-300 transition">FOOTWEARS</Link></li>
          <li><Link href="/" className="hover:text-gray-300 transition">HOODIES & SWEATSHIRTS</Link></li>
          <li><Link href="/" className="hover:text-gray-300 transition">ACCESSORIES</Link></li>
        </ul>

        {/* Newsletter Subscription */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2 w-64 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="bg-gray-600 hover:bg-gray-500 transition px-4 py-2 rounded-lg text-white font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <a href="#" className="hover:text-gray-300 transition"><FaFacebook size={20} /></a>
          <a href="#" className="hover:text-gray-300 transition"><FaInstagram size={20} /></a>
          <a href="#" className="hover:text-gray-300 transition"><FaTwitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
