import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Ticket, Flame } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';

export const BookingPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('gnr_booking_popup_dismissed');
    if (isDismissed) return;

    // Show after 6 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 6000);

    // Or show after scrolling 25%
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0 && scrollPosition / totalHeight > 0.25) {
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
    sessionStorage.setItem('gnr_booking_popup_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-[340px] sm:max-w-sm w-[calc(100vw-2rem)] animate-fadeIn">
      <div className="relative rounded-2xl bg-gradient-to-br from-[#003835] via-[#002624] to-[#2B060F] p-4 sm:p-5 border-2 border-gold-400 shadow-[0_15px_40px_rgba(0,0,0,0.85)] text-ivory-100 overflow-hidden">
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2.5 right-2.5 p-1 rounded-full bg-emerald-950/80 border border-gold-400/50 text-gold-300 hover:text-white hover:border-gold-300 transition-colors"
          aria-label="Close"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Compact Header */}
        <div className="flex items-center gap-2.5 mb-2 pr-6">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 text-emerald-950 flex items-center justify-center shrink-0 shadow-gold-subtle">
            <Ticket className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="px-1.5 py-0.2 rounded bg-maroon-500 text-[9px] font-bold tracking-wider uppercase text-white flex items-center gap-0.5">
                <Flame className="w-2.5 h-2.5 text-gold-300" /> FAST FILLING
              </span>
              <span className="text-[10px] font-mono text-gold-300 font-bold">19 & 20 OCT</span>
            </div>
            <h4 className="font-serif text-sm sm:text-base font-bold text-ivory-100 leading-tight">
              Book Passes on Fizmaa
            </h4>
          </div>
        </div>

        <p className="text-[11px] text-ivory-200/80 mb-3 leading-snug">
          Official passes starting at <strong className="text-gold-300 font-bold">₹699</strong>. Select your night below:
        </p>

        {/* Dual CTA Buttons for 19 Oct & 20 Oct */}
        <div className="grid grid-cols-2 gap-2">
          {/* Day 1: Legacy (19 Oct) */}
          <a
            href={EVENT_INFO.fizmaaLegacyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sessionStorage.setItem('gnr_booking_popup_dismissed', 'true')}
            className="inline-flex flex-col items-center justify-center p-2.5 rounded-xl bg-gold-gradient text-black font-extrabold text-center border border-gold-200 shadow-gold-subtle hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span className="text-[9px] uppercase font-mono tracking-wider text-black/80 font-bold">DAY 01 • 19 OCT</span>
            <span className="text-[11px] uppercase tracking-wide flex items-center justify-center gap-0.5 font-black text-black leading-tight">
              LEGACY PASS <ArrowRight className="w-3 h-3 stroke-[2.5]" />
            </span>
          </a>

          {/* Day 2: Democracy (20 Oct) */}
          <a
            href={EVENT_INFO.fizmaaDemocracyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sessionStorage.setItem('gnr_booking_popup_dismissed', 'true')}
            className="inline-flex flex-col items-center justify-center p-2.5 rounded-xl bg-gold-gradient text-black font-extrabold text-center border border-gold-200 shadow-gold-subtle hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span className="text-[9px] uppercase font-mono tracking-wider text-black/80 font-bold">DAY 02 • 20 OCT</span>
            <span className="text-[11px] uppercase tracking-wide flex items-center justify-center gap-0.5 font-black text-black leading-tight">
              DEMOCRACY PASS <ArrowRight className="w-3 h-3 stroke-[2.5]" />
            </span>
          </a>
        </div>

      </div>
    </div>
  );
};
