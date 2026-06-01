"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../LanguageContext';
import { motion } from 'framer-motion';
import { Shield, Layers, Cloud, CheckCircle, ArrowRight, ArrowLeft, Play } from 'lucide-react';

export default function Hero() {
  const { t, isRtl } = useLanguage();

  // Animation constants for Saudi Luxury motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const }, // Ultra-smooth cubic bezier
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.04 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const pillars = [
    {
      title: t.pillarSecureTitle,
      desc: t.pillarSecureDesc,
      icon: <Shield className="h-6 w-6 text-gold" strokeWidth={1.2} />,
    },
    {
      title: t.pillarOrganizedTitle,
      desc: t.pillarOrganizedDesc,
      icon: <Layers className="h-6 w-6 text-gold" strokeWidth={1.2} />,
    },
    {
      title: t.pillarLegacyTitle,
      desc: t.pillarLegacyDesc,
      icon: <Cloud className="h-6 w-6 text-gold" strokeWidth={1.2} />,
    },
    {
      title: t.pillarSaudiTitle,
      desc: t.pillarSaudiDesc,
      icon: <CheckCircle className="h-6 w-6 text-gold" strokeWidth={1.2} />,
    },
  ];

  return (
    <section id="home" className="relative min-h-screen bg-obsidian pt-12 pb-24 overflow-hidden">
      
      {/* Decorative subtle background radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
          
          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col justify-center space-y-8 z-10 text-start"
          >
            {/* Subtitle */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-gold uppercase">
                &mdash; {t.heroSubtitle}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.1]"
            >
              {t.heroTitlePart1}
              <span className="italic text-gold font-normal">
                {t.heroTitleItalic}
              </span>
            </motion.h1>

            {/* Accent tag line */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-3 text-gold-light py-1"
            >
              {/* Gold geometry cross/star icon */}
              <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M5.22 5.22l13.56 13.56M18.78 5.22L5.22 18.78" />
              </svg>
              <span className="text-sm font-medium tracking-wide">
                &mdash; {t.heroTagline}
              </span>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base text-olive-gray font-sans max-w-lg leading-relaxed"
            >
              {t.heroDescription}
            </motion.p>

            {/* Buttons Row */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              {/* Access Archive CTA */}
              <a
                href="#access"
                className="flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-obsidian hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/5 focus-ring"
              >
                <span>{t.btnAccessArchive}</span>
                {isRtl ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </a>

              {/* Explore Platform CTA */}
              <a
                href="#explore"
                className="flex items-center gap-2 rounded-md border border-gold/30 hover:border-gold px-6 py-3.5 text-sm font-semibold text-gold hover:bg-gold-glow transition-all duration-300 focus-ring"
              >
                <span>{t.btnExplorePlatform}</span>
                <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gold/40 bg-obsidian-card">
                  <Play className={`h-2 w-2 text-gold fill-gold ${isRtl ? 'rotate-180 translate-x-px' : ''}`} />
                </div>
              </a>
            </motion.div>

            {/* Compliance Badge list */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-2 text-xs font-semibold text-olive-gray pt-4"
            >
              <Shield className="h-4 w-4 text-gold flex-shrink-0" />
              <div className="flex items-center gap-2">
                <span>{t.indicatorSecure}</span>
                <span className="text-gold/40">&bull;</span>
                <span>{t.indicatorPrivate}</span>
                <span className="text-gold/40">&bull;</span>
                <span>{t.indicatorCompliant}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Column */}
          <div className="lg:col-span-6 relative w-full h-[380px] sm:h-[480px] lg:h-[580px] z-0 flex items-center justify-center">
            
            {/* Smooth glowing container for archway */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full h-full overflow-hidden"
              style={{
                WebkitMaskImage: 'radial-gradient(circle at 55% 50%, black 35%, transparent 90%)',
                maskImage: 'radial-gradient(circle at 55% 50%, black 35%, transparent 90%)'
              }}
            >
              {/* The high-resolution historical archway photo */}
              <Image
                src="/hero-arch.png"
                alt="Saudi Historical Architecture Archways"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              
              {/* Extra directional gradient overlays for smooth color blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-obsidian to-transparent opacity-90 rtl:left-auto rtl:right-0 rtl:bg-gradient-to-l" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-obsidian to-transparent opacity-35 rtl:right-auto rtl:left-0 rtl:bg-gradient-to-r" />
            </motion.div>
          </div>

        </div>

        {/* Pillars Bar (Horizontal Dark Card) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-20 border border-obsidian-border bg-obsidian-card/75 backdrop-blur-sm rounded-xl p-8 shadow-xl gold-glow"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x lg:divide-x divide-obsidian-border/50 rtl:divide-x-reverse">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`flex gap-4 items-start ${
                  idx === 0 ? '' : 'pt-6 md:pt-0 md:pl-6 rtl:md:pl-0 rtl:md:pr-6'
                }`}
              >
                <div className="flex-shrink-0 p-2 rounded-lg bg-obsidian border border-obsidian-border">
                  {pillar.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-gold-light tracking-wide font-sans">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-olive-gray font-sans leading-relaxed max-w-[200px]">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
