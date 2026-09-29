import React from 'react';
import { Phone, Mail, MessageCircle, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';

export const GetInTouch: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#F5E6CC] text-[#1A2E2B] overflow-hidden">
      
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
          
          {/* Left: 3 Direct Contact Blocks (7 Cols) */}
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

          {/* Right: Social Channels (5 Cols) */}
          <div className="lg:col-span-5 p-7 rounded-2xl bg-emerald-900 text-ivory-100 border border-gold-400/50 shadow-xl flex flex-col justify-between corner-decor">
            <div>
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-gold-400 font-bold block mb-1">
                STAY CONNECTED
              </span>
              <h3 className="font-serif text-2xl font-bold text-ivory-100 tracking-wide mb-3">
                FOLLOW THE CELEBRATION
              </h3>
              <p className="text-xs text-ivory-200/80 leading-relaxed mb-6">
                Catch behind-the-scenes artist announcements, passes giveaways, and festive highlights.
              </p>
            </div>

            {/* Circular Social Icons */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: 'https://instagram.com' },
                { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', href: 'https://facebook.com' },
                { icon: <Youtube className="w-5 h-5" />, label: 'YouTube', href: 'https://youtube.com' },
                { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: <MessageCircle className="w-5 h-5" />, label: 'WhatsApp', href: EVENT_INFO.whatsappLink }
              ].map((social, sIdx) => (
                <a
                  key={sIdx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full border border-gold-400/50 bg-emerald-950/70 flex items-center justify-center text-gold-300 hover:text-emerald-950 hover:bg-gold-gradient hover:border-gold-300 transition-all duration-300 hover:scale-110 shadow-gold-subtle"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
