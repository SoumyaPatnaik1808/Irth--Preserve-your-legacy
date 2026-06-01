"use client";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArchiveSection from './components/ArchiveSection';
import PreserveSection from './components/PreserveSection';
import AboutSection from './components/AboutSection';
import PlatformBanner from './components/PlatformBanner';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ArchiveSection />
        <PreserveSection />
        <AboutSection />
        <PlatformBanner />
      </main>
      <Footer />
    </>
  );
}
