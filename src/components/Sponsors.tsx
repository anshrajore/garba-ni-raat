import React from 'react';
import { SPONSORS_DATA, EVENT_INFO } from '../data/eventData';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="relative py-24 sm:py-32 bg-[#F5E6CC] text-[#1A2E2B] overflow-hidden">
      
      {/* Corner Mandalas */}
      <div className="absolute top-0 right-0 w-36 opacity-20 pointer-events-none">
        <img src="/assets/ornaments/mandala-corner.png" alt="" className="w-full h-auto filter brightness-50" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1px] w-12 bg-[#8A5A1A]" />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#8A5A1A]">
              {SPONSORS_DATA.subtitle}
            </span>
            <span className="h-[1px] w-12 bg-[#8A5A1A]" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2B1B10] mb-2">
            {SPONSORS_DATA.headline}
          </h2>
          <div className="w-20 h-3 mx-auto opacity-70">
            <img src="/assets/ornaments/floral-divider.png" alt="" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Featured Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch mb-14">
          
          {/* TBH Principal Partner Card */}
          <div className="p-8 rounded-2xl bg-white border border-[#D9A441] shadow-lg flex flex-col justify-between group hover:shadow-2xl transition-all">
            <div>
              <span className="inline-block px-3 py-1 rounded-md bg-[#8A5A1A]/10 text-[#8A5A1A] text-[10px] font-mono font-bold tracking-widest uppercase mb-4">
                {SPONSORS_DATA.primaryPartner.role}
              </span>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1A2E2B] to-[#001716] text-[#E8B95B] flex items-center justify-center font-serif text-2xl font-black tracking-widest shadow-md">
                  TBH
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#2B1B10]">
                    {SPONSORS_DATA.primaryPartner.name}
                  </h3>
                  <p className="text-xs text-[#8A5A1A] font-medium">
                    {SPONSORS_DATA.primaryPartner.tagline}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4A3B32] leading-relaxed mt-4">
                {SPONSORS_DATA.primaryPartner.desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#D9A441]/30 flex items-center gap-2 text-xs font-semibold text-[#8A5A1A]">
              <Sparkles className="w-4 h-4 text-[#D9A441]" />
              <span>Official Festival Partner 2026</span>
            </div>
          </div>

          {/* FIZMAA Exclusive Ticketing Partner Card */}
          <div className="p-8 rounded-2xl bg-white border border-[#D9A441] shadow-lg flex flex-col justify-between group hover:shadow-2xl transition-all">
            <div>
              <span className="inline-block px-3 py-1 rounded-md bg-[#8A5A1A]/10 text-[#8A5A1A] text-[10px] font-mono font-bold tracking-widest uppercase mb-4">
                {SPONSORS_DATA.ticketingPartner.role}
              </span>

              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <img
                    src={SPONSORS_DATA.ticketingPartner.logo}
                    alt="Fizmaa"
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4A3B32] leading-relaxed mt-4">
                Seamless digital ticketing, instant pass delivery, and dedicated entry verification for Garba Ni Raat 2026 attendees.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#D9A441]/30 flex items-center gap-2 text-xs font-semibold text-[#8A5A1A]">
              <Sparkles className="w-4 h-4 text-[#D9A441]" />
              <span>Exclusive Ticketing & Fast-Track Entry</span>
            </div>
          </div>

        </div>

        {/* Sponsor Inquiries / Become a Partner Banner */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-[#003835] via-[#002624] to-[#001716] text-[#FFF5DD] p-7 sm:p-9 border border-[#D9A441]/50 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#E8B95B] font-bold block mb-1">
              BRAND ALLIANCES & STALL INQUIRIES
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory-100">
              Partner with Garba Ni Raat 2026
            </h3>
            <p className="text-xs text-[#F4E2C0]/80 mt-1 max-w-md">
              Connect your brand with 5,000+ festive attendees across Nashik. Stalls, title branding & VIP experiences available.
            </p>
          </div>

          <a
            href={`https://wa.me/${EVENT_INFO.whatsappNumber}?text=Hello%20Team%20Garba%20Ni%20Raat!%20I%20would%20like%20to%20inquire%20about%20Sponsorship%20and%20Brand%20Partnership%20opportunities.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold-gradient text-emerald-950 font-sans font-bold text-xs uppercase tracking-wider shadow-gold-subtle hover:scale-105 transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Sponsorship Deck & Contact</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
