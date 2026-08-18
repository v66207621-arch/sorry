import { motion } from 'framer-motion'
import TextReveal from '../components/TextReveal'
import GlowButton from '../components/GlowButton'
import { loveConfig } from '../config'

const { nickname } = loveConfig

// A glowing central heart that pulses
function CenterHeart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
      className="animate-heartbeat"
      style={{
        fontSize: 'clamp(2.5rem, 8vw, 4rem)',
        filter: 'drop-shadow(0 0 20px rgba(232, 67, 106, 0.9)) drop-shadow(0 0 50px rgba(232, 67, 106, 0.5))',
        marginBottom: '2.5rem',
      }}
      aria-hidden="true"
    >
      ❤
    </motion.div>
  )
}

export default function Welcome({ onNext }) {
  return (
    <section
      className="scene"
      aria-label="Welcome — Scene 1"
      style={{ gap: 0 }}
    >
      <CenterHeart />

      <TextReveal
        delay={1}
        stagger={0.6}
        className="flex flex-col items-center gap-5"
        lineClassName=""
        lines={[
          <h1
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
            Hey, {nickname}... 🥺
          </h1>,

          <p
            key="p1"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-muted)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.01em',
            }}
          >
            I know you're a little angry with me.
          </p>,

          <p
            key="p2"
            style={{
              fontSize: 'var(--text-md)',
              color: 'var(--text-muted)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontStyle: 'italic',
            }}
          >
            And honestly...
          </p>,

          <p
            key="p3"
            className="font-display"
            style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--heart-soft)',
              fontStyle: 'italic',
              letterSpacing: '-0.01em',
            }}
          >
            I deserve that.
          </p>,

          <motion.div
            key="btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            style={{ marginTop: '1.5rem' }}
          >
            <GlowButton
              id="welcome-next-btn"
              onClick={onNext}
              size="lg"
              aria-label="Come here — continue to Scene 2"
            >
              Come here →
            </GlowButton>
          </motion.div>,
        ]}
      />
    </section>
  )
}
