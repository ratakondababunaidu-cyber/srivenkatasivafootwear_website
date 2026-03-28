import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "Marathon Runner",
    content: "The Aero-Max V1 changed my game. I've never felt such a perfect balance of weight and energy return. Sri venkatasiva is the future.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    role: "Fashion Stylist",
    content: "I've been looking for sneakers that bridge the gap between high-fashion and street comfort. The Urban Glide is exactly that.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
  },
  {
    id: 3,
    name: "David Smith",
    role: "Tech Entrepreneur",
    content: "The attention to detail in the Zenith Air is incredible. It's rare to find a brand that cares as much about the engineering as the aesthetic.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-20 bg-[#050505] relative overflow-hidden" id="testimonials">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.3em]">Voices of the Elite</span>
          <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none tracking-tighter text-white">
            Trusted by <br /> the Best
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-10 rounded-2xl relative group hover:bg-white/10 transition-all duration-500"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-orange-500/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>

              <p className="text-white/70 text-lg leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              {/* <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500/20">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs">{testimonial.name}</h4>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-medium">{testimonial.role}</p>
                </div>
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* Brand Bar */}
        <div className="mt-10 pt-10 border-t border-white/5 flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-20 grayscale">
          <span className="text-2xl font-black italic tracking-tighter uppercase">SPARX</span>
          <span className="text-2xl font-black italic tracking-tighter uppercase">CAMPUS</span>
          <span className="text-2xl font-black italic tracking-tighter uppercase">REDFORD</span>
          <span className="text-2xl font-black italic tracking-tighter uppercase">MEDIFEE</span>
          <span className="text-2xl font-black italic tracking-tighter uppercase">WINGER</span>
        </div>
      </div>
    </section>
  );
}
