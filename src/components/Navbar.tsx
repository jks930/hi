"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons ke liye lucide-react use kiya hai

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="bg-gradient-to-r from-black via-blue-900 to-black text-white shadow-lg">
        
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LEFT - BRAND */}
          <h1 className="text-3xl font-extrabold tracking-wide">
            BRAND
          </h1>

          {/* CENTER - LINKS (Desktop) */}
          <div className="hidden md:flex gap-10 text-lg font-medium">
            <Link href="/" className="hover:text-gray-300 transition">Home</Link>
            <Link href="/about" className="hover:text-gray-300 transition">About</Link>
            <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
                        <Link href="/blog" className="hover:text-gray-300 transition">Blog</Link>

          </div>

          {/* RIGHT - BUTTON (Desktop) */}
          <div className="hidden md:block">
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
              Explore Now
            </button>
          </div>

          {/* MOBILE MENU BUTTON (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* MOBILE SIDEBAR / DROPDOWN */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col items-center gap-6 pb-8 pt-2 bg-black/90 backdrop-blur-md">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-xl hover:text-gray-300">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl hover:text-gray-300">About</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xl hover:text-gray-300">Contact</Link>
            <button className="bg-white text-gray-900 px-8 py-2 rounded-full font-semibold">
              Explore Now
            </button>
          </div>
        </div>
        
      </div>
    </nav>
  );
}