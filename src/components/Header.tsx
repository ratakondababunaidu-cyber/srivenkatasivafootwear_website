import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../images/logo.jpeg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center border-b border-zinc-100 backdrop-blur-md bg-white/80">

      {/* LOGO */}
      <Link to="/" className="flex items-center gap-3">
        <img
          src={logo}
          alt="Sri Venkata Siva Logo"
          className="w-10 h-10 rounded-full object-cover border border-zinc-200 shadow-sm"
        />
        <span className="text-lg md:text-xl font-bold tracking-tight uppercase italic text-zinc-900">
          Sri Venkata Siva Footwear
        </span>
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-10 text-xs font-semibold uppercase tracking-widest text-zinc-500">
        <Link to="/" className="hover:text-zinc-900 transition-colors">Home</Link>
        <Link to="/collections" className="hover:text-zinc-900 transition-colors">Collections</Link>
        <a href="/#about" className="hover:text-zinc-900 transition-colors">About</a>
        <a href="/#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
      </div>

      {/* MOBILE HAMBURGER */}
      <button
        className="md:hidden text-zinc-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-zinc-100 shadow-md md:hidden">
          <div className="flex flex-col items-center py-6 gap-6 text-sm font-semibold uppercase tracking-widest text-zinc-700">

            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/collections" onClick={() => setIsOpen(false)}>Collections</Link>
            <a href="/#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="/#contact" onClick={() => setIsOpen(false)}>Contact</a>

          </div>
        </div>
      )}

    </nav>
  );
}