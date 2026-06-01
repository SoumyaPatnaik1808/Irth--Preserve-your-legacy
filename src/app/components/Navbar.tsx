"use client";

import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { Menu, X, User, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { lang, toggleLanguage, t, isRtl } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: t.navHome, href: "#home" },
    { name: t.navMuseum, href: "#museum", badge: t.badgeComingSoon },
    { name: t.navCaseStudies, href: "#archive" },
    { name: t.navAboutUs, href: "#about" },
    { name: t.navContact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-obsidian-border/50 bg-obsidian/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <a href="#home" className="flex items-center gap-3 group">
              {/* Calligraphic-style IRTH logo */}
              <div className="flex flex-col items-center justify-center border border-gold/30 rounded-lg p-1.5 bg-obsidian-card w-12 h-12 group-hover:border-gold/60 transition-colors">
                <span className="text-xl font-serif text-gold font-bold leading-none tracking-wide -mt-0.5">إرث</span>
                <span className="text-[9px] font-sans text-gold-light tracking-[0.15em] font-semibold leading-none uppercase mt-0.5">IRTH</span>
              </div>
              <div className="hidden sm:flex flex-col border-l border-obsidian-border pl-3 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-3 py-1">
                <span className="text-xs font-medium text-gold-light tracking-wider font-serif uppercase">
                  {lang === 'ar' ? 'إرث' : 'IRTH'}
                </span>
                <span className="text-[10px] text-olive-gray font-sans tracking-wide">
                  {t.footerTagline}
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="relative text-sm font-medium transition-colors hover:text-gold py-2 text-olive-gray"
              >
                {item.name}
                {item.badge && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 scale-75 inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-medium bg-gold-dark/20 text-gold border border-gold/20 whitespace-nowrap">
                    {item.badge}
                  </span>
                )}
               
                
              </a>
            ))}
          </nav>

          {/* Right Actions (Language Switcher, Login, Mobile Menu Toggle) */}
          <div className="flex items-center gap-4">
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-xs font-semibold text-olive-gray hover:text-gold transition-colors px-3 py-2 rounded-md hover:bg-obsidian-card focus-ring"
              aria-label="Toggle language"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
            </button>

            {/* Login Button */}
            <a
              href="#login"
              className="hidden sm:flex items-center gap-2 rounded-md border border-gold/30 bg-obsidian-card/40 hover:bg-gold-glow hover:border-gold px-4 py-2 text-xs font-semibold text-gold transition-all duration-300 focus-ring"
            >
              <span>{t.navLogin}</span>
              <User className="h-3.5 w-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex md:hidden items-center justify-center p-2 rounded-md text-olive-gray hover:text-gold hover:bg-obsidian-card/60 focus-ring"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-t border-obsidian-border bg-obsidian-card overflow-hidden"
          >
            <div className="space-y-1 px-6 py-6 flex flex-col gap-3">
              {menuItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between text-base font-medium py-2 border-b border-obsidian-border/30 transition-colors`}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-gold-dark/20 text-gold border border-gold/20">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 rounded-md border border-obsidian-border bg-obsidian px-4 py-2.5 text-sm font-medium text-olive-gray hover:text-gold transition-colors focus-ring"
                >
                  <Globe className="h-4 w-4" />
                  <span>{lang === 'en' ? 'تحويل للعربية' : 'Switch to English'}</span>
                </button>
                
                <a
                  href="#login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-md border border-gold/30 bg-gold-glow hover:border-gold px-4 py-2.5 text-sm font-semibold text-gold transition-all duration-300 focus-ring"
                >
                  <span>{t.navLogin}</span>
                  <User className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
