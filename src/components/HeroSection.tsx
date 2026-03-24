"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative w-full overflow-hidden">
      {/* Background glow effects for premium dark aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-accent/10 rounded-full blur-[100px] md:blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-accent font-medium tracking-wide mb-4 inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20"
          >
            Hi, I&apos;m
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-white leading-tight"
          >
            Saksham
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl text-white/80 font-medium mb-8"
          >
            Cybersecurity Analyst & Full Stack Developer
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-base md:text-lg text-white/60 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Building secure, scalable systems. I specialize in securing networks, engineering robust backends, and crafting stunning frontend experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
          >
            <Link href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all hover:bg-white/90"
              >
                View Projects <ArrowRight size={18} />
              </motion.button>
            </Link>

            <a href="https://drive.google.com/file/d/1vCf3u69dsMe9cEcHmuJp9mnBtjiLLvtT/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all hover:bg-white/20"
              >
                Download CV <Download size={18} />
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-[320px] md:w-80 md:h-[400px] lg:w-[400px] lg:h-[500px]">
            {/* Outer glowing rings */}
            <div className="absolute inset-0 rounded-[2rem] border border-white/10 animate-pulse" />
            <div className="absolute inset-4 rounded-[1.8rem] border border-accent/20" />
            <div className="absolute inset-8 rounded-[1.6rem] border border-white/5" />
            
            {/* Image Container */}
            <div className="absolute inset-6 rounded-[1.5rem] overflow-hidden bg-cardBg border-4 border-accent/30 shadow-[0_0_50px_rgba(var(--accent),0.15)] flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Saksham&size=512&background=random&color=fff`; 
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
