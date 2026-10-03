import React from 'react';
import { ArrowRight, Crown, Users, Heart, Sparkles, Flame, ShieldCheck, MessageCircle } from 'lucide-react';
import { TICKET_TIERS, EVENT_INFO, TERMS_AND_CONDITIONS } from '../data/eventData';

interface ChooseExperienceProps {
  onOpenTerms?: () => void;
}

export const ChooseExperience: React.FC<ChooseExperienceProps> = ({ onOpenTerms }) => {
  const getTicketUrl = (category: string) => {
    if (category === 'Cover') return EVENT_INFO.coverPassWhatsappUrl;
    if (category === 'Legacy') return EVENT_INFO.fizmaaLegacyUrl;
    return EVENT_INFO.fizmaaDemocracyUrl;
  };

  return (
    <section id="choose-experience" className="relative py-24 sm:py-32 bg-emerald-950 text-ivory-100 overflow-hidden">
      
      {/* Decorative Dandiya & Mandala Backgrounds */}
      <div className="absolute top-0 left-0 w-36 sm:w-56 opacity-30 pointer-events-none">
        <img src="/assets/ornaments/mandala-left-accent.png" alt="" className="w-full h-auto" />
      </div>
      <div className="absolute top-0 right-0 w-36 sm:w-56 opacity-30 pointer-events-none">
        <img src="/assets/ornaments/mandala-right-accent.png" alt="" className="w-full h-auto" />
      </div>

      {/* Floating HD Crossed Dandiya in background */}
      <div className="absolute top-1/2 -right-6 w-32 sm:w-44 opacity-25 pointer-events-none hidden lg:block rotate-12 filter drop-shadow-lg">
        <img src="/assets/ornaments/crossed-dandiya-hd.png" alt="" className="w-full h-auto" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Section Header with Grand Mandala Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="w-48 sm:w-64 mx-auto mb-3">
            <img src="/assets/ornaments/mandala-header-banner.png" alt="" className="w-full h-auto object-contain" />
          </div>

          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-[1px] w-12 bg-gold-400/60" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-300 flex items-center gap-2">
              <img src="/assets/ornaments/royal-diya-hd.png" alt="" className="w-4 h-4 object-contain" />
              OFFICIAL FESTIVAL TICKETS
              <img src="/assets/ornaments/royal-diya-hd.png" alt="" className="w-4 h-4 object-contain" />
            </span>
            <span className="h-[1px] w-12 bg-gold-400/60" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ivory-100 mb-2">
            CHOOSE YOUR EXPERIENCE
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base tracking-[0.16em] uppercase font-medium text-gold-200/90 max-w-xl mx-auto">
            DIFFERENT PASSES. SAME UNFORGETTABLE ENERGY.
          </p>
        </div>

        {/* 3 Master Pricing Tier Cards - COVER PASS FIRST & ELEVATED FOR CONVERSION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {TICKET_TIERS.map((tier) => {
            const isFeatured = tier.isPopular; // Cover Pass is index 0 and isPopular = true
            const isCover = tier.category === 'Cover';
            const actionUrl = getTicketUrl(tier.category);

            return (
              <div
                key={tier.category}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-maroon-800 via-maroon-900 to-[#32060E] border-2 border-gold-300 shadow-gold-glow md:scale-105 z-20 order-first'
                    : 'bg-emerald-900/70 border border-gold-500/40 shadow-xl z-10'
                } p-7 sm:p-8 corner-decor`}
              >
                {/* Royal Dupatta Drape on Cover Pass Card */}
                {isFeatured && (
                  <div className="absolute -top-6 -right-6 w-32 sm:w-36 pointer-events-none z-30 filter drop-shadow-md">
                    <img src="/assets/ornaments/royal-dupatta-drape.png" alt="" className="w-full h-auto object-contain" />
                  </div>
                )}

                {/* Popular Crown Badge for Cover Pass */}
                {isFeatured ? (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gold-gradient text-black text-[11px] font-extrabold tracking-widest uppercase flex items-center gap-1.5 shadow-gold-glow border border-gold-100 whitespace-nowrap z-40">
                    <Crown className="w-3.5 h-3.5 text-black stroke-[2.5]" />
                    #1 MOST POPULAR • VIP PASS
                  </div>
                ) : tier.category === 'Legacy' ? (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-950 border border-gold-400 text-gold-300 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
                    <Flame className="w-3 h-3 text-gold-400" />
                    19 OCT • LEGACY VENUE
                  </div>
                ) : (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-950 border border-gold-400 text-gold-300 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
                    <Flame className="w-3 h-3 text-gold-400" />
                    20 OCT • DEMOCRACY VENUE
                  </div>
                )}

                <div>
                  {/* Category Title */}
                  <div className="text-center pb-6 border-b border-gold-500/20 relative">
                    <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-300 font-semibold block mb-1">
                      {tier.category === 'Cover' ? 'VIP ALL-ACCESS' : tier.category === 'Legacy' ? 'ROYAL ENTRY (19 OCT)' : 'GRAND ENTRY (20 OCT)'}
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
                            {(opt.type === 'Single' || opt.type === 'General') && <span className="text-gold-400 text-xs font-semibold">1x</span>}
                            {opt.type === 'Couple' && <Heart className="w-3.5 h-3.5 text-maroon-400" />}
                            {(opt.type === 'SPAX' || opt.type === 'Group') && <Users className="w-3.5 h-3.5 text-gold-300" />}
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
                </div>

                {/* Booking Button — WhatsApp for Cover, Fizmaa for Legacy & Democracy */}
                <div className="pt-6 mt-4 border-t border-gold-500/20">
                  <a
                    href={actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-sans font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 text-center ${
                      isCover
                        ? 'bg-gold-gradient text-black shadow-gold-glow hover:scale-[1.03] border border-gold-100'
                        : 'border border-gold-400/70 text-gold-200 hover:bg-gold-gradient hover:text-black hover:border-gold-300 hover:shadow-gold-subtle'
                    }`}
                  >
                    {isCover ? (
                      <>
                        <MessageCircle className="w-4 h-4 shrink-0 text-black" />
                        <span>WHATSAPP FOR COVER PASS</span>
                      </>
                    ) : (
                      <>
                        <span>BOOK {tier.category.toUpperCase()} PASS ON FIZMAA</span>
                        <ArrowRight className="w-4 h-4 shrink-0 stroke-[2.5]" />
                      </>
                    )}
                  </a>
                </div>

              </div>
            );
          })}

        </div>

        {/* Official Pass Rules & Guidelines Card — Exact 8 Points */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-emerald-900/50 border border-gold-500/30 p-6 sm:p-7 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gold-500/20">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-gold-400" />
              <h4 className="font-serif text-lg font-bold text-ivory-100">
                Official Pass Rules & Guidelines
              </h4>
            </div>
            <button
              onClick={() => onOpenTerms?.()}
              className="text-xs font-mono font-bold text-gold-300 hover:text-white uppercase tracking-wider underline flex items-center gap-1"
            >
              View Terms & Conditions Modal →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4 text-xs text-ivory-200/90 leading-relaxed">
            {TERMS_AND_CONDITIONS.map((term, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="text-gold-400 font-bold shrink-0">•</span>
                <span>{term}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};


