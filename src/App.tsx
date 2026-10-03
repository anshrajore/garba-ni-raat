import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookYourNight } from './components/BookYourNight';
import { EventDetails } from './components/EventDetails';
import { ChooseExperience } from './components/ChooseExperience';
import { VenueLocation } from './components/VenueLocation';
import { MoreThanGarba } from './components/MoreThanGarba';
import { Sponsors } from './components/Sponsors';
import { Gallery } from './components/Gallery';
import { GetInTouch } from './components/GetInTouch';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
import { TermsModal } from './components/TermsModal';
import { BookingPopup } from './components/BookingPopup';
import { FAQ } from './components/FAQ';

export function App() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const handleToggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };

  const handleOpenTerms = () => {
    setIsTermsOpen(true);
  };

  const handleCloseTerms = () => {
    setIsTermsOpen(false);
  };

  return (
    <div className="min-h-screen bg-emerald-950 text-ivory-100 font-sans selection:bg-gold-500 selection:text-emerald-950">
      {/* Authentic Garba Music Player (with Navbar & Floating Widget controls) */}
      <AudioPlayer isPlaying={isAudioPlaying} onToggle={handleToggleAudio} />

      {/* High-Converting Timed / Scroll Booking Popup */}
      <BookingPopup />

      {/* Official Terms & Conditions Modal */}
      <TermsModal isOpen={isTermsOpen} onClose={handleCloseTerms} />

      {/* 01 — NAVIGATION */}
      <Navbar
        isAudioPlaying={isAudioPlaying}
        toggleAudio={handleToggleAudio}
      />

      {/* 02 — HERO */}
      <Hero />

      {/* 03 — BOOK YOUR NIGHT */}
      <BookYourNight />

      {/* 04 — EVENT DETAILS */}
      <EventDetails />

      {/* 05 — CHOOSE YOUR EXPERIENCE (Cover Pass First) */}
      <ChooseExperience onOpenTerms={handleOpenTerms} />

      {/* 06 — VENUE & LOCATION */}
      <VenueLocation />

      {/* 07 — MORE THAN JUST GARBA */}
      <MoreThanGarba />

      {/* 08 — SPONSORS */}
      <Sponsors />

      {/* 09 — THE GARBA MOMENTS / GALLERY */}
      <Gallery />

      {/* 10 — FAQ (SEO RICH SNIPPETS) */}
      <FAQ />

      {/* 11 — GET IN TOUCH */}
      <GetInTouch />

      {/* 12 — FOOTER */}
      <Footer onOpenTerms={handleOpenTerms} />

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
