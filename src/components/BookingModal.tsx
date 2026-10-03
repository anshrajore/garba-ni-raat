import React, { useState } from 'react';
import { X, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { TICKET_TIERS, EVENT_INFO } from '../data/eventData';
import { PassCategory, PassType } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: PassCategory;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'Legacy',
}) => {
  const [selectedDay, setSelectedDay] = useState<'day1' | 'day2' | 'both'>('day1');
  const [selectedCategory, setSelectedCategory] = useState<PassCategory>(initialCategory);
  const [selectedType, setSelectedType] = useState<PassType>('Single');
  const [quantity, setQuantity] = useState<number>(1);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const activeTier = TICKET_TIERS.find((t) => t.category === selectedCategory) || TICKET_TIERS[0];
  const activeOption = activeTier.options.find((o) => o.type === selectedType) || activeTier.options[0];

  const multiplier = selectedDay === 'both' ? 1.85 : 1; // 15% discount on combo pass
  const unitPrice = Math.round(activeOption.price * multiplier);
  const totalPrice = unitPrice * quantity;

  const handleCheckout = () => {
    setIsSuccess(true);
  };

  const dayLabel =
    selectedDay === 'day1'
      ? '19 OCT 2026 (Day 01)'
      : selectedDay === 'day2'
      ? '20 OCT 2026 (Day 02)'
      : 'BOTH NIGHTS COMBO (19 & 20 OCT)';

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-gradient-to-b from-emerald-950 via-emerald-900 to-[#001D1B] border border-gold-400/70 shadow-2xl p-6 sm:p-8 text-ivory-100 corner-decor"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-emerald-950/80 border border-gold-500/40 text-gold-300 hover:text-white"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Modal Header */}
            <div className="text-center pb-6 border-b border-gold-500/20">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-300 font-bold block mb-1">
                GARBA NI RAAT 2026 • OFFICIAL BOOKING
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-100">
                RESERVE YOUR PASS
              </h3>
            </div>

            {/* Step 1: Select Event Date */}
            <div className="mt-6">
              <label className="text-xs uppercase tracking-widest font-semibold text-gold-300 block mb-2">
                1. SELECT NIGHT:
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { id: 'day1', title: 'Day 01', date: '19 Oct' },
                  { id: 'day2', title: 'Day 02', date: '20 Oct' },
                  { id: 'both', title: '2-Night Combo', date: 'Save 15%' },
                ].map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDay(d.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      selectedDay === d.id
                        ? 'bg-gold-gradient text-black border-gold-200 font-extrabold shadow-gold-subtle'
                        : 'bg-emerald-950/60 border-gold-500/30 text-ivory-200 hover:border-gold-400'
                    }`}
                  >
                    <span className="text-xs block font-serif uppercase tracking-wider">{d.title}</span>
                    <span className="text-[11px] opacity-85 block">{d.date}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Pass Category */}
            <div className="mt-6">
              <label className="text-xs uppercase tracking-widest font-semibold text-gold-300 block mb-2">
                2. SELECT PASS CATEGORY:
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {TICKET_TIERS.map((tier) => (
                  <button
                    key={tier.category}
                    onClick={() => {
                      setSelectedCategory(tier.category);
                      if (!tier.options.some((o) => o.type === selectedType)) {
                        setSelectedType(tier.options[0].type);
                      }
                    }}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      selectedCategory === tier.category
                        ? tier.category === 'Legacy'
                          ? 'bg-gradient-to-r from-maroon-800 to-maroon-900 border-gold-300 text-ivory-100 shadow-gold-subtle font-bold'
                          : 'bg-gold-gradient text-black border-gold-200 font-extrabold shadow-gold-subtle'
                        : 'bg-emerald-950/60 border-gold-500/30 text-ivory-200 hover:border-gold-400'
                    }`}
                  >
                    <span className="text-xs font-serif tracking-wider uppercase block">{tier.category}</span>
                    <span className="text-[10px] opacity-80 block">
                      From ₹{tier.options[0].price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Select Pass Type (Single / Couple / SPAX) */}
            <div className="mt-6">
              <label className="text-xs uppercase tracking-widest font-semibold text-gold-300 block mb-2">
                3. PASS TYPE:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {activeTier.options.map((opt) => (
                  <button
                    key={opt.type}
                    onClick={() => setSelectedType(opt.type)}
                    className={`p-3 rounded-xl border flex items-center justify-between transition-all ${
                      selectedType === opt.type
                        ? 'bg-emerald-800 border-gold-300 text-ivory-100 shadow-gold-subtle'
                        : 'bg-emerald-950/60 border-gold-500/30 text-ivory-200 hover:border-gold-400'
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase">{opt.type}</span>
                    <span className="text-xs font-bold text-gold-300 font-serif">₹{Math.round(opt.price * multiplier)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Quantity Stepper & Price Summary */}
            <div className="mt-6 p-4 rounded-xl bg-black/40 border border-gold-500/30 flex items-center justify-between">
              <div>
                <span className="text-xs text-gold-300 font-semibold uppercase block">PASS QUANTITY</span>
                <span className="text-[11px] text-ivory-200/70">{dayLabel}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg bg-emerald-900 border border-gold-500/40 text-gold-300 font-bold flex items-center justify-center hover:bg-gold-500 hover:text-emerald-950"
                >
                  -
                </button>
                <span className="font-serif font-bold text-lg text-ivory-100 w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg bg-emerald-900 border border-gold-500/40 text-gold-300 font-bold flex items-center justify-center hover:bg-gold-500 hover:text-emerald-950"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total Price & Checkout */}
            <div className="mt-6 pt-5 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-ivory-200/80 uppercase tracking-widest block">TOTAL AMOUNT</span>
                <span className="font-serif text-3xl font-bold text-gold-300">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${EVENT_INFO.whatsappNumber}?text=Hello%20Garba%20Ni%20Raat%20Team!%20I%20want%20to%20book%20${quantity}x%20${selectedCategory}%20${selectedType}%20Pass%20for%20${dayLabel}.%20Total:%20₹${totalPrice}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 sm:w-auto px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase flex items-center justify-center gap-1.5 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Assist</span>
                </a>

                <button
                  onClick={handleCheckout}
                  className="w-1/2 sm:w-auto px-6 py-3 rounded-xl bg-gold-gradient text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow hover:scale-105 transition-all border border-gold-200"
                >
                  <span>CONFIRM & BOOK</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* Booking Confirmation State */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-gold-gradient text-emerald-950 flex items-center justify-center mx-auto mb-5 shadow-gold-glow">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-100 mb-2">
              BOOKING RESERVED!
            </h3>

            <p className="text-xs sm:text-sm text-gold-200 mb-6 max-w-md mx-auto">
              Your reservation request for <strong>{quantity}x {selectedCategory} {selectedType} Pass ({dayLabel})</strong> has been logged.
            </p>

            <div className="p-4 rounded-xl bg-emerald-900/70 border border-gold-500/30 max-w-md mx-auto text-left mb-6 text-xs text-ivory-200/90 space-y-2">
              <div className="flex justify-between">
                <span>Pass Category:</span>
                <span className="font-bold text-gold-300">{selectedCategory} ({selectedType})</span>
              </div>
              <div className="flex justify-between">
                <span>Selected Date:</span>
                <span className="font-bold text-ivory-100">{dayLabel}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <span className="font-bold text-gold-300 font-serif text-sm">₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Venue:</span>
                <span className="text-ivory-100">Nashik Grand Royal Lawns</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/${EVENT_INFO.whatsappNumber}?text=Confirmed%20Booking%20Inquiry%20for%20${quantity}x%20${selectedCategory}%20Pass%20(Total:%20₹${totalPrice})`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get E-Pass on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-gold-400 text-gold-200 text-xs uppercase font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
