"use client";

import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'framer-motion';
import { 
  Folder, 
  Image as ImageIcon, 
  PlayCircle, 
  FileText, 
  Package, 
  Landmark 
} from 'lucide-react';

export default function PreserveSection() {
  const { t, lang } = useLanguage();

  const cards = [
    {
      title: t.preserveCard1Title,
      desc: t.preserveCard1Desc,
      icon: <Folder className="h-6 w-6 text-gold" strokeWidth={1.2} />,
    },
    {
      title: t.preserveCard2Title,
      desc: t.preserveCard2Desc,
      icon: <ImageIcon className="h-6 w-6 text-gold" strokeWidth={1.2} />,
    },
    {
      title: t.preserveCard3Title,
      desc: t.preserveCard3Desc,
      icon: <PlayCircle className="h-6 w-6 text-gold" strokeWidth={1.2} />,
    },
    {
      title: t.preserveCard4Title,
      desc: t.preserveCard4Desc,
      icon: <FileText className="h-6 w-6 text-gold" strokeWidth={1.2} />,
    },
    {
      title: t.preserveCard5Title,
      desc: t.preserveCard5Desc,
      icon: <Package className="h-6 w-6 text-gold" strokeWidth={1.2} />,
    },
    {
      title: t.preserveCard6Title,
      desc: t.preserveCard6Desc,
      icon: <Landmark className="h-6 w-6 text-gold" strokeWidth={1.2} />,
      badge: t.badgeComingSoon,
    },
  ];

  // Motion variants
  const headerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const },
    },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="museum" className="relative py-24 bg-obsidian overflow-hidden border-t border-obsidian-border/30">
      
      {/* Decorative radial glows */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gold/1 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center space-y-4 max-w-3xl mx-auto mb-16"
        >
          <span className="text-[11px] font-semibold tracking-[0.25em] text-gold uppercase block">
            {t.preserveSubtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight leading-tight">
            {t.preserveTitle}
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group flex gap-5 p-8 rounded-xl relative overflow-hidden glass-card glass-sheen"
            >
              {/* Highlight badge overlay */}
              {card.badge && (
                <span className="absolute top-4 right-4 rtl:right-auto rtl:left-4 inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-gold-dark/20 text-gold border border-gold/20 tracking-wider uppercase">
                  {card.badge}
                </span>
              )}

              {/* Icon wrapper */}
              <div className="flex-shrink-0 p-3 h-12 w-12 rounded-lg bg-obsidian border border-obsidian-border group-hover:border-gold/20 transition-all duration-300 flex items-center justify-center">
                {card.icon}
              </div>

              {/* Text info */}
              <div className="space-y-2 text-start pr-12 rtl:pr-0 rtl:pl-12">
                <h3 className="text-sm font-semibold text-gold-light group-hover:text-gold transition-colors tracking-wide font-sans">
                  {card.title}
                </h3>
                <p className="text-xs text-olive-gray font-sans leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
