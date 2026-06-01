"use client";

import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import { 
  Archive, 
  Image as ImageIcon, 
  PlaySquare, 
  BarChart3, 
  Folder, 
  Landmark, 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';

export default function ArchiveSection() {
  const { t, isRtl } = useLanguage();

  const categories = [
    {
      name: t.catIndexArchive,
      icon: <Archive className="h-8 w-8 text-gold group-hover:text-gold-light transition-colors" strokeWidth={1} />,
      href: "#index-archive",
    },
    {
      name: t.catImages,
      icon: <ImageIcon className="h-8 w-8 text-gold group-hover:text-gold-light transition-colors" strokeWidth={1} />,
      href: "#images",
    },
    {
      name: t.catVideos,
      icon: <PlaySquare className="h-8 w-8 text-gold group-hover:text-gold-light transition-colors" strokeWidth={1} />,
      href: "#videos",
    },
    {
      name: t.catReports,
      icon: <BarChart3 className="h-8 w-8 text-gold group-hover:text-gold-light transition-colors" strokeWidth={1} />,
      href: "#reports",
    },
    {
      name: t.catDocuments,
      icon: <Folder className="h-8 w-8 text-gold group-hover:text-gold-light transition-colors" strokeWidth={1} />,
      href: "#documents",
    },
    {
      name: t.catCaseStudies,
      icon: <Landmark className="h-8 w-8 text-gold group-hover:text-gold-light transition-colors" strokeWidth={1} />,
      href: "#case-studies",
    },
  ];

  // Motion variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="archive" className="relative py-24 bg-obsidian overflow-hidden border-t border-obsidian-border/30">
      
      {/* Decorative radial glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-gold/1.5 rounded-full blur-[80px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading and Text */}
          <div className="lg:col-span-5 space-y-6 text-start">
            <motion.span
              custom={1}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase block"
            >
              {t.archiveSubtitle}
            </motion.span>
            
            <motion.h2
              custom={2}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight"
            >
              {t.archiveTitle}
            </motion.h2>
            
            <motion.p
              custom={3}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-base text-olive-gray font-sans leading-relaxed max-w-md"
            >
              {t.archiveDescription}
            </motion.p>
            
            <motion.div
              custom={4}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="pt-2"
            >
              <a
                href="#learn-more"
                className="inline-flex items-center gap-2 rounded-md border border-gold/30 hover:border-gold px-6 py-3 text-xs font-semibold text-gold bg-obsidian-card/45 hover:bg-gold-glow transition-all duration-300 focus-ring"
              >
                <span>{t.btnLearnMore}</span>
                {isRtl ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </a>
            </motion.div>
          </div>

          {/* Right Column: Categories 3x2 Grid */}
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="h-full w-full"
              >
                <TiltCard
                  href={cat.href}
                  className="group flex flex-col items-center justify-center text-center p-8 rounded-xl focus-ring min-h-[170px] glass-card glass-sheen"
                >
                  {/* Background glow token */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold/0 group-hover:to-gold/1 transition-all duration-500 pointer-events-none" />
                  
                  {/* Icon wrapper */}
                  <div 
                    style={{ transform: "translateZ(25px)" }}
                    className="mb-4 p-3 rounded-lg bg-obsidian border border-obsidian-border group-hover:border-gold/20 transition-all duration-300"
                  >
                    {cat.icon}
                  </div>
                  
                  {/* Name */}
                  <span 
                    style={{ transform: "translateZ(15px)" }}
                    className="text-xs font-semibold text-gold-light group-hover:text-gold transition-colors tracking-wide font-sans leading-snug"
                  >
                    {cat.name}
                  </span>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
