"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Contactbutton from "./contactbutton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="text-white flex justify-between items-center h-[100px] w-full max-w-screen-xl mx-auto px-4">

        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <img
              src="https://i.ibb.co/fzWckJHf/JAKOBLOGO.png"
              alt="jakob-dahlin-logo"
              className="w-44 h-auto rounded-lg transition-transform 
      duration-100 transform lg:hover:scale-95 "
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-8 text-lg items-center">
          <li>
            <Link href="/archive" className="hover:text-neutral-600 transition-colors mx-10">
              Archive
            </Link>
          </li>
          <li>
            <Link href="/license" className="hover:text-neutral-600 transition-colors mx-10">
              License
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-neutral-600 transition-colors mx-10">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-neutral-600 transition-colors mx-10">
              About
            </Link>
          </li>
        </ul>

        {/* Contact Button (Desktop only) */}
        <div className="hidden lg:flex items-center">
          <Contactbutton />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="sm:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu (Pushes Content Down Instead of Overlaying) */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px] py-4" : "max-h-0"
        } sm:hidden flex flex-col items-center space-y-4 text-lg `}
      >
        <Link href="/archive" className="transition-colors mx-10 py-2" onClick={() => setIsOpen(false)}>
          Archive
        </Link>
        <Link href="/license" className="transition-colors mx-10 py-2" onClick={() => setIsOpen(false)}>
          License
        </Link>
        <Link href="/blog" className="transition-colors mx-10 py-2" onClick={() => setIsOpen(false)}>
          Blog
        </Link>
        <Link href="/about" className="transition-colors mx-10 py-2" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link href="/contact" className="transition-colors mx-10 py-2" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>
    </>
  );
}
