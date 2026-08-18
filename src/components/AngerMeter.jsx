import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ANGER_LEVELS = [
  {
    emoji: '🥺',
    label: 'Not really',
    response: "Wait... am I getting forgiven already? 👀",
    sub: "That was fast. I'm not complaining.",
    color: 'rgba(180, 120, 220, 0.7)',
  },
  {
    emoji: '😐',
    label: 'A little',
    response: "Okay okay... I understand. I'll behave. 🥺",
    sub: "I accept the silent treatment tax.",
    color: 'rgba(232, 67, 106, 0.7)',
  },
  {
    emoji: '😤',
    label: 'Quite angry',
    response: "Fair. I genuinely messed up. I get it. 🫣",
    sub: "Accepting full responsibility. No arguments.",
    color: 'rgba(220, 80, 80, 0.85)',
  },
  {
    emoji: '😡',
    label: 'VERY angry',
    response: "I have made a terrible mistake. 💀",
    sub: "I will now stare at the ceiling and reflect on my choices.",
    color: 'rgba(200, 50, 50, 0.9)',
  },
]

export default function AngerMeter({ onAngerChange }) {
  const [value, setValue] = useState(0)

  const levelIndex = Math.round((value / 100) * 3)
  const level = ANGER_LEVELS[levelIndex]

  const handleChange = useCallback((e) => {
    const v = parseInt(e.target.value, 10)
    setValue(v)
    onAngerChange?.(levelIndex)
  }, [levelIndex, onAngerChange])

  return (
    <div style={{ width: '100%', maxWidth: '420px', margin: '0 auto' }}>
      {/* Current level display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={levelIndex}
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.95 }}
          transition={{ duration: 0.35 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <div style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', marginBottom: '0.5rem' }}>
            {level.emoji}
          </div>
          <p
            className="font-display"
            style={{
              fontSize: 'var(--text-lg)',
              color: level.color,
              marginBottom: '0.4rem',
              fontStyle: 'italic',
            }}
          >
            {level.response}
          </p>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
            {level.sub}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Slider */}
      <div style={{ position: 'relative', padding: '0.5rem 0' }}>
        <input
          id="anger-slider"
          type="range"
          min="0"
          max="100"
          step="1"
          value={value}
          onChange={handleChange}
          className="anger-slider"
          aria-label="How angry are you?"
          aria-valuetext={level.label}
        />
      </div>

      {/* Labels */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '0.75rem',
        }}
      >
        {ANGER_LEVELS.map((l, i) => (
          <motion.button
            key={i}
            onClick={() => {
              const v = Math.round((i / 3) * 100)
              setValue(v)
              onAngerChange?.(i)
            }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.2rem',
              padding: '0.25rem',
              borderRadius: '8px',
              transition: 'opacity 0.2s',
              opacity: levelIndex === i ? 1 : 0.4,
            }}
            whileHover={{ opacity: 0.9, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Set anger to: ${l.label}`}
          >
            <span style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)' }}>{l.emoji}</span>
            <span style={{ fontSize: '0.6rem', color: 'var(--text-dim)', whiteSpace: 'nowrap' }}>
              {l.label}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
