import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function randomBetween(a, b) {
  return a + Math.random() * (b - a)
}

function generateBurst(count = 80) {
  const glyphs = ['❤', '🩷', '💗', '💖', '✨', '💫', '⭐', '🌸']
  return Array.from({ length: count }, (_, i) => {
    const angle = (Math.PI * 2 * i) / count + randomBetween(-0.5, 0.5)
    const distance = randomBetween(60, 300)
    return {
      id: i,
      tx: Math.cos(angle) * distance,
      ty: Math.sin(angle) * distance - randomBetween(0, 100),
      glyph: glyphs[Math.floor(Math.random() * glyphs.length)],
      size: randomBetween(12, 26),
      duration: randomBetween(0.9, 1.8),
      delay: randomBetween(0, 0.4),
      scale: randomBetween(0.6, 1.6),
      rot: randomBetween(-90, 90),
    }
  })
}

export default function HeartBurst({ onBurst }) {
  const [bursting, setBursting] = useState(false)
  const [particles, setParticles] = useState([])
  const [done, setDone] = useState(false)

  const trigger = useCallback(() => {
    if (bursting || done) return
    setBursting(true)
    setParticles(generateBurst(80))
    setTimeout(() => {
      setBursting(false)
      setDone(true)
      onBurst?.()
    }, 2200)
  }, [bursting, done, onBurst])

  return (
    <div style={{ position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Trigger button */}
      <AnimatePresence>
        {!done && (
          <motion.button
            id="heart-burst-btn"
            onClick={trigger}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.94 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '1rem 2.5rem',
              minHeight: '58px',
              background: 'linear-gradient(135deg, rgba(232, 67, 106, 0.25), rgba(232, 67, 106, 0.10))',
              border: '1px solid rgba(232, 67, 106, 0.55)',
              borderRadius: '50px',
              color: 'var(--text-primary)',
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-md)',
              fontWeight: 500,
              cursor: 'pointer',
              boxShadow: '0 0 30px rgba(232, 67, 106, 0.3), 0 0 60px rgba(232, 67, 106, 0.12)',
            }}
            aria-label="Okay, come here — trigger heart burst"
          >
            <span style={{ fontSize: '1.2rem' }}>🫂</span>
            Okay, come here
          </motion.button>
        )}
      </AnimatePresence>

      {/* Final state message */}
      <AnimatePresence>
        {done && (
          <motion.div
            key="final-msg"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1rem' }}>
              ❤
            </div>
            <p
              className="font-display glow-text"
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-primary)',
                fontStyle: 'italic',
              }}
            >
              You are officially entitled to one very long hug.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Burst overlay */}
      <AnimatePresence>
        {bursting && (
          <motion.div
            key="burst"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            {/* Bloom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.22, 0] }}
              transition={{ duration: 2.2, times: [0, 0.25, 1] }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(232, 67, 106, 0.4) 0%, transparent 70%)',
              }}
            />

            {/* Particles */}
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
