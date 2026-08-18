import { motion } from 'framer-motion'
import GlowButton from '../components/GlowButton'
import { loveConfig } from '../config'

const { nickname } = loveConfig

function ApologyLine({ children, delay, style = {}, className = '' }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
      style={style}
    >
      {children}
    </motion.p>
  )
}

export default function Apology({ onNext }) {
  return (
    <section className="scene" aria-label="The Apology — Scene 5">
      <div
        style={{
          maxWidth: '520px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(1.4rem, 3.5vw, 2.2rem)',
        }}
      >
        {/* Soft heart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            fontSize: 'clamp(1.6rem, 5vw, 2.4rem)',
            filter: 'drop-shadow(0 0 12px rgba(232, 67, 106, 0.65))',
          }}
          aria-hidden="true"
        >
          ❤
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display glow-text"
          style={{
            fontSize: 'var(--text-hero)',
            color: 'var(--text-primary)',
            fontStyle: 'italic',
            letterSpacing: '-0.01em',
            textAlign: 'center',
            lineHeight: 1.15,
          }}
        >
          I'm sorry, {nickname}.
        </motion.h2>

        {/* Apology lines */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'clamp(0.8rem, 2vw, 1.2rem)',
          }}
        >
          <ApologyLine
            delay={1.4}
            style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', textAlign: 'center', fontWeight: 300 }}
          >
            I'm sorry for scolding you.
          </ApologyLine>

          <ApologyLine
            delay={2.2}
            style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', textAlign: 'center', fontWeight: 300 }}
          >
            I'm sorry if I made you feel bad.
          </ApologyLine>

          <ApologyLine
            delay={3}
            style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', textAlign: 'center', fontWeight: 300, lineHeight: 1.7 }}
          >
            I'm sorry that my concern came out in a way that hurt you.
          </ApologyLine>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 4, duration: 0.8 }}
          style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(232, 67, 106, 0.5), transparent)',
          }}
        />

        <ApologyLine
          delay={4.5}
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--text-muted)',
            textAlign: 'center',
            fontWeight: 300,
            lineHeight: 1.9,
            fontStyle: 'italic',
          }}
        >
          I never want you to feel like my care for you is something
          you have to be uncomfortable with.
        </ApologyLine>

        <ApologyLine
          delay={5.4}
          style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', textAlign: 'center', fontWeight: 300, lineHeight: 1.7 }}
        >
          I can care about you without speaking harshly.
        </ApologyLine>

        <ApologyLine
          delay={6.2}
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--text-dim)',
            textAlign: 'center',
            fontStyle: 'italic',
            fontWeight: 300,
          }}
        >
          And that's something I want to do better.
        </ApologyLine>

        <ApologyLine
          delay={7}
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--text-muted)',
            textAlign: 'center',
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          You mean way too much to me for me to let a silly argument
          become something bigger than us.
        </ApologyLine>

        {/* Final emphasis */}
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 8, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display glow-text"
          style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--heart-soft)',
            fontStyle: 'italic',
            textAlign: 'center',
            letterSpacing: '-0.01em',
          }}
        >
          I'm sorry. ❤️
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 9.5, duration: 0.8 }}
        >
          <GlowButton
            id="apology-next-btn"
            onClick={onNext}
            size="md"
          >
            Continue →
          </GlowButton>
        </motion.div>
      </div>
    </section>
  )
}
