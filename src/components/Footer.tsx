import React, { useState } from 'react';
import { ArrowRight, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-emerald-950 text-ivory-100 border-t border-gold-500/30 pt-16 pb-10 overflow-hidden">
      
      <div className="container-custom relative z-10">
        
        {/* 4-Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gold-500/20">
          
          {/* Col 1: Brand & Logo (4 Cols) */}
          <div className="lg:col-span-4">
            <img
              src="/assets/brand/garba-ni-raat-logo.png"
              alt="Garba Ni Raat"
              className="h-16 w-auto object-contain mb-4 filter drop-shadow-[0_2px_10px_rgba(217,164,65,0.3)]"
            />
            <p className="text-xs text-ivory-200/80 leading-relaxed max-w-sm">
              An unforgettable 2-night celebration of rhythm, royal Gujarati culture, live music, and timeless Navratri heritage in Nashik.
            </p>
          </div>

          {/* Col 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2">
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-gold-400 font-bold block mb-4">
              QUICK LINKS
            </span>
            <ul className="space-y-2 text-xs text-ivory-200/80">
              <li><a href="#hero" className="hover:text-gold-300 transition-colors">Home</a></li>
              <li><a href="#book-your-night" className="hover:text-gold-300 transition-colors">Book Nights</a></li>
              <li><a href="#event-details" className="hover:text-gold-300 transition-colors">Event Details</a></li>
              <li><a href="#choose-experience" className="hover:text-gold-300 transition-colors">Tickets & Passes</a></li>
              <li><a href="#sponsors" className="hover:text-gold-300 transition-colors">Sponsors</a></li>
              <li><a href="#gallery" className="hover:text-gold-300 transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Col 3: Legal (2 Cols) */}
          <div className="lg:col-span-2">
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-gold-400 font-bold block mb-4">
              LEGAL
            </span>
            <ul className="space-y-2 text-xs text-ivory-200/80">
              <li><a href="#choose-experience" className="hover:text-gold-300 transition-colors">Terms & Conditions</a></li>
              <li><a href="#choose-experience" className="hover:text-gold-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#choose-experience" className="hover:text-gold-300 transition-colors">Refund & Cancellation</a></li>
              <li><a href="#choose-experience" className="hover:text-gold-300 transition-colors">Safety Guidelines</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter (4 Cols) */}
          <div className="lg:col-span-4">
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-gold-400 font-bold block mb-4">
              SUBSCRIBE FOR UPDATES
            </span>
            <p className="text-xs text-ivory-200/80 mb-3">
              Receive schedule releases, exclusive early bird alerts, and artist lineup announcements.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2.5 rounded-xl bg-emerald-900/70 border border-gold-500/30 text-ivory-100 text-xs focus:outline-none focus:border-gold-400"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-gold-gradient text-emerald-950 font-bold text-xs uppercase hover:scale-105 transition-transform"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {subscribed && (
              <p className="text-[11px] text-gold-300 mt-2">
                ✓ Thank you for subscribing to Garba Ni Raat updates!
              </p>
            )}
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-ivory-200/60 gap-4">
          <p>© 2026 Garba Ni Raat. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-maroon-500 fill-maroon-500" />
            <span>for the spirit of Navratri • Nashik</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
