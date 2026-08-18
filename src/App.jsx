import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import AmbientBackground from './components/AmbientBackground'
import FloatingHearts from './components/FloatingHearts'
import CursorGlow from './components/CursorGlow'
import MusicToggle from './components/MusicToggle'
import ProgressDots from './components/ProgressDots'

import Welcome from './scenes/Welcome'
import Confession from './scenes/Confession'
import Concern from './scenes/Concern'
import BabyMoment from './scenes/BabyMoment'
import Apology from './scenes/Apology'
import Forgiveness from './scenes/Forgiveness'
import Hug from './scenes/Hug'
import FinalMessage from './scenes/FinalMessage'

const SCENES = [
  Welcome,
  Confession,
  Concern,
  BabyMoment,
  Apology,
  Forgiveness,
  Hug,
  FinalMessage,
]

// Scene transition variants
const sceneVariants = {
  initial: { opacity: 0, y: 30, filter: 'blur(10px)', scale: 0.97 },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 },
  exit:    { opacity: 0, y: -20, filter: 'blur(8px)', scale: 0.98 },
}

const sceneTransition = {
  duration: 0.75,
  ease: [0.25, 0.46, 0.45, 0.94],
}

export default function App() {
  const [currentScene, setCurrentScene] = useState(0)
  const [musicPlaying, setMusicPlaying] = useState(false)

  const goNext = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setCurrentScene(prev => Math.min(prev + 1, SCENES.length - 1))
  }, [])

  const toggleMusic = useCallback(() => {
    setMusicPlaying(prev => !prev)
  }, [])

  const SceneComponent = SCENES[currentScene]
  const isLastScene = currentScene === SCENES.length - 1

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100dvh',
        overflow: 'hidden',
      }}
      role="main"
    >
      {/* Persistent ambient layer */}
      <AmbientBackground scene={currentScene} />

      {/* Floating decorations */}
      <FloatingHearts active />

      {/* Desktop cursor glow */}
      <CursorGlow />

      {/* Music toggle (top-right) */}
      <MusicToggle playing={musicPlaying} onToggle={toggleMusic} />

      {/* Progress dots (bottom-center) */}
      <ProgressDots current={currentScene} />

      {/* Scene router with cinematic transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene}
          variants={sceneVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={sceneTransition}
          style={{ position: 'relative', zIndex: 10 }}
        >
          <SceneComponent onNext={goNext} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
