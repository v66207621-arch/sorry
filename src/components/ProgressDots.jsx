import { motion } from 'framer-motion'

const TOTAL_SCENES = 8

export default function ProgressDots({ current = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9997,
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        pointerEvents: 'none',
      }}
      aria-label={`Scene ${current + 1} of ${TOTAL_SCENES}`}
      role="progressbar"
      aria-valuenow={current + 1}
      aria-valuemin={1}
      aria-valuemax={TOTAL_SCENES}
    >
      {Array.from({ length: TOTAL_SCENES }).map((_, i) => (
        <motion.div
          key={i}
          className={`progress-dot ${i === current ? 'active' : ''}`}
          animate={{
            width: i === current ? '18px' : '6px',
            opacity: i === current ? 1 : i < current ? 0.4 : 0.15,
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      ))}
    </motion.div>
  )
}
