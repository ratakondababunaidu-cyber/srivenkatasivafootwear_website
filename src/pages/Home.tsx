import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  ShoppingBag,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import About from "../components/About";
import CollectionsPreview from "../components/CollectionsPreview";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import sparx from "../images/sparx.webp";
import campus from "../images/campus.webp";
import slippers from "../images/slippers.avif";
import formal from "../images/formal.avif";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermsAndConditions from "../components/TermsAndConditions";

const BRANDS = [
  "SPARX",
  "CAMPUS",
  "REDFORD",
  "MEDIFEE",
  "WINGER",
  "WALKAROO",
  "PARAGON",
  "HOOVES",
  "COLUMBUS",
  "ORTHOCARE",
  "EDGE",
  "MINT",
  "ZM",
  "HYBEC",
  "INBLU",
  "AEROWALK",
];

const CATEGORIES = [
  {
    id: 1,
    title: { first: "FORMAL", second: "COLLECTION" },
    subtitle: "Premium Craftsmanship",
    description:
      "Executive styles from Redford & Edge for the modern professional.",
    image: formal,
    color: "from-amber-500/10",
    tag: "Business",
  },
  {
    id: 2,
    title: { first: "ACTIVE", second: "& SPORTS" },
    subtitle: "Performance First",
    description:
      "Hooves, Campus & Sparx. Engineered for maximum durability and speed.",
    image: campus,
    color: "from-blue-500/10",
    tag: "Performance",
  },
  {
    id: 3,
    title: { first: "KIDS", second: "& FAMILY" },
    subtitle: "Comfort Every Step",
    description:
      "Specialized Orthocare and vibrant styles for the little ones.",
    image: sparx,
    color: "from-purple-500/10",
    tag: "Family",
  },
  {
    id: 4,
    title: { first: "CASUAL", second: "SLIPPERS" },
    subtitle: "Daily Essentials",
    description:
      "Reliable comfort from Paragon & Walkaroo for your everyday needs.",
    image: slippers,
    color: "from-green-500/10",
    tag: "Everyday",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % CATEGORIES.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + CATEGORIES.length) % CATEGORIES.length,
    );

  return (
    <div className="bg-white text-zinc-900">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 md:pt-32">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.h1
            key={`bg-${currentIndex}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.05, scale: 1.1 }}
            transition={{ duration: 2 }}
            className="text-[25vw] font-black uppercase italic leading-none whitespace-nowrap text-zinc-900"
          >
            {CATEGORIES[currentIndex].tag}
          </motion.h1>
        </div>

        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          {/* LEFT CONTENT */}
          <motion.div
            key={`text-${currentIndex}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-12 bg-orange-500"></span>
              <span className="text-orange-500 font-bold tracking-[0.3em] text-xs uppercase">
                {CATEGORIES[currentIndex].subtitle}
              </span>
            </div>

            {/* 🔥 FIXED HEADING */}
            <h2 className="text-5xl md:text-8xl font-black italic uppercase leading-[0.85] mb-8 tracking-tighter">
              <span className="text-zinc-900">
                {CATEGORIES[currentIndex].title.first}
              </span>
              <br />
              <span className="text-orange-500">
                {CATEGORIES[currentIndex].title.second}
              </span>
            </h2>

            <p className="text-zinc-600 text-lg max-w-md mb-10 leading-relaxed">
              {CATEGORIES[currentIndex].description}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() => navigate("/collections")}
                className="px-10 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold uppercase tracking-widest text-xs transition-all rounded-sm flex items-center gap-3"
              >
                Collections <ShoppingBag className="w-4 h-4" />
              </button>

              <div className="ml-6">
                <span className="text-sm font-bold text-zinc-900">
                  25k+ Happy Customers
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.7 }}
                className="relative w-full"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${CATEGORIES[currentIndex].color} blur-[120px] rounded-full`}
                ></div>
                <img
                  src={CATEGORIES[currentIndex].image}
                  alt="Category"
                  className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl shadow-xl"
                />
              </motion.div>
            </AnimatePresence>

            {/* CONTROLS */}
            <div className="absolute -bottom-6 md:bottom-12 flex gap-4">
              <button
                onClick={prevSlide}
                className="p-4 bg-zinc-100 border hover:bg-zinc-900 hover:text-white rounded-full"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="p-4 bg-zinc-100 border hover:bg-zinc-900 hover:text-white rounded-full"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* BRANDS */}
        <div className="mt-20 py-10 border-y bg-zinc-50">
          <div className="flex overflow-hidden">
            <div className="flex gap-20 animate-marquee whitespace-nowrap">
              {[...BRANDS, ...BRANDS].map((brand, idx) => (
                <span
                  key={idx}
                  className="text-zinc-300 text-3xl md:text-5xl font-black italic uppercase hover:text-orange-500"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <div className="bg-orange-600 py-6 text-white">
        <div className="container mx-auto px-6 flex flex-wrap justify-around gap-8">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-sm font-bold uppercase">
              100% Original Brands
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-bold uppercase">Comfort</span>
          </div>
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5" />
            <span className="text-sm font-bold uppercase">
              Premium Orthocare
            </span>
          </div>
        </div>
      </div>

      <About />
      <CollectionsPreview />
      <Testimonials />
      <Contact />
      <PrivacyPolicy />
      <TermsAndConditions />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
