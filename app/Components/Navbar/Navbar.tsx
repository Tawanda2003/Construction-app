// components/Navbar.tsx

'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FaPhoneAlt } from "react-icons/fa";
import pic from '@/public/logo-regular-free-img.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between   top-0 z-50 mt-[20px]">
      {/* Logo */}
      <div className=" flex items-center">
        <Image src={pic} alt="Logo" width={100} height={200} className="object-contain ml-[50px]" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6 text-white font-medium mr-[50px]">
        <Link href="/" className=" text-amber-300">Home</Link>
        <Link href="./Services" className="hover:text-amber-300">Services</Link>
        <Link href="/skills" className="hover:text-amber-300">Skills</Link>
        <Link href="/about" className="hover:text-amber-300">About Me</Link>
        <Link href="/contact" className="hover:text-amber-300">Contact</Link>
        <a href="tel:+263 77 989 0522" className="flex items-center gap-2 text-white hover:underline">
          <FaPhoneAlt />
          +263 77 989 0522
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button onClick={toggleMenu} className="md:hidden text-2xl text-white focus:outline-none ">
        ☰
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full flex flex-col items-center bg-white border-t shadow-md md:hidden space-y-4 py-6 text-gray-800 font-medium">
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <Link href="/projects" onClick={toggleMenu}>Projects</Link>
          <Link href="/skills" onClick={toggleMenu}>Skills</Link>
          <Link href="/about" onClick={toggleMenu}>About Me</Link>
          <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          <a href="tel:+263779890522" onClick={toggleMenu} className="flex items-center gap-2 text-blue-700">
            <FaPhoneAlt />
            +263 77 989 0522
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;