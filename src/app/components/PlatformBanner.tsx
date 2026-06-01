"use client";

import React from 'react';
import { useLanguage } from '../LanguageContext';
import { BookOpen, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PlatformBanner() {
  const { t } = useLanguage();

  return (
    <section className="relative py-12 bg-obsidian overflow-hidden border-t border-obsidian-border/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Banner Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-xl border border-obsidian-border bg-obsidian-card/85 shadow-lg relative overflow-hidden gold-glow"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gold/1 rounded-full blur-2xl pointer-events-none" />

          {/* Left Side: Icon and Text */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-4 text-center sm:text-start max-w-2xl">
            <div className="flex-shrink-0 p-3 rounded-lg bg-obsidian border border-obsidian-border flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-gold" strokeWidth={1.2} />
            </div>
            <p className="text-sm font-medium text-gold-light leading-relaxed font-sans">
              {t.bannerText}
            </p>
          </div>

          {/* Right Side: Button */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <a
              href="#download"
              className="flex items-center justify-center gap-2 rounded-md bg-gold hover:bg-gold-light text-obsidian px-6 py-3.5 text-xs font-semibold tracking-wide transition-all duration-300 shadow-md shadow-gold/5 w-full sm:w-auto focus-ring"
            >
              <span>{t.btnDownloadProfile}</span>
              <Download className="h-4 w-4" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
