import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';

export default function CollectionsPreview() {
  const previewProducts = PRODUCTS.slice(0, 3);

  return (
    <section className="relative py-32 px-6 md:px-20 overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-900">

  {/* 🔥 Glow Effects */}
  <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl"></div>

  {/* ✨ Subtle Grid Pattern */}
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

  {/* CONTENT */}
  <div className="relative max-w-7xl mx-auto">
    
    {/* HEADER */}
    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
      <div className="space-y-4">
        <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.3em]">
          Curated Selection
        </span>

        <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none tracking-tighter text-white">
          The New <br /> Standard
        </h2>
      </div>

      <Link 
        to="/collections" 
        className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
      >
        View All Collections 
        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
      </Link>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {previewProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="group relative aspect-[3/4] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500"
        >
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
            <p className="text-[10px] uppercase tracking-widest text-orange-500 font-bold mb-2">
              {product.category}
            </p>

            <h3 className="text-2xl font-black italic uppercase text-white mb-4">
              {product.name}
            </h3>

            <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </motion.div>
      ))}
    </div>

  </div>
</section>
  );
}
