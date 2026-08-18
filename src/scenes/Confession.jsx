import { motion } from 'framer-motion'
import TextReveal from '../components/TextReveal'
import GlowButton from '../components/GlowButton'
import { loveConfig } from '../config'

const { apologyTopic } = loveConfig

// Comedic wiggle animation
function ComedyIcon() {
  return (
    <motion.div
      animate={{
        rotate: [-5, 5, -5, 5, 0],
        scale: [1, 1.1, 1, 1.1, 1],
      }}
      transition={{ duration: 1.5, delay: 3, repeat: 2, repeatDelay: 2 }}
      style={{
        fontSize: 'clamp(2rem, 6vw, 3rem)',
        display: 'inline-block',
        marginBottom: '1rem',
      }}
      aria-hidden="true"
    >
      😭
    </motion.div>
  )
}

export default function Confession({ onNext }) {
  return (
    <section className="scene" aria-label="Confession — Scene 2">
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <TextReveal
          delay={0.3}
          stagger={0.55}
          className="flex flex-col items-center gap-5"
          lines={[
            <p
              key="ok"
              className="font-display"
              style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
              }}
            >
              Okay...
            </p>,

            <h2
              key="h"
              className="font-display glow-text"
              style={{
                fontSize: 'var(--text-hero)',
                color: 'var(--text-primary)',
                fontStyle: 'italic',
                letterSpacing: '-0.01em',
                lineHeight: 1.15,
              }}
            >
              I scolded you.
            </h2>,

            <p
              key="p1"
              style={{
                fontSize: 'var(--text-md)',
                color: 'var(--text-muted)',
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              And I know I could've handled it much better.
            </p>,

            <div key="comic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <ComedyIcon />
              <p
                style={{
                  fontSize: 'var(--text-md)',
                  color: 'var(--text-muted)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                }}
              >
                You were just {apologyTopic}...
              </p>
              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-dim)',
                  fontStyle: 'italic',
                }}
              >
                ...and somehow I turned into your personal attendance department. 😭
              </p>
            </div>,

            <p
              key="p2"
              className="font-display"
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--heart-soft)',
                fontStyle: 'italic',
                marginTop: '0.5rem',
              }}
            >
              But there was something behind all of that.
            </p>,

            <motion.div
              key="btn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5, duration: 0.8 }}
              style={{ marginTop: '1rem' }}
            >
              <GlowButton
                id="confession-next-btn"
                onClick={onNext}
                size="md"
                aria-label="Tell me what was behind it"
              >
                Tell me what was behind it →
              </GlowButton>
            </motion.div>,
          ]}
        />
      </div>
    </section>
  )
}
