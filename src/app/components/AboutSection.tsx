"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../LanguageContext';
import { motion } from 'framer-motion';
import { Lock, Folder, Landmark, Star, ArrowRight, ArrowLeft } from 'lucide-react';

export default function AboutSection() {
  const { t, isRtl } = useLanguage();

  const features = [
    {
      title: t.featSecureTitle,
      desc: t.featSecureDesc,
      icon: <Lock className="h-5 w-5 text-gold" strokeWidth={1.5} />,
    },
    {
      title: t.featOrganizedTitle,
      desc: t.featOrganizedDesc,
      icon: <Folder className="h-5 w-5 text-gold" strokeWidth={1.5} />,
    },
    {
      title: t.featBuiltTitle,
      desc: t.featBuiltDesc,
      icon: <Landmark className="h-5 w-5 text-gold" strokeWidth={1.5} />,
    },
    {
      title: t.featLegacyTitle,
      desc: t.featLegacyDesc,
      icon: <Star className="h-5 w-5 text-gold" strokeWidth={1.5} />,
    },
  ];

  // Motion variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="about" className="relative py-24 bg-obsidian overflow-hidden border-t border-obsidian-border/30">
      
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-gold/1 rounded-full blur-[90px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          
          {/* Left Column: Heading and Description (4 Columns) */}
          <div className="lg:col-span-4 space-y-6 text-start">
            <motion.span
              variants={itemVariants}
              className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase block"
            >
              {t.aboutSubtitle} &mdash;
            </motion.span>
            
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-serif text-white tracking-tight leading-tight"
            >
              {t.aboutTitlePart1}
              <span className="italic text-gold font-normal">
                {t.aboutTitleItalic}
              </span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-sm text-olive-gray font-sans leading-relaxed"
            >
              {t.aboutDescription}
            </motion.p>
            
            <motion.div variants={itemVariants} className="pt-2">
              <a
                href="#about-details"
                className="inline-flex items-center gap-2 text-xs font-semibold text-gold hover:text-gold-light transition-colors group"
              >
                <span>{t.btnLearnMoreAboutUs}</span>
                {isRtl ? (
                  <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                )}
              </a>
            </motion.div>
          </div>

          {/* Right Column: Grid and Visual Niche (8 Columns) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Features 2x2 Grid (7 Columns) */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 lg:gap-8">
              {features.map((feat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex gap-4 items-start text-start"
                >
                  <div className="flex-shrink-0 p-2.5 rounded-lg bg-obsidian-card border border-obsidian-border flex items-center justify-center">
                    {feat.icon}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-semibold text-gold-light tracking-wide font-sans">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-olive-gray font-sans leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visual Niche Image Asset (5 Columns) */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-5 relative w-full h-[320px] sm:h-[400px] md:h-[450px] overflow-hidden"
              style={{
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 95%)',
                maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 95%)'
              }}
            >
              <Image
                src="/about-arch.png"
                alt="Saudi Arched Stone Door Niche with Olive Plant"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-center"
              />
              
              {/* Overlay mask for luxury image blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
