import React from 'react';
import { MapPin, Navigation, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';

export const VenueLocation: React.FC = () => {
  return (
    <section id="venue" className="relative py-24 sm:py-32 bg-emerald-950 text-ivory-100 overflow-hidden border-t border-gold-500/20">
      
      {/* Ambient background glow */}
      <div className="absolute -left-40 bottom-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1px] w-12 bg-gold-400/60" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-300">
              TWO ICONIC NASHIK DESTINATIONS
            </span>
            <span className="h-[1px] w-12 bg-gold-400/60" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ivory-100 mb-2">
            VENUE & LOCATIONS
          </h2>
          <div className="w-20 h-3 mx-auto opacity-70">
            <img src="/assets/ornaments/floral-divider.png" alt="" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* 2 Dedicated Venue Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Day 1: LEGACY BANQUETS & LAWNS */}
          <div className="gold-border-card corner-decor rounded-2xl bg-emerald-900/60 backdrop-blur-md overflow-hidden flex flex-col justify-between group">
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <img
                src={EVENT_INFO.day1Image}
                alt="Legacy Lawns Nashik"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/30 to-transparent" />
              
              <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-emerald-950/90 border border-gold-400 text-[11px] font-mono font-bold text-gold-300 uppercase tracking-widest">
                DAY 01 • 19 OCT 2026
              </div>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400 font-bold">
                  ROYAL INDOOR & LAWN ARENA
                </span>
                <h3 className="font-serif text-2xl font-bold text-ivory-100">
                  {EVENT_INFO.day1Title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
              <div>
                <p className="text-xs sm:text-sm text-ivory-200/85 mb-4 leading-relaxed">
                  State-of-the-art acoustic banquet & grand adjoining open lawns hosting the grand Day 1 Inaugural Raas.
                </p>
                <div className="flex items-center gap-2 text-xs text-gold-300 font-medium mb-5">
                  <MapPin className="w-4 h-4 shrink-0 text-maroon-400" />
                  <span>{EVENT_INFO.day1Address}</span>
                </div>
              </div>

              <a
                href={EVENT_INFO.day1MapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-gold-gradient text-emerald-950 font-sans font-bold text-xs uppercase tracking-wider shadow-gold-subtle hover:shadow-gold-glow transition-all duration-300 hover:scale-[1.02] border border-gold-200 text-center"
              >
                <Navigation className="w-3.5 h-3.5 shrink-0" />
                <span>GET DIRECTIONS TO LEGACY</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>

          {/* Day 2: DEMOCRACY GRAND OPEN AIR LAWNS */}
          <div className="gold-border-card corner-decor rounded-2xl bg-emerald-900/60 backdrop-blur-md overflow-hidden flex flex-col justify-between group">
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <img
                src={EVENT_INFO.day2Image}
                alt="Democracy Lawns Nashik"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/30 to-transparent" />
              
              <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-maroon-900/90 border border-gold-400 text-[11px] font-mono font-bold text-gold-200 uppercase tracking-widest">
                DAY 02 • 20 OCT 2026
              </div>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold-300 font-bold">
                  GRAND FINALE OPEN AIR LAWNS
                </span>
                <h3 className="font-serif text-2xl font-bold text-ivory-100">
                  {EVENT_INFO.day2Title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
              <div>
                <p className="text-xs sm:text-sm text-ivory-200/85 mb-4 leading-relaxed">
                  Expansive lush green lawns with poolside illumination, luxury VIP enclosures, and maximum capacity dance circle.
                </p>
                <div className="flex items-center gap-2 text-xs text-gold-300 font-medium mb-5">
                  <MapPin className="w-4 h-4 shrink-0 text-maroon-400" />
                  <span>{EVENT_INFO.day2Address}</span>
                </div>
              </div>

              <a
                href={EVENT_INFO.day2MapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#F3CC78] via-[#E8B95B] to-[#D9A441] text-maroon-950 font-sans font-bold text-xs uppercase tracking-wider shadow-gold-subtle hover:shadow-gold-glow transition-all duration-300 hover:scale-[1.02] border border-gold-200 text-center"
              >
                <Navigation className="w-3.5 h-3.5 shrink-0" />
                <span>GET DIRECTIONS TO DEMOCRACY</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
