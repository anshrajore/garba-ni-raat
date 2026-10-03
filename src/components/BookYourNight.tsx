import React from 'react';
import { Calendar, ArrowRight, MapPin, ExternalLink } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';

export const BookYourNight: React.FC = () => {
  return (
    <section id="book-your-night" className="relative py-24 sm:py-32 bg-[#F5E6CC] text-[#1A2E2B] overflow-hidden">
      
      {/* Decorative Corner Mandala Backgrounds */}
      <div className="absolute top-0 left-0 w-36 sm:w-48 opacity-25 pointer-events-none -translate-x-4 -translate-y-4">
        <img src="/assets/ornaments/mandala-corner.png" alt="" className="w-full h-auto filter brightness-50" />
      </div>
      <div className="absolute bottom-0 right-0 w-36 sm:w-48 opacity-25 pointer-events-none translate-x-4 translate-y-4 rotate-180">
        <img src="/assets/ornaments/mandala-corner.png" alt="" className="w-full h-auto filter brightness-50" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="w-48 sm:w-64 mx-auto mb-2 opacity-85">
            <img src="/assets/ornaments/mandala-header-banner.png" alt="" className="w-full h-auto object-contain" />
          </div>

          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-[1px] w-12 bg-[#8A5A1A]" />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#8A5A1A] flex items-center gap-2">
              <img src="/assets/ornaments/royal-diya-hd.png" alt="" className="w-3.5 h-3.5 object-contain" />
              RESERVE YOUR PASS
              <img src="/assets/ornaments/royal-diya-hd.png" alt="" className="w-3.5 h-3.5 object-contain" />
            </span>
            <span className="h-[1px] w-12 bg-[#8A5A1A]" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2B1B10] mb-2">
            BOOK YOUR NIGHT
          </h2>
          <p className="text-sm sm:text-base tracking-[0.16em] uppercase font-medium text-[#6E4B28]">
            {EVENT_INFO.subtitle}
          </p>
        </div>

        {/* Two Large Horizontal Event Cards (6 + 6 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* DAY 01 Card - LEGACY VENUE (19 OCT) */}
          <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-[#003835] via-[#002624] to-[#001716] text-[#FFF5DD] p-7 sm:p-9 border border-[#D9A441]/50 shadow-2xl transition-all duration-500 hover:shadow-gold-glow hover:-translate-y-1 flex flex-col justify-between">
            
            {/* Background Texture & Mandala */}
            <div className="absolute top-0 right-0 w-44 h-44 opacity-20 pointer-events-none transform translate-x-8 -translate-y-8">
              <img src="/assets/ornaments/mandala-corner.png" alt="" className="w-full h-auto" />
            </div>

            <div>
              <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10 mb-5">
                
                {/* Dancer Graphic */}
                <div className="w-32 sm:w-40 shrink-0 transition-transform duration-500 group-hover:scale-105">
                  <img
                    src="/assets/dancers/female-dancer.png"
                    alt="Garba Dancer Day 1"
                    className="w-full h-auto object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)]"
                  />
                </div>

                {/* Card Content */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start mb-2">
                    <span className="px-3 py-1 rounded-md bg-[#D9A441]/20 text-[#E8B95B] border border-[#D9A441]/40 text-xs font-mono font-bold tracking-widest uppercase">
                      DAY 01 • 19 OCT 2026
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-800/80 text-gold-300 text-[11px] font-semibold">
                      AT LEGACY
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF5DD] tracking-wide mb-1">
                    LEGACY LAWNS
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F4E2C0]/85 mb-3 leading-relaxed">
                    Inaugural Royal Night with authentic Gujarati Raas, grand dhol orchestra & auspicious festive opening.
                  </p>

                  <div className="flex items-center justify-center sm:justify-start gap-3 text-xs text-[#D9A441]">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5" /> 7:00 PM Onwards
                    </span>
                    <span>•</span>
                    <a
                      href={EVENT_INFO.day1MapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 underline hover:text-white transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5" /> View Map <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-ivory-200/70">Tickets exclusively on Fizmaa</span>
              <a
                href={EVENT_INFO.fizmaaLegacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gold-gradient text-emerald-950 font-sans font-bold text-xs uppercase tracking-[0.14em] shadow-gold-subtle hover:shadow-gold-glow transition-all duration-300 hover:scale-105 border border-gold-300"
              >
                <span>BOOK DAY 1 PASS</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* DAY 02 Card - DEMOCRACY VENUE (20 OCT) */}
          <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-[#6E1323] via-[#540E1B] to-[#360810] text-[#FFF5DD] p-7 sm:p-9 border border-[#E8B95B]/50 shadow-2xl transition-all duration-500 hover:shadow-maroon-glow hover:-translate-y-1 flex flex-col justify-between">
            
            {/* Background Texture & Mandala */}
            <div className="absolute top-0 right-0 w-44 h-44 opacity-20 pointer-events-none transform translate-x-8 -translate-y-8">
              <img src="/assets/ornaments/mandala-corner.png" alt="" className="w-full h-auto" />
            </div>

            <div>
              <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10 mb-5">
                
                {/* Dancer Graphic */}
                <div className="w-32 sm:w-40 shrink-0 transition-transform duration-500 group-hover:scale-105">
                  <img
                    src="/assets/dancers/male-dancer.png"
                    alt="Garba Dancer Day 2"
                    className="w-full h-auto object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)]"
                  />
                </div>

                {/* Card Content */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start mb-2">
                    <span className="px-3 py-1 rounded-md bg-[#FFD78A]/20 text-[#FFE099] border border-[#FFD78A]/40 text-xs font-mono font-bold tracking-widest uppercase">
                      DAY 02 • 20 OCT 2026
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-maroon-700/80 text-gold-200 text-[11px] font-semibold">
                      AT DEMOCRACY
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF5DD] tracking-wide mb-1">
                    DEMOCRACY LAWNS
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F4E2C0]/85 mb-3 leading-relaxed">
                    The Grand Finale Extravaganza with lightning dandiya showdown, celebrity live band & awards ceremony.
                  </p>

                  <div className="flex items-center justify-center sm:justify-start gap-3 text-xs text-[#FFE099]">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5" /> 7:00 PM Onwards
                    </span>
                    <span>•</span>
                    <a
                      href={EVENT_INFO.day2MapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 underline hover:text-white transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5" /> View Map <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-ivory-200/70">Tickets exclusively on Fizmaa</span>
              <a
                href={EVENT_INFO.fizmaaDemocracyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#F3CC78] via-[#E8B95B] to-[#D9A441] text-maroon-950 font-sans font-bold text-xs uppercase tracking-[0.14em] shadow-gold-subtle hover:shadow-gold-glow transition-all duration-300 hover:scale-105 border border-gold-300"
              >
                <span>BOOK DAY 2 PASS</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Sole Official Ticketing Partner: FIZMAA */}
        <div className="mt-16 text-center max-w-xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A5A1A] mb-4">
            EXCLUSIVE OFFICIAL TICKETING PARTNER
          </p>

          <a
            href={EVENT_INFO.fizmaaTicketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-4 px-8 rounded-2xl bg-white border border-[#D9A441]/40 shadow-md hover:shadow-xl transition-all hover:scale-105"
          >
            <img
              src="/assets/brand/fizmaa-logo.png"
              alt="Fizmaa - Exclusive Ticketing Partner"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>
        </div>

      </div>
    </section>
  );
};
