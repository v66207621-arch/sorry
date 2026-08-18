import { motion } from 'framer-motion'
import HeartBurst from '../components/HeartBurst'
import { loveConfig } from '../config'

const { nickname, myName, couplePhotoSrc } = loveConfig


export default function FinalMessage() {
  return (
    <section className="scene" aria-label="Final Love Letter — Scene 8">
      <div
        style={{
          maxWidth: '560px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(1.2rem, 3vw, 2rem)',
          textAlign: 'center',
        }}
      >
        {/* One last thing */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-display"
          style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--text-muted)',
            fontStyle: 'italic',
            letterSpacing: '-0.01em',
          }}
        >
          One last thing...
        </motion.p>

        {/* Letter body */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'clamp(0.8rem, 2vw, 1.2rem)',
          }}
        >
          {[
            { text: "I know I don't always say things perfectly.", delay: 1 },
            { text: "Sometimes I worry too much.", delay: 1.7 },
            { text: "Sometimes I say things the wrong way.", delay: 2.4 },
            { text: "But never doubt that you matter to me.", delay: 3.3, highlight: true },
          ].map(({ text, delay, highlight }) => (
            <motion.p
              key={text}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay, duration: 0.9 }}
              style={{
                fontSize: 'var(--text-sm)',
                color: highlight ? 'var(--heart-soft)' : 'var(--text-muted)',
                fontWeight: highlight ? 500 : 300,
                fontStyle: highlight ? 'italic' : 'normal',
                lineHeight: 1.7,
              }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Second paragraph */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'clamp(0.6rem, 1.5vw, 0.9rem)',
            padding: 'clamp(1rem, 3vw, 1.5rem)',
            border: '1px solid rgba(232, 67, 106, 0.12)',
            borderRadius: '16px',
            background: 'rgba(232, 67, 106, 0.03)',
          }}
        >
          {[
            { text: "I care about you.", delay: 4.2 },
            { text: "I worry about you.", delay: 4.8 },
            { text: "I want you to be happy.", delay: 5.4 },
            { text: "And I want to learn how to love you better.", delay: 6.1 },
          ].map(({ text, delay }) => (
            <motion.p
              key={text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay, duration: 0.8 }}
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-muted)',
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* THE BIG LINE */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 7, duration: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display glow-text"
          style={{
            fontSize: 'var(--text-hero)',
            color: 'var(--text-primary)',
            fontStyle: 'italic',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
          }}
        >
          I love you, {nickname}. ❤️
        </motion.h2>

        {/* Optional couple photo */}
        {couplePhotoSrc && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 7.8, duration: 1.2 }}
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(232, 67, 106, 0.2)',
              boxShadow:
                '0 0 30px rgba(232, 67, 106, 0.15), 0 0 60px rgba(232, 67, 106, 0.08), 0 20px 60px rgba(0,0,0,0.6)',
              maxWidth: '320px',
              width: '100%',
            }}
          >
            <img
              src={couplePhotoSrc}
              alt="Us"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </motion.div>
        )}

        {/* Closing lines */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 8.2, duration: 0.9 }}
          style={{
            fontSize: 'var(--text-md)',
            color: 'var(--text-muted)',
            fontWeight: 300,
            fontStyle: 'italic',
          }}
        >
          Now please stop being angry with me. 🥺
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 9, duration: 0.8 }}
          style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--text-dim)',
            fontStyle: 'italic',
          }}
        >
          ...or at least reduce the punishment. 😭
        </motion.p>

        {/* Final heart burst button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 9.8, duration: 0.9 }}
          style={{ marginTop: '0.5rem' }}
        >
          <HeartBurst />
        </motion.div>

        {/* Signature */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 11, duration: 1 }}
          style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--text-dim)',
            fontStyle: 'italic',
            marginTop: '1rem',
          }}
        >
          — with love, {myName} 💕
        </motion.p>
      </div>
    </section>
  )
}
