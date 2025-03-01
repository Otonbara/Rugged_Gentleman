"use client"
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
    const [searchOpen, setSearchOpen] = useState(false);

    const toggleSearchBar = () => {
        setSearchOpen(!searchOpen);
    };

    return (
        <div>
            <FaSearch 
                className="text-white cursor-pointer" 
                size={24} 
                onClick={() => setSearchOpen(!searchOpen)} 
            />
            {searchOpen && (
                <div className="absolute top-24 left-0 p-4 -mt-3 w-full bg-zinc-600 flex justify-center">
                    <input 
                        type="text" 
                        className="w-lvw h-10 rounded-md text-black font-bold text-lg"
                        placeholder="Search..."/>
                </div>
            )}
        </div>
    );
}