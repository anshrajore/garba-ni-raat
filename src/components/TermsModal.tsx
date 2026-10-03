import React from 'react';
import { X, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { TERMS_AND_CONDITIONS, EVENT_INFO } from '../data/eventData';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full rounded-2xl bg-gradient-to-b from-[#003835] via-[#002624] to-[#001716] border-2 border-gold-400 text-ivory-100 p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Corner Mandalas */}
        <div className="absolute top-0 right-0 w-28 opacity-20 pointer-events-none">
          <img src="/assets/ornaments/mandala-corner.png" alt="" className="w-full h-auto" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-emerald-950/80 border border-gold-400/60 text-gold-300 hover:text-white hover:border-gold-300 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-mono font-bold tracking-widest uppercase mb-2">
            <ShieldAlert className="w-3.5 h-3.5" />
            OFFICIAL EVENT GUIDELINES
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-100 tracking-wide">
            TERMS & CONDITIONS
          </h3>
          <p className="text-xs text-gold-200/80 mt-1">
            Garba Ni Raat 2026 • 19 & 20 October • Nashik
          </p>
        </div>

        {/* List of Terms */}
        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          {TERMS_AND_CONDITIONS.map((term, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-950/60 border border-gold-500/20 text-xs sm:text-sm text-ivory-200/90 leading-relaxed"
            >
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <span>{term}</span>
            </div>
          ))}
        </div>

        {/* Action button */}
        <div className="mt-6 pt-4 border-t border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-ivory-200/60 text-center sm:text-left">
            Need help? WhatsApp: {EVENT_INFO.phoneDisplay}
          </p>
          <a
            href={EVENT_INFO.fizmaaTicketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gold-gradient text-black font-extrabold text-xs uppercase tracking-wider shadow-gold-subtle hover:scale-105 transition-all text-center"
          >
            Agree & Book Passes →
          </a>
        </div>
      </div>
    </div>
  );
};
