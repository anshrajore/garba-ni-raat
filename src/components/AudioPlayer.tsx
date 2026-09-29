import React, { useEffect, useRef } from 'react';

interface AudioPlayerProps {
  isPlaying: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ isPlaying }) => {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  useEffect(() => {
    if (isPlaying) {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.04, ctx.currentTime);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Indian classical Tanpura drone harmony frequencies: Sa (C#3 / 138.59 Hz), Pa (G#3 / 207.65 Hz), Sa' (C#4 / 277.18 Hz)
        const freqs = [138.59, 207.65, 277.18, 415.30];
        const oscs: OscillatorNode[] = [];

        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Subtle detune for natural shimmer
          osc.detune.setValueAtTime((idx - 1.5) * 3, ctx.currentTime);

          const gain = ctx.createGain();
          gain.gain.setValueAtTime(0.2, ctx.currentTime);
          osc.connect(gain);
          gain.connect(masterGain);

          osc.start();
          oscs.push(osc);
        });

        oscillatorsRef.current = oscs;
      } catch (err) {
        console.warn('Audio context setup failed', err);
      }
    } else {
      if (audioCtxRef.current) {
        oscillatorsRef.current.forEach((o) => {
          try { o.stop(); } catch (e) {}
        });
        oscillatorsRef.current = [];
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
    }

    return () => {
      if (audioCtxRef.current) {
        oscillatorsRef.current.forEach((o) => {
          try { o.stop(); } catch (e) {}
        });
        oscillatorsRef.current = [];
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
    };
  }, [isPlaying]);

  return null;
};
