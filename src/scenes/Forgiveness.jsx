import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlowButton from '../components/GlowButton'

export default function Forgiveness({ onNext }) {
  const [choice, setChoice] = useState(null) // null | 'yes' | 'little'

  const handleChoice = (c) => {
    setChoice(c)
  }

  return (
    <section className="scene" aria-label="Forgiveness — Scene 6">
      <div
        style={{
          maxWidth: '500px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(1.2rem, 3vw, 2rem)',
        }}
      >
        <AnimatePresence mode="wait">
          {choice === null && (
            <motion.div
              key="question"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'clamp(1.2rem, 3vw, 2rem)',
                width: '100%',
              }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--text-muted)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300,
                }}
              >
                So...
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.9, duration: 0.9 }}
                className="font-display glow-text"
                style={{
                  fontSize: 'var(--text-hero)',
                  color: 'var(--text-primary)',
                  fontStyle: 'italic',
                  letterSpacing: '-0.01em',
                  textAlign: 'center',
                  lineHeight: 1.2,
                }}
              >
                Are you still mad at me? 🥺
              </motion.h2>

              {/* Two buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  marginTop: '0.5rem',
                }}
              >
                <GlowButton
                  id="forgiveness-yes-btn"
                  onClick={() => handleChoice('yes')}
                  size="lg"
                  variant="secondary"
                  aria-label="Yes, I'm still mad"
                >
                  Yes 😤
                </GlowButton>
                <GlowButton
                  id="forgiveness-little-btn"
                  onClick={() => handleChoice('little')}
                  size="lg"
                  aria-label="A little bit mad"
                >
                  A little 🥺
                </GlowButton>
              </motion.div>
            </motion.div>
          )}

          {/* YES response */}
          {choice === 'yes' && (
            <motion.div
              key="yes-response"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'clamp(1rem, 2.5vw, 1.6rem)',
                textAlign: 'center',
              }}
            >
              <motion.div
                animate={{ rotate: [-3, 3, -3, 0] }}
                transition={{ duration: 1.5, delay: 0.3 }}
                style={{ fontSize: 'clamp(2.5rem, 7vw, 3.5rem)' }}
                aria-hidden="true"
              >
                🥺
              </motion.div>

              <p
                className="font-display"
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--text-primary)',
                  fontStyle: 'italic',
                }}
              >
                Okay. 🥺
              </p>

              <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.7 }}>
                I understand.
              </p>

              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.8, fontStyle: 'italic' }}>
                You don't have to stop being angry just because I said sorry.
              </p>

              <p style={{ fontSize: 'var(--text-md)', color: 'var(--heart-soft)', fontWeight: 400 }}>
                Take your time.
              </p>

              <GlowButton
                id="forgiveness-wait-btn"
                onClick={onNext}
                size="md"
                aria-label="I'll wait for you"
              >
                I'll wait for you →
              </GlowButton>
            </motion.div>
          )}

          {/* A LITTLE response */}
          {choice === 'little' && (
            <motion.div
              key="little-response"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'clamp(1rem, 2.5vw, 1.6rem)',
                textAlign: 'center',
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.12, 1], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 1.2, delay: 0.2 }}
                style={{ fontSize: 'clamp(2.5rem, 7vw, 3.5rem)' }}
                aria-hidden="true"
              >
                🫂
              </motion.div>

              <p
                className="font-display glow-text"
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--heart-soft)',
                  fontStyle: 'italic',
                }}
              >
                Come here then. 🫂
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <GlowButton
                  id="forgiveness-come-btn"
                  onClick={onNext}
                  size="md"
                >
                  Continue →
                </GlowButton>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
