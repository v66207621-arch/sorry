import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Radial gradient blobs + subtle ambient glow
export default function AmbientBackground({ scene = 0 }) {
  // Shift glow colour subtly per scene
  const glowConfigs = [
    { rose: 0.12, pink: 0.06, lav: 0.04 }, // Welcome
    { rose: 0.14, pink: 0.08, lav: 0.04 }, // Confession
    { rose: 0.16, pink: 0.06, lav: 0.06 }, // Concern — more emotional
    { rose: 0.13, pink: 0.09, lav: 0.05 }, // Baby moment
    { rose: 0.18, pink: 0.08, lav: 0.06 }, // Apology — peak warmth
    { rose: 0.14, pink: 0.07, lav: 0.05 }, // Forgiveness
    { rose: 0.20, pink: 0.10, lav: 0.07 }, // Hug — most vibrant
    { rose: 0.15, pink: 0.08, lav: 0.06 }, // Final
  ]

  const cfg = glowConfigs[scene] || glowConfigs[0]

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base background */}
      <div className="absolute inset-0" style={{ background: 'var(--bg)' }} />

      {/* Primary rose glow — bottom center */}
      <motion.div
        key={`rose-${scene}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: cfg.rose }}
        transition={{ duration: 1.5 }}
        className="absolute"
        style={{
          bottom: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(800px, 150vw)',
          height: 'min(500px, 80vh)',
          background: 'radial-gradient(ellipse at center, rgba(220, 60, 90, 1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Secondary pink glow — top right */}
      <motion.div
        key={`pink-${scene}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: cfg.pink }}
        transition={{ duration: 2 }}
        className="absolute"
        style={{
          top: '-5%',
          right: '-10%',
          width: 'min(600px, 120vw)',
          height: 'min(400px, 60vh)',
          background: 'radial-gradient(ellipse at center, rgba(255, 120, 160, 1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Lavender accent — left */}
      <motion.div
        key={`lav-${scene}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: cfg.lav }}
        transition={{ duration: 2.5 }}
        className="absolute"
        style={{
          top: '20%',
          left: '-15%',
          width: 'min(500px, 100vw)',
          height: 'min(500px, 70vh)',
          background: 'radial-gradient(ellipse at center, rgba(180, 130, 220, 1) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Center soft glow — subtle warmth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 60%, rgba(232, 67, 106, 0.04) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
