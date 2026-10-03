import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SEO_FAQS } from '../data/eventData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-emerald-950 text-ivory-100 border-t border-gold-500/20 overflow-hidden">
      
      {/* Decorative Ornaments */}
      <div className="absolute top-0 right-0 w-44 opacity-20 pointer-events-none">
        <img src="/assets/ornaments/mandala-corner.png" alt="" className="w-full h-auto" />
      </div>

      <div className="container-custom relative z-10 max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-[1px] w-12 bg-gold-400/60" />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-gold-300">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="h-[1px] w-12 bg-gold-400/60" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ivory-100 mb-3">
            EVERYTHING YOU NEED TO KNOW
          </h2>

          <p className="text-xs sm:text-sm text-gold-200/80 max-w-lg mx-auto">
            Essential guidelines, venue information, and pass details for Nashik's biggest Navratri celebration.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {SEO_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-emerald-900/60 border-gold-400 shadow-gold-subtle'
                    : 'bg-emerald-900/30 border-gold-500/30 hover:border-gold-400/60'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-gold-400 shrink-0" />
                    <h3 className="font-serif text-sm sm:text-base md:text-lg font-bold text-ivory-100">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`p-1.5 rounded-full bg-emerald-950/80 border border-gold-400/40 text-gold-300 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-ivory-200/85 leading-relaxed border-t border-gold-500/20 pt-4 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
