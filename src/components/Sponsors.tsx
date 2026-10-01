import React from 'react';
import { PARTNERS_DATA, EVENT_INFO } from '../data/eventData';
import { Sparkles, MessageCircle, ArrowRight, Gamepad2, Ticket, Dumbbell, Building2, Utensils, Scissors, Star } from 'lucide-react';

export const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="relative py-24 sm:py-32 bg-[#F5E6CC] text-[#1A2E2B] overflow-hidden">
      
      {/* Corner Mandalas */}
      <div className="absolute top-0 right-0 w-36 opacity-20 pointer-events-none">
        <img src="/assets/ornaments/mandala-corner.png" alt="" className="w-full h-auto filter brightness-50" />
      </div>
      <div className="absolute bottom-0 left-0 w-36 opacity-20 pointer-events-none rotate-180">
        <img src="/assets/ornaments/mandala-corner.png" alt="" className="w-full h-auto filter brightness-50" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1px] w-12 bg-[#8A5A1A]" />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#8A5A1A]">
              {PARTNERS_DATA.subtitle}
            </span>
            <span className="h-[1px] w-12 bg-[#8A5A1A]" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2B1B10] mb-2">
            {PARTNERS_DATA.headline}
          </h2>
          <div className="w-20 h-3 mx-auto opacity-70">
            <img src="/assets/ornaments/floral-divider.png" alt="" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* 1. PRESENTED BY (Top Tier Highlight) */}
        <div className="mb-14 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8A5A1A]/15 text-[#8A5A1A] text-xs font-mono font-bold tracking-[0.2em] uppercase border border-[#8A5A1A]/30">
              <Star className="w-3.5 h-3.5 fill-[#8A5A1A]" />
              PRESENTED BY
              <Star className="w-3.5 h-3.5 fill-[#8A5A1A]" />
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTNERS_DATA.presentedBy.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border-2 border-[#D9A441] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center group hover:scale-[1.02]"
              >
                <div className="h-24 w-full flex items-center justify-center mb-4 p-2">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-full max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2B1B10]">
                  {p.name}
                </h3>
                <p className="text-xs text-[#8A5A1A] font-medium mt-0.5">
                  {p.tagline}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. CORE EVENT PARTNERS (POWERED BY, RENTAL, GAMING, TICKETING) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-14">
          
          {/* Powered By: The Team Indian Fitness */}
          <div className="p-6 rounded-2xl bg-white/90 border border-[#D9A441]/50 shadow-md flex flex-col justify-between text-center hover:shadow-lg transition-all hover:scale-[1.02]">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#8A5A1A] block mb-3">
                {PARTNERS_DATA.poweredBy.role}
              </span>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#003835] to-[#001D1B] text-[#E8B95B] flex items-center justify-center mx-auto mb-4 shadow-md">
                <Dumbbell className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#2B1B10]">
                {PARTNERS_DATA.poweredBy.name}
              </h4>
              <p className="text-xs text-[#6E4B28] mt-1">
                {PARTNERS_DATA.poweredBy.tagline}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#D9A441]/20 text-[11px] font-semibold text-[#8A5A1A]">
              Official Fitness Partner
            </div>
          </div>

          {/* Rental Partner: Eventverse Studio */}
          <div className="p-6 rounded-2xl bg-white/90 border border-[#D9A441]/50 shadow-md flex flex-col justify-between text-center hover:shadow-lg transition-all hover:scale-[1.02]">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#8A5A1A] block mb-3">
                {PARTNERS_DATA.rentalPartner.role}
              </span>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#003835] to-[#001D1B] text-[#E8B95B] flex items-center justify-center mx-auto mb-4 shadow-md">
                <Building2 className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#2B1B10]">
                {PARTNERS_DATA.rentalPartner.name}
              </h4>
              <p className="text-xs text-[#6E4B28] mt-1">
                {PARTNERS_DATA.rentalPartner.tagline}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#D9A441]/20 text-[11px] font-semibold text-[#8A5A1A]">
              Infrastructure & Production
            </div>
          </div>

          {/* Gaming Zone Partner: Fizzyfox */}
          <div className="p-6 rounded-2xl bg-white/90 border border-[#D9A441]/50 shadow-md flex flex-col justify-between text-center hover:shadow-lg transition-all hover:scale-[1.02]">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#8A5A1A] block mb-3">
                {PARTNERS_DATA.gamingPartner.role}
              </span>
              <div className="h-14 w-full flex items-center justify-center mb-4">
                <img
                  src={PARTNERS_DATA.gamingPartner.logo}
                  alt={PARTNERS_DATA.gamingPartner.name}
                  className="max-h-full max-w-[140px] object-contain"
                />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#2B1B10]">
                {PARTNERS_DATA.gamingPartner.name}
              </h4>
              <p className="text-xs text-[#6E4B28] mt-1">
                {PARTNERS_DATA.gamingPartner.tagline}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#D9A441]/20 text-[11px] font-semibold text-[#8A5A1A]">
              Interactive Fun Zone
            </div>
          </div>

          {/* Ticketing Partner: Fizmaa */}
          <a
            href={EVENT_INFO.fizmaaTicketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white/90 border-2 border-[#D9A441] shadow-md flex flex-col justify-between text-center hover:shadow-xl transition-all hover:scale-[1.02] group"
          >
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#8A5A1A] block mb-3">
                {PARTNERS_DATA.ticketingPartner.role}
              </span>
              <div className="h-14 w-full flex items-center justify-center mb-4">
                <img
                  src={PARTNERS_DATA.ticketingPartner.logo}
                  alt={PARTNERS_DATA.ticketingPartner.name}
                  className="max-h-full max-w-[130px] object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#2B1B10]">
                {PARTNERS_DATA.ticketingPartner.name}
              </h4>
              <p className="text-xs text-[#6E4B28] mt-1">
                Instant E-Pass & Priority Entry
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#D9A441]/20 text-[11px] font-bold text-[#EB1537] flex items-center justify-center gap-1">
              <span>Book Official Passes →</span>
            </div>
          </a>

        </div>

        {/* 3. OFFICIAL FOOD & GROOMING PARTNERS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-14">
          
          {/* Sadhana Misal */}
          <div className="p-6 rounded-2xl bg-white border border-[#D9A441]/40 shadow-sm flex items-center gap-4 hover:shadow-md transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#C02C42] text-white flex items-center justify-center shrink-0 shadow-md">
              <Utensils className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#8A5A1A] block">
                OFFICIAL NASHIK MISAL PARTNER
              </span>
              <h4 className="font-serif text-xl font-bold text-[#2B1B10]">
                Sadhana Misal
              </h4>
              <p className="text-xs text-[#6E4B28]">
                Authentic Chulivarchil Nashik Misal & Festive Delicacies
              </p>
            </div>
          </div>

          {/* Vishal Salon */}
          <div className="p-6 rounded-2xl bg-white border border-[#D9A441]/40 shadow-sm flex items-center gap-4 hover:shadow-md transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#003835] text-[#E8B95B] flex items-center justify-center shrink-0 shadow-md">
              <Scissors className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#8A5A1A] block">
                LIFESTYLE & GROOMING PARTNER
              </span>
              <h4 className="font-serif text-xl font-bold text-[#2B1B10]">
                Vishal Salon
              </h4>
              <p className="text-xs text-[#6E4B28]">
                Official Navratri Makeover & Hair Styling Partner
              </p>
            </div>
          </div>

        </div>

        {/* 4. BECOME A SPONSOR / STALL INQUIRY CALLOUT */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-[#003835] via-[#002624] to-[#001716] text-[#FFF5DD] p-7 sm:p-9 border border-[#D9A441]/50 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#E8B95B] font-bold block mb-1">
              BRAND ALLIANCES & STALL INQUIRIES
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory-100">
              Partner with Garba Ni Raat 2026
            </h3>
            <p className="text-xs text-[#F4E2C0]/80 mt-1 max-w-md">
              Connect your brand with 5,000+ enthusiastic festive attendees across Nashik. Stalls, title branding & experiential stalls available.
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
