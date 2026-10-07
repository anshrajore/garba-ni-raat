import React from 'react';
import { Sparkles, ArrowRight, ChevronDown, Calendar, MapPin } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="hero-section relative min-h-screen flex flex-col justify-between items-center text-center pt-24 sm:pt-28 pb-10 overflow-hidden bg-cover bg-top bg-no-repeat"
    >
      {/* Explicit Responsive CSS Rule Backgrounds */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .hero-section {
            background-image: url('/assets/backgrounds/desktop-bg.jpg');
          }
          @media (max-width: 767px) {
            .hero-section {
              background-image: url('/assets/backgrounds/mobile-bg.jpg');
            }
          }
        `
      }} />

      {/* Royal Embroidered Dupatta Drape — Top Right Royal Canopy */}
      <div className="absolute top-0 right-0 w-52 sm:w-80 lg:w-[420px] pointer-events-none z-20 animate-float-slow">
        <img
          src="/assets/ornaments/royal-dupatta-drape.png"
          alt="Royal Festive Drape"
          className="w-full h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
        />
      </div>

      {/* Luxury 3D Crossed Dandiya — Left Accent */}
      <div className="absolute top-20 sm:top-28 left-2 sm:left-6 w-28 sm:w-40 lg:w-48 pointer-events-none z-20 rotate-[-12deg] filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
        <img
          src="/assets/ornaments/crossed-dandiya-hd.png"
          alt="Royal Dandiya"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Atmospheric Vignette overlay for text legibility while preserving artwork */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 via-transparent to-emerald-950/80 pointer-events-none z-0" />

      {/* Empty space filler for top balance */}
      <div className="w-full h-8 sm:h-12" />

      {/* Center Core Content Layer (Z-INDEX 10) */}
      <div className="container-custom relative z-10 max-w-4xl mx-auto flex flex-col items-center px-4">
        
        {/* Badge Pill with Glowing Lotus Diya */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-400/60 bg-emerald-950/85 backdrop-blur-md mb-6 shadow-gold-subtle">
          <img src="/assets/ornaments/royal-diya-hd.png" alt="Auspicious Diya" className="w-5 h-5 object-contain animate-pulse" />
          <span className="text-[11px] sm:text-xs tracking-[0.2em] uppercase font-bold text-gold-300">
            THE GRAND ROYAL NAVRATRI CELEBRATION
          </span>
          <img src="/assets/ornaments/royal-diya-hd.png" alt="Auspicious Diya" className="w-5 h-5 object-contain animate-pulse" />
        </div>

        {/* Master Logo Wordmark & Semantic SEO Heading */}
        <h1 className="relative w-full max-w-xl sm:max-w-2xl px-2 mb-4 animate-float-slow">
          <img
            src="/assets/brand/garba-ni-raat-logo.png"
            alt="Garba Ni Raat 2026 — Best Navratri Garba in Nashik"
            className="w-full h-auto object-contain mx-auto filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]"
          />
          <span className="sr-only">
            Garba Ni Raat 2026 — Nashik's Best &amp; Biggest Navratri Garba Festival at Legacy Lawns and Democracy Lawns
          </span>
        </h1>

        {/* Event Date & Location Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 my-2 px-5 py-2 rounded-xl bg-emerald-900/50 backdrop-blur-md border border-gold-500/30 text-ivory-100">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gold-400" />
            <span className="font-serif text-sm sm:text-lg font-bold tracking-wider text-gold-200">
              {EVENT_INFO.dates}
            </span>
          </div>
          <span className="text-gold-500/60 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-maroon-500" />
            <span className="text-xs sm:text-sm tracking-widest uppercase font-medium text-ivory-200">
              {EVENT_INFO.city}
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-base tracking-[0.22em] uppercase font-medium text-gold-200/90 mt-3 mb-8 max-w-2xl">
          {EVENT_INFO.tagline}
        </p>

        {/* Dual Primary & Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <a
            href={EVENT_INFO.fizmaaTicketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gold-gradient text-black font-sans font-extrabold text-xs sm:text-sm tracking-[0.15em] uppercase shadow-gold-glow hover:shadow-[0_0_35px_rgba(217,164,65,0.6)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] border border-gold-200"
          >
            <span>BOOK TICKETS</span>
            <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
          </a>

          <a
            href="#book-your-night"
            className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-gold-400/60 bg-emerald-950/60 backdrop-blur-md text-ivory-100 hover:text-gold-200 font-sans font-semibold text-xs sm:text-sm tracking-[0.15em] uppercase hover:bg-emerald-900/80 hover:border-gold-300 transition-all duration-300 hover:scale-[1.02]"
          >
            EXPLORE EVENT
          </a>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 mt-6 flex flex-col items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.25em] text-gold-300/80 font-semibold">
          SCROLL TO EXPLORE
        </span>
        <a href="#book-your-night" className="animate-bounce text-gold-400 p-1" aria-label="Scroll down">
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
