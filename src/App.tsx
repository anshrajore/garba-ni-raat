import { useState } from 'react';
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
import { BookingModal } from './components/BookingModal';
import { AudioPlayer } from './components/AudioPlayer';
import { PassCategory } from './types';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPassCategory, setSelectedPassCategory] = useState<PassCategory>('Legacy');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleOpenBooking = (category: PassCategory = 'Legacy') => {
    setSelectedPassCategory(category);
    setIsBookingOpen(true);
  };

  const handleToggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };

  return (
    <div className="min-h-screen bg-emerald-950 text-ivory-100 font-sans selection:bg-gold-500 selection:text-emerald-950">
      {/* Background Tanpura Ambient Player */}
      <AudioPlayer isPlaying={isAudioPlaying} />

      {/* 01 — NAVIGATION */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        isAudioPlaying={isAudioPlaying}
        toggleAudio={handleToggleAudio}
      />

      {/* 02 — HERO */}
      <Hero onOpenBooking={() => handleOpenBooking('Legacy')} />

      {/* 03 — BOOK YOUR NIGHT */}
      <BookYourNight onOpenBooking={() => handleOpenBooking('Legacy')} />

      {/* 04 — EVENT DETAILS */}
      <EventDetails />

      {/* 05 — CHOOSE YOUR EXPERIENCE */}
      <ChooseExperience onOpenBooking={handleOpenBooking} />

      {/* 06 — VENUE & LOCATION */}
      <VenueLocation />

      {/* 07 — MORE THAN JUST GARBA */}
      <MoreThanGarba />

      {/* 08 — SPONSORS */}
      <Sponsors />

      {/* 09 — THE GARBA MOMENTS / GALLERY */}
      <Gallery />

      {/* 10 — GET IN TOUCH */}
      <GetInTouch />

      {/* 11 — FOOTER */}
      <Footer />

      {/* Interactive Booking & Ticketing Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialCategory={selectedPassCategory}
      />
    </div>
  );
}

export default App;
