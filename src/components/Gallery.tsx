import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/eventData';
import { Maximize2, X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-emerald-950 text-ivory-100 overflow-hidden border-t border-gold-500/20">
      
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1px] w-12 bg-gold-400/60" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-300">
              MUSIC • PEOPLE • CULTURE • CELEBRATION
            </span>
            <span className="h-[1px] w-12 bg-gold-400/60" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ivory-100 mb-2">
            THE GARBA MOMENTS
          </h2>
          <div className="w-20 h-3 mx-auto opacity-70">
            <img src="/assets/ornaments/floral-divider.png" alt="" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* 5-Image Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(idx)}
              className="group relative rounded-xl overflow-hidden cursor-pointer gold-border-card aspect-[4/5] bg-emerald-900"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold-300 font-bold">
                  MOMENT 0{idx + 1}
                </span>
                <h3 className="font-serif text-sm font-bold text-ivory-100 leading-tight">
                  {photo.title}
                </h3>
                <div className="mt-2 flex items-center gap-1 text-[11px] text-gold-300 font-medium">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View Full Photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-emerald-950/80 border border-gold-400 text-gold-300 hover:text-white"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-3xl w-full rounded-2xl overflow-hidden border border-gold-400/60 shadow-2xl bg-emerald-950"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_PHOTOS[selectedPhoto].src}
              alt={GALLERY_PHOTOS[selectedPhoto].title}
              className="w-full h-auto max-h-[75vh] object-contain"
            />
            <div className="p-6 bg-emerald-950/95 border-t border-gold-500/30">
              <h3 className="font-serif text-xl font-bold text-gold-200">
                {GALLERY_PHOTOS[selectedPhoto].title}
              </h3>
              <p className="text-xs text-ivory-200/80 mt-1">
                {GALLERY_PHOTOS[selectedPhoto].desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
