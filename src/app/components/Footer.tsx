"use client";

import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Mail } from 'lucide-react';

// Custom inline SVG for LinkedIn
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Custom inline SVG for Twitter/X
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  const { lang, t } = useLanguage();

  const socialLinks = [
    { icon: <LinkedinIcon className="h-4 w-4" />, href: "#linkedin", label: "LinkedIn" },
    { icon: <TwitterIcon className="h-4 w-4" />, href: "#twitter", label: "Twitter" },
    { icon: <Mail className="h-4 w-4" />, href: "#email", label: "Email" },
  ];

  return (
    <footer className="w-full border-t border-obsidian-border bg-obsidian py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-obsidian-border/50 text-start">
          
          {/* Logo & Tagline column (4 Columns) */}
          <div className="md:col-span-4 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              {/* Calligraphic-style IRTH logo */}
              <div className="flex flex-col items-center justify-center border border-gold/30 rounded-lg p-1.5 bg-obsidian-card w-12 h-12">
                <span className="text-xl font-serif text-gold font-bold leading-none tracking-wide -mt-0.5">إرث</span>
                <span className="text-[9px] font-sans text-gold-light tracking-[0.15em] font-semibold leading-none uppercase mt-0.5">IRTH</span>
              </div>
              <div className="flex flex-col border-l border-obsidian-border pl-3 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-3 py-1">
                <span className="text-xs font-medium text-gold-light tracking-wider font-serif uppercase">
                  {lang === 'ar' ? 'إرث' : 'IRTH'}
                </span>
                <span className="text-[10px] text-olive-gray font-sans tracking-wide">
                  {t.footerTagline}
                </span>
              </div>
            </div>
            <p className="text-xs text-olive-gray font-sans leading-relaxed max-w-xs">
              {t.heroDescription.substring(0, 100)}...
            </p>
          </div>

          {/* Nav Categories columns (8 Columns) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Platform Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-gold tracking-widest uppercase font-sans">
                {t.footerColPlatform}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-xs text-olive-gray hover:text-gold transition-colors font-sans">
                    {t.navHome}
                  </a>
                </li>
                <li>
                  <a href="#museum" className="inline-flex items-center gap-1.5 text-xs text-olive-gray hover:text-gold transition-colors font-sans">
                    <span>{t.navMuseum}</span>
                    <span className="px-1.5 py-0.5 rounded-full text-[8px] font-semibold bg-gold-dark/20 text-gold border border-gold/20 tracking-wider">
                      {t.badgeComingSoon}
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#case-studies" className="text-xs text-olive-gray hover:text-gold transition-colors font-sans">
                    {t.navCaseStudies}
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-gold tracking-widest uppercase font-sans">
                {t.footerColCompany}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-xs text-olive-gray hover:text-gold transition-colors font-sans">
                    {t.navAboutUs}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-xs text-olive-gray hover:text-gold transition-colors font-sans">
                    {t.navContact}
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-gold tracking-widest uppercase font-sans">
                {t.footerColLegal}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#privacy" className="text-xs text-olive-gray hover:text-gold transition-colors font-sans">
                    {t.linkPrivacy}
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-xs text-olive-gray hover:text-gold transition-colors font-sans">
                    {t.linkTerms}
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-gold tracking-widest uppercase font-sans">
                {t.footerColFollow}
              </h3>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-lg bg-obsidian-card hover:bg-gold-glow border border-obsidian-border hover:border-gold/30 text-olive-gray hover:text-gold transition-all duration-300 focus-ring flex items-center justify-center"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-olive-gray font-sans tracking-wide">
            {t.copyright}
          </p>
          <p className="text-[10px] text-gold-dark font-sans tracking-wide italic">
            {t.footerStatement}
          </p>
        </div>

      </div>
    </footer>
  );
}
