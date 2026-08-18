import { motion } from 'framer-motion'

/**
 * TextReveal — staggers children text elements with a beautiful fade-up reveal
 *
 * Props:
 *  - lines: string[] OR ReactNode[]  (each line gets its own animation)
 *  - delay: number (initial delay before first line, seconds)
 *  - stagger: number (delay between each line, seconds)
 *  - className: string
 */
export default function TextReveal({
  lines = [],
  delay = 0.2,
  stagger = 0.45,
  className = '',
  lineClassName = '',
}) {
  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  }

  const lineVariant = {
    hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {lines.map((line, i) => (
        <motion.div key={i} variants={lineVariant} className={lineClassName}>
          {line}
        </motion.div>
      ))}
    </motion.div>
  )
}
