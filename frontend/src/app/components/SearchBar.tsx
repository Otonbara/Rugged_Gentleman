"use client"
import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
    const [searchOpen, setSearchOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    const toggleSearchBar = () => {
        setSearchOpen(!searchOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
            setSearchOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={searchRef}>
            <FaSearch 
                className="text-white cursor-pointer" 
                size={24} 
                onClick={toggleSearchBar} 
            />
            {searchOpen && (
                <div className="absolute top-24 left-0 p-4 -mt-3 w-full bg-zinc-600 flex justify-center z-50">
                    <input 
                        type="text" 
                        className="w-lvw h-10 rounded-md text-black font-bold text-lg"
                        placeholder="Search..."/>
                </div>
            )}
        </div>
    );
}