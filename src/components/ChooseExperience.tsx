import React from 'react';
import { Check, ArrowRight, Crown, Users, Heart, Sparkles, Flame, ShieldCheck } from 'lucide-react';
import { TICKET_TIERS, EVENT_INFO } from '../data/eventData';

export const ChooseExperience: React.FC = () => {
  return (
    <section id="choose-experience" className="relative py-24 sm:py-32 bg-emerald-950 text-ivory-100 overflow-hidden">
      
      {/* Decorative Dandiya & Mandala Backgrounds */}
      <div className="absolute top-0 left-0 w-32 sm:w-48 opacity-20 pointer-events-none">
        <img src="/assets/ornaments/mandala-corner.png" alt="" className="w-full h-auto" />
      </div>
      <div className="absolute top-0 right-0 w-32 sm:w-48 opacity-20 pointer-events-none -scale-x-100">
        <img src="/assets/ornaments/mandala-corner.png" alt="" className="w-full h-auto" />
      </div>

      {/* Floating Crossed Dandiya graphic in background */}
      <div className="absolute top-1/2 right-4 w-28 opacity-15 pointer-events-none hidden lg:block rotate-12">
        <img src="/assets/ornaments/crossed-dandiya.png" alt="" className="w-full h-auto" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1px] w-12 bg-gold-400/60" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              OFFICIAL FESTIVAL TICKETS
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="h-[1px] w-12 bg-gold-400/60" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ivory-100 mb-3">
            CHOOSE YOUR EXPERIENCE
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base tracking-[0.16em] uppercase font-medium text-gold-200/90 max-w-xl mx-auto">
            DIFFERENT PASSES. SAME UNFORGETTABLE ENERGY.
          </p>

          <div className="w-24 h-4 mx-auto mt-4 opacity-75">
            <img src="/assets/ornaments/floral-divider.png" alt="" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* 3 Master Pricing Tier Cards - COVER PASS FIRST & ELEVATED FOR CONVERSION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {TICKET_TIERS.map((tier, idx) => {
            const isFeatured = tier.isPopular; // Cover Pass is index 0 and isPopular = true

            return (
              <div
                key={tier.category}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-maroon-800 via-maroon-900 to-[#32060E] border-2 border-gold-300 shadow-gold-glow md:scale-105 z-20 order-first'
                    : 'bg-emerald-900/70 border border-gold-500/40 shadow-xl z-10'
                } p-7 sm:p-8 corner-decor`}
              >
                {/* Popular Crown Badge for Cover Pass */}
                {isFeatured ? (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gold-gradient text-emerald-950 text-[11px] font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-gold-glow border border-gold-100 whitespace-nowrap">
                    <Crown className="w-3.5 h-3.5" />
                    #1 MOST POPULAR • F&B INCLUDED
                  </div>
                ) : tier.category === 'Legacy' ? (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-950 border border-gold-400 text-gold-300 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
                    <Flame className="w-3 h-3 text-gold-400" />
                    ROYAL VIP PASS
                  </div>
                ) : null}

                <div>
                  {/* Category Title */}
                  <div className="text-center pb-6 border-b border-gold-500/20">
                    <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-300 font-semibold block mb-1">
                      {tier.category === 'Cover' ? 'F&B ALL-INCLUSIVE' : tier.category === 'Legacy' ? 'ROYAL VIP ACCESS' : 'STANDARD ENTRY'}
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-ivory-100 tracking-wider">
                      {tier.category} PASS
                    </h3>
                    <p className="text-xs text-ivory-200/80 mt-2 font-normal">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Pricing Matrix */}
                  <div className="py-6 space-y-3">
                    {tier.options.map((opt) => (
                      <div
                        key={opt.type}
                        className={`flex items-center justify-between p-3.5 rounded-xl border transition-colors ${
                          isFeatured
                            ? 'bg-black/40 border-gold-300/40 hover:border-gold-300'
                            : 'bg-black/25 border-gold-500/20 hover:border-gold-400/50'
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            {opt.type === 'Single' && <span className="text-gold-400 text-xs font-semibold">1x</span>}
                            {opt.type === 'Couple' && <Heart className="w-3.5 h-3.5 text-maroon-400" />}
                            {opt.type === 'SPAX' && <Users className="w-3.5 h-3.5 text-gold-300" />}
                            <span className="text-xs sm:text-sm font-semibold text-ivory-100 uppercase tracking-wide">
                              {opt.type}
                            </span>
                          </div>
                          <span className="text-[10px] text-ivory-200/60 block mt-0.5">
                            {opt.description}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="font-serif text-lg sm:text-2xl font-bold text-gold-300">
                            ₹{opt.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="py-4 border-t border-gold-500/20">
                    <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-gold-300/90 block mb-3">
                      INCLUDED IN PASS:
                    </span>
                    <ul className="space-y-2.5">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-ivory-200/90 leading-relaxed">
                          <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Book on Fizmaa Button */}
                <div className="pt-6 mt-4 border-t border-gold-500/20">
                  <a
                    href={EVENT_INFO.fizmaaTicketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-sans font-bold text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-all duration-300 ${
                      isFeatured
                        ? 'bg-gold-gradient text-emerald-950 shadow-gold-glow hover:scale-[1.03] border border-gold-100'
                        : 'border border-gold-400/70 text-gold-200 hover:bg-gold-500 hover:text-emerald-950 hover:shadow-gold-subtle'
                    }`}
                  >
                    <span>BOOK {tier.category} PASS ON FIZMAA</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
