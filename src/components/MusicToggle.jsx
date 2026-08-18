import { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MusicToggle({ playing, onToggle }) {
  const audioRef = useRef(null)

  useEffect(() => {
    if (!audioRef.current) {
      // Try to create audio element with the optional music file
      try {
        const audio = new Audio('/music.mp3')
        audio.loop = true
        audio.volume = 0.4
        audioRef.current = audio
      } catch (e) {
        // No audio available — that's fine
      }
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.play().catch(() => {
        // Autoplay blocked or file missing — silently ignore
      })
    } else {
      audio.pause()
    }
  }, [playing])

  return (
    <motion.button
      id="music-toggle"
      onClick={onToggle}
      aria-label={playing ? 'Pause music' : 'Play music'}
      aria-pressed={playing}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 9998,
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0.45rem 0.85rem',
        background: 'rgba(8, 6, 10, 0.8)',
        border: '1px solid rgba(232, 67, 106, 0.25)',
        borderRadius: '50px',
        color: 'var(--text-muted)',
        fontSize: '0.75rem',
        fontFamily: 'Inter, sans-serif',
        cursor: 'pointer',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'all 0.3s ease',
        minHeight: '36px',
      }}
      whileHover={{ borderColor: 'rgba(232, 67, 106, 0.5)', color: 'var(--text-primary)' }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {playing ? (
          <motion.div
            key="playing"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="music-wave"
            style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '16px' }}
            aria-hidden="true"
          >
            <span style={{ height: '6px' }} />
            <span style={{ height: '14px' }} />
            <span style={{ height: '10px' }} />
            <span style={{ height: '16px' }} />
          </motion.div>
        ) : (
          <motion.span
            key="paused"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{ fontSize: '14px' }}
            aria-hidden="true"
          >
            ♫
          </motion.span>
        )}
      </AnimatePresence>
      <span style={{ fontSize: '0.7rem', letterSpacing: '0.03em' }}>
        {playing ? 'on' : 'music'}
      </span>
    </motion.button>
  )
}
