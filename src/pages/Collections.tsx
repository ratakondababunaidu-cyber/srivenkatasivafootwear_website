import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import { PRODUCTS } from '../constants';

export default function Collections() {

  const handleInquiry = (productName) => {
    const phoneNumber = "919848037385";
    const message = encodeURIComponent(
      `Hello Sri Venkata Siva Footwear! I'm interested in the ${productName}. Could you please provide more details?`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen pt-28 md:pt-40 pb-16 md:pb-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-12 md:mb-20 space-y-3 md:space-y-4">
          <span className="text-orange-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
            Full Catalog
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black italic uppercase leading-tight tracking-tighter text-zinc-900">
            Elite <br /> Collections
          </h1>

          <p className="text-zinc-500 text-xs sm:text-sm md:text-lg max-w-xl leading-relaxed">
            Explore our complete range of high-performance and lifestyle footwear.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-zinc-50 rounded-xl md:rounded-2xl overflow-hidden border border-zinc-100 hover:border-zinc-200 transition-all duration-300 shadow-sm hover:shadow-lg"
            >

              {/* IMAGE */}
              <div className="aspect-square relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <button
                  onClick={() => handleInquiry(product.name)}
                  className="absolute top-3 right-3 w-9 h-9 md:w-10 md:h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-900 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-orange-500 hover:text-white shadow"
                >
                  <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-4 md:p-6 space-y-3 md:space-y-5">

                <div>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-orange-500 font-bold mb-1">
                    {product.category}
                  </p>

                  <h3 className="text-sm md:text-xl font-black italic uppercase text-zinc-900">
                    {product.name}
                  </h3>
                </div>

                <p className="text-zinc-500 text-[11px] md:text-xs leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* ACTIONS */}
                <div className="pt-3 md:pt-4 border-t border-zinc-200 flex items-center justify-between">

                  <button className="flex items-center gap-1 md:gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors">
                    Details
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => handleInquiry(product.name)}
                    className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-zinc-900 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded hover:bg-orange-600 transition-colors"
                  >
                    <MessageCircle className="w-3 h-3" />
                    Inquire
                  </button>

                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* VISIT SHOP CTA */}
        <div className="mt-16 md:mt-24 text-center space-y-4">

          <h2 className="text-xl md:text-3xl font-black italic uppercase text-zinc-900">
            Want to Explore More?
          </h2>

          <p className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto">
            Visit our store to discover more collections, try your favorite styles, and experience comfort in person.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://maps.app.goo.gl/Atcy2AXt3xAPuTX56",
                "_blank",
              )
            }
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white text-xs md:text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-orange-600 transition-all"
          >
            Get Directions
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </div>
  );
}