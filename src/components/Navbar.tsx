import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Volume2, VolumeX, Ticket } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';

interface NavbarProps {
  isAudioPlaying: boolean;
  toggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isAudioPlaying, toggleAudio }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Event', href: '#event-details' },
    { name: 'Tickets', href: '#choose-experience' },
    { name: 'Venues', href: '#venue' },
    { name: 'Partners', href: '#sponsors' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-emerald-950/95 backdrop-blur-md py-3 shadow-xl border-b border-gold-500/20'
          : 'bg-gradient-to-b from-emerald-950/90 via-emerald-950/40 to-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src="/assets/brand/garba-ni-raat-logo.png"
            alt="Garba Ni Raat"
            className="h-11 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(217,164,65,0.4)]"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.14em] font-medium text-ivory-200/85 hover:text-gold-300 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Audio Ambient Button */}
          <button
            onClick={toggleAudio}
            className="relative p-2.5 rounded-full border border-gold-500/30 text-gold-300 hover:text-gold-200 hover:border-gold-400 bg-emerald-900/60 backdrop-blur transition-all duration-300 hover:scale-105"
            title={isAudioPlaying ? 'Mute Festive Ambiance' : 'Play Festive Ambiance'}
            aria-label="Toggle Ambiance"
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-4 h-4 animate-pulse" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold-400 animate-ping" />
              </>
            ) : (
              <VolumeX className="w-4 h-4 opacity-70" />
            )}
          </button>

          {/* Book Tickets Direct Fizmaa Link */}
          <a
            href={EVENT_INFO.fizmaaTicketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold-gradient text-black font-sans font-extrabold text-xs tracking-[0.12em] uppercase shadow-gold-subtle hover:shadow-gold-glow transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] border border-gold-300"
          >
            <Ticket className="w-3.5 h-3.5 text-black stroke-[2.5]" />
            <span>BOOK TICKETS</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-gold-300 hover:text-gold-100 rounded-lg border border-gold-500/30 bg-emerald-900/60"
            aria-label="Open Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-emerald-950/98 backdrop-blur-xl border-b border-gold-500/30 px-6 py-6 transition-all animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.15em] font-medium text-ivory-200 hover:text-gold-300 py-2 border-b border-gold-500/10"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <a
                href={EVENT_INFO.fizmaaTicketUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gold-gradient text-black font-extrabold text-xs uppercase tracking-widest shadow-gold-subtle border border-gold-300"
              >
                <Sparkles className="w-4 h-4 text-black stroke-[2.5]" />
                <span>BOOK TICKETS ON FIZMAA</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
