// src/app/components/Header.ts
"use client"; 
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    return (
        <header className="bg-zinc-200 text-green-950 p-4 flex justify-between items-center drop-shadow-md">
            {/* لوگو */}
            <div className="flex items-center">
            <img src="/logo.jpg" alt="Company Logo" className="h-12" />
            </div>

            <nav className="hidden lg:flex space-x-6">
                <Link href="/" className="hover:text-white">Home</Link>
                <Link href="/about-us" className="hover:text-white">About Us</Link>
                <Link href="/applications" className="hover:text-white">Applications</Link>
                <Link href="/environment" className="hover:text-white">Environmental Impact</Link>
                <Link href="/case-studies" className="hover:text-white">Case Studies</Link>
                <Link href="/contact" className="hover:text-white">Contact Us</Link>
            </nav>

            {/* دکمه‌های سمت راست (زبان و CTA) */}
            <div className="hidden lg:flex items-center">
                <button className="bg-green-950 text-white px-4 py-2 rounded hover:bg-white hover:text-green-950">Request a Quote</button>
                <div className="ml-4">
                    <select className="bg-zinc-100 text-green-950 border-none">
                    <option value="en">English</option>
                    <option value="fa">فارسی</option>
                    <option value="ar">العربية</option>
                    </select>
                </div>
            </div>

            {/* آیکون همبرگر برای موبایل */}
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    {isMenuOpen ? (
                    <XMarkIcon className="h-6 w-6 text-green-950" />
                    ) : (
                    <Bars3Icon className="h-6 w-6 text-green-950" />   
                    )}
                </button>
            </div>

            {/* منوی موبایل */}
            {isMenuOpen && (
            <div className="lg:hidden absolute top-16 right-0 bg-zinc-200 w-full p-4 ">
                <nav className="flex flex-col space-y-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <Link href="/about-us" className="hover:text-white">About Us</Link>
                <Link href="/applications" className="hover:text-white">Applications</Link>
                <Link href="/environment" className="hover:text-white">Environmental Impact</Link>
                <Link href="/case-studies" className="hover:text-white">Case Studies</Link>
                <Link href="/contact" className="hover:text-white">Contact Us</Link>
                </nav>
                <div className="mt-4">
                <button className="bg-green-950 text-white px-4 py-2 rounded hover:bg-white hover:text-green-950 w-full">Request a Quote</button>
                </div>
                <div className="mt-4">
                <select className="bg-green-950 text-white border-none w-full">
                    <option value="en">English</option>
                    <option value="fa">فارسی</option>
                    <option value="ar">العربية</option>
                </select>
                </div>
            </div>
            )}
        </header>
    );
}
