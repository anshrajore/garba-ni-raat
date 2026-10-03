import React from 'react';
import { PARTNERS_DATA, EVENT_INFO } from '../data/eventData';
import { MessageCircle, ArrowRight, Crown } from 'lucide-react';

export const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="relative py-20 sm:py-28 bg-[#F5E6CC] text-[#1A2E2B] overflow-hidden">
      
      {/* Corner Mandalas */}
      <div className="absolute top-0 right-0 w-36 opacity-20 pointer-events-none">
        <img src="/assets/ornaments/mandala-corner.png" alt="" className="w-full h-auto filter brightness-50" />
      </div>
      <div className="absolute bottom-0 left-0 w-36 opacity-20 pointer-events-none rotate-180">
        <img src="/assets/ornaments/mandala-corner.png" alt="" className="w-full h-auto filter brightness-50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1px] w-12 bg-[#8A5A1A]" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8A5A1A]">
              In Partnership For A Grander Celebration
            </span>
            <span className="h-[1px] w-12 bg-[#8A5A1A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2B1B10]">
            Official Festival Partners
          </h2>
        </div>

        {/* ──────────────────────────────────────────── */}
        {/* PRESENTED BY — Hero Banner Row */}
        {/* ──────────────────────────────────────────── */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <Crown className="w-4 h-4 text-[#8A5A1A]" />
            <span className="text-[11px] uppercase font-mono tracking-[0.25em] font-bold text-[#8A5A1A]">
              Presented By
            </span>
            <span className="h-[1px] flex-1 bg-[#D9A441]/40" />
          </div>

          <div className="bg-white rounded-2xl border border-[#D9A441] shadow-lg p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
              {PARTNERS_DATA.presentedBy.map((p, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && (
                    <div className="hidden sm:block w-[1px] h-20 bg-[#D9A441]/30" />
                  )}
                  <div className="flex flex-col items-center text-center group">
                    <div className="h-20 sm:h-24 flex items-center justify-center mb-2">
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="max-h-full max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-serif text-base font-bold text-[#2B1B10]">{p.name}</h3>
                    <p className="text-[11px] text-[#8A5A1A]">{p.tagline}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* ──────────────────────────────────────────── */}
        {/* CORE PARTNERS — 3-Col Compact Grid */}
        {/* ──────────────────────────────────────────── */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] uppercase font-mono tracking-[0.25em] font-bold text-[#8A5A1A]">
              Official Partners
            </span>
            <span className="h-[1px] flex-1 bg-[#D9A441]/40" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Powered By */}
            <div className="bg-white rounded-2xl border border-[#D9A441]/40 p-5 flex flex-col items-center text-center hover:shadow-lg transition-all hover:border-[#D9A441]">
              <span className="text-[9px] uppercase font-mono tracking-[0.2em] font-bold text-[#8A5A1A]/70 mb-3">
                Powered By
              </span>
              <div className="h-16 sm:h-20 w-full flex items-center justify-center mb-3">
                <img
                  src={PARTNERS_DATA.poweredBy.logo}
                  alt={PARTNERS_DATA.poweredBy.name}
                  className="max-h-full max-w-[160px] object-contain invert"
                />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#2B1B10] leading-tight">
                {PARTNERS_DATA.poweredBy.name}
              </h4>
              <p className="text-[10px] text-[#6E4B28] mt-0.5">{PARTNERS_DATA.poweredBy.tagline}</p>
            </div>

            {/* Gaming Zone */}
            <div className="bg-white rounded-2xl border border-[#D9A441]/40 p-5 flex flex-col items-center text-center hover:shadow-lg transition-all hover:border-[#D9A441]">
              <span className="text-[9px] uppercase font-mono tracking-[0.2em] font-bold text-[#8A5A1A]/70 mb-3">
                Gaming Zone Partner
              </span>
              <div className="h-16 sm:h-20 w-full flex items-center justify-center mb-3">
                <img
                  src={PARTNERS_DATA.gamingPartner.logo}
                  alt={PARTNERS_DATA.gamingPartner.name}
                  className="max-h-full max-w-[160px] object-contain"
                />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#2B1B10] leading-tight">
                {PARTNERS_DATA.gamingPartner.name}
              </h4>
              <p className="text-[10px] text-[#6E4B28] mt-0.5">{PARTNERS_DATA.gamingPartner.tagline}</p>
            </div>

            {/* Ticketing */}
            <a
              href={EVENT_INFO.fizmaaTicketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl border-2 border-[#D9A441] p-5 flex flex-col items-center text-center hover:shadow-lg transition-all group"
            >
              <span className="text-[9px] uppercase font-mono tracking-[0.2em] font-bold text-[#8A5A1A]/70 mb-3">
                Official Ticketing Partner
              </span>
              <div className="h-16 sm:h-20 w-full flex items-center justify-center mb-3">
                <img
                  src={PARTNERS_DATA.ticketingPartner.logo}
                  alt={PARTNERS_DATA.ticketingPartner.name}
                  className="max-h-full max-w-[140px] object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#2B1B10] leading-tight">
                {PARTNERS_DATA.ticketingPartner.name}
              </h4>
              <p className="text-[10px] font-bold text-[#EB1537] mt-1 flex items-center gap-1">
                Book Passes <ArrowRight className="w-3 h-3" />
              </p>
            </a>

          </div>
        </div>

        {/* ──────────────────────────────────────────── */}
        {/* FOOD • HOSPITALITY • GROOMING — Horizontal Cards */}
        {/* ──────────────────────────────────────────── */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] uppercase font-mono tracking-[0.25em] font-bold text-[#8A5A1A]">
              Food • Hospitality • Grooming
            </span>
            <span className="h-[1px] flex-1 bg-[#D9A441]/40" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Sadhana Rajeshahi */}
            <div className="bg-white rounded-2xl border border-[#D9A441]/30 p-5 flex flex-col items-center text-center hover:shadow-md transition-all hover:border-[#D9A441]/60">
              <span className="text-[9px] uppercase font-mono tracking-[0.15em] font-bold text-[#C02C42] mb-3">
                Nashik Misal Partner
              </span>
              <div className="h-20 w-full flex items-center justify-center mb-2">
                <img
                  src={PARTNERS_DATA.foodAndLifestyle[0].logo}
                  alt={PARTNERS_DATA.foodAndLifestyle[0].name}
                  className="max-h-full max-w-[160px] object-contain"
                />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#2B1B10]">
                {PARTNERS_DATA.foodAndLifestyle[0].name}
              </h4>
            </div>

            {/* Sadhana Village Resort */}
            <div className="bg-white rounded-2xl border border-[#D9A441]/30 p-5 flex flex-col items-center text-center hover:shadow-md transition-all hover:border-[#D9A441]/60">
              <span className="text-[9px] uppercase font-mono tracking-[0.15em] font-bold text-[#006B5A] mb-3">
                Hospitality Partner
              </span>
              <div className="h-20 w-full flex items-center justify-center mb-2">
                <img
                  src={PARTNERS_DATA.hospitalityPartner.logo}
                  alt={PARTNERS_DATA.hospitalityPartner.name}
                  className="max-h-full max-w-[180px] object-contain"
                />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#2B1B10]">
                {PARTNERS_DATA.hospitalityPartner.name}
              </h4>
            </div>

            {/* Vishal's Salon */}
            <div className="bg-white rounded-2xl border border-[#D9A441]/30 p-5 flex flex-col items-center text-center hover:shadow-md transition-all hover:border-[#D9A441]/60">
              <span className="text-[9px] uppercase font-mono tracking-[0.15em] font-bold text-[#2B1B10] mb-3">
                Grooming & Styling Partner
              </span>
              <div className="h-20 w-full flex items-center justify-center mb-2">
                <img
                  src={PARTNERS_DATA.foodAndLifestyle[1].logo}
                  alt={PARTNERS_DATA.foodAndLifestyle[1].name}
                  className="max-h-full max-w-[180px] object-contain"
                />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#2B1B10]">
                {PARTNERS_DATA.foodAndLifestyle[1].name}
              </h4>
            </div>

          </div>
        </div>

        {/* ──────────────────────────────────────────── */}
        {/* BECOME A PARTNER */}
        {/* ──────────────────────────────────────────── */}
        <div className="rounded-2xl bg-gradient-to-r from-[#003835] via-[#002624] to-[#001716] text-[#FFF5DD] p-6 sm:p-8 border border-[#D9A441]/50 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory-100">
              Partner with Garba Ni Raat 2026
            </h3>
            <p className="text-xs text-[#F4E2C0]/80 mt-1 max-w-md">
              Connect your brand with 5,000+ festive attendees. Stalls, title branding & experiential activations available.
            </p>
          </div>
          <a
            href={`https://wa.me/${EVENT_INFO.whatsappNumber}?text=Hello%20Team%20Garba%20Ni%20Raat!%20I%20would%20like%20to%20inquire%20about%20Sponsorship%20and%20Brand%20Partnership%20opportunities.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold-gradient text-black font-sans font-extrabold text-xs uppercase tracking-wider shadow-gold-subtle hover:scale-105 transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-black" />
            <span>Become a Partner</span>
            <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
};
