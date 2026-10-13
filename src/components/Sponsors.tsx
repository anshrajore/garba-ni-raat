import React from 'react';
import { PARTNERS_DATA, EVENT_INFO } from '../data/eventData';
import { MessageCircle, ArrowRight, Crown, Sparkles, Gem, Shirt, Gamepad2, Scissors, Utensils, Plane, Home, HeartHandshake, Soup, Gift, Users, Leaf, Zap, Dumbbell, Smile, Camera, Video, ShoppingBag } from 'lucide-react';

export const Sponsors: React.FC = () => {
  // Helper to get category icon for text-based partners
  const getPartnerIcon = (role: string) => {
    const r = role.toLowerCase();
    if (r.includes('jewel')) return <Gem className="w-5 h-5 text-gold-400" />;
    if (r.includes('drip') || r.includes('style')) return <Shirt className="w-5 h-5 text-gold-400" />;
    if (r.includes('comfort')) return <HeartHandshake className="w-5 h-5 text-gold-400" />;
    if (r.includes('textile')) return <ShoppingBag className="w-5 h-5 text-gold-400" />;
    if (r.includes('visibility') || r.includes('pixel')) return <Camera className="w-5 h-5 text-gold-400" />;
    if (r.includes('smile') || r.includes('dental')) return <Smile className="w-5 h-5 text-gold-400" />;
    if (r.includes('gaming')) return <Gamepad2 className="w-5 h-5 text-gold-400" />;
    if (r.includes('salon') || r.includes('lifestyle')) return <Scissors className="w-5 h-5 text-gold-400" />;
    if (r.includes('chivda') || r.includes('food')) return <Utensils className="w-5 h-5 text-gold-400" />;
    if (r.includes('travel')) return <Plane className="w-5 h-5 text-gold-400" />;
    if (r.includes('real estate') || r.includes('builder') || r.includes('construction')) return <Home className="w-5 h-5 text-gold-400" />;
    if (r.includes('masala')) return <Soup className="w-5 h-5 text-gold-400" />;
    if (r.includes('gift')) return <Gift className="w-5 h-5 text-gold-400" />;
    if (r.includes('sustainability') || r.includes('plogger')) return <Leaf className="w-5 h-5 text-gold-400" />;
    if (r.includes('media')) return <Video className="w-5 h-5 text-gold-400" />;
    return <Sparkles className="w-5 h-5 text-gold-400" />;
  };

  return (
    <section id="sponsors" className="relative py-20 sm:py-28 bg-[#F5E6CC] text-[#1A2E2B] overflow-hidden">
      
      {/* Corner Mandalas */}
      <div className="absolute top-0 right-0 w-36 opacity-20 pointer-events-none">
        <img src="/assets/ornaments/mandala-corner.png" alt="" className="w-full h-auto filter brightness-50" />
      </div>
      <div className="absolute bottom-0 left-0 w-36 opacity-20 pointer-events-none rotate-180">
        <img src="/assets/ornaments/mandala-corner.png" alt="" className="w-full h-auto filter brightness-50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
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
            Official Sponsors &amp; Partners
          </h2>
          <p className="text-xs sm:text-sm text-[#6E4B28] mt-2 max-w-lg mx-auto">
            Proudly supported by leading industry leaders and trusted brands across Nashik &amp; India.
          </p>
        </div>

        {/* ──────────────────────────────────────────── */}
        {/* TITLE SPONSOR — Refined Luxury Showcase */}
        {/* ──────────────────────────────────────────── */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <Crown className="w-4 h-4 text-[#8A5A1A]" />
            <span className="text-[11px] uppercase font-mono tracking-[0.25em] font-bold text-[#8A5A1A]">
              Title Sponsor
            </span>
            <span className="h-[1px] flex-1 bg-[#D9A441]/40" />
          </div>

          <div className="max-w-xl mx-auto bg-white rounded-2xl border-2 border-[#D9A441] shadow-lg p-7 sm:p-9 flex flex-col items-center text-center justify-center hover:shadow-xl transition-all">
            {/* Title Sponsor Badge */}
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FDF6E9] border border-[#D9A441]/60 text-[11px] uppercase font-mono tracking-wider text-[#8A5A1A] font-bold mb-4">
              <Crown className="w-4 h-4 text-gold-500 fill-gold-500/20" />
              👑 Title Sponsor
            </span>

            {/* AU Small Finance Bank Logo */}
            {PARTNERS_DATA.titleSponsor.logo && (
              <div className="h-20 sm:h-24 w-full flex items-center justify-center mb-4">
                <img
                  src={`${PARTNERS_DATA.titleSponsor.logo}?v=3`}
                  alt={PARTNERS_DATA.titleSponsor.name}
                  className="max-h-full max-w-[260px] sm:max-w-[320px] object-contain rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B1B10]">
              {PARTNERS_DATA.titleSponsor.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#6E4B28] mt-1 max-w-md">
              {PARTNERS_DATA.titleSponsor.tagline}
            </p>
          </div>
        </div>

        {/* ──────────────────────────────────────────── */}
        {/* POWERED BY & CO-POWERED BY */}
        {/* ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          
          {/* Powered By — Kinetic EV */}
          <div className="bg-white rounded-2xl border-2 border-[#D9A441]/70 shadow-md p-6 sm:p-7 flex flex-col items-center text-center justify-center hover:shadow-lg transition-all">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FDF6E9] border border-[#D9A441]/40 text-[10px] uppercase font-mono tracking-wider text-[#8A5A1A] font-bold mb-3">
              <Zap className="w-3.5 h-3.5 text-gold-500" />
              {PARTNERS_DATA.poweredBy.role}
            </span>
            <div className="h-16 w-full flex items-center justify-center mb-3">
              {PARTNERS_DATA.poweredBy.logo ? (
                <img
                  src={PARTNERS_DATA.poweredBy.logo}
                  alt={PARTNERS_DATA.poweredBy.name}
                  className="max-h-full max-w-[200px] object-contain"
                />
              ) : (
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-950 to-emerald-900 flex items-center justify-center border border-gold-400/40 shadow-inner">
                  <Zap className="w-7 h-7 text-gold-300" />
                </div>
              )}
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#2B1B10]">
              {PARTNERS_DATA.poweredBy.name}
            </h4>
            <p className="text-xs text-[#6E4B28] mt-1">
              {PARTNERS_DATA.poweredBy.tagline}
            </p>
          </div>

          {/* Co-Powered By — Indian Fitness Gym */}
          <div className="bg-white rounded-2xl border-2 border-[#D9A441]/70 shadow-md p-6 sm:p-7 flex flex-col items-center text-center justify-center hover:shadow-lg transition-all">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FDF6E9] border border-[#D9A441]/40 text-[10px] uppercase font-mono tracking-wider text-[#8A5A1A] font-bold mb-3">
              <Dumbbell className="w-3.5 h-3.5 text-gold-500" />
              {PARTNERS_DATA.coPoweredBy.role}
            </span>
            <div className="h-14 w-full flex items-center justify-center mb-3">
              <img
                src={PARTNERS_DATA.coPoweredBy.logo}
                alt={PARTNERS_DATA.coPoweredBy.name}
                className="max-h-full max-w-[160px] object-contain invert"
              />
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#2B1B10]">
              {PARTNERS_DATA.coPoweredBy.name}
            </h4>
            <p className="text-xs text-[#6E4B28] mt-1">
              {PARTNERS_DATA.coPoweredBy.tagline}
            </p>
          </div>

        </div>

        {/* ──────────────────────────────────────────── */}
        {/* EVENT ORGANIZERS */}
        {/* ──────────────────────────────────────────── */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] uppercase font-mono tracking-[0.25em] font-bold text-[#8A5A1A]">
              Event Organizers
            </span>
            <span className="h-[1px] flex-1 bg-[#D9A441]/40" />
          </div>

          <div className="bg-white rounded-2xl border border-[#D9A441] shadow-md p-6 sm:p-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-center">
              {PARTNERS_DATA.organizers.map((org, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="h-16 sm:h-20 flex items-center justify-center mb-2">
                    <img
                      src={org.logo}
                      alt={org.name}
                      className="max-h-full max-w-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-[9px] uppercase font-mono tracking-wider text-[#8A5A1A] font-bold mb-0.5">
                    {org.role}
                  </span>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#2B1B10]">
                    {org.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ──────────────────────────────────────────── */}
        {/* OFFICIAL CATEGORY PARTNERS (16 Brands) */}
        {/* ──────────────────────────────────────────── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-4 h-4 text-[#8A5A1A]" />
            <span className="text-[11px] uppercase font-mono tracking-[0.25em] font-bold text-[#8A5A1A]">
              Official Category &amp; Experience Partners
            </span>
            <span className="h-[1px] flex-1 bg-[#D9A441]/40" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {PARTNERS_DATA.allPartners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#D9A441]/40 p-4 sm:p-5 flex flex-col items-center text-center hover:shadow-lg transition-all hover:border-[#D9A441] group"
              >
                {/* Category Role Badge */}
                <span className="text-[9px] uppercase font-mono tracking-wider font-bold text-[#8A5A1A] bg-[#FDF6E9] px-2.5 py-1 rounded-full border border-[#D9A441]/30 mb-3 block w-full truncate">
                  {partner.role}
                </span>

                {/* Logo or Icon Display */}
                <div className="h-16 w-full flex items-center justify-center mb-2">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-950 to-emerald-900 flex items-center justify-center border border-gold-400/40 shadow-inner group-hover:scale-110 transition-transform">
                      {getPartnerIcon(partner.role)}
                    </div>
                  )}
                </div>

                {/* Partner Name */}
                <h4 className="font-serif text-sm font-bold text-[#2B1B10] leading-snug mt-1">
                  {partner.name}
                </h4>

                {/* Tagline */}
                <p className="text-[10px] text-[#6E4B28] mt-0.5 line-clamp-1">
                  {partner.tagline}
                </p>
              </div>
            ))}
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
              Connect your brand with 5,000+ festive attendees. Stalls, title branding &amp; experiential activations available.
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
