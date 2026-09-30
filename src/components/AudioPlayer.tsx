import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music, Disc } from 'lucide-react';

interface AudioPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ isPlaying, onToggle }) => {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);
  const [tempo] = useState(132); // Traditional Garba Tempo (132 BPM)

  useEffect(() => {
    if (isPlaying) {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.18, ctx.currentTime);
        masterGain.connect(ctx.destination);

        // Tanpura Drone Harmonics (Sa-Pa-Sa')
        const droneFrequencies = [138.59, 207.65, 277.18, 415.30];
        droneFrequencies.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = idx === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          osc.detune.setValueAtTime((idx - 1.5) * 4, ctx.currentTime);
          gain.gain.setValueAtTime(0.06, ctx.currentTime);
          osc.connect(gain);
          gain.connect(masterGain);
          osc.start();
        });

        // Garba Beat Synthesizer (Dhol Bass + Slap + Dandiya Clack + Shehnai Accent)
        let beatStep = 0;
        const beatIntervalMs = (60 / tempo / 2) * 1000; // 8th notes

        const playGarbaBeat = () => {
          if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
          const now = audioCtxRef.current.currentTime;

          // 1. Dhol Bass (Dha / Ge) on beats 0, 3, 4, 6 in 8-step Garba loop
          if (beatStep === 0 || beatStep === 4) {
            const bassOsc = ctx.createOscillator();
            const bassGain = ctx.createGain();
            bassOsc.type = 'sine';
            bassOsc.frequency.setValueAtTime(110, now);
            bassOsc.frequency.exponentialRampToValueAtTime(45, now + 0.18);

            bassGain.gain.setValueAtTime(0.4, now);
            bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

            bassOsc.connect(bassGain);
            bassGain.connect(masterGain);
            bassOsc.start(now);
            bassOsc.stop(now + 0.25);
          }

          // 2. High Dholak Slap / Taali (Clap) on beat 2 & 6
          if (beatStep === 2 || beatStep === 6) {
            const slapOsc = ctx.createOscillator();
            const slapGain = ctx.createGain();
            slapOsc.type = 'triangle';
            slapOsc.frequency.setValueAtTime(320, now);
            slapOsc.frequency.exponentialRampToValueAtTime(180, now + 0.08);

            slapGain.gain.setValueAtTime(0.3, now);
            slapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

            slapOsc.connect(slapGain);
            slapGain.connect(masterGain);
            slapOsc.start(now);
            slapOsc.stop(now + 0.12);
          }

          // 3. Crisp Wooden Dandiya Clack on beats 1, 3, 5, 7
          if (beatStep % 2 === 1) {
            const woodOsc = ctx.createOscillator();
            const woodGain = ctx.createGain();
            woodOsc.type = 'square';
            woodOsc.frequency.setValueAtTime(950, now);
            woodOsc.frequency.exponentialRampToValueAtTime(600, now + 0.04);

            woodGain.gain.setValueAtTime(0.12, now);
            woodGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

            woodOsc.connect(woodGain);
            woodGain.connect(masterGain);
            woodOsc.start(now);
            woodOsc.stop(now + 0.06);
          }

          // 4. Shehnai Melody Notes in Raag Yaman / Khamaj
          const melodyNotes = [277.18, 311.13, 349.23, 415.30, 466.16, 554.37];
          if (beatStep === 0 || beatStep === 2 || beatStep === 5) {
            const shehnai = ctx.createOscillator();
            const shehnaiGain = ctx.createGain();
            shehnai.type = 'sawtooth';
            const note = melodyNotes[(beatStep + Math.floor(Math.random() * 3)) % melodyNotes.length];
            shehnai.frequency.setValueAtTime(note, now);

            shehnaiGain.gain.setValueAtTime(0.04, now);
            shehnaiGain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

            shehnai.connect(shehnaiGain);
            shehnaiGain.connect(masterGain);
            shehnai.start(now);
            shehnai.stop(now + 0.3);
          }

          beatStep = (beatStep + 1) % 8;
        };

        intervalRef.current = window.setInterval(playGarbaBeat, beatIntervalMs);
      } catch (err) {
        console.warn('Audio synthesis failed:', err);
      }
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
    };
  }, [isPlaying, tempo]);

  return (
    /* Floating Bottom-Right Garba Music Player Widget */
    <div className="fixed bottom-6 right-6 z-50 animate-fadeIn">
      <button
        onClick={onToggle}
        className={`flex items-center gap-3 px-4 py-2.5 rounded-full border shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${
          isPlaying
            ? 'bg-gradient-to-r from-emerald-900 via-emerald-850 to-maroon-900 border-gold-300 text-ivory-100 shadow-gold-glow'
            : 'bg-emerald-950/90 backdrop-blur-md border-gold-500/40 text-gold-300 hover:border-gold-400'
        }`}
        title={isPlaying ? 'Pause Garba Song' : 'Play Authentic Garba Beats'}
        aria-label="Toggle Garba Music"
      >
        <div className="relative">
          <Disc className={`w-5 h-5 ${isPlaying ? 'animate-spin-slow text-gold-300' : 'text-gold-500'}`} />
          {isPlaying && (
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold-400 animate-ping" />
          )}
        </div>

        <div className="text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold tracking-wider font-serif uppercase">
              {isPlaying ? 'GARBA BEATS PLAYING' : 'PLAY GARBA SONG'}
            </span>
            {isPlaying ? (
              <div className="flex items-end gap-0.5 h-3">
                <span className="w-1 bg-gold-400 h-3 animate-pulse" />
                <span className="w-1 bg-gold-300 h-2 animate-pulse delay-75" />
                <span className="w-1 bg-gold-400 h-3.5 animate-pulse delay-150" />
              </div>
            ) : (
              <VolumeX className="w-3.5 h-3.5 opacity-60" />
            )}
          </div>
          <span className="text-[9px] text-ivory-200/70 block uppercase tracking-widest">
            {isPlaying ? 'Traditional 3-Taal Raas' : 'Click to feel the rhythm'}
          </span>
        </div>
      </button>
    </div>
  );
};
