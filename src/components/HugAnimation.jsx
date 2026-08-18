import { useState, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function randomBetween(a, b) {
  return a + Math.random() * (b - a)
}

function generateBurstParticles(count = 60) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (Math.PI * 2 * i) / count + randomBetween(-0.3, 0.3)
    const distance = randomBetween(80, 260)
    const tx = Math.cos(angle) * distance
    const ty = Math.sin(angle) * distance - randomBetween(20, 80)
    const hearts = ['❤', '🩷', '💗', '💖', '✨', '⭐', '💫']
    return {
      id: i,
      tx,
      ty,
      glyph: hearts[Math.floor(Math.random() * hearts.length)],
      size: randomBetween(14, 28),
      duration: randomBetween(0.8, 1.6),
      delay: randomBetween(0, 0.3),
      scale: randomBetween(0.8, 1.8),
      rot: randomBetween(-60, 60),
    }
  })
}

export default function HugAnimation({ onHugComplete }) {
  const [phase, setPhase] = useState('idle') // idle | hugging | done
  const [particles, setParticles] = useState([])

  const doHug = useCallback(() => {
    if (phase !== 'idle') return
    setPhase('hugging')
    setParticles(generateBurstParticles(55))

    setTimeout(() => {
      setPhase('done')
      onHugComplete?.()
    }, 1800)
  }, [phase, onHugComplete])

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
      {/* The hug button */}
      <AnimatePresence mode="wait">
        {phase === 'idle' && (
          <motion.button
            key="hug-btn"
            id="hug-button"
            onClick={doHug}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.94 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '1rem 2.5rem',
              minHeight: '58px',
              background: 'linear-gradient(135deg, rgba(232, 67, 106, 0.22), rgba(232, 67, 106, 0.08))',
              border: '1px solid rgba(232, 67, 106, 0.5)',
              borderRadius: '50px',
              color: 'var(--text-primary)',
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-md)',
              fontWeight: 500,
              cursor: 'pointer',
              boxShadow: '0 0 25px rgba(232, 67, 106, 0.25), 0 0 50px rgba(232, 67, 106, 0.1)',
            }}
            aria-label="Give a virtual hug"
          >
            <span style={{ fontSize: '1.4rem' }}>🫂</span>
            Give me a hug
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hug in progress — expanding heart + particles */}
      <AnimatePresence>
        {phase === 'hugging' && (
          <motion.div
            key="hug-burst"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            {/* Screen bloom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.18, 0] }}
              transition={{ duration: 1.8, times: [0, 0.3, 1] }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(232, 67, 106, 0.35) 0%, transparent 70%)',
              }}
            />

            {/* Central heart */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.6, 1.2, 1],
                opacity: [0, 1, 1, 1],
                filter: [
                  'blur(8px)',
                  'blur(0px)',
                  'blur(0px)',
                  'blur(0px)',
                ],
              }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              style={{
                fontSize: 'clamp(4rem, 15vw, 7rem)',
                zIndex: 1,
                filter: 'drop-shadow(0 0 30px rgba(232, 67, 106, 0.9)) drop-shadow(0 0 60px rgba(232, 67, 106, 0.5))',
              }}
              aria-hidden="true"
            >
              ❤
            </motion.div>

            {/* Burst particles */}
            {particles.map((p) => (
              <div
                key={p.id}
                className="hug-heart"
                aria-hidden="true"
                style={{
                  '--tx': `${p.tx}px`,
                  '--ty': `${p.ty}px`,
                  '--dur': `${p.duration}s`,
                  '--delay': `${p.delay}s`,
                  '--scale': p.scale,
                  '--rot': `${p.rot}deg`,
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  fontSize: `${p.size}px`,
                  lineHeight: 1,
                }}
              >
                {p.glyph}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
