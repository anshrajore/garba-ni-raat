import React from 'react';
import { Calendar, Clock, MapPin, Music, Sparkles, Utensils } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export const EventDetails: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'calendar': return <Calendar className="w-6 h-6 text-gold-400" />;
      case 'clock': return <Clock className="w-6 h-6 text-gold-400" />;
      case 'map-pin': return <MapPin className="w-6 h-6 text-gold-400" />;
      case 'music': return <Music className="w-6 h-6 text-gold-400" />;
      case 'sparkles': return <Sparkles className="w-6 h-6 text-gold-400" />;
      case 'utensils': return <Utensils className="w-6 h-6 text-gold-400" />;
      default: return <Sparkles className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <section id="event-details" className="relative py-24 bg-emerald-950 text-ivory-100 border-t border-b border-gold-500/20 overflow-hidden">
      
      {/* Subtle mandala background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1px] w-12 bg-gold-400/60" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-300">
              ALL YOU NEED TO KNOW
            </span>
            <span className="h-[1px] w-12 bg-gold-400/60" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ivory-100 mb-2">
            EVENT DETAILS
          </h2>
          <div className="w-20 h-3 mx-auto opacity-70">
            <img src="/assets/ornaments/floral-divider.png" alt="" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* 6-Column Responsive Information Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {EVENT_DETAILS.map((item, idx) => (
            <div
              key={idx}
              className="gold-border-card corner-decor rounded-xl bg-emerald-900/60 backdrop-blur-sm p-5 sm:p-6 text-center flex flex-col items-center justify-between min-h-[190px] group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-full border border-gold-500/40 bg-emerald-950/80 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-gold-300 transition-all duration-300 shadow-gold-subtle">
                {getIcon(item.icon)}
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-gold-400 font-bold block mb-1">
                  {item.label}
                </span>

                <h3 className="font-serif text-sm sm:text-base font-bold text-ivory-100 tracking-wide leading-tight mb-1">
                  {item.title}
                </h3>

                <p className="text-[11px] text-ivory-200/70 tracking-wider uppercase font-medium">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
