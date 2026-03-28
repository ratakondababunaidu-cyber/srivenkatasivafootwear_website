import React from 'react';
import { Link } from 'react-router-dom';
import {
  Instagram, Facebook, MessageCircle,
  MapPin, Phone, Mail, ArrowUpRight
} from 'lucide-react';
import logo from "../images/logo.jpeg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const shopCategories = [
    { name: 'Formal Shoes', path: '/collections?type=formal' },
    { name: 'Sports & Active', path: '/collections?type=sports' },
    { name: 'Kids Collection', path: '/collections?type=kids' },
    { name: 'Orthocare & Comfort', path: '/collections?type=ortho' },
    { name: 'Slippers & Sandals', path: '/collections?type=casual' },
  ];

  const quickLinks = [
    { name: 'About Us', path: '/#about' },
    { name: 'Our Collections', path: '/collections' },
    { name: 'Customer Reviews', path: '/#testimonials' },
    { name: 'Contact Us', path: '/#contact' },
  ];

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 pt-16 md:pt-20 pb-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">

          {/* BRAND */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Sri Venkata Siva Logo"
                className="w-10 h-10 rounded-full object-cover border border-zinc-200"
              />
              <span className="text-lg font-bold uppercase italic text-zinc-900">
                Sri Venkata Siva Footwear
              </span>
            </Link>

            <p className="text-zinc-600 text-sm leading-relaxed">
              Your trusted destination for premium footwear brands since 2001.
            </p>

            <div className="flex gap-3">
              <a href="https://www.instagram.com/srivenkatasivafootwear" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full border flex items-center justify-center text-zinc-400 hover:text-orange-500">
                <Instagram size={16} />
              </a>

              <a href="https://www.facebook.com/share/14Wap7wkGB7/" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full border flex items-center justify-center text-zinc-400 hover:text-blue-600">
                <Facebook size={16} />
              </a>

              <a href="https://wa.me/919848037385" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full border flex items-center justify-center text-zinc-400 hover:text-green-600">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h4 className="text-zinc-900 font-bold uppercase tracking-widest text-xs mb-6">
              Shop
            </h4>

            <ul className="space-y-3">
              {shopCategories.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-zinc-500 hover:text-orange-500 text-sm flex items-center gap-1 group">
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-zinc-900 font-bold uppercase tracking-widest text-xs mb-6">
              Company
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.path} className="text-zinc-500 hover:text-zinc-900 text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-zinc-900 font-bold uppercase tracking-widest text-xs mb-6">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-zinc-600">
              <div className="flex gap-2">
                <MapPin size={16} className="text-orange-600 mt-1" />
                <span>10-2-138, Theertha Katta St, Tirupati</span>
              </div>

              <div className="flex gap-2">
                <Phone size={16} className="text-orange-600" />
                <a href="tel:+919848037385">+91 98480 37385</a>
              </div>

              <div className="flex gap-2">
                <Mail size={16} className="text-orange-600" />
                <a href="mailto:ratakondababunaidu@gmail.com">
                  ratakondababunaidu@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-6 border-t text-center text-xs text-zinc-400">
          © {currentYear} Sri Venkata Siva Footwear. All rights reserved.
        </div>

      </div>
    </footer>
  );
}