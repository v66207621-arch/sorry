import { motion } from 'framer-motion'
import GlowButton from '../components/GlowButton'
import { loveConfig } from '../config'

const { apologyTopic } = loveConfig

function EmotionalLine({ children, delay, style, className }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ delay, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
      style={style}
    >
      {children}
    </motion.p>
  )
}

export default function Concern({ onNext }) {
  return (
    <section className="scene" aria-label="The Real Reason — Scene 3">
      <div
        style={{
          maxWidth: '560px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(1.2rem, 3vw, 2rem)',
        }}
      >
        {/* Soft glowing heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            filter: 'drop-shadow(0 0 15px rgba(232, 67, 106, 0.7)) drop-shadow(0 0 35px rgba(232, 67, 106, 0.3))',
            marginBottom: '0.5rem',
          }}
          aria-hidden="true"
        >
          ❤
        </motion.div>

        <EmotionalLine
          delay={0.5}
          style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', fontWeight: 300, textAlign: 'center', lineHeight: 1.7 }}
        >
          I wasn't angry because I wanted to control you.
        </EmotionalLine>

        <EmotionalLine
          delay={1.2}
          style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', fontWeight: 300, textAlign: 'center', lineHeight: 1.7 }}
        >
          I wasn't trying to tell you how to live your life.
        </EmotionalLine>

        <EmotionalLine
          delay={2}
          className="font-display"
          style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--heart-soft)',
            fontStyle: 'italic',
            textAlign: 'center',
            lineHeight: 1.3,
          }}
        >
          I was worried about you.
        </EmotionalLine>

        {/* Pause — bigger emphasis */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 3, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            padding: 'clamp(0.8rem, 2vw, 1.2rem) clamp(1.5rem, 4vw, 2.5rem)',
            border: '1px solid rgba(232, 67, 106, 0.25)',
            borderRadius: '16px',
            background: 'rgba(232, 67, 106, 0.05)',
            textAlign: 'center',
          }}
        >
          <p
            className="font-display"
            style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--text-primary)',
              fontStyle: 'italic',
              fontWeight: 600,
            }}
          >
            I care about you. A lot.
          </p>
        </motion.div>

        <EmotionalLine
          delay={4}
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--text-muted)',
            fontWeight: 300,
            textAlign: 'center',
            lineHeight: 1.8,
            fontStyle: 'italic',
          }}
        >
          When I saw you {apologyTopic},{' '}
          my concern came out as anger.
        </EmotionalLine>

        <EmotionalLine
          delay={5}
          style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', fontWeight: 300, textAlign: 'center', lineHeight: 1.8 }}
        >
          And instead of saying{' '}
          <em style={{ color: 'var(--heart-soft)' }}>"I'm worried about you..."</em>
        </EmotionalLine>

        <EmotionalLine
          delay={5.8}
          style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.7 }}
        >
          I ended up scolding you. 🥲
        </EmotionalLine>

        {/* Emphasis */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 6.6, duration: 0.9 }}
          style={{
            fontSize: 'var(--text-lg)',
            color: 'rgba(255, 180, 180, 0.9)',
            textAlign: 'center',
            fontWeight: 500,
          }}
        >
          That doesn't make it okay.
        </motion.p>

        <EmotionalLine
          delay={7.4}
          style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', textAlign: 'center', fontStyle: 'italic', fontWeight: 300 }}
        >
          I should have communicated my concern better.
        </EmotionalLine>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 8.5, duration: 0.8 }}
          style={{ marginTop: '0.5rem' }}
        >
          <GlowButton
            id="concern-next-btn"
            onClick={onNext}
            size="md"
            aria-label="Okay, keep going"
          >
            Okay... keep going 🥺
          </GlowButton>
        </motion.div>
      </div>
    </section>
  )
}
