import { useState } from 'react'
import { motion } from 'framer-motion'
import TextReveal from '../components/TextReveal'
import AngerMeter from '../components/AngerMeter'
import GlowButton from '../components/GlowButton'
import { loveConfig } from '../config'

const { nickname } = loveConfig

function BabyHeart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -15 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 3, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      className="animate-heartbeat"
      style={{
        fontSize: 'clamp(3rem, 9vw, 5rem)',
        filter: 'drop-shadow(0 0 15px rgba(232, 67, 106, 0.7))',
        marginBottom: '1rem',
      }}
      aria-hidden="true"
    >
      🥺
    </motion.div>
  )
}

export default function BabyMoment({ onNext }) {
  const [angerLevel, setAngerLevel] = useState(0)
  const [sliderShown, setSliderShown] = useState(false)

  return (
    <section className="scene" aria-label="Baby Moment — Scene 4">
      <div
        style={{
          maxWidth: '580px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(1rem, 2.5vw, 1.8rem)',
        }}
      >
        <TextReveal
          delay={0.2}
          stagger={0.55}
          className="flex flex-col items-center"
          lineClassName=""
          lines={[
            <h2
              key="h"
              className="font-display glow-text"
              style={{
                fontSize: 'var(--text-hero)',
                color: 'var(--text-primary)',
                fontStyle: 'italic',
                letterSpacing: '-0.01em',
                marginBottom: '0.25rem',
              }}
            >
              Because you're my little {nickname}...
            </h2>,

            <p
              key="p1"
              style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', fontWeight: 300 }}
            >
              ...and apparently my little {nickname} deserves a proper apology. 🥺
            </p>,
          ]}
        />

        {/* Bullets */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            padding: 'clamp(0.8rem, 2vw, 1.2rem) clamp(1.5rem, 4vw, 2rem)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.02)',
          }}
        >
          {['Not a lecture.', 'Not a scolding.', 'Not an attendance audit.', 'An actual apology. 😭'].map(
            (line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 + i * 0.35, duration: 0.6 }}
                style={{
                  fontSize: 'var(--text-sm)',
                  color: i === 3 ? 'var(--heart-soft)' : 'var(--text-muted)',
                  fontStyle: i === 3 ? 'italic' : 'normal',
                  fontWeight: i === 3 ? 500 : 300,
                }}
              >
                {line}
              </motion.p>
            )
          )}
        </motion.div>

        <BabyHeart />

        {/* Anger Meter intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.2, duration: 0.8 }}
          onAnimationComplete={() => setSliderShown(true)}
          style={{ width: '100%', textAlign: 'center' }}
        >
          <p
            className="font-display"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-primary)',
              fontStyle: 'italic',
              marginBottom: '1.5rem',
            }}
          >
            But first... how angry are you?
          </p>

          {sliderShown && (
            <AngerMeter onAngerChange={setAngerLevel} />
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.5, duration: 0.8 }}
          style={{ marginTop: '0.5rem' }}
        >
          <GlowButton
            id="baby-next-btn"
            onClick={onNext}
            size="md"
            aria-label="Continue to the apology"
          >
            Okay, continue →
          </GlowButton>
        </motion.div>
      </div>
    </section>
  )
}
