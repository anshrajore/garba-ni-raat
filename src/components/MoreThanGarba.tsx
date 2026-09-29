import React from 'react';
import { Flame, Music, UtensilsCrossed, Sparkles, Camera } from 'lucide-react';
import { FEATURES } from '../data/eventData';

export const MoreThanGarba: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'flame': return <Flame className="w-7 h-7 text-gold-400" />;
      case 'music': return <Music className="w-7 h-7 text-gold-400" />;
      case 'coffee': return <UtensilsCrossed className="w-7 h-7 text-gold-400" />;
      case 'shirt': return <Sparkles className="w-7 h-7 text-gold-400" />;
      case 'camera': return <Camera className="w-7 h-7 text-gold-400" />;
      default: return <Sparkles className="w-7 h-7 text-gold-400" />;
    }
  };

  return (
    <section className="relative py-24 sm:py-32 bg-emerald-950 text-ivory-100 overflow-hidden border-t border-gold-500/20">
      
      {/* Background mandala decoration */}
      <div className="absolute top-1/2 right-0 w-80 h-80 opacity-10 pointer-events-none translate-x-20">
        <img src="/assets/ornaments/mandala-corner.png" alt="" className="w-full h-auto" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1px] w-12 bg-gold-400/60" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-300">
              A COMPLETE FESTIVE EXPERIENCE
            </span>
            <span className="h-[1px] w-12 bg-gold-400/60" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ivory-100 mb-2">
            MORE THAN JUST GARBA
          </h2>
          <div className="w-20 h-3 mx-auto opacity-70">
            <img src="/assets/ornaments/floral-divider.png" alt="" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* 5 Distinct Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {FEATURES.map((item, idx) => (
            <div
              key={idx}
              className="gold-border-card corner-decor rounded-2xl bg-emerald-900/50 backdrop-blur-md p-6 text-center flex flex-col items-center justify-between group hover:-translate-y-2 transition-all duration-300"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-gold-500/40 flex items-center justify-center mx-auto mb-5 group-hover:border-gold-300 group-hover:scale-110 shadow-gold-subtle transition-all duration-300">
                  {getFeatureIcon(item.icon)}
                </div>

                <h3 className="font-serif text-base sm:text-lg font-bold text-gold-300 tracking-wide mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-ivory-200/80 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="w-8 h-1 bg-gold-500/30 rounded-full mt-6 group-hover:w-16 group-hover:bg-gold-400 transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
