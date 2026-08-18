import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HugAnimation from '../components/HugAnimation'

export default function Hug({ onNext }) {
  const [phase, setPhase] = useState('intro') // intro | hug | afterhug

  const handleHugComplete = () => {
    setPhase('afterhug')
    setTimeout(() => onNext(), 3500)
  }

  return (
    <section className="scene" aria-label="The Hug — Scene 7">
      <div
        style={{
          maxWidth: '520px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(1.2rem, 3vw, 2rem)',
          textAlign: 'center',
        }}
      >
        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'clamp(1.2rem, 3vw, 2rem)',
              }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.9 }}
                className="font-display"
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--text-primary)',
                  fontStyle: 'italic',
                  letterSpacing: '-0.01em',
                }}
              >
                I wish I could just hug you right now.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.9 }}
                style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', fontWeight: 300 }}
              >
                Since I can't teleport...
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                <HugAnimation onHugComplete={handleHugComplete} />
              </motion.div>
            </motion.div>
          )}

          {phase === 'afterhug' && (
            <motion.div
              key="afterhug"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'clamp(1rem, 2.5vw, 1.5rem)',
              }}
            >
              {/* Warm glowing state */}
              <motion.div
                animate={{
                  filter: [
                    'drop-shadow(0 0 20px rgba(232, 67, 106, 0.5))',
                    'drop-shadow(0 0 40px rgba(232, 67, 106, 0.9))',
                    'drop-shadow(0 0 25px rgba(232, 67, 106, 0.6))',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                style={{ fontSize: 'clamp(3rem, 10vw, 5rem)' }}
                aria-hidden="true"
              >
                ❤
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.9 }}
                className="font-display glow-text"
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--text-primary)',
                  fontStyle: 'italic',
                }}
              >
                Hug received. ❤️
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', fontWeight: 300 }}
              >
                Don't let go yet.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-dim)',
                  fontStyle: 'italic',
                }}
              >
                Okay... maybe a little longer.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
