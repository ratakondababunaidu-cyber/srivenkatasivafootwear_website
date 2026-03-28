import React from 'react';
import { motion } from 'motion/react';
import about from '../images/about.jpg';
export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">

        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10 shadow-2xl shadow-zinc-200"
          >
            <img 
              src={about} 
              alt="Sri Venkata Siva"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Glow Effects */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-500/5 blur-[100px] rounded-full"></div>
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 space-y-8">

          {/* Heading */}
          <div className="space-y-4">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.3em]">
              Since 2001
            </span>

            <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none tracking-tighter text-zinc-900">
              Tradition of <br /> Quality & <br /> Comfort
            </h2>
          </div>

          {/* Description */}
          <p className="text-zinc-600 text-lg leading-relaxed max-w-xl">
            At Sri Venkata Siva Footwear, we believe that every step reflects tradition, comfort, and trust. 
            Established in 2001, our journey has been rooted in delivering quality footwear that blends 
            timeless craftsmanship with everyday usability.
          </p>

          <p className="text-zinc-500 text-sm leading-relaxed max-w-xl">
            With decades of experience, we focus on durability, comfort, and style. 
            Every product is carefully designed using high-quality materials to ensure long-lasting 
            performance while maintaining a classic aesthetic that suits every generation.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-100">
            <div>
              <p className="text-3xl font-black italic text-zinc-900">25+</p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                Years of Trust
              </p>
            </div>

            <div>
              <p className="text-3xl font-black italic text-zinc-900">5K+</p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                Happy Customers
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
