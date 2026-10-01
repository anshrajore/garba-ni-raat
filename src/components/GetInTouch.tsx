import React from 'react';
import { Phone, Mail, MessageCircle, Instagram, ExternalLink } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';

export const GetInTouch: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#F5E6CC] text-[#1A2E2B] overflow-hidden">
      
      {/* Corner Mandalas */}
      <div className="absolute top-0 left-0 w-36 opacity-20 pointer-events-none">
        <img src="/assets/ornaments/mandala-corner.png" alt="" className="w-full h-auto filter brightness-50" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1px] w-12 bg-[#8A5A1A]" />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#8A5A1A]">
              WE'D LOVE TO HEAR FROM YOU
            </span>
            <span className="h-[1px] w-12 bg-[#8A5A1A]" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2B1B10] mb-2">
            GET IN TOUCH
          </h2>
          <div className="w-20 h-3 mx-auto opacity-70">
            <img src="/assets/ornaments/floral-divider.png" alt="" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* 7 + 5 Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Left: Direct Contact Blocks (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Phone */}
            <a
              href={`tel:${EVENT_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-4 p-5 rounded-xl bg-white/80 border border-[#D9A441]/40 hover:border-[#D9A441] shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-900 text-gold-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8A5A1A] font-bold block">
                  OFFICIAL HELPLINE
                </span>
                <span className="font-serif text-lg font-bold text-[#2B1B10]">
                  {EVENT_INFO.phoneDisplay}
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${EVENT_INFO.email}`}
              className="flex items-center gap-4 p-5 rounded-xl bg-white/80 border border-[#D9A441]/40 hover:border-[#D9A441] shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-900 text-gold-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8A5A1A] font-bold block">
                  DIRECT EMAIL
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-[#2B1B10]">
                  {EVENT_INFO.email}
                </span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={EVENT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-white/80 border border-[#D9A441]/40 hover:border-[#D9A441] shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8A5A1A] font-bold block">
                  WHATSAPP ASSIST & INQUIRIES
                </span>
                <span className="font-serif text-lg font-bold text-[#2B1B10]">
                  {EVENT_INFO.phoneDisplay}
                </span>
              </div>
            </a>

          </div>

          {/* Right: Official Instagram Card (5 Cols) */}
          <div className="lg:col-span-5 p-7 rounded-2xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-[#2A0812] text-ivory-100 border border-gold-400/50 shadow-xl flex flex-col justify-between corner-decor">
            <div>
              {/* Colorful Social Media Brand Logo */}
              <div className="h-20 w-full flex items-center justify-start mb-3">
                <img
                  src={EVENT_INFO.colorfulLogo}
                  alt="Garba Ni Raat Official Social Logo"
                  className="max-h-full max-w-[170px] object-contain filter drop-shadow-md"
                />
              </div>

              <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-gold-400 font-bold block mb-1">
                OFFICIAL INSTAGRAM COMMUNITY
              </span>
              <h3 className="font-serif text-2xl font-bold text-ivory-100 tracking-wide mb-2">
                @garbaniraat_
              </h3>
              <p className="text-xs text-ivory-200/80 leading-relaxed mb-6">
                Follow our official social channel for exclusive artist reveals, passes giveaways, Dandiya workshops, and live festival updates.
              </p>
            </div>

            <div>
              <a
                href={EVENT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E1306C] via-[#FD1D1D] to-[#F77737] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow @garbaniraat_</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
