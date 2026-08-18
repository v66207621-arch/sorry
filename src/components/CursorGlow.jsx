import { useEffect, useRef } from 'react'

// Desktop-only cursor follower: a tiny glowing heart
export default function CursorGlow() {
  const dotRef = useRef(null)
  const posRef = useRef({ x: -100, y: -100 })
  const currentRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef(null)

  useEffect(() => {
    // Skip on touch devices
    const isTouch = window.matchMedia('(hover: none)').matches
    if (isTouch) return

    const el = dotRef.current
    if (!el) return

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }

    // Smooth lerp follow
    const lerp = (a, b, t) => a + (b - a) * t
    const animate = () => {
      currentRef.current.x = lerp(currentRef.current.x, posRef.current.x, 0.12)
      currentRef.current.y = lerp(currentRef.current.y, posRef.current.y, 0.12)
      if (el) {
        el.style.transform = `translate(${currentRef.current.x - 8}px, ${currentRef.current.y - 8}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        width: '16px',
        height: '16px',
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        filter: 'drop-shadow(0 0 6px rgba(232, 67, 106, 0.9)) drop-shadow(0 0 12px rgba(232, 67, 106, 0.5))',
        opacity: 0.8,
        userSelect: 'none',
        willChange: 'transform',
      }}
    >
      ♥
    </div>
  )
}
