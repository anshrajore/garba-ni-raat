import React, { useState, useEffect } from 'react';
import { X, Sparkles, ArrowRight, Ticket, Flame, Clock } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';

export const BookingPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const isDismissed = sessionStorage.getItem('gnr_booking_popup_dismissed');
    if (isDismissed) return;

    // Timer trigger: show after 7 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 7000);

    // Scroll trigger: show when scrolled past 30%
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0 && scrollPosition / totalHeight > 0.3) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setHasInteracted(true);
    sessionStorage.setItem('gnr_booking_popup_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm sm:max-w-md w-[calc(100vw-3rem)] animate-bounce-subtle">
      <div className="relative rounded-2xl bg-gradient-to-br from-[#003835] via-[#002624] to-[#2B060F] p-5 sm:p-6 border-2 border-gold-400/90 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-ivory-100 corner-decor overflow-hidden">
        
        {/* Background festive glow & mandala */}
        <div className="absolute top-0 right-0 w-32 opacity-15 pointer-events-none">
          <img src="/assets/ornaments/mandala-corner.png" alt="" className="w-full h-auto" />
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-emerald-950/80 border border-gold-400/50 text-gold-300 hover:text-white hover:border-gold-300 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="flex items-start gap-3.5 mb-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-emerald-950 flex items-center justify-center shrink-0 shadow-gold-subtle">
            <Ticket className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="px-2 py-0.5 rounded bg-maroon-500/80 text-[10px] font-bold tracking-wider uppercase text-white flex items-center gap-1">
                <Flame className="w-3 h-3 text-gold-300" /> SELLING FAST
              </span>
              <span className="text-[10px] font-mono text-gold-300 font-bold">19 & 20 OCT</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-ivory-100 leading-tight">
              Book Official Passes on Fizmaa
            </h4>
          </div>
        </div>

        <p className="text-xs text-ivory-200/80 mb-4 leading-relaxed">
          Passes starting from <strong className="text-gold-300 font-bold">₹399</strong>. Exclusive entry for Legacy & Democracy Lawns. Grab your tickets before prices rise!
        </p>

        {/* CTA Button */}
        <a
          href={EVENT_INFO.fizmaaTicketUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            sessionStorage.setItem('gnr_booking_popup_dismissed', 'true');
          }}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold-gradient text-emerald-950 font-sans font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-[1.02] active:scale-[0.98] transition-all border border-gold-200"
        >
          <span>Book Tickets on Fizmaa</span>
          <ArrowRight className="w-4 h-4" />
        </a>

      </div>
    </div>
  );
};
