import { useState, useEffect, useRef, useCallback, useMemo } from 'react'

const HEARTS = ['❤', '🩷', '💗', '💖']

function FloatingHeart({ id, onDone }) {
  const props = useMemo(() => ({
    left: `${Math.random() * 85 + 5}%`,
    size: `${Math.random() * 12 + 10}px`,
    duration: Math.random() * 3 + 3.5,
    delay: Math.random() * 0.5,
    glyph: HEARTS[Math.floor(Math.random() * HEARTS.length)],
  }), [])

  useEffect(() => {
    const ms = (props.duration + props.delay) * 1000 + 200
    const timer = setTimeout(() => onDone(id), ms)
    return () => clearTimeout(timer)
  }, [id, props.duration, props.delay, onDone])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        bottom: '-40px',
        left: props.left,
        fontSize: props.size,
        zIndex: 5,
        pointerEvents: 'none',
        filter: 'drop-shadow(0 0 6px rgba(232, 67, 106, 0.7))',
        '--duration': `${props.duration}s`,
        '--delay': `${props.delay}s`,
        animation: `float-up ${props.duration}s ease-out ${props.delay}s forwards`,
        opacity: 0,
      }}
    >
      {props.glyph}
    </div>
  )
}

export default function FloatingHearts({ active = true }) {
  const [heartList, setHeartList] = useState([])
  const idRef = useRef(0)
  const timerRef = useRef(null)

  const removeHeart = useCallback((id) => {
    setHeartList(prev => prev.filter(h => h.id !== id))
  }, [])

  const spawnHeart = useCallback(() => {
    setHeartList(prev => {
      if (prev.length >= 6) return prev
      const id = idRef.current++
      return [...prev, { id }]
    })
  }, [])

  useEffect(() => {
    if (!active) return

    const scheduleNext = () => {
      const delay = Math.random() * 4000 + 3000
      timerRef.current = setTimeout(() => {
        spawnHeart()
        scheduleNext()
      }, delay)
    }

    timerRef.current = setTimeout(() => {
      spawnHeart()
      scheduleNext()
    }, 2000)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [active, spawnHeart])

  return (
    <>
      {heartList.map(h => (
        <FloatingHeart key={h.id} id={h.id} onDone={removeHeart} />
      ))}
    </>
  )
}
